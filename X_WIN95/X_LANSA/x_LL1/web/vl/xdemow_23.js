﻿LANSA.addComponent({id:"XDEMOW_23",nm:"xDemoWebTabFramework",ot:"wp",tp:"Web Page",de:"Tab Framework",tl:14020008},function(l,oI,u){var rc1=l.cB("ximagefav.png");var rc2=l.cB("ximager_2.png");var rc3=l.cB("ximagedet.png");var rc4=l.cB("ximagec_7.png");var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("COLUMN","PRIM_TBLO","Column");var C3=this.cR("TAB","PRIM_TAB");var C4=this.cR("SHEET","PRIM_TBSH");
var C5=this.cR("SHEET_2","PRIM_TBSH");var C6=this.cR("SHEET_3","PRIM_TBSH");var C7=this.cR("SHEET_4","PRIM_TBSH");var C8=this.cR("SHEET_5","PRIM_TBSH");var C9=this.cR("TABITEM","PRIM_TBLO","Item");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setBottomLayoutPriority(4);C3.setComponentVersion(2);C3.setDisplayPosition(1);C3.setHeight(800);C3.setLeft(0);C3.setLeftLayoutPriority(1);C3.setLeftTabWidth(200);C3.setLeftViewStyle("NAVIGATOR");
C3.setParent(this);C3.setRightLayoutPriority(2);C3.setRightTabWidth(200);C3.setRightViewStyle("NAVIGATOR");C3.setTabPosition(1);C3.setTop(0);C3.setTopLayoutPriority(3);C3.setWidth(1200);C3.iC();C4.setCaption("Favorites");C4.setDisplayPosition(1);C4.setDockAllowUndock(true);C4.setDockPosition("LEFT");C4.setHeight(634);C4.setImage(rc1);C4.setLeft(0);C4.setParent(C3);C4.setTabPosition(1);C4.setTabStop(false);C4.setTop(32);C4.setWidth(200);C4.iC();C5.setCaption("Repository");C5.setDisplayPosition(2);
C5.setDockAllowUndock(true);C5.setDockPosition("LEFT");C5.setHeight(634);C5.setImage(rc2);C5.setLeft(0);C5.setParent(C3);C5.setTabPosition(2);C5.setTabStop(false);C5.setTop(32);C5.setWidth(200);C5.iC();C6.setCaption("Details");C6.setDisplayPosition(3);C6.setDockAllowUndock(true);C6.setDockPosition("LEFT");C6.setHeight(634);C6.setImage(rc3);C6.setLeft(0);C6.setParent(C3);C6.setTabPosition(3);C6.setTabStop(false);C6.setTop(32);C6.setWidth(200);C6.setOpened(true);C6.iC();C7.setCaption("Source");C7.setDisplayPosition(9);
C7.setHeight(671);C7.setLeft(205);C7.setParent(C3);C7.setTabPosition(9);C7.setTabStop(false);C7.setTop(24);C7.setWidth(995);C7.iC();C8.setCaption("Compile");C8.setDisplayPosition(1);C8.setDockAllowUndock(true);C8.setDockPosition("BOTTOM");C8.setHeight(76);C8.setImage(rc4);C8.setLeft(0);C8.setOpened(true);C8.setParent(C3);C8.setTabPosition(1);C8.setTabStop(false);C8.setTop(24);C8.setWidth(995);C8.setDockAllowedPositions("LEFT+BOTTOM+RIGHT");C8.iC();C9.setColumn(C2);C9.setManage(C3);C9.setParent(C0);
C9.setRow(C1);C9.iC();this.setLayoutManager(C0);}});},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TAB","PRIM_TBSH","PRIM_TBLO.Item"]});