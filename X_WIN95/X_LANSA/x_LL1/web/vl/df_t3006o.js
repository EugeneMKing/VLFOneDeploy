﻿LANSA.addComponent({id:"DF_T3006O",ot:"rp",tp:"Reusable Part",de:"\\OC=Add style to Instance List Row",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC007O",mt:{uInitialize:{}},co:function(){cO.aN.call(this);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cR("BUTTON_STYLE","PRIM_PHBN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setCaption("Add a Style to the current row");C1.setDisplayPosition(1);C1.setHeight(33);C1.setLeft(8);C1.setParent(this);C1.setTabPosition(1);C1.setTop(8);
C1.setWidth(217);C1.setWordWrap(true);C1.iC();C1.aH("CLICK",this,e1);this.setHeight(111);this.setWidth(319);this.setLayoutManager(null);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",31);r.ln=31;{r.ln=33;this.setAVFILTERLOCATION("TOP");r.ln=34;this.setAVALLOWLOCATIONCHANGE(false);r.ln=37;m.PEOPLECONTROLLER.ref.mthLOADEXAMPLEDEPARTMENTINSTANCELIST(this.REF.AVLISTMANAGER);}r.ln=39;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Button_Style.Click",43);
var C0=r.cR("MYNEWSTYLE","PRIM_VS","Style");C0.setNormBackColor("BLUE");C0.setTextColor("WHITE");C0.iC();r.ln=43;{r.ln=46;if(this.REF.AVLISTMANAGER.getCURRENTINSTANCE()!=null){r.ln=48;this.REF.AVLISTMANAGER.getCURRENTINSTANCE().mthAVADDROWSTYLE(C0);r.ln=49;this.REF.AVLISTMANAGER.mthCREATEORUPDATEDISPLAYEDITEM(this.REF.AVLISTMANAGER.getCURRENTINSTANCE());}else{r.ln=53;l.WEB().mthALERT("Click on a row first");}}r.ln=57;r.e();};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O","DF_EMCTLO"],
rp:["PRIM_PHBN"],dp:["PRIM_VS.Style"]});