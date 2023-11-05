// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function f(f,o,r){var a,t,e,i,n,u,c,d,l,p,s,v,x,b,g,h,j,k,m,q,w,y,z,A;if(a=o[3],t=o[2],e=o[1],i=o[0],!(a<=0||t<=0||e<=0||i<=0))for(w=f[0],y=f[1],z=f[2],A=f[3],d=0;d<i;d++)for(j=w[d],k=y[d],m=z[d],q=A[d],c=0;c<e;c++)for(x=j[c],b=k[c],g=m[c],h=q[c],u=0;u<t;u++)for(l=x[u],p=b[u],s=g[u],v=h[u],n=0;n<a;n++)v[n]=r(l[n],p[n],s[n])}export{f as default};
//# sourceMappingURL=mod.js.map
