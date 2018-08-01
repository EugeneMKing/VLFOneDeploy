﻿LANSA.addComponent({id:"VF_FR003O",ot:"rp",tp:"Reusable Part",de:"\\OC=Execution Time VF_FP003 (VLF-ONE)",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec("42.56"),c2=l.cDec("516.272"),c3=l.cDec("456.67"),c4=l.cDec("2517.44"),c5=l.cDec("12.5676"),c6=l.cDec("26.77278"),c7=l.cDec("56.87"),c8=l.cDec("56.78"),c9=l.cDec("666666.666666"),c10=l.cDec("777777.777777"),c11=l.cDec("888888.888888"),c12=l.cDec("999999.999999"),c13=l.cDec("101010.101010");
var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],h1:{"ENG":"Standard","FRA":"Nombre","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":" ","JPN":"Number"}[cL],
h3:" ",de:{"ENG":"Standard Number","FRA":"Nombre Standard","JPN":"Standard Number"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F4:{nm:"NEXTACOLUMN1",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",
h3:"Field",de:"Standard Integer field",dv:516272,ia:["FE","RB"]},F5:{nm:"NEXTACOLUMN2",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:2517,ia:["FE","RB"]},F6:{nm:"NEXTACOLUMN3",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:2677278,ia:["FE","RB"]},F7:{nm:"NEXTACOLUMN4",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",
dv:7262,ia:["FE","RB"]},F8:{nm:"NEXTACOLUMN5",ft:"I",ln:4,dc:0,ec:"J",lb:"Std Integer",h1:"Standard",h2:"Integer",h3:"Field",de:"Standard Integer field",dv:7862372,ia:["FE","RB"]},F9:{nm:"NEXTNCOLUMN1",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:c2,ia:["RB","FE"]},F10:{nm:"NEXTNCOLUMN2",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:c4,ia:["RB","FE"]},F11:{nm:"NEXTNCOLUMN3",
ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:c6,ia:["RB","FE"]},F12:{nm:"NEXTNCOLUMN4",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:7262,ia:["RB","FE"]},F13:{nm:"NEXTNCOLUMN5",ft:"S",ln:30,dc:9,ec:"4",lb:"Numeric Column",h1:"Numeric",h2:"Instance",h3:"Column",de:"Numeric Instance Column",dv:234,ia:["RB","FE"]}};var cO=l.rC(oI,{an:"VF_AC009O",fd:Fd,pt:{ParentVF_FR003O:
{da:"rw"},RootVF_FR003O:{da:"na"},InstanceListManager:{da:"na"},SnapInInstanceListBrowserName:{da:"na"},SnapInInstanceItemPaneName:{da:"r"},Filters:{da:"r"},uFilterCount:{da:"na"},InstanceListColumns:{da:"r"},uAllowClearButton:{da:"na"},uDblClickInstList:{da:"na"},uMenuSelect:{da:"na"},uOrdColInstList:{da:"na"},uShowSelectColumnsImage:{da:"na"},uMultipleSelect:{da:"na"},uEnablePopupPanels:{da:"na"},UserHasDisabledPopUps:{da:"na"},uVLFONEPopUpPanel:{da:"na"},uMiniBarLoc:{da:"r"},uQuickSearchWord:{
da:"na"},uSEFieldWidth:{da:"na"},uInitialInstanceListWidthONE:{da:"na"},uInitialInstanceListHeightONE:{da:"na"},uInitialInstanceListRowHeightONE:{da:"na"},uDesignerMaxInstancesOpen:{da:"na"},uUserMaxInstancesOpen:{da:"rw"},uRelationShipType:{da:"r"},uRelationShipHandlerId:{da:"r"},uRelationshipHandler:{da:"r"},uSendtoCSV:{da:"na"},uSendtoCSVPrefix:{da:"na"},HitServerinDemoPrograms:{da:"rw"},HasSubtypes:{da:"rw"},uVLFONEServerHandler:{da:"r"},RelatedBusinessObjects:{da:"r"},CanHaveChildren:{da:"r"
},CanHavePeers:{da:"r"},TreeLevel:{da:"r"},RelatedBusinessObjectsbyUserType:{da:"r"},CurrentVF_UM010O:{da:"na"}},mt:{zInt_EnrollChild:{ps:{"uReference":{pt:"i"}}},zInt_SetProperty:{ps:{"P":{pt:"i"}}},zInt_ShowPopupPanel:{ps:{"InstanceListEntry":{pt:"i"}}},zInt_TerminatePopupPanel:{},zInt_HidePopupPanel:{},zInt_SignalSentToCSVRequested:{},zInt_CreateSampleInstance:{ps:{"UseAKey":{pt:"i"},"UseNKey":{pt:"i"},"uParentKeyLevel":{pt:"i"},"UseParentDataItem":{pt:"i"},"ListManager":{pt:"i"},"OverrideCaption":
{pt:"i"}}},zInt_ExecuteRelationshipHandler:{ps:{"ForParentDataItem":{pt:"i"}}},zInt_TerminateRelationshipHandlers:{},zInt_LoadSavedColumnDetails:{},zInt_SaveColumnDetails:{}},ev:{SentToCSVRequested:{}},co:function(){cO.aN.call(this);this.aF("VF_FR003O",Fd);this.cD("PARENTVF_FR003O");var C1=this.cR("SNAPININSTANCELISTBROWSERNAME","PRIM_ALPH");var C2=this.cR("SNAPININSTANCEITEMPANENAME","PRIM_ALPH");var C3=this.cR("FILTERS","PRIM_ACOL");var C4=this.cR("INSTANCELISTCOLUMNS","PRIM_SACO");var C5=this.cR("PTY_UALLOWCLEARBUTTON","PRIM_BOLN");
var C6=this.cR("PTY_UDBLCLICKINSTLIST","PRIM_BOLN");var C7=this.cR("PTY_UMENUSELECT","PRIM_BOLN");var C8=this.cR("PTY_UORDCOLINSTLIST","PRIM_BOLN");var C9=this.cR("PTY_USHOWSELECTCOLUMNSIMAGE","PRIM_BOLN");var C10=this.cR("PTY_UMULTIPLESELECT","PRIM_BOLN");var C11=this.cR("PTY_UENABLEPOPUPPANELS","PRIM_BOLN");var C12=this.cR("USERHASDISABLEDPOPUPS","PRIM_BOLN");var C13=this.cR("PTY_UVLFONEPOPUPPANEL","PRIM_ALPH");var C14=this.cR("PTY_UMINIBARLOC","PRIM_ALPH");var C15=this.cR("PTY_UQUICKSEARCHWORD","PRIM_DC","UnicodeString");
var C16=this.cR("PTY_USEFIELDWIDTH","PRIM_NMBR");var C17=this.cR("PTY_UINITIALINSTANCELISTWIDTHONE","PRIM_NMBR");var C18=this.cR("PTY_UINITIALINSTANCELISTHEIGHTONE","PRIM_NMBR");var C19=this.cF("PTY_UINITIALINSTANCELISTROWHEIGHTONE",Fd.F1.Dc);var C20=this.cF("PTY_UDESIGNERMAXINSTANCESOPEN",Fd.F1.Dc);var C21=this.cF("PTY_UUSERMAXINSTANCESOPEN",Fd.F1.Dc);this.cD("POPUPPANEL");var C23=this.cR("PTY_URELATIONSHIPTYPE","PRIM_ALPH");var C24=this.cR("PTY_URELATIONSHIPHANDLERID","PRIM_ALPH");var C25=this.cR("RELATIONSHIPHANDLERLOADATTEMPTED","PRIM_BOLN");
this.cD("URELATIONSHIPHANDLER");var C27=this.cR("PTY_USENDTOCSV","PRIM_BOLN");var C28=this.cR("PTY_USENDTOCSVPREFIX","PRIM_ALPH");var C29=this.cR("SAMPLEDATAGENERATIONINPROGRESS","PRIM_BOLN");var C30=this.cR("PTY_HITSERVERINDEMOPROGRAMS","PRIM_BOLN");var C31=this.cR("PTY_HASSUBTYPES","PRIM_BOLN");var C32=this.cR("UVLFONESERVERHANDLER","PRIM_ALPH");var C33=this.cR("RELATEDBUSINESSOBJECTS","PRIM_ACOL");var C34=this.cR("PTY_CANHAVECHILDREN","PRIM_BOLN");var C35=this.cR("PTY_CANHAVEPEERS","PRIM_BOLN");
var C36=this.cF("PTY_TREELEVEL",Fd.F1.Dc);var C37=this.cR("RELATEDBUSINESSOBJECTSBYUSERTYPE","PRIM_KCOL");var C38=this.cR("LOADEDSAVEDCOLUMNDETAILS","PRIM_BOLN");this.cD("CURRENTVF_UM010O");C1.iC();C2.iC();C3.setCollects("VF_FP014O");C3.iC();C4.setCollects("VF_FP200O");C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();C11.iC();C12.iC();C13.iC();C14.iC();C15.iC();C16.iC();C17.iC();C18.iC();C19.aD();C19.iC();C20.aD();C20.iC();C21.aD();C21.iC();C23.iC();C24.iC();C25.iC();C27.iC();C28.iC();C29.iC();
C30.iC();C31.iC();C32.iC();C33.setCollects("VF_FR003O");C33.iC();C34.iC();C35.iC();C36.aD();C36.iC();C37.setStyle("COLLECTION");C37.setCollects("VF_FR003O");C37.setKeyedBy(Fd.F3.Dc);C37.iC();C38.iC();C4.aH("DISPLAYPOSITIONCHANGED",this,e2);C4.aH("COMPARE",this,e3);this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;cO.mthGET_UFILTERCOUNT=function(){var m=this.REF,r=l.pR(this,cO,"Get_uFilterCount",172);var P0=r.cPF("COUNT",Fd.F1.Dc);r.ln=172;{r.ln=174;P0.set(m.FILTERS.getItemCount());}r.ln=175;
return r.rV(P0.get());};cO.mthGET_UDESIGNERMAXINSTANCESOPEN=function(){var m=this.REF,r=l.pR(this,cO,"Get_uDesignerMaxInstancesOpen",179);var P0=r.cPF("COUNT",Fd.F1.Dc);r.ln=179;{r.ln=182;P0.set(m.PTY_UDESIGNERMAXINSTANCESOPEN.get());r.ln=187;if((l.n.gt(P0.get(),1)&&l.n.gt(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getOVERRIDEOPENBUSINESSOBJECTINSTANCES(),0))){r.ln=189;P0.set(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getOVERRIDEOPENBUSINESSOBJECTINSTANCES());
}}r.ln=193;return r.rV(P0.get());};cO.mthGET_ROOTVF_FR003O=function(){var m=this.REF,r=l.pR(this,cO,"Get_RootVF_FR003O",196);var P0=r.cPD("REFERENCE");r.ln=196;{r.ln=199;if((m.PARENTVF_FR003O==null)){r.ln=200;P0=r.sR("P0",this);}else{r.ln=202;P0=r.sR("P0",m.PARENTVF_FR003O.getROOTVF_FR003O());}}r.ln=205;return r.rR(P0);};cO.mthGET_CURRENTVF_UM010O=function(){var m=this.REF,r=l.pR(this,cO,"Get_CurrentVF_UM010O",208);var P0=r.cPD("REFERENCE");r.ln=208;{r.ln=211;if((m.PARENTVF_FR003O==null)){r.ln=212;
P0=r.sR("P0",m.CURRENTVF_UM010O);}else{r.ln=214;P0=r.sR("P0",m.PARENTVF_FR003O.getCURRENTVF_UM010O());}}r.ln=217;return r.rR(P0);};cO.mthSET_CURRENTVF_UM010O=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_CurrentVF_UM010O",220);var P0=r.cPD("REFERENCE");P0=p0;r.ln=220;{r.ln=223;if((m.PARENTVF_FR003O==null)){r.ln=224;this.srCURRENTVF_UM010O(P0);}else{r.ln=226;m.PARENTVF_FR003O.setCURRENTVF_UM010O(P0);}}r.ln=229;r.e();};cO.mthGET_USENDTOCSV=function(){var m=this.REF,r=l.pR(this,cO,"Get_uSendtoCSV",232);
var P0=r.cP("VALUE","PRIM_BOLN");r.ln=232;{r.ln=235;if((m.PARENTVF_FR003O==null)){r.ln=236;P0.set(m.PTY_USENDTOCSV.get());}else{r.ln=238;P0.set(m.PARENTVF_FR003O.getUSENDTOCSV());}}r.ln=241;return r.rV(P0.get());};cO.mthGET_USENDTOCSVPREFIX=function(){var m=this.REF,r=l.pR(this,cO,"Get_uSendtoCSVPrefix",244);var P0=r.cP("VALUE","PRIM_ALPH");r.ln=244;{r.ln=247;if((m.PARENTVF_FR003O==null)){r.ln=248;P0.set(m.PTY_USENDTOCSVPREFIX.get());}else{r.ln=250;P0.set(m.PARENTVF_FR003O.getUSENDTOCSVPREFIX());
}}r.ln=253;return r.rV(P0.get());};cO.mthGET_INSTANCELISTMANAGER=function(){var r=l.pR(this,cO,"Get_InstanceListManager",256);var P0=r.cPD("REFERENCE");r.ln=256;{r.ln=259;P0=r.sR("P0",this.REF.USYSTEM.ref.getINSTANCELISTCONTROLLER().mthGETINSTANCELISTREFERENCE(this,this));}r.ln=261;return r.rR(P0);};cO.mthGET_SNAPININSTANCELISTBROWSERNAME=function(){var m=this.REF,r=l.pR(this,cO,"Get_SnapInInstanceListBrowserName",264);var P0=r.cP("VALUE","PRIM_ALPH");r.ln=264;{r.ln=267;if((m.PARENTVF_FR003O==null))
{r.ln=268;P0.set(m.SNAPININSTANCELISTBROWSERNAME.get());}else{r.ln=270;P0.set(m.PARENTVF_FR003O.getSNAPININSTANCELISTBROWSERNAME());}}r.ln=273;return r.rV(P0.get());};cO.mthGET_UALLOWCLEARBUTTON=function(){var m=this.REF,r=l.pR(this,cO,"Get_uAllowClearButton",276);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=276;{r.ln=279;if((m.PARENTVF_FR003O==null)){r.ln=280;P0.set(m.PTY_UALLOWCLEARBUTTON.get());}else{r.ln=282;P0.set(m.PARENTVF_FR003O.getUALLOWCLEARBUTTON());}}r.ln=285;return r.rV(P0.get());};cO.mthGET_UMENUSELECT=function()
{var m=this.REF,r=l.pR(this,cO,"Get_uMenuSelect",288);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=288;{r.ln=291;if((m.PARENTVF_FR003O==null)){r.ln=292;P0.set(m.PTY_UMENUSELECT.get());}else{r.ln=294;P0.set(m.PARENTVF_FR003O.getUMENUSELECT());}}r.ln=297;return r.rV(P0.get());};cO.mthGET_UDBLCLICKINSTLIST=function(){var m=this.REF,r=l.pR(this,cO,"Get_uDblClickInstList",300);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=300;{r.ln=303;if((m.PARENTVF_FR003O==null)){r.ln=304;P0.set(m.PTY_UDBLCLICKINSTLIST.get());}else
{r.ln=306;P0.set(m.PARENTVF_FR003O.getUDBLCLICKINSTLIST());}}r.ln=310;return r.rV(P0.get());};cO.mthGET_UORDCOLINSTLIST=function(){var m=this.REF,r=l.pR(this,cO,"Get_uOrdColInstList",313);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=313;{r.ln=316;if((m.PARENTVF_FR003O==null)){r.ln=317;P0.set(m.PTY_UORDCOLINSTLIST.get());}else{r.ln=319;P0.set(m.PARENTVF_FR003O.getUORDCOLINSTLIST());}}r.ln=323;return r.rV(P0.get());};cO.mthGET_USHOWSELECTCOLUMNSIMAGE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uShowSelectColumnsImage",326);
var P0=r.cP("VALUE","PRIM_BOLN");r.ln=326;{r.ln=329;if((m.PARENTVF_FR003O==null)){r.ln=330;P0.set(m.PTY_USHOWSELECTCOLUMNSIMAGE.get());}else{r.ln=332;P0.set(m.PARENTVF_FR003O.getUSHOWSELECTCOLUMNSIMAGE());}}r.ln=335;return r.rV(P0.get());};cO.mthGET_UMULTIPLESELECT=function(){var m=this.REF,r=l.pR(this,cO,"Get_uMultipleSelect",338);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=338;{r.ln=341;if((m.PARENTVF_FR003O==null)){r.ln=342;P0.set(m.PTY_UMULTIPLESELECT.get());}else{r.ln=344;P0.set(m.PARENTVF_FR003O.getUMULTIPLESELECT());
}}r.ln=348;return r.rV(P0.get());};cO.mthGET_UENABLEPOPUPPANELS=function(){var m=this.REF,r=l.pR(this,cO,"Get_uEnablePopupPanels",350);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=350;{r.ln=353;if((m.PARENTVF_FR003O==null)){r.ln=354;P0.set(m.PTY_UENABLEPOPUPPANELS.get());}else{r.ln=356;P0.set(m.PARENTVF_FR003O.getUENABLEPOPUPPANELS());}}r.ln=359;return r.rV(P0.get());};cO.mthGET_USERHASDISABLEDPOPUPS=function(){var m=this.REF,r=l.pR(this,cO,"Get_UserHasDisabledPopUps",361);var P0=r.cP("VALUE","PRIM_BOLN");
r.ln=361;{r.ln=364;if((m.PARENTVF_FR003O==null)){r.ln=365;P0.set(m.USERHASDISABLEDPOPUPS.get());}else{r.ln=367;P0.set(m.PARENTVF_FR003O.getUSERHASDISABLEDPOPUPS());}}r.ln=370;return r.rV(P0.get());};cO.mthSET_USERHASDISABLEDPOPUPS=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_UserHasDisabledPopUps",372);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=372;{r.ln=375;if((m.PARENTVF_FR003O==null)){r.ln=376;m.USERHASDISABLEDPOPUPS.set(P0.get());}else{r.ln=378;m.PARENTVF_FR003O.setUSERHASDISABLEDPOPUPS(P0.get());
}}r.ln=381;r.e();};cO.mthGET_UVLFONEPOPUPPANEL=function(){var m=this.REF,r=l.pR(this,cO,"Get_uVLFONEPopUpPanel",384);var P0=r.cP("VALUE","PRIM_ALPH");r.ln=384;{r.ln=387;if((m.PARENTVF_FR003O==null)){r.ln=388;P0.set(m.PTY_UVLFONEPOPUPPANEL.get());}else{r.ln=390;P0.set(m.PARENTVF_FR003O.getUVLFONEPOPUPPANEL());}}r.ln=393;return r.rV(P0.get());};cO.mthGET_UQUICKSEARCHWORD=function(){var m=this.REF,r=l.pR(this,cO,"Get_uQuickSearchWord",396);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");r.ln=396;{r.ln=399;
if((m.PARENTVF_FR003O==null)){r.ln=400;P0.set(m.PTY_UQUICKSEARCHWORD.get());}else{r.ln=402;P0.set(m.PARENTVF_FR003O.getUQUICKSEARCHWORD());}}r.ln=405;return r.rV(P0.get());};cO.mthGET_USEFIELDWIDTH=function(){var m=this.REF,r=l.pR(this,cO,"Get_uSEFieldWidth",408);var P0=r.cP("VALUE","PRIM_NMBR");r.ln=408;{r.ln=411;if((m.PARENTVF_FR003O==null)){r.ln=412;P0.set(m.PTY_USEFIELDWIDTH.get());}else{r.ln=414;P0.set(m.PARENTVF_FR003O.getUSEFIELDWIDTH());}}r.ln=417;return r.rV(P0.get());};cO.mthGET_UINITIALINSTANCELISTWIDTHONE=function()
{var m=this.REF,r=l.pR(this,cO,"Get_uInitialInstanceListWidthONE",420);var P0=r.cP("VALUE","PRIM_NMBR");r.ln=420;{r.ln=423;if((m.PARENTVF_FR003O==null)){r.ln=424;P0.set(m.PTY_UINITIALINSTANCELISTWIDTHONE.get());}else{r.ln=426;P0.set(m.PARENTVF_FR003O.getUINITIALINSTANCELISTWIDTHONE());}}r.ln=429;return r.rV(P0.get());};cO.mthGET_UINITIALINSTANCELISTHEIGHTONE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uInitialInstanceListHeightONE",432);var P0=r.cP("VALUE","PRIM_NMBR");r.ln=432;{r.ln=435;if((m.PARENTVF_FR003O==null))
{r.ln=436;P0.set(m.PTY_UINITIALINSTANCELISTHEIGHTONE.get());}else{r.ln=438;P0.set(m.PARENTVF_FR003O.getUINITIALINSTANCELISTHEIGHTONE());}}r.ln=441;return r.rV(P0.get());};cO.mthGET_UINITIALINSTANCELISTROWHEIGHTONE=function(){var m=this.REF,r=l.pR(this,cO,"Get_uInitialInstanceListRowHeightONE",444);var P0=r.cPF("VALUE",Fd.F1.Dc);r.ln=444;{r.ln=447;if((m.PARENTVF_FR003O==null)){r.ln=448;P0.set(m.PTY_UINITIALINSTANCELISTROWHEIGHTONE.get());}else{r.ln=450;P0.set(m.PARENTVF_FR003O.getUINITIALINSTANCELISTROWHEIGHTONE());
}}r.ln=453;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",456);r.ln=456;{r.ln=459;m.PTY_UALLOWCLEARBUTTON.set(true);r.ln=460;m.PTY_URELATIONSHIPTYPE.set("ROOT");r.ln=461;m.PTY_UQUICKSEARCHWORD.set(this.REF.USYSTEM.ref.getUMTXTVALUES("QUICKSEARCH"));r.ln=462;m.PTY_UINITIALINSTANCELISTWIDTHONE.set(400);r.ln=463;m.PTY_UINITIALINSTANCELISTHEIGHTONE.set(200);r.ln=465;m.PTY_UDESIGNERMAXINSTANCESOPEN.set(1);r.ln=466;m.PTY_UUSERMAXINSTANCESOPEN.set(1);
r.ln=467;m.PTY_UORDCOLINSTLIST.set(true);r.ln=468;m.PTY_USHOWSELECTCOLUMNSIMAGE.set(true);r.ln=469;m.PTY_UMENUSELECT.set(true);r.ln=470;m.PTY_UMINIBARLOC.set("TOP");r.ln=471;m.UVLFONESERVERHANDLER.set("VF_SH200O");}r.ln=473;r.e();};cO.mthZINT_ENROLLCHILD=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_EnrollChild",476);var P0=r.cPD("UREFERENCE");var P1=r.cP("LATEENROLLREJECTED","PRIM_BOLN");P0=p0;var C0=r.cD("C0");r.ln=476;{r.ln=482;cA.mthZINT_ENROLLCHILD.call(this,P0);r.ln=485;if(l.Io(P0,"VF_FP014O"))
{r.ln=486;m.FILTERS.mthINSERT(l.cast(P0,"VF_FP014O"));return r.rV(P1.get());}r.ln=491;if(l.Io(P0,"VF_FP200O")){r.ln=493;C0=r.sR("C0",l.cast(P0,"VF_FP200O"));r.ln=507;if(l.s.eq(l.s.Substring(C0.getUIFORMFACTOR(),this.REF.USYSTEM.ref.getUIFORMFACTOR_ASINDEX(),1),"Y")){r.ln=509;C0.setDISPLAYPOSITION(l.add(m.INSTANCELISTCOLUMNS.getItemCount(),1));r.ln=510;m.INSTANCELISTCOLUMNS.mthINSERT(C0);}else{r.ln=521;P1.set(true);}return r.rV(P1.get());}r.ln=528;if(l.Io(P0,"VF_FR003O")){r.ln=529;l.cast(P0,"VF_FR003O").setPARENTVF_FR003O(this);
r.ln=530;m.RELATEDBUSINESSOBJECTS.mthINSERT(l.cast(P0,"VF_FR003O"));return r.rV(P1.get());}return r.rV(P1.get());}r.ln=537;};cO.mthZINT_SETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetProperty",540);var P0=r.cPD("P");P0=p0;var C0=r.cD("C0");r.ln=540;{r.ln=545;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=547;cA.mthZINT_SETPROPERTY.call(this,P0);r.ln=550;if(l.n.eq(P0.getPROPERTYNUMBER(),4)){r.ln=551;this.getROOTVF_FR003O().getRELATEDBUSINESSOBJECTSBYUSERTYPE().set(P0.getVALUE(),this);
}r.e();return;}r.ln=558;{var v1=P0.getPROPERTYNUMBER();if(r.ln=560,l.n.eq(v1,201)){r.ln=561;m.PTY_UALLOWCLEARBUTTON.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=563,l.n.eq(v1,202)){r.ln=564;m.PTY_UDBLCLICKINSTLIST.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=566,l.n.eq(v1,203)){r.ln=567;m.PTY_UMULTIPLESELECT.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=569,l.n.eq(v1,204)){r.ln=571;m.PTY_UENABLEPOPUPPANELS.set((l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE")&&l.n.gt(this.REF.USYSTEM.ref.getUIFORMFACTOR(),this.REF.USYSTEM.ref.getUIFORMFACTOR_MEDIUM())));
}else if(r.ln=573,l.n.eq(v1,205)){r.ln=574;m.PTY_UVLFONEPOPUPPANEL.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=576,l.n.eq(v1,207)){r.ln=577;m.PTY_URELATIONSHIPTYPE.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=579,l.n.eq(v1,208)){r.ln=580;m.PTY_UQUICKSEARCHWORD.set(P0.getVALUE());}else if(r.ln=582,l.n.eq(v1,209)){r.ln=583;m.PTY_USEFIELDWIDTH.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=585,l.n.eq(v1,210)){r.ln=586;m.PTY_USENDTOCSV.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));
}else if(r.ln=588,l.n.eq(v1,211)){r.ln=589;m.PTY_USENDTOCSVPREFIX.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=591,l.n.eq(v1,212)){r.ln=592;m.SNAPININSTANCELISTBROWSERNAME.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=594,l.n.eq(v1,214)){r.ln=595;m.SNAPININSTANCEITEMPANENAME.set(l.s.AsNativeString(P0.getVALUE()));r.ln=596;m.SNAPININSTANCELISTBROWSERNAME.set("VF_UM041O");}else if(r.ln=598,l.n.eq(v1,215)){r.ln=599;m.PTY_CANHAVECHILDREN.set(true);}else if(r.ln=601,l.n.eq(v1,216)){r.ln=602;
m.PTY_CANHAVEPEERS.set(true);}else if(r.ln=604,l.n.eq(v1,217)){r.ln=605;m.PTY_TREELEVEL.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=607,l.n.eq(v1,218)){r.ln=608;m.PTY_URELATIONSHIPHANDLERID.set(P0.getVALUE());}else if(r.ln=610,l.n.eq(v1,219)){r.ln=611;m.PTY_UINITIALINSTANCELISTWIDTHONE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=613,l.n.eq(v1,220)){r.ln=614;m.PTY_UINITIALINSTANCELISTHEIGHTONE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=616,l.n.eq(v1,221)){r.ln=617;m.PTY_UDESIGNERMAXINSTANCESOPEN.set(l.s.AsNumber(P0.getVALUE()));
}else if(r.ln=619,l.n.eq(v1,222)){r.ln=620;m.PTY_UORDCOLINSTLIST.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=622,l.n.eq(v1,223)){r.ln=623;m.PTY_UMINIBARLOC.set(P0.getVALUE());}else if(r.ln=625,l.n.eq(v1,224)){r.ln=626;m.PTY_UINITIALINSTANCELISTROWHEIGHTONE.set(l.s.AsNumber(P0.getVALUE()));}else if(r.ln=628,l.n.eq(v1,225)){r.ln=629;m.PTY_UMENUSELECT.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=631,l.n.eq(v1,226)){r.ln=632;m.UVLFONESERVERHANDLER.set(P0.getVALUE());
}else if(r.ln=634,l.n.eq(v1,227)){r.ln=635;m.PTY_USHOWSELECTCOLUMNSIMAGE.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}r.ln=637;}}r.ln=639;r.e();};cO.mthZINT_SHOWPOPUPPANEL=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ShowPopupPanel",642);var P0=r.cPD("INSTANCELISTENTRY");P0=p0;r.ln=642;{r.ln=645;if(l.tB(l.and(l.and(m.PTY_UENABLEPOPUPPANELS.get(),(P0!=null)),l.b.Not(m.USERHASDISABLEDPOPUPS.get())))){r.ln=647;if((m.POPUPPANEL==null)){r.ln=649;this.srPOPUPPANEL(l.cFrN(m.PTY_UVLFONEPOPUPPANEL.get(),"VF_AC021O"));
r.ln=651;if((m.POPUPPANEL==null)){r.ln=652;l.WEB().mthALERT(l.cat(l.cat("VF_FR003O: Attempt to create a popup panel handler with Id ",m.PTY_UVLFONEPOPUPPANEL.get())," failed. Note that this is the Id which may not be the same as the name."));r.ln=653;m.PTY_UENABLEPOPUPPANELS.set(false);r.e();return;}r.ln=657;m.POPUPPANEL.setAVFRAMEWORKMANAGER(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER());r.ln=659;m.POPUPPANEL.mthUINITIALIZE();r.ln=661;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_INITIALIZE(m.POPUPPANEL);
}r.ln=667;m.POPUPPANEL.mthUPREPARETOSHOW(P0);r.ln=669;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_SHOWPOPOVER(u,u,u,u,"",false,u,u,u,u);}}r.ln=673;r.e();};cO.mthZINT_TERMINATEPOPUPPANEL=function(){var m=this.REF,r=l.mR(this,cO,"zInt_TerminatePopupPanel",676);r.ln=676;{r.ln=678;if((m.POPUPPANEL!=null)){r.ln=680;this.mthZINT_HIDEPOPUPPANEL();r.ln=682;m.POPUPPANEL.mthUTERMINATE();r.ln=684;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_TERMINATE();r.ln=686;m.POPUPPANEL.setAVFRAMEWORKMANAGER(null);r.ln=689;
this.srPOPUPPANEL(null);}}r.ln=693;r.e();};cO.mthZINT_HIDEPOPUPPANEL=function(){var m=this.REF,r=l.mR(this,cO,"zInt_HidePopupPanel",697);r.ln=697;{r.ln=699;if((m.POPUPPANEL!=null)){r.ln=700;if(m.POPUPPANEL.getAVPOPUPPANELMANAGER().getISOPEN()){r.ln=702;m.POPUPPANEL.mthUPREPARETOHIDE();r.ln=704;m.POPUPPANEL.getAVPOPUPPANELMANAGER().mthZINT_CLOSEPOPOVER();}}}r.ln=709;r.e();};cO.mthZINT_SIGNALSENTTOCSVREQUESTED=function(){var r=l.mR(this,cO,"zInt_SignalSentToCSVRequested",713);r.ln=713;{r.ln=715;this.fE("SENTTOCSVREQUESTED");
}r.ln=717;r.e();};cO.mthZINT_CREATESAMPLEINSTANCE=function(p0,p1,p2,p3,p4,p5){var f=this.FLD.VF_FR003O,m=this.REF,r=l.mR(this,cO,"zInt_CreateSampleInstance",722);var P0=r.cPD("USEAKEY");var P1=r.cPD("USENKEY");var P2=r.cPF("UPARENTKEYLEVEL",Fd.F1.Dc);var P3=r.cPD("USEPARENTDATAITEM");var P4=r.cPD("LISTMANAGER");var P5=r.cP("OVERRIDECAPTION","PRIM_ALPH");P0=p0;P1=p1;P2.set(p2);P3=p3;P4=p4;P5.set(p5);var C0=r.cD("C0");var C1=r.cF("LOOP",Fd.F2.Dc);var C2=r.cF("I",Fd.F2.Dc);var C3=r.cF("USEKEYLEVEL",Fd.F2.Dc);
var C4=r.cR("VISUALID1","PRIM_DC","UnicodeString");var C5=r.cR("VISUALID2","PRIM_DC","UnicodeString");var C6=r.cR("USECAPTION","PRIM_DC","UnicodeString");var C7=r.cR("USECAPTIONUPPERCASE","PRIM_DC","UnicodeString");var C8=r.cR("T_ZONE04","PRIM_ALPH");C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();r.ln=722;{r.ln=755;if(l.tB(m.SAMPLEDATAGENERATIONINPROGRESS.get())){r.e();return;}r.ln=760;m.SAMPLEDATAGENERATIONINPROGRESS.set(true);r.ln=763;{var v1=m.PTY_URELATIONSHIPTYPE.get();if(r.ln=765,l.s.eq(v1,"PEER"))
{r.ln=766;C1.set(1);r.ln=767;C3.set(l.add(P2.get(),1));}else if(r.ln=769,l.s.eq(v1,"CHILD")){r.ln=770;C1.set(2);r.ln=771;C3.set(l.add(P2.get(),1));}else{r.ln=774;C1.set(1);r.ln=775;C3.set(P2.get());}r.ln=777;}r.ln=781;if(l.tB(l.s.eq(P5.get(),""))){r.ln=782;C6.set(this.REF.UCAPTIONSINGULAR.get());}else{r.ln=784;C6.set(P5.get());}r.ln=787;C7.set(l.s.UpperCase(C6.get()));r.ln=790;for(var i1=1,s1=1,t1=l.tI(C1.get());(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=792;f.F4.set(l.add(f.F4.get(),42));
r.ln=793;f.F5.set(l.add(f.F5.get(),456));r.ln=794;f.F6.set(l.sub(f.F6.get(),12));r.ln=795;f.F7.set(l.add(f.F7.get(),56));r.ln=796;f.F8.set(l.sub(f.F8.get(),56));r.ln=798;f.F9.set(l.add(f.F9.get(),c1));r.ln=799;f.F10.set(l.add(f.F10.get(),c3));r.ln=800;f.F11.set(l.sub(f.F11.get(),c5));r.ln=801;f.F12.set(l.add(f.F12.get(),c7));r.ln=802;f.F13.set(l.sub(f.F13.get(),c8));r.ln=804;P1.get(C3.get()).set(l.add(P1.get(C3.get()).get(),1));r.ln=806;C8.set(l.n.AsString(P1.get(C3.get()).get()));r.ln=807;while ( l.n.lt(l.s.CurChars(C8.get()),4))
{r.ln=808;C8.set(l.cat("0",C8.get()));}r.ln=811;C4.set(l.cat(C7.get(),C8.get()));r.ln=813;P0.get(C3.get()).set(l.s.AsNativeString(C4.get()));r.ln=815;for(var i2=l.tI(l.add(C3.get(),1)),s2=1,t2=l.tI(5);C2.set(i2),(((s2>=0)&&(i2<=t2))||((s2<0)&&(i2>=t2)));i2+=s2){r.ln=816;P1.get(C2.get()).set(0);r.ln=817;P0.get(C2.get()).set(" ");}r.ln=820;C5.set(l.cat(l.cat(C6.get()," number "),C8.get()));r.ln=822;P4.mthADDTOLIST(C4.get(),C5.get(),P0.get(1).get(),P0.get(2).get(),P0.get(3).get(),P0.get(4).get(),P0.get(5).get(),P1.get(1).get(),P1.get(2).get(),P1.get(3).get(),P1.get(4).get(),P1.get(5).get(),u,u,u,this.getUUSEROBJECTTYPE()," ",P3,u,u,l.cat("AA",l.n.AsString(f.F4.get())),l.cat("QQ",l.n.AsString(f.F5.get())),l.cat("GG",l.n.AsString(f.F6.get())),l.cat("DDD",l.n.AsString(f.F7.get())),l.cat("EEE",l.n.AsString(f.F8.get())),"FFFFFFFFFF","GGGGGGGGGG","HHHHHHHHHH","IIIIIIIIII","JJJJJJJJJJ",f.F9.get(),f.F10.get(),f.F11.get(),f.F12.get(),f.F13.get(),c9,c10,c11,c12,c13,u,"1959-12-05 08:00:00","1965-06-15 08:00:00","1959-12-05 08:00:00","1965-06-15 08:00:00","1959-12-05 08:00:00",{set:function(rn){C0=r.sR("C0",rn)}});
r.ln=824;{var l1=m.RELATEDBUSINESSOBJECTS.cI();while(l1.step()){var CHILDORPEER=r.sR("CHILDORPEER",l1.item());r.ln=826;CHILDORPEER.mthZINT_CREATESAMPLEINSTANCE(P0,P1,P2.get(),C0,P4,"");r.ln=828;}l1.end();r.dR("CHILDORPEER");}}r.ln=834;m.SAMPLEDATAGENERATIONINPROGRESS.set(false);}r.ln=836;r.e();};cO.mthZINT_EXECUTERELATIONSHIPHANDLER=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ExecuteRelationshipHandler",839);var P0=r.cPD("FORPARENTDATAITEM");P0=p0;r.ln=839;{r.ln=842;if(l.tB(l.and((m.URELATIONSHIPHANDLER==null),l.b.eq(m.RELATIONSHIPHANDLERLOADATTEMPTED.get(),false))))
{r.ln=844;m.RELATIONSHIPHANDLERLOADATTEMPTED.set(true);r.ln=846;if(l.tB(l.and(l.s.ne(m.PTY_URELATIONSHIPHANDLERID.get(),""),l.s.eq(m.PTY_URELATIONSHIPTYPE.get(),"CHILD")))){r.ln=848;this.srURELATIONSHIPHANDLER(l.cFrN(m.PTY_URELATIONSHIPHANDLERID.get(),"VF_AC023O"));r.ln=850;if((m.URELATIONSHIPHANDLER==null)){r.ln=851;l.WEB().mthALERT(l.cat(l.cat("VF_FR003O: Attempt to create a relationship handler with Id ",m.PTY_URELATIONSHIPHANDLERID.get())," failed. Note that this is the Id which may not be the same as the name."));
r.e();return;}r.ln=855;m.URELATIONSHIPHANDLER.setAVFRAMEWORKMANAGER(this.REF.USYSTEM.ref.getUFRAMEWORKMANAGER());m.URELATIONSHIPHANDLER.setASSOCIATEDVF_FR003O(this);m.URELATIONSHIPHANDLER.setAVLISTMANAGER(this.getINSTANCELISTMANAGER());r.ln=857;m.URELATIONSHIPHANDLER.mthUINITIALIZE();}}r.ln=865;if((m.URELATIONSHIPHANDLER!=null)){r.ln=866;m.URELATIONSHIPHANDLER.mthUADDENTRIESFOR(P0,this.getUUSEROBJECTTYPE());}}r.ln=869;r.e();};cO.mthZINT_TERMINATERELATIONSHIPHANDLERS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_TerminateRelationshipHandlers",872);
r.ln=872;{r.ln=875;{var l1=m.RELATEDBUSINESSOBJECTS.cI();while(l1.step()){var RELATEDBUSINESSOBJECT=r.sR("RELATEDBUSINESSOBJECT",l1.item());r.ln=876;RELATEDBUSINESSOBJECT.mthZINT_TERMINATERELATIONSHIPHANDLERS();r.ln=877;}l1.end();r.dR("RELATEDBUSINESSOBJECT");}r.ln=880;if((m.URELATIONSHIPHANDLER!=null)){r.ln=882;m.URELATIONSHIPHANDLER.mthUTERMINATE();r.ln=884;m.URELATIONSHIPHANDLER.setAVFRAMEWORKMANAGER(null);m.URELATIONSHIPHANDLER.setASSOCIATEDVF_FR003O(null);m.URELATIONSHIPHANDLER.setAVLISTMANAGER(null);
r.ln=886;this.srURELATIONSHIPHANDLER(null);r.ln=888;m.RELATIONSHIPHANDLERLOADATTEMPTED.set(false);}}r.ln=892;r.e();};cO.mthZINT_LOADSAVEDCOLUMNDETAILS=function(){var m=this.REF,r=l.mR(this,cO,"zInt_LoadSavedColumnDetails",895);var C0=r.cD("C0");var C1=r.cR("CLIPBOARDVALUE","PRIM_ALPH");var C2=r.cR("GUID","PRIM_ALPH");var C3=r.cF("DISPLAYPOS",Fd.F1.Dc);var C4=r.cF("COLUMNWIDTH",Fd.F1.Dc);C1.iC();C2.iC();C3.iC();C4.iC();r.ln=895;{r.ln=903;if(l.b.Not(m.LOADEDSAVEDCOLUMNDETAILS.get())){r.ln=905;m.LOADEDSAVEDCOLUMNDETAILS.set(true);
r.ln=906;C0=r.sR("C0",this.getROOTVF_FR003O());r.ln=907;C2.set(C0.getUIDENTIFIER());r.ln=909;{var l1=C0.getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMN=r.sR("COLUMN",l1.item());r.ln=911;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("ILCOLUMN",C2.get(),COLUMN.getTYPEINSTANCE(),u,u,u,u,C1,u,"TRUE",u);r.ln=913;COLUMN.setUSERMADEVISIBLE(l.s.eq(C1.get(),"TRUE"));r.ln=915;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("ILCOLUMN",C2.get(),COLUMN.getTYPEINSTANCE(),"DISPLAYPOS",u,u,u,u,C3,u,-9999);
r.ln=918;if(l.n.ne(C3.get(),-9999)){r.ln=919;COLUMN.setDISPLAYPOSITION(C3.get());}r.ln=922;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUGET("ILCOLUMN",C2.get(),COLUMN.getTYPEINSTANCE(),"COLUMNWIDTH",u,u,u,u,C4,u,-9999);r.ln=925;if(l.n.ne(C4.get(),-9999)){r.ln=926;COLUMN.setCOLUMNWIDTH(C4.get());}r.ln=930;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=932;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.add(l.cat(l.cat("Restored column ",COLUMN.getTYPEINSTANCE())," - "),COLUMN.getUCAPTION())," - ")," with UserMadeVisible="),l.b.AsString(COLUMN.getUSERMADEVISIBLE()))," Display Position="),l.n.AsString(COLUMN.getDISPLAYPOSITION())),"Width="),l.n.AsString(COLUMN.getCOLUMNWIDTH())),u,u,true,u);
}r.ln=936;}l1.end();r.dR("COLUMN");}}}r.ln=940;r.e();};cO.mthZINT_SAVECOLUMNDETAILS=function(){var r=l.mR(this,cO,"zInt_SaveColumnDetails",943);var C0=r.cD("C0");var C1=r.cR("GUID","PRIM_ALPH");C1.iC();r.ln=943;{r.ln=948;C0=r.sR("C0",this.getROOTVF_FR003O());r.ln=949;C1.set(C0.getUIDENTIFIER());r.ln=951;{var l1=C0.getINSTANCELISTCOLUMNS().cI();while(l1.step()){var COLUMN=r.sR("COLUMN",l1.item());r.ln=953;if(COLUMN.getUSERMADEVISIBLE()){r.ln=954;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),u,u,u,u,"TRUE",u,u);
}else{r.ln=956;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),u,u,u,u,"FALSE",u,u);}r.ln=959;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),"DISPLAYPOS",u,u,u,u,COLUMN.getDISPLAYPOSITION(),u);r.ln=961;this.REF.USYSTEM.ref.getUSYSTEMVCLIPBOARD().mthUSET("ILCOLUMN",C1.get(),COLUMN.getTYPEINSTANCE(),"COLUMNWIDTH",u,u,u,u,COLUMN.getCOLUMNWIDTH(),u);r.ln=964;if(this.REF.USYSTEMCOMMON.ref.getINSYSTRACEMODE())
{r.ln=966;this.REF.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.add(l.cat(l.cat("Saved column ",COLUMN.getTYPEINSTANCE())," - "),COLUMN.getUCAPTION())," - ")," with UserMadeVisible="),l.b.AsString(COLUMN.getUSERMADEVISIBLE()))," Display Position="),l.n.AsString(COLUMN.getDISPLAYPOSITION())),"Width="),l.n.AsString(COLUMN.getCOLUMNWIDTH())),u,u,true,u);}r.ln=970;}l1.end();r.dR("COLUMN");}}r.ln=972;r.e();};function e2(UCOLUMN,Ps){var m=this.REF,r=l.eR(this,cO,"#InstanceListColumns<>.DisplayPositionChanged",977);
r.ln=977;{r.ln=979;m.INSTANCELISTCOLUMNS.mthREMOVE(UCOLUMN);r.ln=980;m.INSTANCELISTCOLUMNS.mthINSERT(UCOLUMN);}r.ln=982;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#InstanceListColumns.Compare",986);var P0=Ps.r("OBJECT");var P1=Ps.r("SUBJECT");var P2=Ps.r("RESULT");r.ln=986;{r.ln=988;if(l.n.lt(P1.getDISPLAYPOSITION(),P0.getDISPLAYPOSITION())){r.ln=989;P2.set("LESS");}else{r.ln=991;if(l.n.gt(P1.getDISPLAYPOSITION(),P0.getDISPLAYPOSITION())){r.ln=992;P2.set("GREATER");}else{r.ln=994;P2.set("EQUAL");
}}}r.ln=998;r.e();};cO.getPARENTVF_FR003O=function(){return this.REF.PARENTVF_FR003O;};cO.setPARENTVF_FR003O=function(v){this.srPARENTVF_FR003O(v);};cO.getROOTVF_FR003O=function(){return this.mthGET_ROOTVF_FR003O();};cO.getINSTANCELISTMANAGER=function(){return this.mthGET_INSTANCELISTMANAGER();};cO.getSNAPININSTANCELISTBROWSERNAME=function(){return this.mthGET_SNAPININSTANCELISTBROWSERNAME();};cO.getSNAPININSTANCEITEMPANENAME=function(){return this.REF.SNAPININSTANCEITEMPANENAME.get();};cO.getFILTERS=function()
{return this.REF.FILTERS;};cO.getUFILTERCOUNT=function(){return this.mthGET_UFILTERCOUNT();};cO.getINSTANCELISTCOLUMNS=function(){return this.REF.INSTANCELISTCOLUMNS;};cO.getUALLOWCLEARBUTTON=function(){return this.mthGET_UALLOWCLEARBUTTON();};cO.getUDBLCLICKINSTLIST=function(){return this.mthGET_UDBLCLICKINSTLIST();};cO.getUMENUSELECT=function(){return this.mthGET_UMENUSELECT();};cO.getUORDCOLINSTLIST=function(){return this.mthGET_UORDCOLINSTLIST();};cO.getUSHOWSELECTCOLUMNSIMAGE=function(){return this.mthGET_USHOWSELECTCOLUMNSIMAGE();
};cO.getUMULTIPLESELECT=function(){return this.mthGET_UMULTIPLESELECT();};cO.getUENABLEPOPUPPANELS=function(){return this.mthGET_UENABLEPOPUPPANELS();};cO.getUSERHASDISABLEDPOPUPS=function(){return this.mthGET_USERHASDISABLEDPOPUPS();};cO.setUSERHASDISABLEDPOPUPS=function(v){this.mthSET_USERHASDISABLEDPOPUPS(v);};cO.getUVLFONEPOPUPPANEL=function(){return this.mthGET_UVLFONEPOPUPPANEL();};cO.getUMINIBARLOC=function(){return this.REF.PTY_UMINIBARLOC.get();};cO.getUQUICKSEARCHWORD=function(){return this.mthGET_UQUICKSEARCHWORD();
};cO.getUSEFIELDWIDTH=function(){return this.mthGET_USEFIELDWIDTH();};cO.getUINITIALINSTANCELISTWIDTHONE=function(){return this.mthGET_UINITIALINSTANCELISTWIDTHONE();};cO.getUINITIALINSTANCELISTHEIGHTONE=function(){return this.mthGET_UINITIALINSTANCELISTHEIGHTONE();};cO.getUINITIALINSTANCELISTROWHEIGHTONE=function(){return this.mthGET_UINITIALINSTANCELISTROWHEIGHTONE();};cO.getUDESIGNERMAXINSTANCESOPEN=function(){return this.mthGET_UDESIGNERMAXINSTANCESOPEN();};cO.getUUSERMAXINSTANCESOPEN=function()
{return this.REF.PTY_UUSERMAXINSTANCESOPEN.get();};cO.setUUSERMAXINSTANCESOPEN=function(v){this.REF.PTY_UUSERMAXINSTANCESOPEN.set(v);};cO.getURELATIONSHIPTYPE=function(){return this.REF.PTY_URELATIONSHIPTYPE.get();};cO.getURELATIONSHIPHANDLERID=function(){return this.REF.PTY_URELATIONSHIPHANDLERID.get();};cO.getURELATIONSHIPHANDLER=function(){return this.REF.URELATIONSHIPHANDLER;};cO.getUSENDTOCSV=function(){return this.mthGET_USENDTOCSV();};cO.getUSENDTOCSVPREFIX=function(){return this.mthGET_USENDTOCSVPREFIX();
};cO.getHITSERVERINDEMOPROGRAMS=function(){return this.REF.PTY_HITSERVERINDEMOPROGRAMS.get();};cO.setHITSERVERINDEMOPROGRAMS=function(v){this.REF.PTY_HITSERVERINDEMOPROGRAMS.set(v);};cO.getHASSUBTYPES=function(){return this.REF.PTY_HASSUBTYPES.get();};cO.setHASSUBTYPES=function(v){this.REF.PTY_HASSUBTYPES.set(v);};cO.getUVLFONESERVERHANDLER=function(){return this.REF.UVLFONESERVERHANDLER.get();};cO.getRELATEDBUSINESSOBJECTS=function(){return this.REF.RELATEDBUSINESSOBJECTS;};cO.getCANHAVECHILDREN=function()
{return this.REF.PTY_CANHAVECHILDREN.get();};cO.getCANHAVEPEERS=function(){return this.REF.PTY_CANHAVEPEERS.get();};cO.getTREELEVEL=function(){return this.REF.PTY_TREELEVEL.get();};cO.getRELATEDBUSINESSOBJECTSBYUSERTYPE=function(){return this.REF.RELATEDBUSINESSOBJECTSBYUSERTYPE;};cO.getCURRENTVF_UM010O=function(){return this.mthGET_CURRENTVF_UM010O();};cO.setCURRENTVF_UM010O=function(v){this.mthSET_CURRENTVF_UM010O(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_NUM"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srPARENTVF_FR003O=function(rn){this.sR("PARENTVF_FR003O",rn);};cO.srPOPUPPANEL=function(rn){this.sR("POPUPPANEL",rn);};cO.srURELATIONSHIPHANDLER=function(rn){this.sR("URELATIONSHIPHANDLER",rn);};cO.srCURRENTVF_UM010O=function(rn){this.sR("CURRENTVF_UM010O",rn);};},{rc:["VF_AC009O"],rp:["PRIM_ALPH","PRIM_ACOL","PRIM_SACO","PRIM_BOLN","PRIM_DC.UnicodeString","PRIM_NMBR","PRIM_FLD","PRIM_KCOL"],
dc:["VF_FR003O","VF_AC021O","VF_AC023O","VF_UM010O","VF_FP200O","VF_AC001O","VF_LM003O","VF_FP014O"],dp:["PRIM_DC.UnicodeString","PRIM_ALPH"]});