﻿LANSA.addComponent({id:"VF_FP026O",ot:"rp",tp:"Reusable Part",de:"\\OC=Node group (VLFONE)",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"VF_AC001O",fd:Fd,pt:{uHscroll:{da:"r"},uVscroll:{da:"r"},uNodeJSFileName:{da:"r"},uButtonPanelLocation:{da:"r"},uButtonHeight:{da:"r"},uButtonWidth:{da:"r"},uButtonSpacing:{da:"r"},VLFONESharedSession:{da:"r"},VLFONESharedSessionStarted:{da:"rw"},VLFONESharedSessionAvailable:{da:"rw"},VLFONEReusableSession:{da:"r"},VLFONEReusablePoolMaximum:{da:"r"},LogoffTimeOut:{da:"r"}},mt:{zInt_SetProperty:{ps:{"P":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_FP026O",Fd);var C0=this.cR("UHSCROLL","PRIM_BOLN");
var C1=this.cR("UVSCROLL","PRIM_BOLN");var C2=this.cR("UNODEJSFILENAME","PRIM_ALPH");var C3=this.cR("UBUTTONPANELLOCATION","PRIM_ALPH");var C4=this.cF("UBUTTONHEIGHT",Fd.F1.Dc);var C5=this.cF("UBUTTONWIDTH",Fd.F1.Dc);var C6=this.cF("UBUTTONSPACING",Fd.F1.Dc);var C7=this.cR("VLFONESHAREDSESSION","PRIM_BOLN");var C8=this.cR("VLFONESHAREDSESSIONSTARTED","PRIM_BOLN");var C9=this.cR("VLFONESHAREDSESSIONAVAILABLE","PRIM_BOLN");var C10=this.cR("VLFONEREUSABLESESSION","PRIM_BOLN");var C11=this.cF("VLFONEREUSABLEPOOLMAXIMUM",Fd.F1.Dc);
var C12=this.cF("LOGOFFTIMEOUT",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();C4.aD();C4.iC();C5.aD();C5.iC();C6.aD();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();C11.aD();C11.iC();C12.aD();C12.iC();this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",49);r.ln=49;{r.ln=52;m.UBUTTONPANELLOCATION.set("RIGHT");r.ln=53;m.UBUTTONHEIGHT.set(20);r.ln=54;m.UBUTTONWIDTH.set(137);r.ln=55;m.UBUTTONSPACING.set(1);r.ln=56;m.VLFONEREUSABLEPOOLMAXIMUM.set(5);
r.ln=57;m.LOGOFFTIMEOUT.set(10);}r.ln=59;r.e();};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",62);var P0=r.cPD("P");P0=p0;var C0=r.cR("UVALUE","PRIM_ALPH");C0.iC();r.ln=62;{r.ln=68;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=70;cA.mthZINT_SETPROPERTY.call(this,P0);r.e();return;}r.ln=77;{var v1=P0.getPROPERTYNUMBER();if(r.ln=79,l.n.eq(v1,201)){r.ln=80;m.UHSCROLL.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=82,l.n.eq(v1,202)){r.ln=83;m.UVSCROLL.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));
}else if(r.ln=85,l.n.eq(v1,203)){r.ln=86;m.UNODEJSFILENAME.set(P0.getVALUE());}else if(r.ln=88,l.n.eq(v1,204)){r.ln=89;m.UBUTTONPANELLOCATION.set(P0.getVALUE());}else if(r.ln=91,l.n.eq(v1,205)){r.ln=92;m.UBUTTONHEIGHT.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=94,l.n.eq(v1,206)){r.ln=95;m.UBUTTONWIDTH.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=97,l.n.eq(v1,207)){r.ln=98;m.UBUTTONSPACING.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=100,l.n.eq(v1,208)){r.ln=101;m.VLFONESHAREDSESSION.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));
}else if(r.ln=103,l.n.eq(v1,209)){r.ln=104;m.VLFONEREUSABLESESSION.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=106,l.n.eq(v1,210)){r.ln=107;m.VLFONEREUSABLEPOOLMAXIMUM.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=109,l.n.eq(v1,211)){r.ln=110;m.LOGOFFTIMEOUT.set(l.s.AsNumber(P0.getVALUE()));}r.ln=113;}r.e();return;}r.ln=117;};cO.getUHSCROLL=function(){return this.REF.UHSCROLL.get();};cO.getUVSCROLL=function(){return this.REF.UVSCROLL.get();};cO.getUNODEJSFILENAME=function(){return this.REF.UNODEJSFILENAME.get();
};cO.getUBUTTONPANELLOCATION=function(){return this.REF.UBUTTONPANELLOCATION.get();};cO.getUBUTTONHEIGHT=function(){return this.REF.UBUTTONHEIGHT.get();};cO.getUBUTTONWIDTH=function(){return this.REF.UBUTTONWIDTH.get();};cO.getUBUTTONSPACING=function(){return this.REF.UBUTTONSPACING.get();};cO.getVLFONESHAREDSESSION=function(){return this.REF.VLFONESHAREDSESSION.get();};cO.getVLFONESHAREDSESSIONSTARTED=function(){return this.REF.VLFONESHAREDSESSIONSTARTED.get();};cO.setVLFONESHAREDSESSIONSTARTED=function(v)
{this.REF.VLFONESHAREDSESSIONSTARTED.set(v);};cO.getVLFONESHAREDSESSIONAVAILABLE=function(){return this.REF.VLFONESHAREDSESSIONAVAILABLE.get();};cO.setVLFONESHAREDSESSIONAVAILABLE=function(v){this.REF.VLFONESHAREDSESSIONAVAILABLE.set(v);};cO.getVLFONEREUSABLESESSION=function(){return this.REF.VLFONEREUSABLESESSION.get();};cO.getVLFONEREUSABLEPOOLMAXIMUM=function(){return this.REF.VLFONEREUSABLEPOOLMAXIMUM.get();};cO.getLOGOFFTIMEOUT=function(){return this.REF.LOGOFFTIMEOUT.get();};{Fd.F1.Dc=function()
{this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC001O"],rp:["PRIM_BOLN","PRIM_ALPH","PRIM_FLD"],dp:["PRIM_ALPH"]});