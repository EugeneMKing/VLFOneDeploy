﻿LANSA.addComponent({id:"XAADLG04",nm:"xAALocationDialog",ot:"wv",tp:"Dialog",de:"Location Dialog",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.82"),c2=l.cDec("1.7");var rc1=l.cB("xaabmp03.png");var Fd={F1:{nm:"XACCLATIT",an:"xAccidentLatitude",ft:"P",ln:15,dc:9,lb:"Latitude",h1:"Latitude",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Latitude",dv:0,ia:["FE","RB"]
},F2:{nm:"XACCLONGI",an:"xAccidentLongitude",ft:"P",ln:15,dc:9,lb:"Longitude",h1:"Longitude",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Longitude",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_DLG",fd:Fd,pt:{Latitude:{da:"rw"},Longitude:{da:"rw"}},mt:{ShowMap:{},CentreChanged:{ps:{"iLatitude":{pt:"i"},"iLongitude":{pt:"i"}}},GeolocationRefreshed:{},SetNewLocation:{}},ev:{LocationChanged:{ps:{"Latitude":{pt:"i"},"Longitude":{pt:"i"}}},GetMapProperties:
{ps:{"MapType":{pt:"o"},"MapZoom":{pt:"o"}}}},co:function(){cO.aN.call(this);this.aF("XAADLG04",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("STYLE2","PRIM_VS","Style");var C3=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C4=this.cR("STYLE3","PRIM_VS","Style");var C5=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C6=this.cR("LAYOUTHEADER","PRIM_TBLO");var C7=this.cR("COLUMN1","PRIM_TBLO","Column");var C8=this.cR("ROW1","PRIM_TBLO","Row");
var C9=this.cR("ROW2","PRIM_TBLO","Row");var C10=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C12=this.cR("LAYOUTCONTENT","PRIM_TBLO");var C13=this.cR("COLUMN2","PRIM_TBLO","Column");var C14=this.cR("COLUMN3","PRIM_TBLO","Column");var C15=this.cR("ROW3","PRIM_TBLO","Row");var C16=this.cR("LAYOUT2ITEM1","PRIM_TBLO","Item");var C17=this.cR("LAYOUT2ITEM2","PRIM_TBLO","Item");var C18=this.cR("LAYOUT1","PRIM_TBLO");var C19=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");
var C20=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C21=this.cR("LAYOUT1ITEM4","PRIM_TBLO","Item");var C22=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C23=this.cR("LAYOUTCONTENTITEM1","PRIM_TBLO","Item");var C24=this.cR("LAYOUT1ITEM5","PRIM_TBLO","Item");var C25=this.cR("LAYOUTHEADERITEM1","PRIM_TBLO","Item");var C26=this.cR("LAYOUT1ITEM6","PRIM_TBLO","Item");var C27=this.cR("CONTENTPANEL","PRIM_PANL");var C28=this.cR("HEADER","PRIM_PANL");var C29=this.cR("ICON","PRIM_MD","Icon");var C30=this.cR("HEADING","PRIM_MD","Label");
var C31=this.cR("GEOLOCATION","PRIM_WEB","Geolocation");var C32=this.cR("CURRENTLOCATION","PRIM_MD","FlatButton");var C33=this.cR("COORDINATES","PRIM_MD","Label");var C34=this.cR("SETNEWLOCATTION","PRIM_MD","Icon");var C35=this.cR("IMAGE1","PRIM_IMAG");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("255:255:255");C1.iC();C2.setForegroundBrush(C3);C2.iC();C3.setColor("255:111:16");C3.iC();C4.setForegroundBrush(C5);C4.iC();C5.setColor("255:113:18");C5.iC();C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);
C7.iC();C8.setDisplayPosition(1);C8.setParent(C6);C8.setHeight(48);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(2);C9.setParent(C6);C9.setHeight(c1);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C7);C10.setManage(C28);C10.setParent(C6);C10.setRow(C8);C10.iC();C11.setManage(C27);C11.setParent(C6);C11.setRow(C9);C11.setColumn(C7);C11.iC();C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.setWidth(48);C13.setUnits("PIXELS");C13.iC();C14.setDisplayPosition(2);C14.setParent(C12);C14.setWidth(c2);
C14.iC();C15.setDisplayPosition(1);C15.setParent(C12);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C13);C16.setManage(C29);C16.setParent(C12);C16.setRow(C15);C16.setSizing("NONE");C16.iC();C17.setColumn(C14);C17.setManage(C30);C17.setParent(C12);C17.setRow(C15);C17.setMarginRight(48);C17.iC();C18.iC();C19.setDisplayPosition(1);C19.setParent(C18);C19.iC();C20.setDisplayPosition(1);C20.setParent(C18);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C20);C21.setManage(C32);C21.setParent(C18);
C21.setRow(C19);C21.setSizing("NONE");C21.setMarginTop(4);C21.setMarginLeft(4);C21.iC();C22.setAlignment("BOTTOMCENTER");C22.setColumn(C20);C22.setManage(C33);C22.setParent(C18);C22.setRow(C19);C22.setSizing("CONTENTWIDTHANDHEIGHT");C22.iC();C23.setAlignment("CENTERRIGHT");C23.setColumn(C13);C23.setManage(C32);C23.setParent(C12);C23.setRow(C15);C23.setSizing("NONE");C23.setColumnSpan(2);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C20);C24.setManage(C34);C24.setParent(C18);C24.setRow(C19);C24.setSizing("NONE");
C24.setMarginLeft(4);C24.setMarginTop(4);C24.iC();C25.setColumn(C7);C25.setParent(C6);C25.setRow(C9);C25.iC();C26.setColumn(C20);C26.setManage(C35);C26.setParent(C18);C26.setRow(C19);C26.iC();C27.setParent(this);C27.setDisplayPosition(2);C27.setTabPosition(2);C27.setHeight(527);C27.setLeft(0);C27.setTop(48);C27.setWidth(382);C27.setVerticalScroll(true);C27.setLayoutManager(C18);C27.iC();C28.setParent(this);C28.setDisplayPosition(1);C28.setTabPosition(1);C28.setThemeDrawStyle("DarkTitle");C28.setHeight(48);
C28.setLeft(0);C28.setTop(0);C28.setWidth(382);C28.setLayoutManager(C12);C28.iC();C29.setDisplayPosition(1);C29.setIcon("arrow_back");C29.setLeft(0);C29.setParent(C28);C29.setTabPosition(2);C29.setTop(0);C29.iC();C30.setDisplayPosition(3);C30.setLeft(48);C30.setParent(C28);C30.setTabPosition(3);C30.setThemeDrawStyle("Heading2");C30.setTop(0);C30.setHeight(48);C30.setWidth(286);C30.setCaptionAlignment("CENTER");C30.setWordWrap(true);C30.setCaption("Accident Location");C30.iC();C31.iC();C32.setParent(C28);
C32.setDisplayPosition(2);C32.setTabPosition(1);C32.setLeft(340);C32.setTop(3);C32.setHeight(42);C32.setWidth(42);C32.setIcon("my_location");C32.setIconColor("WHITE");C32.setVisible(false);C32.setStyle(C2);C32.iC();C33.setParent(C27);C33.setDisplayPosition(2);C33.setTabPosition(1);C33.setThemeDrawStyle("DarkTitle+Heading3");C33.setLeft(186);C33.setTop(517);C33.setWidth(10);C33.setHeight(10);C33.setCaptionAlignment("CENTER");C33.iC();C34.setParent(C27);C34.setDisplayPosition(1);C34.setTabPosition(2);
C34.setIcon("location_on");C34.setLeft(4);C34.setTop(4);C34.setIconHeight(36);C34.setStyle(C4);C34.setVisible(false);C34.iC();C35.setDisplayPosition(3);C35.setHeight(527);C35.setImage(rc1);C35.setLeft(0);C35.setParent(C27);C35.setTabPosition(3);C35.setTabStop(false);C35.setTop(0);C35.setWidth(382);C35.setImageSizing("CROPPED");C35.iC();C29.aH("CLICK",this,e5);C31.aH("REFRESHED",this,e3);C32.aH("CLICK",this,e2);C34.aH("CLICK",this,e4);this.setHeight(577);this.setWidth(384);this.setLayoutManager(C6);
this.setPlacement("FULLSCREEN");this.setStyle(C0);this.setAutoClose(true);this.aH("PREPARE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Prepare",78);r.ln=78;{r.ln=80;this.mthSHOWMAP();}r.ln=82;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentLocation.Click",90);r.ln=90;{r.ln=92;m.GEOLOCATION.mthREFRESH();}r.ln=94;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Geolocation.Refreshed",96);r.ln=96;{r.ln=98;this.mthGEOLOCATIONREFRESHED();}r.ln=100;r.e();
};function e4(sender,Ps){var r=l.eR(this,cO,"#SetNewLocattion.Click",102);r.ln=102;{r.ln=104;this.mthSETNEWLOCATION();}r.ln=106;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Icon.Click",108);r.ln=108;{r.ln=110;this.mthCLOSE();}r.ln=112;r.e();};cO.mthSHOWMAP=function(){var m=this.REF,r=l.mR(this,cO,"ShowMap",118);r.ln=118;{r.ln=120;if(l.and(l.n.eq(this.getLATITUDE(),0),l.n.eq(this.getLONGITUDE(),0))){r.ln=122;m.GEOLOCATION.mthREFRESH();}}r.ln=139;r.e();};cO.mthCENTRECHANGED=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"CentreChanged",141);
var P0=r.cPF("ILATITUDE",Fd.F1.Dc);var P1=r.cPF("ILONGITUDE",Fd.F2.Dc);P0.set(p0);P1.set(p1);r.ln=141;{r.ln=145;m.COORDINATES.set(l.s.Substitute("&1N &2W",l.n.AsString(P0.get()),l.n.AsString(P1.get())));r.ln=147;this.setLATITUDE(P0.get());r.ln=148;this.setLONGITUDE(P1.get());}r.ln=150;r.e();};cO.mthGEOLOCATIONREFRESHED=function(){var m=this.REF,r=l.mR(this,cO,"GeolocationRefreshed",152);r.ln=152;{r.ln=156;this.setLATITUDE(m.GEOLOCATION.getLatitude());r.ln=158;this.setLONGITUDE(m.GEOLOCATION.getLongitude());
r.ln=160;this.mthSETNEWLOCATION();}r.ln=162;r.e();};cO.mthSETNEWLOCATION=function(){var r=l.mR(this,cO,"SetNewLocation",164);r.ln=164;{r.ln=168;{var eP=l.ePs();eP.cF("LATITUDE",Fd.F1.Dc);eP.cF("LONGITUDE",Fd.F2.Dc);eP.r("LATITUDE").set(this.getLATITUDE());eP.r("LONGITUDE").set(this.getLONGITUDE());this.fE("LOCATIONCHANGED",eP);eP.e();}}r.ln=170;r.e();};cO.getLATITUDE=function(){var f=this.FLD.XAADLG04;return f.F1.get();};cO.setLATITUDE=function(v){var f=this.FLD.XAADLG04;f.F1.set(v);};cO.getLONGITUDE=function()
{var f=this.FLD.XAADLG04;return f.F2.get();};cO.setLONGITUDE=function(v){var f=this.FLD.XAADLG04;f.F2.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XACCLATIT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XACCLONGI"});}},{rp:["PRIM_DLG","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_MD.Icon","PRIM_MD.Label","PRIM_WEB.Geolocation","PRIM_MD.FlatButton","PRIM_IMAG","PRIM_FLD"]
});