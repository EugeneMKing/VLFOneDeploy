﻿LANSA.addComponent({id:"XDEMO_33",nm:"xDemoWebCalculator",ot:"rp",tp:"Reusable Part",de:"Calculator Popup",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMODECI",an:"xDemoDecimal",ft:"P",ln:30,dc:9,ec:"J",lb:"Decimal",h1:"Decimal",h2:"",h3:"",de:"Decimal",dv:0},F2:{nm:"STD_FLAG",ft:"A",ln:1,dc:0,lb:{"ENG":"Flag","FRA":"Indicateur","JPN":"Flag","LLL":"Flag"}[cL],h1:{"ENG":"Flag","FRA":"Indicateur","JPN":"Flag","LLL":"Flag"}[cL],
h2:" ",h3:" ",de:{"ENG":"Standard FLAG","FRA":"Indicateur Standard","JPN":"Standard FLAG","LLL":"Standard FLAG"}[cL],dv:"",ia:["FE"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"Y",vd:"N",rd:rl1,mt:{"ENG":"Flag must be Y or N","FRA":"Indicateur must be Y or N","JPN":"Flag must be Y or N","LLL":"Flag must be Y or N"}[cL]}]}};var cO=l.rC(oI,{an:"PRIM_PPNL",fd:Fd,pt:{Value:{da:"r"}},mt:{Show:{ps:{"Reset":{pt:"i"}}},HandleEquals:{},HandleOperator:{ps:{"Operator":{pt:"i"}}},HandleBackSpace:{},HandleDigit:{ps:{"Digit":
{pt:"i"}}},Evaluate:{},ClearAll:{},ClearEntry:{},UpdateMemory:{ps:{"Value":{pt:"i"}}},AnimateKeyPress:{ps:{"Control":{pt:"i"}}}},ev:{Changed:{ps:{"Value":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMO_33",Fd);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");var C4=this.cR("COLUMN4","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("ROW2","PRIM_TBLO","Row");
var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("ROW4","PRIM_TBLO","Row");var C9=this.cR("ROW5","PRIM_TBLO","Row");var C10=this.cR("ROW6","PRIM_TBLO","Row");var C11=this.cR("ROW7","PRIM_TBLO","Row");var C12=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");
var C18=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C21=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C22=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");var C23=this.cR("LAYOUTITEM13","PRIM_TBLO","Item");var C24=this.cR("LAYOUTITEM14","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM15","PRIM_TBLO","Item");var C26=this.cR("LAYOUTITEM16","PRIM_TBLO","Item");var C27=this.cR("LAYOUTITEM17","PRIM_TBLO","Item");
var C28=this.cR("LAYOUTITEM18","PRIM_TBLO","Item");var C29=this.cR("LAYOUTITEM19","PRIM_TBLO","Item");var C30=this.cR("LAYOUTITEM20","PRIM_TBLO","Item");var C31=this.cR("LAYOUTITEM21","PRIM_TBLO","Item");var C32=this.cR("LAYOUTITEM22","PRIM_TBLO","Item");var C33=this.cR("LAYOUTITEM23","PRIM_TBLO","Item");var C34=this.cR("LAYOUTITEM24","PRIM_TBLO","Item");var C35=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C36=this.cR("LAYOUTITEM25","PRIM_TBLO","Item");var C37=this.cR("LAYOUTITEM26","PRIM_TBLO","Item");
var C38=this.cR("L7","PRIM_SPBN");var C39=this.cR("LMEMORYPLUS","PRIM_SPBN");var C40=this.cR("LMEMORYMINUS","PRIM_SPBN");var C41=this.cR("LCLEARENTRY","PRIM_SPBN");var C42=this.cR("LBACK","PRIM_SPBN");var C43=this.cR("LMEMORYCLEAR","PRIM_SPBN");var C44=this.cR("LMEMORYRECALL","PRIM_SPBN");var C45=this.cR("L9","PRIM_SPBN");var C46=this.cR("LDIVIDE","PRIM_SPBN");var C47=this.cR("L4","PRIM_SPBN");var C48=this.cR("L1","PRIM_SPBN");var C49=this.cR("LTIMES","PRIM_SPBN");var C50=this.cR("L5","PRIM_SPBN");
var C51=this.cR("L6","PRIM_SPBN");var C52=this.cR("LMINUS","PRIM_SPBN");var C53=this.cR("L2","PRIM_SPBN");var C54=this.cR("LNEGATIVE","PRIM_SPBN");var C55=this.cR("L0","PRIM_SPBN");var C56=this.cR("L3","PRIM_SPBN");var C57=this.cR("LPLUS","PRIM_SPBN");var C58=this.cR("LDECIMAL","PRIM_SPBN");var C59=this.cR("LEQUALS","PRIM_SPBN");var C60=this.cR("L8","PRIM_SPBN");var C61=this.cR("LOUTPUT","PRIM_LABL");var C62=this.cR("DIGITS","PRIM_KCOL");var C63=this.cR("OPERATORS","PRIM_KCOL");var C64=this.cF("CURRENTVALUE",Fd.F1.Dc);
var C65=this.cF("RUNNINGTOTAL",Fd.F1.Dc);var C66=this.cR("LCLEARALL","PRIM_SPBN");var C67=this.cR("LMEMORY","PRIM_LABL");var C68=this.cR("KEYDOWNSTYLE","PRIM_VS","Style");var C69=this.cR("KEYDOWNBGBRUSH","PRIM_VS","SolidBrush");var C70=this.cR("KEYUPSTYLE","PRIM_VS","Style");var C71=this.cR("ANIMATION","PRIM_ANIM");var C72=this.cR("ANIMATIONKEYDOWN","PRIM_ANIM","Style");var C73=this.cR("ANIMATIONKEYUP","PRIM_ANIM","Style");var C74=this.cR("ACTIVEOPERATOR","PRIM_STR");var C75=this.cR("ISRESULT","PRIM_BOLN");
var C76=this.cF("MEMORY",Fd.F1.Dc);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(4);C4.setParent(C0);C4.iC();C5.setDisplayPosition(2);C5.setParent(C0);C5.iC();C6.setDisplayPosition(3);C6.setParent(C0);C6.iC();C7.setDisplayPosition(4);C7.setParent(C0);C7.iC();C8.setDisplayPosition(5);C8.setParent(C0);C8.iC();C9.setDisplayPosition(6);C9.setParent(C0);C9.iC();C10.setDisplayPosition(7);
C10.setParent(C0);C10.iC();C11.setDisplayPosition(1);C11.setParent(C0);C11.setHeight(42);C11.setUnits("PIXELS");C11.iC();C12.setColumn(C1);C12.setManage(C38);C12.setParent(C0);C12.setRow(C7);C12.setMarginBottom(2);C12.setMarginLeft(2);C12.setMarginRight(2);C12.setMarginTop(2);C12.iC();C13.setColumn(C1);C13.setManage(C39);C13.setParent(C0);C13.setRow(C5);C13.setMarginBottom(2);C13.setMarginLeft(2);C13.setMarginRight(2);C13.setMarginTop(2);C13.iC();C14.setColumn(C2);C14.setManage(C40);C14.setParent(C0);
C14.setRow(C5);C14.setMarginBottom(2);C14.setMarginLeft(2);C14.setMarginRight(2);C14.setMarginTop(2);C14.iC();C15.setColumn(C1);C15.setManage(C41);C15.setParent(C0);C15.setRow(C6);C15.setMarginBottom(2);C15.setMarginLeft(2);C15.setMarginRight(2);C15.setMarginTop(2);C15.iC();C16.setColumn(C3);C16.setManage(C42);C16.setParent(C0);C16.setRow(C6);C16.setMarginBottom(2);C16.setMarginLeft(2);C16.setMarginRight(2);C16.setMarginTop(2);C16.iC();C17.setColumn(C3);C17.setManage(C43);C17.setParent(C0);C17.setRow(C5);
C17.setMarginBottom(2);C17.setMarginLeft(2);C17.setMarginRight(2);C17.setMarginTop(2);C17.iC();C18.setColumn(C4);C18.setManage(C44);C18.setParent(C0);C18.setRow(C5);C18.setMarginBottom(2);C18.setMarginLeft(2);C18.setMarginRight(2);C18.setMarginTop(2);C18.iC();C19.setColumn(C3);C19.setManage(C45);C19.setParent(C0);C19.setRow(C7);C19.setMarginBottom(2);C19.setMarginLeft(2);C19.setMarginRight(2);C19.setMarginTop(2);C19.iC();C20.setColumn(C4);C20.setManage(C46);C20.setParent(C0);C20.setRow(C6);C20.setMarginBottom(2);
C20.setMarginLeft(2);C20.setMarginRight(2);C20.setMarginTop(2);C20.iC();C21.setColumn(C1);C21.setManage(C47);C21.setParent(C0);C21.setRow(C8);C21.setMarginBottom(2);C21.setMarginLeft(2);C21.setMarginRight(2);C21.setMarginTop(2);C21.iC();C22.setColumn(C1);C22.setManage(C48);C22.setParent(C0);C22.setRow(C9);C22.setMarginBottom(2);C22.setMarginLeft(2);C22.setMarginRight(2);C22.setMarginTop(2);C22.iC();C23.setColumn(C4);C23.setManage(C49);C23.setParent(C0);C23.setRow(C7);C23.setMarginBottom(2);C23.setMarginLeft(2);
C23.setMarginRight(2);C23.setMarginTop(2);C23.iC();C24.setColumn(C2);C24.setManage(C50);C24.setParent(C0);C24.setRow(C8);C24.setMarginBottom(2);C24.setMarginLeft(2);C24.setMarginRight(2);C24.setMarginTop(2);C24.iC();C25.setColumn(C3);C25.setManage(C51);C25.setParent(C0);C25.setRow(C8);C25.setMarginBottom(2);C25.setMarginLeft(2);C25.setMarginRight(2);C25.setMarginTop(2);C25.iC();C26.setColumn(C4);C26.setManage(C52);C26.setParent(C0);C26.setRow(C8);C26.setMarginBottom(2);C26.setMarginLeft(2);C26.setMarginRight(2);
C26.setMarginTop(2);C26.iC();C27.setColumn(C2);C27.setManage(C53);C27.setParent(C0);C27.setRow(C9);C27.setMarginBottom(2);C27.setMarginLeft(2);C27.setMarginRight(2);C27.setMarginTop(2);C27.iC();C28.setColumn(C1);C28.setManage(C54);C28.setParent(C0);C28.setRow(C10);C28.setMarginBottom(2);C28.setMarginLeft(2);C28.setMarginRight(2);C28.setMarginTop(2);C28.iC();C29.setColumn(C2);C29.setManage(C55);C29.setParent(C0);C29.setRow(C10);C29.setMarginBottom(2);C29.setMarginLeft(2);C29.setMarginRight(2);C29.setMarginTop(2);
C29.iC();C30.setColumn(C3);C30.setManage(C56);C30.setParent(C0);C30.setRow(C9);C30.setMarginBottom(2);C30.setMarginLeft(2);C30.setMarginRight(2);C30.setMarginTop(2);C30.iC();C31.setColumn(C4);C31.setManage(C57);C31.setParent(C0);C31.setRow(C9);C31.setMarginBottom(2);C31.setMarginLeft(2);C31.setMarginRight(2);C31.setMarginTop(2);C31.iC();C32.setColumn(C3);C32.setManage(C58);C32.setParent(C0);C32.setRow(C10);C32.setMarginBottom(2);C32.setMarginLeft(2);C32.setMarginRight(2);C32.setMarginTop(2);C32.iC();
C33.setColumn(C4);C33.setManage(C59);C33.setParent(C0);C33.setRow(C10);C33.setMarginBottom(2);C33.setMarginLeft(2);C33.setMarginRight(2);C33.setMarginTop(2);C33.iC();C34.setColumn(C2);C34.setManage(C60);C34.setParent(C0);C34.setRow(C7);C34.setMarginBottom(2);C34.setMarginLeft(2);C34.setMarginRight(2);C34.setMarginTop(2);C34.iC();C35.setColumn(C1);C35.setManage(C61);C35.setParent(C0);C35.setRow(C11);C35.setColumnSpan(4);C35.iC();C36.setColumn(C2);C36.setManage(C66);C36.setParent(C0);C36.setRow(C6);
C36.setMarginBottom(2);C36.setMarginLeft(2);C36.setMarginRight(2);C36.setMarginTop(2);C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C1);C37.setManage(C67);C37.setParent(C0);C37.setRow(C11);C37.setSizing("NONE");C37.iC();C38.setCaption("7");C38.setDisplayPosition(2);C38.setEllipses("WORD");C38.setHeight(37);C38.setLeft(2);C38.setParent(this);C38.setTabPosition(25);C38.setTabStop(false);C38.setTop(157);C38.setWidth(92);C38.setThemeDrawStyle("AlternateItem+Heading2");C38.iC();C39.setCaption("M+");
C39.setDisplayPosition(3);C39.setEllipses("WORD");C39.setHeight(38);C39.setLeft(2);C39.setParent(this);C39.setTabPosition(24);C39.setTabStop(false);C39.setTop(74);C39.setWidth(92);C39.setThemeDrawStyle("LightTitle+Heading2");C39.iC();C40.setCaption("M-");C40.setDisplayPosition(4);C40.setEllipses("WORD");C40.setHeight(38);C40.setLeft(98);C40.setParent(this);C40.setTabPosition(23);C40.setTabStop(false);C40.setTop(74);C40.setWidth(92);C40.setThemeDrawStyle("LightTitle+Heading2");C40.iC();C41.setCaption("CE");
C41.setDisplayPosition(5);C41.setEllipses("WORD");C41.setHeight(37);C41.setLeft(2);C41.setParent(this);C41.setTabPosition(22);C41.setTabStop(false);C41.setTop(116);C41.setWidth(92);C41.setThemeDrawStyle("AlternateItem+Heading2");C41.iC();C42.setCaption("Back");C42.setDisplayPosition(6);C42.setEllipses("WORD");C42.setHeight(37);C42.setLeft(194);C42.setParent(this);C42.setTabPosition(21);C42.setTabStop(false);C42.setTop(116);C42.setWidth(92);C42.setThemeDrawStyle("AlternateItem+Heading2");C42.iC();
C43.setCaption("MC");C43.setDisplayPosition(7);C43.setEllipses("WORD");C43.setHeight(38);C43.setLeft(194);C43.setParent(this);C43.setTabPosition(19);C43.setTabStop(false);C43.setTop(74);C43.setWidth(92);C43.setThemeDrawStyle("LightTitle+Heading2");C43.iC();C44.setCaption("MR");C44.setDisplayPosition(8);C44.setEllipses("WORD");C44.setHeight(38);C44.setLeft(290);C44.setParent(this);C44.setTabPosition(18);C44.setTabStop(false);C44.setTop(74);C44.setWidth(91);C44.setThemeDrawStyle("LightTitle+Heading2");
C44.iC();C45.setCaption("9");C45.setDisplayPosition(9);C45.setEllipses("WORD");C45.setHeight(37);C45.setLeft(194);C45.setParent(this);C45.setTabPosition(17);C45.setTabStop(false);C45.setTop(157);C45.setWidth(92);C45.setThemeDrawStyle("AlternateItem+Heading2");C45.iC();C46.setCaption("/");C46.setDisplayPosition(10);C46.setEllipses("WORD");C46.setHeight(37);C46.setLeft(290);C46.setParent(this);C46.setTabPosition(16);C46.setTabStop(false);C46.setTop(116);C46.setWidth(91);C46.setThemeDrawStyle("AlternateItem+Heading2");
C46.iC();C47.setCaption("4");C47.setDisplayPosition(11);C47.setEllipses("WORD");C47.setHeight(37);C47.setLeft(2);C47.setParent(this);C47.setTabPosition(15);C47.setTabStop(false);C47.setTop(198);C47.setWidth(92);C47.setThemeDrawStyle("AlternateItem+Heading2");C47.iC();C48.setDisplayPosition(12);C48.setEllipses("WORD");C48.setHeight(37);C48.setLeft(2);C48.setParent(this);C48.setTabPosition(14);C48.setTabStop(false);C48.setTop(239);C48.setWidth(92);C48.setThemeDrawStyle("AlternateItem+Heading2");C48.setCaption("1");
C48.iC();C49.setCaption("X");C49.setDisplayPosition(13);C49.setEllipses("WORD");C49.setHeight(37);C49.setLeft(290);C49.setParent(this);C49.setTabPosition(13);C49.setTabStop(false);C49.setTop(157);C49.setWidth(91);C49.setThemeDrawStyle("AlternateItem+Heading2");C49.iC();C50.setCaption("5");C50.setDisplayPosition(14);C50.setEllipses("WORD");C50.setHeight(37);C50.setLeft(98);C50.setParent(this);C50.setTabPosition(12);C50.setTabStop(false);C50.setTop(198);C50.setWidth(92);C50.setThemeDrawStyle("AlternateItem+Heading2");
C50.iC();C51.setCaption("6");C51.setDisplayPosition(15);C51.setEllipses("WORD");C51.setHeight(37);C51.setLeft(194);C51.setParent(this);C51.setTabPosition(11);C51.setTabStop(false);C51.setTop(198);C51.setWidth(92);C51.setThemeDrawStyle("AlternateItem+Heading2");C51.iC();C52.setCaption("-");C52.setDisplayPosition(16);C52.setEllipses("WORD");C52.setHeight(37);C52.setLeft(290);C52.setParent(this);C52.setTabPosition(10);C52.setTabStop(false);C52.setTop(198);C52.setWidth(91);C52.setThemeDrawStyle("AlternateItem+Heading2");
C52.iC();C53.setCaption("2");C53.setDisplayPosition(17);C53.setEllipses("WORD");C53.setHeight(37);C53.setLeft(98);C53.setParent(this);C53.setTabPosition(9);C53.setTabStop(false);C53.setTop(239);C53.setWidth(92);C53.setThemeDrawStyle("AlternateItem+Heading2");C53.iC();C54.setCaption("+/-");C54.setDisplayPosition(18);C54.setEllipses("WORD");C54.setHeight(37);C54.setLeft(2);C54.setParent(this);C54.setTabPosition(8);C54.setTabStop(false);C54.setTop(280);C54.setWidth(92);C54.setThemeDrawStyle("AlternateItem+Heading2");
C54.iC();C55.setCaption("0");C55.setDisplayPosition(19);C55.setEllipses("WORD");C55.setHeight(37);C55.setLeft(98);C55.setParent(this);C55.setTabPosition(7);C55.setTabStop(false);C55.setTop(280);C55.setWidth(92);C55.setThemeDrawStyle("AlternateItem+Heading2");C55.iC();C56.setCaption("3");C56.setDisplayPosition(20);C56.setEllipses("WORD");C56.setHeight(37);C56.setLeft(194);C56.setParent(this);C56.setTabPosition(6);C56.setTabStop(false);C56.setTop(239);C56.setWidth(92);C56.setThemeDrawStyle("AlternateItem+Heading2");
C56.iC();C57.setCaption("+");C57.setDisplayPosition(21);C57.setEllipses("WORD");C57.setHeight(37);C57.setLeft(290);C57.setParent(this);C57.setTabPosition(5);C57.setTabStop(false);C57.setTop(239);C57.setWidth(91);C57.setThemeDrawStyle("AlternateItem+Heading2");C57.iC();C58.setCaption(".");C58.setDisplayPosition(22);C58.setEllipses("WORD");C58.setHeight(37);C58.setLeft(194);C58.setParent(this);C58.setTabPosition(4);C58.setTabStop(false);C58.setTop(280);C58.setWidth(92);C58.setThemeDrawStyle("AlternateItem+Heading2");
C58.iC();C59.setCaption("=");C59.setDisplayPosition(23);C59.setEllipses("WORD");C59.setHeight(37);C59.setLeft(290);C59.setParent(this);C59.setTabPosition(3);C59.setTabStop(false);C59.setTop(280);C59.setWidth(91);C59.setThemeDrawStyle("AlternateItem+Heading2");C59.iC();C60.setCaption("8");C60.setDisplayPosition(24);C60.setEllipses("WORD");C60.setHeight(37);C60.setLeft(98);C60.setParent(this);C60.setTabPosition(1);C60.setTabStop(false);C60.setTop(157);C60.setWidth(92);C60.setThemeDrawStyle("AlternateItem+Heading2");
C60.iC();C61.setCaption("0");C61.setDisplayPosition(25);C61.setEllipses("WORD");C61.setHeight(42);C61.setLeft(0);C61.setParent(this);C61.setTabPosition(26);C61.setTabStop(false);C61.setTop(30);C61.setWidth(383);C61.setAlignment("RIGHT");C61.setThemeDrawStyle("Title");C61.setMarginRight(4);C61.setSelectable(true);C61.iC();C62.setStyle("COLLECTION");C62.setCollects("PRIM_SPBN");C62.setKeyedBy(Fd.F2.Dc);C62.iC();C63.setStyle("COLLECTION");C63.setCollects("PRIM_SPBN");C63.setKeyedBy(Fd.F2.Dc);C63.iC();
C64.aD();C64.iC();C65.aD();C65.iC();C66.setCaption("C");C66.setDisplayPosition(26);C66.setEllipses("WORD");C66.setHeight(37);C66.setLeft(98);C66.setParent(this);C66.setTabPosition(20);C66.setTabStop(false);C66.setTop(116);C66.setWidth(92);C66.setThemeDrawStyle("AlternateItem+Heading2");C66.iC();C67.setCaption("M");C67.setDisplayPosition(1);C67.setEllipses("WORD");C67.setHeight(20);C67.setLeft(0);C67.setParent(this);C67.setTabPosition(27);C67.setTabStop(false);C67.setTop(30);C67.setVerticalAlignment("CENTER");
C67.setWidth(21);C67.setAlignment("CENTER");C67.setThemeDrawStyle("Strong");C67.setVisible(false);C67.iC();C68.setBackgroundBrush(C69);C68.iC();C69.setColor("THEME400");C69.iC();C70.iC();C71.iC();C72.setParent(C71);C72.setDuration(50);C72.setStyle(C68);C72.iC();C73.setParent(C71);C73.setDuration(50);C73.setStartTime(50);C73.setStyle(C70);C73.iC();C74.iC();C75.setValue(true);C75.iC();C76.aD();C76.iC();C39.aH("CLICK",this,e10);C40.aH("CLICK",this,e11);C41.aH("CLICK",this,e7);C42.aH("CLICK",this,e8);
C43.aH("CLICK",this,e12);C44.aH("CLICK",this,e13);C54.aH("CLICK",this,e9);C59.aH("CLICK",this,e4);C62.aH("CLICK",this,e2);C63.aH("CLICK",this,e5);C66.aH("CLICK",this,e6);this.setLeft(0);this.setTop(0);this.setHeight(321);this.setWidth(385);this.setLayoutManager(C0);this.setAutoClose(false);this.setTitleBar(true);this.setCloseButton(true);this.setTouchMove("BOTH");this.setTouchSize("ALL");this.setAutoFocus(true);this.aH("CREATEINSTANCE",this,e1);this.aH("KEYPRESS",this,e3);this.aH("ENTER",this,e4);
}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",95);r.ln=95;{r.ln=97;m.DIGITS.set("0",m.L0);r.ln=98;m.DIGITS.set("1",m.L1);r.ln=99;m.DIGITS.set("2",m.L2);r.ln=100;m.DIGITS.set("3",m.L3);r.ln=101;m.DIGITS.set("4",m.L4);r.ln=102;m.DIGITS.set("5",m.L5);r.ln=103;m.DIGITS.set("6",m.L6);r.ln=104;m.DIGITS.set("7",m.L7);r.ln=105;m.DIGITS.set("8",m.L8);r.ln=106;m.DIGITS.set("9",m.L9);r.ln=107;m.DIGITS.set(".",m.LDECIMAL);r.ln=109;m.OPERATORS.set("/",m.LDIVIDE);r.ln=110;
m.OPERATORS.set("-",m.LMINUS);r.ln=111;m.OPERATORS.set("+",m.LPLUS);r.ln=112;m.OPERATORS.set("*",m.LTIMES);}r.ln=114;r.e();};function e2(SENDER,Ps){var r=l.eR(this,cO,"#Digits<>.Click",116);r.ln=116;{r.ln=118;cO.mthHANDLEDIGIT.call(this,SENDER.getCaption());}r.ln=120;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.KeyPress",122);var P0=Ps.r("CHAR");var P1=Ps.r("KEYCODE");r.ln=122;{r.ln=124;{var v1=P0.get();if(r.ln=126,l.s.eq(v1,"")){r.ln=128;{var v2=P1.get();if(r.ln=130,l.s.eq(v2,"BACKSPACE"))
{r.ln=132;cO.mthANIMATEKEYPRESS.call(this,m.LBACK);r.ln=133;this.mthHANDLEBACKSPACE();}else if(r.ln=135,l.s.eq(v2,"DELETE")){r.ln=137;cO.mthANIMATEKEYPRESS.call(this,m.LCLEARENTRY);r.ln=138;this.mthCLEARENTRY();}r.ln=140;}}else if(r.ln=142,l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.or(l.s.eq(v1,"0"),l.s.eq(v1,"1")),l.s.eq(v1,"2")),l.s.eq(v1,"3")),l.s.eq(v1,"4")),l.s.eq(v1,"5")),l.s.eq(v1,"6")),l.s.eq(v1,"7")),l.s.eq(v1,"8")),l.s.eq(v1,"9")),l.s.eq(v1,"."))){r.ln=144;cO.mthANIMATEKEYPRESS.call(this,m.DIGITS.get(P0.get()));
r.ln=145;cO.mthHANDLEDIGIT.call(this,P0.get());}else if(r.ln=147,l.or(l.or(l.or(l.s.eq(v1,"*"),l.s.eq(v1,"/")),l.s.eq(v1,"+")),l.s.eq(v1,"-"))){r.ln=149;cO.mthANIMATEKEYPRESS.call(this,m.OPERATORS.get(P0.get()));r.ln=150;cO.mthHANDLEOPERATOR.call(this,P0.get());}else if(r.ln=152,l.s.eq(v1,"=")){r.ln=154;cO.mthANIMATEKEYPRESS.call(this,m.LEQUALS);r.ln=155;this.mthHANDLEEQUALS();}r.ln=157;}}r.ln=159;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#lEquals.Click #Com_owner.Enter",161);r.ln=161;{r.ln=163;
this.mthHANDLEEQUALS();}r.ln=165;r.e();};function e5(SENDER,Ps){var r=l.eR(this,cO,"#Operators<>.Click",167);r.ln=167;{r.ln=169;cO.mthHANDLEOPERATOR.call(this,SENDER.getCaption());}r.ln=171;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#lClearAll.Click",173);r.ln=173;{r.ln=175;this.mthCLEARALL();}r.ln=177;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#lClearEntry.Click",179);r.ln=179;{r.ln=181;this.mthCLEARENTRY();}r.ln=183;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#lBack.Click",185);
r.ln=185;{r.ln=187;this.mthHANDLEBACKSPACE();}r.ln=189;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#lNegative.Click",191);r.ln=191;{r.ln=193;m.CURRENTVALUE.set(l.mul(m.CURRENTVALUE.get(),-1));r.ln=194;m.LOUTPUT.set(l.n.AsString(m.CURRENTVALUE.get()));}r.ln=196;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#lMemoryPlus.Click",198);r.ln=198;{r.ln=200;cO.mthUPDATEMEMORY.call(this,m.CURRENTVALUE.get());}r.ln=202;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#lMemoryMinus.Click",204);
r.ln=204;{r.ln=206;cO.mthUPDATEMEMORY.call(this,l.mul(m.CURRENTVALUE.get(),-1));}r.ln=208;r.e();};function e12(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#lMemoryClear.Click",210);r.ln=210;{r.ln=212;cO.mthUPDATEMEMORY.call(this,l.mul(m.MEMORY.get(),-1));}r.ln=214;r.e();};function e13(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#lMemoryRecall.Click",216);r.ln=216;{r.ln=218;m.CURRENTVALUE.set(m.MEMORY.get());r.ln=219;m.LOUTPUT.set(l.n.AsString(m.CURRENTVALUE.get()));}r.ln=221;r.e();};cO.mthSHOW=function(p0)
{var r=l.mR(this,cO,"Show",223);var P0=r.cP("RESET","PRIM_BOLN");P0.set((p0===u)?(true):(p0));r.ln=223;{r.ln=226;if(l.tB(P0.get())){r.ln=228;this.mthCLEARALL();}r.ln=232;this.mthSHOWPOPUP(u,u,u,u,u);}r.ln=234;r.e();};cO.mthHANDLEEQUALS=function(){var m=this.REF,r=l.mR(this,cO,"HandleEquals",236);r.ln=236;{r.ln=238;cO.mthANIMATEKEYPRESS.call(this,m.LEQUALS);r.ln=240;this.mthEVALUATE();r.ln=242;m.CURRENTVALUE.set(m.RUNNINGTOTAL.get());r.ln=243;m.ACTIVEOPERATOR.set("");}r.ln=245;r.e();};cO.mthHANDLEOPERATOR=function(p0)
{var m=this.REF,r=l.mR(this,cO,"HandleOperator",247);var P0=r.cP("OPERATOR","PRIM_STR");P0.set(p0);r.ln=247;{r.ln=250;this.mthEVALUATE();r.ln=251;m.ACTIVEOPERATOR.set(P0.get());}r.ln=253;r.e();};cO.mthHANDLEBACKSPACE=function(){var m=this.REF,r=l.mR(this,cO,"HandleBackSpace",255);r.ln=255;{r.ln=257;if(l.tB(l.not(m.ISRESULT.get()))){r.ln=259;if(l.n.gt(l.s.CurSize(m.LOUTPUT.getCaption()),1)){r.ln=261;m.LOUTPUT.set(l.s.Substring(m.LOUTPUT.getCaption(),1,l.sub(l.s.CurSize(m.LOUTPUT.getCaption()),1)));
}else{r.ln=265;m.LOUTPUT.set("0");}}r.ln=271;m.CURRENTVALUE.set(l.s.AsNumber(m.LOUTPUT.getCaption()));r.ln=272;m.ISRESULT.set(false);}r.ln=274;r.e();};cO.mthHANDLEDIGIT=function(p0){var m=this.REF,r=l.mR(this,cO,"HandleDigit",276);var P0=r.cP("DIGIT","PRIM_STR");P0.set(p0);r.ln=276;{r.ln=279;if(l.tB(l.or(m.ISRESULT.get(),l.s.eq(m.LOUTPUT.get(),"0")))){r.ln=281;if(l.tB(l.s.eq(P0.get(),"."))){r.ln=283;m.LOUTPUT.set("0.");}else{r.ln=287;m.LOUTPUT.set(P0.get());}}else{r.ln=293;if(l.tB(l.not(l.and(l.s.eq(P0.get(),"."),l.s.Contains(m.LOUTPUT.getCaption(),".")))))
{r.ln=295;m.LOUTPUT.set(l.add(m.LOUTPUT.get(),P0.get()));}}r.ln=301;m.CURRENTVALUE.set(l.s.AsNumber(m.LOUTPUT.getCaption()));r.ln=302;m.ISRESULT.set(false);}r.ln=304;r.e();};cO.mthEVALUATE=function(){var m=this.REF,r=l.mR(this,cO,"Evaluate",306);r.ln=306;{r.ln=308;{var v1=m.ACTIVEOPERATOR.get();if(r.ln=310,l.s.eq(v1,"")){r.ln=312;m.RUNNINGTOTAL.set(m.CURRENTVALUE.get());r.ln=313;m.CURRENTVALUE.set(0);}else if(r.ln=315,l.s.eq(v1,"/")){r.ln=317;if(l.n.ne(m.CURRENTVALUE.get(),0)){r.ln=319;m.RUNNINGTOTAL.set(l.div(m.RUNNINGTOTAL.get(),m.CURRENTVALUE.get()));
r.ln=320;m.CURRENTVALUE.set(0);}}else if(r.ln=324,l.s.eq(v1,"+")){r.ln=326;m.RUNNINGTOTAL.set(l.add(m.RUNNINGTOTAL.get(),m.CURRENTVALUE.get()));r.ln=327;m.CURRENTVALUE.set(0);}else if(r.ln=329,l.s.eq(v1,"-")){r.ln=331;m.RUNNINGTOTAL.set(l.sub(m.RUNNINGTOTAL.get(),m.CURRENTVALUE.get()));r.ln=332;m.CURRENTVALUE.set(0);}else if(r.ln=334,l.or(l.s.eq(v1,"X"),l.s.eq(v1,"*"))){r.ln=336;m.RUNNINGTOTAL.set(l.mul(m.RUNNINGTOTAL.get(),m.CURRENTVALUE.get()));r.ln=337;m.CURRENTVALUE.set(0);}r.ln=339;}r.ln=341;
m.LOUTPUT.set(l.n.AsString(m.RUNNINGTOTAL.get()));r.ln=342;m.ISRESULT.set(true);r.ln=344;{var eP=l.ePs();eP.cF("VALUE",Fd.F1.Dc);eP.r("VALUE").set(m.RUNNINGTOTAL.get());this.fE("CHANGED",eP);eP.e();}}r.ln=346;r.e();};cO.mthCLEARALL=function(){var m=this.REF,r=l.mR(this,cO,"ClearAll",348);r.ln=348;{r.ln=350;m.ISRESULT.set(true);r.ln=351;m.RUNNINGTOTAL.set(0);r.ln=352;m.CURRENTVALUE.set(0);r.ln=353;m.ACTIVEOPERATOR.set("");r.ln=354;m.LOUTPUT.set("0");}r.ln=356;r.e();};cO.mthCLEARENTRY=function(){var m=this.REF,r=l.mR(this,cO,"ClearEntry",358);
r.ln=358;{r.ln=360;m.CURRENTVALUE.set(0);r.ln=361;m.LOUTPUT.set("0");}r.ln=363;r.e();};cO.mthUPDATEMEMORY=function(p0){var m=this.REF,r=l.mR(this,cO,"UpdateMemory",365);var P0=r.cPF("VALUE",Fd.F1.Dc);P0.set(p0);r.ln=365;{r.ln=368;m.MEMORY.set(l.add(m.MEMORY.get(),P0.get()));r.ln=369;m.LMEMORY.setVisible(l.n.ne(m.MEMORY.get(),0));}r.ln=371;r.e();};cO.mthANIMATEKEYPRESS=function(p0){var m=this.REF,r=l.mR(this,cO,"AnimateKeyPress",373);var P0=r.cPD("CONTROL");P0=p0;r.ln=373;{r.ln=376;m.ANIMATIONKEYDOWN.setControl(P0);
m.ANIMATIONKEYUP.setControl(P0);r.ln=378;m.ANIMATION.mthSTART();}r.ln=380;r.e();};cO.getVALUE=function(){return this.REF.RUNNINGTOTAL.get();};function rl1(F2){var v=F2.get();return(l.s.eq(v,"Y")||l.s.eq(v,"N"));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMODECI"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_FLAG"});}},{rp:["PRIM_PPNL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_SPBN","PRIM_LABL","PRIM_KCOL","PRIM_FLD","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_ANIM","PRIM_ANIM.Style","PRIM_STR","PRIM_BOLN"]
});