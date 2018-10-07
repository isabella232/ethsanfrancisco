/* bignumber.js v7.2.1 https://github.com/MikeMcl/bignumber.js/LICENCE */
!function(e){"use strict";function r(e){function l(e,r){var n,t,i,s,f,u,c,h,p=this;if(!(p instanceof l))return new l(e,r);if(null==r){if(e instanceof l)return p.s=e.s,p.e=e.e,void(p.c=(e=e.c)?e.slice():e);if(u="number"==typeof e,u&&0*e==0){if(p.s=0>1/e?(e=-e,-1):1,e===~~e){for(s=0,f=e;f>=10;f/=10,s++);return p.e=s,void(p.c=[e])}h=e+""}else{if(!a.test(h=e+""))return _(p,h,u);p.s=45==h.charCodeAt(0)?(h=h.slice(1),-1):1}(s=h.indexOf("."))>-1&&(h=h.replace(".","")),(f=h.search(/e/i))>0?(0>s&&(s=f),s+=+h.slice(f+1),h=h.substring(0,f)):0>s&&(s=h.length)}else{if(o(r,2,q.length,"Base"),h=e+"",10==r)return p=new l(e instanceof l?e:h),R(p,B+p.e+1,U);if(u="number"==typeof e){if(0*e!=0)return _(p,h,u,r);if(p.s=0>1/e?(h=h.slice(1),-1):1,l.DEBUG&&h.replace(/^0\.0*|\./,"").length>15)throw Error(w+e);u=!1}else p.s=45===h.charCodeAt(0)?(h=h.slice(1),-1):1;for(n=q.slice(0,r),s=f=0,c=h.length;c>f;f++)if(n.indexOf(t=h.charAt(f))<0){if("."==t){if(f>s){s=c;continue}}else if(!i&&(h==h.toUpperCase()&&(h=h.toLowerCase())||h==h.toLowerCase()&&(h=h.toUpperCase()))){i=!0,f=-1,s=0;continue}return _(p,e+"",u,r)}h=P(h,r,10,p.s),(s=h.indexOf("."))>-1?h=h.replace(".",""):s=h.length}for(f=0;48===h.charCodeAt(f);f++);for(c=h.length;48===h.charCodeAt(--c););if(h=h.slice(f,++c)){if(c-=f,u&&l.DEBUG&&c>15&&(e>v||e!==g(e)))throw Error(w+p.s*e);if(s=s-f-1,s>C)p.c=p.e=null;else if(x>s)p.c=[p.e=0];else{if(p.e=s,p.c=[],f=(s+1)%m,0>s&&(f+=m),c>f){for(f&&p.c.push(+h.slice(0,f)),c-=m;c>f;)p.c.push(+h.slice(f,f+=m));h=h.slice(f),f=m-h.length}else f-=c;for(;f--;h+="0");p.c.push(+h)}}else p.c=[p.e=0]}function E(e,r,n,i){var s,f,a,h,g;if(null==n?n=U:o(n,0,8),!e.c)return e.toString();if(s=e.c[0],a=e.e,null==r)g=t(e.c),g=1==i||2==i&&I>=a?u(g,a):c(g,a,"0");else if(e=R(new l(e),r,n),f=e.e,g=t(e.c),h=g.length,1==i||2==i&&(f>=r||I>=f)){for(;r>h;g+="0",h++);g=u(g,f)}else if(r-=a,g=c(g,f,"0"),f+1>h){if(--r>0)for(g+=".";r--;g+="0");}else if(r+=f-h,r>0)for(f+1==h&&(g+=".");r--;g+="0");return e.s<0&&s?"-"+g:g}function b(e,r){var n,t,i=0;for(s(e[0])&&(e=e[0]),n=new l(e[0]);++i<e.length;){if(t=new l(e[i]),!t.s){n=t;break}r.call(n,t)&&(n=t)}return n}function A(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*m-1)>C?e.c=e.e=null:x>n?e.c=[e.e=0]:(e.e=n,e.c=r),e}function R(e,r,n,t){var i,o,s,f,u,c,l,a=e.c,p=O;if(a){e:{for(i=1,f=a[0];f>=10;f/=10,i++);if(o=r-i,0>o)o+=m,s=r,u=a[c=0],l=u/p[i-s-1]%10|0;else if(c=h((o+1)/m),c>=a.length){if(!t)break e;for(;a.length<=c;a.push(0));u=l=0,i=1,o%=m,s=o-m+1}else{for(u=f=a[c],i=1;f>=10;f/=10,i++);o%=m,s=o-m+i,l=0>s?0:u/p[i-s-1]%10|0}if(t=t||0>r||null!=a[c+1]||(0>s?u:u%p[i-s-1]),t=4>n?(l||t)&&(0==n||n==(e.s<0?3:2)):l>5||5==l&&(4==n||t||6==n&&(o>0?s>0?u/p[i-s]:0:a[c-1])%10&1||n==(e.s<0?8:7)),1>r||!a[0])return a.length=0,t?(r-=e.e+1,a[0]=p[(m-r%m)%m],e.e=-r||0):a[0]=e.e=0,e;if(0==o?(a.length=c,f=1,c--):(a.length=c+1,f=p[m-o],a[c]=s>0?g(u/p[i-s]%p[s])*f:0),t)for(;;){if(0==c){for(o=1,s=a[0];s>=10;s/=10,o++);for(s=a[0]+=f,f=1;s>=10;s/=10,f++);o!=f&&(e.e++,a[0]==d&&(a[0]=1));break}if(a[c]+=f,a[c]!=d)break;a[c--]=0,f=1}for(o=a.length;0===a[--o];a.pop());}e.e>C?e.c=e.e=null:e.e<x&&(e.c=[e.e=0])}return e}var S,P,_,D=l.prototype={constructor:l,toString:null,valueOf:null},L=new l(1),B=20,U=4,I=-7,T=21,x=-1e7,C=1e7,M=!1,G=1,F=0,k={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0},q="0123456789abcdefghijklmnopqrstuvwxyz";return l.clone=r,l.ROUND_UP=0,l.ROUND_DOWN=1,l.ROUND_CEIL=2,l.ROUND_FLOOR=3,l.ROUND_HALF_UP=4,l.ROUND_HALF_DOWN=5,l.ROUND_HALF_EVEN=6,l.ROUND_HALF_CEIL=7,l.ROUND_HALF_FLOOR=8,l.EUCLID=9,l.config=l.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(p+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],o(n,0,y,r),B=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],o(n,0,8,r),U=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],s(n)?(o(n[0],-y,0,r),o(n[1],0,y,r),I=n[0],T=n[1]):(o(n,-y,y,r),I=-(T=0>n?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],s(n))o(n[0],-y,-1,r),o(n[1],1,y,r),x=n[0],C=n[1];else{if(o(n,-y,y,r),!n)throw Error(p+r+" cannot be zero: "+n);x=-(C=0>n?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if(n=e[r],n!==!!n)throw Error(p+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw M=!n,Error(p+"crypto unavailable");M=n}else M=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],o(n,0,9,r),G=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],o(n,0,y,r),F=n),e.hasOwnProperty(r="FORMAT")){if(n=e[r],"object"!=typeof n)throw Error(p+r+" not an object: "+n);k=n}if(e.hasOwnProperty(r="ALPHABET")){if(n=e[r],"string"!=typeof n||/^.$|\.|(.).*\1/.test(n))throw Error(p+r+" invalid: "+n);q=n}}return{DECIMAL_PLACES:B,ROUNDING_MODE:U,EXPONENTIAL_AT:[I,T],RANGE:[x,C],CRYPTO:M,MODULO_MODE:G,POW_PRECISION:F,FORMAT:k,ALPHABET:q}},l.isBigNumber=function(e){return e instanceof l||e&&e._isBigNumber===!0||!1},l.maximum=l.max=function(){return b(arguments,D.lt)},l.minimum=l.min=function(){return b(arguments,D.gt)},l.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return g(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,s,f,u=0,c=[],a=new l(L);if(null==e?e=B:o(e,0,y),s=h(e/m),M)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(s*=2));s>u;)f=131072*n[u]+(n[u+1]>>>11),f>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[u]=t[0],n[u+1]=t[1]):(c.push(f%1e14),u+=2);u=s/2}else{if(!crypto.randomBytes)throw M=!1,Error(p+"crypto unavailable");for(n=crypto.randomBytes(s*=7);s>u;)f=281474976710656*(31&n[u])+1099511627776*n[u+1]+4294967296*n[u+2]+16777216*n[u+3]+(n[u+4]<<16)+(n[u+5]<<8)+n[u+6],f>=9e15?crypto.randomBytes(7).copy(n,u):(c.push(f%1e14),u+=7);u=s/7}if(!M)for(;s>u;)f=r(),9e15>f&&(c[u++]=f%1e14);for(s=c[--u],e%=m,s&&e&&(f=O[m-e],c[u]=g(s/f)*f);0===c[u];c.pop(),u--);if(0>u)c=[i=0];else{for(i=-1;0===c[0];c.splice(0,1),i-=m);for(u=1,f=c[0];f>=10;f/=10,u++);m>u&&(i-=m-u)}return a.e=i,a.c=c,a}}(),P=function(){function e(e,r,n,t){for(var i,o,s=[0],f=0,u=e.length;u>f;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(f++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}var r="0123456789";return function(n,i,o,s,f){var u,a,h,g,p,w,d,m,v=n.indexOf("."),O=B,N=U;for(v>=0&&(g=F,F=0,n=n.replace(".",""),m=new l(i),w=m.pow(n.length-v),F=g,m.c=e(c(t(w.c),w.e,"0"),10,o,r),m.e=m.c.length),d=e(n,i,o,f?(u=q,r):(u=r,q)),h=g=d.length;0==d[--g];d.pop());if(!d[0])return u.charAt(0);if(0>v?--h:(w.c=d,w.e=h,w.s=s,w=S(w,m,O,N,o),d=w.c,p=w.r,h=w.e),a=h+O+1,v=d[a],g=o/2,p=p||0>a||null!=d[a+1],p=4>N?(null!=v||p)&&(0==N||N==(w.s<0?3:2)):v>g||v==g&&(4==N||p||6==N&&1&d[a-1]||N==(w.s<0?8:7)),1>a||!d[0])n=p?c(u.charAt(1),-O,u.charAt(0)):u.charAt(0);else{if(d.length=a,p)for(--o;++d[--a]>o;)d[a]=0,a||(++h,d=[1].concat(d));for(g=d.length;!d[--g];);for(v=0,n="";g>=v;n+=u.charAt(d[v++]));n=c(n,h,u.charAt(0))}return n}}(),S=function(){function e(e,r,n){var t,i,o,s,f=0,u=e.length,c=r%N,l=r/N|0;for(e=e.slice();u--;)o=e[u]%N,s=e[u]/N|0,t=l*o+s*c,i=c*o+t%N*N+f,f=(i/n|0)+(t/N|0)+l*s,e[u]=i%n;return f&&(e=[f].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;n>i;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,o,s,f,u){var c,a,h,p,w,v,O,N,y,E,b,A,S,P,_,D,L,B=i.s==o.s?1:-1,U=i.c,I=o.c;if(!(U&&U[0]&&I&&I[0]))return new l(i.s&&o.s&&(U?!I||U[0]!=I[0]:I)?U&&0==U[0]||!I?0*B:B/0:NaN);for(N=new l(B),y=N.c=[],a=i.e-o.e,B=s+a+1,u||(u=d,a=n(i.e/m)-n(o.e/m),B=B/m|0),h=0;I[h]==(U[h]||0);h++);if(I[h]>(U[h]||0)&&a--,0>B)y.push(1),p=!0;else{for(P=U.length,D=I.length,h=0,B+=2,w=g(u/(I[0]+1)),w>1&&(I=e(I,w,u),U=e(U,w,u),D=I.length,P=U.length),S=D,E=U.slice(0,D),b=E.length;D>b;E[b++]=0);L=I.slice(),L=[0].concat(L),_=I[0],I[1]>=u/2&&_++;do{if(w=0,c=r(I,E,D,b),0>c){if(A=E[0],D!=b&&(A=A*u+(E[1]||0)),w=g(A/_),w>1)for(w>=u&&(w=u-1),v=e(I,w,u),O=v.length,b=E.length;1==r(v,E,O,b);)w--,t(v,O>D?L:I,O,u),O=v.length,c=1;else 0==w&&(c=w=1),v=I.slice(),O=v.length;if(b>O&&(v=[0].concat(v)),t(E,v,b,u),b=E.length,-1==c)for(;r(I,E,D,b)<1;)w++,t(E,b>D?L:I,b,u),b=E.length}else 0===c&&(w++,E=[0]);y[h++]=w,E[0]?E[b++]=U[S]||0:(E=[U[S]],b=1)}while((S++<P||null!=E[0])&&B--);p=null!=E[0],y[0]||y.splice(0,1)}if(u==d){for(h=1,B=y[0];B>=10;B/=10,h++);R(N,s+(N.e=h+a*m-1)+1,f,p)}else N.e=a,N.r=+p;return N}}(),_=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,s,f,u){var c,a=f?s:s.replace(i,"");if(t.test(a))o.s=isNaN(a)?null:0>a?-1:1,o.c=o.e=null;else{if(!f&&(a=a.replace(e,function(e,r,n){return c="x"==(n=n.toLowerCase())?16:"b"==n?2:8,u&&u!=c?e:r}),u&&(c=u,a=a.replace(r,"$1").replace(n,"0.$1")),s!=a))return new l(a,c);if(l.DEBUG)throw Error(p+"Not a"+(u?" base "+u:"")+" number: "+s);o.c=o.e=o.s=null}}}(),D.absoluteValue=D.abs=function(){var e=new l(this);return e.s<0&&(e.s=1),e},D.comparedTo=function(e,r){return i(this,new l(e,r))},D.decimalPlaces=D.dp=function(e,r){var t,i,s,f=this;if(null!=e)return o(e,0,y),null==r?r=U:o(r,0,8),R(new l(f),e+f.e+1,r);if(!(t=f.c))return null;if(i=((s=t.length-1)-n(this.e/m))*m,s=t[s])for(;s%10==0;s/=10,i--);return 0>i&&(i=0),i},D.dividedBy=D.div=function(e,r){return S(this,new l(e,r),B,U)},D.dividedToIntegerBy=D.idiv=function(e,r){return S(this,new l(e,r),0,1)},D.exponentiatedBy=D.pow=function(e,r){var n,t,i,o,s,u,c,a,w=this;if(e=new l(e),e.c&&!e.isInteger())throw Error(p+"Exponent not an integer: "+e);if(null!=r&&(r=new l(r)),s=e.e>14,!w.c||!w.c[0]||1==w.c[0]&&!w.e&&1==w.c.length||!e.c||!e.c[0])return a=new l(Math.pow(+w.valueOf(),s?2-f(e):+e)),r?a.mod(r):a;if(u=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new l(NaN);t=!u&&w.isInteger()&&r.isInteger(),t&&(w=w.mod(r))}else{if(e.e>9&&(w.e>0||w.e<-1||(0==w.e?w.c[0]>1||s&&w.c[1]>=24e7:w.c[0]<8e13||s&&w.c[0]<=9999975e7)))return i=w.s<0&&f(e)?-0:0,w.e>-1&&(i=1/i),new l(u?1/i:i);F&&(i=h(F/m+2))}for(s?(n=new l(.5),c=f(e)):c=e%2,u&&(e.s=1),a=new l(L);;){if(c){if(a=a.times(w),!a.c)break;i?a.c.length>i&&(a.c.length=i):t&&(a=a.mod(r))}if(s){if(e=e.times(n),R(e,e.e+1,1),!e.c[0])break;s=e.e>14,c=f(e)}else{if(e=g(e/2),!e)break;c=e%2}w=w.times(w),i?w.c&&w.c.length>i&&(w.c.length=i):t&&(w=w.mod(r))}return t?a:(u&&(a=L.div(a)),r?a.mod(r):i?R(a,F,U,o):a)},D.integerValue=function(e){var r=new l(this);return null==e?e=U:o(e,0,8),R(r,r.e+1,e)},D.isEqualTo=D.eq=function(e,r){return 0===i(this,new l(e,r))},D.isFinite=function(){return!!this.c},D.isGreaterThan=D.gt=function(e,r){return i(this,new l(e,r))>0},D.isGreaterThanOrEqualTo=D.gte=function(e,r){return 1===(r=i(this,new l(e,r)))||0===r},D.isInteger=function(){return!!this.c&&n(this.e/m)>this.c.length-2},D.isLessThan=D.lt=function(e,r){return i(this,new l(e,r))<0},D.isLessThanOrEqualTo=D.lte=function(e,r){return-1===(r=i(this,new l(e,r)))||0===r},D.isNaN=function(){return!this.s},D.isNegative=function(){return this.s<0},D.isPositive=function(){return this.s>0},D.isZero=function(){return!!this.c&&0==this.c[0]},D.minus=function(e,r){var t,i,o,s,f=this,u=f.s;if(e=new l(e,r),r=e.s,!u||!r)return new l(NaN);if(u!=r)return e.s=-r,f.plus(e);var c=f.e/m,a=e.e/m,h=f.c,g=e.c;if(!c||!a){if(!h||!g)return h?(e.s=-r,e):new l(g?f:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new l(h[0]?f:3==U?-0:0)}if(c=n(c),a=n(a),h=h.slice(),u=c-a){for((s=0>u)?(u=-u,o=h):(a=c,o=g),o.reverse(),r=u;r--;o.push(0));o.reverse()}else for(i=(s=(u=h.length)<(r=g.length))?u:r,u=r=0;i>r;r++)if(h[r]!=g[r]){s=h[r]<g[r];break}if(s&&(o=h,h=g,g=o,e.s=-e.s),r=(i=g.length)-(t=h.length),r>0)for(;r--;h[t++]=0);for(r=d-1;i>u;){if(h[--i]<g[i]){for(t=i;t&&!h[--t];h[t]=r);--h[t],h[i]+=d}h[i]-=g[i]}for(;0==h[0];h.splice(0,1),--a);return h[0]?A(e,h,a):(e.s=3==U?-1:1,e.c=[e.e=0],e)},D.modulo=D.mod=function(e,r){var n,t,i=this;return e=new l(e,r),!i.c||!e.s||e.c&&!e.c[0]?new l(NaN):!e.c||i.c&&!i.c[0]?new l(i):(9==G?(t=e.s,e.s=1,n=S(i,e,0,3),e.s=t,n.s*=t):n=S(i,e,0,G),e=i.minus(n.times(e)),e.c[0]||1!=G||(e.s=i.s),e)},D.multipliedBy=D.times=function(e,r){var t,i,o,s,f,u,c,a,h,g,p,w,v,O,y,E=this,b=E.c,R=(e=new l(e,r)).c;if(!(b&&R&&b[0]&&R[0]))return!E.s||!e.s||b&&!b[0]&&!R||R&&!R[0]&&!b?e.c=e.e=e.s=null:(e.s*=E.s,b&&R?(e.c=[0],e.e=0):e.c=e.e=null),e;for(i=n(E.e/m)+n(e.e/m),e.s*=E.s,c=b.length,g=R.length,g>c&&(v=b,b=R,R=v,o=c,c=g,g=o),o=c+g,v=[];o--;v.push(0));for(O=d,y=N,o=g;--o>=0;){for(t=0,p=R[o]%y,w=R[o]/y|0,f=c,s=o+f;s>o;)a=b[--f]%y,h=b[f]/y|0,u=w*a+h*p,a=p*a+u%y*y+v[s]+t,t=(a/O|0)+(u/y|0)+w*h,v[s--]=a%O;v[s]=t}return t?++i:v.splice(0,1),A(e,v,i)},D.negated=function(){var e=new l(this);return e.s=-e.s||null,e},D.plus=function(e,r){var t,i=this,o=i.s;if(e=new l(e,r),r=e.s,!o||!r)return new l(NaN);if(o!=r)return e.s=-r,i.minus(e);var s=i.e/m,f=e.e/m,u=i.c,c=e.c;if(!s||!f){if(!u||!c)return new l(o/0);if(!u[0]||!c[0])return c[0]?e:new l(u[0]?i:0*o)}if(s=n(s),f=n(f),u=u.slice(),o=s-f){for(o>0?(f=s,t=c):(o=-o,t=u),t.reverse();o--;t.push(0));t.reverse()}for(o=u.length,r=c.length,0>o-r&&(t=c,c=u,u=t,r=o),o=0;r;)o=(u[--r]=u[r]+c[r]+o)/d|0,u[r]=d===u[r]?0:u[r]%d;return o&&(u=[o].concat(u),++f),A(e,u,f)},D.precision=D.sd=function(e,r){var n,t,i,s=this;if(null!=e&&e!==!!e)return o(e,1,y),null==r?r=U:o(r,0,8),R(new l(s),e,r);if(!(n=s.c))return null;if(i=n.length-1,t=i*m+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&s.e+1>t&&(t=s.e+1),t},D.shiftedBy=function(e){return o(e,-v,v),this.times("1e"+e)},D.squareRoot=D.sqrt=function(){var e,r,i,o,s,f=this,u=f.c,c=f.s,a=f.e,h=B+4,g=new l("0.5");if(1!==c||!u||!u[0])return new l(!c||0>c&&(!u||u[0])?NaN:u?f:1/0);if(c=Math.sqrt(+f),0==c||c==1/0?(r=t(u),(r.length+a)%2==0&&(r+="0"),c=Math.sqrt(r),a=n((a+1)/2)-(0>a||a%2),c==1/0?r="1e"+a:(r=c.toExponential(),r=r.slice(0,r.indexOf("e")+1)+a),i=new l(r)):i=new l(c+""),i.c[0])for(a=i.e,c=a+h,3>c&&(c=0);;)if(s=i,i=g.times(s.plus(S(f,s,h,1))),t(s.c).slice(0,c)===(r=t(i.c)).slice(0,c)){if(i.e<a&&--c,r=r.slice(c-3,c+1),"9999"!=r&&(o||"4999"!=r)){(!+r||!+r.slice(1)&&"5"==r.charAt(0))&&(R(i,i.e+B+2,1),e=!i.times(i).eq(f));break}if(!o&&(R(s,s.e+B+2,0),s.times(s).eq(f))){i=s;break}h+=4,c+=4,o=1}return R(i,i.e+B+1,U,e)},D.toExponential=function(e,r){return null!=e&&(o(e,0,y),e++),E(this,e,r,1)},D.toFixed=function(e,r){return null!=e&&(o(e,0,y),e=e+this.e+1),E(this,e,r)},D.toFormat=function(e,r){var n=this.toFixed(e,r);if(this.c){var t,i=n.split("."),o=+k.groupSize,s=+k.secondaryGroupSize,f=k.groupSeparator,u=i[0],c=i[1],l=this.s<0,a=l?u.slice(1):u,h=a.length;if(s&&(t=o,o=s,s=t,h-=t),o>0&&h>0){for(t=h%o||o,u=a.substr(0,t);h>t;t+=o)u+=f+a.substr(t,o);s>0&&(u+=f+a.slice(t)),l&&(u="-"+u)}n=c?u+k.decimalSeparator+((s=+k.fractionGroupSize)?c.replace(new RegExp("\\d{"+s+"}\\B","g"),"$&"+k.fractionGroupSeparator):c):u}return n},D.toFraction=function(e){var r,n,i,o,s,f,u,c,a,h,g,w,d=this,v=d.c;if(null!=e&&(c=new l(e),!c.isInteger()&&(c.c||1!==c.s)||c.lt(L)))throw Error(p+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+e);if(!v)return d.toString();for(n=new l(L),h=i=new l(L),o=a=new l(L),w=t(v),f=n.e=w.length-d.e-1,n.c[0]=O[(u=f%m)<0?m+u:u],e=!e||c.comparedTo(n)>0?f>0?n:h:c,u=C,C=1/0,c=new l(w),a.c[0]=0;g=S(c,n,0,1),s=i.plus(g.times(o)),1!=s.comparedTo(e);)i=o,o=s,h=a.plus(g.times(s=h)),a=s,n=c.minus(g.times(s=n)),c=s;return s=S(e.minus(i),o,0,1),a=a.plus(s.times(h)),i=i.plus(s.times(o)),a.s=h.s=d.s,f*=2,r=S(h,o,f,U).minus(d).abs().comparedTo(S(a,i,f,U).minus(d).abs())<1?[h.toString(),o.toString()]:[a.toString(),i.toString()],C=u,r},D.toNumber=function(){return+this},D.toPrecision=function(e,r){return null!=e&&o(e,1,y),E(this,e,r,2)},D.toString=function(e){var r,n=this,i=n.s,s=n.e;return null===s?i?(r="Infinity",0>i&&(r="-"+r)):r="NaN":(r=t(n.c),null==e?r=I>=s||s>=T?u(r,s):c(r,s,"0"):(o(e,2,q.length,"Base"),r=P(c(r,s,"0"),10,e,i,!0)),0>i&&n.c[0]&&(r="-"+r)),r},D.valueOf=D.toJSON=function(){var e,r=this,n=r.e;return null===n?r.toString():(e=t(r.c),e=I>=n||n>=T?u(e,n):c(e,n,"0"),r.s<0?"-"+e:e)},D._isBigNumber=!0,null!=e&&l.set(e),l}function n(e){var r=0|e;return e>0||e===r?r:r-1}function t(e){for(var r,n,t=1,i=e.length,o=e[0]+"";i>t;){for(r=e[t++]+"",n=m-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function i(e,r){var n,t,i=e.c,o=r.c,s=e.s,f=r.s,u=e.e,c=r.e;if(!s||!f)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-f:s;if(s!=f)return s;if(n=0>s,t=u==c,!i||!o)return t?0:!i^n?1:-1;if(!t)return u>c^n?1:-1;for(f=(u=i.length)<(c=o.length)?u:c,s=0;f>s;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return u==c?0:u>c^n?1:-1}function o(e,r,n,t){if(r>e||e>n||e!==(0>e?h(e):g(e)))throw Error(p+(t||"Argument")+("number"==typeof e?r>e||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+e)}function s(e){return"[object Array]"==Object.prototype.toString.call(e)}function f(e){var r=e.c.length-1;return n(e.e/m)==r&&e.c[r]%2!=0}function u(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(0>r?"e":"e+")+r}function c(e,r,n){var t,i;if(0>r){for(i=n+".";++r;i+=n);e=i+e}else if(t=e.length,++r>t){for(i=n,r-=t;--r;i+=n);e+=i}else t>r&&(e=e.slice(0,r)+"."+e.slice(r));return e}var l,a=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,h=Math.ceil,g=Math.floor,p="[BigNumber Error] ",w=p+"Number primitive has more than 15 significant digits: ",d=1e14,m=14,v=9007199254740991,O=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],N=1e7,y=1e9;l=r(),l["default"]=l.BigNumber=l,"function"==typeof define&&define.amd?define(function(){return l}):"undefined"!=typeof module&&module.exports?module.exports=l:(e||(e="undefined"!=typeof self&&self?self:window),e.BigNumber=l)}(this);
//# sourceMappingURL=bignumber.js.map
