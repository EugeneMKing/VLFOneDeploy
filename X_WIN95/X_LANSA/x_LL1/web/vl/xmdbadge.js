﻿LANSA.addComponent({id:"XMDBADGE",nm:"xMdBadge",ot:"wv",tp:"View",de:"Material Design Badges",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("STYLEGRAY","PRIM_VS","Style");var C2=this.cR("BRUSHGRAY","PRIM_VS","SolidBrush");var C3=this.cR("LAYOUTMAIN","PRIM_TBLO");var C4=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");
var C7=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINITEM7","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTPANELS","PRIM_TBLO");var C13=this.cR("LAYOUTPANELSROW1","PRIM_TBLO","Row");var C14=this.cR("LAYOUTPANELSCOLUMN1","PRIM_TBLO","Column");var C15=this.cR("LAYOUTPANELSITEM1","PRIM_TBLO","Item");var C16=this.cR("LAYOUTPANELSITEM11","PRIM_TBLO","Item");
var C17=this.cR("LAYOUTPANELSITEM2","PRIM_TBLO","Item");var C18=this.cR("LAYOUTPANELSITEM5","PRIM_TBLO","Item");var C19=this.cR("LAYOUTPANELSITEM6","PRIM_TBLO","Item");var C20=this.cR("LAYOUT1","PRIM_TBLO");var C21=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C22=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C23=this.cR("LAYOUTPANELSITEM3","PRIM_TBLO","Item");var C24=this.cR("LABELTITLE","PRIM_MD","Label");var C25=this.cR("LABELSUBTITLE","PRIM_MD","Label");var C26=this.cR("BUTTON1","PRIM_MD","RaisedButton");
var C27=this.cR("BADGE1","PRIM_MD","Badge");var C28=this.cR("PANELSIMPLE","PRIM_PANL");var C29=this.cR("LABEL8","PRIM_MD","Label");var C30=this.cR("LABEL2","PRIM_MD","Label");var C31=this.cR("BADGE","PRIM_MD","Badge");var C32=this.cR("BADGE2","PRIM_MD","Badge");var C33=this.cR("APPBAR","PRIM_MD","AppBar");var C34=this.cR("APPBARLABEL","PRIM_MD","Label");var C35=this.cR("APPBARLABEL1","PRIM_MD","Label");var C36=this.cR("APPBARBADGE2","PRIM_MD","Badge");var C37=this.cR("APPBARBADGE3","PRIM_MD","Badge");
var C38=this.cR("MENU","PRIM_MD","Menu");var C39=this.cR("MENUITEM","PRIM_MD","MenuItem");var C40=this.cR("MENUITEM1","PRIM_MD","MenuItem");var C41=this.cR("MENUITEM2","PRIM_MD","MenuItem");var C42=this.cR("MENUITEM3","PRIM_MD","MenuItem");var C43=this.cR("LABEL1","PRIM_MD","Label");C0.setCursor("HAND");C0.iC();C1.setBackgroundBrush(C2);C1.iC();C2.setColor("156:156:156");C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.setWidth(12);C5.setMaxWidth(800);
C5.iC();C6.setDisplayPosition(3);C6.setParent(C3);C6.iC();C7.setDisplayPosition(1);C7.setParent(C3);C7.iC();C8.setColumn(C5);C8.setManage(C24);C8.setParent(C3);C8.setRow(C7);C8.setSizing("FITTOWIDTH");C8.setFlow("DOWN");C8.setAlignment("TOPCENTER");C8.setMarginTop(32);C8.iC();C9.setColumn(C5);C9.setManage(C25);C9.setParent(C3);C9.setSizing("CONTENTHEIGHTFITTOWIDTH");C9.setRow(C7);C9.setAlignment("TOPCENTER");C9.setFlow("DOWN");C9.setMarginTop(16);C9.setMarginBottom(32);C9.iC();C10.setAlignment("TOPCENTER");
C10.setColumn(C5);C10.setManage(C28);C10.setParent(C3);C10.setRow(C7);C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.setMarginTop(50);C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C5);C11.setManage(C26);C11.setParent(C3);C11.setRow(C7);C11.setSizing("NONE");C11.setFlow("DOWN");C11.iC();C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.iC();C14.setDisplayPosition(1);C14.setParent(C12);C14.iC();C15.setColumn(C14);C15.setManage(C29);C15.setParent(C12);C15.setRow(C13);C15.setSizing("FITTOWIDTH");
C15.setAlignment("TOPCENTER");C15.setFlow("DOWN");C15.setMarginLeft(16);C15.setMarginRight(16);C15.iC();C16.setColumn(C14);C16.setManage(C30);C16.setParent(C12);C16.setRow(C13);C16.setSizing("CONTENTHEIGHTFITTOWIDTH");C16.setAlignment("TOPCENTER");C16.setFlow("DOWN");C16.iC();C17.setAlignment("TOPCENTER");C17.setColumn(C14);C17.setParent(C12);C17.setRow(C13);C17.setSizing("NONE");C17.setFlow("DOWN");C17.setMarginLeft(16);C17.iC();C18.setAlignment("TOPCENTER");C18.setColumn(C14);C18.setManage(C33);
C18.setParent(C12);C18.setRow(C13);C18.setSizing("NONE");C18.setFlow("DOWN");C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C14);C19.setManage(C38);C19.setParent(C12);C19.setRow(C13);C19.setSizing("NONE");C19.setFlow("DOWN");C19.setMarginBottom(16);C19.iC();C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.iC();C22.setDisplayPosition(1);C22.setParent(C20);C22.iC();C23.setColumn(C14);C23.setManage(C43);C23.setParent(C12);C23.setRow(C13);C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setAlignment("TOPCENTER");
C23.setFlow("DOWN");C23.iC();C24.setCaption("Badge");C24.setDisplayPosition(1);C24.setParent(this);C24.setTabPosition(1);C24.setThemeDrawStyle("Heading1");C24.setTop(32);C24.setWidth(800);C24.setHeight(44);C24.setCaptionAlignment("TOPLEFT");C24.setWordWrap(true);C24.setLeft(141);C24.setCaptionMarginLeft(16);C24.setCaptionMarginRight(16);C24.iC();C25.setDisplayPosition(2);C25.setParent(this);C25.setTabPosition(2);C25.setThemeDrawStyle("Heading3");C25.setTop(92);C25.setWidth(800);C25.setHeight(62);
C25.setCaptionAlignment("TOPLEFT");C25.setWordWrap(true);C25.setLeft(141);C25.setCaptionMarginLeft(16);C25.setCaptionMarginRight(16);C25.setCaption("Badges are UI elements used as notifications. Generally they are a number or an icon detailing some extra information about the element they are attached to. A common usage is used to emphasize the number of items. Sample usage can be found in the xMdBadge component.");C25.iC();C26.setCaption("Mailbox");C26.setDisplayPosition(3);C26.setLeft(491);C26.setParent(this);
C26.setTabPosition(3);C26.setTabStop(false);C26.setTop(186);C26.setIcon("email");C26.setThemeDrawStyle("ForegroundMediumPrimary");C26.iC();C27.setCaption("4 New");C27.setParent(C26);C27.setDisplayPosition(1);C27.setHeight(21);C27.setLeft(58);C27.setTabPosition(1);C27.setTop(-10);C27.setWidth(52);C27.iC();C28.setDisplayPosition(4);C28.setLeft(141);C28.setParent(this);C28.setTabPosition(4);C28.setTabStop(false);C28.setHeight(505);C28.setWidth(800);C28.setImageAlignment("TOPLEFT");C28.setLayoutManager(C12);
C28.setTop(272);C28.iC();C29.setCaption("Menu Badges");C29.setDisplayPosition(2);C29.setLeft(16);C29.setParent(C28);C29.setTabPosition(1);C29.setThemeDrawStyle("Heading3");C29.setTop(63);C29.setWidth(768);C29.setWordWrap(true);C29.setCaptionMarginTop(20);C29.setHeight(62);C29.setCaptionAlignment("TOPLEFT");C29.setPaddingBottom(20);C29.iC();C30.setCaption("Badges can be used in a variety of situations. Here are some common examples");C30.setDisplayPosition(1);C30.setLeft(0);C30.setParent(C28);C30.setTabPosition(2);
C30.setThemeDrawStyle("Heading3+TopDivider");C30.setTop(0);C30.setWidth(800);C30.setWordWrap(true);C30.setCaptionMarginTop(20);C30.setHeight(63);C30.setCaptionAlignment("TOPLEFT");C30.setCaptionMarginLeft(20);C30.setCaptionMarginRight(20);C30.setPaddingBottom(20);C30.iC();C31.setBadgeAlignment("CENTERRIGHT");C31.setBadgeMarginRight(10);C31.setBadgeMarginTop(0);C31.setCaption("4");C31.setDisplayPosition(1);C31.setHeight(21);C31.setLeft(296);C31.setTabPosition(1);C31.setTop(15);C31.setWidth(20);C31.setStyle(C1);
C31.setParent(C39);C31.iC();C32.setCaption("55");C32.setDisplayPosition(1);C32.setHeight(21);C32.setLeft(288);C32.setParent(C40);C32.setTabPosition(1);C32.setTop(15);C32.setWidth(28);C32.setBadgeAlignment("CENTERRIGHT");C32.setBadgeMarginRight(10);C32.setBadgeMarginTop(0);C32.iC();C33.setDisplayPosition(5);C33.setParent(C28);C33.setTabPosition(5);C33.setWidth(328);C33.setIcon("menu");C33.setLeft(236);C33.setTop(352);C33.iC();C34.setCaption("Mail");C34.setDisplayPosition(1);C34.setIcon("mail");C34.setLeft(192);
C34.setParent(C33);C34.setTabPosition(2);C34.setCaptionAlignment("TOPCENTER");C34.setIconAlignment("ABOVECAPTION");C34.setHeight(44);C34.setCaptionMarginBottom(0);C34.setCaptionMarginLeft(0);C34.setCaptionMarginRight(0);C34.setCaptionMarginTop(0);C34.setIconMarginTop(2);C34.setWidth(49);C34.iC();C35.setCaption("Account");C35.setDisplayPosition(2);C35.setIcon("settings");C35.setLeft(256);C35.setParent(C33);C35.setTabPosition(1);C35.setCaptionAlignment("TOPCENTER");C35.setIconAlignment("ABOVECAPTION");
C35.setHeight(44);C35.setCaptionMarginBottom(0);C35.setCaptionMarginLeft(0);C35.setCaptionMarginRight(0);C35.setCaptionMarginTop(0);C35.setIconMarginTop(2);C35.setWidth(57);C35.iC();C36.setCaption("12");C36.setParent(C34);C36.setDisplayPosition(1);C36.setHeight(21);C36.setLeft(24);C36.setTabPosition(1);C36.setThemeDrawStyle("MediumAccent");C36.setTop(-7);C36.setWidth(28);C36.setBadgeMarginRight(-3);C36.setBadgeMarginTop(-7);C36.iC();C37.setCaption("3");C37.setParent(C35);C37.setDisplayPosition(1);
C37.setHeight(21);C37.setLeft(34);C37.setTabPosition(1);C37.setThemeDrawStyle("MediumAccent");C37.setWidth(20);C37.setBadgeMarginRight(3);C37.setBadgeMarginTop(-7);C37.setTop(-7);C37.iC();C38.setDisplayPosition(3);C38.setHeight(149);C38.setLeft(236);C38.setParent(C28);C38.setTabPosition(3);C38.setWidth(328);C38.setTop(125);C38.setThemeDrawStyle("Card");C38.setLayoutManager(C20);C38.iC();C39.setCaption("Unread Messages");C39.setDisplayPosition(1);C39.setHeight(50);C39.setIcon("message");C39.setIconOpacity(50);
C39.setLeft(0);C39.setParent(C38);C39.setTabPosition(1);C39.setTop(0);C39.setWidth(326);C39.iC();C40.setCaption("Inbox");C40.setDisplayPosition(2);C40.setHeight(50);C40.setIcon("email");C40.setIconOpacity(50);C40.setLeft(0);C40.setParent(C38);C40.setTabPosition(2);C40.setTop(50);C40.setWidth(326);C40.iC();C41.setCaption("ITEM 3");C41.setDisplayPosition(3);C41.setHeight(50);C41.setIcon("view_quilt");C41.setIconOpacity(50);C41.setLeft(0);C41.setParent(C38);C41.setTabPosition(3);C41.setTop(100);C41.setWidth(326);
C41.iC();C42.setCaption("ITEM4");C42.setDisplayPosition(4);C42.setHeight(50);C42.setIcon("email");C42.setIconOpacity(50);C42.setLeft(0);C42.setParent(C38);C42.setTabPosition(4);C42.setTop(150);C42.setWidth(326);C42.iC();C43.setCaption("App bar badges");C43.setDisplayPosition(4);C43.setLeft(0);C43.setParent(C28);C43.setTabPosition(4);C43.setThemeDrawStyle("Heading3");C43.setTop(290);C43.setWidth(800);C43.setWordWrap(true);C43.setCaptionMarginTop(20);C43.setHeight(62);C43.setCaptionAlignment("TOPLEFT");
C43.setCaptionMarginLeft(20);C43.setCaptionMarginRight(20);C43.setPaddingBottom(20);C43.iC();l.WEB().aH("DEVICECHANGED",this,e1);this.setCaption("Badge");this.setHeight(1148);this.setWidth(1081);this.setDisplayPosition(1);this.setLayoutManager(C3);this.setVerticalScroll(true);this.setTabPosition(1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",61);r.ln=61;{r.ln=63;{var v1=l.WEB().getDevice();if(r.ln=65,l.s.eq(v1,"MOBILE")){r.ln=67;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");
r.ln=68;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=70;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=71;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=73,l.s.eq(v1,"TABLET")){r.ln=75;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=76;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=78;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=79;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=81,l.s.eq(v1,"DESKTOP")){r.ln=83;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=84;m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=86;m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");
r.ln=87;m.LAYOUTMAINCOLUMN3.setWidth(1);}r.ln=89;}}r.ln=91;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.RaisedButton","PRIM_MD.Badge","PRIM_PANL","PRIM_MD.AppBar","PRIM_MD.Menu","PRIM_MD.MenuItem"]});