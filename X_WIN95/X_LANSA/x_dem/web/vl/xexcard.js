﻿LANSA.addComponent({id:"XEXCARD",nm:"XEXCard",ot:"rp",tp:"Reusable Part",de:"Card",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?","LLL":"Std Integer"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?","LLL":"Integer"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?","LLL":"Standard Integer field"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard","JPN":"Standard TEXT","LLL":"Standard TEXT"}[cL],dv:"",ia:["LC"],vr:[{wt:"E",wf:"N",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Text must be specified","FRA":"Texte must be specified","JPN":"Text must be specified","LLL":"Text must be specified"}[cL]}]},F3:{nm:"XEXEXPE_4",
an:"XEXExpenseAmount",ft:"P",ln:9,dc:2,lb:"Expense Manager",h1:"Expense",h2:"Manager",h3:"-",de:"Expense Manager - Amount Field",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TREE.ITreeDesign"],fd:Fd,pt:{Caption:{da:"na"},Identifier:{da:"rw"},CardType:{da:"rw"}},mt:{AddExpense:{ps:{"Expense":{pt:"i"}}},OnAdd:{ps:{"TreeItem":{pt:"i"}}},OnSort:{ps:{"TreeItem":{pt:"i"},"CompareTo":{pt:"i"},"Key":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XEXCARD",Fd);var C0=this.cR("STYLECARD","PRIM_VS","Style");
var C1=this.cR("STYLECAPTION","PRIM_VS","Style");var C2=this.cR("STYLEHEADER","PRIM_VS","Style");var C3=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C4=this.cR("BRUSHHEADER","PRIM_VS","SolidBrush");var C5=this.cR("LAYOUTMAIN","PRIM_TBLO");var C6=this.cR("ROW1MAIN","PRIM_TBLO","Row");var C7=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");var C8=this.cR("ITEM1MAIN","PRIM_TBLO","Item");var C9=this.cR("LAYOUTCARD","PRIM_TBLO");var C10=this.cR("COLUMN1CARD","PRIM_TBLO","Column");var C11=this.cR("ROW1CARD","PRIM_TBLO","Row");
var C12=this.cR("ROW2CARD","PRIM_TBLO","Row");var C13=this.cR("ITEM1CARD","PRIM_TBLO","Item");var C14=this.cR("ITEM2CARD","PRIM_TBLO","Item");var C15=this.cR("ITEM3CARD","PRIM_TBLO","Item");var C16=this.cR("ITEM4CARD","PRIM_TBLO","Item");var C17=this.cR("LAYOUTCARDHEADER","PRIM_TBLO");var C18=this.cR("COLUMN1CARDHEADER","PRIM_TBLO","Column");var C19=this.cR("ROW1CARDHEADER","PRIM_TBLO","Row");var C20=this.cR("ITEM1CARDHEADER","PRIM_TBLO","Item");var C21=this.cR("ITEM2CARDHEADER","PRIM_TBLO","Item");
var C22=this.cR("CARD","PRIM_PANL");var C23=this.cR("EXPENSELIST","PRIM_TREE");var C24=this.cR("LABELCAPTION","PRIM_MD","Label");var C25=this.cR("LABELCAPTIONRIGHT","PRIM_MD","Label");var C26=this.cR("CARDHEADERPANEL","PRIM_PANL");var C27=this.cR("IDENTIFIER","PRIM_DC","UnicodeString");var C28=this.cR("CARDTYPE","PRIM_DC","UnicodeString");var C29=this.cA("APPLICATION","XEXAPP");this.cD("MYTREEITEM");C0.setTextColor("3DMEDIUMSHADOW");C0.iC();C1.setFontSize(18);C1.setFontUnits("PIXEL");C1.iC();C2.setBackgroundBrush(C4);
C2.setForegroundBrush(C3);C2.iC();C3.setColor("THEMETEXT");C3.iC();C4.setColor("217:217:217");C4.setOpacity(80);C4.iC();C5.setSizing("CONTENTHEIGHT");C5.setMarginLeft(5);C5.setMarginRight(5);C5.setMarginTop(10);C5.setMarginBottom(3);C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setColumn(C7);C8.setManage(C22);C8.setParent(C5);C8.setRow(C6);C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.setAlignment("TOPCENTER");C8.iC();C9.setSizing("CONTENTHEIGHT");
C9.iC();C10.setParent(C9);C10.setDisplayPosition(1);C10.iC();C11.setParent(C9);C11.setDisplayPosition(1);C11.setHeight(38);C11.setUnits("PIXELS");C11.iC();C12.setParent(C9);C12.setDisplayPosition(2);C12.iC();C13.setColumn(C10);C13.setManage(C23);C13.setParent(C9);C13.setRow(C12);C13.setAlignment("TOPCENTER");C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setMarginTop(2);C13.setMarginLeft(2);C13.setMarginRight(2);C13.iC();C14.setAlignment("CENTERLEFT");C14.setColumn(C10);C14.setManage(C24);C14.setParent(C9);
C14.setRow(C11);C14.setSizing("FITTOHEIGHT");C14.iC();C15.setAlignment("CENTERRIGHT");C15.setColumn(C10);C15.setManage(C25);C15.setParent(C9);C15.setRow(C11);C15.setSizing("FITTOHEIGHT");C15.iC();C16.setColumn(C10);C16.setManage(C26);C16.setParent(C9);C16.setRow(C11);C16.iC();C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.iC();C19.setDisplayPosition(1);C19.setParent(C17);C19.iC();C20.setAlignment("CENTERRIGHT");C20.setColumn(C18);C20.setManage(C25);C20.setParent(C17);C20.setRow(C19);C20.setSizing("CONTENTWIDTHFITTOHEIGHT");
C20.setMarginRight(2);C20.setFlow("LEFT");C20.iC();C21.setAlignment("CENTERLEFT");C21.setColumn(C18);C21.setParent(C17);C21.setRow(C19);C21.setSizing("CONTENTWIDTHFITTOHEIGHT");C21.setManage(C24);C21.iC();C22.setParent(this);C22.setDisplayPosition(1);C22.setTabPosition(1);C22.setLayoutManager(C9);C22.setStyle(C0);C22.setHeight(222);C22.setLeft(5);C22.setWidth(490);C22.setThemeDrawStyle("Card+Shadow1");C22.iC();C23.setParent(C22);C23.setDisplayPosition(1);C23.setTabPosition(1);C23.setHeight(180);C23.setLeft(2);
C23.setTop(40);C23.setWidth(484);C23.iC();C24.setCaption("UNKNOWN");C24.setDisplayPosition(1);C24.setLeft(0);C24.setParent(C26);C24.setTabPosition(2);C24.setTop(0);C24.setWidth(98);C24.setCaptionMarginLeft(6);C24.setStyle(C1);C24.setHeight(38);C24.iC();C25.setCaption("$81.00");C25.setDisplayPosition(2);C25.setLeft(418);C25.setParent(C26);C25.setTabPosition(1);C25.setTop(0);C25.setWidth(68);C25.setCaptionMarginRight(10);C25.setStyle(C1);C25.setHeight(38);C25.setCaptionAlignment("CENTERRIGHT");C25.iC();
C26.setDisplayPosition(2);C26.setLeft(0);C26.setParent(C22);C26.setTabPosition(2);C26.setTabStop(false);C26.setTop(0);C26.setLayoutManager(C17);C26.setHeight(38);C26.setWidth(488);C26.setStyle(C2);C26.iC();C27.iC();C28.iC();if((C29!=null)&&(C29.iI()==false)){C29.iC();}C29.aH("FILTERON",this,e1);C29.aH("FILTEROFF",this,e2);C23.aDS("XEXITEM");C23.aLF({"STD_TEXT":f.F2});this.setDisplayPosition(1);this.setHeight(235);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C5);
}});cO.mthGETCAPTION=function(){var m=this.REF,r=l.pR(this,cO,"GetCaption",55);var P0=r.cP("CAPTION","PRIM_ALPH");r.ln=55;{r.ln=58;P0.set(m.LABELCAPTION.get());}r.ln=60;return r.rV(P0.get());};cO.mthSETCAPTION=function(p0){var m=this.REF,r=l.pR(this,cO,"SetCaption",62);var P0=r.cP("CAPTION","PRIM_ALPH");P0.set(p0);r.ln=62;{r.ln=65;m.LABELCAPTION.set(P0.get());}r.ln=67;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.FilterOn",73);var P0=Ps.r("FILTER");var P1=Ps.r("COUNTER");
var C0=r.cR("VISIBLE","PRIM_BOLN");var C1=r.cF("RESULTS",Fd.F1.Dc);C0.iC();C1.iC();r.ln=73;{r.ln=77;{var l1=m.EXPENSELIST.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=79;if(l.cast(ITEM.getDesign(),"XEXITEM").mthSHOWSEARCHRESULTS(P0.get())){r.ln=81;ITEM.setVisible(true);r.ln=83;C1.set(l.add(C1.get(),1));}else{r.ln=87;ITEM.setVisible(false);}r.ln=91;}l1.end();r.dR("ITEM");}r.ln=93;m.MYTREEITEM.setVisible(l.n.gt(C1.get(),0));r.ln=95;if(l.n.eq(C1.get(),1)){r.ln=97;m.LABELCAPTIONRIGHT.set("1 result");
}else{r.ln=101;m.LABELCAPTIONRIGHT.set(l.cat(l.n.AsString(C1.get())," results"));}r.ln=105;P1.set(l.add(P1.get(),C1.get()));}r.ln=107;r.e();};function e2(sender,Ps){var f=this.FLD.XEXCARD,m=this.REF,r=l.eR(this,cO,"#Application.FilterOff",109);r.ln=109;{r.ln=111;m.MYTREEITEM.setVisible(true);r.ln=113;m.LABELCAPTIONRIGHT.set(l.cat("$",l.n.AsDisplayString(f.F3.get(),9,2)));r.ln=115;{var l1=m.EXPENSELIST.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=117;l.cast(ITEM.getDesign(),"XEXITEM").mthHIDESEARCHRESULTS();
r.ln=119;ITEM.setVisible(true);r.ln=121;}l1.end();r.dR("ITEM");}}r.ln=123;r.e();};cO.mthADDEXPENSE=function(p0){var f=this.FLD.XEXCARD,m=this.REF,r=l.mR(this,cO,"AddExpense",129);var P0=r.cPD("EXPENSE");P0=p0;r.ln=129;{r.ln=132;m.EXPENSELIST.addEntry();r.ln=134;m.EXPENSELIST.getCurrentItem().setRelatedReference(P0);r.ln=136;f.F3.set(l.add(f.F3.get(),P0.getAMOUNT()));r.ln=138;m.LABELCAPTIONRIGHT.set(l.cat("$",l.n.AsDisplayString(f.F3.get(),9,2)));r.ln=140;if(l.tB(l.s.eq(m.CARDTYPE.get(),"by date")))
{r.ln=142;l.cast(m.EXPENSELIST.getCurrentItem().getDesign(),"XEXITEM").setSHOWMONTH(false);}}r.ln=146;r.e();};cO.mthONADD=function(p0){var m=this.REF,r=l.mR(this,cO,"OnAdd",152);var P0=r.cPD("TREEITEM");P0=p0;r.ln=152;{r.ln=154;this.srMYTREEITEM(P0);}r.ln=156;r.e();};cO.mthONSORT=function(p1,p2,p3){var m=this.REF,r=l.mR(this,cO,"OnSort",158);var P0=r.cPe("RESULT","EQUAL");var P1=r.cPD("TREEITEM");var P2=r.cPD("COMPARETO");var P3=r.cPD("KEY");P1=p1;P2=p2;P3=p3;r.ln=158;{r.ln=160;P0.set(l.s.Compare(m.IDENTIFIER.get(),l.cast(P2.getDesign(),"XEXCARD").getIDENTIFIER()));
}r.ln=162;return r.rV(P0.get());};cO.getCAPTION=function(){return this.mthGETCAPTION();};cO.setCAPTION=function(v){this.mthSETCAPTION(v);};cO.getIDENTIFIER=function(){return this.REF.IDENTIFIER.get();};cO.setIDENTIFIER=function(v){this.REF.IDENTIFIER.set(v);};cO.getCARDTYPE=function(){return this.REF.CARDTYPE.get();};cO.setCARDTYPE=function(v){this.REF.CARDTYPE.set(v);};function rl1(F2){var v=F2.get();return(l.s.eq(v,""));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}cO.srMYTREEITEM=function(rn){this.sR("MYTREEITEM",rn);};},{rc:["XEXAPP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_TREE","PRIM_MD.Label","PRIM_DC.UnicodeString","PRIM_FLD"],dc:["XEXITEM"],dp:["PRIM_TREE.TreeItem","PRIM_BOLN"]});