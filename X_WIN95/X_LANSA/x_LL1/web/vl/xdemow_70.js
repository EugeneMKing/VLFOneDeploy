﻿LANSA.addComponent({id:"XDEMOW_70",nm:"xDemoWebHandlingMultipleServerRequests",ot:"wp",tp:"Web Page",de:"Handling Multiple Server Requests",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var c1=l.cDec("1.87");var Fd={F1:{nm:"XDEMOCAPT",an:"xDemoCaption",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:" ",h3:" ",de:"Caption",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . ."}[cL],h1:{"ENG":"I/O","FRA":"Statut"}[cL],
h2:{"ENG":"Status","FRA":"I/O"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Submit:{},AddRequest:{ps:{"Request":{pt:"i"}}},UpdateRequest:{ps:{"Request":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_70",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");
var C4=this.cR("LIST1ITEM1","PRIM_TBLO","Item");var C5=this.cR("REQUESTS","PRIM_SPDT");var C6=this.cR("SUBMIT","PRIM_PHBN");var C7=this.cR("LIST","PRIM_LIST");var C8=this.cR("COLUMNXDEMOCAPT1","PRIM_LIST","String");var C9=this.cR("MONITOR","XDEMO_85");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(50);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setColumn(C1);C4.setManage(C7);C4.setParent(C0);
C4.setRow(C3);C4.setMarginLeft(10);C4.setMarginBottom(10);C4.setMarginRight(10);C4.iC();C5.setDisplayPosition(1);C5.setParent(this);C5.setShowSelection(false);C5.setShowSelectionHilight(false);C5.setTabPosition(1);C5.setTop(16);C5.iC();C6.setCaption("Submit Requests");C6.setDisplayPosition(2);C6.setLeft(144);C6.setParent(this);C6.setTabPosition(2);C6.setTop(16);C6.setWidth(153);C6.iC();C7.setDisplayPosition(3);C7.setParent(this);C7.setTabPosition(3);C7.setTop(50);C7.setHeight(740);C7.setWidth(1180);
C7.setColumnLines(false);C7.setRowLines(false);C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.setSource(f.F1);C8.setColumnWidth(272);C8.setColumnUnits("PROPORTION");C8.setColumnCaption("Requests");C8.setColumnCaptionType("CAPTION");C8.iC();C9.iC();C5.aH("CHANGED",this,e2);C6.aH("CLICK",this,e3);C9.aH("REQUESTSCOMPLETED",this,e5);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015LIGHTBLUE"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",17);
r.ln=17;{r.ln=19;m.REQUESTS.set(20);}r.ln=21;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Requests.Changed",23);r.ln=23;{r.ln=26;m.REQUESTS.set(l.n.Bound(m.REQUESTS.getValue(),1,100));}r.ln=28;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Submit.Click",30);r.ln=30;{r.ln=32;m.LIST.clearList();r.ln=33;m.MONITOR.mthRESET();r.ln=36;m.SUBMIT.setVisible(false);r.ln=38;for(var i1=1,s1=1,t1=l.tI(m.REQUESTS.get());(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=40;
this.mthSUBMIT();}}r.ln=44;r.e();};cO.mthSUBMIT=function(){var r=l.mR(this,cO,"Submit",46),mth=r;var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e4);C0.aH("FAILED",this,e4);r.ln=46;{r.ln=52;cO.mthADDREQUEST.call(this,C0);r.ln=54;C0.mthEXECUTEASYNC({},{});}r.ln=63;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed #GetEmployees.Failed",56,mth);r.ln=56;{r.ln=59;cO.mthUPDATEREQUEST.call(this,C0);}r.ln=61;r.e();}};cO.mthADDREQUEST=function(p0)
{var f=this.FLD.XDEMOW_70,m=this.REF,r=l.mR(this,cO,"AddRequest",65);var P0=r.cPD("REQUEST");P0=p0;r.ln=65;{r.ln=69;m.MONITOR.mthADD(P0);r.ln=72;f.F1.set("Pending Request");r.ln=74;m.LIST.addEntry();r.ln=76;m.LIST.getCurrentItem().setRelatedReference(P0);}r.ln=78;r.e();};cO.mthUPDATEREQUEST=function(p0){var f=this.FLD.XDEMOW_70,m=this.REF,r=l.mR(this,cO,"UpdateRequest",80);var P0=r.cPD("REQUEST");P0=p0;var C0=r.cD("C0");r.ln=80;{r.ln=86;C0=r.sR("C0",m.LIST.mthFINDREFERENCE(P0));r.ln=89;f.F2.set(lIO=m.LIST.getEntry(C0.getEntry()));
r.ln=91;f.F1.set("Pending Request Completed");r.ln=93;m.LIST.updateEntry();}r.ln=95;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Monitor.RequestsCompleted",97);r.ln=97;{r.ln=100;m.SUBMIT.setVisible(true);}r.ln=102;r.e();};},{rc:["XDEMO_85"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_SPDT","PRIM_PHBN","PRIM_LIST","PRIM_LIST.String","PRIM_WEB.DataRequest"],dp:["PRIM_LIST.ListItem"]});