﻿LANSA.addComponent({id:"XDEMOW_25",nm:"xDemoWebLayoutMenuContent",ot:"wp",tp:"Web Page",de:"2 Column Menu and Content",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("2.2"),c2=l.cDec("1.5");var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{AddItem:{ps:{"MenuText":{pt:"i"},"ContentPanel":
{pt:"i"}}},ActivatePanel:{ps:{"Panel":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_25",Fd);var C0=this.cR("STYLE_3","PRIM_VS","Style");var C1=this.cR("BRUSH_2","PRIM_VS","SolidBrush");var C2=this.cR("STYLE_4","PRIM_VS","Style");var C3=this.cR("BRUSH_3","PRIM_VS","SolidBrush");var C4=this.cR("STYLE_5","PRIM_VS","Style");var C5=this.cR("BRUSH_4","PRIM_VS","SolidBrush");var C6=this.cR("STYLE_6","PRIM_VS","Style");var C7=this.cR("BRUSH_5","PRIM_VS","SolidBrush");var C8=this.cR("STYLE1","PRIM_VS","Style");
var C9=this.cR("STYLE2","PRIM_VS","Style");var C10=this.cR("TABLELAYOUT","PRIM_TBLO");var C11=this.cR("ROW","PRIM_TBLO","Row");var C12=this.cR("ROW_2","PRIM_TBLO","Row");var C13=this.cR("ROW_3","PRIM_TBLO","Row");var C14=this.cR("COLUMN","PRIM_TBLO","Column");var C15=this.cR("COLUMN_2","PRIM_TBLO","Column");var C16=this.cR("LABEL","PRIM_LABL");var C17=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C18=this.cR("LABEL_2","PRIM_LABL");var C19=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C20=this.cR("LIST","PRIM_LIST");
var C21=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");var C22=this.cR("COLUMNXDEMOCAPT","PRIM_LIST","String");var C23=this.cR("REDPANEL","PRIM_PANL");var C24=this.cR("LAYOUTITEM_4","PRIM_TBLO","Item");var C25=this.cR("GREENPANEL","PRIM_PANL");var C26=this.cR("LAYOUTITEM_5","PRIM_TBLO","Item");var C27=this.cR("BLUEPANEL","PRIM_PANL");var C28=this.cR("LAYOUTITEM_6","PRIM_TBLO","Item");var C29=this.cR("YELLOWPANEL","PRIM_PANL");var C30=this.cR("LAYOUTITEM_7","PRIM_TBLO","Item");var C31=this.cR("OPTION3","PRIM_LABL");
var C32=this.cR("LAYOUTITEM_8","PRIM_TBLO","Item");var C33=this.cR("LABEL_4","PRIM_LABL");var C34=this.cR("LAYOUTITEM_9","PRIM_TBLO","Item");var C35=this.cR("OPTION2","PRIM_LABL");var C36=this.cR("LAYOUTITEM_10","PRIM_TBLO","Item");var C37=this.cR("LABEL_6","PRIM_LABL");var C38=this.cR("LAYOUTITEM_11","PRIM_TBLO","Item");var C39=this.cR("OPTION1","PRIM_LABL");var C40=this.cR("LAYOUTITEM_12","PRIM_TBLO","Item");this.cD("GACTIVEPANEL");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("255:0:0");C1.iC();
C2.setBackgroundBrush(C3);C2.iC();C3.setColor("1:158:0");C3.iC();C4.setBackgroundBrush(C5);C4.iC();C5.setColor("0:0:255");C5.iC();C6.setBackgroundBrush(C7);C6.iC();C7.setColor("255:255:0");C7.iC();C8.setFontSize(22);C8.iC();C9.setCursor("HAND");C9.iC();C10.setDividerStyle("GAP");C10.iC();C11.setDisplayPosition(1);C11.setParent(C10);C11.setHeight(60);C11.setUnits("PIXELS");C11.iC();C12.setDisplayPosition(2);C12.setParent(C10);C12.setHeight(c1);C12.iC();C13.setDisplayPosition(3);C13.setParent(C10);
C13.setHeight(60);C13.setUnits("PIXELS");C13.iC();C14.setDisplayPosition(1);C14.setParent(C10);C14.setWidth(299);C14.setUnits("PIXELS");C14.iC();C15.setDisplayPosition(2);C15.setParent(C10);C15.setWidth(c2);C15.iC();C16.setCaption("Header Header Header Header Header Header Header");C16.setDisplayPosition(12);C16.setEllipses("WORD");C16.setLeft(0);C16.setParent(this);C16.setTabPosition(1);C16.setTabStop(false);C16.setTop(0);C16.setVerticalAlignment("CENTER");C16.setHeight(60);C16.setWidth(1200);C16.setThemeDrawStyle("DarkTitle");
C16.setStyle(C8);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C14);C17.setFlow("DOWN");C17.setManage(C16);C17.setParent(C10);C17.setRow(C11);C17.setColumnSpan(2);C17.iC();C18.setCaption("Footer Footer Footer Footer Footer Footer Footer ");C18.setDisplayPosition(1);C18.setEllipses("WORD");C18.setLeft(0);C18.setParent(this);C18.setTabPosition(2);C18.setTabStop(false);C18.setTop(740);C18.setVerticalAlignment("CENTER");C18.setHeight(60);C18.setWidth(1200);C18.setAlignment("CENTER");C18.setThemeDrawStyle("DarkTitle");
C18.setStyle(C8);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C14);C19.setFlow("DOWN");C19.setManage(C18);C19.setParent(C10);C19.setRow(C13);C19.setColumnSpan(2);C19.iC();C20.setDisplayPosition(2);C20.setHeight(676);C20.setLeft(2);C20.setParent(this);C20.setTabPosition(3);C20.setTop(62);C20.setWidth(295);C20.setColumnHeaderHeight(0);C20.setRowHeight(23);C20.setColumnLines(false);C20.setRowLines(false);C20.setThemeDrawStyle("MediumTitle");C20.iC();C21.setColumn(C14);C21.setManage(C20);C21.setParent(C10);
C21.setRow(C12);C21.setMarginTop(2);C21.setMarginBottom(2);C21.setMarginRight(2);C21.setMarginLeft(2);C21.iC();C22.setDisplayPosition(1);C22.setParent(C20);C22.setSource(f.F1);C22.setColumnWidth(1);C22.setColumnUnits("PROPORTION");C22.iC();C23.setDisplayPosition(11);C23.setHeight(676);C23.setLeft(301);C23.setParent(this);C23.setTabPosition(4);C23.setTabStop(false);C23.setTop(62);C23.setWidth(897);C23.setStyle(C0);C23.setVisible(false);C23.iC();C24.setColumn(C15);C24.setManage(C23);C24.setParent(C10);
C24.setRow(C12);C24.setMarginTop(2);C24.setMarginBottom(2);C24.setMarginLeft(2);C24.setMarginRight(2);C24.iC();C25.setDisplayPosition(3);C25.setHeight(676);C25.setLeft(301);C25.setParent(this);C25.setTabPosition(5);C25.setTabStop(false);C25.setTop(62);C25.setWidth(897);C25.setStyle(C2);C25.setVisible(false);C25.iC();C26.setColumn(C15);C26.setManage(C25);C26.setParent(C10);C26.setRow(C12);C26.setMarginTop(2);C26.setMarginBottom(2);C26.setMarginLeft(2);C26.setMarginRight(2);C26.iC();C27.setDisplayPosition(4);
C27.setHeight(676);C27.setLeft(301);C27.setParent(this);C27.setTabPosition(6);C27.setTabStop(false);C27.setTop(62);C27.setWidth(897);C27.setStyle(C4);C27.setVisible(false);C27.iC();C28.setColumn(C15);C28.setManage(C27);C28.setParent(C10);C28.setRow(C12);C28.setMarginTop(2);C28.setMarginBottom(2);C28.setMarginLeft(2);C28.setMarginRight(2);C28.iC();C29.setDisplayPosition(5);C29.setHeight(676);C29.setLeft(301);C29.setParent(this);C29.setTabPosition(7);C29.setTabStop(false);C29.setTop(62);C29.setWidth(897);
C29.setStyle(C6);C29.setVisible(false);C29.iC();C30.setColumn(C15);C30.setManage(C29);C30.setParent(C10);C30.setRow(C12);C30.setMarginTop(2);C30.setMarginBottom(2);C30.setMarginLeft(2);C30.setMarginRight(2);C30.iC();C31.setCaption("Option 3");C31.setDisplayPosition(6);C31.setEllipses("WORD");C31.setLeft(1122);C31.setParent(this);C31.setTabPosition(8);C31.setTabStop(false);C31.setTop(0);C31.setVerticalAlignment("CENTER");C31.setAlignment("CENTER");C31.setHeight(25);C31.setWidth(74);C31.setThemeDrawStyle("DarkTitle");
C31.setMouseOverStyle(C9);C31.iC();C32.setAlignment("TOPRIGHT");C32.setColumn(C15);C32.setFlow("LEFT");C32.setManage(C31);C32.setParent(C10);C32.setRow(C11);C32.setSizing("NONE");C32.setMarginRight(4);C32.iC();C33.setCaption("|");C33.setDisplayPosition(7);C33.setEllipses("WORD");C33.setLeft(1109);C33.setParent(this);C33.setTabPosition(9);C33.setTabStop(false);C33.setTop(0);C33.setVerticalAlignment("CENTER");C33.setAlignment("CENTER");C33.setWidth(13);C33.setHeight(25);C33.iC();C34.setAlignment("TOPRIGHT");
C34.setColumn(C15);C34.setFlow("LEFT");C34.setManage(C33);C34.setParent(C10);C34.setRow(C11);C34.setSizing("NONE");C34.iC();C35.setCaption("Option 2");C35.setDisplayPosition(8);C35.setEllipses("WORD");C35.setLeft(1035);C35.setParent(this);C35.setTabPosition(10);C35.setTabStop(false);C35.setTop(0);C35.setVerticalAlignment("CENTER");C35.setAlignment("CENTER");C35.setHeight(25);C35.setWidth(74);C35.setThemeDrawStyle("DarkTitle");C35.setMouseOverStyle(C9);C35.iC();C36.setAlignment("TOPRIGHT");C36.setColumn(C15);
C36.setFlow("LEFT");C36.setManage(C35);C36.setParent(C10);C36.setRow(C11);C36.setSizing("NONE");C36.iC();C37.setCaption("|");C37.setDisplayPosition(9);C37.setEllipses("WORD");C37.setLeft(1022);C37.setParent(this);C37.setTabPosition(11);C37.setTabStop(false);C37.setTop(0);C37.setVerticalAlignment("CENTER");C37.setAlignment("CENTER");C37.setWidth(13);C37.setHeight(25);C37.iC();C38.setAlignment("TOPRIGHT");C38.setColumn(C15);C38.setFlow("LEFT");C38.setManage(C37);C38.setParent(C10);C38.setRow(C11);C38.setSizing("NONE");
C38.iC();C39.setCaption("Option 1");C39.setDisplayPosition(10);C39.setEllipses("WORD");C39.setLeft(948);C39.setParent(this);C39.setTabPosition(12);C39.setTabStop(false);C39.setTop(0);C39.setVerticalAlignment("CENTER");C39.setAlignment("CENTER");C39.setHeight(25);C39.setWidth(74);C39.setThemeDrawStyle("DarkTitle");C39.setMouseOverStyle(C9);C39.iC();C40.setAlignment("TOPRIGHT");C40.setColumn(C15);C40.setFlow("LEFT");C40.setManage(C39);C40.setParent(C10);C40.setRow(C11);C40.setSizing("NONE");C40.iC();
C20.aH("ITEMGOTFOCUS",this,e2);this.setLayoutManager(C10);this.setTheme(l.THEME().get("2015GRAY"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",58);r.ln=58;{r.ln=61;cO.mthADDITEM.call(this,"Red",m.REDPANEL);r.ln=62;cO.mthADDITEM.call(this,"Yellow",m.YELLOWPANEL);r.ln=63;cO.mthADDITEM.call(this,"Green",m.GREENPANEL);r.ln=64;cO.mthADDITEM.call(this,"Blue",m.BLUEPANEL);}r.ln=66;r.e();};cO.mthADDITEM=function(p0,p1){var f=this.FLD.XDEMOW_25,m=this.REF,r=l.mR(this,cO,"AddItem",68);
var P0=r.cPF("MENUTEXT",Fd.F1.Dc);var P1=r.cPD("CONTENTPANEL");P0.set(p0);P1=p1;r.ln=68;{r.ln=72;f.F1.set(P0.get());r.ln=73;m.LIST.addEntry();r.ln=76;m.LIST.getCurrentItem().setRelatedReference(P1);}r.ln=78;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemGotFocus",81);r.ln=81;{r.ln=83;cO.mthACTIVATEPANEL.call(this,l.cast(m.LIST.getCurrentItem().getRelatedReference(),"PRIM_PANL"));}r.ln=85;r.e();};cO.mthACTIVATEPANEL=function(p0){var m=this.REF,r=l.mR(this,cO,"ActivatePanel",87);
var P0=r.cPD("PANEL");P0=p0;r.ln=87;{r.ln=91;if((m.GACTIVEPANEL!=null)){r.ln=93;m.GACTIVEPANEL.mthFADEOUT(u,u,u);}r.ln=98;this.srGACTIVEPANEL(P0);r.ln=99;m.GACTIVEPANEL.mthFADEIN(u,u);}r.ln=101;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOCAPT"});}cO.srGACTIVEPANEL=function(rn){this.sR("GACTIVEPANEL",rn);};},{rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LABL","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_PANL","PRIM_FLD"],
dp:["PRIM_PANL","PRIM_ANIM"]});