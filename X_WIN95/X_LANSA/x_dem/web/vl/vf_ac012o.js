﻿LANSA.addComponent({id:"VF_AC012O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE Ancestor For Instance List",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{avListManager:{da:"rw"},VisualIDColumns:{da:"r"},AColumns:{da:"r"},NColumnsVisual:{da:"r"},DColumnsVisual:{da:"r"},ShowSortRequestImage:{da:"r"},ShowCommandButtons:
{da:"r"},ShowSelectColumnsImage:{da:"r"},AllowVisualIDColumnRemoval:{da:"r"},UIisLocked:{da:"rw"},AssociatedVF_SY185OTrackingItem:{da:"r"}},mt:{uInitialize:{},uTerminate:{},uSendtoXL:{},uGetVisualList:{},uSortRequested:{ps:{"Direction":{pt:"i"}}},uClearInstanceList:{ps:{"IsBeingDestroyed":{pt:"i"}}},uPutListEntryData:{ps:{"DataItem":{pt:"i"}}},uDeleteListEntryData:{ps:{"DataItem":{pt:"i"}}},uRefreshVisibleSelectionState:{ps:{"DataItem":{pt:"i"}}},uRefreshVisibleCurrentState:{ps:{"DataItem":{pt:"i"
}}},uPerformQuickSearch:{ps:{"SearchString":{pt:"i"}}},uCancelQuickSearching:{},uHandleQuickSearchCancelbyDefault:{ps:{"InPrimList":{pt:"i"}}},uHandleQuickSearchbyDefault:{ps:{"SearchString":{pt:"i"},"InPrimList":{pt:"i"}}},zInt_ExtractSearchWords:{ps:{"FromString":{pt:"i"}}},uSelectColumns:{},uSortColumns:{},uHandleInstanceListColumnChange:{ps:{"uColumnDefinition":{pt:"i"}}},uHandleInstanceListColumnSortChange:{}},co:function(){cO.aN.call(this);this.aF("VF_AC012O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");
var C1=this.cA("USYSTEMCOMMON","VF_SY001X");this.cD("AVLISTMANAGER");var C3=this.cR("LIST_VCOLUMNS","PRIM_KCOL");var C4=this.cR("LIST_ACOLUMNS","PRIM_KCOL");var C5=this.cR("LIST_NVISCOLUMNS","PRIM_KCOL");var C6=this.cR("LIST_DVISCOLUMNS","PRIM_KCOL");var C7=this.cR("SHOWSORTREQUESTIMAGE","PRIM_BOLN");var C8=this.cR("SHOWCOMMANDBUTTONS","PRIM_BOLN");var C9=this.cR("SHOWSELECTCOLUMNSIMAGE","PRIM_BOLN");var C10=this.cR("ALLOWVISUALIDCOLUMNREMOVAL","PRIM_BOLN");var C11=this.cR("SELECTCOLUMNSMENU","VF_UI008O");
this.cD("ROOTVF_FR003OWNER");var C13=this.cR("UIISLOCKED","PRIM_BOLN");this.cD("ASSOCIATEDVF_SY185OTRACKINGITEM");var C15=this.cR("ZINT_COLLECTSEARCHWORDS","PRIM_ACOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C3.setCollects("PRIM_LIST.String");C3.setKeyedBy(Fd.F1.Dc);C3.iC();C4.setCollects("PRIM_LIST.String");C4.setKeyedBy(Fd.F1.Dc);C4.iC();C5.setCollects("PRIM_LIST.String");C5.setKeyedBy(Fd.F1.Dc);C5.iC();C6.setCollects("PRIM_LIST.String");C6.setKeyedBy(Fd.F1.Dc);
C6.iC();C7.iC();C8.setValue(true);C8.iC();C9.iC();C10.setValue(true);C10.iC();C11.iC();C13.iC();C15.setCollects("PRIM_DC.UnicodeString");C15.iC();C11.aH("ITEMCHANGED",this,e4);this.setDisplayPosition(1);this.setHeight(312);this.setLeft(0);this.setTabPosition(1);this.setTabStop(false);this.setTop(0);this.setWidth(534);this.aH("CREATEINSTANCE",this,e1);this.aH("DESTROYINSTANCE",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",71);r.ln=71;{r.ln=73;this.srASSOCIATEDVF_SY185OTRACKINGITEM(m.USYSTEM.ref.mthZINT_TRACKMAJOROBJECTCREATION(this));
}r.ln=75;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.DestroyInstance",78);r.ln=78;{r.ln=80;if((m.ASSOCIATEDVF_SY185OTRACKINGITEM!=null)){r.ln=81;m.ASSOCIATEDVF_SY185OTRACKINGITEM.mthZINT_TRACKDESTRUCTION(this);r.ln=82;this.srASSOCIATEDVF_SY185OTRACKINGITEM(null);}}r.ln=85;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",88);r.ln=88;{r.ln=91;m.USYSTEM.ref.mthZINT_UPDATEMAJORTRACKEDOBJECTDETAILS(m.ASSOCIATEDVF_SY185OTRACKINGITEM,this.getComponentPatternName(),l.add("Instance list browser for ",m.AVLISTMANAGER.getROOTVF_FR003OWNER().getUCAPTION()));
r.ln=94;this.srROOTVF_FR003OWNER(m.AVLISTMANAGER.getROOTVF_FR003OWNER());r.ln=97;m.SHOWCOMMANDBUTTONS.set(l.s.ne(m.AVLISTMANAGER.getROOTVF_FR003OWNER().getUMINIBARLOC(),"NONE"));r.ln=100;m.AVLISTMANAGER.getROOTVF_FR003OWNER().mthZINT_LOADSAVEDCOLUMNDETAILS();}r.ln=102;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",105);r.ln=105;{r.ln=107;m.ZINT_COLLECTSEARCHWORDS.mthREMOVEALL();r.ln=109;m.SELECTCOLUMNSMENU.mthZINT_TERMINATE();r.ln=113;this.srROOTVF_FR003OWNER(null);
r.ln=115;m.USYSTEM.ref.mthZINT_CHECKSUBSEQUENTMAJOROBJECTDESTRUCTION(m.ASSOCIATEDVF_SY185OTRACKINGITEM,this);}r.ln=117;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#RootVF_FR003Owner.SentToCSVRequested",122);r.ln=122;{r.ln=124;this.mthUSENDTOXL();}r.ln=126;r.e();};cO.mthUSENDTOXL=function(){var m=this.REF,r=l.mR(this,cO,"uSendtoXL",131);r.ln=131;{r.ln=135;m.AVLISTMANAGER.mthAVOUTPUTINSTANCELISTASCSV(u);}r.ln=137;r.e();};cO.mthUGETVISUALLIST=function(){var r=l.mR(this,cO,"uGetVisualList",142);
var P0=r.cPD("ULIST");r.ln=142;{r.ln=145;P0=r.sR("P0",null);}r.ln=149;return r.rR(P0);};cO.mthUSORTREQUESTED=function(p0){var r=l.mR(this,cO,"uSortRequested",152);var P0=r.cP("DIRECTION","PRIM_ALPH");P0.set(p0);r.ln=152;{}r.ln=157;r.e();};cO.mthUCLEARINSTANCELIST=function(p0){var r=l.mR(this,cO,"uClearInstanceList",160);var P0=r.cP("ISBEINGDESTROYED","PRIM_BOLN");P0.set(p0);r.ln=160;{}r.ln=163;r.e();};cO.mthUPUTLISTENTRYDATA=function(p0){var r=l.mR(this,cO,"uPutListEntryData",166);var P0=r.cPD("DATAITEM");
P0=p0;r.ln=166;{}r.ln=170;r.e();};cO.mthUDELETELISTENTRYDATA=function(p0){var r=l.mR(this,cO,"uDeleteListEntryData",173);var P0=r.cPD("DATAITEM");P0=p0;r.ln=173;{}r.ln=177;r.e();};cO.mthUREFRESHVISIBLESELECTIONSTATE=function(p0){var r=l.mR(this,cO,"uRefreshVisibleSelectionState",180);var P0=r.cPD("DATAITEM");P0=p0;r.ln=180;{}r.ln=183;r.e();};cO.mthUREFRESHVISIBLECURRENTSTATE=function(p0){var r=l.mR(this,cO,"uRefreshVisibleCurrentState",187);var P0=r.cPD("DATAITEM");P0=p0;r.ln=187;{}r.ln=190;r.e();
};cO.mthUPERFORMQUICKSEARCH=function(p0){var r=l.mR(this,cO,"uPerformQuickSearch",193);var P0=r.cPD("SEARCHSTRING");P0=p0;r.ln=193;{}r.ln=197;r.e();};cO.mthUCANCELQUICKSEARCHING=function(){var r=l.mR(this,cO,"uCancelQuickSearching",200);r.ln=200;{}r.ln=203;r.e();};cO.mthUHANDLEQUICKSEARCHCANCELBYDEFAULT=function(p0){var m=this.REF,r=l.mR(this,cO,"uHandleQuickSearchCancelbyDefault",206);var P0=r.cPD("INPRIMLIST");P0=p0;r.ln=206;{r.ln=209;this.setUIISLOCKED(true);r.ln=211;m.ZINT_COLLECTSEARCHWORDS.mthREMOVEALL();
r.ln=213;for(var l1=P0.getItems().cI();l1.step();){l1.item().setVisible(true)};r.ln=215;this.setUIISLOCKED(false);}r.ln=217;r.e();};cO.mthUHANDLEQUICKSEARCHBYDEFAULT=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uHandleQuickSearchbyDefault",220);var P0=r.cP("SEARCHSTRING","PRIM_DC","UnicodeString");var P1=r.cPD("INPRIMLIST");P0.set(p0);P1=p1;var C0=r.cR("CELLVALUEUPPER","PRIM_DC","UnicodeString");var C1=r.cR("SEARCHUPPER","PRIM_DC","UnicodeString");var C2=r.cR("ROWVISIBLE","PRIM_BOLN");C0.iC();C1.iC();
C2.iC();r.ln=220;{r.ln=229;if(l.n.lt(l.s.CurChars(l.s.Trim(P0.get())),m.USYSTEM.ref.getUCUSTOMUF_OSYSTM().getMINIMUMQUICKSEARCHCHARACTERS())){r.e();return;}r.ln=234;this.setUIISLOCKED(true);r.ln=237;C1.set(l.s.Trim(l.s.UpperCase(P0.get())));r.ln=240;this.mthZINT_EXTRACTSEARCHWORDS(C1);r.ln=243;{var l1=P1.selectList();while(l1.step()){r.ln=245;C2.set(false);r.ln=247;{var l2=m.ZINT_COLLECTSEARCHWORDS.cI();while(l2.step()){var WORD=r.sR("WORD",l2.item());r.ln=248;{var l3=P1.getColumns().cI();while(l3.step())
{var COLUMN=r.sR("COLUMN",l3.item());r.ln=250;if(COLUMN.getColumnVisible()){r.ln=252;if(l.Io(COLUMN,"PRIM_LIST.String")){r.ln=253;C0.set(l.s.UpperCase(l.cast(COLUMN,"PRIM_LIST.String").getCurrentItem().getValue()));}else{r.ln=255;C0.set(l.n.AsString(l.cast(COLUMN,"PRIM_LIST.Number").getCurrentItem().getValue()));}r.ln=258;if(l.s.Contains(C0.get(),WORD.get())){r.ln=259;C2.set(true);r.ln=260;break;}}r.ln=264;}l3.end();r.dR("COLUMN");}r.ln=266;if(l.tB(C2.get())){break;}r.ln=268;}l2.end();r.dR("WORD");
}r.ln=270;P1.getCurrentItem().setVisible(C2.get());r.ln=272;}l1.end();}r.ln=274;m.ZINT_COLLECTSEARCHWORDS.mthREMOVEALL();r.ln=276;this.setUIISLOCKED(false);}r.ln=278;r.e();};cO.mthZINT_EXTRACTSEARCHWORDS=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ExtractSearchWords",282);var P0=r.cPD("FROMSTRING");P0=p0;var C0=r.cF("TOTALCHARS",Fd.F1.Dc);var C1=r.cR("CHARAT","PRIM_DC","UnicodeString");var C2=r.cF("CURRENTCHARINDEX",Fd.F1.Dc);var C3=r.cD("C3");C0.iC();C1.iC();C2.iC();r.ln=282;{r.ln=290;m.ZINT_COLLECTSEARCHWORDS.mthREMOVEALL();
r.ln=292;P0.set(l.s.Trim(l.s.UpperCase(P0.get())));r.ln=296;if(m.USYSTEM.ref.getLANGUAGEISIDEOGRAPHIC()){r.ln=298;C3=r.sR("C3",l.cAs("PRIM_DC","UnicodeString"));r.ln=300;C3.set(P0.get());r.ln=302;m.ZINT_COLLECTSEARCHWORDS.mthINSERT(C3);}else{r.ln=309;C0.set(l.s.CurChars(P0.get()));r.ln=311;for(var i1=1,s1=1,t1=l.tI(C0.get());C2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=313;C1.set(l.s.Substring(P0.get(),C2.get(),1));r.ln=315;if(l.tB(l.s.eq(C1.get()," "))){r.ln=317;C3=r.sR("C3",null);
}else{r.ln=321;if(C3==null){r.ln=322;C3=r.sR("C3",l.cAs("PRIM_DC","UnicodeString"));r.ln=323;m.ZINT_COLLECTSEARCHWORDS.mthINSERT(C3);r.ln=324;C3.set(C1.get());}else{r.ln=326;C3.set(l.add(C3.get(),C1.get()));}}}}}r.ln=335;r.e();};cO.mthUSELECTCOLUMNS=function(){var m=this.REF,r=l.mR(this,cO,"uSelectColumns",339);var C0=r.cF("VISIBLEITEMCOUNTER",Fd.F1.Dc);var C1=r.cR("ENABLETHISITEM","PRIM_BOLN");var C2=r.cD("C2");C0.iC();C1.iC();r.ln=339;{r.ln=345;m.SELECTCOLUMNSMENU.mthZINT_TERMINATE();r.ln=347;{
var l1=m.AVLISTMANAGER.getROOTVF_FR003OWNER().getINSTANCELISTCOLUMNS().cI();while(l1.step()){var VISIBLECOLUMN=r.sR("VISIBLECOLUMN",l1.item());r.ln=348;if(VISIBLECOLUMN.getUSERMADEVISIBLE()){r.ln=349;C0.set(l.add(C0.get(),1));}r.ln=351;}l1.end();r.dR("VISIBLECOLUMN");}r.ln=353;m.SELECTCOLUMNSMENU.mthZINT_INITIALIZE(false,true,"");r.ln=355;{var l1=m.AVLISTMANAGER.getROOTVF_FR003OWNER().getINSTANCELISTCOLUMNS().cI();while(l1.step()){var VISIBLECOLUMN=r.sR("VISIBLECOLUMN",l1.item());r.ln=357;if(VISIBLECOLUMN.getUSERMADEVISIBLE())
{r.ln=359;C1.set(l.n.gt(C0.get(),1));r.ln=362;if(l.tB(l.and(l.and(C1.get(),l.b.Not(m.ALLOWVISUALIDCOLUMNREMOVAL.get())),l.s.eq(VISIBLECOLUMN.getTYPE(),"V")))){r.ln=363;C1.set(false);}r.ln=366;m.SELECTCOLUMNSMENU.mthZINT_PUTMENUITEM(VISIBLECOLUMN.getUCAPTION(),l.cat(VISIBLECOLUMN.getTYPE(),VISIBLECOLUMN.getTYPEINSTANCE()),"FALSE"," ",true,C1.get(),VISIBLECOLUMN,u,u,u,{set:function(rn){C2=r.sR("C2",rn)}},u);r.ln=368;if(l.tB(l.b.eq(C1.get(),false))){r.ln=369;C2.setOpacity(50);}}else{r.ln=374;m.SELECTCOLUMNSMENU.mthZINT_PUTMENUITEM(VISIBLECOLUMN.getUCAPTION(),l.cat(VISIBLECOLUMN.getTYPE(),VISIBLECOLUMN.getTYPEINSTANCE()),"FALSE"," ",false,u,VISIBLECOLUMN,u,u,u,u,u);
}r.ln=378;}l1.end();r.dR("VISIBLECOLUMN");}r.ln=389;m.SELECTCOLUMNSMENU.mthZINT_SHOW(u);}r.ln=391;r.e();};cO.mthUSORTCOLUMNS=function(){var r=l.mR(this,cO,"uSortColumns",394);r.ln=394;{}r.ln=424;r.e();};function e4(UMENUITEM,Ps){var m=this.REF,r=l.eR(this,cO,"#SelectColumnsMenu.ItemChanged",431);var P0=Ps.r("ASSOCIATEDREFERENCE");var P1=Ps.r("EVENTNAME");var P2=Ps.r("CHECKED");var C0=r.cD("C0");r.ln=431;{r.ln=435;C0=r.sR("C0",P0);r.ln=438;m.SELECTCOLUMNSMENU.mthZINT_TERMINATE();r.ln=441;{var v1=P1.get();
{r.ln=453;if(C0!=null){r.ln=456;C0.setUSERMADEVISIBLE(P2.get());r.ln=459;m.AVLISTMANAGER.getROOTVF_FR003OWNER().mthZINT_SAVECOLUMNDETAILS();r.ln=462;this.mthUHANDLEINSTANCELISTCOLUMNCHANGE(C0);}}r.ln=464;}}r.ln=465;r.e();};cO.mthUHANDLEINSTANCELISTCOLUMNCHANGE=function(p0){var r=l.mR(this,cO,"uHandleInstanceListColumnChange",468);var P0=r.cPD("UCOLUMNDEFINITION");P0=p0;r.ln=468;{}r.ln=472;r.e();};cO.mthUHANDLEINSTANCELISTCOLUMNSORTCHANGE=function(){var r=l.mR(this,cO,"uHandleInstanceListColumnSortChange",475);
r.ln=475;{}r.ln=479;r.e();};cO.getAVLISTMANAGER=function(){return this.REF.AVLISTMANAGER;};cO.setAVLISTMANAGER=function(v){this.srAVLISTMANAGER(v);};cO.getVISUALIDCOLUMNS=function(){return this.REF.LIST_VCOLUMNS;};cO.getACOLUMNS=function(){return this.REF.LIST_ACOLUMNS;};cO.getNCOLUMNSVISUAL=function(){return this.REF.LIST_NVISCOLUMNS;};cO.getDCOLUMNSVISUAL=function(){return this.REF.LIST_DVISCOLUMNS;};cO.getSHOWSORTREQUESTIMAGE=function(){return this.REF.SHOWSORTREQUESTIMAGE.get();};cO.getSHOWCOMMANDBUTTONS=function()
{return this.REF.SHOWCOMMANDBUTTONS.get();};cO.getSHOWSELECTCOLUMNSIMAGE=function(){return this.REF.SHOWSELECTCOLUMNSIMAGE.get();};cO.getALLOWVISUALIDCOLUMNREMOVAL=function(){return this.REF.ALLOWVISUALIDCOLUMNREMOVAL.get();};cO.getUIISLOCKED=function(){return this.REF.UIISLOCKED.get();};cO.setUIISLOCKED=function(v){this.REF.UIISLOCKED.set(v);};cO.getASSOCIATEDVF_SY185OTRACKINGITEM=function(){return this.REF.ASSOCIATEDVF_SY185OTRACKINGITEM;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srAVLISTMANAGER=function(rn){this.sR("AVLISTMANAGER",rn);};cO.srROOTVF_FR003OWNER=function(rn){if(this.REF.ROOTVF_FR003OWNER!=null){this.REF.ROOTVF_FR003OWNER.rH("SENTTOCSVREQUESTED",this,e3);}this.sR("ROOTVF_FR003OWNER",rn);if(this.REF.ROOTVF_FR003OWNER!=null){this.REF.ROOTVF_FR003OWNER.aH("SENTTOCSVREQUESTED",this,e3);}};cO.srASSOCIATEDVF_SY185OTRACKINGITEM=function(rn){this.sR("ASSOCIATEDVF_SY185OTRACKINGITEM",rn);
};},{rc:["VF_SY001O","VF_SY001X","VF_UI008O"],rp:["PRIM_PANL","PRIM_KCOL","PRIM_BOLN","PRIM_ACOL","PRIM_FLD"],dc:["VF_LM002O","VF_FR003O","VF_SY185O","VF_FP200O"],dp:["PRIM_DC.UnicodeString","PRIM_BOLN","PRIM_PANL"]});