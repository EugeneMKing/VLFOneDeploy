﻿LANSA.addComponent({id:"XDEMOW_10",nm:"xDemoWebResponsiveDesignStacked",ot:"wp",tp:"Web Page",de:"Responsive Design - Stacked",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("DESIGNS","PRIM_DESN");var C1=this.cR("MOBILE","PRIM_DESN","Design");var C2=this.cR("LEFT","PRIM_PANL");var C3=this.cR("TOP","PRIM_PANL");var C4=this.cR("CENTER","PRIM_PANL");var C5=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C6=this.cR("ROW","PRIM_TBLO","Row");var C7=this.cR("ROW_2","PRIM_TBLO","Row");
var C8=this.cR("ROW_3","PRIM_TBLO","Row");var C9=this.cR("ROW_4","PRIM_TBLO","Row");var C10=this.cR("ROW_5","PRIM_TBLO","Row");var C11=this.cR("COLUMN","PRIM_TBLO","Column");var C12=this.cR("COLUMN_2","PRIM_TBLO","Column");var C13=this.cR("COLUMN_3","PRIM_TBLO","Column");var C14=this.cR("COLUMN_4","PRIM_TBLO","Column");var C15=this.cR("COLUMN_5","PRIM_TBLO","Column");var C16=this.cR("LAYOUTLEFT","PRIM_TBLO","Item");var C17=this.cR("LAYOUTCENTER","PRIM_TBLO","Item");var C18=this.cR("LAYOUTTOP","PRIM_TBLO","Item");
var C19=this.cR("LAYOUTMOBILE","PRIM_TBLO");var C20=this.cR("ROW_6","PRIM_TBLO","Row");var C21=this.cR("COLUMN_6","PRIM_TBLO","Column");var C22=this.cR("ITEM","PRIM_TBLO","Item");var C23=this.cR("ITEM_2","PRIM_TBLO","Item");var C24=this.cR("ITEM_3","PRIM_TBLO","Item");C0.iC();C1.setDesignManager(C0);C1.setWidth(600);C1.iC();C2.setDisplayPosition(2);C2.setHeight(364);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTabStop(false);C2.setTop(92);C2.setWidth(382);C2.setThemeDrawStyle("MediumTitle");
C2.iC();C3.setDisplayPosition(1);C3.setHeight(92);C3.setLeft(0);C3.setParent(this);C3.setTabPosition(2);C3.setTabStop(false);C3.setTop(0);C3.setWidth(953);C3.setThemeDrawStyle("DarkTitle");C3.iC();C4.setDisplayPosition(3);C4.setHeight(364);C4.setLeft(382);C4.setParent(this);C4.setTabPosition(3);C4.setTabStop(false);C4.setTop(92);C4.setWidth(571);C4.setThemeDrawStyle("LightTitle");C4.iC();C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(2);C7.setParent(C5);C7.iC();C8.setDisplayPosition(3);
C8.setParent(C5);C8.iC();C9.setDisplayPosition(4);C9.setParent(C5);C9.iC();C10.setDisplayPosition(5);C10.setParent(C5);C10.iC();C11.setDisplayPosition(1);C11.setParent(C5);C11.iC();C12.setDisplayPosition(2);C12.setParent(C5);C12.iC();C13.setDisplayPosition(3);C13.setParent(C5);C13.iC();C14.setDisplayPosition(4);C14.setParent(C5);C14.iC();C15.setDisplayPosition(5);C15.setParent(C5);C15.iC();C16.setColumn(C11);C16.setManage(C2);C16.setParent(C5);C16.setRow(C7);C16.setColumnSpan(2);C16.setRowSpan(4);
C16.setFlow("DOWN");C16.setAlignment("TOPCENTER");C16.iC();C17.setColumn(C13);C17.setManage(C4);C17.setParent(C5);C17.setRow(C7);C17.setColumnSpan(3);C17.setRowSpan(4);C17.setFlow("DOWN");C17.setAlignment("TOPCENTER");C17.iC();C18.setColumn(C11);C18.setManage(C3);C18.setParent(C5);C18.setRow(C6);C18.setColumnSpan(5);C18.setFlow("DOWN");C18.setAlignment("TOPCENTER");C18.iC();C19.iC();C20.setDisplayPosition(1);C20.setParent(C19);C20.iC();C21.setDisplayPosition(1);C21.setParent(C19);C21.iC();C22.setColumn(C21);
C22.setManage(C3);C22.setParent(C19);C22.setRow(C20);C22.setSizing("FITTOWIDTH");C22.setAlignment("TOPCENTER");C22.setFlow("DOWN");C22.iC();C23.setAlignment("TOPCENTER");C23.setColumn(C21);C23.setManage(C4);C23.setParent(C19);C23.setRow(C20);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");C23.iC();C24.setAlignment("TOPCENTER");C24.setColumn(C21);C24.setManage(C2);C24.setParent(C19);C24.setRow(C20);C24.setSizing("FITTOWIDTH");C24.setFlow("DOWN");C24.iC();this.setLayoutManager(C5);this.setTheme(l.THEME().get("2015CYAN"));
this.setDesignManager(C0);this.setHeight(456);this.setWidth(953);this.aH("DESIGNCHANGED",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#com_owner.DesignChanged",33);var P0=Ps.r("DESIGN");r.ln=33;{r.ln=36;if((P0!=null)){r.ln=38;this.setLayoutManager(m.LAYOUTMOBILE);r.ln=39;m.LEFT.setHeight(200);}else{r.ln=43;this.setLayoutManager(m.LAYOUTDESKTOP);}}r.ln=47;r.e();};},{rp:["PRIM_WEB","PRIM_DESN","PRIM_DESN.Design","PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item"]
});