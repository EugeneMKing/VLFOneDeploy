﻿LANSA.addComponent({id:"XMDDLG02",nm:"xMdDialog2",ot:"wv",tp:"Dialog",de:"Material Design Dialog",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C2=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C5=this.cR("BUTTON","PRIM_MD","FlatButton");var C6=this.cR("BUTTON1","PRIM_MD","FlatButton");
var C7=this.cR("LABEL1","PRIM_MD","Label");var C8=this.cR("LABEL2","PRIM_MD","Label");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("BOTTOMRIGHT");C3.setColumn(C2);C3.setManage(C5);C3.setParent(C0);C3.setRow(C1);C3.setSizing("NONE");C3.setFlow("LEFT");C3.setMarginBottom(10);C3.setMarginRight(10);C3.iC();C4.setAlignment("BOTTOMRIGHT");C4.setColumn(C2);C4.setManage(C6);C4.setParent(C0);C4.setRow(C1);C4.setSizing("NONE");C4.setFlow("LEFT");
C4.setMarginBottom(10);C4.setMarginRight(10);C4.iC();C5.setCaption("AGREE");C5.setDisplayPosition(1);C5.setLeft(177);C5.setParent(this);C5.setTabPosition(2);C5.setTabStop(false);C5.setThemeDrawStyle("ForegroundMediumPrimary");C5.setTop(233);C5.iC();C6.setCaption("DISAGREE");C6.setDisplayPosition(2);C6.setLeft(67);C6.setParent(this);C6.setTabPosition(4);C6.setTabStop(false);C6.setThemeDrawStyle("ForegroundMediumPrimary");C6.setTop(233);C6.iC();C7.setCaption("Use Google's location service?");C7.setDisplayPosition(3);
C7.setLeft(0);C7.setParent(this);C7.setTabPosition(3);C7.setTabStop(false);C7.setThemeDrawStyle("Heading1+Strong");C7.setTop(0);C7.setWidth(281);C7.setWordWrap(true);C7.setCaptionMarginTop(20);C7.setHeight(89);C7.setCaptionAlignment("TOPLEFT");C7.setCaptionMarginLeft(20);C7.setCaptionMarginRight(20);C7.setPaddingBottom(10);C7.iC();C8.setCaption("Let apps use Google's location service to estimate your location faster. Anonymous location data will be collected and sent to Google");C8.setDisplayPosition(4);
C8.setLeft(8);C8.setParent(this);C8.setTabPosition(1);C8.setTabStop(false);C8.setThemeDrawStyle("Heading3+ForegroundSecondary");C8.setTop(80);C8.setWidth(273);C8.setWordWrap(true);C8.setCaptionMarginTop(20);C8.setHeight(129);C8.setCaptionAlignment("TOPLEFT");C8.setCaptionMarginLeft(20);C8.setCaptionMarginRight(20);C8.setPaddingBottom(10);C8.iC();C5.aH("CLICK",this,e2);C6.aH("CLICK",this,e1);this.setLayoutManager(C0);this.setHeight(281);this.setWidth(289);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Button1.Click",14);
r.ln=14;{r.ln=16;this.mthCLOSE();}r.ln=18;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Button.Click",20);r.ln=20;{r.ln=22;this.mthCLOSE();}r.ln=24;r.e();};},{rp:["PRIM_DLG","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_MD.FlatButton","PRIM_MD.Label"]});