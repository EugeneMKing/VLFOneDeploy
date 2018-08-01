﻿LANSA.addComponent({id:"XFTMAIN",nm:"xFtMain",ot:"wp",tp:"Web Page",de:"Flight Tracker",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var rc1=l.cB("xftback_1.jpg");var rc2=l.cB("xftbackgr.jpg");var Fd={F1:{nm:"XFLTFLD06",an:"xFlightTrackerDepatureTime",ft:"NV",ln:512,dc:0,lb:"Departure Time",h1:"Departure",h2:"Time",h3:" ",de:"Departure Time",dv:"",ia:["ASQN","FE"]},F2:{nm:"DATEX",ft:"D",ln:10,dc:0,lb:{"ENG":"Date","FRA":"?"}[cL],h1:{"ENG":"DATE","FRA":"?"}[cL],
h2:" ",h3:" ",de:{"ENG":"DATE in installation format (RDMLX)","FRA":"?"}[cL],dv:l.n.AsDate(l.eSV("*DATE8"),"SYSFMT8"),ia:["ASQN","FE","ISO"]},F3:{nm:"TIMEX",ft:"T",ln:8,dc:0,lb:{"ENG":"Time","FRA":"?"}[cL],h1:{"ENG":"Time","FRA":"?"}[cL],h2:" ",h3:" ",de:{"ENG":"Current time (RDMLX)","FRA":"?"}[cL],dv:l.n.AsTime(l.eSV("*TIME"),"HHMMSS"),ia:["ASQN","FE","ISO"]},F4:{nm:"XFLTFLD01",an:"xFlightTrackerAirlineCode",ft:"NV",ln:512,dc:0,lb:"AirlineCode",h1:"AirlineCode",h2:" ",h3:" ",de:"AirlineCode",dv:"",
ia:["FE","LC"]},F5:{nm:"XFLTFLD02",an:"xFlightTrackerAirlineName",ft:"NV",ln:512,dc:0,lb:"Airline Name",h1:"Airline",h2:"Name",h3:" ",de:"Airline Name",dv:"",ia:["FE","LC"]},F6:{nm:"XFLTFLD22",an:"xFlightTrackerAirlineLogo",ft:"NV",ln:512,dc:0,lb:"AirlineLogo",h1:"AirlineLogo",h2:" ",h3:" ",de:"AirlineLogo",dv:"",ia:["FE","LC"]},F7:{nm:"XFLTFLD03",an:"xFlightTrackerAirportCode",ft:"NV",ln:512,dc:0,lb:"Airport Code",h1:"Airport",h2:"Code",h3:" ",de:"Airport Code",dv:"",ia:["FE","LC"]},F8:{nm:"XFLTFLD04",
an:"xFlightTrackerAirportName",ft:"NV",ln:512,dc:0,lb:"Airport Name",h1:"Airport",h2:"Name",h3:" ",de:"Airport Name",dv:"",ia:["FE","LC"]},F9:{nm:"XFLTFLD12",an:"xFlightTrackerCountry",ft:"NV",ln:512,dc:0,lb:"Country",h1:"Country",h2:" ",h3:" ",de:"Country",dv:"",ia:["FE","LC"]},F10:{nm:"XFLTFLD13",an:"xFlightTrackerRegion",ft:"NV",ln:512,dc:0,lb:"Region",h1:"Region",h2:" ",h3:" ",de:"Region",dv:"",ia:["FE","LC"]},F11:{nm:"XFLTFLD17",an:"xFlightTrackerAircraftCode",ft:"NV",ln:512,dc:0,lb:"Aircraft Code",
h1:"Aircraft",h2:"Code",h3:" ",de:"Aircraft Code",dv:"",ia:["FE","LC"]},F12:{nm:"XFLTFLD18",an:"xFlightTrackerAircraftName",ft:"NV",ln:512,dc:0,lb:"Aircraft Code",h1:"Aircraft",h2:"Code",h3:" ",de:{"ENG":"Aircraft","FRA":"Aircraft Code"}[cL],dv:"",ia:["FE","LC"]},F13:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . ."}[cL],h1:{"ENG":"I/O","FRA":"Statut"}[cL],h2:{"ENG":"Status","FRA":"I/O"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,rm:["dt"],mt:{Load:{},UpdateForDevice:{},FormatDateAndTime:{ps:{"iDateTime":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XFTMAIN",Fd);var C0=this.cR("STYLEOVERLAY","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("STYLEHAND","PRIM_VS","Style");var C3=this.cR("LAYOUTMAIN","PRIM_TBLO");var C4=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTMAINCOLUMN3","PRIM_TBLO","Column");
var C7=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTMAINROW2","PRIM_TBLO","Row");var C9=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");var C13=this.cR("LAYOUTMAINITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMAINITEM6","PRIM_TBLO","Item");var C15=this.cR("LAYOUTMAINITEM7","PRIM_TBLO","Item");var C16=this.cR("LAYOUTMAINITEM8","PRIM_TBLO","Item");
var C17=this.cR("LAYOUTMAINITEM9","PRIM_TBLO","Item");var C18=this.cR("APPBAR","PRIM_MD","AppBar");var C19=this.cR("TITLE","PRIM_MD","Label");var C20=this.cR("SETTINGS","PRIM_MD","Icon");var C21=this.cR("APPBARAIRPORT","XFTAPP_1");var C22=this.cR("APPBARFLIGHT","XFTAPPBA");var C23=this.cR("VIEWCONTAINER","PRIM_MD","ViewContainer");var C24=this.cR("HOMEVIEW","XFTHOME");var C25=this.cR("AIRPORTVIEW","XFTAIRPOR");var C26=this.cR("FLIGHTVIEW","XFTFLIGHT");var C27=this.cR("MERGELAYERSPANEL","PRIM_PANL");
var C28=this.cR("IMAGEOVERLAY","PRIM_PANL");var C29=this.cR("IMAGE","PRIM_IMAG");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("255:255:255");C1.setOpacity(60);C1.iC();C2.setCursor("HAND");C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.setWidth(12);C5.setMaxWidth(1200);C5.iC();C6.setDisplayPosition(3);C6.setParent(C3);C6.iC();C7.setDisplayPosition(1);C7.setParent(C3);C7.setHeight(44);C7.setUnits("CONTENT");C7.iC();C8.setDisplayPosition(2);
C8.setParent(C3);C8.iC();C9.setColumn(C5);C9.setManage(C23);C9.setParent(C3);C9.setRow(C8);C9.iC();C10.setColumn(C4);C10.setManage(C29);C10.setParent(C3);C10.setRow(C7);C10.setColumnSpan(3);C10.setRowSpan(3);C10.iC();C11.setManage(C28);C11.setParent(C3);C11.setRow(C7);C11.setColumn(C4);C11.setRowSpan(3);C11.setColumnSpan(3);C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C4);C12.setManage(C21);C12.setParent(C3);C12.setRow(C7);C12.setSizing("CONTENTHEIGHTFITTOWIDTH");C12.setColumnSpan(3);C12.setFlow("DOWN");
C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C4);C13.setManage(C22);C13.setParent(C3);C13.setRow(C7);C13.setSizing("CONTENTHEIGHTFITTOWIDTH");C13.setFlow("DOWN");C13.setColumnSpan(3);C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C4);C14.setManage(C18);C14.setParent(C3);C14.setRow(C7);C14.setSizing("FITTOWIDTH");C14.setFlow("DOWN");C14.setColumnSpan(3);C14.iC();C15.setManage(C19);C15.setParent(C3);C15.setRow(C7);C15.setSizing("CONTENTWIDTH");C15.setColumn(C5);C15.setAlignment("TOPLEFT");
C15.setMarginLeft(16);C15.setMarginTop(8);C15.iC();C16.setAlignment("TOPRIGHT");C16.setColumn(C5);C16.setManage(C20);C16.setParent(C3);C16.setRow(C7);C16.setSizing("NONE");C16.setMarginRight(16);C16.setMarginTop(8);C16.iC();C17.setManage(C27);C17.setParent(C3);C17.setRow(C8);C17.setSizing("FITTOWIDTH");C17.setColumn(C4);C17.setAlignment("TOPCENTER");C17.setColumnSpan(3);C17.iC();C18.setDisplayPosition(1);C18.setParent(this);C18.setTabPosition(1);C18.setWidth(1200);C18.setLayoutManager(C3);C18.setHeight(48);
C18.iC();C19.setCaption("Flight Tracker");C19.setDisplayPosition(1);C19.setLeft(102);C19.setParent(C18);C19.setTabPosition(1);C19.setThemeDrawStyle("Heading1");C19.setWidth(135);C19.setTop(8);C19.iC();C20.setDisplayPosition(2);C20.setIcon("local_airport");C20.setLeft(1063);C20.setParent(C18);C20.setTabPosition(2);C20.setTop(8);C20.setStyle(C2);C20.setVisible(false);C20.setHeight(36);C20.setWidth(36);C20.setThemeDrawStyle("DarkTitle");C20.iC();C21.setParent(this);C21.setTabStop(false);C21.setWidth(1200);
C21.setDisplayPosition(2);C21.setTabPosition(2);C21.setTop(48);C21.setVisible(false);C21.iC();C22.setParent(this);C22.setTabStop(false);C22.setWidth(1200);C22.setDisplayPosition(3);C22.setTop(188);C22.setTabPosition(3);C22.setVisible(false);C22.iC();C23.setDisplayPosition(4);C23.setLeft(86);C23.setParent(this);C23.setTabPosition(4);C23.setWidth(1029);C23.setTop(291);C23.setHeight(509);C23.iC();C24.setParent(C23);C24.setWidth(1029);C24.setLeft(343);C24.setTabPosition(2);C24.setHeight(509);C24.iC();
C25.setParent(C23);C25.setWidth(1029);C25.setLeft(686);C25.setHeight(509);C25.setTabPosition(3);C25.setDisplayPosition(2);C25.iC();C26.setHeight(509);C26.setParent(C23);C26.setWidth(1029);C26.setDisplayPosition(3);C26.setTop(166);C26.iC();C27.setDisplayPosition(5);C27.setHeight(40);C27.setLeft(0);C27.setParent(this);C27.setTabPosition(5);C27.setTabStop(false);C27.setTop(291);C27.setWidth(1200);C27.setThemeDrawStyle("DarkTitle");C27.setVisible(false);C27.iC();C28.setDisplayPosition(6);C28.setHeight(800);
C28.setLeft(0);C28.setParent(this);C28.setTabPosition(6);C28.setTabStop(false);C28.setTop(0);C28.setWidth(1200);C28.setStyle(C0);C28.iC();C29.setDisplayPosition(7);C29.setImage(rc1);C29.setImageSizing("FITBOTH");C29.setLeft(0);C29.setParent(this);C29.setTabPosition(7);C29.setTabStop(false);C29.setTop(0);C29.setWidth(1200);C29.setHeight(800);C29.iC();l.WEB().aH("DEVICECHANGED",this,e4);C20.aH("CLICK",this,e5);C21.aH("LOADAIRPORT",this,e8);C22.aH("LOADFLIGHT",this,e9);C24.aH("FINDAIRPORTS",this,e6);
C24.aH("FINDFLIGHTS",this,e7);C25.aH("FINDNAMEANDLOGO",this,e10);C26.aH("FINDNAMEANDLOGO",this,e10);this.setTheme(l.THEME().get("MATERIALDESIGNBLUE"));this.setLayoutManager(C3);this.aH("CREATEINSTANCE",this,e2);this.aH("INITIALIZE",this,e3);var li=this.aL("XFTMAIN");li.AIRLINES=l.cLT({"XFLTFLD01":f.F4,"XFLTFLD02":f.F5,"XFLTFLD22":f.F6},null);li.AIRPORTS=l.cLT({"XFLTFLD03":f.F7,"XFLTFLD04":f.F8,"XFLTFLD12":f.F9,"XFLTFLD13":f.F10},null);li.AIRCRAFTS=l.cLT({"XFLTFLD17":f.F11,"XFLTFLD18":f.F12},null);
}});cO.mthLOAD=function(){var li=this.LIST.XFTMAIN,f=this.FLD.XFTMAIN,m=this.REF,r=l.mR(this,cO,"Load",52),mth=r;var C0=r.cDR("SIGNIN","XFTSERVER","SIGNIN");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=52;{r.ln=56;C0.mthEXECUTEASYNC({},{LIST:{"AIRLINENAMES":li.AIRLINES,"AIRPORTNAMES":li.AIRPORTS,"AIRCRAFTNAMES":li.AIRCRAFTS}});r.ln=58;m.VIEWCONTAINER.setEnabled(false);r.ln=60;m.HOMEVIEW.mthSHOW();}r.ln=75;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#SignIn.Completed",62,mth);r.ln=62;{r.ln=64;{var l1=li.AIRPORTS.selectList();
while(l1.step()){r.ln=66;m.APPBARAIRPORT.mthADDAIRPORT(f.F7.get(),f.F8.get(),f.F9.get(),f.F10.get());r.ln=67;m.APPBARFLIGHT.mthADDAIRPORT(f.F7.get(),f.F8.get(),f.F9.get(),f.F10.get());r.ln=69;}l1.end();}r.ln=71;m.VIEWCONTAINER.setEnabled(true);}r.ln=73;r.e();}};cO.mthUPDATEFORDEVICE=function(){var m=this.REF,r=l.mR(this,cO,"UpdateForDevice",77);r.ln=77;{r.ln=79;{var v1=l.WEB().getDevice();if(r.ln=81,l.s.eq(v1,"MOBILE")){r.ln=83;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=84;m.LAYOUTMAINCOLUMN1.setWidth(0);
r.ln=86;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=87;m.LAYOUTMAINCOLUMN3.setWidth(0);r.ln=89;m.IMAGE.setImage(rc2);}else if(r.ln=91,l.s.eq(v1,"TABLET")){r.ln=93;m.LAYOUTMAINCOLUMN1.setUnits("PIXELS");r.ln=94;m.LAYOUTMAINCOLUMN1.setWidth(0);r.ln=96;m.LAYOUTMAINCOLUMN3.setUnits("PIXELS");r.ln=97;m.LAYOUTMAINCOLUMN3.setWidth(0);r.ln=99;m.IMAGE.setImage(rc1);}else if(r.ln=101,l.s.eq(v1,"DESKTOP")){r.ln=103;m.LAYOUTMAINCOLUMN1.setUnits("PROPORTION");r.ln=104;m.LAYOUTMAINCOLUMN1.setWidth(1);r.ln=106;
m.LAYOUTMAINCOLUMN3.setUnits("PROPORTION");r.ln=107;m.LAYOUTMAINCOLUMN3.setWidth(1);r.ln=109;m.IMAGE.setImage(rc1);}r.ln=111;}}r.ln=113;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",119);r.ln=119;{r.ln=121;m.VIEWCONTAINER.setEnabled(false);}r.ln=123;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Com_owner.Initialize",125);r.ln=125;{r.ln=127;this.mthLOAD();}r.ln=129;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Sys_Web.DeviceChanged",131);r.ln=131;
{r.ln=133;this.mthUPDATEFORDEVICE();}r.ln=135;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Settings.Click",137);r.ln=137;{r.ln=139;m.VIEWCONTAINER.setVisible(true);r.ln=140;m.MERGELAYERSPANEL.setVisible(false);r.ln=142;m.APPBARAIRPORT.setVisible(false);r.ln=143;m.APPBARFLIGHT.setVisible(false);r.ln=145;m.SETTINGS.mthFADEOUT(u,u,u);r.ln=147;m.HOMEVIEW.mthSHOW();}r.ln=149;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#HomeView.FindAirports",151);r.ln=151;{r.ln=153;
m.SETTINGS.setIcon("local_airport");r.ln=155;m.APPBARAIRPORT.setVisible(true);r.ln=156;m.APPBARFLIGHT.setVisible(false);r.ln=158;m.VIEWCONTAINER.mthCLEAR();r.ln=159;m.MERGELAYERSPANEL.setVisible(false);r.ln=161;m.SETTINGS.mthFADEIN(u,u);}r.ln=163;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#HomeView.FindFlights",165);r.ln=165;{r.ln=167;m.SETTINGS.setIcon("flight_takeoff");r.ln=169;m.APPBARFLIGHT.setVisible(true);r.ln=170;m.APPBARAIRPORT.setVisible(false);r.ln=172;m.VIEWCONTAINER.mthCLEAR();
r.ln=173;m.MERGELAYERSPANEL.setVisible(false);r.ln=175;m.SETTINGS.mthFADEIN(u,u);}r.ln=177;r.e();};function e8(sender,Ps){var li=this.LIST.XFTMAIN,f=this.FLD.XFTMAIN,m=this.REF,r=l.eR(this,cO,"#AppbarAirport.LoadAirport",179);var P0=Ps.r("AIRPORTID");var P1=Ps.r("AIRPORTFLIGHTTYPE");r.ln=179;{r.ln=181;m.MERGELAYERSPANEL.setVisible(true);r.ln=183;{var l1=li.AIRPORTS.selectList();while(l1.step()){r.ln=185;if(l.tB(l.ne(P0.get(),f.F7.get()))){continue;}r.ln=187;m.AIRPORTVIEW.mthLOADAIRPORT(P1.get(),f.F7.get(),f.F8.get(),f.F9.get());
r.ln=189;m.AIRPORTVIEW.mthSHOW();r.ln=191;}l1.end();}}r.ln=193;r.e();};function e9(sender,Ps){var li=this.LIST.XFTMAIN,f=this.FLD.XFTMAIN,m=this.REF,r=l.eR(this,cO,"#AppbarFlight.LoadFlight",195);var P0=Ps.r("ARRIVES");var P1=Ps.r("DEPARTS");var P2=Ps.r("DEPARTSDATE");var C0=r.cR("DEPARTSCODE","PRIM_STR");var C1=r.cR("DEPARTSNAME","PRIM_STR");var C2=r.cR("DEPARTSCOUNTRY","PRIM_STR");var C3=r.cR("ARRIVESCODE","PRIM_STR");var C4=r.cR("ARRIVESNAME","PRIM_STR");var C5=r.cR("ARRIVESCOUNTRY","PRIM_STR");
C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();r.ln=195;{r.ln=203;m.MERGELAYERSPANEL.setVisible(true);r.ln=205;{var l1=li.AIRPORTS.selectList();while(l1.step()){r.ln=207;if(l.tB(l.ne(f.F8.get(),P1.get()))){continue;}r.ln=209;C0.set(f.F7.get());r.ln=210;C1.set(f.F8.get());r.ln=211;C2.set(f.F9.get());r.ln=213;}l1.end();}r.ln=215;{var l1=li.AIRPORTS.selectList();while(l1.step()){r.ln=217;if(l.tB(l.ne(f.F8.get(),P0.get()))){continue;}r.ln=219;C3.set(f.F7.get());r.ln=220;C4.set(f.F8.get());r.ln=221;C5.set(f.F9.get());
r.ln=223;}l1.end();}r.ln=225;m.FLIGHTVIEW.mthLOADFLIGHT(C0.get(),C1.get(),C2.get(),C3.get(),C4.get(),C5.get(),P2.get());r.ln=227;m.FLIGHTVIEW.mthSHOW();}r.ln=229;r.e();};function e10(sender,Ps){var li=this.LIST.XFTMAIN,f=this.FLD.XFTMAIN,r=l.eR(this,cO,"#AirportView.FindNameAndLogo #FlightView.FindNameAndLogo",231);var P0=Ps.r("ID");var P1=Ps.r("NAME");var P2=Ps.r("LOGO");r.ln=231;{r.ln=233;f.F13.set(lIO=li.AIRLINES.locateEntry(function(e){return l.tB(l.eq(e[0],P0.get()))},null,true));r.ln=235;P1.set(f.F5.get());
r.ln=236;P2.set(f.F6.get());}r.ln=238;r.e();};cO.mthFORMATDATEANDTIME=function(p0){var r=l.mR(this,cO,"FormatDateAndTime",240);var P0=r.cPF("IDATETIME",Fd.F1.Dc);var P1=r.cPF("RESULT",Fd.F1.Dc);P0.set(p0);var C0=r.cF("LFLIGHTDATE",Fd.F2.Dc);var C1=r.cF("LFLIGHTTIME",Fd.F3.Dc);C0.iC();C1.iC();r.ln=240;{r.ln=248;C0.set(l.s.AsDate(l.s.RemoveAll(l.s.Substring(P0.get(),1,10),"-"),"CCYYMMDD"));r.ln=250;C1.set(l.s.AsTime(l.s.Substring(P0.get(),12,8),"HHSMMSSS"));r.ln=252;P1.set(l.s.Substitute("&1 &2",l.d.AsDisplayString(C0.get(),"DDXXBMMMMMMMMMBCCYY"),l.t.AsDisplayString(C1.get(),"HHSMMSSS")));
}r.ln=254;return r.rV(P1.get());};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XFLTFLD06"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"DATEX"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"TIMEX"});}},{rc:["XFTAPP_1","XFTAPPBA","XFTHOME","XFTAIRPOR","XFTFLIGHT"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.AppBar","PRIM_MD.Label","PRIM_MD.Icon","PRIM_MD.ViewContainer","PRIM_PANL","PRIM_IMAG","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_DTIM"],
dp:["PRIM_STR","PRIM_ANIM"]});