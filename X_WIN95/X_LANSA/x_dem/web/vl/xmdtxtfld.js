﻿LANSA.addComponent({id:"XMDTXTFLD",nm:"xMdTextFields",ot:"wv",tp:"View",de:"Material Design Text Fields",tl:14020008},function(l,oI,u){var rc1=l.cB("xmdimg007.png");var cO=l.rC(oI,{an:"PRIM_VIEW",co:function(){cO.aN.call(this);var C0=this.cR("STYLEBORDER1","PRIM_VS","Style");var C1=this.cR("STYLEWHITETEXT","PRIM_VS","Style");var C2=this.cR("BRUSHWHITE","PRIM_VS","SolidBrush");var C3=this.cR("STYLEGREENLINE","PRIM_VS","Style");var C4=this.cR("LAYOUTMAIN","PRIM_TBLO");var C5=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");
var C6=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C7=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");var C8=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C9=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");var C13=this.cR("LAYOUTMAINITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMAINITEM6","PRIM_TBLO","Item");var C15=this.cR("LAYOUTPANELS","PRIM_TBLO");
var C16=this.cR("LAYOUTPANELSROW1","PRIM_TBLO","Row");var C17=this.cR("LAYOUTPANELSCOLUMN1","PRIM_TBLO","Column");var C18=this.cR("LAYOUTPANELSITEM1","PRIM_TBLO","Item");var C19=this.cR("LAYOUTPANELSITEM7","PRIM_TBLO","Item");var C20=this.cR("LAYOUT2","PRIM_TBLO");var C21=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C22=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C23=this.cR("LAYOUTITEM25","PRIM_TBLO","Item");var C24=this.cR("LAYOUT3","PRIM_TBLO");var C25=this.cR("LAYOUTROW3","PRIM_TBLO","Row");
var C26=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");var C27=this.cR("FLOWLAYOUT1","PRIM_FWLM");var C28=this.cR("FLOWLAYOUT1ITEM1","PRIM_FWLI");var C29=this.cR("FLOWLAYOUT1ITEM2","PRIM_FWLI");var C30=this.cR("LAYOUTPANELSITEM2","PRIM_TBLO","Item");var C31=this.cR("LAYOUTPANELSITEM3","PRIM_TBLO","Item");var C32=this.cR("LABELTITLE","PRIM_MD","Label");var C33=this.cR("LABELSUBTITLE","PRIM_MD","Label");var C34=this.cR("PANELSIMPLE","PRIM_PANL");var C35=this.cR("LABEL8","PRIM_MD","Label");var C36=this.cR("PANEL","PRIM_PANL");
var C37=this.cR("LAYOUT33","PRIM_TBLO");var C38=this.cR("LAYOUT33ROW1","PRIM_TBLO","Row");var C39=this.cR("LAYOUT33COLUMN1","PRIM_TBLO","Column");var C40=this.cR("LAYOUTITEM22","PRIM_TBLO","Item");var C41=this.cR("LAYOUTITEM20","PRIM_FWLI");var C42=this.cR("LAYOUTITEM23","PRIM_TBLO","Item");var C43=this.cR("LAYOUTITEM24","PRIM_TBLO","Item");var C44=this.cR("LAYOUTITEM26","PRIM_TBLO","Item");var C45=this.cR("LAYOUTITEM27","PRIM_FWLI");var C46=this.cR("LAYOUTITEM28","PRIM_TBLO","Item");var C47=this.cR("LAYOUTITEM33","PRIM_TBLO","Item");
var C48=this.cR("LAYOUTITEM34","PRIM_TBLO","Item");var C49=this.cR("LAYOUTITEM15","PRIM_FWLI");var C50=this.cR("LAYOUTITEM31","PRIM_TBLO","Item");var C51=this.cR("LAYOUTITEM35","PRIM_TBLO","Item");var C52=this.cR("LAYOUTITEM36","PRIM_TBLO","Item");var C53=this.cR("LAYOUTITEM38","PRIM_FWLI");var C54=this.cR("LAYOUTITEM39","PRIM_TBLO","Item");var C55=this.cR("LAYOUTITEM41","PRIM_TBLO","Item");var C56=this.cR("LAYOUTITEM42","PRIM_TBLO","Item");var C57=this.cR("LAYOUTITEM7","PRIM_FWLI");var C58=this.cR("LAYOUTITEM19","PRIM_TBLO","Item");
var C59=this.cR("LAYOUT4","PRIM_TBLO");var C60=this.cR("LAYOUTROW4","PRIM_TBLO","Row");var C61=this.cR("LAYOUTCOLUMN4","PRIM_TBLO","Column");var C62=this.cR("LAYOUTITEM32","PRIM_TBLO","Item");var C63=this.cR("LAYOUT5","PRIM_TBLO");var C64=this.cR("LAYOUTROW5","PRIM_TBLO","Row");var C65=this.cR("LAYOUTCOLUMN5","PRIM_TBLO","Column");var C66=this.cR("LAYOUTITEM43","PRIM_TBLO","Item");var C67=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C68=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C69=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C70=this.cR("LAYOUTITEM6","PRIM_FWLI");var C71=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C72=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C73=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C74=this.cR("EDIT2","PRIM_MD","Edit");var C75=this.cR("EDIT3","PRIM_MD","Edit");var C76=this.cR("EDIT7","PRIM_MD","Edit");var C77=this.cR("ERROREDIT","PRIM_MD","Edit");var C78=this.cR("EDIT11","PRIM_MD","Edit");var C79=this.cR("EDIT12","PRIM_MD","Edit");var C80=this.cR("EDIT14","PRIM_MD","Edit");var C81=this.cR("PANEL4","PRIM_PANL");
var C82=this.cR("PANEL5","PRIM_PANL");var C83=this.cR("APPBAR1","PRIM_MD","AppBar");var C84=this.cR("EDIT5","PRIM_MD","Edit");var C85=this.cR("PANEL6","PRIM_PANL");var C86=this.cR("LABEL6","PRIM_MD","Label");var C87=this.cR("LABEL7","PRIM_MD","Label");var C88=this.cR("EDIT1","PRIM_MD","Edit");var C89=this.cR("PANEL1","PRIM_PANL");var C90=this.cR("LABEL88","PRIM_MD","Label");var C91=this.cR("PANEL2","PRIM_PANL");var C92=this.cR("LABEL9","PRIM_MD","Label");var C93=this.cR("PANEL3","PRIM_PANL");var C94=this.cR("LABEL1","PRIM_MD","Label");
var C95=this.cR("PANEL7","PRIM_PANL");var C96=this.cR("EDIT4","PRIM_MD","Edit");var C97=this.cR("EDIT6","PRIM_MD","Edit");var C98=this.cR("EDIT10","PRIM_MD","Edit");var C99=this.cR("EDIT13","PRIM_MD","Edit");var C100=this.cR("PANEL8","PRIM_PANL");var C101=this.cR("LABEL22","PRIM_MD","Label");var C102=this.cR("EDIT9","PRIM_MD","Edit");var C103=this.cR("EDIT15","PRIM_MD","Edit");var C104=this.cR("EDIT","PRIM_MD","Edit");var C105=this.cR("PANELSAMPLES","PRIM_PANL");var C106=this.cR("LABEL3","PRIM_MD","Label");
var C107=this.cR("PANEL9","PRIM_PANL");C0.setBorderBottom(1);C0.setBorderLeft(1);C0.setBorderRight(1);C0.setBorderTop(1);C0.iC();C1.setForegroundBrush(C2);C1.iC();C2.setColor("255:255:255");C2.iC();C3.setLineColor("GREEN");C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.setWidth(12);C6.setMaxWidth(1500);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.iC();C8.setDisplayPosition(1);C8.setParent(C4);C8.iC();C9.setColumn(C6);C9.setManage(C32);
C9.setParent(C4);C9.setRow(C8);C9.setSizing("FITTOWIDTH");C9.setFlow("DOWN");C9.setAlignment("TOPCENTER");C9.setMarginTop(32);C9.iC();C10.setColumn(C6);C10.setManage(C33);C10.setParent(C4);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setRow(C8);C10.setAlignment("TOPCENTER");C10.setFlow("DOWN");C10.setMarginTop(16);C10.setMarginBottom(32);C10.iC();C11.setAlignment("TOPCENTER");C11.setColumn(C6);C11.setManage(C34);C11.setParent(C4);C11.setRow(C8);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");C11.setFlow("DOWN");
C11.setMarginTop(50);C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C6);C12.setManage(C89);C12.setParent(C4);C12.setRow(C8);C12.setSizing("NONE");C12.setFlow("DOWN");C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C6);C13.setManage(C104);C13.setParent(C4);C13.setRow(C8);C13.setSizing("NONE");C13.setFlow("DOWN");C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C6);C14.setManage(C105);C14.setParent(C4);C14.setRow(C8);C14.setSizing("CONTENTHEIGHTFITTOWIDTH");C14.setFlow("DOWN");C14.setMarginTop(50);
C14.iC();C15.iC();C16.setDisplayPosition(1);C16.setParent(C15);C16.iC();C17.setDisplayPosition(1);C17.setParent(C15);C17.iC();C18.setColumn(C17);C18.setManage(C35);C18.setParent(C15);C18.setRow(C16);C18.setSizing("FITTOWIDTH");C18.setAlignment("TOPCENTER");C18.setFlow("DOWN");C18.setMarginLeft(16);C18.setMarginRight(16);C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C17);C19.setManage(C36);C19.setParent(C15);C19.setRow(C16);C19.setSizing("CONTENTHEIGHTFITTOWIDTH");C19.setFlow("DOWN");C19.iC();
C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.iC();C22.setDisplayPosition(1);C22.setParent(C20);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C22);C23.setManage(C33);C23.setParent(C20);C23.setRow(C21);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");C23.setMarginLeft(55);C23.setMarginTop(5);C23.iC();C24.iC();C25.setDisplayPosition(1);C25.setParent(C24);C25.iC();C26.setDisplayPosition(1);C26.setParent(C24);C26.iC();C27.setMarginBottom(16);C27.setMarginLeft(16);C27.setMarginRight(16);
C27.setMarginTop(16);C27.setSpacingItems(30);C27.setFlowOperationHor("CENTER");C27.setSpacing(30);C27.iC();C28.setManage(C81);C28.setParent(C27);C28.iC();C29.setManage(C82);C29.setParent(C27);C29.iC();C30.setColumn(C17);C30.setManage(C106);C30.setParent(C15);C30.setRow(C16);C30.setSizing("CONTENTHEIGHTFITTOWIDTH");C30.setAlignment("TOPCENTER");C30.setFlow("DOWN");C30.iC();C31.setAlignment("TOPCENTER");C31.setColumn(C17);C31.setManage(C107);C31.setParent(C15);C31.setRow(C16);C31.setSizing("CONTENTHEIGHTFITTOWIDTH");
C31.setFlow("DOWN");C31.iC();C32.setCaption("Text Fields");C32.setDisplayPosition(1);C32.setParent(this);C32.setTabPosition(1);C32.setThemeDrawStyle("Heading1");C32.setTop(32);C32.setWidth(1034);C32.setHeight(44);C32.setCaptionAlignment("TOPLEFT");C32.setWordWrap(true);C32.setLeft(87);C32.setCaptionMarginLeft(16);C32.setCaptionMarginRight(16);C32.iC();C33.setDisplayPosition(2);C33.setParent(this);C33.setTabPosition(2);C33.setThemeDrawStyle("Heading3");C33.setTop(92);C33.setWidth(1034);C33.setHeight(24);
C33.setCaptionAlignment("TOPLEFT");C33.setWordWrap(true);C33.setLeft(87);C33.setCaptionMarginLeft(16);C33.setCaptionMarginRight(16);C33.setCaption("Text fields allow users to input, edit, and select text. Sample usage can be found in the xMdTextFields component.");C33.iC();C34.setDisplayPosition(4);C34.setLeft(87);C34.setParent(this);C34.setTabPosition(5);C34.setTabStop(false);C34.setHeight(824);C34.setWidth(1034);C34.setImageAlignment("TOPLEFT");C34.setLayoutManager(C15);C34.setTop(273);C34.iC();
C35.setCaption("Simple Text Fields");C35.setDisplayPosition(1);C35.setLeft(16);C35.setParent(C34);C35.setTabPosition(1);C35.setThemeDrawStyle("TopDivider+Heading3");C35.setTop(0);C35.setWidth(1002);C35.setWordWrap(true);C35.setCaptionMarginTop(20);C35.setHeight(62);C35.setCaptionAlignment("TOPLEFT");C35.setPaddingBottom(20);C35.iC();C36.setDisplayPosition(2);C36.setLeft(0);C36.setParent(C34);C36.setTabPosition(2);C36.setTabStop(false);C36.setTop(62);C36.setWidth(1034);C36.setLayoutManager(C27);C36.setHeight(762);
C36.iC();C37.setMarginBottom(20);C37.iC();C38.setDisplayPosition(1);C38.setParent(C37);C38.iC();C39.setDisplayPosition(1);C39.setParent(C37);C39.iC();C40.setColumn(C39);C40.setManage(C83);C40.setParent(C37);C40.setRow(C38);C40.setSizing("FITTOWIDTH");C40.setAlignment("TOPCENTER");C40.iC();C41.setManage(C85);C41.setParent(C27);C41.iC();C42.setColumn(C39);C42.setManage(C86);C42.setParent(C37);C42.setRow(C38);C42.setSizing("CONTENTHEIGHTFITTOWIDTH");C42.setAlignment("TOPCENTER");C42.setFlow("DOWN");
C42.iC();C43.setAlignment("TOPCENTER");C43.setColumn(C39);C43.setManage(C87);C43.setParent(C37);C43.setRow(C38);C43.setSizing("CONTENTHEIGHTFITTOWIDTH");C43.setFlow("DOWN");C43.iC();C44.setColumn(C39);C44.setManage(C88);C44.setParent(C37);C44.setRow(C38);C44.setSizing("FITTOWIDTH");C44.setAlignment("TOPCENTER");C44.setFlow("DOWN");C44.setMarginBottom(20);C44.setMarginLeft(20);C44.setMarginRight(20);C44.setMarginTop(20);C44.iC();C45.setManage(C89);C45.setParent(C27);C45.iC();C46.setColumn(C39);C46.setManage(C90);
C46.setParent(C37);C46.setRow(C38);C46.setSizing("CONTENTHEIGHTFITTOWIDTH");C46.setAlignment("TOPCENTER");C46.setFlow("DOWN");C46.iC();C47.setAlignment("TOPCENTER");C47.setColumn(C39);C47.setManage(C74);C47.setParent(C37);C47.setRow(C38);C47.setSizing("FITTOWIDTH");C47.setFlow("DOWN");C47.setMarginLeft(20);C47.setMarginRight(20);C47.setMarginTop(10);C47.iC();C48.setAlignment("TOPCENTER");C48.setColumn(C39);C48.setManage(C75);C48.setParent(C37);C48.setRow(C38);C48.setSizing("FITTOWIDTH");C48.setFlow("DOWN");
C48.setMarginLeft(20);C48.setMarginRight(20);C48.setMarginTop(10);C48.iC();C49.setManage(C91);C49.setParent(C27);C49.iC();C50.setColumn(C39);C50.setManage(C92);C50.setParent(C37);C50.setRow(C38);C50.setSizing("CONTENTHEIGHTFITTOWIDTH");C50.setAlignment("TOPCENTER");C50.setFlow("DOWN");C50.iC();C51.setAlignment("TOPCENTER");C51.setColumn(C39);C51.setManage(C77);C51.setParent(C37);C51.setRow(C38);C51.setSizing("FITTOWIDTH");C51.setFlow("DOWN");C51.setMarginLeft(20);C51.setMarginRight(20);C51.setMarginTop(10);
C51.iC();C52.setAlignment("TOPCENTER");C52.setColumn(C39);C52.setManage(C76);C52.setParent(C37);C52.setRow(C38);C52.setSizing("FITTOWIDTH");C52.setFlow("DOWN");C52.setMarginLeft(20);C52.setMarginRight(20);C52.setMarginTop(10);C52.iC();C53.setManage(C93);C53.setParent(C27);C53.iC();C54.setColumn(C39);C54.setManage(C94);C54.setParent(C37);C54.setRow(C38);C54.setSizing("CONTENTHEIGHTFITTOWIDTH");C54.setAlignment("TOPCENTER");C54.setFlow("DOWN");C54.iC();C55.setAlignment("TOPCENTER");C55.setColumn(C39);
C55.setManage(C79);C55.setParent(C37);C55.setRow(C38);C55.setSizing("FITTOWIDTH");C55.setFlow("DOWN");C55.setMarginLeft(20);C55.setMarginRight(20);C55.setMarginTop(10);C55.iC();C56.setAlignment("TOPCENTER");C56.setColumn(C39);C56.setManage(C78);C56.setParent(C37);C56.setRow(C38);C56.setSizing("FITTOWIDTH");C56.setFlow("DOWN");C56.setMarginLeft(20);C56.setMarginRight(20);C56.setMarginTop(10);C56.iC();C57.setManage(C95);C57.setParent(C27);C57.iC();C58.setColumn(C39);C58.setManage(C96);C58.setParent(C37);
C58.setRow(C38);C58.setSizing("FITTOWIDTH");C58.setAlignment("TOPCENTER");C58.setFlow("DOWN");C58.setMarginLeft(20);C58.setMarginRight(20);C58.setMarginTop(10);C58.iC();C59.iC();C60.setDisplayPosition(1);C60.setParent(C59);C60.iC();C61.setDisplayPosition(1);C61.setParent(C59);C61.iC();C62.setColumn(C61);C62.setManage(C84);C62.setParent(C59);C62.setRow(C60);C62.iC();C63.iC();C64.setDisplayPosition(1);C64.setParent(C63);C64.iC();C65.setDisplayPosition(1);C65.setParent(C63);C65.iC();C66.setColumn(C65);
C66.setManage(C80);C66.setParent(C63);C66.setRow(C64);C66.setSizing("FITTOWIDTH");C66.setAlignment("TOPCENTER");C66.setMarginLeft(15);C66.setMarginRight(15);C66.setMarginTop(15);C66.iC();C67.setColumn(C39);C67.setManage(C97);C67.setParent(C37);C67.setRow(C38);C67.setSizing("FITTOWIDTH");C67.setAlignment("TOPCENTER");C67.setFlow("DOWN");C67.setMarginLeft(20);C67.setMarginRight(20);C67.setMarginTop(5);C67.iC();C68.setColumn(C39);C68.setManage(C98);C68.setParent(C37);C68.setRow(C38);C68.setSizing("FITTOWIDTH");
C68.setAlignment("TOPCENTER");C68.setFlow("DOWN");C68.setMarginLeft(20);C68.setMarginRight(20);C68.setMarginTop(5);C68.iC();C69.setColumn(C39);C69.setManage(C99);C69.setParent(C37);C69.setRow(C38);C69.setSizing("FITTOWIDTH");C69.setAlignment("TOPCENTER");C69.setFlow("DOWN");C69.setMarginLeft(20);C69.setMarginRight(20);C69.setMarginTop(5);C69.iC();C70.setManage(C100);C70.setParent(C27);C70.setSizing("CONTENTHEIGHT");C70.iC();C71.setColumn(C39);C71.setManage(C101);C71.setParent(C37);C71.setRow(C38);
C71.setSizing("CONTENTHEIGHTFITTOWIDTH");C71.setAlignment("TOPCENTER");C71.setFlow("DOWN");C71.iC();C72.setColumn(C39);C72.setManage(C102);C72.setParent(C37);C72.setRow(C38);C72.setSizing("CONTENTHEIGHTFITTOWIDTH");C72.setAlignment("TOPCENTER");C72.setFlow("DOWN");C72.setMarginBottom(5);C72.setMarginLeft(20);C72.setMarginRight(20);C72.setMarginTop(20);C72.iC();C73.setColumn(C39);C73.setManage(C103);C73.setParent(C37);C73.setRow(C38);C73.setSizing("CONTENTHEIGHTFITTOWIDTH");C73.setAlignment("TOPCENTER");
C73.setFlow("DOWN");C73.setMarginBottom(20);C73.setMarginLeft(20);C73.setMarginRight(20);C73.setMarginTop(5);C73.iC();C74.setDisplayPosition(2);C74.setCaption("Label");C74.setParent(C89);C74.setTabPosition(2);C74.setHeight(83);C74.setWidth(288);C74.setLeft(20);C74.setTop(91);C74.iC();C75.setDisplayPosition(3);C75.setCaption("Label");C75.setLeft(20);C75.setParent(C89);C75.setTabPosition(3);C75.setTop(184);C75.setHeight(83);C75.setWidth(288);C75.setHelperText("Help text");C75.setPlaceholder("Placeholder");
C75.iC();C76.setDisplayPosition(3);C76.setCaption("Field Label");C76.setLeft(20);C76.setParent(C91);C76.setTabPosition(3);C76.setHeight(83);C76.setWidth(288);C76.setHelperText("Required Field (*)");C76.setTop(184);C76.setStyle(C3);C76.iC();C77.setDisplayPosition(2);C77.setCaption("Text field");C77.setParent(C91);C77.setTabPosition(2);C77.setHeight(83);C77.setWidth(288);C77.setLeft(20);C77.setTop(91);C77.iC();C78.setDisplayPosition(2);C78.setCaption("Text field");C78.setParent(C93);C78.setTabPosition(2);
C78.setHeight(83);C78.setWidth(288);C78.setIcon("person");C78.setIconOpacity(54);C78.setLeft(20);C78.setTop(91);C78.iC();C79.setDisplayPosition(3);C79.setCaption("Field Label");C79.setLeft(20);C79.setParent(C93);C79.setTabPosition(3);C79.setHeight(83);C79.setWidth(288);C79.setHelperText("Help text");C79.setPlaceholder("Placeholder");C79.setIcon("fa-star");C79.setIconColor("255:128:0");C79.setPromptIcon("search");C79.setPromptIconOpacity(54);C79.setTop(184);C79.iC();C80.setDisplayPosition(1);C80.setParent(C81);
C80.setTabPosition(1);C80.setTop(15);C80.setHeight(50);C80.setWidth(298);C80.setCaptionPosition("NONE");C80.setAppearance("EDITBOX");C80.setIcon("search");C80.setPromptIconOpacity(54);C80.setPlaceholder("Search");C80.setLeft(15);C80.setHelperPosition("NONE");C80.setThemeDrawStyle("Heading1");C80.iC();C81.setDisplayPosition(5);C81.setLeft(352);C81.setParent(C107);C81.setTabPosition(5);C81.setTabStop(false);C81.setImage(rc1);C81.setHeight(350);C81.setWidth(330);C81.setImageAlignment("TOPLEFT");C81.setTop(776);
C81.setStyle(C0);C81.setLayoutManager(C63);C81.iC();C82.setDisplayPosition(4);C82.setLeft(532);C82.setParent(C107);C82.setTabPosition(4);C82.setTabStop(false);C82.setHeight(350);C82.setWidth(330);C82.setImageAlignment("TOPLEFT");C82.setLayoutManager(C37);C82.setStyle(C0);C82.setTop(396);C82.iC();C83.setDisplayPosition(1);C83.setParent(C82);C83.setLayoutManager(C59);C83.setTabPosition(1);C83.setWidth(328);C83.iC();C84.setDisplayPosition(1);C84.setParent(C83);C84.setTabPosition(1);C84.setTop(0);C84.setHeight(56);
C84.setWidth(328);C84.setCaptionPosition("NONE");C84.setAppearance("NONE");C84.setIcon("search");C84.setPlaceholder("Search");C84.setLeft(0);C84.setPromptIcon("close");C84.setThemeDrawStyle("Heading1");C84.setStyle(C1);C84.setPlaceholderColor("WHITE");C84.setHelperPosition("NONE");C84.iC();C85.setDisplayPosition(3);C85.setLeft(172);C85.setParent(C107);C85.setTabPosition(3);C85.setTabStop(false);C85.setHeight(350);C85.setWidth(330);C85.setImageAlignment("TOPLEFT");C85.setLayoutManager(C37);C85.setStyle(C0);
C85.setTop(396);C85.iC();C86.setCaption("Single-line text field box appearance");C86.setDisplayPosition(1);C86.setLeft(0);C86.setParent(C85);C86.setTabPosition(1);C86.setThemeDrawStyle("Title");C86.setTop(0);C86.setWidth(328);C86.setWordWrap(true);C86.setCaptionMarginTop(20);C86.setHeight(149);C86.setCaptionAlignment("TOPLEFT");C86.setCaptionMarginLeft(20);C86.setCaptionMarginRight(20);C86.iC();C87.setCaption("Text field boxes use color to increase the discoverability of the field");C87.setDisplayPosition(2);
C87.setLeft(0);C87.setParent(C85);C87.setTabPosition(2);C87.setThemeDrawStyle("ForegroundThemeSecondary");C87.setTop(149);C87.setHeight(66);C87.setWidth(328);C87.setCaptionAlignment("TOPLEFT");C87.setCaptionMarginTop(20);C87.setCaptionMarginLeft(20);C87.setCaptionMarginRight(20);C87.setWordWrap(true);C87.setPaddingBottom(10);C87.iC();C88.setDisplayPosition(3);C88.setCaption("Label");C88.setLeft(20);C88.setParent(C85);C88.setTabPosition(3);C88.setTop(235);C88.setWidth(288);C88.setAppearance("TEXTFIELDBOX");
C88.setHeight(55);C88.setHelperPosition("NONE");C88.iC();C89.setDisplayPosition(1);C89.setLeft(172);C89.setParent(C36);C89.setTabPosition(1);C89.setTabStop(false);C89.setHeight(350);C89.setWidth(330);C89.setImageAlignment("TOPLEFT");C89.setLayoutManager(C37);C89.setStyle(C0);C89.setTop(16);C89.iC();C90.setCaption("Fields can contain Labels, Placeholders and Help text");C90.setDisplayPosition(1);C90.setLeft(0);C90.setParent(C89);C90.setTabPosition(1);C90.setThemeDrawStyle("Heading3");C90.setTop(0);
C90.setWidth(328);C90.setWordWrap(true);C90.setCaptionMarginTop(20);C90.setHeight(81);C90.setCaptionAlignment("TOPLEFT");C90.setCaptionMarginLeft(20);C90.setCaptionMarginRight(20);C90.setPaddingBottom(20);C90.iC();C91.setDisplayPosition(2);C91.setLeft(532);C91.setParent(C36);C91.setTabPosition(2);C91.setTabStop(false);C91.setHeight(350);C91.setWidth(330);C91.setImageAlignment("TOPLEFT");C91.setLayoutManager(C37);C91.setStyle(C0);C91.setTop(16);C91.iC();C92.setCaption("Fields can display color for hilighting information");
C92.setDisplayPosition(1);C92.setLeft(0);C92.setParent(C91);C92.setTabPosition(1);C92.setThemeDrawStyle("Heading3");C92.setTop(0);C92.setWidth(328);C92.setWordWrap(true);C92.setCaptionMarginTop(20);C92.setHeight(81);C92.setCaptionAlignment("TOPLEFT");C92.setCaptionMarginLeft(20);C92.setCaptionMarginRight(20);C92.setPaddingBottom(20);C92.iC();C93.setDisplayPosition(3);C93.setLeft(352);C93.setParent(C36);C93.setTabPosition(3);C93.setTabStop(false);C93.setHeight(350);C93.setWidth(330);C93.setImageAlignment("TOPLEFT");
C93.setLayoutManager(C37);C93.setStyle(C0);C93.setTop(396);C93.iC();C94.setCaption("Icons and Prompt Icons are also available");C94.setDisplayPosition(1);C94.setLeft(0);C94.setParent(C93);C94.setTabPosition(1);C94.setThemeDrawStyle("Heading3");C94.setTop(0);C94.setWidth(328);C94.setWordWrap(true);C94.setCaptionMarginTop(20);C94.setHeight(81);C94.setCaptionAlignment("TOPLEFT");C94.setCaptionMarginLeft(20);C94.setCaptionMarginRight(20);C94.setPaddingBottom(20);C94.iC();C95.setDisplayPosition(2);C95.setLeft(532);
C95.setParent(C107);C95.setTabPosition(2);C95.setTabStop(false);C95.setHeight(350);C95.setWidth(330);C95.setImageAlignment("TOPLEFT");C95.setLayoutManager(C37);C95.setStyle(C0);C95.setTop(16);C95.iC();C96.setDisplayPosition(1);C96.setCaption("Name");C96.setLeft(20);C96.setParent(C95);C96.setTabPosition(1);C96.setWidth(288);C96.setAppearance("TEXTFIELDAREABOX");C96.setHeight(55);C96.setHelperPosition("NONE");C96.iC();C97.setDisplayPosition(2);C97.setCaption("Message");C97.setLeft(20);C97.setParent(C95);
C97.setTabPosition(2);C97.setTop(70);C97.setWidth(288);C97.setAppearance("TEXTFIELDAREABOX");C97.setHeight(145);C97.setMultiLine(true);C97.setHelperPosition("NONE");C97.iC();C98.setDisplayPosition(3);C98.setCaption("Phone");C98.setLeft(20);C98.setParent(C95);C98.setTabPosition(3);C98.setTop(220);C98.setWidth(288);C98.setAppearance("TEXTFIELDAREABOX");C98.setHeight(55);C98.setHelperPosition("NONE");C98.iC();C99.setDisplayPosition(4);C99.setCaption("Email address");C99.setLeft(20);C99.setParent(C95);
C99.setTabPosition(4);C99.setTop(280);C99.setWidth(288);C99.setAppearance("TEXTFIELDAREABOX");C99.setHeight(55);C99.setHelperPosition("NONE");C99.iC();C100.setDisplayPosition(1);C100.setLeft(172);C100.setParent(C107);C100.setTabPosition(1);C100.setTabStop(false);C100.setHeight(275);C100.setWidth(330);C100.setImageAlignment("TOPLEFT");C100.setLayoutManager(C37);C100.setStyle(C0);C100.setTop(16);C100.iC();C101.setCaption("Variable Height field box");C101.setDisplayPosition(1);C101.setLeft(0);C101.setParent(C100);
C101.setTabPosition(1);C101.setThemeDrawStyle("Title");C101.setTop(0);C101.setWidth(328);C101.setWordWrap(true);C101.setCaptionMarginTop(20);C101.setHeight(107);C101.setCaptionAlignment("TOPLEFT");C101.setCaptionMarginLeft(20);C101.setCaptionMarginRight(20);C101.iC();C102.setDisplayPosition(2);C102.setCaption("Label");C102.setLeft(20);C102.setParent(C100);C102.setTabPosition(2);C102.setTop(127);C102.setWidth(288);C102.setAppearance("TEXTFIELDAREABOX");C102.setMultiLine(true);C102.setHeight(58);C102.setHelperPosition("NONE");
C102.iC();C103.setDisplayPosition(3);C103.setCaption("Label");C103.setLeft(20);C103.setParent(C100);C103.setTabPosition(3);C103.setTop(195);C103.setWidth(288);C103.setAppearance("TEXTFIELDAREABOX");C103.setMultiLine(true);C103.setHeight(58);C103.setHelperPosition("NONE");C103.iC();C104.setAppearance("TEXTFIELDBOX");C104.setCaption("Caption");C104.setDisplayPosition(3);C104.setLeft(504);C104.setParent(this);C104.setTabPosition(3);C104.setTop(148);C104.iC();C105.setDisplayPosition(5);C105.setLeft(87);
C105.setParent(this);C105.setTabPosition(4);C105.setTabStop(false);C105.setWidth(1034);C105.setImageAlignment("TOPLEFT");C105.setLayoutManager(C15);C105.setTop(1147);C105.setHeight(1205);C105.iC();C106.setCaption("More examples");C106.setDisplayPosition(1);C106.setLeft(0);C106.setParent(C105);C106.setTabPosition(1);C106.setThemeDrawStyle("Heading3+TopDivider");C106.setTop(0);C106.setWidth(1034);C106.setWordWrap(true);C106.setCaptionMarginTop(20);C106.setHeight(63);C106.setCaptionAlignment("TOPLEFT");
C106.setCaptionMarginLeft(20);C106.setCaptionMarginRight(20);C106.setPaddingBottom(20);C106.iC();C107.setDisplayPosition(2);C107.setLeft(0);C107.setParent(C105);C107.setTabPosition(2);C107.setTabStop(false);C107.setTop(63);C107.setWidth(1034);C107.setLayoutManager(C27);C107.setHeight(1142);C107.iC();l.WEB().aH("DEVICECHANGED",this,e4);C79.aH("PROMPTING",this,e2);C84.aH("PROMPTING",this,e1);this.setCaption("Text Fields");this.setHeight(1148);this.setWidth(1225);this.setDisplayPosition(1);this.setLayoutManager(C4);
this.setVerticalScroll(true);this.setTabPosition(1);this.aH("CREATEINSTANCE",this,e3);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Edit5.Prompting",132);r.ln=132;{r.ln=134;m.EDIT5.setValue("");}r.ln=136;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Edit12.Prompting",138);var C0=r.cR("DIALOG","XMDDLG05");C0.iC();r.ln=138;{r.ln=142;C0.setThemeBackground("DARK");r.ln=143;C0.mthALERT("Prompt icon clicked",3000);}r.ln=145;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",147);
r.ln=147;{r.ln=149;m.ERROREDIT.mthSHOWERROR("Error: Text explaining the error");}r.ln=151;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",153);r.ln=153;{r.ln=155;{var v1=l.WEB().getDevice();if(r.ln=157,l.s.eq(v1,"MOBILE")){r.ln=159;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=160;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=162;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=163;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=165,l.s.eq(v1,"TABLET")){r.ln=167;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");
r.ln=168;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=170;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=171;m.LAYOUTMAINCOLUMN3.setWidth(0);}else if(r.ln=173,l.s.eq(v1,"DESKTOP")){r.ln=175;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=176;m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=178;m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");r.ln=179;m.LAYOUTMAINCOLUMN3.setWidth(1);}r.ln=181;}}r.ln=183;r.e();};},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_FWLM","PRIM_FWLI","PRIM_MD.Label","PRIM_PANL","PRIM_MD.Edit","PRIM_MD.AppBar"],
dc:["XMDDLG05"]});