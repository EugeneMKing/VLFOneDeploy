﻿LANSA.addComponent({id:"XDEMO_49",nm:"xDemoWebSPAPage",ot:"rp",tp:"Reusable Part",de:"Page",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{PageNumber:{da:"r"}},mt:{Prepare:{ps:{"PageNumber":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("LAYOUT1","PRIM_TBLO");var C3=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C4=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C6=this.cR("LABEL","PRIM_LABL");var C7=this.cR("GPAGENUMBER","PRIM_NMBR");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("THEME50");C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.setColumn(C4);C5.setManage(C6);C5.setParent(C2);C5.setRow(C3);C5.setMarginBottom(20);C5.setMarginLeft(20);C5.setMarginRight(20);C5.setMarginTop(20);C5.iC();C6.setCaption("Page #");C6.setDisplayPosition(1);C6.setEllipses("WORD");C6.setHeight(230);C6.setLeft(20);
C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(20);C6.setVerticalAlignment("CENTER");C6.setWidth(460);C6.setAlignment("CENTER");C6.setThemeDrawStyle("Title");C6.setStyle(C0);C6.iC();C7.iC();this.setDisplayPosition(1);this.setHeight(270);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C2);}});cO.mthPREPARE=function(p0){var m=this.REF,r=l.mR(this,cO,"Prepare",18);var P0=r.cP("PAGENUMBER","PRIM_NMBR");P0.set(p0);r.ln=18;{r.ln=21;
m.GPAGENUMBER.set(P0.get());r.ln=23;m.LABEL.set(l.s.Substitute("Page &1",l.n.AsString(P0.get())));}r.ln=25;r.e();};cO.getPAGENUMBER=function(){return this.REF.GPAGENUMBER.get();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL","PRIM_NMBR"]});