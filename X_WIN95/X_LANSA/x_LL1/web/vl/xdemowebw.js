﻿LANSA.addComponent({id:"XDEMOWEBW",nm:"xDemoWebWeather",ot:"wp",tp:"Web Page",de:"Weather",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var rc1=l.cB("ximagewea.jpg");var Fd={F1:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:" ",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]},F2:{nm:"XDEMOUN_4",an:"xDemoUnicode256",ft:"N",ln:256,dc:0,lb:"Unicode 256",h1:"Unicode",h2:"256",h3:" ",de:"Unicode 256",dv:l.SqlNull,ia:["LC","ASQN"]
}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{AddCity:{ps:{"City":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOWEBW",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("STYLE2","PRIM_VS","Style");var C2=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C3=this.cR("STYLE3","PRIM_VS","Style");var C4=this.cR("STYLE4","PRIM_VS","Style");var C5=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C6=this.cR("TABLELAYOUT","PRIM_TBLO");var C7=this.cR("ROW_1","PRIM_TBLO","Row");var C8=this.cR("COLUMN_1","PRIM_TBLO","Column");
var C9=this.cR("TBLO_1","PRIM_TBLO","Item");var C10=this.cR("BACKGROUNDITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C15=this.cR("LIST","PRIM_TREE");var C16=this.cR("BACKGROUND","PRIM_IMAG");var C17=this.cR("LABEL1","PRIM_LABL");var C18=this.cR("OPENWEATHERID","PRIM_EDIT");var C19=this.cR("LABEL2","PRIM_LABL");var C20=this.cR("LABEL3","PRIM_LABL");
C0.setCursor("HAND");C0.setUnderline(false);C0.iC();C1.setBackgroundBrush(C2);C1.iC();C2.setColor("WHITE");C2.setOpacity(30);C2.iC();C3.setBorderBottom(0);C3.setBorderLeft(0);C3.setBorderRight(0);C3.setBorderTop(0);C3.iC();C4.setBackgroundBrush(C5);C4.setCursor("HAND");C4.iC();C5.setColor("WHITE");C5.setOpacity(30);C5.iC();C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.iC();C8.setDisplayPosition(1);C8.setParent(C6);C8.iC();C9.setColumn(C8);C9.setManage(C15);C9.setParent(C6);C9.setRow(C7);C9.iC();
C10.setColumn(C8);C10.setManage(C16);C10.setParent(C6);C10.setRow(C7);C10.setAlignment("TOPLEFT");C10.iC();C11.setColumn(C8);C11.setManage(C17);C11.setParent(C6);C11.setRow(C7);C11.setSizing("NONE");C11.setAlignment("TOPRIGHT");C11.setFlow("DOWN");C11.setMarginTop(4);C11.setMarginRight(4);C11.iC();C12.setColumn(C8);C12.setManage(C18);C12.setParent(C6);C12.setRow(C7);C12.setSizing("NONE");C12.setFlow("DOWN");C12.setAlignment("TOPRIGHT");C12.setMarginTop(4);C12.setMarginRight(4);C12.iC();C13.setColumn(C8);
C13.setManage(C19);C13.setParent(C6);C13.setRow(C7);C13.setSizing("NONE");C13.setAlignment("TOPRIGHT");C13.setFlow("DOWN");C13.setMarginRight(4);C13.iC();C14.setColumn(C8);C14.setManage(C20);C14.setParent(C6);C14.setRow(C7);C14.setSizing("NONE");C14.setAlignment("TOPRIGHT");C14.setFlow("DOWN");C14.setMarginRight(4);C14.iC();C15.setDisplayPosition(5);C15.setHeight(800);C15.setLeft(0);C15.setParent(this);C15.setTabPosition(1);C15.setTop(0);C15.setWidth(1200);C15.iC();C16.setParent(this);C16.setDisplayPosition(6);
C16.setTabPosition(2);C16.setImage(rc1);C16.setHeight(800);C16.setLeft(0);C16.setTop(0);C16.setWidth(1200);C16.setImageSizing("CROPPED");C16.iC();C17.setCaption("To use the OpenWeatherMap.Org API, you must register with the service.");C17.setDisplayPosition(1);C17.setEllipses("WORD");C17.setLeft(896);C17.setParent(this);C17.setTabPosition(5);C17.setTabStop(false);C17.setTop(4);C17.setWidth(300);C17.setAlignment("CENTER");C17.setVerticalAlignment("CENTER");C17.setHeight(80);C17.setThemeDrawStyle("Heading2");
C17.setStyle(C1);C17.iC();C18.setDisplayPosition(4);C18.setLeft(896);C18.setParent(this);C18.setShowSelection(false);C18.setShowSelectionHilight(false);C18.setTabPosition(6);C18.setTop(189);C18.setWidth(300);C18.setStyle(C3);C18.iC();C19.setDisplayPosition(2);C19.setEllipses("WORD");C19.setLeft(896);C19.setParent(this);C19.setTabPosition(4);C19.setTabStop(false);C19.setTop(84);C19.setWidth(300);C19.setHeight(33);C19.setThemeDrawStyle("Heading2");C19.setCaption("Register Here");C19.setAlignment("CENTER");
C19.setVerticalAlignment("CENTER");C19.setStyle(C4);C19.iC();C20.setDisplayPosition(3);C20.setEllipses("WORD");C20.setLeft(896);C20.setParent(this);C20.setTabPosition(3);C20.setTabStop(false);C20.setTop(117);C20.setWidth(300);C20.setHeight(68);C20.setThemeDrawStyle("Heading2");C20.setStyle(C1);C20.setCaption("Once you have registered, paste your AppID below");C20.setAlignment("CENTER");C20.setVerticalAlignment("CENTER");C20.iC();C18.aH("CHANGED",this,e3);C19.aH("CLICK",this,e4);C15.aDS("XDEMOW_4");
C15.aLF({"XDEMOUNIC":f.F1,"XDEMOUN_4":f.F2});this.setLayoutManager(C6);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);this.aH("DESTROYINSTANCE",this,e2);}});function e1(sender,Ps){var f=this.FLD.XDEMOWEBW,m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",31);r.ln=31;{r.ln=34;if((l.WEB().getLocalStorage().get("OPENWEATHERID")!=null)){r.ln=36;m.OPENWEATHERID.set(l.WEB().getLocalStorage().get("OPENWEATHERID").get());f.F2.set(l.WEB().getLocalStorage().get("OPENWEATHERID").get());
}r.ln=40;cO.mthADDCITY.call(this,"CURRENTLOCATION");r.ln=41;cO.mthADDCITY.call(this,"Sydney, AU");r.ln=42;cO.mthADDCITY.call(this,"London,UK");r.ln=43;cO.mthADDCITY.call(this,"CHICAGO");r.ln=44;cO.mthADDCITY.call(this,"TOKYO");}r.ln=46;r.e();};cO.mthADDCITY=function(p0){var f=this.FLD.XDEMOWEBW,m=this.REF,r=l.mR(this,cO,"AddCity",48);var P0=r.cP("CITY","PRIM_STR");P0.set(p0);r.ln=48;{r.ln=51;f.F1.set(P0.get());r.ln=52;m.LIST.addEntry();}r.ln=54;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.DestroyInstance",56);
r.ln=56;{r.ln=59;if((l.WEB().getLocalStorage().get("OPENWEATHERID")==null)){r.ln=61;l.WEB().getLocalStorage().mthADD("OPENWEATHERID",m.OPENWEATHERID.get());}else{r.ln=65;l.WEB().getLocalStorage().get("OPENWEATHERID").set(m.OPENWEATHERID.get());}}r.ln=69;r.e();};function e3(sender,Ps){var f=this.FLD.XDEMOWEBW,m=this.REF,r=l.eR(this,cO,"#OpenWeatherID.Changed",71);r.ln=71;{r.ln=73;{var l1=m.LIST.selectList();while(l1.step()){r.ln=75;f.F2.set(m.OPENWEATHERID.get());r.ln=76;m.LIST.updateEntry();r.ln=78;
}l1.end();}}r.ln=80;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Label2.Click",82);r.ln=82;{r.ln=84;l.WEB().mthNAVIGATE("http://home.openweathermap.org/","NEW");}r.ln=86;r.e();};},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_TREE","PRIM_IMAG","PRIM_LABL","PRIM_EDIT"],dc:["XDEMOW_4"]});