﻿LANSA.addComponent({id:"XDEMOW_73",nm:"xDemoWebPaginatedList",ot:"wp",tp:"Web Page",de:"Paginated List",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var c1=l.cDec("1.87");var Fd={F1:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé"}[cL],h1:{"ENG":"Employee","FRA":"Image"}[cL],h2:{"ENG":"Image","FRA":"employé"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]
},F2:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé"}[cL],h1:{"ENG":"Employee","FRA":"Identification"}[cL],h2:{"ENG":"Identification","FRA":"Employé"}[cL],h3:" ",de:"Identification",dv:"",ia:["FE"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom"}[cL],h1:{"ENG":"Employee","FRA":"Nom"}[cL],h2:{"ENG":"Surname","FRA":"Employé"}[cL],h3:" ",de:{"ENG":"Surname","FRA":"Nom"}[cL],dv:"",ia:["FE","LC"]},F4:{
nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms"}[cL],h1:{"ENG":"Employee","FRA":"Prénoms"}[cL],h2:{"ENG":"Given","FRA":"Employé"}[cL],h3:{"ENG":"Names","FRA":" "}[cL],de:{"ENG":"Given Names","FRA":"Prénoms"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue"}[cL],h1:{"ENG":"Street","FRA":"Rue"}[cL],h2:" ",h3:" ",de:{"ENG":"Street","FRA":"Rue"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XCITY",an:"xEmployeeCity",
ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune"}[cL],h1:{"ENG":"City","FRA":"Commune"}[cL],h2:" ",h3:" ",de:{"ENG":"City","FRA":"Commune"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat"}[cL],h1:{"ENG":"State","FRA":"Etat"}[cL],h2:" ",h3:" ",de:{"ENG":"State","FRA":"Etat"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal"}[cL],h1:{"ENG":"Postal","FRA":"Code"}[cL],
h2:{"ENG":"Code","FRA":"Postal"}[cL],h3:" ",de:{"ENG":"Postal Code","FRA":"Code Postal"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},ShowPage:{ps:{"Page":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_73",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");
var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cR("LIST","PRIM_LIST");var C9=this.cR("COLUMNEMPTHM1","PRIM_LIST","Image");var C10=this.cR("COLUMNEMPNO1","PRIM_LIST","String");var C11=this.cR("COLUMNSURNAME1","PRIM_LIST","String");var C12=this.cR("COLUMNGIVENAME1","PRIM_LIST","String");var C13=this.cR("COLUMNXDEMOW_61","PRIM_LIST","Part");var C14=this.cR("CURRENTPAGE","PRIM_SPDT");var C15=this.cR("LABEL1","PRIM_LABL");var C16=this.cR("OFPAGES","PRIM_LABL");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(52);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setColumn(C1);C4.setManage(C8);C4.setParent(C0);C4.setRow(C3);C4.iC();C5.setAlignment("CENTERLEFT");C5.setColumn(C1);C5.setFlow("RIGHT");C5.setManage(C14);C5.setParent(C0);C5.setRow(C2);C5.setSizing("NONE");C5.iC();C6.setAlignment("CENTERLEFT");C6.setColumn(C1);C6.setFlow("RIGHT");C6.setManage(C15);
C6.setParent(C0);C6.setRow(C2);C6.setSizing("NONE");C6.setMarginLeft(4);C6.iC();C7.setAlignment("CENTERLEFT");C7.setColumn(C1);C7.setFlow("RIGHT");C7.setManage(C16);C7.setParent(C0);C7.setRow(C2);C7.setSizing("NONE");C7.setMarginLeft(2);C7.iC();C8.setDisplayPosition(2);C8.setHeight(748);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(1);C8.setTop(52);C8.setWidth(1200);C8.setRowHeight(40);C8.setColumnLines(false);C8.setRowLines(false);C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.setSource(f.F1);
C9.setColumnWidth(43);C9.setCellMarginBottom(2);C9.setCellMarginLeft(2);C9.setCellMarginRight(2);C9.setCellMarginTop(2);C9.setImageSizing("BESTFIT");C9.iC();C10.setDisplayPosition(2);C10.setParent(C8);C10.setSource(f.F2);C10.iC();C11.setDisplayPosition(3);C11.setParent(C8);C11.setSource(f.F3);C11.setColumnWidth(190);C11.iC();C12.setDisplayPosition(4);C12.setParent(C8);C12.setSource(f.F4);C12.setColumnWidth(222);C12.iC();C13.setColumnWidth(184);C13.setDesign("XDEMOW_6");C13.setDisplayPosition(5);C13.setParent(C8);
C13.setColumnCaption("Address");C13.iC();C14.setDisplayPosition(3);C14.setLeft(45);C14.setParent(this);C14.setShowSelection(false);C14.setShowSelectionHilight(false);C14.setTabPosition(2);C14.setTop(14);C14.setWidth(64);C14.setDisplayAlignment("RIGHT");C14.setEditAlignment("RIGHT");C14.iC();C15.setCaption("Page ");C15.setDisplayPosition(1);C15.setEllipses("WORD");C15.setHeight(25);C15.setLeft(4);C15.setParent(this);C15.setTabPosition(4);C15.setTabStop(false);C15.setTop(14);C15.setVerticalAlignment("CENTER");
C15.setWidth(41);C15.iC();C16.setCaption("of 80");C16.setDisplayPosition(4);C16.setEllipses("WORD");C16.setHeight(25);C16.setLeft(111);C16.setParent(this);C16.setTabPosition(3);C16.setTabStop(false);C16.setTop(14);C16.setVerticalAlignment("CENTER");C16.setWidth(120);C16.iC();C14.aH("CHANGED",this,e3);C13.aLF({"XSTREET":f.F5,"XCITY":f.F6,"XSTATE":f.F7,"XPOSTCODE":f.F8});this.setLayoutManager(C0);this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOW_73");li.EMPLOYEES=l.cLT({"XEMPTHM":f.F1,"XEMPLOYID":f.F2,"XGIVENAME":f.F4,"XSURNAME":f.F3,"XSTREET":f.F5,"XCITY":f.F6,"XSTATE":f.F7,"XPOSTCODE":f.F8},null);
li.DATA=l.cLT({"XEMPTHM":f.F1,"XEMPLOYID":f.F2,"XGIVENAME":f.F4,"XSURNAME":f.F3,"XSTREET":f.F5,"XCITY":f.F6,"XSTATE":f.F7,"XPOSTCODE":f.F8},null);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",25);r.ln=25;{r.ln=27;m.CURRENTPAGE.set(1);r.ln=29;this.mthLOAD();}r.ln=31;r.e();};cO.mthLOAD=function(){var li=this.LIST.XDEMOW_73,r=l.mR(this,cO,"Load",33),mth=r;var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=33;{r.ln=37;
C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=54;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed",39,mth);r.ln=39;{r.ln=42;for(var i1=1,s1=1,t1=l.tI(30);(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=44;{var l1=li.EMPLOYEES.selectList();while(l1.step()){r.ln=45;li.DATA.addEntry();r.ln=46;}l1.end();}}r.ln=50;cO.mthSHOWPAGE.call(this,1);}r.ln=52;r.e();}};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentPage.Changed",56);r.ln=56;{r.ln=58;
m.CURRENTPAGE.set(l.n.Bound(m.CURRENTPAGE.getValue(),1,80));r.ln=60;cO.mthSHOWPAGE.call(this,m.CURRENTPAGE.get());}r.ln=62;r.e();};cO.mthSHOWPAGE=function(p0){var li=this.LIST.XDEMOW_73,m=this.REF,r=l.mR(this,cO,"ShowPage",64);var P0=r.cP("PAGE","PRIM_NMBR");P0.set(p0);var C0=r.cR("CURRENTITEM","PRIM_NMBR");C0.iC();r.ln=64;{r.ln=69;m.LIST.clearList();r.ln=71;{var l1=li.DATA.selectList();while(l1.step()){r.ln=73;C0.set(l.add(C0.get(),1));r.ln=75;if(l.tB(l.n.le(C0.get(),l.mul(l.sub(P0.get(),1),15))))
{continue;}r.ln=77;m.LIST.addEntry();r.ln=79;if(l.tB(l.n.gt(C0.get(),l.mul(P0.get(),15)))){break;}r.ln=81;}l1.end();}}r.ln=83;r.e();};},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String","PRIM_LIST.Part","PRIM_SPDT","PRIM_LABL","PRIM_WEB.DataRequest"],dp:["PRIM_NMBR"]});