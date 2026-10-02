import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, relative, sep, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('./', import.meta.url));
const web = resolve(root, 'www');
const config = JSON.parse(await readFile(resolve(root, 'capacitor.config.json'), 'utf8'));
if (config.server?.url || config.server?.allowNavigation?.length || config.webDir !== 'www') {
  throw new Error('Release app must use the bundled UI without remote navigation');
}
const manifest = JSON.parse(await readFile(resolve(web, 'bundle-manifest.json'), 'utf8'));
if (manifest.format !== 1 || manifest.apiOrigin !== 'https://app.skladzilla.pro' || !manifest.files['index.html']) {
  throw new Error('Invalid bundle manifest. Run the publisher or npm run build:terminal:ios in the main project.');
}
for (const [name, hash] of Object.entries(manifest.files)) {
  const path = resolve(web, name);
  const rel = relative(web, path);
  if (isAbsolute(rel) || rel === '..' || rel.startsWith(`..${sep}`)) throw new Error('Unsafe asset path');
  if (createHash('sha256').update(await readFile(path)).digest('hex') !== hash) throw new Error(`Asset changed or missing: ${name}`);
}
async function checkFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error('Linked asset is not allowed');
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) await checkFiles(path);
    else {
      const name = relative(web, path).split(sep).join('/');
      if (name !== 'bundle-manifest.json' && !manifest.files[name]) throw new Error(`Untracked asset: ${name}`);
    }
  }
}
await checkFiles(web);
const html = await readFile(resolve(web, 'index.html'), 'utf8');
if (!/<script[^>]+src="\.\/assets\//.test(html) || /http-equiv=["']refresh/i.test(html)) throw new Error('Missing bundled entry point');
const p = manifest.privacy;
const policyReady = p?.status === 'approved' && p.operator?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.contactEmail || '') && p.retention?.trim();
if (process.argv.includes('--release') && !policyReady) throw new Error('App Review blocked: complete and approve operator, contact email and retention in src/config/terminalPrivacy.json, then rebuild.');
console.log(`Verified ${Object.keys(manifest.files).length} bundled assets. Privacy: ${policyReady ? 'approved' : 'DRAFT — not ready for App Review'}.`);
