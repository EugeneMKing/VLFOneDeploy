﻿LANSA.addComponent({id:"DF_T3003O",ot:"rp",tp:"Reusable Part",de:"\\OC=Change Instance List Col Headings",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:{"ENG":"Text","FRA":"Text","JPN":" "}[cL],h3:" ",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",ia:["LC","FE"]}};var cO=l.rC(oI,{an:"VF_AC007O",
fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_T3003O",Fd);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cR("LABL_1","PRIM_LABL");var C2=this.cF("DF_ELTX",Fd.F1.VISUALEDIT);var C3=this.cR("BUTTON_CHANGE","PRIM_PHBN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setCaption("New Column Heading for \"Description\" Column");C1.setDisplayPosition(1);C1.setHeight(25);C1.setLeft(8);C1.setParent(this);C1.setTabPosition(1);C1.setTabStop(false);C1.setTop(8);C1.setWidth(305);
C1.setVerticalAlignment("CENTER");C1.iC();C2.setDisplayPosition(2);C2.setHeight(25);C2.setParent(this);C2.setTabPosition(2);C2.setTop(32);C2.setLeft(8);C2.setWidth(257);C2.setLabelType("CAPTION");C2.setMarginLeft(0);C2.aD();C2.iC();C3.setCaption("Change Column Heading");C3.setDisplayPosition(3);C3.setHeight(33);C3.setLeft(8);C3.setParent(this);C3.setTabPosition(3);C3.setTop(64);C3.setWidth(257);C3.iC();C3.aH("CLICK",this,e1);this.setHeight(111);this.setWidth(327);this.setLayoutManager(null);}});var cA=cO.aN.prototype;
cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",39);r.ln=39;{r.ln=41;this.setAVFILTERLOCATION("TOP");r.ln=42;this.setAVALLOWLOCATIONCHANGE(false);r.ln=44;m.DF_ELTX.set("My new column heading");r.ln=47;m.PEOPLECONTROLLER.ref.mthLOADEXAMPLEDEPARTMENTINSTANCELIST(this.REF.AVLISTMANAGER);}r.ln=49;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Change.Click",53);r.ln=53;{r.ln=54;this.REF.AVLISTMANAGER.getINSTANCELISTBROWSER().getVISUALIDCOLUMNS().get(2).setColumnCaption(m.DF_ELTX.get());
}r.ln=55;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"DF_ELTX"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"DF_ELTX",cn:"VisualEdit"});}cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O","DF_EMCTLO"],rp:["PRIM_LABL","PRIM_EVEF","PRIM_PHBN"]});