window.LANSA.addSrc("drag",function(e,c,a,b){a.Kt={MIa:0,NIa:1,i$:2,Gtc:3,Hua:4};a.Kt.v={ENTER:a.Kt.MIa,MOVE:a.Kt.NIa,EXIT:a.Kt.i$,DROP:a.Kt.Gtc,HOVER:a.Kt.Hua};a.AP={N3a:0,wFb:1,xFb:2};a.AP.v={ENDED:a.AP.N3a,ACCEPTED:a.AP.wFb,CANCELLED:a.AP.xFb};a.zP={rCb:0,tCb:1,qCb:2,sCb:4};a.zP.v={NONE:a.zP.rCb,SELECTION:a.zP.tCb,IMAGE:a.zP.qCb,POPUP:a.zP.sCb};a.OI={u4:0,aMa:1,QGc:2};a.Ki={QIa:16,Q3a:1,OIa:2,S3a:16,T3a:32,Iua:256,PFb:512,Jtc:1024,OFb:2048,RIa:4096,Ktc:8192,QFb:16384,SFb:32768,R3a:65536,RFb:131072,
PIa:262144};e.kd(function(){},"PRIM_DRAG",{});c.eYb=function(){m.w.call(this);this.bYa=0;this.Qn=a.Ki.QIa;this.NN=a.OI.u4;this.Kfa=this.FW=this.Cub=this.s1=this.iha=this.vN=this.yH=this.xn=this.Yr=this.$q=this.kt=null;this.cga=new c.dYb};var m=c.u(c.eYb,c.wd);m.jZ=function(){return!1};m.n7a=function(){return this.bYa};m.x7b=function(a){this.bYa=a};m.pkb=function(b){this.Sia(a.Ki.OIa,b)};m.W5a=function(){return this.mxa()?!0:!1};m.t8b=function(b){this.Sia(a.Ki.S3a,b)};m.eMb=function(){return this.kHc()?
!0:!1};m.nmb=function(b){this.Sia(a.Ki.T3a,b)};m.oLa=function(){return this.lHc()?!0:!1};m.Ood=function(){return this.eFc()?!0:!1};m.HKd=function(b){this.Sia(a.Ki.QFb,b);b&&this.fP()};m.Fud=function(){return!1};m.S7a=function(){return this.$q?this.$q.mi(this.mD):new c.ld(0,0)};m.CLb=function(){return this.kt?this.Hga:new c.ld(0,0)};m.jRa=function(b){if(this.kt!=b)if(null!=this.kt&&this.kt.Da(this,this.t3a),this.kt=b){b=b=null;this.kt.Ea(this,this.t3a);for(b=this.kt;b.cm();)b=b.M();this.Yr!=b&&(null!=
this.Yr&&this.Yr.Da(this,this.FIa),(this.Yr=b)&&this.Yr.Ea(this,this.FIa));for(b=this.Yr;b.nG()==a.Yn.Iv;)b=b.M();this.yH!=b&&(null!=this.yH&&this.yH.Da(this,this.mIa),(this.yH=b)&&this.yH.Ea(this,this.mIa))}else null!=this.kt&&(this.kt.Da(this,this.t3a),this.kt=null),null!=this.Yr&&(this.Yr.Da(this,this.FIa),this.Yr=null),null!=this.yH&&(this.yH.Da(this,this.mIa),this.yH=null)};m.L7a=function(){return this.$q};m.PLb=function(){var b=[];(b[0]=this.$q)&&this.$q.M()&&this.Xs(this.$q.M(),a.$.Uxa,b,null);
return b[0]};m.dBa=function(a){if(this.$q!=a)if(null!=this.$q&&this.$q.Da(this,this.z3a),this.$q=a){a=a=null;this.$q.Ea(this,this.z3a);for(a=this.$q;a.cm();)a=a.M();this.xn!=a&&(null!=this.xn&&this.xn.Da(this,this.HIa),(this.xn=a)&&this.xn.Ea(this,this.HIa));for(a=this.xn;a.cm();)a=a.M();this.vN!=a&&(null!=this.vN&&this.vN.Da(this,this.nIa),(this.vN=a)&&this.vN.Ea(this,this.nIa))}else null!=this.$q&&(this.$q.Da(this,this.z3a),this.$q=null),null!=this.xn&&(this.xn.Da(this,this.HIa),this.xn=null),null!=
this.vN&&(this.vN.Da(this,this.nIa),this.vN=null)};m.X6a=function(){return this.kt};m.Fka=function(){return this.Yr};m.QCc=function(){var b=[];(b[0]=this.Yr)&&this.Yr.M()&&this.Xs(this.Yr.M(),a.$.Uxa,b,null);return b[0]};m.v8a=function(){return this.xn};m.RLb=function(){var b=[];(b[0]=this.xn)&&this.xn.M()&&this.Xs(this.xn.M(),a.$.Uxa,b,null);return b[0]};m.iaa=function(){return this.yH};m.Bja=function(){return this.vN};m.NRa=function(a){this.iha!=a&&(null!=this.iha&&this.iha.xb(),this.iha=a,null!=
this.iha&&this.iha.Ca())};m.ska=function(){return this.iha};m.kRa=function(a){this.s1!=a&&(null!=this.s1&&this.s1.xb(),this.s1=a,null!=this.s1&&this.s1.Ca())};m.Vja=function(){null==this.s1&&(this.s1=new c.ifb);return this.s1};m.xda=function(a){this.Cub!=a&&(this.Cub=a)};m.Z6a=function(){return this.Cub};m.vda=function(a){this.FW!=a&&(null!=this.FW&&(this.FW.Da(this,this.FDb),this.FW.xb()),this.FW=a,null!=this.FW&&(this.FW.Ca(),this.FW.Ea(this,this.FDb)))};m.Y6a=function(){return this.FW};m.jZ=function(){return this.qba()};
m.cJc=function(){return this.eHc()};m.Bzd=function(){return this.mxa()};m.Fzd=function(){return this.dMa()};m.wAd=function(){return this.y$a()};m.yjd=function(){return this.dHc()};m.mQb=function(){return this.jHc()};m.zPb=function(){return this.aHc()};m.WFc=function(){return this.dNb()};m.qba=function(){return 0!=(this.Qn&a.Ki.Q3a)};m.mxa=function(){return 0!=(this.Qn&a.Ki.OIa)};m.kHc=function(){return 0!=(this.Qn&a.Ki.S3a)};m.lHc=function(){return 0!=(this.Qn&a.Ki.T3a)};m.dMa=function(){return 0!=
(this.Qn&a.Ki.Iua)};m.y$a=function(){return 0!=(this.Qn&a.Ki.RIa)};m.dHc=function(){return 0!=(this.Qn&a.Ki.Ktc)};m.eHc=function(){return 0!=(this.Qn&a.Ki.RFb)};m.jHc=function(){return 0!=(this.Qn&a.Ki.SFb)};m.aHc=function(){return 0!=(this.Qn&a.Ki.PIa)};m.gzd=function(){return!1};m.dNb=function(){return 0!=(this.Qn&a.Ki.R3a)};m.eFc=function(){return 0!=(this.Qn&a.Ki.QFb)};m.SX=function(a){this.Qn|=a};m.f3=function(a){this.Qn&=~a};m.Sia=function(a,b){this.Qn=this.Qn&~a|(b?a:0)};m.yCb=function(){if(this.kt){if(this.qba())this.GAb();
else{var a=b.Bm();this.Jfc.pe(a)||this.Bzb()}return!0}return!1};m.f3a=function(){this.kt&&(this.mxa()?this.CP():this.fP(!0))};m.Bzb=function(){this.Kfa=null;this.SX(a.Ki.Q3a);if(this.vSc()){var c=this.Vja().nEa;c!=a.zP.tCb&&(c==a.zP.qCb?this.Vja():c==a.zP.sCb&&(c=this.Vja().tw,null!=c&&this.cga.c4c(c)));this.GAb()}b.la(null);this.Kfa=null};m.GAb=function(){if(!this.dMa()){this.mD=b.Bm();var c=b.YNa(this.mD),e=null;if(e=c)for(;e.cm();)e=e.M();if(e!=this.xn){if(null!=this.xn&&!this.mna(a.Kt.i$,this.xn))return;
this.f3(a.Ki.OIa);this.f3(a.Ki.T3a);this.SX(a.Ki.S3a);this.xda(null);this.vda(null);this.dBa(c);if(this.xn&&!this.mna(a.Kt.MIa,this.xn))return}else if(null!=this.xn&&(this.dBa(c),!this.mna(a.Kt.NIa,this.xn)))return;this.cga.Ctc();this.krb()}};m.fP=function(d){var e=this.zPb();if(this.dMa())this.SX(d?a.AP.N3a:a.Ki.OFb);else{if(this.y$a())this.Qn=a.Ki.QIa;else if(this.qba()&&(this.SX(a.Ki.RIa),this.$q&&(this.mD=b.Bm(),this.xn&&this.mna(a.Kt.i$,this.xn),this.xda(null),this.vda(null)),this.Yr&&(d=new c.kfb(this,
this.Yr,d?a.AP.N3a:a.AP.xFb),this.Yr.xd(a.$.Scb,null,d))),this.Qn=a.Ki.QIa,this.kt){if(e||!b.Cp(a.ac.Sxa,this.kt.Qc))this.kt.Oo(),this.f3(a.Ki.PIa);this.dBa(null);this.jRa(null)}this.B5b()}};m.CP=function(){var b=!1;if(this.dMa())return this.SX(a.Ki.PFb),b;if(this.y$a())return b;if(this.kt||this.cJc())this.kt&&(this.zPb()||0==(this.kt.Qc&a.ac.Sxa))&&(this.kt.Oo(),this.f3(a.Ki.PIa)),this.qba()&&(b=this.IQc()),this.Qn=a.Ki.QIa,this.B5b();return b};m.SRc=function(){this.WFc()||this.fP()};m.IQc=function(){var d=
!1,e=this.X6a(),f=this.L7a(),g=this.v8a(),h=this.Fka(),k=a.AP.wFb;this.f3(a.Ki.Q3a);this.f3(a.Ki.RFb);this.SX(a.Ki.RIa);this.cga.CP();f&&(this.vda(null),this.mD=b.Bm(),f=new c.cYb(this,g,k),g.xd(a.$.Rcb,null,f),k=f.dga,g&&this.mna(a.Kt.i$,g),d=!0,this.xda(null));e&&h&&(f=new c.kfb(this,h,k),h.xd(a.$.Scb,null,f));return d};m.B5b=function(){this.NRa(null);this.kRa(null);this.dBa(null);this.jRa(null);this.cga.CP();a.pVa=null;a.qN&&(a.qN.kV(),a.qN=null)};m.cZc=function(d,e,f,g){this.fP();this.jRa(d);
this.Sia(a.Ki.SFb,0>b.wi(a.Ma.oqa));f?(this.Hga=e,d=d.hP(this.Hga),this.Jfc=new c.ga(d.Db(),d.Eb(),0,0)):(this.Hga=b.Bm(),e=new c.dJ(15,15),this.Jfc=new c.ga(this.Hga.Db()-e.aa()/2,this.Hga.Eb()-e.ba()/2,e.aa(),e.ba()),this.Hga=d.mi(this.Hga));if(g||!b.Cp(a.ac.Sxa,this.kt.Qc))this.kt.ID(),this.SX(a.Ki.PIa);f&&this.Bzb()};m.Rbd=function(b){this.qba()&&(this.Sia(a.Ki.OIa,b),this.mxa()?this.CP():this.fP(!0))};m.krb=function(){var b;this.qba()&&(b=null,this.xn&&(b=this.FW),null==b&&(b=this.mxa()?e.Hka().nY().get("APPSTARTING"):
e.Hka().nY().get("NO")),a.pVa=b)};m.U3b=function(){if(0==(this.Qn&a.Ki.RIa)){if(0!=(this.Qn&a.Ki.PFb))return this.fP(!0),!1;if(0!=(this.Qn&a.Ki.OFb))return this.fP(),!1;if(0!=(this.Qn&a.Ki.Jtc))return this.CP(),!1}return!0};m.vSc=function(){this.SX(a.Ki.Iua);var b=new c.KZb(this,this.Yr);this.Yr.xd(a.$.aSb,null,b);this.f3(a.Ki.Iua);return this.U3b()?b.$Va?!0:(this.fP(),!1):!1};m.mna=function(d,e){this.SX(a.Ki.Iua);null!=this.kt&&null!=this.$q||this.NN==a.OI.u4||(b.zM().Mka().wa(this,a.G.h0,null),
this.NN=a.OI.u4);switch(d){case a.Kt.i$:this.NN!=a.OI.u4&&(b.zM().Mka().wa(this,a.G.h0,null),this.NN=a.OI.u4);if(e){var f=new c.Pya(this,e,a.Kt.i$);e.xd(a.$.Ola,null,f)}break;case a.Kt.MIa:e&&(f=new c.Pya(this,e,a.Kt.MIa),e.xd(a.$.Ola,null,f));this.NN==a.OI.u4&&b.zM().Mka().wa(this,a.G.h0,this.g$);this.NN=a.OI.aMa;this.wW=this.mD;break;case a.Kt.NIa:this.NN!=a.OI.u4&&(f=new c.dJ(15,15),this.mD.Db()<this.wW.Db()-f.aa()||this.mD.Db()>this.wW.Db()+f.aa()||this.mD.Eb()<this.wW.Eb()-f.ba()||this.mD.Eb()>
this.wW.Eb()+f.ba())&&(this.NN=a.OI.aMa,this.wW=this.mD);e&&(f=new c.Pya(this,e,a.Kt.NIa),e.xd(a.$.Ola,null,f));break;case a.Kt.Hua:this.NN!=a.OI.u4&&(this.mD=b.Bm(),f=new c.dJ(15,15),this.mD.Db()<this.wW.Db()-f.aa()||this.mD.Db()>this.wW.Db()+f.aa()||this.mD.Eb()<this.wW.Eb()-f.ba()||this.mD.Eb()>this.wW.Eb()+f.ba()?(this.NN=a.OI.aMa,this.wW=this.mD):this.NN==a.OI.aMa?(this.NN=a.OI.QGc,this.bYa=0):(this.bYa++,e&&(f=new c.Pya(this,e,a.Kt.Hua),e.xd(a.$.Ola,null,f))))}this.f3(a.Ki.Iua);return this.U3b()};
m.Dgd=function(b){var c=this.dNb();this.Qn=this.Qn&~a.Ki.R3a|(b?a.Ki.R3a:0);return c};m.g$=function(){this.qba()&&this.xn&&this.mna(a.Kt.Hua,this.xn)&&this.krb()};m.FDb=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.vda(null);break;case a.f.h:this.krb()}};m.t3a=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.jRa(null)}};m.z3a=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.dBa(null)}};m.FIa=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.Yr.Da(this,this.FIa),this.Yr=
null,this.fP(!1)}};m.HIa=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.xn.Da(this,this.HIa),this.xn=null}};m.mIa=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.yH.Da(this,this.mIa),this.yH=null}};m.nIa=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.vN.Da(this,this.nIa),this.vN=null}};c.dYb=function(){p.w.call(this);this.a8=null;this.LWa=!1;this.B8=new c.ld(0,0);this.Esa=new c.ld(0,0)};var p=c.u(c.dYb,c.wd);p.vb=function(){b.W().wda(null)};p.Mrd=function(){return this.a8};
p.c4c=function(a){this.LWa=!1;null!=a&&a.rb()&&(this.Esa.nl(a.rb().Wa()),this.Esa.Sk(a.rb().Pa()),this.B8.nl(-(this.Esa.Db()+1)),this.B8.Sk(-(this.Esa.Eb()+1)),b.W().wda(a),this.LWa=!0)};p.CP=function(){var a=b.W().tw;null!=this.a8?(this.a8.dua(),delete this.a8,this.a8=null):a&&(a.Al(),b.W().wda(null));this.LWa=!1};p.Ctc=function(){if(this.LWa){var d=b.W().tw,e=b.Bm(),e=new c.ga(e.Db()+this.B8.Db(),e.Eb()+this.B8.Eb(),this.Esa.Db(),this.Esa.Eb());if(this.a8)this.a8.aFd(e),this.a8.IDd(e);else if(d){var f=
d.rh();d.Jz(a.li.ex,null,e.Vpa(),null);f||(this.B8.nl(this.B8.Db()-(e.Q()-d.Ef.Db())),this.B8.Sk(this.B8.Eb()-(e.O()-d.Ef.Eb())))}}};c.ifb=function(){h.w.call(this);this.nEa=a.zP.rCb;this.tw=this.bga=null};var h=c.u(c.ifb,c.wd);h.U=function(){h.j.U.call(this);this.wda(null)};h.lKb=function(){return this.tw};h.wda=function(b){this.tw!=b&&(this.tw&&this.tw.Da(this,this.qIa),(this.tw=b)&&this.tw.Ea(this,this.qIa),this.l(a.f.h))};h.U_c=function(b){this.nEa!=b&&(this.nEa=b,this.l(a.f.h))};h.Ird=function(){return this.nEa};
h.T_c=function(b){this.bga!=b&&(this.bga&&this.bga.xb(),(this.bga=b)&&this.bga.Ca(),this.l(a.f.h))};h.Yyc=function(){return this.bga};h.qIa=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.wda(null)}};e.kd(c.ifb,"PRIM_DGLT",{Oa:{DragPopup:{a:h.lKb,g:h.wda},DragImage:{a:h.Yyc,g:h.T_c},DragListStyle:{a:function(){return e.ta(this.nEa,a.zP.v)},g:function(b){this.U_c(e.ra(b,a.zP.v))}}}});c.Oya=function(b,c,e){r.w.call(this,c);this.JK=a.vV.S5b;this.Pn=b;this.yH=e;this.oha=this.nha=0};var r=c.u(c.Oya,
c.IXb);r.X6a=function(){return this.Pn.X6a()};r.Fka=function(){return this.Pn.QCc()};r.iaa=function(){return this.Pn.iaa()};r.Vja=function(){return this.Pn.Vja()};r.ska=function(){return this.Pn.ska()};r.Paa=function(){return this.Pn.S7a()};r.CLb=function(){return this.Pn.CLb()};r.T7a=function(){return this.Pn.S7a().Db()+this.nha};r.U7a=function(){return this.Pn.S7a().Eb()+this.oha};r.qvd=function(){return this.nha};r.QRa=function(a){this.nha=a};r.rvd=function(){return this.oha};r.RRa=function(a){this.oha=
a};r.zI=function(){return this.Pn.zI()};r.mQb=function(){return this.Pn.mQb()};r.G5b=function(){var a=this.yH;null==a&&(a=this.Pn.iaa());return a};c.KZb=function(a,b){k.w.call(this,a,b,null);this.$Va=!0};var k=c.u(c.KZb,c.Oya);k.Epd=function(){return this.$Va};k.C_c=function(a){this.$Va=a};k.NRa=function(a){this.Pn.NRa(a)};k.kRa=function(a){this.Pn.kRa(a)};c.kfb=function(a,b,c){s.w.call(this,a,b,null);this.dga=c};var s=c.u(c.kfb,c.Oya);s.Zyc=function(){return this.dga};c.Pya=function(a,b,c){f.w.call(this,
a,b,null);this.Qn=c};var f=c.u(c.Pya,c.Oya);f.n7a=function(){return this.Pn.n7a()};f.x7b=function(a){this.Pn.x7b(a)};f.pkb=function(a){this.Pn.pkb(a)};f.W5a=function(){return this.Pn.W5a()};f.t8b=function(a){this.Pn.t8b(a)};f.eMb=function(){return this.Pn.eMb()};f.nmb=function(a){this.Pn.nmb(a)};f.oLa=function(){return this.Pn.oLa()};f.Krd=function(){return this.Qn};f.xda=function(a){this.Pn.xda(a)};f.Z6a=function(){return this.Pn.Z6a()};f.vda=function(a){this.Pn.vda(a)};f.Y6a=function(){return this.Pn.Y6a()};
f.L7a=function(){return this.Pn.PLb()};f.v8a=function(){return this.Pn.RLb()};f.Bja=function(){return this.Pn.Bja()};c.cYb=function(a,b,c){g.w.call(this,a,b,null);this.dga=c};var g=c.u(c.cYb,c.Oya);g.L7a=function(){return this.Pn.PLb()};g.v8a=function(){return this.Pn.RLb()};g.Bja=function(){return this.Pn.Bja()};g.Zyc=function(){return this.dga};g.V_c=function(a){this.dga=a}});
