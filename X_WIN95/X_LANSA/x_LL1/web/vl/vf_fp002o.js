﻿LANSA.addComponent({id:"VF_FP002O",ot:"rp",tp:"Reusable Part",de:"\\OC=Application (VLF-ONE)",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F2:{nm:"VF_ELTXTA",ft:"A",ln:132,dc:0,ks:"O",lb:"Standard Long T",h1:"Standard",h2:"Long",h3:"Text",de:"Standard Long Text",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,
{an:"VF_AC009O",fd:Fd,pt:{ChildVF_FP018O:{da:"r"},VF_UI002TabSheetManager:{da:"rw"},uTechSupport:{da:"r"},uABoutImageURL_Light:{da:"r"},uABoutImageURL_Dark:{da:"r"},uCenterAboutPanel:{da:"r"},uAboutLineMax:{da:"r"},uAboutLine:{da:"na"},Associated_VF_UI023O:{da:"rw"}},mt:{zInt_EnrollChild:{ps:{"uReference":{pt:"i"}}},zInt_SetProperty:{ps:{"P":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_FP002O",Fd);var C0=this.cR("CHILDVF_FP018O","PRIM_ACOL");this.cD("VF_UI002TABSHEETMANAGER");var C2=this.cR("UTECHSUPPORT","PRIM_DC","UnicodeString");
var C3=this.cR("UABOUTIMAGEURL_LIGHT","PRIM_DC","UnicodeString");var C4=this.cR("UABOUTIMAGEURL_DARK","PRIM_DC","UnicodeString");var C5=this.cR("UCENTERABOUTPANEL","PRIM_BOLN");var C6=this.cF("UABOUTLINEMAX",Fd.F1.Dc);var C7=this.cR("ABOUTLINE","PRIM_KCOL");this.cD("ASSOCIATED_VF_UI023O");C0.setCollects("VF_FP018O");C0.iC();C2.iC();C3.iC();C4.iC();C5.iC();C6.aD();C6.iC();C7.setStyle("COLLECTION");C7.setCollects("VF_ELTXTA",Fd.F2.Dc);C7.setKeyedBy(Fd.F1.Dc);C7.iC();this.aH("CREATEINSTANCE",this,e1);
}});var cA=cO.aN.prototype;function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",42);r.ln=42;{r.ln=44;m.UCENTERABOUTPANEL.set(true);}r.ln=46;r.e();};cO.mthGET_UABOUTLINE=function(p1){var m=this.REF,r=l.pR(this,cO,"Get_uAboutLine",49);var P0=r.cPD("LINE");var P1=r.cPF("LINENUMBER",Fd.F1.Dc);P1.set(p1);r.ln=49;{r.ln=54;P0=r.sR("P0",m.ABOUTLINE.get(P1.get()));}r.ln=55;return r.rR(P0);};cO.mthZINT_ENROLLCHILD=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_EnrollChild",59);
var P0=r.cPD("UREFERENCE");var P1=r.cP("LATEENROLLREJECTED","PRIM_BOLN");P0=p0;r.ln=59;{r.ln=62;cA.mthZINT_ENROLLCHILD.call(this,P0);r.ln=65;if(l.Io(P0,"VF_FP018O")){r.ln=66;m.CHILDVF_FP018O.mthINSERT(l.cast(P0,"VF_FP018O"));return r.rV(P1.get());}}r.ln=70;return r.rV(P1.get());};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",72);var P0=r.cPD("P");P0=p0;r.ln=72;{r.ln=76;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=78;cA.mthZINT_SETPROPERTY.call(this,P0);r.e();
return;}r.ln=84;{var v1=P0.getPROPERTYNUMBER();if(r.ln=86,l.n.eq(v1,201)){r.ln=87;m.UABOUTIMAGEURL_LIGHT.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=89,l.n.eq(v1,206)){r.ln=90;m.ABOUTLINE.set(P0.getINSTANCE(),new Fd.F2.Dc());r.ln=91;m.ABOUTLINE.get(P0.getINSTANCE()).set(l.s.AsNativeString(P0.getVALUE()));r.ln=92;m.UABOUTLINEMAX.set(P0.getINSTANCE());}else if(r.ln=94,l.n.eq(v1,207)){r.ln=95;m.UABOUTIMAGEURL_DARK.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=97,l.n.eq(v1,208)){r.ln=98;
m.UTECHSUPPORT.set(P0.getVALUE());}else if(r.ln=100,l.n.eq(v1,210)){r.ln=101;m.UCENTERABOUTPANEL.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}r.ln=103;}}r.ln=105;r.e();};cO.getCHILDVF_FP018O=function(){return this.REF.CHILDVF_FP018O;};cO.getVF_UI002TABSHEETMANAGER=function(){return this.REF.VF_UI002TABSHEETMANAGER;};cO.setVF_UI002TABSHEETMANAGER=function(v){this.srVF_UI002TABSHEETMANAGER(v);};cO.getUTECHSUPPORT=function(){return this.REF.UTECHSUPPORT.get();};cO.getUABOUTIMAGEURL_LIGHT=function()
{return this.REF.UABOUTIMAGEURL_LIGHT.get();};cO.getUABOUTIMAGEURL_DARK=function(){return this.REF.UABOUTIMAGEURL_DARK.get();};cO.getUCENTERABOUTPANEL=function(){return this.REF.UCENTERABOUTPANEL.get();};cO.getUABOUTLINEMAX=function(){return this.REF.UABOUTLINEMAX.get();};cO.getUABOUTLINE=function(KEY_1){return this.mthGET_UABOUTLINE(KEY_1);};cO.getASSOCIATED_VF_UI023O=function(){return this.REF.ASSOCIATED_VF_UI023O;};cO.setASSOCIATED_VF_UI023O=function(v){this.srASSOCIATED_VF_UI023O(v);};{Fd.F1.Dc=function()
{this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELTXTA"});}cO.srVF_UI002TABSHEETMANAGER=function(rn){this.sR("VF_UI002TABSHEETMANAGER",rn);};cO.srASSOCIATED_VF_UI023O=function(rn){this.sR("ASSOCIATED_VF_UI023O",rn);};},{rc:["VF_AC009O"],rp:["PRIM_ACOL","PRIM_DC.UnicodeString","PRIM_BOLN","PRIM_FLD","PRIM_KCOL"],dc:["VF_UI002O","VF_UI023O","VF_FP018O"]});