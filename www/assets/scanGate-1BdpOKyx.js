function s({windowMs:a=800,now:c=()=>Date.now()}={}){let e="",r=0;return{accept(o){const t=String(o??"").trim();if(!t)return!1;const n=c();return t===e&&n-r<a?!1:(e=t,r=n,!0)}}}export{s as c};
