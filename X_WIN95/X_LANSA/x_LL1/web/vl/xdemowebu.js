﻿LANSA.addComponent({id:"XDEMOWEBU",nm:"xDemoWebUDCTree",ot:"wp",tp:"Web Page",de:"UDC Tree (Prim_tree)",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"XDEMOVALU",an:"xDemoValue",ft:"N",ln:256,dc:0,lb:"Generic Alphanu",h1:"Generic",h2:"Alphanumeric",h3:"Value",de:"Generic Alphanumeric Value",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{AddDepartments:{},AddDepartment:{ps:{"Department":{pt:"i"}}},AddEmployees:{ps:{"Department":{pt:"i"
},"ParentItem":{pt:"i"}}},AddEmployee:{ps:{"Employee":{pt:"i"},"ParentItem":{pt:"i"}}},Sort:{ps:{"Key":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOWEBU",Fd);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("ROW1","PRIM_TBLO","Row");var C4=this.cR("TREE1ITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("TREE","PRIM_TREE");var C7=this.cR("SORT","XDEMO_25");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setColumn(C2);C4.setManage(C6);C4.setParent(C1);C4.setRow(C3);C4.iC();C5.setColumn(C2);C5.setManage(C7);C5.setParent(C1);C5.setRow(C3);C5.setAlignment("TOPRIGHT");C5.setSizing("NONE");C5.setFlow("LEFT");C5.setMarginTop(4);C5.setMarginRight(20);C5.iC();C6.setDisplayPosition(2);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(2);C6.setTop(0);C6.setHeight(800);
C6.setWidth(1200);C6.iC();C7.setHeight(25);C7.setParent(this);C7.setWidth(210);C7.setLeft(970);C7.setTop(4);C7.iC();C0.aH("PREPARED",this,e2);C7.aH("ITEMGOTFOCUS",this,e3);C6.aDS("XDEMO_27");C6.aLF({});this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",16);r.ln=16;{r.ln=18;m.SORT.mthADD("ID","Sort by employee ID");r.ln=19;m.SORT.mthADD("GIVENNAME","Sort by given name");r.ln=20;
m.SORT.mthADD("SURNAME","Sort by surname");}r.ln=22;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#gData.Prepared",24);r.ln=24;{r.ln=26;this.mthADDDEPARTMENTS();r.ln=28;cO.mthSORT.call(this,"ID");}r.ln=30;r.e();};cO.mthADDDEPARTMENTS=function(){var m=this.REF,r=l.mR(this,cO,"AddDepartments",32);r.ln=32;{r.ln=34;{var l1=m.GDATA.ref.getDEPARTMENTS().cI();while(l1.step()){var DEPARTMENT=r.sR("DEPARTMENT",l1.item());r.ln=36;cO.mthADDDEPARTMENT.call(this,DEPARTMENT);r.ln=38;}l1.end();r.dR("DEPARTMENT");
}}r.ln=40;r.e();};cO.mthADDDEPARTMENT=function(p0){var m=this.REF,r=l.mR(this,cO,"AddDepartment",42);var P0=r.cPD("DEPARTMENT");var P1=r.cPD("RESULT");P0=p0;r.ln=42;{r.ln=46;P1=r.sR("P1",m.TREE.mthADD("XDEMO_28"));r.ln=48;P1.setRelatedReference(P0);r.ln=50;cO.mthADDEMPLOYEES.call(this,P0,P1);}r.ln=52;return r.rR(P1);};cO.mthADDEMPLOYEES=function(p0,p1){var r=l.mR(this,cO,"AddEmployees",54);var P0=r.cPD("DEPARTMENT");var P1=r.cPD("PARENTITEM");P0=p0;P1=p1;r.ln=54;{r.ln=58;{var l1=P0.getEMPLOYEES().cI();
while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=60;cO.mthADDEMPLOYEE.call(this,EMPLOYEE,P1);r.ln=62;}l1.end();r.dR("EMPLOYEE");}}r.ln=64;r.e();};cO.mthADDEMPLOYEE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"AddEmployee",66);var P0=r.cPD("EMPLOYEE");var P1=r.cPD("PARENTITEM");var P2=r.cPD("RESULT");P0=p0;P1=p1;r.ln=66;{r.ln=71;P2=r.sR("P2",m.TREE.mthADD("XDEMO_29"));r.ln=73;P2.setRelatedReference(P0);r.ln=74;P2.setParentItem(P1);}r.ln=76;return r.rR(P2);};function e3(sender,Ps){var r=l.eR(this,cO,"#Sort.ItemGotFocus",78);
var P0=Ps.r("VALUE");r.ln=78;{r.ln=80;cO.mthSORT.call(this,l.s.AsNativeString(P0.get()));}r.ln=82;r.e();};cO.mthSORT=function(p0){var m=this.REF,r=l.mR(this,cO,"Sort",84);var P0=r.cP("KEY","PRIM_STR");P0.set(p0);r.ln=84;{r.ln=87;m.TREE.mthSORT(P0);r.ln=88;m.SORT.mthFIND(P0.get());r.ln=90;{var l1=m.TREE.selectList();while(l1.step()){r.ln=92;l.cast(m.TREE.getCurrentItem().getDesign(),"XDEMO_27").mthUPDATENAME(P0.get());r.ln=94;}l1.end();}}r.ln=96;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOVALU"});}},{rc:["XDEMO_30","XDEMO_25","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_TREE","PRIM_FLD"],dc:["XDEMO_27"]});