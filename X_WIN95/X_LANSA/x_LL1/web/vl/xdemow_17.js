﻿LANSA.addComponent({id:"XDEMOW_17",nm:"xDemoWebMaintenanceMultiplePage",ot:"wp",tp:"Web Page",de:"Using Multiple Pages",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var rc1=l.cB("ximageo_1.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé"}[cL],h1:{"ENG":"Employee","FRA":"Identification"}[cL],h2:{"ENG":"Identification","FRA":"Employé"}[cL],h3:" ",de:"Identification",dv:"",ia:["FE"]},F2:
{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre"}[cL],h1:{"ENG":"Employee","FRA":"Titre"}[cL],h2:{"ENG":"Title","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Title","FRA":"Titre"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé"}[cL],h1:{"ENG":"Employee","FRA":"Image"}[cL],h2:{"ENG":"Image","FRA":"employé"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]},F4:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom"}[cL],h1:{"ENG":"Employee","FRA":"Nom"}[cL],h2:{"ENG":"Surname","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Surname","FRA":"Nom"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms"}[cL],h2:{"ENG":"Given","FRA":"Employé"}[cL],h3:{"ENG":"Names","FRA":" "}[cL],de:{"ENG":"Given Names","FRA":"Prénoms"}[cL],
dv:"",ia:["FE","LC"]},F6:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance"}[cL],h1:{"ENG":"Employee","FRA":"Date"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance"}[cL],h3:{"ENG":" ","FRA":"Employé"}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F7:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre"}[cL],h1:{"ENG":"Employee","FRA":"Genre"}[cL],h2:{"ENG":"Gender","FRA":"Employé"}[cL],
h3:" ",de:{"ENG":"Gender","FRA":"Genre"}[cL],dv:"Male",ia:["FE","LC"]},F8:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue"}[cL],h1:{"ENG":"Street","FRA":"Rue"}[cL],h2:" ",h3:" ",de:{"ENG":"Street","FRA":"Rue"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune"}[cL],h1:{"ENG":"City","FRA":"Commune"}[cL],h2:" ",h3:" ",de:{"ENG":"City","FRA":"Commune"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XSTATE",an:"xEmployeeState",
ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat"}[cL],h1:{"ENG":"State","FRA":"Etat"}[cL],h2:" ",h3:" ",de:{"ENG":"State","FRA":"Etat"}[cL],dv:"",ia:["FE","LC"]},F11:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal"}[cL],h1:{"ENG":"Postal","FRA":"Code"}[cL],h2:{"ENG":"Code","FRA":"Postal"}[cL],h3:" ",de:{"ENG":"Postal Code","FRA":"Code Postal"}[cL],dv:"",ia:["FE"]},F12:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays"}[cL],
h1:{"ENG":"Country","FRA":"Pays"}[cL],h2:" ",h3:" ",de:{"ENG":"Country","FRA":"Pays"}[cL],dv:"",ia:["FE","LC"]},F13:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso"}[cL],h1:{"ENG":"Home","FRA":"Téléphone"}[cL],h2:{"ENG":"Telephone","FRA":"Personnel"}[cL],h3:" ",de:{"ENG":"Home Telephone","FRA":"Téléphone personnel"}[cL],dv:"",ia:["FE"]},F14:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail"}[cL],
h1:{"ENG":"Business","FRA":"Téléphone"}[cL],h2:{"ENG":"Telephone","FRA":"Travail"}[cL],h3:" ",de:{"ENG":"Business Telephone","FRA":"Téléphone travail"}[cL],dv:"",ia:["FE"]},F15:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob."}[cL],h1:{"ENG":"Employee","FRA":"Téléphone"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile"}[cL],h3:" ",de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile"}[cL],dv:"",ia:["FE"]},F16:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",
ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel"}[cL],h1:{"ENG":"Annual","FRA":"Salaire"}[cL],h2:{"ENG":"Salary","FRA":"Annuel"}[cL],h3:" ",de:{"ENG":"Annual Salary","FRA":"Salaire annuel"}[cL],dv:0,ia:["FE","RB"]},F17:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche"}[cL],h1:{"ENG":"Start","FRA":"Date"}[cL],h2:{"ENG":"Date","FRA":"Embauche"}[cL],h3:" ",de:{"ENG":"Start Date","FRA":"Date d'Embauche"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]
},F18:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ"}[cL],h1:{"ENG":"Termination","FRA":"Date"}[cL],h2:{"ENG":"Date","FRA":"Départ"}[cL],h3:" ",de:{"ENG":"Termination Date","FRA":"Date de départ"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département"}[cL],h1:{"ENG":"Department","FRA":"Code"}[cL],h2:{"ENG":"Code","FRA":"Département"}[cL],h3:" ",de:{"ENG":"Department","FRA":"Département"}[cL],
dv:"",ia:["FE"]},F20:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé"}[cL],h1:{"ENG":"Employee","FRA":"Image"}[cL],h2:{"ENG":"Image","FRA":"employé"}[cL],h3:" ",de:{"ENG":"Employee Image","FRA":"Image employé"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F21:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . ."}[cL],h1:{"ENG":"I/O","FRA":"Statut"}[cL],h2:{"ENG":"Status","FRA":"I/O"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},GetRootURL:{},GetUpdate:{ps:{"EmployeeNumber":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_17",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("ROW_3","PRIM_TBLO","Row");var C4=this.cR("ROW_4","PRIM_TBLO","Row");var C5=this.cR("ROW_5","PRIM_TBLO","Row");var C6=this.cR("COLUMN","PRIM_TBLO","Column");var C7=this.cR("COLUMN_2","PRIM_TBLO","Column");
var C8=this.cR("COLUMN_3","PRIM_TBLO","Column");var C9=this.cR("COLUMN_4","PRIM_TBLO","Column");var C10=this.cR("COLUMN_5","PRIM_TBLO","Column");var C11=this.cR("LIST","PRIM_LIST");var C12=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C13=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C14=this.cR("EMPLOYEEIMAGETHUMBNAIL","PRIM_LIST","Image");var C15=this.cR("COLUMNEMPNO","PRIM_LIST","String");var C16=this.cR("COLUMNSURNAME","PRIM_LIST","String");var C17=this.cR("COLUMNGIVENAME","PRIM_LIST","String");
var C18=this.cR("DETAILS","PRIM_LIST","Image");var C19=this.cR("LABEL","PRIM_LABL");var C20=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C21=this.cR("STYLE_2","PRIM_VS","Style");C0.setDividerStyle("GAP");C0.iC();C1.setDisplayPosition(2);C1.setParent(C0);C1.iC();C2.setDisplayPosition(3);C2.setParent(C0);C2.iC();C3.setDisplayPosition(4);C3.setParent(C0);C3.iC();C4.setDisplayPosition(5);C4.setParent(C0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setHeight(45);C5.setUnits("PIXELS");C5.iC();
C6.setDisplayPosition(1);C6.setParent(C0);C6.iC();C7.setDisplayPosition(2);C7.setParent(C0);C7.iC();C8.setDisplayPosition(3);C8.setParent(C0);C8.iC();C9.setDisplayPosition(4);C9.setParent(C0);C9.iC();C10.setDisplayPosition(5);C10.setParent(C0);C10.iC();C11.setDisplayPosition(1);C11.setHeight(751);C11.setLeft(2);C11.setParent(this);C11.setTabPosition(1);C11.setTop(47);C11.setWidth(1196);C11.setRowLines(false);C11.setColumnLines(false);C11.setStyle(C21);C11.iC();C12.setColumnWidth(81);C12.setDisplayPosition(3);
C12.setParent(C11);C12.setSource(f.F2);C12.iC();C13.setColumn(C6);C13.setManage(C11);C13.setParent(C0);C13.setRow(C1);C13.setColumnSpan(5);C13.setRowSpan(5);C13.setMarginTop(2);C13.setMarginBottom(2);C13.setMarginLeft(2);C13.setMarginRight(2);C13.iC();C14.setColumnWidth(50);C14.setDisplayPosition(1);C14.setParent(C11);C14.setImageSizing("BESTFIT");C14.setCellMarginTop(1);C14.setCellMarginBottom(1);C14.setCellMarginLeft(1);C14.setCellMarginRight(1);C14.setSource(f.F3);C14.iC();C15.setDisplayPosition(2);
C15.setParent(C11);C15.setSource(f.F1);C15.setColumnWidth(138);C15.iC();C16.setDisplayPosition(5);C16.setParent(C11);C16.setSource(f.F4);C16.setColumnWidth(221);C16.iC();C17.setDisplayPosition(4);C17.setParent(C11);C17.setSource(f.F5);C17.setColumnWidth(256);C17.iC();C18.setColumnWidth(50);C18.setDisplayPosition(6);C18.setParent(C11);C18.setImage(rc1);C18.setImageSizing("BESTFIT");C18.setCellMarginTop(2);C18.setCellMarginBottom(2);C18.iC();C19.setCaption("Employee Maintenance");C19.setDisplayPosition(2);
C19.setEllipses("WORD");C19.setLeft(2);C19.setParent(this);C19.setTabPosition(2);C19.setTabStop(false);C19.setTop(2);C19.setVerticalAlignment("CENTER");C19.setHeight(41);C19.setWidth(1196);C19.setMarginLeft(2);C19.setThemeDrawStyle("Title+DarkTitle");C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C6);C20.setFlow("DOWN");C20.setManage(C19);C20.setParent(C0);C20.setRow(C5);C20.setColumnSpan(5);C20.setMarginTop(2);C20.setMarginBottom(2);C20.setMarginLeft(2);C20.setMarginRight(2);C20.iC();C21.setBorderLeft(0);
C21.setBorderRight(0);C21.setBorderBottom(0);C21.iC();l.WEB().aH("STORAGECHANGED",this,e6);C11.aH("ITEMMOUSEENTER",this,e3);C11.aH("ITEMMOUSELEAVE",this,e4);C18.aH("CLICK",this,e5);this.setLayoutManager(C0);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOW_17");li.EMPLOYEES=l.cLT({"XEMPLOYID":f.F1,"XEMPTITLE":f.F2,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XEMPTHM":f.F3},null);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",44);r.ln=44;{r.ln=46;
this.mthLOAD();}r.ln=48;r.e();};cO.mthLOAD=function(){var li=this.LIST.XDEMOW_17,m=this.REF,r=l.mR(this,cO,"Load",50),mth=r;var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=50;{r.ln=54;C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=67;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed",56,mth);r.ln=56;{r.ln=58;{var l1=li.EMPLOYEES.selectList();while(l1.step()){r.ln=60;m.LIST.addEntry();r.ln=61;m.DETAILS.getCurrentItem().setVisible(false);
r.ln=63;}l1.end();}}r.ln=65;r.e();}};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemMouseEnter",69);r.ln=69;{r.ln=71;m.DETAILS.getCurrentItem().setVisible(true);}r.ln=73;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemMouseLeave",75);r.ln=75;{r.ln=77;m.DETAILS.getCurrentItem().setVisible(false);}r.ln=79;r.e();};function e5(sender,Ps){var f=this.FLD.XDEMOW_17,r=l.eR(this,cO,"#Details.Click",81);r.ln=81;{r.ln=83;l.WEB().mthNAVIGATE(l.cat(cO.mthGETROOTURL.call(this),l.s.Substitute("XDEMOW_18.html?Employee=&1",f.F1.get())));
}r.ln=85;r.e();};cO.mthGETROOTURL=function(){var r=l.mR(this,cO,"GetRootURL",87);var P0=r.cP("RESULT","PRIM_STR");r.ln=87;{r.ln=90;P0.set(l.s.Substring(l.WEB().getURL(),1,l.s.LastPositionOf(l.WEB().getURL(),"/")));}r.ln=92;return r.rV(P0.get());};function e6(sender,Ps){var r=l.eR(this,cO,"#sys_web.StorageChanged",94);r.ln=94;{r.ln=96;if((l.WEB().getLocalStorage().get("UPDATEEMPLOYEE")!=null)){r.ln=98;cO.mthGETUPDATE.call(this,l.WEB().getLocalStorage().get("UPDATEEMPLOYEE").getValue());}}r.ln=102;
r.e();};cO.mthGETUPDATE=function(p0){var f=this.FLD.XDEMOW_17,m=this.REF,r=l.mR(this,cO,"GetUpdate",104),mth=r;var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEE","XDEMOW_84","GETEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e7);r.ln=104;{r.ln=109;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":f.F1,"XEMPTITLE":f.F2,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XEMPDOB":f.F6,"XGENDER":f.F7,"XSTREET":f.F8,"XCITY":f.F9,"XSTATE":f.F10,"XPOSTCODE":f.F11,"XCOUNTRY":f.F12,"XPHONEHME":f.F13,"XPHONEBUS":f.F14,"XPHONEMOB":f.F15,"XSALARY":f.F16,"XSTARTDTE":f.F17,"XTERMDATE":f.F18,"XDEPTMENT":f.F19,"XEMPTHM":f.F3,"XEMPIMG":f.F20}});
}r.ln=125;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#GetEmployee.Completed",111,mth);r.ln=111;{r.ln=113;l.WEB().getLocalStorage().mthREMOVE("UPDATEEMPLOYEE");r.ln=115;f.F21.set(lIO=m.LIST.locateEntry(function(e){return l.s.eq(((e["XEMPLOYID"]!==u)?e["XEMPLOYID"]:f.F1.get()),((e["EMPLOYEENUMBER"]!==u)?e["EMPLOYEENUMBER"]:P0.get()))},null,false));r.ln=117;if(lIO=="OK"){r.ln=119;m.LIST.updateEntry();}}r.ln=123;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);
C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F7.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");
C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F7.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LIST","PRIM_LIST.String","PRIM_TBLO.Item","PRIM_LIST.Image","PRIM_LABL","PRIM_VS.Style","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT"]
});