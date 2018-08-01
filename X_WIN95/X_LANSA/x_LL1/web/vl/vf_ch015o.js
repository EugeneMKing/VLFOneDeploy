﻿LANSA.addComponent({id:"VF_CH015O",ot:"rp",tp:"Reusable Part",de:"\\OC=User Authorities",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F2:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",
de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F3:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F4:{nm:"VF_ELOID1",ft:"A",ln:32,dc:0,lb:{"ENG":"Object ID","FRA":"Business Object","JPN":"Business Object"}[cL],h1:{"ENG":"Object","FRA":"Business","JPN":"Business"}[cL],h2:{"ENG":"ID","FRA":"Object","JPN":"Object"}[cL],h3:{"ENG":"","FRA":"ID","JPN":"ID"}[cL],
de:{"ENG":"Object ID","FRA":"Business Object ID","JPN":"Business Object ID"}[cL],dv:"",ia:["FE"]},F5:{nm:"VF_ELCA_4",an:"VF_ELCAP2U",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC"]},F6:{nm:"VF_ELAVAL",ft:"A",ln:132,dc:0,ks:"O",lb:"Alpha Persitent",h1:"Alpha",h2:"Persitent",h3:"Property",de:"Alpha Persitent Property",dv:"",ia:["FE","LC"]},F7:{nm:"VF_ELCA_1",an:"VF_ELCAPNU",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC","ASQN"],
oa:["ASQN"]},F8:{nm:"VF_ELBOOL",ft:"A",ln:5,dc:0,lb:{"ENG":"Standard","FRA":"?","JPN":"Standard Boolea"}[cL],h1:{"ENG":"Boolean","FRA":"?","JPN":"Standard"}[cL],h2:{"ENG":"","FRA":"","JPN":"Boolean"}[cL],h3:"",de:{"ENG":"Standard Boolean","FRA":"?","JPN":"Standard Boolean"}[cL],dv:"",ia:["FE"]},F9:{nm:"VF_ELBOLN",ft:"B",ln:1,dc:0,lb:"True Boolean",h1:"True",h2:"Boolean",h3:"",de:"True Boolean",dv:l.SqlNull,ia:["ASQN"]},F10:{nm:"OBJECTGUID",ft:"A",ln:40,dc:0,lb:"ObjectGUID",h1:"ObjectGUID",h2:"",h3:"",
de:"ObjectGUID",dv:""},F11:{nm:"ALLOWACCESS",ft:"B",ln:1,dc:0,lb:"AllowAccess",h1:"AllowAccess",h2:"",h3:"",de:"AllowAccess",dv:false},F12:{nm:"USERACCESS",ft:"A",ln:1,dc:0,lb:"UserAccess",h1:"UserAccess",h2:"",h3:"",de:"UserAccess",dv:""},F13:{nm:"GROUPACCESS",ft:"A",ln:1,dc:0,lb:"GroupAccess",h1:"GroupAccess",h2:"",h3:"",de:"GroupAccess",dv:""},F14:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F15:{nm:"AUTHLINE_GUID",ft:"A",ln:80,dc:0,lb:"AUTHLINE_GUID",h1:"AUTHLINE_GUID",h2:"",h3:"",de:"AUTHLINE_GUID",dv:""},F16:{nm:"AUTHLINE_ACCESS",ft:"A",ln:40,dc:0,lb:"AUTHLINE_ACCESS",h1:"AUTHLINE_ACCESS",h2:"",h3:"",de:"AUTHLINE_ACCESS",dv:""}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},uLoadAuthlist:
{},uUpdateServer:{},uaddFrameworkToTree:{},uAddItemToTree:{ps:{"CurrentFPNNN":{pt:"i"},"ParentItem":{pt:"i"},"ParentAuthorized":{pt:"i"},"Access":{pt:"i"},"GRP_Access":{pt:"i"},"Allow":{pt:"i"},"NewParentAuthorized":{pt:"o"}}},UpdateVisualItemChildren:{ps:{"ListItem":{pt:"i"},"UpdateServerList":{pt:"i"}}},UpdateParentAuthority:{ps:{"ListItem":{pt:"i"}}},SetEXCLUDEs:{ps:{"ListItem":{pt:"i"}}},UpdateServerAuthList:{ps:{"WithGUID":{pt:"i"},"WithAccess":{pt:"i"},"cap":{pt:"i"}}}},co:function(){cO.aN.call(this);
var f=this.aF("VF_CH015O",Fd);var C0=this.cR("CURRENTUSERID","PRIM_ALPH");var C1=this.cR("CURRENTUSERNAME","PRIM_ALPH");var C2=this.cR("TABLELAYOUT","PRIM_TBLO");var C3=this.cR("ROW","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C6=this.cR("ATTACHITEM1","PRIM_ATLI");var C7=this.cR("AUTHLIST","PRIM_LIST");var C8=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C9=this.cR("UCAPTION","PRIM_LIST","String");var C10=this.cR("UIDENTIFIER","PRIM_LIST","String");
var C11=this.cR("UACCESS","PRIM_LIST","String");var C12=this.cR("UPARENTAUTHORIZED","PRIM_LIST","String");var C13=this.cR("RESTRICTED","PRIM_LIST","String");var C14=this.cR("USERAUTHORITIESLIST","PRIM_ACOL");var C15=this.cA("USERVERINTERFACE","VF_SY169O");var C16=this.cR("UPDATEUSERAUTHORITIES","PRIM_ACOL");C0.iC();C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.iC();C6.setManage(C7);C6.setParent(C5);C6.setAttachment("CENTER");
C6.iC();C7.setDisplayPosition(1);C7.setHeight(281);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(1);C7.setTop(0);C7.setWidth(705);C7.setSelectionStyle("ALL");C7.setRowLines(false);C7.setColumnLines(false);C7.setCheckBoxes(true);C7.setColumnHeaderHeight(0);C7.setTreeButtons(false);C7.iC();C8.setColumn(C4);C8.setManage(C7);C8.setParent(C2);C8.setRow(C3);C8.iC();C9.setDisplayPosition(1);C9.setParent(C7);C9.setSource(f.F7);C9.setColumnWidth(175);C9.setColumnCaptionType("CAPTION");C9.setColumnUnits("PROPORTION");
C9.iC();C10.setDisplayPosition(4);C10.setParent(C7);C10.setSource(f.F2);C10.setColumnWidth(215);C10.setVisible(false);C10.iC();C11.setDisplayPosition(3);C11.setParent(C7);C11.setSource(f.F3);C11.setColumnVisible(false);C11.iC();C12.setDisplayPosition(2);C12.setParent(C7);C12.setSource(f.F8);C12.setColumnVisible(false);C12.iC();C13.setDisplayPosition(5);C13.setParent(C7);C13.setSource(f.F9);C13.setColumnVisible(false);C13.iC();C14.setCollects("VF_SY181O");C14.iC();if((C15!=null)&&(C15.iI()==false))
{C15.iC();}C16.setCollects("VF_SY180O");C16.iC();C7.aH("ITEMCHANGED",this,e3);this.REF.UFRAMEWORK.ref.aH("USERDELETED",this,e1);this.REF.AVLOCALTIMER.aH("TICK",this,e2);C14.aLF({});C16.aLF({});this.setHeight(281);this.setWidth(705);this.setLayoutManager(C5);this.setVerticalScroll(true);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",51);r.ln=51;{r.ln=53;cA.mthUINITIALIZE.call(this);r.ln=55;this.REF.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.AUTHLIST,this);
}r.ln=57;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",59);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;var C0=r.cF("DELETERESULT",Fd.F1.Dc);var C1=r.cR("LINEFEED","PRIM_DC","UnicodeString");C0.iC();C1.iC();r.ln=59;{r.ln=64;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=66;m.USERAUTHORITIESLIST.clearList();r.ln=67;m.UPDATEUSERAUTHORITIES.clearList();r.ln=68;m.AUTHLIST.clearList();r.ln=70;if((this.getAVASSOCIATEDINSTANCE()==null))
{r.ln=72;m.CURRENTUSERID.set("");r.ln=73;m.CURRENTUSERNAME.set("");r.ln=75;this.mthAVCLOSEFORM();}else{r.ln=79;m.CURRENTUSERID.set(this.getAVASSOCIATEDINSTANCE().getAVAKEY1().get());r.ln=80;m.CURRENTUSERNAME.set(this.getAVASSOCIATEDINSTANCE().getAVVISUALID1().get());r.ln=82;this.REF.AVLOCALTIMERREQUEST.set("LOAD_AUTHLIST");r.ln=83;this.mthAVGOTOBUSYSTATE(this.REF.USYSTEM.ref.getUMTXTVALUES("LOADING"),false,u);r.ln=84;this.REF.AVLOCALTIMER.setInterval(1);}p0.set(P0.get());}r.ln=88;r.e();};function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#UFRAMEWORK.UserDeleted",91);var P0=Ps.r("USERIDENTIFIER");r.ln=91;{r.ln=94;if(l.tB(l.s.eq(m.CURRENTUSERID.get(),P0.get()))){r.ln=95;this.mthAVCLOSEFORM();}}r.ln=98;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#AVLOCALTIMER.Tick",101);r.ln=101;{r.ln=103;this.REF.AVLOCALTIMER.setInterval(0);r.ln=105;{var v1=this.REF.AVLOCALTIMERREQUEST.get();if(r.ln=107,l.s.eq(v1,"LOAD_AUTHLIST")){r.ln=109;this.mthULOADAUTHLIST();}else if(r.ln=111,l.s.eq(v1,"SHOW_AUTHLIST")){r.ln=113;
this.mthUADDFRAMEWORKTOTREE();}else if(r.ln=115,l.s.eq(v1,"UPDATE_AUTHORITIES_SERVER")){r.ln=117;this.mthUUPDATESERVER();}else{}r.ln=121;}}r.ln=123;r.e();};cO.mthULOADAUTHLIST=function(){var m=this.REF,r=l.mR(this,cO,"uLoadAuthlist",125);var C0=r.cR("RETURNCODE","PRIM_ALPH");C0.iC();r.ln=125;{r.ln=129;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=131;m.AUTHLIST.clearList();r.ln=133;m.USERVERINTERFACE.ref.mthZINT_LOADUSERAUTHORITY(m.CURRENTUSERID.get(),m.USERAUTHORITIESLIST,this.REF.AVFRAMEWORKMANAGER.mthGETMESSAGEASSIGNEDCOLLECTIONNUMBER(this,false),C0);
r.ln=135;if(l.tB(l.s.ne(C0.get(),"OK"))){r.ln=136;l.WEB().mthALERT(l.cat(l.cat(l.add(l.cat(l.add("VF_SY169O.LoadUserAuthority ",this.REF.USYSTEM.ref.getUMTXTVALUES("FAILED")),". "),this.REF.USYSTEM.ref.getUMTXTVALUES("RETURNCODE")),": "),C0.get()));}r.ln=139;this.REF.AVLOCALTIMERREQUEST.set("SHOW_AUTHLIST");r.ln=140;this.mthAVGOTOFREESTATE();r.ln=141;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=143;r.e();};cO.mthUUPDATESERVER=function(){var m=this.REF,r=l.mR(this,cO,"uUpdateServer",145);var C0=r.cF("RETURNCODE",Fd.F1.Dc);
C0.iC();r.ln=145;{r.ln=149;m.USERVERINTERFACE.ref.mthZINT_UPDATEUSERAUTHORITY(m.CURRENTUSERID.get(),m.UPDATEUSERAUTHORITIES,this.REF.AVFRAMEWORKMANAGER.mthGETMESSAGEASSIGNEDCOLLECTIONNUMBER(this,false),C0);r.ln=151;this.mthAVGOTOFREESTATE();r.ln=153;if(l.s.ne(C0.get(),"OK")){r.ln=154;l.WEB().mthALERT(l.cat(l.cat(l.add(l.cat(l.add("VF_SY169O.UpdateUserAuthority ",this.REF.USYSTEM.ref.getUMTXTVALUES("FAILED")),". "),this.REF.USYSTEM.ref.getUMTXTVALUES("RETURNCODE")),": "),C0.get()));}else{r.ln=156;
this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.add(l.cat(m.CURRENTUSERNAME.get()," "),this.REF.USYSTEM.ref.getUMTXTVALUES("AUTHUPDATED")),u,u,this,true,u,u);}}r.ln=159;r.e();};cO.mthUADDFRAMEWORKTOTREE=function(){var m=this.REF,r=l.mR(this,cO,"uaddFrameworkToTree",161);var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cR("PARENTAUTHORIZED","PRIM_BOLN");var C4=r.cR("NEWPARENTAUTHORIZED","PRIM_BOLN");var C5=r.cR("FRAMEWORKAUTHORIZED","PRIM_BOLN");var C6=r.cR("APPLICATIONAUTHORIZED","PRIM_BOLN");
var C7=r.cR("BUSINESSOBJECTAUTHORIZED","PRIM_BOLN");C3.setValue(false);C3.iC();C4.setValue(false);C4.iC();C5.iC();C6.iC();C7.iC();r.ln=161;{r.ln=173;this.mthUADDITEMTOTREE(this.REF.UFRAMEWORK.ref,u,false,"X","N",false,C5);r.ln=175;C1=r.sR("C1",m.AUTHLIST.getCurrentItem());r.ln=176;C3.set(C4.get());r.ln=178;{var l1=this.REF.UFRAMEWORK.ref.getVF_FP010OHANDLERS().cI();while(l1.step()){var HANDLER=r.sR("HANDLER",l1.item());r.ln=180;this.mthUADDITEMTOTREE(HANDLER,C1,C5.get(),"N","N",false,u);r.ln=182;
}l1.end();r.dR("HANDLER");}r.ln=185;{var l1=this.REF.UFRAMEWORK.ref.getUCHILDAPPLICATIONS().cI();while(l1.step()){var APPLICATION=r.sR("APPLICATION",l1.item());r.ln=187;this.mthUADDITEMTOTREE(APPLICATION,C1,C5.get(),"N","N",false,C6);r.ln=189;C0=r.sR("C0",m.AUTHLIST.getCurrentItem());r.ln=191;{var l2=APPLICATION.getVF_FP010OHANDLERS().cI();while(l2.step()){var HANDLER=r.sR("HANDLER",l2.item());r.ln=193;this.mthUADDITEMTOTREE(HANDLER,C0,C6.get(),"N","N",false,u);r.ln=195;}l2.end();r.dR("HANDLER");
}r.ln=197;{var l2=APPLICATION.getCHILDVF_FP018O().cI();while(l2.step()){var OBJVF_FP018=r.sR("OBJVF_FP018",l2.item());r.ln=199;if(l.b.Not(OBJVF_FP018.getISDEFAULTVIEW())){r.ln=200;this.mthUADDITEMTOTREE(OBJVF_FP018,C0,C6.get(),"N","N",false,u);}r.ln=203;{var l3=OBJVF_FP018.getCHILDVF_FR003O().cI();while(l3.step()){var BUSINESSOBJECT=r.sR("BUSINESSOBJECT",l3.item());r.ln=205;if(l.s.eq(BUSINESSOBJECT.getURELATIONSHIPTYPE(),"ROOT")){r.ln=207;this.mthUADDITEMTOTREE(BUSINESSOBJECT,C0,C6.get(),"N","N",false,C7);
r.ln=209;C2=r.sR("C2",m.AUTHLIST.getCurrentItem());r.ln=211;{var l4=BUSINESSOBJECT.getVF_FP010OHANDLERS().cI();while(l4.step()){var HANDLER=r.sR("HANDLER",l4.item());r.ln=213;this.mthUADDITEMTOTREE(HANDLER,C2,C7.get(),"N","N",false,u);r.ln=215;}l4.end();r.dR("HANDLER");}}r.ln=219;}l3.end();r.dR("BUSINESSOBJECT");}r.ln=221;}l2.end();r.dR("OBJVF_FP018");}r.ln=223;}l1.end();r.dR("APPLICATION");}}r.ln=225;r.e();};cO.mthUADDITEMTOTREE=function(p0,p1,p2,p3,p4,p5,p6){var f=this.FLD.VF_CH015O,m=this.REF,r=l.mR(this,cO,"uAddItemToTree",227);
var P0=r.cPD("CURRENTFPNNN");var P1=r.cPD("PARENTITEM");var P2=r.cP("PARENTAUTHORIZED","PRIM_BOLN");var P3=r.cPF("ACCESS",Fd.F3.Dc);var P4=r.cPF("GRP_ACCESS",Fd.F3.Dc);var P5=r.cP("ALLOW","PRIM_BOLN");var P6=r.cP("NEWPARENTAUTHORIZED","PRIM_BOLN");P0=p0;P1=(p1===u)?(null):(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(false);var C0=r.cD("C0");r.ln=227;{r.ln=240;f.F2.set(P0.getUIDENTIFIER());r.ln=242;{var l1=m.USERAUTHORITIESLIST.selectList();while(l1.step()){r.ln=244;if(l.s.eq(f.F10.get(),f.F2.get()))
{r.ln=246;P5.set(f.F11.get());r.ln=247;P3.set(f.F12.get());r.ln=248;P4.set(f.F13.get());r.ln=250;break;}r.ln=252;}l1.end();}r.ln=254;C0=r.sR("C0",this.REF.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(P0.getUVLFONEIMAGE(),u,"T",false));r.ln=256;f.F3.set(P3.get());r.ln=257;f.F2.set(P0.getUIDENTIFIER());r.ln=258;f.F9.set(l.or(l.s.eq(P3.get(),"U"),l.s.eq(P3.get(),"Y")));r.ln=260;if(l.Ko(P0,"VF_FP010O")){r.ln=261;f.F7.set(l.cast(P0,"VF_FP010O").getVF_FP009REFERENCE().getUCAPTION());}else{r.ln=263;f.F7.set(P0.getUCAPTION());
}r.ln=266;m.AUTHLIST.addEntry();r.ln=268;m.AUTHLIST.getCurrentItem().setImage(C0);r.ln=269;m.AUTHLIST.getCurrentItem().setParentItem(P1);r.ln=270;m.AUTHLIST.getCurrentItem().setComponentTag(P3.get());r.ln=271;m.AUTHLIST.getCurrentItem().setRelatedReference(P0);r.ln=273;P6.set(P2.get());r.ln=275;if(l.and(l.s.ne(P4.get(),"N"),l.s.ne(P4.get(),"X"))){r.ln=277;if((m.AUTHLIST.getCurrentItem().getParentItem()!=null)){r.ln=278;m.AUTHLIST.getCurrentItem().setCheckEnabled(m.AUTHLIST.getCurrentItem().getParentItem().getCheckEnabled());
}else{r.ln=280;m.AUTHLIST.getCurrentItem().setCheckEnabled(false);}}else{r.ln=285;m.AUTHLIST.getCurrentItem().setCheckEnabled(true);}r.ln=288;if(l.tB(P5.get())){r.ln=289;m.AUTHLIST.getCurrentItem().setChecked("CHECKED");}else{r.ln=291;m.AUTHLIST.getCurrentItem().setChecked("UNCHECKED");}r.ln=294;this.mthUPDATESERVERAUTHLIST(f.F10.get(),P3.get(),f.F7.get());r.ln=296;m.AUTHLIST.getCurrentItem().setCheckReadOnly(l.b.Not(m.AUTHLIST.getCurrentItem().getCheckEnabled()));r.ln=298;if(l.s.eq(m.AUTHLIST.getCurrentItem().getChecked(),"CHECKED"))
{r.ln=299;if((m.AUTHLIST.getCurrentItem().getParentItem()!=null)){r.ln=300;if(l.s.eq(m.AUTHLIST.getCurrentItem().getParentItem().getChecked(),"CHECKED")){r.ln=301;m.AUTHLIST.getCurrentItem().mthEXPAND();}else{r.ln=303;m.AUTHLIST.getCurrentItem().mthCOLLAPSE();}}else{r.ln=306;m.AUTHLIST.getCurrentItem().mthEXPAND();}}else{r.ln=309;m.AUTHLIST.getCurrentItem().mthCOLLAPSE();}if(p6!==u){p6.set(P6.get());}}r.ln=312;r.e();};cO.mthUPDATEVISUALITEMCHILDREN=function(p0,p1){var r=l.mR(this,cO,"UpdateVisualItemChildren",315);
var P0=r.cPD("LISTITEM");var P1=r.cP("UPDATESERVERLIST","PRIM_BOLN");P0=p0;P1.set((p1===u)?(false):(p1));r.ln=315;{r.ln=320;{var l1=P0.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=322;if(l.s.eq(ITEM.getComponentTag(),"X")){continue;}r.ln=324;if(l.b.Not(P1.get())){r.ln=326;ITEM.setComponentTag("Y");r.ln=327;ITEM.setChecked("CHECKED");r.ln=328;ITEM.setCheckEnabled(true);r.ln=329;ITEM.setCheckReadOnly(l.b.Not(ITEM.getCheckEnabled()));r.ln=331;ITEM.mthEXPAND();}else{r.ln=335;
this.mthUPDATESERVERAUTHLIST(l.cast(ITEM.getRelatedReference(),"VF_AC001O").getUIDENTIFIER(),"D",l.cast(ITEM.getRelatedReference(),"VF_AC001O").getUCAPTION());}r.ln=339;this.mthUPDATEVISUALITEMCHILDREN(ITEM,u);r.ln=341;}l1.end();r.dR("ITEM");}}r.ln=343;r.e();};cO.mthUPDATEPARENTAUTHORITY=function(p0){var r=l.mR(this,cO,"UpdateParentAuthority",345);var P0=r.cPD("LISTITEM");P0=p0;var C0=r.cD("C0");r.ln=345;{r.ln=351;if((P0.getParentItem()!=null)){r.ln=353;C0=r.sR("C0",P0.getParentItem());r.ln=355;{
var v1=C0.getComponentTag();if(r.ln=357,l.s.eq(v1,"X")){r.ln=359;C0.setComponentTag("U");r.ln=361;this.mthUPDATESERVERAUTHLIST(l.cast(C0.getRelatedReference(),"VF_AC001O").getUIDENTIFIER(),C0.getComponentTag(),l.cast(P0.getRelatedReference(),"VF_AC001O").getUCAPTION());r.ln=363;this.mthSETEXCLUDES(C0);}else if(r.ln=365,l.s.eq(v1,"E")){r.ln=367;C0.setComponentTag("Y");r.ln=369;this.mthUPDATESERVERAUTHLIST(l.cast(C0.getRelatedReference(),"VF_AC001O").getUIDENTIFIER(),"D",l.cast(C0.getRelatedReference(),"VF_AC001O").getUCAPTION());
r.ln=371;this.mthSETEXCLUDES(C0);}else if(r.ln=373,l.s.eq(v1,"N")){r.ln=375;C0.setComponentTag("Y");r.ln=376;this.mthSETEXCLUDES(C0);}else if(r.ln=378,l.or(l.s.eq(v1,"U"),l.s.eq(v1,"Y"))){r.e();return;}r.ln=382;}r.ln=384;this.mthUPDATEPARENTAUTHORITY(C0);}}r.ln=388;r.e();};cO.mthSETEXCLUDES=function(p0){var r=l.mR(this,cO,"SetEXCLUDEs",390);var P0=r.cPD("LISTITEM");P0=p0;r.ln=390;{r.ln=394;{var l1=P0.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=397;if(l.s.ne(ITEM.getComponentTag(),"N"))
{continue;}r.ln=399;this.mthUPDATESERVERAUTHLIST(l.cast(ITEM.getRelatedReference(),"VF_AC001O").getUIDENTIFIER(),"E",l.cast(ITEM.getRelatedReference(),"VF_AC001O").getUCAPTION());r.ln=401;}l1.end();r.dR("ITEM");}r.e();return;}r.ln=405;};function e3(sender,Ps){var r=l.eR(this,cO,"#AuthList.ItemChanged",407);var P0=Ps.r("ITEM");var C0=r.cF("ITEMOBJECTGUID",Fd.F2.Dc);var C1=r.cF("CURRENTUSERACCESS",Fd.F3.Dc);C0.iC();C1.iC();r.ln=407;{r.ln=412;C0.set(l.cast(P0.getRelatedReference(),"VF_AC001O").getUIDENTIFIER());
r.ln=413;C1.set(P0.getComponentTag());r.ln=415;if(l.s.eq(P0.getChecked(),"UNCHECKED")){r.ln=417;this.mthUPDATEVISUALITEMCHILDREN(P0,true);r.ln=418;C1.set("E");r.ln=419;this.mthUPDATESERVERAUTHLIST(C0.get(),C1.get(),"elkauau");r.ln=421;P0.mthCOLLAPSE();}else{r.ln=425;C1.set("U");r.ln=428;this.mthUPDATEVISUALITEMCHILDREN(P0,u);r.ln=431;P0.setComponentTag("Y");r.ln=432;this.mthUPDATESERVERAUTHLIST(C0.get(),"U",C0.get());r.ln=434;this.mthUPDATEPARENTAUTHORITY(P0);r.ln=436;P0.mthEXPAND();}r.ln=440;this.REF.AVLOCALTIMERREQUEST.set("UPDATE_AUTHORITIES_SERVER");
r.ln=442;this.mthAVGOTOBUSYSTATE("Loading",false,u);r.ln=444;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=446;r.e();};cO.mthUPDATESERVERAUTHLIST=function(p0,p1,p2){var f=this.FLD.VF_CH015O,m=this.REF,r=l.mR(this,cO,"UpdateServerAuthList",448);var P0=r.cPF("WITHGUID",Fd.F4.Dc);var P1=r.cPF("WITHACCESS",Fd.F3.Dc);var P2=r.cPF("CAP",Fd.F5.Dc);P0.set(p0);P1.set(p1);P2.set(p2);var C0=r.cF("EQUIVALENT_AUTHLINE_ACCESS",Fd.F6.Dc);C0.iC();r.ln=448;{r.ln=456;{var v1=P1.get();if(r.ln=458,l.s.eq(v1,"U")){r.ln=460;
C0.set("USE");}else if(r.ln=462,l.or(l.s.eq(v1,"E"),l.s.eq(v1,"X"))){r.ln=464;C0.set("EXCLUDE");}else if(r.ln=466,l.s.eq(v1,"D")){r.ln=469;C0.set("DELETE");}else{r.e();return;}r.ln=475;}r.ln=477;f.F14.set(l.add(f.F14.get(),1));r.ln=479;{var l1=m.UPDATEUSERAUTHORITIES.selectList();while(l1.step()){r.ln=481;if(l.s.eq(P0.get(),f.F15.get())){r.ln=483;if(l.s.eq(C0.get(),"DELETE")){r.ln=485;m.UPDATEUSERAUTHORITIES.deleteEntry();}else{r.ln=489;f.F16.set(C0.get());r.ln=490;m.UPDATEUSERAUTHORITIES.updateEntry();
}l1.end();r.e();return;}r.ln=497;}l1.end();}r.ln=499;if(l.s.ne(C0.get(),"DELETE")){r.ln=501;f.F15.set(P0.get());r.ln=502;f.F16.set(C0.get());r.ln=504;m.UPDATEUSERAUTHORITIES.addEntry();}}r.ln=508;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{
Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELOID1"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELCA_4"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELAVAL"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O","VF_SY169O"],rp:["PRIM_ALPH","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_ATLM","PRIM_ATLI","PRIM_LIST","PRIM_TBLO.Item","PRIM_LIST.String","PRIM_ACOL","PRIM_FLD"],
dc:["VF_SY181O","VF_SY180O"],dp:["PRIM_DC.UnicodeString","PRIM_ALPH","PRIM_LIST.ListItem","PRIM_BOLN","PRIM_FLBX"]});