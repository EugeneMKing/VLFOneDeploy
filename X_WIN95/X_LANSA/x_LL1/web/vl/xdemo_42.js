﻿LANSA.addComponent({id:"XDEMO_42",nm:"xDemoWebCarouselDesign",ot:"rp",tp:"Reusable Part",de:"Carousel Design",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_CARO.ICarouselDesign"],mt:{OnItemGotReference:{ps:{"CarouselItem":{pt:"i"}}}},co:function(){cO.aN.call(this);this.cD("GEMPLOYEE");var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("ROW2","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");
var C6=this.cR("LEMPLOYEEITEM1","PRIM_TBLO","Item");var C7=this.cR("LEMPLOYEE","PRIM_LABL");var C8=this.cR("IMAGE","PRIM_IMAG");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.setUnits("PIXELS");C3.setHeight(64);C3.iC();C4.setDisplayPosition(2);C4.setParent(C1);C4.iC();C5.setColumn(C2);C5.setManage(C8);C5.setParent(C1);C5.setRow(C4);C5.setMarginTop(10);C5.setMarginBottom(10);C5.setMarginLeft(5);C5.setMarginRight(5);C5.iC();C6.setColumn(C2);C6.setManage(C7);
C6.setParent(C1);C6.setRow(C3);C6.iC();C7.setDisplayPosition(1);C7.setEllipses("WORD");C7.setHeight(64);C7.setLeft(0);C7.setParent(this);C7.setTabPosition(1);C7.setTabStop(false);C7.setTop(0);C7.setVerticalAlignment("CENTER");C7.setWidth(300);C7.setThemeDrawStyle("Heading1+MediumTitle");C7.setAlignment("CENTER");C7.setWordWrap(false);C7.setCaption("Employee Name (A1234)");C7.iC();C8.setDisplayPosition(2);C8.setLeft(5);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(74);C8.setHeight(316);
C8.setWidth(290);C8.setImageSizing("BESTFIT");C8.iC();this.setDisplayPosition(1);this.setHeight(400);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(300);this.setLayoutManager(C1);this.setThemeDrawStyle("ListItem");}});cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",16);var P0=r.cPD("CAROUSELITEM");P0=p0;r.ln=16;{r.ln=18;this.srGEMPLOYEE(l.cast(P0.getRelatedReference(),"XDEMO_32"));r.ln=20;m.LEMPLOYEE.set(l.s.Substitute("&1 &2 (&3)",m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getSURNAME(),m.GEMPLOYEE.getID()));
r.ln=22;m.IMAGE.setImage(m.GEMPLOYEE.getTHUMBNAIL());}r.ln=24;r.e();};cO.srGEMPLOYEE=function(rn){this.sR("GEMPLOYEE",rn);};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG"],dc:["XDEMO_32"]});