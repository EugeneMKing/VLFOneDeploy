﻿LANSA.addComponent({id:"VF_UM041O",ot:"rp",tp:"Reusable Part",de:"\\OC=Complex Instance List Display",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC012O",fd:Fd,pt:{LoadAttemptErrorCount:{da:"rw"},TreeExpandImageReference:{da:"r"},TreeContractImageReference:{da:"r"},PaneExpandImageReference:{da:"r"},PaneContractImageReference:
{da:"r"},MenuImageReference:{da:"r"}},mt:{uInitialize:{},uTerminate:{},uPutListEntryData:{ps:{"DataItem":{pt:"i"}}},uDeleteListEntryData:{ps:{"DataItem":{pt:"i"}}},uClearInstanceList:{ps:{"IsBeingDestroyed":{pt:"i"}}},uHandleInstanceListColumnChange:{ps:{"uColumnDefinition":{pt:"i"}}},uHandleInstanceListColumnSortChange:{},uSortRequested:{ps:{"Direction":{pt:"i"}}},zInt_ExtractSearchWordsLocal:{ps:{"FromString":{pt:"i"},"Into":{pt:"i"}}},uPerformQuickSearch:{ps:{"SearchString":{pt:"i"}}},uCancelQuickSearching:
{},uRefreshVisibleSelectionState:{ps:{"DataItem":{pt:"i"}}},uRefreshVisibleCurrentState:{ps:{"DataItem":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UM041O",Fd);var C0=this.cR("ATTACHTREEMANAGER","PRIM_ATLM");var C1=this.cR("ATTACHTREEITEM","PRIM_ATLI");var C2=this.cR("TREE","PRIM_TREE");var C3=this.cF("LOADATTEMPTERRORCOUNT",Fd.F1.Dc);this.cD("TREEEXPANDIMAGEREFERENCE");this.cD("TREECONTRACTIMAGEREFERENCE");this.cD("PANEEXPANDIMAGEREFERENCE");this.cD("PANECONTRACTIMAGEREFERENCE");this.cD("MENUIMAGEREFERENCE");
this.cD("CURRENTLISTPANEITEM");var C10=this.cR("SORTPOPUPMENU","VF_UI008O");var C11=this.cF("SORTPOPUPMENUITEMS",Fd.F1.Dc);var C12=this.cR("REQUESTEDSORTDIRECTION","PRIM_ALPH");C0.iC();C1.setManage(C2);C1.setParent(C0);C1.setAttachment("CENTER");C1.iC();C2.setDisplayPosition(1);C2.setHeight(312);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTop(0);C2.setWidth(534);C2.iC();C3.aD();C3.iC();C10.iC();C11.aD();C11.iC();C12.iC();C2.aH("ITEMGOTFOCUS",this,e2);C2.aH("ITEMCLICK",this,e2);C2.aH("ITEMDOUBLECLICK",this,e3);
C2.aH("ITEMGOTSELECTION",this,e4);C2.aH("ITEMLOSTSELECTION",this,e5);C2.aH("MOUSELEAVE",this,e6);C10.aH("ITEMSELECTED",this,e1);C2.aDS("VF_UM042O");C2.aLF({});this.setLayoutManager(C0);this.aH("TOUCHSTART",this,e7);this.aH("CLICK",this,e8);this.aH("DOUBLECLICK",this,e8);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",45);r.ln=45;{r.ln=47;cA.mthUINITIALIZE.call(this);r.ln=49;this.REF.SHOWSORTREQUESTIMAGE.set(true);r.ln=51;if(l.s.eq(l.s.UpperCase(this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getSNAPININSTANCEITEMPANENAME()),"VF_UM043O"))
{r.ln=52;this.REF.SHOWSELECTCOLUMNSIMAGE.set(true);r.ln=53;this.REF.ALLOWVISUALIDCOLUMNREMOVAL.set(false);}r.ln=56;this.srTREEEXPANDIMAGEREFERENCE(this.REF.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("TREE_EXPAND"),"SMALL","T",false));r.ln=58;this.srTREECONTRACTIMAGEREFERENCE(this.REF.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("TREE_CONTRACT"),"SMALL","T",false));r.ln=60;this.srPANEEXPANDIMAGEREFERENCE(this.REF.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("EXPAND_DOWN"),"SMALL","T",false));
r.ln=62;this.srPANECONTRACTIMAGEREFERENCE(this.REF.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("COLLAPSE_UP"),"SMALL","T",false));r.ln=64;this.srMENUIMAGEREFERENCE(this.REF.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("MORE"),"SMALL","T",false));r.ln=66;if(this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getUMULTIPLESELECT()){r.ln=67;m.TREE.setSelectionStyle("ALL");}}r.ln=70;r.e();};cO.mthUTERMINATE=function()
{var m=this.REF,r=l.mR(this,cO,"uTerminate",73);r.ln=73;{r.ln=75;this.setParent(null);r.ln=80;this.mthUCLEARINSTANCELIST(true);r.ln=82;m.SORTPOPUPMENU.mthZINT_TERMINATE();r.ln=84;cA.mthUTERMINATE.call(this);r.ln=86;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=87;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"uTerminate executed",u,u,true,u);}}r.ln=91;r.e();};cO.mthUPUTLISTENTRYDATA=function(p0){var m=this.REF,r=l.mR(this,cO,"uPutListEntryData",94);var P0=r.cPD("DATAITEM");P0=p0;r.ln=94;
{r.ln=98;if((P0.getVF_UM042OITEM()==null)){r.ln=102;if((P0.getPARENTDATAITEM()!=null)){r.ln=104;P0.getPARENTDATAITEM().getVF_UM042OITEM().getUTREEITEM().mthADD("VF_UM042O");}else{r.ln=110;m.TREE.mthADD("VF_UM042O");}r.ln=116;P0.setVF_UM042OITEM(l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O"));r.ln=117;P0.getVF_UM042OITEM().setUDATAITEM(P0);}r.ln=122;P0.getVF_UM042OITEM().mthZINT_CREATEORUPDATELISTITEM(this,this.getAVLISTMANAGER(),P0);}r.ln=124;r.e();};cO.mthUDELETELISTENTRYDATA=function(p0)
{var m=this.REF,r=l.mR(this,cO,"uDeleteListEntryData",127);var P0=r.cPD("DATAITEM");P0=p0;var C0=r.cF("ENTRYNUMBER",Fd.F1.Dc);C0.iC();r.ln=127;{r.ln=131;if((P0.getVF_UM042OITEM()!=null)){r.ln=133;if((P0.getVF_UM042OITEM()===m.CURRENTLISTPANEITEM)){r.ln=134;this.srCURRENTLISTPANEITEM(null);}r.ln=137;if((P0.getVF_UM042OITEM().getUTREEITEM()!=null)){r.ln=138;P0.getVF_UM042OITEM().getUTREEITEM().mthDELETE();}}}r.ln=143;r.e();};cO.mthUCLEARINSTANCELIST=function(p0){var m=this.REF,r=l.mR(this,cO,"uClearInstanceList",146);
var P0=r.cP("ISBEINGDESTROYED","PRIM_BOLN");P0.set(p0);r.ln=146;{r.ln=148;if(l.tB(P0.get())){r.ln=149;m.ATTACHTREEITEM.setManage(null);r.ln=150;this.setLayoutManager(null);}r.ln=153;this.srCURRENTLISTPANEITEM(null);r.ln=155;m.TREE.mthDELETEALL();}r.ln=157;r.e();};cO.mthUHANDLEINSTANCELISTCOLUMNCHANGE=function(p0){var m=this.REF,r=l.mR(this,cO,"uHandleInstanceListColumnChange",160);var P0=r.cPD("UCOLUMNDEFINITION");P0=p0;r.ln=160;{r.ln=162;this.REF.USYSTEMCOMMON.ref.mthSTARTROUTINE(this,"UHANDLEINSTANCELISTCOLUMNCHANGE");
r.ln=164;{var l1=m.TREE.getItems().cI();while(l1.step()){var TREEITEM=r.sR("TREEITEM",l1.item());r.ln=165;l.cast(TREEITEM.getDesign(),"VF_UM042O").getUTREEPANEL().mthUHANDLEINSTANCELISTCOLUMNCHANGE(P0);r.ln=166;}l1.end();r.dR("TREEITEM");}r.ln=168;this.REF.USYSTEMCOMMON.ref.mthENDROUTINE(this,"UHANDLEINSTANCELISTCOLUMNCHANGE");}r.ln=170;r.e();};cO.mthUHANDLEINSTANCELISTCOLUMNSORTCHANGE=function(){var m=this.REF,r=l.mR(this,cO,"uHandleInstanceListColumnSortChange",173);r.ln=173;{r.ln=175;this.REF.USYSTEMCOMMON.ref.mthSTARTROUTINE(this,"UHANDLEINSTANCELISTCOLUMNSORTCHANGE");
r.ln=177;{var l1=m.TREE.getItems().cI();while(l1.step()){var TREEITEM=r.sR("TREEITEM",l1.item());r.ln=178;l.cast(TREEITEM.getDesign(),"VF_UM042O").getUTREEPANEL().mthUHANDLEINSTANCELISTCOLUMNSORTCHANGE();r.ln=179;}l1.end();r.dR("TREEITEM");}r.ln=181;this.REF.USYSTEMCOMMON.ref.mthENDROUTINE(this,"UHANDLEINSTANCELISTCOLUMNSORTCHANGE");}r.ln=183;r.e();};cO.mthUSORTREQUESTED=function(p0){var m=this.REF,r=l.mR(this,cO,"uSortRequested",186);var P0=r.cP("DIRECTION","PRIM_ALPH");P0.set(p0);var C0=r.cD("C0");
var C1=r.cR("USEIMAGENAME","PRIM_ALPH");var C2=r.cD("C2");C1.iC();r.ln=186;{r.ln=192;m.REQUESTEDSORTDIRECTION.set(P0.get());r.ln=194;if(l.tB(l.s.eq(m.REQUESTEDSORTDIRECTION.get(),"ASCEND"))){r.ln=195;C1.set(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("ASCEND_ORDER"));}else{r.ln=197;C1.set(this.REF.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("DESCEND_ORDER"));}r.ln=200;if(l.n.eq(m.SORTPOPUPMENUITEMS.get(),0)){r.ln=201;C0=r.sR("C0",this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER());r.ln=202;
m.SORTPOPUPMENU.mthZINT_INITIALIZE(true,false,"");r.ln=204;{var l1=C0.getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMN=r.sR("COLUMN",l1.item());r.ln=205;m.SORTPOPUPMENUITEMS.set(l.add(m.SORTPOPUPMENUITEMS.get(),1));r.ln=207;m.SORTPOPUPMENU.mthZINT_PUTMENUITEM(COLUMN.getUCAPTION(),l.cat(COLUMN.getTYPE(),l.n.AsString(COLUMN.getINSTANCEOFTYPE())),C1.get(),"T",u,u,u,u,u,u,u,u);r.ln=208;}l1.end();r.dR("COLUMN");}}r.ln=211;{var l1=m.SORTPOPUPMENU.getVF_UI005OCOLLECTION().cI();while(l1.step()){
var MENUITEM=r.sR("MENUITEM",l1.item());r.ln=212;MENUITEM.setIMAGEREFERENCESOURCE("T");MENUITEM.setIMAGEREFERENCENAME(C1.get());r.ln=213;}l1.end();r.dR("MENUITEM");}r.ln=215;m.SORTPOPUPMENU.mthZINT_SHOW(u);}r.ln=217;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SortPopUpMenu.ItemSelected",220);var P0=Ps.r("EVENTNAME");r.ln=220;{r.ln=222;if(l.tB(l.s.eq(m.REQUESTEDSORTDIRECTION.get(),"ASCEND"))){r.ln=223;m.TREE.mthSORT(P0,"ASCENDING");}else{r.ln=225;m.TREE.mthSORT(P0,"DESCENDING");
}}r.ln=228;r.e();};cO.mthZINT_EXTRACTSEARCHWORDSLOCAL=function(p0,p1){var r=l.mR(this,cO,"zInt_ExtractSearchWordsLocal",234);var P0=r.cPD("FROMSTRING");var P1=r.cPD("INTO");P0=p0;P1=p1;var C0=r.cF("TOTALCHARS",Fd.F1.Dc);var C1=r.cR("CHARAT","PRIM_DC","UnicodeString");var C2=r.cF("CURRENTCHARINDEX",Fd.F1.Dc);var C3=r.cD("C3");C0.iC();C1.iC();C2.iC();r.ln=234;{r.ln=243;P1.mthREMOVEALL();r.ln=245;P0.set(l.s.Trim(l.s.UpperCase(P0.get())));r.ln=249;if(this.REF.USYSTEM.ref.getLANGUAGEISIDEOGRAPHIC()){r.ln=251;
C3=r.sR("C3",l.cAs("PRIM_DC","UnicodeString"));r.ln=253;C3.set(P0.get());r.ln=255;P1.mthINSERT(C3);}else{r.ln=262;C0.set(l.s.CurChars(P0.get()));r.ln=264;for(var i1=1,s1=1,t1=l.tI(C0.get());C2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=266;C1.set(l.s.Substring(P0.get(),C2.get(),1));r.ln=268;if(l.tB(l.s.eq(C1.get()," "))){r.ln=270;C3=r.sR("C3",null);}else{r.ln=274;if(C3==null){r.ln=275;C3=r.sR("C3",l.cAs("PRIM_DC","UnicodeString"));r.ln=276;P1.mthINSERT(C3);r.ln=277;C3.set(C1.get());
}else{r.ln=279;C3.set(l.add(C3.get(),C1.get()));}}}}}r.ln=288;r.e();};cO.mthUPERFORMQUICKSEARCH=function(p0){var m=this.REF,r=l.mR(this,cO,"uPerformQuickSearch",292);var P0=r.cPD("SEARCHSTRING");P0=p0;var C0=r.cR("SEARCHUPPER","PRIM_DC","UnicodeString");var C1=r.cR("UPPERCASESEARCHWORDS","PRIM_ACOL");C0.iC();C1.setCollects("PRIM_DC.UnicodeString");C1.iC();r.ln=292;{r.ln=298;if(l.n.lt(l.s.CurChars(l.s.Trim(P0.get())),this.REF.USYSTEM.ref.getUCUSTOMUF_OSYSTM().getMINIMUMQUICKSEARCHCHARACTERS())){r.ln=299;
for(var l1=m.TREE.getItems().cI();l1.step();){l1.item().setVisible(true)};r.e();return;}r.ln=304;this.setUIISLOCKED(true);r.ln=307;C0.set(l.s.UpperCase(P0.get()));r.ln=310;this.mthZINT_EXTRACTSEARCHWORDSLOCAL(C0,C1);r.ln=313;{var l1=m.TREE.getItems().cI();while(l1.step()){var TREEITEM=r.sR("TREEITEM",l1.item());r.ln=315;if(l.cast(TREEITEM.getDesign(),"VF_UM042O").getUTREEPANEL().mthUCONTAINS(C1)){r.ln=316;TREEITEM.setVisible(true);}else{r.ln=318;TREEITEM.setVisible(false);}r.ln=321;}l1.end();r.dR("TREEITEM");
}r.ln=324;this.setUIISLOCKED(false);}r.ln=327;r.e();};cO.mthUCANCELQUICKSEARCHING=function(){var m=this.REF,r=l.mR(this,cO,"uCancelQuickSearching",331);r.ln=331;{r.ln=334;this.setUIISLOCKED(true);r.ln=337;for(var l1=m.TREE.getItems().cI();l1.step();){l1.item().setVisible(true)};r.ln=340;this.setUIISLOCKED(false);}r.ln=342;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Tree.ItemGotFocus #Tree.ItemClick",348);var C0=r.cD("C0");var C1=r.cR("INSTANCEHANDLERALREADYOPEN","PRIM_BOLN");C1.iC();
r.ln=348;{r.ln=353;if(l.b.Not(this.getUIISLOCKED())){r.ln=354;if(l.b.Not(l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUTREEPANEL().getAVHANDLESOWNSELECTION())){r.ln=356;C0=r.sR("C0",l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUDATAITEM());r.ln=358;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=359;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(C0.getAVVISUALID1().get()," item got focus."),u,u,true,u);}r.ln=362;if((C0.getAVBUSINESSOBJECTREFERENCE()!=null))
{r.ln=365;C1.set(this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().mthZINT_ISINSTANCECOMMANDEXECUTOROPEN(C0,true));r.ln=367;if(l.b.Not(C1.get())){r.ln=371;C0.setAVISCURRENT(true);r.ln=374;if(l.b.eq(this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getUDBLCLICKINSTLIST(),false)){r.ln=376;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=377;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(C0.getAVVISUALID1().get()," executing default command."),u,u,true,u);}r.ln=381;C0.getAVBUSINESSOBJECTREFERENCE().mthZINT_EXECUTEDEFAULTCOMMAND(1,u,u,this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getCURRENTVF_UM010O().getBUSYPANEL(),C0.mthAVGETCOMPOSITEKEYSTRING(),false);
}}}}}}r.ln=393;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Tree.ItemDoubleClick",396);var C0=r.cD("C0");r.ln=396;{r.ln=400;if(l.b.Not(this.getUIISLOCKED())){r.ln=402;if(l.b.Not(l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUTREEPANEL().getAVHANDLESOWNSELECTION())){r.ln=405;if(this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getUDBLCLICKINSTLIST()){r.ln=407;C0=r.sR("C0",l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUDATAITEM());r.ln=409;C0.setAVISCURRENT(true);
r.ln=411;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=412;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(C0.getAVVISUALID1().get()," executing default command."),u,u,true,u);}r.ln=416;C0.getAVBUSINESSOBJECTREFERENCE().mthZINT_EXECUTEDEFAULTCOMMAND(1,u,u,this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().getCURRENTVF_UM010O().getBUSYPANEL(),C0.mthAVGETCOMPOSITEKEYSTRING(),false);}}}}r.ln=425;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Tree.ItemGotSelection",428);r.ln=428;
{r.ln=430;if(l.b.Not(this.getUIISLOCKED())){r.ln=431;if(l.b.Not(l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUTREEPANEL().getAVHANDLESOWNSELECTION())){r.ln=433;l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUDATAITEM().setAVISSELECTED(true);}}}r.ln=438;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Tree.ItemLostSelection",441);var C0=r.cD("C0");r.ln=441;{r.ln=445;if(l.b.Not(this.getUIISLOCKED())){r.ln=446;if(l.b.Not(l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O").getUTREEPANEL().getAVHANDLESOWNSELECTION()))
{r.ln=448;C0=r.sR("C0",l.cast(m.TREE.getCurrentItem().getDesign(),"VF_UM042O"));r.ln=450;if((C0!=null)){r.ln=451;if((C0.getUDATAITEM()!=null)){r.ln=453;C0.getUDATAITEM().setAVISSELECTED(false);r.ln=455;C0.getUDATAITEM().setAVISCURRENT(false);}}}}}r.ln=464;r.e();};cO.mthUREFRESHVISIBLESELECTIONSTATE=function(p0){var r=l.mR(this,cO,"uRefreshVisibleSelectionState",467);var P0=r.cPD("DATAITEM");P0=p0;r.ln=467;{r.ln=469;if((P0.getVF_UM042OITEM()!=null)){r.ln=470;P0.getVF_UM042OITEM().getUTREEPANEL().mthUREFRESHVISIBLESELECTEDSTATE();
}}r.ln=473;r.e();};cO.mthUREFRESHVISIBLECURRENTSTATE=function(p0){var r=l.mR(this,cO,"uRefreshVisibleCurrentState",477);var P0=r.cPD("DATAITEM");P0=p0;r.ln=477;{r.ln=479;if((P0.getVF_UM042OITEM()!=null)){r.ln=480;P0.getVF_UM042OITEM().getUTREEPANEL().mthUREFRESHVISIBLECURRENTSTATE();}}r.ln=483;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Tree.MouseLeave",486);r.ln=486;{r.ln=488;if(l.b.Not(this.getUIISLOCKED())){r.ln=490;if(((this.REF.AVLISTMANAGER!=null)&&(this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER()!=null)))
{r.ln=492;this.REF.AVLISTMANAGER.getROOTVF_FR003OWNER().mthZINT_HIDEPOPUPPANEL();}}}r.ln=498;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.TouchStart",501);var P0=Ps.r("TOUCHMOVE");var P1=Ps.r("TOUCHSIZE");r.ln=501;{r.ln=503;P0.setVALUE(false);P1.setVALUE(false);}r.ln=505;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#Com_owner.Click #Com_owner.DoubleClick",508);var P0=Ps.r("HANDLED");r.ln=508;{r.ln=512;P0.set(true);}r.ln=514;r.e();};cO.getLOADATTEMPTERRORCOUNT=function(){return this.REF.LOADATTEMPTERRORCOUNT.get();
};cO.setLOADATTEMPTERRORCOUNT=function(v){this.REF.LOADATTEMPTERRORCOUNT.set(v);};cO.getTREEEXPANDIMAGEREFERENCE=function(){return this.REF.TREEEXPANDIMAGEREFERENCE;};cO.getTREECONTRACTIMAGEREFERENCE=function(){return this.REF.TREECONTRACTIMAGEREFERENCE;};cO.getPANEEXPANDIMAGEREFERENCE=function(){return this.REF.PANEEXPANDIMAGEREFERENCE;};cO.getPANECONTRACTIMAGEREFERENCE=function(){return this.REF.PANECONTRACTIMAGEREFERENCE;};cO.getMENUIMAGEREFERENCE=function(){return this.REF.MENUIMAGEREFERENCE;
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srTREEEXPANDIMAGEREFERENCE=function(rn){this.sR("TREEEXPANDIMAGEREFERENCE",rn);};cO.srTREECONTRACTIMAGEREFERENCE=function(rn){this.sR("TREECONTRACTIMAGEREFERENCE",rn);};cO.srPANEEXPANDIMAGEREFERENCE=function(rn){this.sR("PANEEXPANDIMAGEREFERENCE",rn);};cO.srPANECONTRACTIMAGEREFERENCE=function(rn){this.sR("PANECONTRACTIMAGEREFERENCE",rn);
};cO.srMENUIMAGEREFERENCE=function(rn){this.sR("MENUIMAGEREFERENCE",rn);};cO.srCURRENTLISTPANEITEM=function(rn){this.sR("CURRENTLISTPANEITEM",rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC012O","VF_UI008O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_TREE","PRIM_FLD","PRIM_ALPH"],dc:["VF_UM042O","VF_FR003O","VF_LM003O"],dp:["PRIM_BMP","PRIM_ALPH","PRIM_DC.UnicodeString","PRIM_ACOL","PRIM_BOLN"]});