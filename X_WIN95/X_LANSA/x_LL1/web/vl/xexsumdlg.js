﻿LANSA.addComponent({id:"XEXSUMDLG",nm:"XEXSummaryDialog",ot:"wv",tp:"Dialog",de:"Summary",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_DLG",co:function(){cO.aN.call(this);var C0=this.cR("STYLECAPTION","PRIM_VS","Style");var C1=this.cR("LAYOUTMAIN","PRIM_TBLO");var C2=this.cR("COLUMN1MAIN","PRIM_TBLO","Column");var C3=this.cR("COLUMN2MAIN","PRIM_TBLO","Column");var C4=this.cR("COLUMN3MAIN","PRIM_TBLO","Column");var C5=this.cR("ROW1MAIN","PRIM_TBLO","Row");var C6=this.cR("ROW2MAIN","PRIM_TBLO","Row");
var C7=this.cR("ROW3MAIN","PRIM_TBLO","Row");var C8=this.cR("ROW1","PRIM_TBLO","Row");var C9=this.cR("ITEM1MAIN","PRIM_TBLO","Item");var C10=this.cR("ITEM2MAIN","PRIM_TBLO","Item");var C11=this.cR("ITEM3MAIN","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C13=this.cR("CLOSE","PRIM_MD","Label");var C14=this.cR("LABELCAPTION","PRIM_MD","Label");var C15=this.cR("XEXSUMMARYPANEL","XEXSUMPNL");var C16=this.cR("BUTTONOK","PRIM_MD","RaisedButton");C0.setFontSize(24);C0.setFontUnits("PIXEL");
C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setUnits("PIXELS");C2.setWidth(40);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setWidth(40);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(1);C5.setParent(C1);C5.setUnits("PIXELS");C5.setHeight(10);C5.iC();C6.setDisplayPosition(2);C6.setParent(C1);C6.setHeight(40);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(3);C7.setParent(C1);C7.iC();C8.setDisplayPosition(4);C8.setParent(C1);
C8.setHeight(52);C8.setUnits("PIXELS");C8.iC();C9.setAlignment("TOPRIGHT");C9.setColumn(C4);C9.setManage(C13);C9.setParent(C1);C9.setRow(C6);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C3);C10.setManage(C14);C10.setParent(C1);C10.setRow(C6);C10.iC();C11.setColumn(C2);C11.setManage(C15);C11.setParent(C1);C11.setRow(C7);C11.setColumnSpan(3);C11.iC();C12.setAlignment("CENTERRIGHT");C12.setColumn(C4);C12.setParent(C1);C12.setRow(C8);C12.setSizing("NONE");C12.setMarginRight(8);C12.setManage(C16);
C12.iC();C13.setDisplayPosition(1);C13.setIcon("close");C13.setIconOpacity(50);C13.setLeft(431);C13.setParent(this);C13.setTabPosition(1);C13.setHeight(40);C13.setWidth(40);C13.iC();C14.setCaption("Summary");C14.setDisplayPosition(2);C14.setHeight(40);C14.setLeft(40);C14.setParent(this);C14.setTabPosition(2);C14.setWidth(391);C14.setStyle(C0);C14.iC();C15.setDisplayPosition(3);C15.setParent(this);C15.setTabPosition(3);C15.setTabStop(false);C15.setTop(50);C15.setHeight(633);C15.setWidth(471);C15.iC();
C16.setCaption("OK");C16.setDisplayPosition(4);C16.setLeft(363);C16.setParent(this);C16.setTabPosition(4);C16.setTabStop(false);C16.setTop(691);C16.iC();C13.aH("CLICK",this,e1);C16.aH("CLICK",this,e1);this.setHeight(737);this.setWidth(473);this.setLayoutManager(C1);this.setVerticalScroll(true);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Close.Click #ButtonOK.Click",26);r.ln=26;{r.ln=28;this.mthCLOSE();}r.ln=30;r.e();};},{rc:["XEXSUMPNL"],rp:["PRIM_DLG","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_MD.RaisedButton"]
});