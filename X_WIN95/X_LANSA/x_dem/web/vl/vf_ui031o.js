﻿LANSA.addComponent({id:"VF_UI031O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE RAD-PAD Panel",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]
},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{zInt_Initialize:{ps:{"For":{pt:"i"}}},zInt_Terminate:{}},co:function(){cO.aN.call(this);this.aF("VF_UI031O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");
var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("WEBPAGE","PRIM_WEB","Page");var C5=this.cR("PLASTICWRAPPER","PRIM_PANL");var C6=this.cR("BACKGROUNDBRUSH","PRIM_VS","SolidBrush");var C7=this.cR("PLASTICWRAPPERBACKGROUND","PRIM_VS","Style");var C8=this.cR("PLASTICCOVERTIMER","PRIM_TIMR");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setManage(C4);C3.setParent(C2);C3.setAttachment("CENTER");C3.iC();
C4.setParent(this);C4.setDisplayPosition(2);C4.setTabPosition(1);C4.setTabStop(false);C4.setHeight(270);C4.setWidth(500);C4.iC();C5.setParent(this);C5.setDisplayPosition(1);C5.setTabPosition(2);C5.setStyle(C7);C5.setTop(0);C5.setLeft(0);C5.iC();C6.setColor("TRANSPARENT");C6.iC();C7.setBackgroundBrush(null);C7.iC();C8.setInterval(0);C8.iC();C8.aH("TICK",this,e2);this.setDisplayPosition(1);this.setHeight(270);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C2);
this.aH("SIZECHANGED",this,e1);}});cO.mthZINT_INITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",22);var P0=r.cPD("FOR");P0=p0;var C0=r.cF("GUID",Fd.F1.Dc);var C1=r.cR("URL","PRIM_ALPH");C0.iC();C1.iC();r.ln=22;{r.ln=30;if(l.Io(P0,"VF_AC007O")){r.ln=31;C0.set(l.cast(P0,"VF_AC007O").getASSOCIATEDFILTERDEFINITIONREFERENCE().getUIDENTIFIER());}else{r.ln=33;if(l.Io(P0,"VF_AC010O")){r.ln=34;C0.set(l.cast(P0,"VF_AC010O").getASSOCIATEDHANDLERDEFINITIONREFERENCE().getUIDENTIFIER());}
}r.ln=39;C1.set(l.cat(l.cat(l.cat(l.cat(l.cat("__RADPAD__",C0.get()),".HTM?VLFONE=TRUE&BC="),m.USYSTEM.ref.getCURRENTTHEME().getRADPAD_BACKGROUNDCOLOR()),"&TC="),m.USYSTEM.ref.getCURRENTTHEME().getRADPAD_TEXTCOLOR()));r.ln=42;m.USYSTEMCOMMON.ref.mthTRACEEVENT(P0,u,l.cat("Attempting to display RAD-PAD named ",C1.get()),u,u,false,u);r.ln=45;m.WEBPAGE.setSource(C1.get());r.ln=48;m.PLASTICWRAPPER.setVisible(false);r.ln=49;m.PLASTICCOVERTIMER.setInterval(10);}r.ln=51;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.SizeChanged",54);
r.ln=54;{r.ln=56;m.PLASTICCOVERTIMER.setInterval(10);}r.ln=58;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PlasticCoverTimer.Tick",61);var C0=r.cF("USEHEIGHT",Fd.F2.Dc);var C1=r.cF("USEWIDTH",Fd.F2.Dc);C0.iC();C1.iC();r.ln=61;{r.ln=66;m.PLASTICCOVERTIMER.setInterval(0);r.ln=68;C0.set(l.sub(m.WEBPAGE.getHeight(),18));r.ln=70;if(l.n.lt(C0.get(),0)){r.ln=71;C0.set(0);}r.ln=74;C1.set(l.sub(m.WEBPAGE.getWidth(),18));r.ln=76;if(l.n.lt(C1.get(),0)){r.ln=77;C1.set(0);}r.ln=80;m.PLASTICWRAPPER.setHeight(C0.get());
m.PLASTICWRAPPER.setWidth(C1.get());m.PLASTICWRAPPER.setTop(m.WEBPAGE.getTop());m.PLASTICWRAPPER.setLeft(m.WEBPAGE.getLeft());m.PLASTICWRAPPER.setDisplayPosition(1);m.PLASTICWRAPPER.setVisible(true);}r.ln=82;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",85);r.ln=85;{r.ln=86;m.WEBPAGE.setSource("");}r.ln=87;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);
};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_SY001O","VF_SY001X"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_WEB.Page","PRIM_VS.SolidBrush","PRIM_VS.Style","PRIM_TIMR","PRIM_FLD"],dp:["PRIM_ALPH"]});