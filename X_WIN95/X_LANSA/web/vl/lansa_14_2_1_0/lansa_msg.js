window.LANSA.addSrc("msg",function(e,c,a,b,m){e.Gb("PRIM_PPNL");a.Rma={e5:0,tPc:1,vPc:2,qPc:4,rPc:8};a.Rma.v={NONE:a.Rma.e5,TEXT:a.Rma.tPc,WARNING:a.Rma.vPc,ERROR:a.Rma.qPc,FATAL:a.Rma.rPc};a.IZ={H1b:1,J1b:2,I1b:4};a.IZ.v={ERROR:a.IZ.H1b,QUESTION:a.IZ.J1b,INFORMATION:a.IZ.I1b};a.np={jhd:16,x0a:1,cHa:16,$Ga:32,eHa:64,bHa:128,dHa:256,aHa:512};a.np.v={NONE:a.np.x0a,OK:a.np.cHa,CANCEL:a.np.$Ga,YES:a.np.eHa,NO:a.np.bHa,RETRY:a.np.dHa,IGNORE:a.np.aHa};a.OG={Ygb:16,L1b:48,M1b:192,N1b:224,K1b:768};a.OG.v=
{OK:a.OG.Ygb,OKCANCEL:a.OG.L1b,YESNO:a.OG.M1b,YESNOCANCEL:a.OG.N1b,IGNORERETRY:a.OG.K1b};c.XWb=function(){p.w.call(this)};var p=c.u(c.XWb,c.wd);e.kd(c.XWb,"PRIM_MSG",{});c.Mdb=function(){h.w.call(this);this.vD=[]};var h=c.u(c.Mdb,c.wd);h.PBc=function(){e.Gb("PRIM_PCOL");var a=new c.aVb(this);return new c.zZ(a)};h.ph=function(a,b){var e=new c.Ndb(this,a);this.vD.push(e);e.Vi(b);this.yvc(e);return e};h.pp=function(a){if(a)for(var b=0;b<this.vD.length;b++){var c=this.vD[b];c.ha()==a&&(this.SIb(c),this.vD.splice(b--,
1),c.vCb())}};h.Zlc=function(){for(;0<this.vD.length;){var a=this.vD.shift();this.SIb(a);a.vCb()}};h.yvc=function(b){var c=e.Tb();c.Zb("MESSAGE",b);this.Ga(a.G.aPc,c);c.sc()};h.SIb=function(b){var c=e.Tb();c.Zb("MESSAGE",b);this.Ga(a.G.bPc,c);c.sc()};e.kd(c.Mdb,"PRIM_MSGQ",{Oa:{Messages:{a:h.PBc}},jc:{Add:function(a,b){return this.ph(e.ma(a),b===m?null:b)},Clear:function(a){return this.pp(a===m?null:a)},ClearAll:function(){return this.Zlc()}}});c.aVb=function(a){r.w.call(this);this.iFa=a};var r=c.u(c.aVb,
c.Yba);r.mc=function(){return this.iFa.vD.length};r.Mw=function(a){return this.iFa.vD[a]};c.Ndb=function(a,b){k.w.call(this);this.iFa=a;this.Fg=b;this.eb=null};var k=c.u(c.Ndb,c.wd);k.Dq=function(){return this.Fg};k.ha=function(){return this.eb};k.Vi=function(a){this.sg()&&this.eb!=a&&(null!=this.eb&&(this.eb.KM(this),this.eb.Da(this,this.Os)),this.eb=a)&&(a.VK(this),a.Ea(this,this.Os))};k.sg=function(){return null!==this.iFa};k.vCb=function(){this.Vi(null);this.Fg="";this.iFa=null};k.Os=function(b,
c){switch(c.Ya){case a.f.sb:this.Vi(null)}};e.jb(c.Ndb,"PRIM_MSGQ","Message",{Oa:{Text:{a:k.Dq},Control:{a:k.ha,g:k.Vi}}});c.Y_b=function(){s.w.call(this);this.Vqa=[]};var s=c.u(c.Y_b,c.wd);s.U=function(){this.bk();s.j.U.call(this)};s.Sd=function(a){return this.Vqa[a]};s.mc=function(){return this.Vqa.length};s.ph=function(b){this.Vqa.push(b);this.l(a.f.h)};s.bk=function(){this.Vqa=[];this.l(a.f.h)};s.tBc=function(){for(var a="",b=0;b<this.Vqa.length;b++){var c=this.Vqa[b];c.length>a.length&&(a=c)}return a};
e.jb(c.Y_b,"PRIM_WEB","MessageBoxCaptions",{jc:{Add:s.ph,RemoveAll:s.bk}});c.X_b=function(){f.w.call(this);e.Gb("PRIM_PHBN");e.Gb("PRIM_LABL");this.TFa=this.V8=this.bia=null;this.hFa=a.IZ.I1b;this.qB=a.OG.Ygb;this.Ue=a.np.x0a;this.HVa=[];this.YR=null;this.d_a=new c.Ws;this.c_a=new c.JQ;this.DD=new c.jn;this.DH=e.gd("PRIM_WEB","MessageBoxCaptions");this.DH.Ca();this.DH.Ea(this,this.fDb);this.Nf=new c.pfb;this.jt=new c.JQ;this.Ur=new c.JQ;this.TK=new c.JQ;this.bO=new c.JQ;this.lO=new c.JQ;this.vK=new c.JQ;
this.Ur.wa(this,a.G.$b,this.Yqc);this.jt.wa(this,a.G.$b,this.hpc);this.TK.wa(this,a.G.$b,this.Qsc);this.bO.wa(this,a.G.$b,this.Wqc);this.lO.wa(this,a.G.$b,this.Erc);this.vK.wa(this,a.G.$b,this.xqc);this.DD.Na(this);this.Nf.Na(this);this.jt.Na(this);this.Ur.Na(this);this.TK.Na(this);this.bO.Na(this);this.lO.Na(this);this.vK.Na(this);this.V8=new c.pb;this.TFa=new c.yg;this.V8.yd(this.TFa);this.TFa.Ed(a.m.xR);this.TFa.tg(9);this.v8b(this.V8);this.V8.Ca();this.TFa.Ca();this.DD.Ta(90);this.DD.Df(!1);this.DD.Ua(57);
this.DD.Ib(!0);this.DD.uR(!0);this.DD.s_(!0);this.Nf.Fe(6);this.Nf.UE(a.Vg.qq);this.Nf.Ta(20);this.Nf.Ua(57);this.Nf.Wu(64);this.Nf.XM(64);this.Nf.xc(64);this.Nf.Yb(64);this.Nf.Df(!1);this.Ur.Ab(b.Vm().ok||"OK");this.bO.Ab(b.Vm().no||"No");this.TK.Ab(b.Vm().yes||"Yes");this.lO.Ab(b.Vm().retry||"Retry");this.jt.Ab(b.Vm().cancel||"Cancel");this.vK.Ab(b.Vm().ignore||"Ignore");this.Q6b(this.qB);this.Zna(!1);this.ymb(!0)};var f=c.u(c.X_b,c.ax);f.U=function(){this.DH.Da(this,this.fDb);this.DH.xb();this.DH=
null;this.PBb();f.j.U.call(this)};f.IZc=function(a){this.d_a.tb(a)};f.$wc=function(){return this.d_a.rg()};f.axc=function(){return this.d_a.Wj()};f.Hja=function(){return this.c_a.rg()};f.bH=function(a){this.c_a.tb(a)};f.Uwc=function(){return this.c_a.Wj()};f.vBa=function(b){b!=this.wU()&&(this.Ab(b),this.OUa(),this.l(a.f.h))};f.wU=function(){return this.kb()};f.c1c=function(b){this.DH.bk();b!=this.jLb()&&(this.DH.ph(b),this.l(a.f.h))};f.cxc=function(){return this.DH};f.jLb=function(){return 0<this.DH.mc()?
this.DH.Sd(0):""};f.f7b=function(b){this.YR!==b&&(null!=this.YR&&(this.YR.Da(this,this.uDb),this.YR.xb()),this.YR=b,null!==this.YR&&(this.YR.Ca(),this.YR.Ea(this,this.uDb)),this.OUa(),this.l(a.f.h))};f.Zxc=function(){return this.YR};f.d1c=function(b){this.hFa!=b&&(this.hFa=b,this.OUa(),this.l(a.f.h))};f.aud=function(){return this.hFa};f.Q6b=function(b){this.qB=b;this.Ur.Ib(0!=(this.qB&a.np.cHa));this.jt.Ib(0!=(this.qB&a.np.$Ga));this.TK.Ib(0!=(this.qB&a.np.eHa));this.bO.Ib(0!=(this.qB&a.np.bHa));
this.vK.Ib(0!=(this.qB&a.np.aHa));this.lO.Ib(0!=(this.qB&a.np.dHa))};f.Kod=function(){return this.qB};f.RLd=function(a){this.Ue=a};f.Mvd=function(){return this.Ue};f.wnc=function(b,e,f){var g=new c.Ws;g.Na(this.DD);g.Ta(0);g.Df(!1);g.Ua(e);g.Ln(a.Vg.qq);g.Yb(f.Wa());g.xc(f.Pa());g.Re(!1);g.Ab(b);return g};f.m9b=function(a,e){var f=b.$w(0,0),g=new c.ga(0,0,0,0);b.AC(a,g,0,e);f.Yb(g.aa()+2);f.xc(g.ba()+2);return f};f.LCc=function(){if(null!=this.YR)return this.YR;var d="";switch(this.hFa){case a.IZ.H1b:d=
"lansa_error.png";break;case a.IZ.J1b:d="lansa_question.png";break;default:d="lansa_information.png"}var e=new c.lM;e.gw(b.tc(d));return e};f.Sic=function(){var a=this.c_a.Wj().$a.mE(),b=null;this.Ur.Wj().bk();this.jt.Wj().bk();this.TK.Wj().bk();this.bO.Wj().bk();this.lO.Wj().bk();this.vK.Wj().bk();for(var c=0;null!=a&&c<a.length&&null!=(b=a[c]);c++)this.Ur.Wj().ph(b),this.jt.Wj().ph(b),this.TK.Wj().ph(b),this.bO.Wj().ph(b),this.lO.Wj().ph(b),this.vK.Wj().ph(b);this.Ur.$j(!1,!0);this.jt.$j(!1,!0);
this.TK.$j(!1,!0);this.bO.$j(!1,!0);this.lO.$j(!1,!0);this.vK.$j(!1,!0)};f.Yic=function(){var a=this.d_a.Wj().$a.mE(),b=null;this.DD.Wj().bk();for(var c=0;null!=a&&c<a.length&&null!=(b=a[c]);c++)this.DD.Wj().ph(b);this.DD.$j(!1,!0)};f.yoa=function(){this.bia=b.vR();this.Ue=a.np.x0a;this.VAb();var c=b.Bm();this.Jz(a.li.SQ,null,c,null);this.H_c()};f.OUa=function(){this.cM()&&(this.VAb(),this.hh())};f.VAb=function(){var a;this.PBb();this.Nf.$c(this.LCc());this.Sic();this.Yic();a=this.Qyb();this.ZQc(a)};
f.sAa=function(){this.Qyb();f.j.sAa.call(this)};f.Qyb=function(){var a=this.uA(),b=this.ulc(),c=this.Alc(),c=this.zlc(c),e=this.wlc(a),f=this.vlc(b),g=this.Clc(c,e,f);this.oVc(g,b,e);this.yic(b,c,f,g);return a};f.oVc=function(a,b,c){this.Yb(a.Wa());this.xc(a.Pa());a=b.Wa();b=b.Pa();this.jt.Yb(a);this.Ur.Yb(a);this.TK.Yb(a);this.bO.Yb(a);this.lO.Yb(a);this.vK.Yb(a);this.jt.xc(b);this.Ur.xc(b);this.TK.xc(b);this.bO.xc(b);this.lO.xc(b);this.vK.xc(b);this.DD.Yb(c.Wa());this.DD.xc(c.Pa())};f.yic=function(a,
b,c,e){this.GZc(a);a=e.Pa()-c.Pa();this.jt.Ua(a);this.Ur.Ua(a);this.TK.Ua(a);this.bO.Ua(a);this.lO.Ua(a);this.vK.Ua(a);this.Nf.Ta(20);this.Nf.Ua(this.cr.Pa()+20);this.DD.Ta(40+b.Wa());this.DD.Ua(this.cr.Pa()+20)};f.Clc=function(a,c,e){var f=b.DC(),g=b.$w(0,0);a=this.ylc(a,c);c=this.nA.vLa(this.nA.kb(),this.nA.An().length)+10;g.Yb(Math.max(a.Wa(),c,e.Wa())+60);g.xc(this.cr.Pa()+a.Pa()+e.Pa()+40);g.Yb(Math.min(f.aa()-40,g.Wa()));g.xc(Math.min(f.ba()-40,g.Pa()));return g};f.kka=function(a,b){var c=a;
b.length>a.length&&(c=b);return c};f.sBc=function(){var a="",a=this.kka(this.Ur.kb(),a),a=this.kka(this.jt.kb(),a),a=this.kka(this.TK.kb(),a),a=this.kka(this.bO.kb(),a),a=this.kka(this.lO.kb(),a),a=this.kka(this.vK.kb(),a);return" "+a+" "};f.ulc=function(){var a=this.sBc(),c=b.$w(0,0),c=this.Ur.me();return c=this.m9b(a,c)};f.uA=function(){var a=this.DH.tBc(),c=b.$w(0,0),c=this.DD.me();return c=this.m9b(a,c)};f.Alc=function(){var a=b.$w(0,0);a.Yb(this.Nf.Wa());a.xc(this.Nf.Pa());return a};f.wlc=function(a){var c=
b.$w(0,0),e=a.Wa()+4;a=this.DH.mc()*(a.Pa()+4);e+=20;a+=20;e=170>e?170:e;a=70>a?70:a;a=630<a?630:a;c.Yb(630<e?630:e);c.xc(a);return c};f.zlc=function(a){var c=b.$w(0,0);c.xc(a.Pa()+16);c.Yb(a.Wa()+8);return c};f.ylc=function(a,c){var e=b.$w(0,0);e.xc(Math.max(a.Pa(),c.Pa()));e.Yb(2+a.Wa()+2+c.Wa()+2);return e};f.vlc=function(a){var c=b.$w(0,0),e=66>a.Wa()?66:a.Wa(),f=25>a.Pa()?25:a.Pa();a.Yb(e);a.xc(f);c.xc(a.Pa()+24);c.Yb(3*a.Wa()+8);return c};f.GZc=function(b){b=b.Wa()+20;var c=1;this.qB&a.np.dHa&&
(this.lO.Ta(this.Wa()-c*b),++c);this.qB&a.np.aHa&&(this.vK.Ta(this.Wa()-c*b),++c);this.qB&a.np.$Ga&&(this.jt.Ta(this.Wa()-c*b),++c);this.qB&a.np.cHa&&(this.Ur.Ta(this.Wa()-c*b),++c);this.qB&a.np.bHa&&(this.bO.Ta(this.Wa()-c*b),++c);this.qB&a.np.eHa&&this.TK.Ta(this.Wa()-c*b)};f.ZQc=function(a){for(var b=0,c=a.Pa(),e=0;e<this.DH.mc();e++)this.HVa.push(this.wnc(this.DH.Sd(e),b,a)),b+=c};f.H_c=function(){switch(this.qB){case a.OG.Ygb:case a.OG.L1b:this.Ur.ef(!0,!0);break;case a.OG.M1b:case a.OG.N1b:this.TK.ef(!0,
!0);break;case a.OG.K1b:this.vK.ef(!0,!0)}};f.Qka=function(a){this.Ue=a;this.Al();b.zy(this.bia);this.bia=null};f.PBb=function(){for(var a=0;a<this.HVa.length;++a)this.HVa[a].Na(null);this.HVa=[]};f.fDb=function(){this.OUa()};f.Yqc=function(){this.Qka(a.np.cHa)};f.hpc=function(){this.Qka(a.np.$Ga)};f.Qsc=function(){this.Qka(a.np.eHa)};f.Wqc=function(){this.Qka(a.np.bHa)};f.Erc=function(){this.Qka(a.np.dHa)};f.xqc=function(){this.Qka(a.np.aHa)};f.uDb=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.f7b(null);
break;case a.f.h:this.l(a.f.h)}};e.jb(c.X_b,"PRIM_WEB","MessageBox",{Oa:{Title:{a:f.wU,g:function(a){this.vBa(e.ma(a))}},Caption:{a:f.jLb,g:function(a){this.c1c(e.ma(a))}},Text:{a:f.Dq,g:function(a){this.dN(e.ma(a))}},Captions:{a:f.cxc},Image:{a:function(){return e.ta(this.hFa,a.IZ.v)},g:function(b){this.d1c(e.ra(b,a.IZ.v))}},CustomImage:{a:f.Zxc,g:function(a){this.f7b(a)}},Result:{a:function(){return e.ta(this.Ue,a.np.v)}},Buttons:{a:function(){return e.ta(this.qB,a.OG.v)},g:function(b){this.Q6b(e.ra(b,
a.OG.v))}},CaptionStyle:{a:f.$wc,g:function(a){this.IZc(a)}},CaptionStyles:{a:f.axc},ButtonStyle:{a:f.Hja,g:function(a){this.bH(a)}},ButtonStyles:{a:f.Uwc}},jc:{Show:f.yoa}});c.bfb=function(b){g.w.call(this);this.oYa=[];this.vD=[];this.eb=b;this.Gc=new c.ax;this.Gc.wa(this,a.G.$v,this.f$);this.Gc.wa(this,a.G.iP,this.B3a);this.lha=new c.jn;this.lha.mb(new c.ga(0,0,100,25));this.lha.Na(this.Gc);this.lha.Df(!1);this.lha.Wb(a.FSb)};var g=c.u(c.bfb,c.wk);g.fs=function(){return this.Gc};g.ag=function(){return 0==
this.vD.length};g.VK=function(a){this.vD.push(a)};g.KM=function(a){this.vD.splice(this.vD.indexOf(a),1);this.ag()&&this.Gc.Al()};g.f$=function(){e.Gb("PRIM_LABL");for(var b=0,f=6,g=100;b<this.vD.length;b++){var h=this.oYa[b],k=this.vD[b];h||(h=new c.Ws,h.Ta(5),h.Df(!1),h.Ua(f),h.Ln(a.Vg.qq),h.Yb(320),h.xc(20),h.Re(!1),this.oYa.push(h));h.Na(this.lha);h.Ab(k.Dq());h.Slc();g<h.Wa()+15&&(g=h.Wa()+15);f+=25}for(;b<this.oYa.length;b++)h=this.oYa[b],h.Na(null);this.lha.xc(f+6);this.lha.Yb(g);this.Gc.xc(f+
6);this.Gc.Yb(g)};g.B3a=function(){this.eb.$j(!0)}},{rp:["PRIM_PPNL"]});
