window.LANSA.addSrc("wrtn",function(e,c,a,b,m){function p(a){return null===a?e.Gd:"object"==typeof a?a.mimetype&&a.data&&a.filename?new c.EG(a):"":a}function l(a){if(a===e.Gd)return null;switch(typeof a){case "object":if(a instanceof c.uj)return a.toString();if(c.hq&&a instanceof c.hq)return a.iac();if(a instanceof c.EG)return a.Kra}return a}function s(b,c,d){var e=document.createElement("form");e.setAttribute("method","post");e.setAttribute("action",b);d==a.eW.O9b&&e.setAttribute("target","_blank");
for(var f in c)c.hasOwnProperty(f)&&(b=document.createElement("input"),b.setAttribute("type","hidden"),b.setAttribute("name",f),b.setAttribute("value",c[f]),e.appendChild(b));document.body.appendChild(e);e.submit()}function g(a){return(a=a.sm)&&"M"==a}function q(a,b){h&&b.append("_SESSIONKEY",h);var d=a.FLD;if(d!==m)for(var f in d){var k=d[f];k!==e.Gd&&(k instanceof c.EG?b.append(f,k.cka(),k.yh()):b.append(f,l(k)))}d=a.LIST;if(d!==m)for(var g in d){for(var r=d[g],q=r.Mp={},s=r.entryCount(),p=1;p<=
s;p++)for(f in r.getEntry(p),1==p&&b.append(g+"..",1),q){k=p.toString();4>k.length&&(k="000"+k,k=k.substr(k.length-4));var w=g+"."+k+"."+f,k=q[f];k instanceof c.EG?b.append(w,k.cka(),k.yh()):b.append(w,l(k))}delete r.Mp}}function f(a,b){var c=b.webroutine={},d=c.context={};h&&(d["session-key"]=h);w&&(d["session-key-name"]=w);D&&(d["session-key-method"]=D);d=a.FLD;if(d!==m){var e=c.fields={},f;for(f in d)(e[f]={}).value=l(d[f])}d=a.LIST;if(d!==m){var c=c.lists={},k;for(k in d){for(var g=c[k]={},e=
g.header=[],g=g.entries=[],r=d[k],q=r.Mp={},s=r.entryCount(),p=1;p<=s;p++){r.getEntry(p);if(1==p)for(f in q){var J={};e.push(J);J.name=f}J=[];g.push(J);for(f in q)J.push(l(q[f]))}delete r.Mp}}}function k(a){if(a=a.context)h=a["session-key"],w=a["session-key-name"],D=a["session-key-method"]}function d(a,b,c){function d(a){if(a!=m){var b=a.FLD;f(a.LIST);f(b)}}function f(b){if(b!=m)for(var c in b)if(null===b[c])throw e.kUc(c,a.ssa,a.rsa);}d(b);d(c)}var h=m,w=m,D=m;a.eW={rob:0,O9b:1};a.eW.v={CURRENT:a.eW.rob,
NEW:a.eW.O9b};e.kd(function(){},"PRIM_WRTN",{});c.dza=function(a,b){r.w.call(this);this.ssa=a;this.rsa=b;this.Uvb=this.Yub=""};var r=c.u(c.dza,c.wd);r.ysd=function(){return this.Yub};r.QKd=function(a){this.Yub=a};r.zud=function(){return this.Uvb};r.kLd=function(a){this.Uvb=a};r.WCc=function(){return this.ssa};r.JCc=function(){return this.rsa};r.IA=function(){return b.mnc(this.Yub,b.XJa(),this.ssa,this.rsa,this.uCc())};r.uCc=function(){var a=this.Uvb;""==a&&(a=b.WJa());return a};e.jb(c.dza,"PRIM_WEB",
"ServerRequest",{Oa:{ServerModule:{a:r.WCc},Routine:{a:r.JCc}}});c.ema=function(a,b){J.w.call(this,a,b)};var J=c.u(c.ema,c.dza);J.QT=function(a,b){this.THb(a,b,!1,null)};J.s$=function(a,c){this.THb(a,c,!0,b.lR())};J.THb=function(c,l,r,s){function J(c){var d=null;try{d=JSON.parse(c)}catch(f){d=null}if(d){if(c=d.webroutine)if(c=c.messages)for(var g=e.tBc(),v=0;v<c.length;v++)g.oh(c[v],null);if(c=d["vlweb-error"]){var r=a.CR.sJa;switch(c["message-id"]){case "HM42":case "HM43":r=a.CR.VIb;D=w=h=m;break;
case "HM05":r=a.CR.UIb}r=K.Uua(r);if(!r&&c.message!==m)throw e.rjb(K.ssa,K.rsa,c.message);}else{g=l;if(d=d.webroutine){v=g.FLD;if(v!==m){var q=d.fields;if(q)for(var B in v)c=q[B],c!==m&&(c=p(c.value),v[B].set(c))}B=g.LIST;if(B!==m&&(g=d.lists))for(r in B)if(v=B[r],v.Sj(),c=g[r])for(var q=c.header,z=c.entries,y=0;y<z.length;y++){for(var A=v.Mp={},ya=z[y],E=0;E<ya.length;E++)c=p(ya[E]),A[q[E].name]=c;v.Fg();delete v.Mp}k(d)}K.YX()}}else if(r=K.Uua(a.CR.sJa),!r)throw e.rjb(K.ssa,K.rsa,"Invalid JSON");
b.wy(s)}function B(c){if(!K.Uua(a.CR.sJa))throw e.rjb(K.ssa,K.rsa,"response code "+c);b.wy(s)}function A(a){a.lengthComputable&&K.tvc(a.loaded,a.total,e.K(a.loaded/a.total*100))}function E(a){if(a.lengthComputable){var b=a.loaded/a.total*100;K.xIb(a.loaded,a.total,e.K(b))}else K.xIb(a.loaded,-1,-1)}var K=this;d(K,c,l);if(g(c)){var ka=new FormData;q(c,ka);b.bRc(this.IA(),ka,J,B,A,E,r)}else ka={},f(c,ka),b.j3b(this.IA(),ka,J,B,A,E,r)};J.Uua=function(c){var d=!1,d=e.Tb();d.SO("REASON",c,a.CR.v);d.rf("HANDLED",
!1);this.Ha(a.J.XX,d);(d=d.og("HANDLED"))||(d=b.Ep().lvc(this,c));return d};J.YX=function(){this.Ha(a.J.Q2)};J.tvc=function(b,c,d){var f=e.Tb();f.IB("LOADED",b);f.IB("TOTAL",c);f.IB("PROGRESS",d);this.Ha(a.J.tcd,f)};J.xIb=function(b,c,d){var f=e.Tb();f.IB("LOADED",b);f.IB("TOTAL",c);f.IB("PROGRESS",d);this.Ha(a.J.Wsc,f)};e.jb(c.ema,"PRIM_WEB","DataRequest",{jc:{Execute:J.QT,ExecuteAsync:J.s$}});c.zma=function(b,c){B.w.call(this,b,c);this.Vl=a.eW.rob};var B=c.u(c.zma,c.dza);B.IDc=function(){return this.Vl};
B.gmb=function(a){this.Vl=a};B.QT=function(a,b){d(this,a,b);var c={};h&&(c._SESSIONKEY=h);var e=a.FLD;if(e!==m)for(var f in e)c[f]=l(e[f]);e=a.LIST;if(e!==m)for(var k in e){for(var g=e[k],r=g.Mp={},q=g.entryCount(),p=1;p<=q;p++)for(f in g.getEntry(p),1==p&&(c[k+".."]=1),r){var w=p.toString();4>w.length&&(w="000"+w,w=w.substr(w.length-4));c[k+"."+w+"."+f]=l(r[f])}delete g.Mp}s(this.IA(),c,this.Vl)};e.jb(c.zma,"PRIM_WEB","WebPageRequest",{Oa:{Target:{a:function(){return e.ta(this.Vl,a.eW.v)},g:function(b){this.gmb(e.ra(b,
a.eW.v))}}},jc:{Execute:B.QT}});c.sma=function(b,c){K.w.call(this,b,c);this.Vl=a.eW.rob};var K=c.u(c.sma,c.dza);K.IDc=function(){return this.Vl};K.gmb=function(a){this.Vl=a};K.QT=function(a,b){d(this,a,b);var c={};h&&(c._SESSIONKEY=h);var e=a.FLD;if(e!==m)for(var f in e)c[f]=l(e[f]);e=a.LIST;if(e!==m)for(var k in e){for(var g=e[k],r=g.Mp={},q=g.entryCount(),p=1;p<=q;p++)for(f in g.getEntry(p),1==p&&(c[k+".."]=1),r){var w=p.toString();4>w.length&&(w="000"+w,w=w.substr(w.length-4));c[k+"."+w+"."+f]=
l(r[f])}delete g.Mp}s(this.IA(),c,this.Vl)};e.jb(c.sma,"PRIM_WEB","ResourceRequest",{Oa:{Target:{a:function(){return e.ta(this.Vl,a.eW.v)},g:function(b){this.gmb(e.ra(b,a.eW.v))}}},jc:{Execute:K.QT}});b.muc=function(b,c){var d=c.webroutine;if(d){var e=b.dA.Sva(),f=d.fields;if(f){var h=b.uAa(e),k;for(k in f){var g=null,l=b.Zi[k];l&&(g=l.gT());if(!g&&h)for(var r in h)if(l=h[r],l.qh()==k){g=l;break}g&&(l=p(f[k].value),g.set(l))}}if(d=d.lists){var e=b.tVc(e),m;for(m in d){f=null;if(l=b.Zi[m])switch(l.uva()){case a.Ev.Drb:case a.Ev.NUa:case a.Ev.R0a:f=
l}!f&&e&&(f=e[m]);if(f)for(l=d[m],h=l.header,k=l.entries,g=0;g<k.length;g++){r=f.Mp={};for(var q=k[g],s=0;s<q.length;s++)l=p(q[s]),r[h[s].name]=l;f.Fg();delete f.Mp}}}}};b.luc=function(a){(a=a.webroutine)&&k(a)}});