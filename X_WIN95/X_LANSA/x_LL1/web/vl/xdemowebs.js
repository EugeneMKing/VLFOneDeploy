﻿LANSA.addComponent({id:"XDEMOWEBS",nm:"xDemoWebSplashScreen",ot:"wp",tp:"Web Page",de:"Splash Screen",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé"}[cL],h1:{"ENG":"Employee","FRA":"Identification"}[cL],h2:{"ENG":"Identification","FRA":"Employé"}[cL],h3:" ",de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre"}[cL],
h1:{"ENG":"Employee","FRA":"Titre"}[cL],h2:{"ENG":"Title","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Title","FRA":"Titre"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom"}[cL],h1:{"ENG":"Employee","FRA":"Nom"}[cL],h2:{"ENG":"Surname","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Surname","FRA":"Nom"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms"}[cL],
h2:{"ENG":"Given","FRA":"Employé"}[cL],h3:{"ENG":"Names","FRA":" "}[cL],de:{"ENG":"Given Names","FRA":"Prénoms"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);var f=this.aF("XDEMOWEBS",Fd);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN","PRIM_TBLO","Column");var C4=this.cR("SPLASHITEM1","PRIM_TBLO","Item");var C5=this.cR("LIST","PRIM_LIST");var C6=this.cR("COLUMNXEMPLOYID1","PRIM_LIST","String");
var C7=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C8=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C9=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C10=this.cR("COLUMNIMAGE","PRIM_LIST","Image");var C11=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C12=this.cR("COLUMNADDRESS","PRIM_LIST","Part");var C13=this.cR("SPLASH","XDEMO_21");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();
C4.setColumn(C3);C4.setManage(C13);C4.setParent(C1);C4.setRow(C2);C4.setSizing("NONE");C4.iC();C5.setDisplayPosition(1);C5.setHeight(800);C5.setLeft(0);C5.setParent(this);C5.setTabPosition(2);C5.setTop(0);C5.setWidth(1200);C5.setRowHeight(53);C5.setRowResize(true);C5.setSelectionStyle("ALL");C5.setColumnLines(false);C5.setRowLines(false);C5.iC();C6.setColumnWidth(100);C6.setDisplayPosition(2);C6.setParent(C5);C6.setSource(f.F1);C6.iC();C7.setColumnWidth(118);C7.setDisplayPosition(3);C7.setParent(C5);
C7.setSource(f.F2);C7.iC();C8.setColumnWidth(246);C8.setDisplayPosition(4);C8.setParent(C5);C8.setSource(f.F3);C8.iC();C9.setColumnWidth(284);C9.setDisplayPosition(5);C9.setParent(C5);C9.setSource(f.F4);C9.iC();C10.setColumnWidth(38);C10.setDisplayPosition(1);C10.setParent(C5);C10.setImageSizing("BESTFIT");C10.iC();C11.setColumn(C3);C11.setManage(C5);C11.setParent(C1);C11.setRow(C2);C11.iC();C12.setDisplayPosition(6);C12.setParent(C5);C12.setDesign("XDEMOWEB");C12.setColumnWidth(201);C12.setColumnCaption("Address");
C12.iC();C13.setParent(this);C13.setLeft(428);C13.setTop(304);C13.setVisible(false);C13.iC();C0.aH("PREPARED",this,e2);this.setLayoutManager(C1);this.setTheme(l.THEME().get("2015BLUE"));this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#com_owner.Initialize",28);r.ln=28;{r.ln=31;this.setEnabled(false);r.ln=33;m.SPLASH.mthSHOWPOPUP(u,u,u,u,u);r.ln=34;m.SPLASH.mthFADEIN(500);}r.ln=36;r.e();};function e2(sender,Ps){var f=this.FLD.XDEMOWEBS,m=this.REF,r=l.eR(this,cO,"#gData.Prepared",38);
r.ln=38;{r.ln=40;m.SPLASH.mthFADEOUT(500);r.ln=43;{var l1=m.GDATA.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=45;f.F1.set(EMPLOYEE.getID());r.ln=46;f.F2.set(EMPLOYEE.getTITLE());r.ln=48;f.F3.set(EMPLOYEE.getSURNAME());r.ln=49;f.F4.set(EMPLOYEE.getGIVENNAME());r.ln=51;m.LIST.addEntry();r.ln=53;m.COLUMNIMAGE.getCurrentItem().setImage(EMPLOYEE.getTHUMBNAIL());r.ln=55;m.LIST.getCurrentItem().setRelatedReference(EMPLOYEE);r.ln=57;}l1.end();r.dR("EMPLOYEE");}r.ln=59;
this.setEnabled(true);}r.ln=61;r.e();};{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");
C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}},{rc:["XDEMO_30","XDEMO_21"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Image","PRIM_LIST.Part","PRIM_PKLT"],dp:["PRIM_ANIM"]});