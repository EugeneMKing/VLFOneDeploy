﻿LANSA.addComponent({id:"DF_T40PAO",ot:"rp",tp:"Reusable Part",de:"\\OC=People Details Pane",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec(".12"),c2=l.cDec("457.56"),c3=l.cDec("3567.67"),c4=l.cDec("3978.12"),c5=l.cDec("4457.56");var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],
de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" "}[cL],h3:" ",de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],
h2:{"ENG":"Text","FRA":"Text","JPN":" "}[cL],h3:" ",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",ia:["LC","FE"]},F4:{nm:"DF_ELMSG",ft:"A",ln:80,dc:0,lb:{"ENG":"Message text","FRA":"Texte message","JPN":"ﾏｯｾｰｼﾗ ｷｽﾃ"}[cL],h1:{"ENG":"Message","FRA":"Texte","JPN":"ﾏｯｾｰｼﾗ"}[cL],h2:{"ENG":"Text","FRA":"message","JPN":"ｷｽﾃ"}[cL],h3:" ",de:{"ENG":"Message text","FRA":"Texte de message","JPN":"ﾏｯｾｰｼﾗ ｷｽﾃ"}[cL],dv:"",ia:["LC","FE"]},F5:{nm:"DF_ELNET",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Net Salary","FRA":"Salaire net","JPN":"給与の総計"}[cL],
h1:{"ENG":"Net Salary","FRA":"Salaire net","JPN":"給与の"}[cL],h2:{"ENG":" ","FRA":" ","JPN":"総計"}[cL],h3:" ",de:{"ENG":"Net Salary","FRA":"Salaire net","JPN":"給与の総計"}[cL],dv:0,ia:["RB","FE"]}};var cO=l.rC(oI,{an:"VF_AC035O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uContains:{ps:{"UpperCaseWords":{pt:"i"}}},uCreateorUpdateDisplay:{},uRefreshVisibleCurrentState:{},SetupTitlePanel:{},SetupContactPanel:{},SetupSalaryPanel:{},SetUpTravelPanel:{},AddTravelItems:{ps:{"uExpenses":{pt:"i"}}}},co:function(){cO.aN.call(this);
var f=this.aF("DF_T40PAO",Fd);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cR("ATTACHLAYOUTMAINPANEL","PRIM_ATLM");var C2=this.cR("ATTACHITEM1","PRIM_ATLI");var C3=this.cR("ATTACHITEM2","PRIM_ATLI");var C4=this.cR("ATTACHLAYOUTRIGHTPANE","PRIM_ATLM");var C5=this.cR("ATTACHITEM6","PRIM_ATLI");var C6=this.cR("ATTACHITEM3","PRIM_ATLI");var C7=this.cR("ATTACHITEM4","PRIM_ATLI");var C8=this.cR("ATTACHITEM5","PRIM_ATLI");var C9=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C10=this.cR("ATTACHITEM7","PRIM_ATLI");
var C11=this.cR("ATTACHITEM9","PRIM_ATLI");var C12=this.cR("ATTACHITEM10","PRIM_ATLI");var C13=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C14=this.cR("ATTACHITEM8","PRIM_ATLI");var C15=this.cR("ATTACHLAYOUT3","PRIM_ATLM");var C16=this.cR("ATTACHITEM11","PRIM_ATLI");var C17=this.cR("ATTACHLAYOUT4","PRIM_ATLM");var C18=this.cR("ATTACHITEM12","PRIM_ATLI");var C19=this.cR("LEFT_PANE","PRIM_PANL");var C20=this.cR("RIGHT_PANE","PRIM_PANL");var C21=this.cR("BORDERBOTTOM","PRIM_VS","Style");var C22=this.cR("HEADING1STYLE","PRIM_VS","Style");
var C23=this.cR("HEADING1BOLDSTYLE","PRIM_VS","Style");var C24=this.cR("HEADING1FOREGROUND","PRIM_VS","SolidBrush");var C25=this.cR("SMALLERTEXT","PRIM_VS","Style");var C26=this.cR("HEADING2STYLE","PRIM_VS","Style");var C27=this.cR("HEADING2FOREGROUND","PRIM_VS","SolidBrush");var C28=this.cR("HEADING2BACKGROUND","PRIM_VS","SolidBrush");var C29=this.cR("LISTSTYLE","PRIM_VS","Style");var C30=this.cR("EXECUTEDEFAULTCOMMANDTIMER","PRIM_TIMR");var C31=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");var C32=this.cR("TITLE_PANEL","PRIM_LABL");
var C33=this.cR("CONTACT_PANEL","PRIM_PANL");var C34=this.cR("PANEL_CONTACT_TITLE","PRIM_PANL");var C35=this.cR("LABEL_CONTACTS_TITLE","PRIM_LABL");var C36=this.cR("IMAGE1","PRIM_IMAG");var C37=this.cR("IMAGE2","PRIM_IMAG");var C38=this.cR("BUSINESSPHONELABEL","PRIM_LABL");var C39=this.cR("EMAILADDRESSLABEL","PRIM_LABL");var C40=this.cR("BUSINESSPHONE","PRIM_LABL");var C41=this.cR("EMAILADDRESS","PRIM_LABL");var C42=this.cR("HOMEPHONE","PRIM_LABL");var C43=this.cR("HOMEPHONELABEL","PRIM_LABL");var C44=this.cR("SALARY_PANEL","PRIM_PANL");
var C45=this.cR("SALARYLABEL","PRIM_LABL");var C46=this.cR("SALARYTYPELABEL","PRIM_LABL");var C47=this.cR("SALARYVALUE","PRIM_LABL");var C48=this.cR("SALARYTYPE","PRIM_LABL");var C49=this.cR("SALARYGRAPH","PRIM_WEB","Page");var C50=this.cR("LABEL_SALARY_TITLE","PRIM_LABL");var C51=this.cR("LABEL_BONUS_CYCLE","PRIM_LABL");var C52=this.cR("LABEL_RATIO","PRIM_LABL");var C53=this.cR("BONUSCYCLE","PRIM_LABL");var C54=this.cR("TRAVEL_PANEL","PRIM_PANL");var C55=this.cR("TRIPSLABEL","PRIM_LABL");var C56=this.cR("LIST_TRAVEL","PRIM_LIST");
var C57=this.cR("COLUMNDATE","PRIM_LIST","String");var C58=this.cR("COLUMNLOCATION","PRIM_LIST","String");var C59=this.cR("COLUMNEXPENSES","PRIM_LIST","Number");var C60=this.cF("TITLEPANEL_HEIGHT",Fd.F1.Dc);var C61=this.cF("CONTACTPANEL_HEIGHT",Fd.F1.Dc);var C62=this.cF("TRAVELPANEL_HEIGHT",Fd.F1.Dc);var C63=this.cF("SALARYPANEL_HEIGHT",Fd.F1.Dc);var C64=this.cR("REBUILDFOROPTIONCHANGE","PRIM_BOLN");var C65=this.cR("TRAVELPANELSETUP","PRIM_BOLN");var C66=this.cR("SALARYPANELSETUP","PRIM_BOLN");if((C0!=null)&&(C0.iI()==false))
{C0.iC();}C1.iC();C2.setManage(C19);C2.setParent(C1);C2.setAttachment("LEFT");C2.setMarginTop(4);C2.iC();C3.setManage(C20);C3.setParent(C1);C3.setAttachment("CENTER");C3.setMarginTop(4);C3.iC();C4.iC();C5.setParent(C4);C5.setAttachment("TOP");C5.setManage(C32);C5.setMarginTop(4);C5.iC();C6.setManage(C33);C6.setParent(C4);C6.setAttachment("TOP");C6.iC();C7.setManage(C44);C7.setParent(C4);C7.setAttachment("TOP");C7.iC();C8.setManage(C54);C8.setParent(C4);C8.setAttachment("TOP");C8.iC();C9.iC();C10.setAttachment("CENTER");
C10.setManage(C35);C10.setParent(C9);C10.iC();C11.setAttachment("RIGHT");C11.setManage(C36);C11.setParent(C9);C11.setMarginTop(4);C11.setMarginBottom(5);C11.setMarginLeft(4);C11.setMarginRight(4);C11.iC();C12.setAttachment("RIGHT");C12.setManage(C37);C12.setParent(C9);C12.setMarginTop(4);C12.setMarginBottom(5);C12.setMarginLeft(4);C12.setMarginRight(4);C12.iC();C13.iC();C14.setAttachment("TOP");C14.setManage(C34);C14.setParent(C13);C14.iC();C15.iC();C16.setAttachment("TOP");C16.setManage(C50);C16.setParent(C15);
C16.iC();C17.iC();C18.setAttachment("TOP");C18.setManage(C55);C18.setParent(C17);C18.iC();C19.setParent(this);C19.setDisplayPosition(2);C19.setTabPosition(2);C19.setHeight(428);C19.setLeft(0);C19.setTop(4);C19.setWidth(80);C19.iC();C20.setParent(this);C20.setDisplayPosition(1);C20.setTabPosition(1);C20.setHeight(428);C20.setLeft(80);C20.setTop(4);C20.setWidth(441);C20.setLayoutManager(C4);C20.iC();C21.setBorderBottom(1);C21.iC();C22.setForegroundBrush(C24);C22.setFontSize(20);C22.setFontUnits("PIXEL");
C22.setCornerBottomLeft(5);C22.setCornerBottomRight(5);C22.setCornerTopLeft(5);C22.setCornerTopRight(5);C22.iC();C23.setForegroundBrush(C24);C23.setFontSize(20);C23.setFontUnits("PIXEL");C23.setCornerBottomLeft(5);C23.setCornerBottomRight(5);C23.setCornerTopLeft(5);C23.setCornerTopRight(5);C23.setBold(true);C23.iC();C24.setColor("THEME900");C24.iC();C25.setFontSize(12);C25.setFontUnits("PIXEL");C25.iC();C26.setForegroundBrush(C27);C26.setFontSize(15);C26.setFontUnits("PIXEL");C26.setBackgroundBrush(C28);
C26.setCornerBottomLeft(3);C26.setCornerBottomRight(3);C26.setCornerTopLeft(3);C26.setCornerTopRight(3);C26.iC();C27.setColor("THEME900");C27.iC();C28.setColor("THEME50");C28.iC();C29.setBorderColor("TRANSPARENT");C29.iC();C30.setInterval(0);C30.iC();C31.setDisplayPosition(1);C31.setLeft(4);C31.setParent(C19);C31.setTabPosition(1);C31.setWidth(72);C31.setTop(5);C31.setHeight(72);C31.setImageSizing("BESTFIT");C31.iC();C32.setParent(C20);C32.setDisplayPosition(1);C32.setTabPosition(4);C32.setLeft(0);
C32.setTop(4);C32.setWidth(441);C32.setTabStop(false);C32.setHeight(22);C32.setVerticalAlignment("CENTER");C32.setStyle(C22);C32.setThemeDrawStyle("ListItem");C32.setCaption("Veronica Brown - A1007");C32.setMarginLeft(2);C32.setEllipses("PATH");C32.setWordWrap(false);C32.iC();C33.setDisplayPosition(2);C33.setLeft(0);C33.setParent(C20);C33.setTabPosition(3);C33.setTabStop(false);C33.setTop(26);C33.setHeight(95);C33.setWidth(441);C33.setLayoutManager(C13);C33.iC();C34.setDisplayPosition(7);C34.setLeft(0);
C34.setParent(C33);C34.setTabPosition(7);C34.setTabStop(false);C34.setTop(0);C34.setWidth(441);C34.setHeight(25);C34.setLayoutManager(C9);C34.setStyle(C26);C34.iC();C35.setCaption(" Contact");C35.setDisplayPosition(2);C35.setEllipses("WORD");C35.setHeight(25);C35.setLeft(0);C35.setParent(C34);C35.setTabPosition(1);C35.setTabStop(false);C35.setTop(0);C35.setVerticalAlignment("CENTER");C35.setWidth(393);C35.setStyle(C26);C35.iC();C36.setDisplayPosition(3);C36.setHeight(16);C36.setLeft(421);C36.setParent(C34);
C36.setTabPosition(2);C36.setTabStop(false);C36.setTop(4);C36.setWidth(16);C36.iC();C37.setDisplayPosition(1);C37.setHeight(16);C37.setLeft(397);C37.setParent(C34);C37.setTabPosition(3);C37.setTabStop(false);C37.setTop(4);C37.setWidth(16);C37.iC();C38.setDisplayPosition(1);C38.setEllipses("WORD");C38.setHeight(19);C38.setLeft(16);C38.setParent(C33);C38.setTabPosition(1);C38.setTabStop(false);C38.setTop(32);C38.setVerticalAlignment("CENTER");C38.setWidth(113);C38.setCaption("Business Phone");C38.iC();
C39.setDisplayPosition(4);C39.setEllipses("WORD");C39.setHeight(19);C39.setLeft(16);C39.setParent(C33);C39.setTabPosition(4);C39.setTabStop(false);C39.setTop(64);C39.setVerticalAlignment("CENTER");C39.setWidth(57);C39.setCaption("Email");C39.iC();C40.setDisplayPosition(3);C40.setEllipses("WORD");C40.setHeight(19);C40.setLeft(114);C40.setParent(C33);C40.setTabPosition(3);C40.setTabStop(false);C40.setTop(32);C40.setVerticalAlignment("CENTER");C40.setWidth(191);C40.setCaption("test");C40.iC();C41.setDisplayPosition(2);
C41.setEllipses("WORD");C41.setHeight(19);C41.setLeft(58);C41.setParent(C33);C41.setTabPosition(2);C41.setTabStop(false);C41.setTop(64);C41.setVerticalAlignment("CENTER");C41.setWidth(279);C41.setCaption("test");C41.iC();C42.setDisplayPosition(5);C42.setEllipses("WORD");C42.setHeight(19);C42.setLeft(97);C42.setParent(C33);C42.setTabPosition(5);C42.setTabStop(false);C42.setTop(48);C42.setVerticalAlignment("CENTER");C42.setWidth(201);C42.setCaption("test");C42.iC();C43.setDisplayPosition(6);C43.setEllipses("WORD");
C43.setHeight(19);C43.setLeft(16);C43.setParent(C33);C43.setTabPosition(6);C43.setTabStop(false);C43.setTop(48);C43.setCaption("Home Phone");C43.setVerticalAlignment("CENTER");C43.setWidth(121);C43.iC();C44.setDisplayPosition(3);C44.setLeft(0);C44.setParent(C20);C44.setTabPosition(2);C44.setTabStop(false);C44.setTop(121);C44.setHeight(160);C44.setWidth(441);C44.setLayoutManager(C15);C44.iC();C45.setDisplayPosition(2);C45.setEllipses("WORD");C45.setHeight(19);C45.setLeft(16);C45.setParent(C44);C45.setTabPosition(1);
C45.setTabStop(false);C45.setTop(32);C45.setVerticalAlignment("CENTER");C45.setWidth(89);C45.setComponentTag(" ");C45.setCaption("Salary");C45.iC();C46.setDisplayPosition(5);C46.setEllipses("WORD");C46.setHeight(19);C46.setLeft(16);C46.setParent(C44);C46.setTabPosition(4);C46.setTabStop(false);C46.setTop(48);C46.setVerticalAlignment("CENTER");C46.setWidth(89);C46.setCaption("Contract Type");C46.iC();C47.setDisplayPosition(4);C47.setEllipses("WORD");C47.setHeight(19);C47.setLeft(83);C47.setParent(C44);
C47.setTabPosition(3);C47.setTabStop(false);C47.setTop(32);C47.setVerticalAlignment("CENTER");C47.setWidth(145);C47.iC();C48.setDisplayPosition(3);C48.setEllipses("WORD");C48.setHeight(19);C48.setLeft(113);C48.setParent(C44);C48.setTabPosition(2);C48.setTabStop(false);C48.setTop(48);C48.setVerticalAlignment("CENTER");C48.setWidth(145);C48.iC();C49.setDisplayPosition(1);C49.setLeft(88);C49.setParent(C44);C49.setTabPosition(5);C49.setTabStop(false);C49.setTop(88);C49.setHeight(65);C49.setWidth(313);
C49.iC();C50.setCaption(" Remuneration");C50.setDisplayPosition(6);C50.setEllipses("WORD");C50.setHeight(29);C50.setLeft(0);C50.setParent(C44);C50.setTabPosition(6);C50.setTabStop(false);C50.setTop(0);C50.setVerticalAlignment("CENTER");C50.setWidth(441);C50.setStyle(C26);C50.iC();C51.setDisplayPosition(7);C51.setEllipses("WORD");C51.setHeight(19);C51.setLeft(16);C51.setParent(C44);C51.setTabPosition(7);C51.setTabStop(false);C51.setTop(64);C51.setVerticalAlignment("CENTER");C51.setWidth(89);C51.setCaption("Bonus Cycle");
C51.iC();C52.setCaption("Overall Ratio");C52.setDisplayPosition(8);C52.setEllipses("WORD");C52.setHeight(25);C52.setLeft(16);C52.setParent(C44);C52.setTabPosition(8);C52.setTabStop(false);C52.setTop(83);C52.setVerticalAlignment("CENTER");C52.setWidth(73);C52.iC();C53.setCaption("6 monthly");C53.setDisplayPosition(9);C53.setEllipses("WORD");C53.setHeight(19);C53.setLeft(104);C53.setParent(C44);C53.setTabPosition(9);C53.setTabStop(false);C53.setTop(64);C53.setVerticalAlignment("CENTER");C53.setWidth(146);
C53.iC();C54.setDisplayPosition(4);C54.setLeft(0);C54.setParent(C20);C54.setTabPosition(1);C54.setTabStop(false);C54.setTop(281);C54.setHeight(136);C54.setWidth(441);C54.setLayoutManager(C17);C54.iC();C55.setCaption(" Travel Expenses -");C55.setDisplayPosition(1);C55.setEllipses("WORD");C55.setHeight(25);C55.setLeft(0);C55.setParent(C54);C55.setTabPosition(1);C55.setTabStop(false);C55.setTop(0);C55.setVerticalAlignment("CENTER");C55.setWidth(441);C55.setStyle(C26);C55.iC();C56.setDisplayPosition(2);
C56.setHeight(97);C56.setLeft(16);C56.setParent(C54);C56.setTabPosition(2);C56.setTop(32);C56.setWidth(369);C56.setColumnLines(false);C56.setRowLines(false);C56.setRowHeight(20);C56.setStyle(C29);C56.iC();C57.setDisplayPosition(1);C57.setParent(C56);C57.setSource(f.F3);C57.setColumnCaptionType("CAPTION");C57.setColumnCaption("Date");C57.setColumnCaptionAlign("LEFT");C57.setColumnWidth(120);C57.setCellWidth(100);C57.setColumnStyle(C29);C57.iC();C58.setDisplayPosition(2);C58.setParent(C56);C58.setSource(f.F4);
C58.setColumnCaptionType("CAPTION");C58.setColumnCaption("Location");C58.setColumnCaptionAlign("LEFT");C58.setColumnWidth(100);C58.setColumnUnits("PROPORTION");C58.setColumnStyle(C29);C58.iC();C59.setDisplayPosition(3);C59.setParent(C56);C59.setSource(f.F5);C59.setColumnCaptionType("CAPTION");C59.setColumnCaption("Expenses");C59.setColumnCaptionAlign("LEFT");C59.setColumnWidth(100);C59.setColumnStyle(C29);C59.setColumnUnits("PROPORTION");C59.iC();C60.aD();C60.iC();C61.aD();C61.iC();C62.aD();C62.iC();
C63.aD();C63.iC();C64.iC();C65.iC();C66.iC();C0.aH("INSTANCELISTSHOWOPTIONCHANGED",this,e2);C30.aH("TICK",this,e3);C36.aH("CLICK",this,e7);C37.aH("CLICK",this,e6);C40.aH("CLICK",this,e5);C42.aH("CLICK",this,e5);this.setHeight(433);this.setWidth(521);this.setLayoutManager(C1);this.setStyle(C21);this.aH("CREATEINSTANCE",this,e1);this.aH("CLICK",this,e4);}});var cA=cO.aN.prototype;function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",149);r.ln=149;{r.ln=151;m.TITLEPANEL_HEIGHT.set(m.TITLE_PANEL.getHeight());
r.ln=152;m.CONTACTPANEL_HEIGHT.set(m.CONTACT_PANEL.getHeight());r.ln=153;m.TRAVELPANEL_HEIGHT.set(m.TRAVEL_PANEL.getHeight());r.ln=154;m.SALARYPANEL_HEIGHT.set(m.SALARY_PANEL.getHeight());r.ln=156;this.getStyles().mthADD(m.SMALLERTEXT);}r.ln=158;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PeopleController.InstanceListShowOptionChanged",162);r.ln=162;{r.ln=164;m.REBUILDFOROPTIONCHANGE.set(true);r.ln=166;this.mthUCREATEORUPDATEDISPLAY();r.ln=168;m.REBUILDFOROPTIONCHANGE.set(false);
}r.ln=170;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ExecuteDefaultCommandTimer.Tick",173);r.ln=173;{r.ln=175;m.EXECUTEDEFAULTCOMMANDTIMER.setInterval(0);r.ln=177;this.REF.DATAITEM.mthAVEXECUTEDEFAULTCOMMAND(true);}r.ln=179;r.e();};cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",182);r.ln=182;{r.ln=185;cA.mthUINITIALIZE.call(this);r.ln=188;this.setAVHANDLESOWNSELECTION(true);}r.ln=190;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",193);
r.ln=193;{r.ln=195;cA.mthUTERMINATE.call(this);r.ln=197;m.EXECUTEDEFAULTCOMMANDTIMER.setInterval(0);r.ln=199;m.LIST_TRAVEL.clearList();r.ln=201;m.RIGHT_PANE.setLayoutManager(null);r.ln=203;this.setLayoutManager(null);}r.ln=205;r.e();};cO.mthUCONTAINS=function(p0){var r=l.mR(this,cO,"uContains",208);var P0=r.cPD("UPPERCASEWORDS");var P1=r.cP("FOUND","PRIM_BOLN");P0=p0;var C0=r.cR("TEMPFULLNAME","PRIM_DC","UnicodeString");var C1=r.cR("TEMPHOMEPHONE","PRIM_ALPH");var C2=r.cR("TEMPBUSINESSPHONE","PRIM_ALPH");
C0.iC();C1.iC();C2.iC();r.ln=208;{r.ln=214;C0.set(l.s.UpperCase(this.REF.DATAITEM.getAVVISUALID2().getValue()));r.ln=215;C2.set(l.s.UpperCase(this.REF.DATAITEM.getAVACOLUMN6().get()));r.ln=216;C1.set(l.s.UpperCase(this.REF.DATAITEM.getAVACOLUMN7().get()));r.ln=218;P1.set(true);r.ln=220;{var l1=P0.cI();while(l1.step()){var WORD=r.sR("WORD",l1.item());r.ln=222;if(l.s.Contains(C0.get(),WORD.get())){l1.end();return r.rV(P1.get());}r.ln=226;if(l.s.Contains(C1.get(),WORD.get())){l1.end();return r.rV(P1.get());
}r.ln=230;if(l.s.Contains(C2.get(),WORD.get())){l1.end();return r.rV(P1.get());}r.ln=234;}l1.end();r.dR("WORD");}r.ln=236;P1.set(false);}r.ln=238;return r.rV(P1.get());};cO.mthUCREATEORUPDATEDISPLAY=function(){var m=this.REF,r=l.mR(this,cO,"uCreateorUpdateDisplay",242);var C0=r.cF("MINIMUMHEIGHT",Fd.F1.Dc);var C1=r.cF("CALCULATEDHEIGHT",Fd.F1.Dc);C0.iC();C1.iC();r.ln=242;{r.ln=249;cA.mthUCREATEORUPDATEDISPLAY.call(this);r.ln=254;if(l.b.Not(m.REBUILDFOROPTIONCHANGE.get())){r.ln=256;if(l.and((this.REF.DATAITEM.getAVRELATEDREFERENCE()!=null),(m.EMPLOYEEIMAGE.getImage()==null)))
{r.ln=257;m.EMPLOYEEIMAGE.setImage(l.cast(this.REF.DATAITEM.getAVRELATEDREFERENCE(),"PRIM_BMP"));}r.ln=261;if(this.REF.AVFRAMEWORKMANAGER.getAVLARGESCREEN()){r.ln=262;m.IMAGE1.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("PHONE_OUTLINE.PNG","T","SMALL",u));r.ln=263;m.IMAGE2.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("MAIL_OUTLINE.PNG","T","SMALL",u));}else{r.ln=265;m.IMAGE1.setVisible(false);m.IMAGE2.setVisible(false);}r.ln=268;m.TRAVELPANELSETUP.set(false);r.ln=269;
m.SALARYPANELSETUP.set(false);}r.ln=275;m.RIGHT_PANE.setLayoutManager(null);r.ln=277;this.mthSETUPTITLEPANEL();r.ln=278;this.mthSETUPCONTACTPANEL();r.ln=279;this.mthSETUPSALARYPANEL();r.ln=280;this.mthSETUPTRAVELPANEL();r.ln=283;this.mthUREFRESHVISIBLECURRENTSTATE();r.ln=286;m.EXECUTEDEFAULTCOMMANDTIMER.setInterval(0);r.ln=289;C1.set(l.add(m.TITLEPANEL_HEIGHT.get(),2));r.ln=291;if(m.CONTACT_PANEL.getVisible()){r.ln=292;C1.set(l.add(C1.get(),m.CONTACTPANEL_HEIGHT.get()));}r.ln=295;if(m.SALARY_PANEL.getVisible())
{r.ln=296;C1.set(l.add(C1.get(),m.SALARYPANEL_HEIGHT.get()));}r.ln=299;if(m.TRAVEL_PANEL.getVisible()){r.ln=300;C1.set(l.add(C1.get(),m.TRAVELPANEL_HEIGHT.get()));}r.ln=303;C0.set(l.add(m.EMPLOYEEIMAGE.getHeight(),8));r.ln=305;if(l.n.lt(C1.get(),C0.get())){r.ln=306;C1.set(C0.get());}r.ln=309;this.REF.PARENTPANEL.setHeight(l.add(C1.get(),16));r.ln=311;this.setHeight(l.add(C1.get(),4));r.ln=313;m.RIGHT_PANE.setLayoutManager(m.ATTACHLAYOUTRIGHTPANE);}r.ln=315;r.e();};cO.mthUREFRESHVISIBLECURRENTSTATE=function()
{var m=this.REF,r=l.mR(this,cO,"uRefreshVisibleCurrentState",318);r.ln=318;{r.ln=320;if(this.REF.DATAITEM.getAVISCURRENT()){r.ln=321;m.TITLE_PANEL.setStyle(m.HEADING1BOLDSTYLE);}else{r.ln=323;m.TITLE_PANEL.setStyle(m.HEADING1STYLE);}}r.ln=326;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.Click",329);var P0=Ps.r("HANDLED");r.ln=329;{r.ln=331;this.REF.DATAITEM.setAVISCURRENT(true);r.ln=333;m.EXECUTEDEFAULTCOMMANDTIMER.setInterval(1);r.ln=335;P0.set(true);}r.ln=337;r.e();};
cO.mthSETUPTITLEPANEL=function(){var m=this.REF,r=l.mR(this,cO,"SetupTitlePanel",341);r.ln=341;{r.ln=343;m.TITLE_PANEL.setCaption(l.add(l.cat(this.REF.DATAITEM.getAVVISUALID2().get()," - "),this.REF.DATAITEM.getAVVISUALID1().get()));}r.ln=345;r.e();};cO.mthSETUPCONTACTPANEL=function(){var m=this.REF,r=l.mR(this,cO,"SetupContactPanel",349);var C0=r.cR("BUILDEMAILADDRESS","PRIM_ALPH");C0.iC();r.ln=349;{r.ln=352;m.CONTACT_PANEL.setVisible(m.PEOPLECONTROLLER.ref.getSHOULDSHOWCONTACT());r.ln=354;if(m.CONTACT_PANEL.getVisible())
{r.ln=355;m.BUSINESSPHONE.setCaption(this.REF.DATAITEM.getAVACOLUMN7().get());r.ln=356;m.HOMEPHONE.setCaption(this.REF.DATAITEM.getAVACOLUMN6().get());r.ln=357;C0.set(this.REF.DATAITEM.getAVVISUALID2().get());r.ln=358;C0.set(l.s.ReplaceAll(C0.get()," ","."));r.ln=359;m.EMAILADDRESS.setCaption(l.cat(C0.get(),"@Company.com"));}}r.ln=362;r.e();};cO.mthSETUPSALARYPANEL=function(){var f=this.FLD.DF_T40PAO,m=this.REF,r=l.mR(this,cO,"SetupSalaryPanel",366);var C0=r.cR("GRAPHTITLE","PRIM_ALPH");var C1=r.cF("ROUNDEDSALARY",Fd.F1.Dc);
var C2=r.cF("REMAININGSALARY",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();r.ln=366;{r.ln=371;m.SALARY_PANEL.setVisible(m.PEOPLECONTROLLER.ref.getSHOULDSHOWSALARY());r.ln=373;if(l.and(m.SALARY_PANEL.getVisible(),l.b.Not(m.SALARYPANELSETUP.get()))){r.ln=375;f.F2.set(this.REF.DATAITEM.getAVNCOLUMN2().get());r.ln=377;m.SALARYVALUE.setCaption(l.cat("$",l.n.AsString(this.REF.DATAITEM.getAVNCOLUMN2().get())));r.ln=378;m.SALARYTYPE.setCaption("SALARIED");r.ln=380;C1.set(l.n.Round(l.div(f.F2.get(),400),"UP"));r.ln=381;
C2.set(l.sub(3000,C1.get()));r.ln=382;C0.set(this.REF.DATAITEM.getAVVISUALID2().get());r.ln=383;C0.set(l.s.ReplaceAll(C0.get()," ","_"));r.ln=385;m.SALARYGRAPH.setSource(l.cat(l.cat(l.cat(l.cat(l.cat("https://chart.googleapis.com/chart?cht=p3&chs=250x40&chds=a&chd=t:",l.n.AsString(C2.get())),","),l.n.AsString(C1.get())),"&chl=Dept|"),C0.get()));r.ln=387;m.SALARYPANELSETUP.set(true);}}r.ln=391;r.e();};cO.mthSETUPTRAVELPANEL=function(){var f=this.FLD.DF_T40PAO,m=this.REF,r=l.mR(this,cO,"SetUpTravelPanel",395);
var C0=r.cF("UEXPENSES",Fd.F2.Dc);C0.iC();r.ln=395;{r.ln=398;m.TRAVEL_PANEL.setVisible(m.PEOPLECONTROLLER.ref.getSHOULDSHOWTRAVEL());r.ln=400;if(l.and(m.TRAVEL_PANEL.getVisible(),l.b.Not(m.TRAVELPANELSETUP.get()))){r.ln=403;f.F2.set(this.REF.DATAITEM.getAVNCOLUMN2().get());r.ln=404;C0.set(l.mul(f.F2.get(),c1));r.ln=405;m.TRIPSLABEL.setCaption(l.cat(l.cat(" Travel Expenses - ","$"),l.n.AsDisplayString(C0.get(),15,2,"EDITCODE_L")));r.ln=407;this.mthADDTRAVELITEMS(C0.get());r.ln=409;m.TRAVELPANELSETUP.set(true);
r.ln=411;if(this.REF.AVFRAMEWORKMANAGER.getAVSMALLSCREEN()){r.ln=412;m.COLUMNLOCATION.setColumnVisible(false);}}}r.ln=417;r.e();};cO.mthADDTRAVELITEMS=function(p0){var m=this.REF,r=l.mR(this,cO,"AddTravelItems",421);var P0=r.cPF("UEXPENSES",Fd.F2.Dc);P0.set(p0);r.ln=421;{r.ln=424;m.LIST_TRAVEL.clearList();r.ln=426;{var v1=P0.get();if(r.ln=428,l.n.lt(v1,5000)){r.ln=429;sr1.call(this,"12 Nov 2015","CHICAGO",c2);r.ln=430;sr1.call(this,"04 Jan 2016","MIAMI",c3);}else if(r.ln=432,l.n.lt(v1,8000)){r.ln=433;
sr1.call(this,"07 Jul 2015","NEW YORK",c4);r.ln=434;sr1.call(this,"04 Jan 2016","MIAMI",c3);}else if(r.ln=436,l.n.lt(v1,11000)){r.ln=437;sr1.call(this,"12 Nov 2015","CHICAGO",c5);r.ln=438;sr1.call(this,"07 Jul 2015","NEW YORK",c4);r.ln=439;sr1.call(this,"04 Jan 2016","MIAMI",c3);}else{r.ln=442;sr1.call(this,"04 Jan 2016","MIAMI",c3);r.ln=443;sr1.call(this,"12 Nov 2015","CHICAGO",c5);r.ln=444;sr1.call(this,"07 Jul 2015","NEW YORK",c4);}r.ln=446;}}r.ln=447;r.e();};function sr1(p0,p1,p2){var f=this.FLD.DF_T40PAO,m=this.REF,r=l.sR(this,cO,"AddTravelItem",450);
f.F3.set(p0);f.F4.set(p1);f.F5.set(p2);r.ln=450;{r.ln=452;m.LIST_TRAVEL.addEntry();}r.ln=454;r.e();};function e5(PHONE,Ps){var r=l.eR(this,cO,"#BusinessPhone.Click #HomePhone.Click",458);var P0=Ps.r("HANDLED");var C0=r.cR("TEL","PRIM_ALPH");C0.iC();r.ln=458;{r.ln=461;if(this.REF.AVFRAMEWORKMANAGER.getAVLARGESCREEN()){r.ln=462;C0.set(l.cat("tel:+(1)",PHONE.getCaption()));r.ln=463;l.WEB().mthNAVIGATE(C0.get(),"NEW");r.ln=464;P0.set(true);}}r.ln=467;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Image2.Click",471);
var P0=Ps.r("HANDLED");var C0=r.cR("MAILTO","PRIM_ALPH");C0.iC();r.ln=471;{r.ln=474;if(this.REF.AVFRAMEWORKMANAGER.getAVLARGESCREEN()){r.ln=475;C0.set(l.cat("mailto:",m.EMAILADDRESS.getCaption()));r.ln=476;l.WEB().mthNAVIGATE(C0.get(),"NEW");r.ln=477;P0.set(true);}}r.ln=481;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#Image1.Click",484);var P0=Ps.r("HANDLED");var C0=r.cR("TEL","PRIM_ALPH");C0.iC();r.ln=484;{r.ln=487;if(this.REF.AVFRAMEWORKMANAGER.getAVLARGESCREEN()){r.ln=488;C0.set("skype:echo123");
r.ln=489;l.WEB().mthNAVIGATE(C0.get(),"NEW");r.ln=490;P0.set(true);}}r.ln=492;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSALARY"});}cO.srDATAITEM=function(rn){cA.srDATAITEM.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srPARENTPANEL=function(rn){cA.srPARENTPANEL.call(this,rn);};},{rc:["VF_AC035O","DF_EMCTLO"],
rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TIMR","PRIM_IMAG","PRIM_LABL","PRIM_WEB.Page","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Number","PRIM_FLD","PRIM_BOLN"],dp:["PRIM_DC.UnicodeString","PRIM_ALPH"]});