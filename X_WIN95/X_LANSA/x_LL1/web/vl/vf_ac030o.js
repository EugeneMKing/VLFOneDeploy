﻿LANSA.addComponent({id:"VF_AC030O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Ancestor for Settings Pane",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELSYMN",an:"VF_ELSYMNAME",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC034O",fd:Fd,pt:{uHint:{da:"na"},uImageName:{da:"na"},uTransition:{da:"na"}},mt:{uDisplayRequested:{ps:{"AdditionalRequestdetails":{pt:"i"
}}}},co:function(){cO.aN.call(this);this.aF("VF_AC030O",Fd);this.setHeight(439);this.setWidth(295);}});cO.mthGET_UHINT=function(){var r=l.pR(this,cO,"Get_uHint",11);var P0=r.cP("RETURNHINT","PRIM_DC","UnicodeString");r.ln=11;{r.ln=14;P0.set(this.REF.USYSTEM.ref.mthAVPREPAREHINT(this.REF.USYSTEM.ref.getUMTXTVALUES("SETTINGS2")));}r.ln=15;return r.rV(P0.get());};cO.mthGET_UIMAGENAME=function(){var r=l.pR(this,cO,"Get_uImageName",18);var P0=r.cPF("RETURNIMAGENAME",Fd.F1.Dc);r.ln=18;{r.ln=21;P0.set("SETTINGS");
}r.ln=22;return r.rV(P0.get());};cO.mthGET_UTRANSITION=function(){var r=l.pR(this,cO,"Get_uTransition",26);var P0=r.cP("RETURNTRANSITIONTYPE","PRIM_ALPH");r.ln=26;{r.ln=29;P0.set("FADEINANDSCALE");}r.ln=30;return r.rV(P0.get());};cO.mthUDISPLAYREQUESTED=function(p0){var r=l.mR(this,cO,"uDisplayRequested",34);var P0=r.cPD("ADDITIONALREQUESTDETAILS");P0=p0;r.ln=34;{}r.ln=37;r.e();};cO.getUHINT=function(){return this.mthGET_UHINT();};cO.getUIMAGENAME=function(){return this.mthGET_UIMAGENAME();};cO.getUTRANSITION=function()
{return this.mthGET_UTRANSITION();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}},{rc:["VF_AC034O"],rp:["PRIM_FLD"]});