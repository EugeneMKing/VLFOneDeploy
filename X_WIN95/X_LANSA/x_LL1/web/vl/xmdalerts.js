﻿LANSA.addComponent({id:"XMDALERTS",nm:"xMdAlerts",ot:"wv",tp:"View",de:"Material Design Alerts",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("LAYOUTMAIN","PRIM_TBLO");var C2=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C6=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");
var C7=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");var C8=this.cR("LAYOUTMAINITEM5","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINITEM6","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMAINITEM7","PRIM_TBLO","Item");var C12=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTMAINITEM8","PRIM_TBLO","Item");var C14=this.cR("LAYOUTPANELS","PRIM_TBLO");var C15=this.cR("LAYOUTPANELSROW1","PRIM_TBLO","Row");var C16=this.cR("LAYOUTPANELSCOLUMN1","PRIM_TBLO","Column");
var C17=this.cR("LAYOUTPANELSITEM1","PRIM_TBLO","Item");var C18=this.cR("LAYOUTPANELSITEMBUTTON","PRIM_TBLO","Item");var C19=this.cR("LAYOUTPANELSITEMBUTTON1","PRIM_TBLO","Item");var C20=this.cR("LAYOUTPANELSITEM4","PRIM_TBLO","Item");var C21=this.cR("LAYOUTPANELSITEMBUTTON2","PRIM_TBLO","Item");var C22=this.cR("LAYOUTPANELSITEMBUTTON3","PRIM_TBLO","Item");var C23=this.cR("LAYOUTPANELSITEMBUTTON4","PRIM_TBLO","Item");var C24=this.cR("LAYOUTPANELSITEMBUTTON7","PRIM_TBLO","Item");var C25=this.cR("LAYOUTPANELSITEMBUTTON5","PRIM_TBLO","Item");
var C26=this.cR("LAYOUTPANELSITEMBUTTON6","PRIM_TBLO","Item");var C27=this.cR("LAYOUTPANELSITEM11","PRIM_TBLO","Item");var C28=this.cR("LAYOUTPANELSITEM12","PRIM_TBLO","Item");var C29=this.cR("LAYOUTMAINITEM9","PRIM_TBLO","Item");var C30=this.cR("LAYOUTPANELSITEM13","PRIM_TBLO","Item");var C31=this.cR("LAYOUTPANELSITEM14","PRIM_TBLO","Item");var C32=this.cR("LAYOUTPANELSITEM15","PRIM_TBLO","Item");var C33=this.cR("LAYOUTPANELSITEM16","PRIM_TBLO","Item");var C34=this.cR("LABELTITLE","PRIM_MD","Label");
var C35=this.cR("LABELSUBTITLE","PRIM_MD","Label");var C36=this.cR("PANELSIMPLE","PRIM_PANL");var C37=this.cR("LABEL8","PRIM_MD","Label");var C38=this.cR("BUTTON","PRIM_MD","FlatButton");var C39=this.cR("BUTTON1","PRIM_MD","FlatButton");var C40=this.cR("BUTTON2","PRIM_MD","FlatButton");var C41=this.cR("BUTTON3","PRIM_MD","FlatButton");var C42=this.cR("PANELDIALOGS","PRIM_PANL");var C43=this.cR("LABEL1","PRIM_MD","Label");var C44=this.cR("BUTTON4","PRIM_MD","FlatButton");var C45=this.cR("BUTTON5","PRIM_MD","FlatButton");
var C46=this.cR("BUTTON6","PRIM_MD","FlatButton");var C47=this.cR("BUTTON7","PRIM_MD","FlatButton");var C48=this.cR("ALERT","PRIM_MD","Alert");var C49=this.cR("ALERT1","PRIM_MD","Alert");var C50=this.cR("ALERT2","PRIM_MD","Alert");var C51=this.cR("ALERT3","PRIM_MD","Alert");var C52=this.cR("LABEL2","PRIM_MD","Label");var C53=this.cR("LABEL3","PRIM_MD","Label");var C54=this.cR("ALERT4","PRIM_MD","Alert");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);
C3.setParent(C1);C3.setWidth(12);C3.setMaxWidth(1500);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.iC();C6.setAlignment("TOPCENTER");C6.setColumn(C3);C6.setManage(C48);C6.setParent(C1);C6.setRow(C5);C6.setSizing("FITTOWIDTH");C6.setFlow("DOWN");C6.iC();C7.setAlignment("TOPCENTER");C7.setColumn(C3);C7.setManage(C49);C7.setParent(C1);C7.setRow(C5);C7.setSizing("FITTOWIDTH");C7.setFlow("DOWN");C7.iC();C8.setAlignment("TOPCENTER");C8.setColumn(C3);
C8.setManage(C50);C8.setParent(C1);C8.setRow(C5);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.iC();C9.setAlignment("TOPCENTER");C9.setColumn(C3);C9.setManage(C51);C9.setParent(C1);C9.setRow(C5);C9.setSizing("FITTOWIDTH");C9.setFlow("DOWN");C9.iC();C10.setColumn(C3);C10.setManage(C34);C10.setParent(C1);C10.setRow(C5);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.setAlignment("TOPCENTER");C10.setMarginTop(32);C10.iC();C11.setColumn(C3);C11.setManage(C35);C11.setParent(C1);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");
C11.setRow(C5);C11.setAlignment("TOPCENTER");C11.setFlow("DOWN");C11.setMarginTop(16);C11.setMarginBottom(32);C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C3);C12.setManage(C36);C12.setParent(C1);C12.setRow(C5);C12.setSizing("FITTOWIDTH");C12.setFlow("DOWN");C12.setMarginTop(50);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C3);C13.setManage(C42);C13.setParent(C1);C13.setRow(C5);C13.setSizing("FITTOWIDTH");C13.setFlow("DOWN");C13.setMarginTop(32);C13.iC();C14.iC();C15.setDisplayPosition(1);
C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.iC();C17.setColumn(C16);C17.setManage(C37);C17.setParent(C14);C17.setRow(C15);C17.setSizing("FITTOWIDTH");C17.setAlignment("TOPCENTER");C17.setFlow("DOWN");C17.setMarginLeft(16);C17.setMarginRight(16);C17.iC();C18.setColumn(C16);C18.setManage(C38);C18.setParent(C14);C18.setRow(C15);C18.setSizing("NONE");C18.setFlow("CENTERHORIZONTAL");C18.setMarginTop(30);C18.iC();C19.setColumn(C16);C19.setManage(C39);C19.setParent(C14);
C19.setRow(C15);C19.setSizing("NONE");C19.setFlow("CENTERHORIZONTAL");C19.setMarginTop(30);C19.iC();C20.setColumn(C16);C20.setManage(C43);C20.setParent(C14);C20.setRow(C15);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setAlignment("TOPCENTER");C20.setFlow("DOWN");C20.setMarginLeft(16);C20.setMarginRight(16);C20.iC();C21.setColumn(C16);C21.setManage(C40);C21.setParent(C14);C21.setRow(C15);C21.setSizing("NONE");C21.setFlow("CENTERHORIZONTAL");C21.setMarginTop(30);C21.iC();C22.setColumn(C16);C22.setManage(C41);
C22.setParent(C14);C22.setRow(C15);C22.setSizing("NONE");C22.setFlow("CENTERHORIZONTAL");C22.setMarginTop(30);C22.iC();C23.setColumn(C16);C23.setManage(C44);C23.setParent(C14);C23.setRow(C15);C23.setSizing("NONE");C23.setFlow("CENTERHORIZONTAL");C23.setMarginTop(30);C23.iC();C24.setColumn(C16);C24.setManage(C45);C24.setParent(C14);C24.setRow(C15);C24.setSizing("NONE");C24.setFlow("CENTERHORIZONTAL");C24.setMarginTop(30);C24.iC();C25.setColumn(C16);C25.setManage(C46);C25.setParent(C14);C25.setRow(C15);
C25.setSizing("NONE");C25.setFlow("CENTERHORIZONTAL");C25.setMarginTop(30);C25.iC();C26.setColumn(C16);C26.setManage(C47);C26.setParent(C14);C26.setRow(C15);C26.setSizing("NONE");C26.setFlow("CENTERHORIZONTAL");C26.setMarginTop(30);C26.iC();C27.setColumn(C16);C27.setManage(C52);C27.setParent(C14);C27.setRow(C15);C27.setSizing("CONTENTHEIGHTFITTOWIDTH");C27.setAlignment("TOPCENTER");C27.setFlow("DOWN");C27.iC();C28.setColumn(C16);C28.setManage(C53);C28.setParent(C14);C28.setRow(C15);C28.setSizing("CONTENTHEIGHTFITTOWIDTH");
C28.setAlignment("TOPCENTER");C28.setFlow("DOWN");C28.iC();C29.setAlignment("TOPCENTER");C29.setColumn(C3);C29.setManage(C54);C29.setParent(C1);C29.setRow(C5);C29.setSizing("FITTOWIDTH");C29.setFlow("DOWN");C29.setMarginLeft(16);C29.setMarginRight(16);C29.iC();C30.setColumn(C16);C30.setManage(C48);C30.setParent(C14);C30.setRow(C15);C30.setSizing("FITTOWIDTH");C30.setAlignment("BOTTOMCENTER");C30.setMarginLeft(16);C30.setMarginRight(16);C30.iC();C31.setAlignment("BOTTOMCENTER");C31.setColumn(C16);
C31.setManage(C49);C31.setParent(C14);C31.setRow(C15);C31.setSizing("FITTOWIDTH");C31.setMarginLeft(16);C31.setMarginRight(16);C31.iC();C32.setAlignment("BOTTOMCENTER");C32.setColumn(C16);C32.setManage(C50);C32.setParent(C14);C32.setRow(C15);C32.setSizing("FITTOWIDTH");C32.setMarginLeft(16);C32.setMarginRight(16);C32.iC();C33.setAlignment("BOTTOMCENTER");C33.setColumn(C16);C33.setManage(C51);C33.setParent(C14);C33.setRow(C15);C33.setSizing("FITTOWIDTH");C33.setMarginLeft(16);C33.setMarginRight(16);
C33.iC();C34.setCaption("Alerts");C34.setDisplayPosition(1);C34.setParent(this);C34.setTabPosition(1);C34.setThemeDrawStyle("Heading1");C34.setTop(32);C34.setWidth(926);C34.setHeight(44);C34.setCaptionAlignment("TOPLEFT");C34.setWordWrap(true);C34.setLeft(78);C34.setCaptionMarginLeft(16);C34.setCaptionMarginRight(16);C34.iC();C35.setCaption("Alerts are urgent interruptions that inform about a situation and require acknowledgement. Sample usage can be found in the xMdAlerts component.");C35.setDisplayPosition(2);
C35.setParent(this);C35.setTabPosition(2);C35.setThemeDrawStyle("Heading3");C35.setTop(92);C35.setWidth(926);C35.setHeight(43);C35.setCaptionAlignment("TOPLEFT");C35.setWordWrap(true);C35.setLeft(78);C35.setCaptionMarginLeft(16);C35.setCaptionMarginRight(16);C35.iC();C36.setDisplayPosition(4);C36.setLeft(78);C36.setParent(this);C36.setTabPosition(4);C36.setTabStop(false);C36.setHeight(300);C36.setWidth(926);C36.setImageAlignment("TOPLEFT");C36.setLayoutManager(C14);C36.setTop(273);C36.iC();C37.setCaption("Simple Alerts");
C37.setDisplayPosition(1);C37.setLeft(16);C37.setParent(C36);C37.setTabPosition(1);C37.setThemeDrawStyle("TopDivider+Heading3");C37.setTop(0);C37.setWidth(894);C37.setWordWrap(true);C37.setCaptionMarginTop(20);C37.setHeight(62);C37.setCaptionAlignment("TOPLEFT");C37.setPaddingBottom(20);C37.iC();C38.setCaption("SUCCESS");C38.setDisplayPosition(3);C38.setLeft(163);C38.setParent(C36);C38.setTabPosition(3);C38.setTabStop(false);C38.setTop(162);C38.setStyle(C0);C38.setWidth(150);C38.setThemeDrawStyle("ForegroundMediumSuccess");
C38.iC();C39.setCaption("INFO");C39.setDisplayPosition(4);C39.setLeft(313);C39.setParent(C36);C39.setTabPosition(4);C39.setTabStop(false);C39.setTop(162);C39.setStyle(C0);C39.setWidth(150);C39.setThemeDrawStyle("ForegroundMediumPrimary");C39.iC();C40.setCaption("WARNING");C40.setDisplayPosition(6);C40.setLeft(463);C40.setParent(C36);C40.setTabPosition(6);C40.setTabStop(false);C40.setTop(162);C40.setStyle(C0);C40.setWidth(150);C40.setThemeDrawStyle("ForegroundMediumAccent");C40.iC();C41.setCaption("ERROR");
C41.setDisplayPosition(8);C41.setLeft(613);C41.setParent(C36);C41.setTabPosition(8);C41.setTabStop(false);C41.setTop(162);C41.setStyle(C0);C41.setWidth(150);C41.setThemeDrawStyle("ForegroundMediumError");C41.iC();C42.setDisplayPosition(5);C42.setLeft(78);C42.setParent(this);C42.setTabPosition(5);C42.setTabStop(false);C42.setHeight(300);C42.setWidth(926);C42.setImageAlignment("TOPLEFT");C42.setLayoutManager(C14);C42.setTop(605);C42.iC();C43.setCaption("Dialog Alerts");C43.setDisplayPosition(1);C43.setLeft(16);
C43.setParent(C42);C43.setTabPosition(1);C43.setThemeDrawStyle("TopDivider+Heading3");C43.setTop(0);C43.setWidth(894);C43.setWordWrap(true);C43.setCaptionMarginTop(20);C43.setHeight(63);C43.setCaptionAlignment("TOPLEFT");C43.setPaddingBottom(20);C43.iC();C44.setCaption("SUCCESS");C44.setDisplayPosition(3);C44.setLeft(163);C44.setParent(C42);C44.setTabPosition(3);C44.setTabStop(false);C44.setTop(162);C44.setStyle(C0);C44.setWidth(150);C44.setThemeDrawStyle("ForegroundMediumSuccess");C44.iC();C45.setCaption("INFO");
C45.setDisplayPosition(4);C45.setLeft(313);C45.setParent(C42);C45.setTabPosition(4);C45.setTabStop(false);C45.setTop(162);C45.setStyle(C0);C45.setWidth(150);C45.setThemeDrawStyle("ForegroundMediumPrimary");C45.iC();C46.setCaption("WARNING");C46.setDisplayPosition(5);C46.setLeft(463);C46.setParent(C42);C46.setTabPosition(6);C46.setTabStop(false);C46.setTop(162);C46.setStyle(C0);C46.setWidth(150);C46.setThemeDrawStyle("ForegroundMediumAccent");C46.iC();C47.setCaption("ERROR");C47.setDisplayPosition(6);
C47.setLeft(613);C47.setParent(C42);C47.setTabPosition(5);C47.setTabStop(false);C47.setTop(162);C47.setStyle(C0);C47.setWidth(150);C47.setThemeDrawStyle("ForegroundMediumError");C47.iC();C48.setCaption("Success! This Alert could indicate a successful or positive action");C48.setDisplayPosition(5);C48.setParent(C36);C48.setTabPosition(5);C48.setThemeDrawStyle("LightSuccess");C48.setWidth(894);C48.setTop(244);C48.setLeft(16);C48.setWordWrap(true);C48.setDuration(3000);C48.iC();C49.setCaption("Info! This Alert could indicate a neutral information change or action");
C49.setDisplayPosition(10);C49.setParent(C36);C49.setTabPosition(7);C49.setThemeDrawStyle("LightTitle");C49.setWidth(894);C49.setTop(244);C49.setLeft(16);C49.setWordWrap(true);C49.setDuration(3000);C49.iC();C50.setCaption("Warning! This Alert could indicate a warning that might need attention");C50.setDisplayPosition(7);C50.setParent(C36);C50.setTabPosition(9);C50.setThemeDrawStyle("LightAccent");C50.setWidth(894);C50.setTop(244);C50.setLeft(16);C50.setWordWrap(true);C50.setDuration(3000);C50.iC();
C51.setCaption("Error! This alert box could indicate a dangerous or potentially negative action");C51.setDisplayPosition(9);C51.setParent(C36);C51.setTabPosition(10);C51.setThemeDrawStyle("LightError");C51.setWidth(894);C51.setTop(244);C51.setLeft(16);C51.setWordWrap(true);C51.setDuration(3000);C51.iC();C52.setCaption("Alerts are available for any text with an optional dismiss button For correct styling use the built in Theme styles provided by LANSA. Click the buttons below to see an Alert");C52.setDisplayPosition(2);
C52.setLeft(0);C52.setParent(C36);C52.setTabPosition(2);C52.setThemeDrawStyle("Heading3");C52.setTop(62);C52.setWidth(926);C52.setWordWrap(true);C52.setCaptionMarginTop(20);C52.setHeight(81);C52.setCaptionAlignment("TOPLEFT");C52.setCaptionMarginLeft(20);C52.setCaptionMarginRight(20);C52.setPaddingBottom(20);C52.iC();C53.setCaption("Alerts can also be displayed as Dialogs with built in Application shroud. Click the buttons below to see a dialog Alert");C53.setDisplayPosition(2);C53.setLeft(0);C53.setParent(C42);
C53.setTabPosition(2);C53.setThemeDrawStyle("Heading3");C53.setTop(63);C53.setWidth(926);C53.setWordWrap(true);C53.setCaptionMarginTop(20);C53.setHeight(62);C53.setCaptionAlignment("TOPLEFT");C53.setCaptionMarginLeft(20);C53.setCaptionMarginRight(20);C53.setPaddingBottom(20);C53.iC();C54.setCaption("Success! This Alert could indicate a successful or positive action");C54.setDisplayPosition(3);C54.setParent(this);C54.setTabPosition(3);C54.setThemeDrawStyle("LightSuccess");C54.setWidth(894);C54.setTop(167);
C54.setLeft(94);C54.iC();l.WEB().aH("DEVICECHANGED",this,e9);C38.aH("CLICK",this,e1);C39.aH("CLICK",this,e2);C40.aH("CLICK",this,e3);C41.aH("CLICK",this,e4);C44.aH("CLICK",this,e5);C45.aH("CLICK",this,e6);C46.aH("CLICK",this,e7);C47.aH("CLICK",this,e8);this.setCaption("Alerts");this.setHeight(1148);this.setWidth(1081);this.setDisplayPosition(1);this.setLayoutManager(C1);this.setVerticalScroll(true);this.setTabPosition(1);this.aH("PREPARE",this,e10);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button.Click",76);
r.ln=76;{r.ln=78;m.ALERT.mthSHOWALERT();r.ln=79;m.ALERT.setDisplayPosition(1);}r.ln=81;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button1.Click",83);r.ln=83;{r.ln=85;m.ALERT1.mthSHOWALERT();r.ln=86;m.ALERT1.setDisplayPosition(1);}r.ln=88;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button2.Click",90);r.ln=90;{r.ln=92;m.ALERT2.mthSHOWALERT();r.ln=93;m.ALERT2.setDisplayPosition(1);}r.ln=95;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button3.Click",97);
r.ln=97;{r.ln=99;m.ALERT3.mthSHOWALERT();r.ln=100;m.ALERT3.setDisplayPosition(1);}r.ln=102;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button4.Click",104);var C0=r.cR("DIALOG","XMDDLG05");C0.iC();r.ln=104;{r.ln=108;C0.setThemeDrawStyle("MEDIUMSUCCESS");r.ln=109;C0.mthALERT(m.ALERT.getCaption(),3000);}r.ln=111;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button5.Click",113);var C0=r.cR("DIALOG","XMDDLG05");C0.iC();r.ln=113;{r.ln=117;C0.setThemeDrawStyle("MEDIUMTITLE");
r.ln=118;C0.mthALERT(m.ALERT1.getCaption(),3000);}r.ln=120;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button6.Click",122);var C0=r.cR("DIALOG","XMDDLG05");C0.iC();r.ln=122;{r.ln=126;C0.setThemeDrawStyle("MEDIUMACCENT");r.ln=127;C0.mthALERT(m.ALERT2.getCaption(),3000);}r.ln=129;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button7.Click",131);var C0=r.cR("DIALOG","XMDDLG05");C0.iC();r.ln=131;{r.ln=135;C0.setThemeDrawStyle("MEDIUMERROR");r.ln=136;C0.mthALERT(m.ALERT3.getCaption(),3000);
}r.ln=139;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",141);r.ln=141;{r.ln=143;{var v1=l.WEB().getDevice();if(r.ln=145,l.s.eq(v1,"MOBILE")){r.ln=147;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=148;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=150;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=151;m.LAYOUTMAINCOLUMN3.setWidth(0);r.ln=153;m.LAYOUTPANELSITEMBUTTON.setFlow("NONE");r.ln=154;m.LAYOUTPANELSITEMBUTTON1.setFlow("NONE");r.ln=155;m.LAYOUTPANELSITEMBUTTON2.setFlow("NONE");
r.ln=156;m.LAYOUTPANELSITEMBUTTON3.setFlow("NONE");r.ln=157;m.LAYOUTPANELSITEMBUTTON4.setFlow("NONE");r.ln=158;m.LAYOUTPANELSITEMBUTTON5.setFlow("NONE");r.ln=159;m.LAYOUTPANELSITEMBUTTON6.setFlow("NONE");r.ln=160;m.LAYOUTPANELSITEMBUTTON7.setFlow("NONE");r.ln=162;m.LAYOUTPANELSITEMBUTTON1.setMarginTop(70);r.ln=163;m.LAYOUTPANELSITEMBUTTON2.setMarginTop(110);r.ln=164;m.LAYOUTPANELSITEMBUTTON3.setMarginTop(150);r.ln=166;m.LAYOUTPANELSITEMBUTTON5.setMarginTop(70);r.ln=167;m.LAYOUTPANELSITEMBUTTON6.setMarginTop(110);
r.ln=168;m.LAYOUTPANELSITEMBUTTON7.setMarginTop(150);r.ln=170;m.PANELSIMPLE.setHeight(450);r.ln=171;m.PANELDIALOGS.setHeight(400);}else if(r.ln=173,l.s.eq(v1,"TABLET")){r.ln=175;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=176;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=178;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=179;m.LAYOUTMAINCOLUMN3.setWidth(0);r.ln=181;m.LAYOUTPANELSITEMBUTTON.setFlow("CENTERHORIZONTAL");r.ln=182;m.LAYOUTPANELSITEMBUTTON1.setFlow("CENTERHORIZONTAL");r.ln=183;m.LAYOUTPANELSITEMBUTTON2.setFlow("CENTERHORIZONTAL");
r.ln=184;m.LAYOUTPANELSITEMBUTTON3.setFlow("CENTERHORIZONTAL");r.ln=185;m.LAYOUTPANELSITEMBUTTON4.setFlow("CENTERHORIZONTAL");r.ln=186;m.LAYOUTPANELSITEMBUTTON5.setFlow("CENTERHORIZONTAL");r.ln=187;m.LAYOUTPANELSITEMBUTTON6.setFlow("CENTERHORIZONTAL");r.ln=188;m.LAYOUTPANELSITEMBUTTON7.setFlow("CENTERHORIZONTAL");r.ln=190;m.LAYOUTPANELSITEMBUTTON1.setMarginTop(30);r.ln=191;m.LAYOUTPANELSITEMBUTTON2.setMarginTop(30);r.ln=192;m.LAYOUTPANELSITEMBUTTON3.setMarginTop(30);r.ln=194;m.LAYOUTPANELSITEMBUTTON5.setMarginTop(30);
r.ln=195;m.LAYOUTPANELSITEMBUTTON6.setMarginTop(30);r.ln=196;m.LAYOUTPANELSITEMBUTTON7.setMarginTop(30);r.ln=198;m.PANELSIMPLE.setHeight(300);r.ln=199;m.PANELDIALOGS.setHeight(300);}else if(r.ln=201,l.s.eq(v1,"DESKTOP")){r.ln=203;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=204;m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=206;m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");r.ln=207;m.LAYOUTMAINCOLUMN3.setWidth(1);r.ln=209;m.LAYOUTPANELSITEMBUTTON.setFlow("CENTERHORIZONTAL");r.ln=210;m.LAYOUTPANELSITEMBUTTON1.setFlow("CENTERHORIZONTAL");
r.ln=211;m.LAYOUTPANELSITEMBUTTON2.setFlow("CENTERHORIZONTAL");r.ln=212;m.LAYOUTPANELSITEMBUTTON3.setFlow("CENTERHORIZONTAL");r.ln=213;m.LAYOUTPANELSITEMBUTTON4.setFlow("CENTERHORIZONTAL");r.ln=214;m.LAYOUTPANELSITEMBUTTON5.setFlow("CENTERHORIZONTAL");r.ln=215;m.LAYOUTPANELSITEMBUTTON6.setFlow("CENTERHORIZONTAL");r.ln=216;m.LAYOUTPANELSITEMBUTTON7.setFlow("CENTERHORIZONTAL");r.ln=218;m.LAYOUTPANELSITEMBUTTON1.setMarginTop(30);r.ln=219;m.LAYOUTPANELSITEMBUTTON2.setMarginTop(30);r.ln=220;m.LAYOUTPANELSITEMBUTTON3.setMarginTop(30);
r.ln=222;m.LAYOUTPANELSITEMBUTTON5.setMarginTop(30);r.ln=223;m.LAYOUTPANELSITEMBUTTON6.setMarginTop(30);r.ln=224;m.LAYOUTPANELSITEMBUTTON7.setMarginTop(30);r.ln=226;m.PANELSIMPLE.setHeight(300);r.ln=227;m.PANELDIALOGS.setHeight(300);}r.ln=229;}}r.ln=231;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",233);r.ln=233;{r.ln=235;m.ALERT4.mthFADEIN(u,u);}r.ln=237;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_PANL","PRIM_MD.FlatButton","PRIM_MD.Alert"],
dc:["XMDDLG05"],dp:["PRIM_ANIM"]});