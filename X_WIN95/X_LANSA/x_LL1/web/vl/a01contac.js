﻿LANSA.addComponent({id:"A01CONTAC",nm:"A01Contacts",ot:"wv",tp:"View",de:"Contacts",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"STD_STRNG",ft:"VC",ln:512,dc:0,lb:{"ENG":"Std string fld","FRA":"?"}[cL],h1:{"ENG":"Standard","FRA":"?"}[cL],h2:{"ENG":"String","FRA":"?"}[cL],h3:{"ENG":"Field","FRA":"?"}[cL],de:{"ENG":"Standard string field","FRA":"?"}[cL],dv:"",ia:["FE"]},F2:{nm:"XCONFNAM",an:"xContactFullName",ft:"NV",ln:210,dc:0,lb:"Full Name",h1:"Full Name",
h2:" ",h3:" ",de:"Full Name",dv:"",ia:["FE","LC"]},F3:{nm:"XCONFADD",an:"xContactFullAddress",ft:"NV",ln:260,dc:0,lb:"Full Address",h1:"Full",h2:"Address",h3:" ",de:"Full Address",dv:"",ia:["FE","LC"]},F4:{nm:"XCONEMAIL",an:"xContactEmailAddress",ft:"NV",ln:200,dc:0,lb:"Email Address",h1:"Email Address",h2:" ",h3:" ",de:"Email Address",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl1,mt:"Email Address is not valid"}]},F5:{nm:"XCONID",an:"xContactIdentification",ft:"I",ln:4,dc:0,
lb:"Contact ID",h1:"Contact ID",h2:" ",h3:" ",de:"Contact ID",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,pt:{Filter:{da:"r"}},mt:{Refresh:{},Create:{},ShowCurrentItem:{}},co:function(){cO.aN.call(this);var f=this.aF("A01CONTAC",Fd);var C0=this.cR("LAYOUTMAIN","PRIM_TBLO");var C1=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C2=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEMMAIN1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTITEMMAIN2","PRIM_TBLO","Item");var C5=this.cR("LAYOUTLIST","PRIM_TBLO");
var C6=this.cR("LAYOUTROW1","PRIM_TBLO","Column");var C7=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C12=this.cR("LIST","PRIM_MD","List");var C13=this.cR("LISTIMAGE","PRIM_MD","ListIcon");var C14=this.cR("LISTXCONTACTFULLNAME","PRIM_MD","ListLabel");var C15=this.cR("LISTXCONTACTFULLADDRESS","PRIM_MD","ListLabel");
var C16=this.cR("LISTXCONTACTEMAILADDRESS","PRIM_MD","ListLabel");var C17=this.cR("LISTXCONTACTIDENTIFICATION","PRIM_MD","ListLabel");var C18=this.cR("CREATEBUTTON","PRIM_MD","ActionButton");var C19=this.cF("FILTER",Fd.F1.Dc);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C2);C3.setManage(C12);C3.setParent(C0);C3.setRow(C1);C3.iC();C4.setAlignment("BOTTOMRIGHT");C4.setColumn(C2);C4.setManage(C18);C4.setParent(C0);C4.setRow(C1);
C4.setSizing("NONE");C4.setMarginBottom(16);C4.setMarginRight(16);C4.iC();C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setAlignment("CENTERLEFT");C8.setColumn(C6);C8.setManage(C13);C8.setMarginLeft(20);C8.setParent(C5);C8.setRow(C7);C8.setSizing("NONE");C8.iC();C9.setAlignment("CENTERLEFT");C9.setColumn(C6);C9.setFlow("CENTERVERTICAL");C9.setManage(C14);C9.setMarginLeft(86);C9.setMarginRight(16);C9.setParent(C5);C9.setRow(C7);C9.setSizing("FITTOWIDTH");
C9.iC();C10.setAlignment("CENTERLEFT");C10.setColumn(C6);C10.setFlow("CENTERVERTICAL");C10.setManage(C15);C10.setMarginLeft(86);C10.setMarginRight(16);C10.setParent(C5);C10.setRow(C7);C10.setSizing("FITTOWIDTH");C10.iC();C11.setAlignment("CENTERLEFT");C11.setColumn(C6);C11.setFlow("CENTERVERTICAL");C11.setManage(C16);C11.setMarginLeft(86);C11.setMarginRight(16);C11.setParent(C5);C11.setRow(C7);C11.setSizing("FITTOWIDTH");C11.iC();C12.setDisplayPosition(2);C12.setLayoutManager(C5);C12.setLeft(0);C12.setParent(this);
C12.setRowHeight(88);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(0);C12.setHeight(449);C12.setWidth(633);C12.iC();C13.setDisplayPosition(1);C13.setIcon("image");C13.setLeft(20);C13.setParent(C12);C13.setTabPosition(1);C13.setTabStop(false);C13.setTop(19);C13.setHeight(50);C13.setWidth(50);C13.setThemeDrawStyle("MediumTitle+Rounded");C13.iC();C14.setCaption("Full Name");C14.setDisplayPosition(4);C14.setHeight(20);C14.setLeft(86);C14.setParent(C12);C14.setTabPosition(4);C14.setTabStop(false);
C14.setTop(14);C14.setWidth(531);C14.setSource(f.F2);C14.iC();C15.setCaption("Full Address");C15.setDisplayPosition(5);C15.setHeight(20);C15.setLeft(86);C15.setParent(C12);C15.setTabPosition(5);C15.setTabStop(false);C15.setTop(34);C15.setWidth(531);C15.setSource(f.F3);C15.setThemeDrawStyle("ForegroundSecondary");C15.iC();C16.setCaption("Email Address");C16.setDisplayPosition(6);C16.setHeight(20);C16.setLeft(86);C16.setParent(C12);C16.setTabPosition(6);C16.setTabStop(false);C16.setTop(54);C16.setWidth(531);
C16.setSource(f.F4);C16.setThemeDrawStyle("ForegroundSecondary");C16.iC();C17.setDisplayPosition(5);C17.setHeight(0);C17.setLeft(0);C17.setParent(C12);C17.setTabPosition(6);C17.setTabStop(false);C17.setTop(0);C17.setWidth(0);C17.setSource(f.F5);C17.setVisible(false);C17.iC();C18.setDisplayPosition(1);C18.setIcon("add");C18.setLeft(561);C18.setParent(this);C18.setTabPosition(2);C18.setTop(377);C18.setThemeDrawStyle("DarkAccent");C18.setTabStop(false);C18.iC();C19.aD();C19.iC();C12.aH("ITEMCLICK",this,e2);
C18.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setHeight(449);this.setWidth(633);this.setLayoutManager(C0);this.setCaption("Contacts");this.setTabPosition(1);this.aH("PREPARE",this,e1);}});cO.mthSETFILTER=function(p0){var m=this.REF,r=l.pR(this,cO,"SetFilter",38);var P0=r.cPF("VALUE",Fd.F1.Dc);P0.set(p0);r.ln=38;{r.ln=41;m.FILTER.set(P0.get());r.ln=43;if(this.getIsActiveView()){r.ln=45;this.mthREFRESH();}}r.ln=49;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",55);
r.ln=55;{r.ln=57;m.FILTER.set("");r.ln=59;this.mthREFRESH();}r.ln=61;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#List.ItemClick",63);r.ln=63;{r.ln=65;this.mthSHOWCURRENTITEM();}r.ln=67;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#CreateButton.Click",69);r.ln=69;{r.ln=71;this.mthCREATE();}r.ln=73;r.e();};cO.mthREFRESH=function(){var m=this.REF,r=l.mR(this,cO,"Refresh",79);var C0=r.cDR("FIND","A01CONT_2","FIND");C0.iC();r.ln=79;{r.ln=82;m.LIST.clearList();r.ln=84;C0.mthEXECUTEASYNC({FLD:{"STD_STRNG":m.FILTER.get()}},{LIST:{"LIST":m.LIST}});
}r.ln=86;r.e();};cO.mthCREATE=function(){var r=l.mR(this,cO,"Create",88),mth=r;var C0=r.cR("DETAILS","A01CONT_1");C0.iC();C0.aH("ITEMSAVED",this,e4);r.ln=88;{r.ln=91;C0.mthCREATE();}r.ln=99;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#Details.ItemSaved",93,mth);r.ln=93;{r.ln=95;this.mthREFRESH();}r.ln=97;r.e();}};cO.mthSHOWCURRENTITEM=function(){var f=this.FLD.A01CONTAC,r=l.mR(this,cO,"ShowCurrentItem",101),mth=r;var C0=r.cR("DETAILS","A01CONT_1");C0.iC();C0.aH("ITEMDELETED",this,e5);C0.aH("ITEMSAVED",this,e5);
r.ln=101;{r.ln=104;C0.mthSHOWITEM(f.F5.get());}r.ln=112;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Details.ItemDeleted #Details.ItemSaved",106,mth);r.ln=106;{r.ln=108;this.mthREFRESH();}r.ln=110;r.e();}};cO.getFILTER=function(){return this.REF.FILTER.get();};cO.setFILTER=function(v){this.mthSETFILTER(v);};function rl1(F4){return (l.or(l.n.eq(l.s.CurChars(l.s.Trim(F4.get())),0),l.s.IsValidEmail(F4.get())));};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_STRNG"});
}},{rp:["PRIM_VIEW","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_MD.List","PRIM_MD.ListIcon","PRIM_MD.ListLabel","PRIM_MD.ActionButton","PRIM_FLD","PRIM_WEB.DataRequest"],dc:["A01CONT_1"]});