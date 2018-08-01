﻿LANSA.addComponent({id:"VF_UI023O",ot:"rp",tp:"Reusable Part",de:"\\OC=Create an application or BO menu",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELSYMN",an:"VF_ELSYMNAME",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]},F3:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{HasUsableContent:{da:"r"},IsInitialized:{da:"rw"},AssociatedVF_FP002:{da:"rw"},PopOvermanager:{da:"r"}},mt:{zInt_Initialize:{ps:{"UsePopOvermanager":{pt:"i"}}},zInt_Terminate:{},zInt_StyleItem:
{ps:{"AtIndexNumber":{pt:"i"}}},zInt_FinalizeLayout:{},zInt_SelectPane:{ps:{"ViewPane":{pt:"i"},"FocusFirstPanel":{pt:"i"},"FocusLastPanel":{pt:"i"}}},zInt_AddTabSheet:{ps:{"Caption":{pt:"i"},"Hint":{pt:"i"},"ImageName":{pt:"i"},"ImageSource":{pt:"i"}}},zInt_AddBottomTextItem:{ps:{"WithReference":{pt:"i"}}},zInt_AddItem:{ps:{"WithReference":{pt:"i"}}},zInt_ShowInterest:{ps:{"OnPanel":{pt:"i"}}},zInt_RemoveInterest:{ps:{"FromPanel":{pt:"i"}}},zInt_GetReadytoDisplay:{},zInt_SetFocusPaneltoFirst:{},
zInt_SetFocusPaneltoLast:{},zInt_SetFocusPanel:{ps:{"ToPanel":{pt:"i"}}},zInt_DestroyOpenPaneContent:{},zInt_BuildOpenPaneContent:{ps:{"RequiredHeight":{pt:"o"},"VisibleHeight":{pt:"o"},"onPanel":{pt:"i"}}}},ev:{uObjectSelected:{ps:{"WithReference":{pt:"i"}}},uOpenPaneSelected:{ps:{"WithReference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UI023O",Fd);var C0=this.cR("MAINATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("MAINATTACHITEM1","PRIM_ATLI");var C2=this.cR("MAINATTACHBOTTOMPANEHEADING","PRIM_ATLI");
var C3=this.cR("MAINATTACHBOTTOMPANE","PRIM_ATLI");var C4=this.cR("MAINATTACHOPENPANE","PRIM_ATLI");var C5=this.cR("MAINATTACHOPENPANETITLE","PRIM_ATLI");var C6=this.cR("MAINATTACHSIDEBARFLIPPERPANEL","PRIM_ATLI");var C7=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C8=this.cR("ATTACHITEMBOTTOMPANEHEADINGIMAGE","PRIM_ATLI");var C9=this.cR("ATTACHITEMBOTTOMPANEHEADINGTEXT","PRIM_ATLI");var C10=this.cR("MAINSELECTIONBAR","VF_UI019O");var C11=this.cR("BOTTOMPANEHEADINGPANEL","PRIM_PANL");var C12=this.cR("BOTTOMPANEHEADINGTEXT","PRIM_LABL");
var C13=this.cR("BOTTOMPANEHEADINGIMAGE","PRIM_LABL");var C14=this.cR("BOTTOMTEXTPANE","PRIM_PANL");var C15=this.cR("OPENTEXTPANE","PRIM_PANL");var C16=this.cR("OPENTEXTPANETITLE","PRIM_LABL");var C17=this.cR("SIDEBARFLIPPERPANEL","PRIM_PANL");var C18=this.cR("SIDEBARFLIPPERMANAGER","PRIM_ATLM");var C19=this.cR("SIDEBARFLIPPERATTACHMENT","PRIM_ATLI");var C20=this.cR("HASUSABLECONTENT","PRIM_BOLN");var C21=this.cR("ISINITIALIZED","PRIM_BOLN");this.cD("ASSOCIATEDVF_FP002");var C23=this.cA("USYSTEM","VF_SY001O");
var C24=this.cA("USYSTEMCOMMON","VF_SY001X");var C25=this.cA("UFRAMEWORK","VF_FP001O");var C26=this.cR("BORDERALLROUND","PRIM_VS","Style");var C27=this.cF("USENEXTLEFT",Fd.F1.Dc);var C28=this.cF("USENEXTTOP",Fd.F1.Dc);var C29=this.cF("USEVERTICALSPACING",Fd.F1.Dc);var C30=this.cF("USEHORIZONTALSPACING",Fd.F1.Dc);var C31=this.cF("PANELSINLINECOUNT",Fd.F1.Dc);var C32=this.cF("USEPANELSPERLINE",Fd.F1.Dc);var C33=this.cF("USEHEIGHT",Fd.F1.Dc);var C34=this.cF("USEWIDTH",Fd.F1.Dc);var C35=this.cF("IMAGEDIMENSION",Fd.F1.Dc);
var C36=this.cF("USEUNSELECTEDOPACTITY",Fd.F1.Dc);var C37=this.cF("USELABELHEIGHT",Fd.F1.Dc);var C38=this.cF("BOTTOMPANEHEADINGPANELHEIGHT",Fd.F1.Dc);var C39=this.cF("MOUSEOVERBORDERWIDTH",Fd.F1.Dc);var C40=this.cF("OPENTEXTPANEVISIBLEHEIGHT",Fd.F1.Dc);var C41=this.cF("USETEXTITEMHEIGHT",Fd.F1.Dc);var C42=this.cF("USETEXTMARGIN",Fd.F1.Dc);var C43=this.cF("USETEXTIMAGEDIMENSION",Fd.F1.Dc);var C44=this.cR("COLLECTLABELS","PRIM_ACOL");var C45=this.cR("COLLECTREFERENCES","PRIM_ACOL");var C46=this.cR("COLLECTPANELS","PRIM_ACOL");
var C47=this.cR("COLLECTIMAGES","PRIM_ACOL");var C48=this.cR("COLLECTSTYLES","PRIM_ACOL");var C49=this.cR("COLLECTBADGES","PRIM_ACOL");var C50=this.cR("COLLECTBOTTOMLABELS","PRIM_ACOL");var C51=this.cR("COLLECTBOTTOMSWATCHES","PRIM_ACOL");var C52=this.cR("COLLECTBOTTOMSWATCHSTYLES","PRIM_ACOL");var C53=this.cR("COLLECTBOTTOMREFERENCES","PRIM_ACOL");var C54=this.cR("COLLECTVIEWPANES","PRIM_ACOL");var C55=this.cR("COLLECTATTACHMENTITEMS","PRIM_ACOL");var C56=this.cR("COLLECTVIEWPANEMAXIMUMHEIGHTS","PRIM_ACOL");
this.cD("CURRENTVIEWPANE");var C58=this.cF("CURRENTVIEWPANEINDEX",Fd.F1.Dc);this.cD("CURRENTFOCUSEDPANEL");var C60=this.cR("COLLECTAC005IMAGES","PRIM_ACOL");var C61=this.cR("COLLECTAC005LABELS","PRIM_ACOL");var C62=this.cR("COLLECTUI002REFERENCES","PRIM_ACOL");var C63=this.cR("COLLECTAC005INDICIES","PRIM_ACOL");var C64=this.cR("COLLECTAC005STYLES","PRIM_ACOL");this.cD("POPOVERMANAGER");this.cD("SIDEBARFLIPPER");C0.iC();C1.setManage(C10);C1.setParent(C0);C1.setAttachment("TOP");C1.iC();C2.setParent(C0);
C2.setAttachment("BOTTOM");C2.setMarginTop(4);C2.setManage(C11);C2.iC();C3.setParent(C0);C3.setAttachment("BOTTOM");C3.setManage(C14);C3.iC();C4.setParent(C0);C4.setAttachment("BOTTOM");C4.setManage(C16);C4.iC();C5.setParent(C0);C5.setAttachment("BOTTOM");C5.setManage(C15);C5.iC();C6.setParent(C0);C6.setAttachment("BOTTOM");C6.setManage(C17);C6.iC();C7.iC();C8.setManage(C13);C8.setParent(C7);C8.setAttachment("RIGHT");C8.iC();C9.setManage(C12);C9.setParent(C7);C9.setAttachment("CENTER");C9.iC();C10.setParent(this);
C10.setWidth(50);C10.iC();C11.setParent(this);C11.setDisplayPosition(4);C11.setLeft(0);C11.setTabPosition(2);C11.setTop(36);C11.setHeight(16);C11.setLayoutManager(C7);C11.setThemeDrawStyle("ListItem");C11.iC();C12.setParent(C11);C12.setDisplayPosition(2);C12.setTabPosition(2);C12.setTabStop(false);C12.setHeight(16);C12.setLeft(0);C12.setTop(0);C12.setWidth(34);C12.iC();C13.setParent(C11);C13.setDisplayPosition(1);C13.setTabPosition(1);C13.setTabStop(false);C13.setHeight(16);C13.setLeft(34);C13.setTop(0);
C13.setWidth(16);C13.iC();C14.setParent(this);C14.setDisplayPosition(5);C14.setLeft(0);C14.setTabPosition(4);C14.setTop(32);C14.iC();C15.setParent(this);C15.setDisplayPosition(3);C15.setLeft(0);C15.setTabPosition(3);C15.setTop(32);C15.setHeight(0);C15.setVerticalScroll(true);C15.iC();C16.setParent(this);C16.setDisplayPosition(2);C16.setTabPosition(5);C16.setTabStop(false);C16.setHeight(20);C16.setLeft(0);C16.setTop(32);C16.iC();C17.setParent(this);C17.setVisible(false);C17.setDisplayPosition(6);C17.setTabPosition(6);
C17.setLayoutManager(C18);C17.setLeft(0);C17.setTop(32);C17.iC();C18.iC();C19.setParent(C18);C19.setAttachment("LEFT");C19.iC();C20.iC();C21.iC();if((C23!=null)&&(C23.iI()==false)){C23.iC();}if((C24!=null)&&(C24.iI()==false)){C24.iC();}if((C25!=null)&&(C25.iI()==false)){C25.iC();}C26.setBorderBottom(1);C26.setBorderLeft(1);C26.setBorderTop(1);C26.setBorderRight(1);C26.iC();C27.aD();C27.iC();C28.aD();C28.iC();C29.aD();C29.iC();C30.aD();C30.iC();C31.aD();C31.iC();C32.aD();C32.iC();C33.aD();C33.iC();
C34.aD();C34.iC();C35.aD();C35.iC();C36.aD();C36.iC();C37.aD();C37.iC();C38.aD();C38.iC();C39.aD();C39.iC();C40.aD();C40.iC();C41.aD();C41.iC();C42.aD();C42.iC();C43.aD();C43.iC();C44.setCollects("PRIM_LABL");C44.iC();C45.setCollects("VF_AC009O");C45.iC();C46.setCollects("PRIM_PANL");C46.iC();C47.setCollects("VF_UI005O");C47.iC();C48.setCollects("PRIM_VS.Style");C48.iC();C49.setCollects("VF_UI050O");C49.iC();C50.setCollects("PRIM_LABL");C50.iC();C51.setCollects("PRIM_LABL");C51.iC();C52.setCollects("PRIM_VS.Style");
C52.iC();C53.setCollects("VF_AC009O");C53.iC();C54.setCollects("PRIM_PANL");C54.iC();C55.setCollects("PRIM_ATLI");C55.iC();C56.setCollects("STD_INT");C56.iC();C58.aD();C58.iC();C60.setCollects("VF_UI005O");C60.iC();C61.setCollects("PRIM_LABL");C61.iC();C62.setCollects("VF_UI002O");C62.iC();C63.setCollects("STD_INT");C63.iC();C64.setCollects("PRIM_VS.Style");C64.iC();C10.aH("OVERFLOWMENUDISPLAYED",this,e1);C10.aH("OVERFLOWMENUCLOSED",this,e2);C10.aH("OBJECTSELECTED",this,e6);C11.aH("CLICK",this,e5);
C23.aH("USERCAPABILITYPROPERTYCHANGED",this,e3);C23.aH("CURRENTTHEMEALTERED",this,e4);C23.aH("CHANGESIDEBAR",this,e12);C46.aH("CLICK",this,e8);C46.aH("MOUSEENTER",this,e9);C46.aH("MOUSELEAVE",this,e10);C46.aH("KEYPRESS",this,e11);C50.aH("CLICK",this,e7);C51.aH("CLICK",this,e7);C60.aH("WASCLICKED",this,e13);C61.aH("CLICK",this,e13);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C0);this.setLeft(0);this.setTop(0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MainSelectionBar.OverflowMenuDisplayed",123);
r.ln=123;{r.ln=124;m.POPOVERMANAGER.setAUTOCLOSE(false);}r.ln=125;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MainSelectionBar.OverflowMenuClosed",128);r.ln=128;{r.ln=129;m.POPOVERMANAGER.setAUTOCLOSE(true);}r.ln=130;r.e();};cO.mthZINT_INITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",133);var P0=r.cPD("USEPOPOVERMANAGER");P0=p0;r.ln=133;{r.ln=136;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBASEPANELBODYSTYLE());r.ln=138;this.srPOPOVERMANAGER(P0);r.ln=140;
m.OPENTEXTPANETITLE.set(m.USYSTEM.ref.getUMTXTVALUES("OPEN"));r.ln=142;m.HASUSABLECONTENT.set(false);r.ln=144;m.USEVERTICALSPACING.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_VSPACE());r.ln=145;m.USEHORIZONTALSPACING.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_HSPACE());r.ln=146;m.USENEXTLEFT.set(m.USEHORIZONTALSPACING.get());r.ln=147;m.USENEXTTOP.set(m.USEVERTICALSPACING.get());r.ln=149;m.SIDEBARFLIPPERATTACHMENT.setMarginLeft(m.USEVERTICALSPACING.get());r.ln=151;m.PANELSINLINECOUNT.set(0);
r.ln=153;m.MOUSEOVERBORDERWIDTH.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_MOUSEOVERBORDERWIDTH());r.ln=155;m.BORDERALLROUND.setBorderBottom(m.MOUSEOVERBORDERWIDTH.get());m.BORDERALLROUND.setBorderTop(m.MOUSEOVERBORDERWIDTH.get());m.BORDERALLROUND.setBorderLeft(m.MOUSEOVERBORDERWIDTH.get());m.BORDERALLROUND.setBorderRight(m.MOUSEOVERBORDERWIDTH.get());r.ln=158;m.USEHEIGHT.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_ITEMHEIGHT());r.ln=159;m.USEWIDTH.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_ITEMWIDTH());
r.ln=160;m.USEUNSELECTEDOPACTITY.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_ITEMUNSELECTEDOPACITY());r.ln=161;m.USEPANELSPERLINE.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_ITEMSPERLINE());r.ln=163;m.USETEXTITEMHEIGHT.set(20);r.ln=164;m.USETEXTMARGIN.set(4);r.ln=165;m.USETEXTIMAGEDIMENSION.set(16);r.ln=168;m.IMAGEDIMENSION.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_IMAGEHEIGHTANDWIDTH());r.ln=169;m.USELABELHEIGHT.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_LABELHEIGHT());
r.ln=171;m.MAINSELECTIONBAR.mthZINT_INITIALIZE(true,m.MAINSELECTIONBAR,u,u,u,false,false,null);r.ln=173;m.BOTTOMPANEHEADINGTEXT.setCaption(m.USYSTEM.ref.getUMTXTVALUES("APPLICATIONS"));r.ln=174;m.ATTACHITEMBOTTOMPANEHEADINGTEXT.setMarginRight(m.USEHORIZONTALSPACING.get());r.ln=176;m.MAINATTACHBOTTOMPANEHEADING.setMarginLeft(m.USEVERTICALSPACING.get());m.MAINATTACHBOTTOMPANEHEADING.setMarginRight(m.USEVERTICALSPACING.get());m.MAINATTACHBOTTOMPANEHEADING.setMarginTop(0);m.MAINATTACHBOTTOMPANEHEADING.setMarginBottom(m.USEVERTICALSPACING.get());
r.ln=178;m.BOTTOMPANEHEADINGPANELHEIGHT.set(l.add(l.add(m.BOTTOMPANEHEADINGPANEL.getHeight(),m.MAINATTACHBOTTOMPANEHEADING.getMarginTop()),m.MAINATTACHBOTTOMPANEHEADING.getMarginBottom()));r.ln=180;m.OPENTEXTPANE.setVisible(false);m.OPENTEXTPANETITLE.setVisible(false);r.ln=182;m.MAINATTACHOPENPANETITLE.setMarginLeft(m.USEVERTICALSPACING.get());m.MAINATTACHOPENPANETITLE.setMarginRight(m.USEVERTICALSPACING.get());m.MAINATTACHOPENPANE.setMarginLeft(m.USEVERTICALSPACING.get());m.MAINATTACHOPENPANE.setMarginRight(m.USEVERTICALSPACING.get());
m.MAINATTACHBOTTOMPANE.setMarginLeft(m.USEVERTICALSPACING.get());m.MAINATTACHBOTTOMPANE.setMarginRight(m.USEVERTICALSPACING.get());r.ln=185;if((m.USYSTEM.ref.getUSESIDEBARMENUS()&&l.s.eq(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getNAVIGATEPANELOCATIONLOCK(),""))){r.ln=186;this.srSIDEBARFLIPPER(l.cC("VF_UI042O"));r.ln=187;m.SIDEBARFLIPPER.setParent(m.SIDEBARFLIPPERPANEL);r.ln=188;m.SIDEBARFLIPPER.mthZINT_INITIALIZE(false);r.ln=189;m.SIDEBARFLIPPER.mthZINT_SETLAYOUT(false);r.ln=190;
m.SIDEBARFLIPPERPANEL.setHeight(l.add(m.SIDEBARFLIPPER.getHeight(),m.USEHORIZONTALSPACING.get()));r.ln=191;m.SIDEBARFLIPPERPANEL.setVisible(true);r.ln=192;m.SIDEBARFLIPPERATTACHMENT.setManage(m.SIDEBARFLIPPER);m.SIDEBARFLIPPERATTACHMENT.setMarginLeft(m.USEVERTICALSPACING.get());m.SIDEBARFLIPPERATTACHMENT.setMarginTop(0);m.SIDEBARFLIPPERATTACHMENT.setMarginBottom(m.USEHORIZONTALSPACING.get());}}r.ln=195;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#uSystem.UserCapabilityPropertyChanged",199);
r.ln=199;{r.ln=201;if(l.s.ne(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVUSERCAPABILITY().getNAVIGATEPANELOCATIONLOCK(),"")){r.ln=203;m.SIDEBARFLIPPERPANEL.setVisible(false);}}r.ln=207;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",211);r.ln=211;{r.ln=213;this.srASSOCIATEDVF_FP002(null);r.ln=215;if((m.SIDEBARFLIPPER!=null)){r.ln=216;m.SIDEBARFLIPPER.mthZINT_TERMINATE();r.ln=217;this.srSIDEBARFLIPPER(null);}r.ln=220;this.srPOPOVERMANAGER(null);r.ln=222;this.setLayoutManager(null);
r.ln=224;this.mthZINT_DESTROYOPENPANECONTENT();r.ln=226;m.COLLECTATTACHMENTITEMS.mthREMOVEALL();r.ln=228;this.srCURRENTVIEWPANE(null);r.ln=229;this.srCURRENTFOCUSEDPANEL(null);r.ln=231;m.MAINSELECTIONBAR.mthZINT_TERMINATE();r.ln=233;m.COLLECTLABELS.mthREMOVEALL();r.ln=234;m.COLLECTREFERENCES.mthREMOVEALL();r.ln=235;m.COLLECTIMAGES.mthREMOVEALL();r.ln=236;m.COLLECTPANELS.mthREMOVEALL();r.ln=237;for(var l1=m.COLLECTBADGES.cI();l1.step();){l1.item().mthZINT_TERMINATE()};r.ln=238;m.COLLECTBADGES.mthREMOVEALL();
r.ln=239;m.COLLECTSTYLES.mthREMOVEALL();r.ln=241;m.COLLECTBOTTOMLABELS.mthREMOVEALL();r.ln=242;m.COLLECTBOTTOMSWATCHES.mthREMOVEALL();r.ln=243;m.COLLECTBOTTOMSWATCHSTYLES.mthREMOVEALL();r.ln=244;m.COLLECTBOTTOMREFERENCES.mthREMOVEALL();r.ln=246;m.COLLECTVIEWPANES.mthREMOVEALL();r.ln=247;m.COLLECTVIEWPANEMAXIMUMHEIGHTS.mthREMOVEALL();}r.ln=250;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#uSystem.CurrentThemeAltered",253);var C0=r.cF("USEINDEX",Fd.F1.Dc);var C1=r.cD("C1");C0.iC();
r.ln=253;{r.ln=258;for(var i1=1,s1=1,t1=l.tI(m.COLLECTPANELS.getItemCount());C0.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=259;this.mthZINT_STYLEITEM(C0.get());}r.ln=262;{var l1=m.COLLECTBOTTOMREFERENCES.cI();while(l1.step()){var REFERENCE=r.sR("REFERENCE",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=263;C1=r.sR("C1",m.COLLECTBOTTOMSWATCHSTYLES.get(INDEX.get()));r.ln=264;C1.setNormBackColor(REFERENCE.getUCURRENTTHEMECOLOR());r.ln=265;}l1.end();r.dR("REFERENCE");r.dR("INDEX");
}}r.ln=267;r.e();};cO.mthZINT_STYLEITEM=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_StyleItem",271);var P0=r.cPF("ATINDEXNUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cD("C0");var C1=r.cD("C1");r.ln=271;{r.ln=277;C1=r.sR("C1",m.COLLECTSTYLES.get(P0.get()));r.ln=278;C0=r.sR("C0",m.COLLECTREFERENCES.get(P0.get()));r.ln=280;if(l.and((C1!=null),(C0!=null))){r.ln=282;C1.setNormBackColor(C0.getUCURRENTTHEMECOLOR());r.ln=284;C1.setTextColor(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_FONTSTYLE().getTextColor());
r.ln=285;C1.setFontSize(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_FONTSTYLE().getFontSize());r.ln=286;C1.setFontUnits(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_FONTSTYLE().getFontUnits());r.ln=287;C1.setFaceName(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_FONTSTYLE().getFaceName());r.ln=289;m.COLLECTIMAGES.get(P0.get()).mthZINT_INTIALIZEIMAGE(C0.getUVLFONEIMAGE(),C0.getUIMAGESOURCE(),"","LARGE",true,true,C0.getUCURRENTTHEMECOLOR(),u,u);r.ln=291;m.COLLECTPANELS.get(P0.get()).getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getSUBTLECORNERS());
}}r.ln=295;r.e();};cO.mthZINT_FINALIZELAYOUT=function(){var m=this.REF,r=l.mR(this,cO,"zInt_FinalizeLayout",298);var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cF("NEXTTOP",Fd.F1.Dc);var C4=r.cF("WITHWIDTH",Fd.F1.Dc);var C5=r.cF("MINIMUMWIDTH",Fd.F1.Dc);C3.iC();C4.iC();C5.iC();r.ln=298;{r.ln=307;if(l.n.le(m.COLLECTVIEWPANES.getItemCount(),1)){r.ln=309;m.MAINSELECTIONBAR.setVisible(false);}else{r.ln=313;m.MAINSELECTIONBAR.setVisible(true);r.ln=315;{var l1=m.COLLECTVIEWPANEMAXIMUMHEIGHTS.cI();
while(l1.step()){var HEIGHT=r.sR("HEIGHT",l1.item());r.ln=316;HEIGHT.set(l.add(HEIGHT.get(),l.add(m.MAINSELECTIONBAR.getHeight(),m.MAINATTACHITEM1.getMarginTop())));r.ln=317;}l1.end();r.dR("HEIGHT");}}r.ln=323;C5.set(l.add(l.mul(2,m.USEWIDTH.get()),l.mul(m.USEHORIZONTALSPACING.get(),3)));r.ln=325;if(l.n.lt(C5.get(),m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_MINIMUMWIDTH())){r.ln=326;C5.set(m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_MINIMUMWIDTH());}r.ln=329;if(l.n.lt(this.getWidth(),C5.get()))
{r.ln=330;this.setWidth(C5.get());}r.ln=334;if(l.n.eq(m.COLLECTBOTTOMREFERENCES.getItemCount(),0)){r.ln=336;m.BOTTOMPANEHEADINGPANEL.setVisible(false);m.BOTTOMTEXTPANE.setVisible(false);}else{r.ln=341;C3.set(0);r.ln=344;{var l1=m.COLLECTBOTTOMREFERENCES.cI();while(l1.step()){var REFERENCE=r.sR("REFERENCE",l1.item());r.ln=346;C0=r.sR("C0",l.cC("PRIM_LABL"));r.ln=347;m.COLLECTBOTTOMLABELS.mthINSERT(C0);r.ln=349;C1=r.sR("C1",l.cC("PRIM_LABL"));r.ln=350;m.COLLECTBOTTOMSWATCHES.mthINSERT(C1);r.ln=352;
C2=r.sR("C2",l.cC("PRIM_VS","Style"));r.ln=353;m.COLLECTBOTTOMSWATCHSTYLES.mthINSERT(C2);r.ln=354;C2.setNormBackColor(REFERENCE.getUCURRENTTHEMECOLOR());r.ln=356;C1.setParent(m.BOTTOMTEXTPANE);C1.setTop(l.add(C3.get(),l.div(l.sub(m.USETEXTITEMHEIGHT.get(),m.USETEXTIMAGEDIMENSION.get()),2)));C1.setLeft(l.mul(2,m.USETEXTMARGIN.get()));C1.setWidth(m.USETEXTIMAGEDIMENSION.get());C1.setHeight(m.USETEXTIMAGEDIMENSION.get());C1.setCaption("");C1.setStyle(C2);C1.setThemeDrawStyle("Listitem");r.ln=358;C1.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getSUBTLECORNERS());
r.ln=360;C0.setParent(m.BOTTOMTEXTPANE);C0.setTop(C3.get());C0.setLeft(l.add(l.add(C1.getLeft(),C1.getWidth()),m.USETEXTMARGIN.get()));C0.setWidth(500);C0.setHeight(m.USETEXTITEMHEIGHT.get());C0.setCaption(REFERENCE.getUCAPTION());C0.setVerticalAlignment("CENTER");C0.setAlignment("LEFT");C0.setThemeDrawStyle("Listitem");C0.setEllipses("PATH");C0.setWordWrap(false);r.ln=362;C3.set(l.add(C3.get(),l.add(m.USETEXTITEMHEIGHT.get(),m.USETEXTMARGIN.get())));r.ln=364;}l1.end();r.dR("REFERENCE");}r.ln=366;
m.BOTTOMTEXTPANE.setHeight(C3.get());r.ln=367;m.BOTTOMTEXTPANE.setVisible(false);}r.ln=372;if(l.tB(m.HASUSABLECONTENT.get())){r.ln=373;this.mthZINT_SELECTPANE(m.COLLECTVIEWPANES.get(1),false,false);}}r.ln=377;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BottomPaneHeadingPanel.Click",381);r.ln=381;{r.ln=383;m.BOTTOMTEXTPANE.setVisible(l.b.Not(m.BOTTOMTEXTPANE.getVisible()));r.ln=385;this.mthZINT_SELECTPANE(m.CURRENTVIEWPANE,true,false);}r.ln=387;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#MainSelectionBar.ObjectSelected",390);
var P0=Ps.r("REFERENCE");r.ln=390;{r.ln=392;this.mthZINT_SELECTPANE(l.cast(P0,"PRIM_PANL"),true,false);}r.ln=394;r.e();};cO.mthZINT_SELECTPANE=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_SelectPane",397);var P0=r.cPD("VIEWPANE");var P1=r.cP("FOCUSFIRSTPANEL","PRIM_BOLN");var P2=r.cP("FOCUSLASTPANEL","PRIM_BOLN");P0=p0;P1.set(p1);P2.set(p2);var C0=r.cF("VIEWPANEINDEX",Fd.F1.Dc);C0.iC();r.ln=397;{r.ln=405;{var l1=m.COLLECTVIEWPANES.cI();while(l1.step()){var PANE=r.sR("PANE",l1.item());var INDEX=r.sR("INDEX",l1.key());
r.ln=406;if((PANE===P0)){r.ln=407;C0.set(INDEX.get());r.ln=408;break;}r.ln=410;}l1.end();r.dR("PANE");r.dR("INDEX");}r.ln=412;if((m.CURRENTVIEWPANE!=null)){r.ln=413;m.CURRENTVIEWPANE.setVisible(false);r.ln=414;m.MAINSELECTIONBAR.mthZINT_SETSELECTEDSTATE(m.CURRENTVIEWPANE,false);}r.ln=417;this.srCURRENTVIEWPANE(P0);r.ln=418;m.CURRENTVIEWPANEINDEX.set(C0.get());r.ln=419;m.CURRENTVIEWPANE.setVisible(true);r.ln=420;m.CURRENTVIEWPANE.setDisplayPosition(1);r.ln=421;m.MAINSELECTIONBAR.mthZINT_SETSELECTEDSTATE(m.CURRENTVIEWPANE,true);
r.ln=424;if(l.b.eq(m.BOTTOMPANEHEADINGPANEL.getVisible(),false)){r.ln=426;this.setHeight(m.COLLECTVIEWPANEMAXIMUMHEIGHTS.get(C0.get()).get());}else{r.ln=430;if(m.BOTTOMTEXTPANE.getVisible()){r.ln=432;m.BOTTOMPANEHEADINGIMAGE.setImage(m.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("COLLAPSE_UP"),"SMALL","T",false));r.ln=434;this.setHeight(l.add(l.add(m.COLLECTVIEWPANEMAXIMUMHEIGHTS.get(C0.get()).get(),m.BOTTOMPANEHEADINGPANELHEIGHT.get()),m.BOTTOMTEXTPANE.getHeight()));
}else{r.ln=438;m.BOTTOMPANEHEADINGIMAGE.setImage(m.USYSTEM.ref.mthZINT_GETVLFIMAGEREFERENCE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("EXPAND_DOWN"),"SMALL","T",false));r.ln=440;this.setHeight(l.add(m.COLLECTVIEWPANEMAXIMUMHEIGHTS.get(C0.get()).get(),m.BOTTOMPANEHEADINGPANELHEIGHT.get()));}}r.ln=446;if(m.OPENTEXTPANETITLE.getVisible()){r.ln=447;this.setHeight(l.add(this.getHeight(),l.add(m.OPENTEXTPANETITLE.getHeight(),m.OPENTEXTPANEVISIBLEHEIGHT.get())));}r.ln=450;if(m.SIDEBARFLIPPERPANEL.getVisible())
{r.ln=451;this.setHeight(l.add(this.getHeight(),m.SIDEBARFLIPPERPANEL.getHeight()));}r.ln=454;if(l.tB(P1.get())){r.ln=456;this.mthZINT_SETFOCUSPANELTOFIRST();}else{r.ln=460;if(l.tB(P2.get())){r.ln=461;this.mthZINT_SETFOCUSPANELTOLAST();}}}r.ln=466;r.e();};cO.mthZINT_ADDTABSHEET=function(p0,p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"zInt_AddTabSheet",469);var P0=r.cP("CAPTION","PRIM_DC","UnicodeString");var P1=r.cP("HINT","PRIM_DC","UnicodeString");var P2=r.cPF("IMAGENAME",Fd.F2.Dc);var P3=r.cPF("IMAGESOURCE",Fd.F3.Dc);
P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);var C0=r.cR("NEWVIEWPANE","PRIM_PANL");var C1=r.cR("NEWATTACHMENTITEM","PRIM_ATLI");var C2=r.cF("NEWPANEMAXIMUMZEROHEIGHT",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();r.ln=469;{r.ln=480;m.COLLECTVIEWPANES.mthINSERT(C0);r.ln=481;m.COLLECTVIEWPANEMAXIMUMHEIGHTS.mthINSERT(C2);r.ln=482;m.COLLECTATTACHMENTITEMS.mthINSERT(C1);r.ln=485;C0.setParent(this);C0.setVisible(false);r.ln=487;C1.setParent(m.MAINATTACHLAYOUT1);C1.setManage(C0);C1.setAttachment("CENTER");r.ln=489;
m.MAINSELECTIONBAR.mthZINT_ADDITEM(P2.get(),P3.get(),P1.get(),P0.get(),C0,true,true,u,u);r.ln=492;m.USENEXTLEFT.set(m.USEHORIZONTALSPACING.get());r.ln=493;m.USENEXTTOP.set(m.USEVERTICALSPACING.get());r.ln=495;m.PANELSINLINECOUNT.set(0);}r.ln=497;r.e();};cO.mthZINT_ADDBOTTOMTEXTITEM=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_AddBottomTextItem",500);var P0=r.cPD("WITHREFERENCE");P0=p0;r.ln=500;{r.ln=503;m.COLLECTBOTTOMREFERENCES.mthINSERT(P0);}r.ln=505;r.e();};cO.mthZINT_ADDITEM=function(p0){
var m=this.REF,r=l.mR(this,cO,"zInt_AddItem",508);var P0=r.cPD("WITHREFERENCE");P0=p0;var C0=r.cF("REQUIREDWIDTH",Fd.F1.Dc);var C1=r.cF("REQUIREDHEIGHT",Fd.F1.Dc);var C2=r.cR("NEWPANEL","PRIM_PANL");var C3=r.cD("C3");var C4=r.cR("NEWIMAGE","VF_UI005O");var C5=r.cR("NEWLABEL","PRIM_LABL");var C6=r.cD("C6");var C7=r.cD("C7");C0.iC();C1.iC();C2.iC();C4.iC();C5.iC();r.ln=508;{r.ln=523;m.HASUSABLECONTENT.set(true);r.ln=526;C7=r.sR("C7",m.COLLECTVIEWPANES.get(m.COLLECTVIEWPANES.getItemCount()));r.ln=529;
C6=r.sR("C6",l.cAs("PRIM_VS","Style"));r.ln=532;m.COLLECTPANELS.mthINSERT(C2);r.ln=533;m.COLLECTSTYLES.mthINSERT(C6);r.ln=534;m.COLLECTIMAGES.mthINSERT(C4);r.ln=535;m.COLLECTLABELS.mthINSERT(C5);r.ln=536;m.COLLECTREFERENCES.mthINSERT(P0);r.ln=540;C2.setParent(C7);C2.setHeight(m.USEHEIGHT.get());C2.setWidth(m.USEWIDTH.get());C2.setStyle(C6);C2.setLeft(m.USENEXTLEFT.get());C2.setTop(m.USENEXTTOP.get());C2.setOpacity(m.USEUNSELECTEDOPACTITY.get());C2.setHint(m.USYSTEM.ref.mthAVPREPAREHINT(P0.getUHINT()));
C2.setComponentTag(l.n.AsString(m.COLLECTPANELS.getItemCount()));r.ln=542;C4.setParent(C2);C4.setHeight(m.IMAGEDIMENSION.get());C4.setWidth(m.IMAGEDIMENSION.get());C4.setTop(l.div(l.sub(l.sub(m.USEHEIGHT.get(),m.USELABELHEIGHT.get()),m.IMAGEDIMENSION.get()),2));C4.setLeft(l.div(l.sub(m.USEWIDTH.get(),m.IMAGEDIMENSION.get()),2));r.ln=544;C5.setCaption(P0.getUCAPTION());C5.setParent(C2);C5.setAlignment("CENTER");C5.setVerticalAlignment("CENTER");C5.setHeight(m.USELABELHEIGHT.get());C5.setTop(l.sub(m.USEHEIGHT.get(),m.USELABELHEIGHT.get()));
C5.setWidth(l.sub(m.USEWIDTH.get(),8));C5.setLeft(3);r.ln=546;if(m.USYSTEM.ref.getUSINGBADGES()){r.ln=547;C3=r.sR("C3",l.cC("VF_UI050O"));r.ln=548;m.COLLECTBADGES.mthINSERT(C3);r.ln=549;C3.mthZINT_INITIALIZE(C2,P0,"T",u,u,u,u,u);}r.ln=552;this.mthZINT_STYLEITEM(m.COLLECTPANELS.getItemCount());r.ln=556;C0.set(l.add(l.add(m.USENEXTLEFT.get(),m.USEWIDTH.get()),l.add(m.USEHORIZONTALSPACING.get(),2)));r.ln=558;if(l.n.gt(C0.get(),this.getWidth())){r.ln=559;this.setWidth(C0.get());}r.ln=562;C1.set(l.add(l.add(m.USENEXTTOP.get(),m.USEHEIGHT.get()),l.add(m.USEVERTICALSPACING.get(),2)));
r.ln=564;if(l.n.gt(C1.get(),m.COLLECTVIEWPANEMAXIMUMHEIGHTS.get(m.COLLECTVIEWPANEMAXIMUMHEIGHTS.getItemCount()).get())){r.ln=565;this.setHeight(C1.get());r.ln=566;m.COLLECTVIEWPANEMAXIMUMHEIGHTS.get(m.COLLECTVIEWPANEMAXIMUMHEIGHTS.getItemCount()).set(C1.get());}r.ln=569;m.PANELSINLINECOUNT.set(l.add(m.PANELSINLINECOUNT.get(),1));r.ln=571;m.USENEXTLEFT.set(l.add(m.USENEXTLEFT.get(),l.add(m.USEWIDTH.get(),m.USEHORIZONTALSPACING.get())));r.ln=573;if(l.n.ge(m.PANELSINLINECOUNT.get(),m.USEPANELSPERLINE.get()))
{r.ln=574;m.PANELSINLINECOUNT.set(0);r.ln=575;m.USENEXTLEFT.set(m.USEHORIZONTALSPACING.get());r.ln=576;m.USENEXTTOP.set(l.add(m.USENEXTTOP.get(),l.add(m.USEHEIGHT.get(),m.USEVERTICALSPACING.get())));}}r.ln=579;r.e();};function e7(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectBottomLabels<>.Click #CollectBottomSwatches<>.Click",582);r.ln=582;{r.ln=584;this.mthZINT_DESTROYOPENPANECONTENT();r.ln=586;{var l1=m.COLLECTBOTTOMLABELS.cI();while(l1.step()){var LABEL=r.sR("LABEL",l1.item());var INDEX=r.sR("INDEX",l1.key());
r.ln=587;if((LABEL===SENDER)){r.ln=588;{var eP=l.ePs();eP.cD("WITHREFERENCE");eP.sR("WITHREFERENCE",m.COLLECTBOTTOMREFERENCES.get(INDEX.get()));this.fE("UOBJECTSELECTED",eP);eP.e();}r.ln=589;break;}r.ln=591;}l1.end();r.dR("LABEL");r.dR("INDEX");}r.ln=593;{var l1=m.COLLECTBOTTOMSWATCHES.cI();while(l1.step()){var LABEL=r.sR("LABEL",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=594;if((LABEL===SENDER)){r.ln=595;{var eP=l.ePs();eP.cD("WITHREFERENCE");eP.sR("WITHREFERENCE",m.COLLECTBOTTOMREFERENCES.get(INDEX.get()));
this.fE("UOBJECTSELECTED",eP);eP.e();}r.ln=596;break;}r.ln=598;}l1.end();r.dR("LABEL");r.dR("INDEX");}}r.ln=600;r.e();};function e8(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectPanels<>.Click",603);r.ln=603;{r.ln=605;this.mthZINT_DESTROYOPENPANECONTENT();r.ln=607;{var eP=l.ePs();eP.cD("WITHREFERENCE");eP.sR("WITHREFERENCE",m.COLLECTREFERENCES.get(l.s.AsNumber(SENDER.getComponentTag())));this.fE("UOBJECTSELECTED",eP);eP.e();}}r.ln=610;r.e();};cO.mthZINT_SHOWINTEREST=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_ShowInterest",613);
var P0=r.cPD("ONPANEL");P0=p0;r.ln=613;{r.ln=616;if((P0!=null)){r.ln=618;P0.getStyles().mthADD(m.BORDERALLROUND);r.ln=620;P0.setHeight(l.add(P0.getHeight(),l.mul(2,m.MOUSEOVERBORDERWIDTH.get())));P0.setWidth(l.add(P0.getWidth(),l.mul(2,m.MOUSEOVERBORDERWIDTH.get())));P0.setTop(l.sub(P0.getTop(),m.MOUSEOVERBORDERWIDTH.get()));P0.setLeft(l.sub(P0.getLeft(),m.MOUSEOVERBORDERWIDTH.get()));P0.setOpacity(100);r.ln=622;P0.mthSETFOCUS();}}r.ln=627;r.e();};cO.mthZINT_REMOVEINTEREST=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_RemoveInterest",630);
var P0=r.cPD("FROMPANEL");P0=p0;r.ln=630;{r.ln=633;if((P0!=null)){r.ln=635;P0.getStyles().mthREMOVE(m.BORDERALLROUND);r.ln=637;P0.setHeight(l.sub(P0.getHeight(),l.mul(2,m.MOUSEOVERBORDERWIDTH.get())));P0.setWidth(l.sub(P0.getWidth(),l.mul(2,m.MOUSEOVERBORDERWIDTH.get())));P0.setTop(l.add(P0.getTop(),m.MOUSEOVERBORDERWIDTH.get()));P0.setLeft(l.add(P0.getLeft(),m.MOUSEOVERBORDERWIDTH.get()));P0.setOpacity(m.USEUNSELECTEDOPACTITY.get());}}r.ln=641;r.e();};function e9(SENDER,Ps){var r=l.eR(this,cO,"#CollectPanels<>.MouseEnter",644);
r.ln=644;{r.ln=646;this.mthZINT_SHOWINTEREST(SENDER);}r.ln=648;r.e();};function e10(SENDER,Ps){var r=l.eR(this,cO,"#CollectPanels<>.MouseLeave",651);r.ln=651;{r.ln=653;this.mthZINT_REMOVEINTEREST(SENDER);}r.ln=655;r.e();};cO.mthZINT_GETREADYTODISPLAY=function(){var m=this.REF,r=l.mR(this,cO,"zInt_GetReadytoDisplay",658);var C0=r.cF("REQUIREDHEIGHT",Fd.F1.Dc);var C1=r.cF("VISIBLEHEIGHT",Fd.F1.Dc);C0.iC();C1.iC();r.ln=658;{r.ln=663;this.mthZINT_BUILDOPENPANECONTENT(C0,C1,m.OPENTEXTPANE);r.ln=665;m.OPENTEXTPANE.setVisible(l.n.gt(C1.get(),0));
m.OPENTEXTPANETITLE.setVisible(l.n.gt(C1.get(),0));r.ln=667;m.OPENTEXTPANEVISIBLEHEIGHT.set(C1.get());r.ln=669;m.OPENTEXTPANE.setHeight(m.OPENTEXTPANEVISIBLEHEIGHT.get());r.ln=671;this.mthZINT_SELECTPANE(m.CURRENTVIEWPANE,false,false);}r.ln=673;r.e();};cO.mthZINT_SETFOCUSPANELTOFIRST=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SetFocusPaneltoFirst",677);r.ln=677;{r.ln=679;if((m.CURRENTVIEWPANE!=null)){r.ln=681;this.mthZINT_SETFOCUSPANEL(l.cast(m.CURRENTVIEWPANE.getComponentControls().getItem(1),"PRIM_PANL"));
}}r.ln=686;r.e();};cO.mthZINT_SETFOCUSPANELTOLAST=function(){var m=this.REF,r=l.mR(this,cO,"zInt_SetFocusPaneltoLast",690);var C0=r.cF("LASTPANELINDEX",Fd.F1.Dc);C0.iC();r.ln=690;{r.ln=694;if((m.CURRENTVIEWPANE!=null)){r.ln=696;C0.set(m.CURRENTVIEWPANE.getComponentControls().getItemCount());r.ln=698;this.mthZINT_SETFOCUSPANEL(l.cast(m.CURRENTVIEWPANE.getComponentControls().getItem(C0.get()),"PRIM_PANL"));}}r.ln=703;r.e();};cO.mthZINT_SETFOCUSPANEL=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_SetFocusPanel",707);
var P0=r.cPD("TOPANEL");P0=p0;r.ln=707;{r.ln=710;if((P0!=null)){r.ln=712;this.mthZINT_REMOVEINTEREST(m.CURRENTFOCUSEDPANEL);r.ln=714;this.srCURRENTFOCUSEDPANEL(P0);r.ln=716;this.mthZINT_SHOWINTEREST(m.CURRENTFOCUSEDPANEL);}}r.ln=720;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectPanels<>.KeyPress",723);var P0=Ps.r("KEYCODE");var P1=Ps.r("HANDLED");var C0=r.cF("FIRSTPEERPANEL",Fd.F1.Dc);var C1=r.cF("LASTPEERPANEL",Fd.F1.Dc);var C2=r.cF("THISPANELINDEX",Fd.F1.Dc);var C3=r.cF("PROPOSEDPANEL",Fd.F1.Dc);
var C4=r.cF("PROPOSEDVIEWPANE",Fd.F1.Dc);var C5=r.cF("TOTALVIEWPANES",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();r.ln=723;{r.ln=733;if((m.CURRENTFOCUSEDPANEL!=null)){r.ln=735;C5.set(m.COLLECTVIEWPANES.getItemCount());r.ln=737;C2.set(l.s.AsNumber(m.CURRENTFOCUSEDPANEL.getComponentTag()));r.ln=739;{var l1=m.COLLECTPANELS.cI();while(l1.step()){var PANEL=r.sR("PANEL",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=740;if((PANEL.getParent()===m.CURRENTFOCUSEDPANEL.getParent())){r.ln=742;
if(l.n.eq(C0.get(),0)){r.ln=743;C0.set(INDEX.get());}r.ln=746;C1.set(INDEX.get());}r.ln=749;}l1.end();r.dR("PANEL");r.dR("INDEX");}r.ln=751;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=752;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat("Processing keycode=",P0.get()),u,u,true,u);}r.ln=756;{var v1=P0.get();if(r.ln=758,l.s.eq(v1,"LEFTARROW")){r.ln=759;C3.set(l.sub(C2.get(),1));r.ln=761;if(l.n.lt(C3.get(),C0.get())){r.ln=762;if(l.n.gt(C5.get(),1)){r.ln=763;C4.set(l.sub(m.CURRENTVIEWPANEINDEX.get(),1));
r.ln=764;if(l.n.lt(C4.get(),1)){r.ln=765;C4.set(C5.get());}r.ln=767;this.mthZINT_SELECTPANE(m.COLLECTVIEWPANES.get(C4.get()),false,true);r.ln=768;P1.set(true);r.e();return;}else{r.ln=771;C3.set(C1.get());}}r.ln=775;this.mthZINT_SETFOCUSPANEL(m.COLLECTPANELS.get(C3.get()));r.ln=776;P1.set(true);}else if(r.ln=778,l.s.eq(v1,"RIGHTARROW")){r.ln=780;C3.set(l.add(C2.get(),1));r.ln=782;if(l.n.gt(C3.get(),C1.get())){r.ln=783;if(l.n.gt(C5.get(),1)){r.ln=784;C4.set(l.add(m.CURRENTVIEWPANEINDEX.get(),1));r.ln=785;
if(l.n.gt(C4.get(),C5.get())){r.ln=786;C4.set(1);}r.ln=788;this.mthZINT_SELECTPANE(m.COLLECTVIEWPANES.get(C4.get()),true,false);r.ln=789;P1.set(true);r.e();return;}else{r.ln=792;C3.set(C0.get());}}r.ln=796;this.mthZINT_SETFOCUSPANEL(m.COLLECTPANELS.get(C3.get()));r.ln=797;P1.set(true);}else if(r.ln=800,l.s.eq(v1,"UPARROW")){r.ln=801;C3.set(l.sub(C2.get(),m.USEPANELSPERLINE.get()));r.ln=802;if((l.n.ge(C3.get(),C0.get())&&l.n.le(C3.get(),C1.get()))){r.ln=803;this.mthZINT_SETFOCUSPANEL(m.COLLECTPANELS.get(C3.get()));
}r.ln=805;P1.set(true);}else if(r.ln=807,l.s.eq(v1,"DOWNARROW")){r.ln=808;C3.set(l.add(C2.get(),m.USEPANELSPERLINE.get()));r.ln=809;if((l.n.ge(C3.get(),C0.get())&&l.n.le(C3.get(),C1.get()))){r.ln=810;this.mthZINT_SETFOCUSPANEL(m.COLLECTPANELS.get(C3.get()));}r.ln=812;P1.set(true);}else if(r.ln=814,l.s.eq(v1,"ENTER")){r.ln=815;this.mthZINT_DESTROYOPENPANECONTENT();r.ln=816;{var eP=l.ePs();eP.cD("WITHREFERENCE");eP.sR("WITHREFERENCE",m.COLLECTREFERENCES.get(C2.get()));this.fE("UOBJECTSELECTED",eP);
eP.e();}r.ln=817;P1.set(true);}r.ln=819;}}}r.ln=824;r.e();};cO.mthZINT_DESTROYOPENPANECONTENT=function(){var m=this.REF,r=l.mR(this,cO,"zInt_DestroyOpenPaneContent",827);r.ln=827;{r.ln=829;m.COLLECTAC005IMAGES.mthREMOVEALL();r.ln=830;m.COLLECTAC005LABELS.mthREMOVEALL();r.ln=831;m.COLLECTUI002REFERENCES.mthREMOVEALL();r.ln=832;m.COLLECTAC005INDICIES.mthREMOVEALL();r.ln=833;m.COLLECTAC005STYLES.mthREMOVEALL();}r.ln=835;r.e();};cO.mthZINT_BUILDOPENPANECONTENT=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_BuildOpenPaneContent",838);
var P0=r.cPF("REQUIREDHEIGHT",Fd.F1.Dc);var P1=r.cPF("VISIBLEHEIGHT",Fd.F1.Dc);var P2=r.cPD("ONPANEL");P2=p2;var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cD("C3");var C4=r.cD("C4");var C5=r.cD("C5");var C6=r.cF("NEXTTOP",Fd.F1.Dc);var C7=r.cD("C7");C6.iC();r.ln=838;{r.ln=855;this.mthZINT_DESTROYOPENPANECONTENT();r.ln=858;srC0.call(this,m.USYSTEM.ref.getFRAMEWORKTABFOLDERTMANAGER().getVF_UI002OCHILDREN());r.ln=860;P0.set(0);r.ln=861;P1.set(0);r.ln=863;C6.set(m.USETEXTMARGIN.get());
r.ln=865;{var l1=C0.cI();while(l1.step()){var VF_UI002OCHILD=r.sR("VF_UI002OCHILD",l1.item());r.ln=867;srC1.call(this,VF_UI002OCHILD.getAC005OBJECTCOLLECTION());r.ln=869;{var l2=C1.cI();while(l2.step()){var VF_AC005OCHILD=r.sR("VF_AC005OCHILD",l2.item());var INDEX=r.sR("INDEX",l2.key());r.ln=871;C2=r.sR("C2",l.cC("VF_UI005O"));r.ln=872;m.COLLECTAC005IMAGES.mthINSERT(C2);r.ln=874;C3=r.sR("C3",l.cC("PRIM_LABL"));r.ln=875;m.COLLECTAC005LABELS.mthINSERT(C3);r.ln=880;m.COLLECTUI002REFERENCES.mthINSERT(VF_UI002OCHILD);
r.ln=881;C7=r.sR("C7",new Fd.F1.Dc());r.ln=882;C7.set(INDEX.get());r.ln=883;m.COLLECTAC005INDICIES.mthINSERT(C7);r.ln=884;C3.setComponentTag(l.n.AsString(m.COLLECTUI002REFERENCES.getItemCount()));C2.setComponentTag(l.n.AsString(m.COLLECTUI002REFERENCES.getItemCount()));r.ln=887;C4=r.sR("C4",l.cC("PRIM_VS","Style"));r.ln=888;m.COLLECTAC005STYLES.mthINSERT(C4);r.ln=890;if((VF_AC005OCHILD.getNOMINALVF_AC009OOWNER()!=null)){r.ln=891;C4.setNormBackColor(VF_AC005OCHILD.getNOMINALVF_AC009OOWNER().getUCURRENTTHEMECOLOR());
}else{r.ln=893;C4.setNormBackColor(m.UFRAMEWORK.ref.getUCURRENTTHEMECOLOR());}r.ln=896;C2.setParent(P2);C2.setTop(l.add(C6.get(),l.div(l.sub(m.USETEXTITEMHEIGHT.get(),m.USETEXTIMAGEDIMENSION.get()),2)));C2.setLeft(l.mul(2,m.USETEXTMARGIN.get()));C2.setHeight(m.USETEXTIMAGEDIMENSION.get());C2.setWidth(m.USETEXTIMAGEDIMENSION.get());C2.setImage(C5);C2.setThemeDrawStyle("Listitem");C2.setStyle(C4);r.ln=898;C2.mthZINT_INTIALIZEIMAGE(VF_AC005OCHILD.getOCCUPANTICON().getIMAGEREFERENCENAME(),VF_AC005OCHILD.getOCCUPANTICON().getIMAGEREFERENCESOURCE(),"","SMALL",VF_AC005OCHILD.getREVERSELIGHTANDDARKOCCUPANTICON(),u,u,u,u);
r.ln=900;C2.getStyles().mthADD(m.USYSTEM.ref.getCURRENTTHEME().getSUBTLECORNERS());r.ln=902;C3.setParent(P2);C3.setTop(C6.get());C3.setLeft(l.add(l.add(C2.getLeft(),C2.getWidth()),m.USETEXTMARGIN.get()));C3.setHeight(m.USETEXTITEMHEIGHT.get());C3.setWidth(500);C3.setVerticalAlignment("CENTER");C3.setAlignment("LEFT");C3.setCaption(VF_AC005OCHILD.getVISIBLETITLE());C3.setThemeDrawStyle("Listitem");C3.setEllipses("PATH");C3.setWordWrap(false);r.ln=904;C6.set(l.add(C6.get(),l.add(m.USETEXTITEMHEIGHT.get(),m.USETEXTMARGIN.get())));
r.ln=906;P0.set(C6.get());r.ln=908;if(l.n.le(m.COLLECTAC005LABELS.getItemCount(),m.USYSTEM.ref.getCURRENTTHEME().getNAVIGATIONMENU_MAXIMUMOPEN())){r.ln=909;P1.set(P0.get());}r.ln=912;}l2.end();r.dR("VF_AC005OCHILD");r.dR("INDEX");}r.ln=914;}l1.end();r.dR("VF_UI002OCHILD");}p0.set(P0.get());p1.set(P1.get());}r.ln=916;r.e();function srC0(rn){C0=r.sR("C0",rn);if(C0!=null){C0.setCollects("VF_UI002O");}}function srC1(rn){C1=r.sR("C1",rn);if(C1!=null){C1.setCollects("VF_AC005O");}}};function e12(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#uSystem.ChangeSidebar",919);var P0=Ps.r("TO");r.ln=919;{r.ln=921;if(l.tB(l.and((m.POPOVERMANAGER!=null),l.s.ne(P0.get(),"STYLE")))){r.ln=922;m.POPOVERMANAGER.mthZINT_CLOSEPOPOVER();}}r.ln=925;r.e();};function e13(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectAC005Images<>.wasClicked #CollectAC005Labels<>.Click",928);var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cF("TAGNUMBER",Fd.F1.Dc);C2.iC();r.ln=928;{r.ln=934;C2.set(l.s.AsNumber(SENDER.getComponentTag()));r.ln=936;
C0=r.sR("C0",m.COLLECTUI002REFERENCES.get(C2.get()));r.ln=938;C1=r.sR("C1",C0.getAC005OBJECTCOLLECTION().get(m.COLLECTAC005INDICIES.get(C2.get()).get()));r.ln=940;this.mthZINT_DESTROYOPENPANECONTENT();r.ln=942;{var eP=l.ePs();eP.cD("WITHREFERENCE");eP.sR("WITHREFERENCE",C1);this.fE("UOPENPANESELECTED",eP);eP.e();}}r.ln=944;r.e();};cO.getHASUSABLECONTENT=function(){return this.REF.HASUSABLECONTENT.get();};cO.getISINITIALIZED=function(){return this.REF.ISINITIALIZED.get();};cO.setISINITIALIZED=function(v)
{this.REF.ISINITIALIZED.set(v);};cO.getASSOCIATEDVF_FP002=function(){return this.REF.ASSOCIATEDVF_FP002;};cO.setASSOCIATEDVF_FP002=function(v){this.srASSOCIATEDVF_FP002(v);};cO.getPOPOVERMANAGER=function(){return this.REF.POPOVERMANAGER;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});
}cO.srASSOCIATEDVF_FP002=function(rn){this.sR("ASSOCIATEDVF_FP002",rn);};cO.srCURRENTVIEWPANE=function(rn){this.sR("CURRENTVIEWPANE",rn);};cO.srCURRENTFOCUSEDPANEL=function(rn){this.sR("CURRENTFOCUSEDPANEL",rn);};cO.srPOPOVERMANAGER=function(rn){this.sR("POPOVERMANAGER",rn);};cO.srSIDEBARFLIPPER=function(rn){this.sR("SIDEBARFLIPPER",rn);};},{rc:["VF_UI019O","VF_SY001O","VF_SY001X","VF_FP001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_BOLN","PRIM_VS.Style","PRIM_FLD","PRIM_ACOL","PRIM_HINT"],
dc:["VF_FP002O","VF_UI021O","VF_UI042O","VF_AC009O","VF_UI050O","VF_UI005O","VF_UI002O","VF_AC005O"],dp:["PRIM_PANL","PRIM_VS.Style","PRIM_LABL","PRIM_ATLI","PRIM_ACOL","PRIM_BMP"]});