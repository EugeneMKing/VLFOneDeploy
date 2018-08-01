﻿LANSA.addComponent({id:"XFTAIRPOR",nm:"xFtAirportsView",ot:"wv",tp:"View",de:"Airports View",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("156.66"),c2=l.cDec("132.53"),c3=l.cDec("142.09");var Fd={F1:{nm:"XFLTFLD23",an:"xFlightTrackerComments",ft:"NV",ln:512,dc:0,lb:"Comments",h1:"Comments",h2:"",h3:"",de:"Comments",dv:"",ia:["FE","LC"]},F2:{nm:"XFLTFLD25",an:"xFlightTrackerOriginCity",ft:"NV",ln:512,dc:0,lb:"Origin City",
h1:"Origin",h2:"City",h3:"",de:"Origin City",dv:"",ia:["FE","LC"]},F3:{nm:"XFLTFLD06",an:"xFlightTrackerDepatureTime",ft:"NV",ln:512,dc:0,lb:"Departure Time",h1:"Departure",h2:"Time",h3:"",de:"Departure Time",dv:"",ia:["ASQN","FE"]},F4:{nm:"XFLTFLD05",an:"xFlightTrackerFlightNumber",ft:"NV",ln:512,dc:0,lb:"Flight Number",h1:"Flight",h2:"Number",h3:"",de:"Flight Number",dv:"",ia:["FE","LC"]},F5:{nm:"XFLTFLD24",an:"xFlightTrackerGate",ft:"NV",ln:512,dc:0,lb:"Gate",h1:"Gate",h2:"",h3:"",de:"Gate",dv:"",
ia:["FE","LC"]},F6:{nm:"XFLTFLD14",an:"xFlightTrackerDepartureTerminal",ft:"NV",ln:512,dc:0,lb:"Departure Termi",h1:"Departure",h2:"Terminal",h3:"",de:"Departure Terminal",dv:"",ia:["FE","LC"]},F7:{nm:"XFLTFLD02",an:"xFlightTrackerAirlineName",ft:"NV",ln:512,dc:0,lb:"Airline Name",h1:"Airline",h2:"Name",h3:"",de:"Airline Name",dv:"",ia:["FE","LC"]},F8:{nm:"XFLTFLD08",an:"xFlightTrackerCarrier",ft:"NV",ln:512,dc:0,lb:"AirlineCode",h1:"AirlineCode",h2:"",h3:"",de:"AirlineCode",dv:"",ia:["FE","LC"]},
F9:{nm:"XFLTFLD22",an:"xFlightTrackerAirlineLogo",ft:"NV",ln:512,dc:0,lb:"AirlineLogo",h1:"AirlineLogo",h2:"",h3:"",de:"AirlineLogo",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_VIEW",fd:Fd,mt:{LoadAirport:{ps:{"FlightType":{pt:"i"},"AirportId":{pt:"i"},"AirportName":{pt:"i"},"AirportCountry":{pt:"i"}}},UpdateForDevice:{},SetMobleThemeForComments:{ps:{"Comment":{pt:"i"}}}},ev:{FindNameAndLogo:{ps:{"Id":{pt:"i"},"Name":{pt:"o"},"Logo":{pt:"o"}}}},co:function(){cO.aN.call(this);var f=this.aF("XFTAIRPOR",Fd);
var C0=this.cR("STYLEBORDERTOP1","PRIM_VS","Style");var C1=this.cR("STYLENOBORDER","PRIM_VS","Style");var C2=this.cR("LAYOUTMAIN","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");var C10=this.cR("LAYOUTMAINITEM6","PRIM_TBLO","Item");
var C11=this.cR("LAYOUTMAINITEM7","PRIM_TBLO","Item");var C12=this.cR("LAYOUTLIST1","PRIM_TBLO");var C13=this.cR("LAYOUTLIST1COLUMN1","PRIM_TBLO","Column");var C14=this.cR("LAYOUTLIST1ROW1","PRIM_TBLO","Row");var C15=this.cR("LAYOUTLIST1ITEM2","PRIM_TBLO","Item");var C16=this.cR("LAYOUTLIST1ITEM3","PRIM_TBLO","Item");var C17=this.cR("LAYOUTLIST1ITEM4","PRIM_TBLO","Item");var C18=this.cR("LAYOUTLIST1ITEM5","PRIM_TBLO","Item");var C19=this.cR("LAYOUTLIST1ITEM6","PRIM_TBLO","Item");var C20=this.cR("LAYOUTLIST1ITEM7","PRIM_TBLO","Item");
var C21=this.cR("LAYOUTLIST1ITEM8","PRIM_TBLO","Item");var C22=this.cR("LAYOUTLIST1ITEM9","PRIM_TBLO","Item");var C23=this.cR("LAYOUT3","PRIM_TBLO");var C24=this.cR("LAYOUT3ROW1","PRIM_TBLO","Row");var C25=this.cR("LAYOUT3COLUMN1","PRIM_TBLO","Column");var C26=this.cR("LAYOUT3ITEM1","PRIM_TBLO","Item");var C27=this.cR("LAYOUT4","PRIM_TBLO");var C28=this.cR("LAYOUT4ROW1","PRIM_TBLO","Row");var C29=this.cR("LAYOUT4COLUMN1","PRIM_TBLO","Column");var C30=this.cR("LAYOUT4ITEM1","PRIM_TBLO","Item");var C31=this.cR("LAYOUT1","PRIM_TBLO");
var C32=this.cR("LAYOUT1ROW1","PRIM_TBLO","Row");var C33=this.cR("LAYOUT1COLUMN1","PRIM_TBLO","Column");var C34=this.cR("LAYOUT1ITEM1","PRIM_TBLO","Item");var C35=this.cR("LAYOUT1ITEM2","PRIM_TBLO","Item");var C36=this.cR("LAYOUT1ITEM3","PRIM_TBLO","Item");var C37=this.cR("LAYOUTLIST1ITEM10","PRIM_TBLO","Item");var C38=this.cR("AIRPORT","PRIM_MD","Label");var C39=this.cR("ARRIVALSORDEPARTURE","PRIM_MD","Label");var C40=this.cR("LISTDESKTOP","PRIM_LIST");var C41=this.cR("LISTIMAGE","PRIM_LIST","Image");
var C42=this.cR("COLUMNORIGINCITY","PRIM_LIST","String");var C43=this.cR("COLUMNDEPATURETIME","PRIM_LIST","String");var C44=this.cR("COLUMNFLIGHTNUMBER","PRIM_LIST","String");var C45=this.cR("COLUMNGATE","PRIM_LIST","String");var C46=this.cR("COLUMNTERMINAL","PRIM_LIST","String");var C47=this.cR("COLUMNCOMMENTS","PRIM_LIST","String");var C48=this.cR("LISTMOBILE","PRIM_MD","List");var C49=this.cR("ORIGINCITY","PRIM_MD","ListLabel");var C50=this.cR("FLIGHTNUMBER","PRIM_MD","ListLabel");var C51=this.cR("CURRENTTIME","PRIM_MD","ListLabel");
var C52=this.cR("GATE","PRIM_MD","ListLabel");var C53=this.cR("COMMENTS","PRIM_MD","ListLabel");var C54=this.cR("TAB","PRIM_TAB");var C55=this.cR("SHEETDESKTOP","PRIM_TBSH");var C56=this.cR("SHEETMOBILE","PRIM_TBSH");var C57=this.cR("PANEL1","PRIM_PANL");var C58=this.cR("LISTDIVIDER","PRIM_MD","ListLabel");var C59=this.cR("AIRLINENAME","PRIM_MD","ListLabel");C0.setBorderBottom(0);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(1);C0.iC();C1.setBorderBottom(0);C1.setBorderLeft(0);C1.setBorderRight(0);
C1.setBorderTop(0);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.setHeight(80);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(2);C5.setParent(C2);C5.iC();C6.setAlignment("CENTERLEFT");C6.setColumn(C3);C6.setManage(C39);C6.setParent(C2);C6.setRow(C4);C6.setFlow("CENTERVERTICAL");C6.setSizing("CONTENTHEIGHTFITTOWIDTH");C6.iC();C7.setAlignment("CENTERLEFT");C7.setColumn(C3);C7.setManage(C38);C7.setParent(C2);C7.setRow(C4);C7.setFlow("CENTERVERTICAL");
C7.setSizing("CONTENTHEIGHTFITTOWIDTH");C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C3);C8.setManage(C40);C8.setParent(C2);C8.setRow(C5);C8.iC();C9.setColumn(C3);C9.setManage(C48);C9.setParent(C2);C9.setRow(C5);C9.iC();C10.setManage(C54);C10.setParent(C2);C10.setRow(C5);C10.setColumn(C3);C10.iC();C11.setColumn(C3);C11.setManage(C57);C11.setParent(C2);C11.setRow(C4);C11.setRowSpan(2);C11.setMarginLeft(8);C11.setMarginRight(8);C11.setMarginTop(8);C11.iC();C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);
C13.iC();C14.setDisplayPosition(1);C14.setParent(C12);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C13);C15.setParent(C12);C15.setRow(C14);C15.setSizing("NONE");C15.setFlow("DOWN");C15.setMarginLeft(4);C15.setMarginTop(4);C15.iC();C16.setAlignment("CENTERLEFT");C16.setColumn(C13);C16.setParent(C12);C16.setRow(C14);C16.setSizing("FITTOWIDTH");C16.setFlow("CENTERVERTICAL");C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C13);C17.setManage(C50);C17.setParent(C12);C17.setRow(C14);C17.setSizing("CONTENTWIDTHANDHEIGHT");
C17.setFlow("DOWN");C17.setMarginLeft(16);C17.setMarginBottom(8);C17.setMarginTop(2);C17.iC();C18.setAlignment("TOPRIGHT");C18.setColumn(C13);C18.setManage(C51);C18.setParent(C12);C18.setRow(C14);C18.setSizing("CONTENTWIDTHANDHEIGHT");C18.setFlow("DOWN");C18.setMarginRight(16);C18.setMarginTop(10);C18.iC();C19.setAlignment("BOTTOMRIGHT");C19.setColumn(C13);C19.setManage(C52);C19.setParent(C12);C19.setRow(C14);C19.setSizing("CONTENTWIDTHANDHEIGHT");C19.setFlow("DOWN");C19.setMarginRight(16);C19.setMarginBottom(10);
C19.iC();C20.setAlignment("TOPRIGHT");C20.setColumn(C13);C20.setManage(C53);C20.setParent(C12);C20.setRow(C14);C20.setSizing("CONTENTWIDTHANDHEIGHT");C20.setFlow("DOWN");C20.setMarginRight(16);C20.setMarginTop(2);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C13);C21.setManage(C49);C21.setParent(C12);C21.setRow(C14);C21.setSizing("CONTENTWIDTHANDHEIGHT");C21.setFlow("DOWN");C21.setMarginLeft(16);C21.setMarginTop(8);C21.iC();C22.setAlignment("BOTTOMCENTER");C22.setColumn(C13);C22.setManage(C58);
C22.setParent(C12);C22.setRow(C14);C22.setSizing("FITTOWIDTH");C22.setColumnSpan(2);C22.iC();C23.iC();C24.setDisplayPosition(1);C24.setParent(C23);C24.iC();C25.setDisplayPosition(1);C25.setParent(C23);C25.iC();C26.setColumn(C25);C26.setManage(C40);C26.setParent(C23);C26.setRow(C24);C26.iC();C27.iC();C28.setDisplayPosition(1);C28.setParent(C27);C28.iC();C29.setDisplayPosition(1);C29.setParent(C27);C29.iC();C30.setColumn(C29);C30.setManage(C48);C30.setParent(C27);C30.setRow(C28);C30.iC();C31.iC();C32.setDisplayPosition(1);
C32.setParent(C31);C32.iC();C33.setDisplayPosition(1);C33.setParent(C31);C33.iC();C34.setAlignment("TOPCENTER");C34.setColumn(C33);C34.setManage(C38);C34.setParent(C31);C34.setRow(C32);C34.setSizing("FITTOWIDTH");C34.setFlow("DOWN");C34.setMarginTop(5);C34.iC();C35.setAlignment("TOPCENTER");C35.setColumn(C33);C35.setManage(C39);C35.setParent(C31);C35.setRow(C32);C35.setSizing("FITTOWIDTH");C35.setFlow("DOWN");C35.iC();C36.setColumn(C33);C36.setManage(C54);C36.setParent(C31);C36.setRow(C32);C36.setMarginTop(60);
C36.iC();C37.setAlignment("BOTTOMLEFT");C37.setColumn(C13);C37.setManage(C59);C37.setParent(C12);C37.setRow(C14);C37.setSizing("CONTENTWIDTHANDHEIGHT");C37.setFlow("DOWN");C37.setMarginLeft(16);C37.setMarginBottom(8);C37.iC();C38.setCaption("Airport Name");C38.setDisplayPosition(2);C38.setLeft(0);C38.setParent(C57);C38.setTabPosition(1);C38.setThemeDrawStyle("Heading2");C38.setHeight(26);C38.setWidth(946);C38.setTop(5);C38.setCaptionMarginLeft(16);C38.setCaptionAlignment("TOPLEFT");C38.iC();C39.setCaption("Arrivals or departures");
C39.setDisplayPosition(3);C39.setLeft(0);C39.setParent(C57);C39.setTabPosition(3);C39.setThemeDrawStyle("Subheading");C39.setTop(31);C39.setHeight(20);C39.setWidth(946);C39.setCaptionMarginLeft(16);C39.setCaptionAlignment("TOPLEFT");C39.iC();C40.setColumnHeaderHeight(48);C40.setColumnMarginLeft(24);C40.setColumnMarginRight(24);C40.setDisplayPosition(1);C40.setHeight(579);C40.setLeft(0);C40.setParent(C55);C40.setRowHeight(80);C40.setTabPosition(1);C40.setTop(0);C40.setWidth(946);C40.setColumnLines(false);
C40.setItemThemeDrawStyle("Heading3");C40.setStyle(C1);C40.iC();C41.setParent(C40);C41.setDisplayPosition(1);C41.setColumnWidth(144);C41.setColumnCaption("Airline");C41.setCellMarginBottom(24);C41.setCellMarginLeft(24);C41.setCellMarginRight(24);C41.setCellMarginTop(24);C41.setImageSizing("BESTFIT");C41.iC();C42.setColumnWidth(c1);C42.setDisplayPosition(2);C42.setParent(C40);C42.setSource(f.F2);C42.setColumnCaptionType("CAPTION");C42.setColumnCaption("Origin");C42.setColumnUnits("PROPORTION");C42.setColumnCaptionAlign("LEFT");
C42.iC();C43.setColumnWidth(88);C43.setDisplayPosition(3);C43.setParent(C40);C43.setSource(f.F3);C43.setColumnCaptionType("CAPTION");C43.setColumnCaption("Time");C43.setDisplayAlignment("RIGHT");C43.setColumnCaptionAlign("RIGHT");C43.iC();C44.setColumnWidth(c2);C44.setDisplayPosition(4);C44.setParent(C40);C44.setSource(f.F4);C44.setColumnUnits("PROPORTION");C44.setColumnCaptionAlign("RIGHT");C44.setDisplayAlignment("RIGHT");C44.iC();C45.setColumnWidth(88);C45.setDisplayPosition(5);C45.setParent(C40);
C45.setSource(f.F5);C45.setDisplayAlignment("RIGHT");C45.setColumnCaptionAlign("RIGHT");C45.iC();C46.setColumnWidth(100);C46.setDisplayPosition(6);C46.setParent(C40);C46.setSource(f.F6);C46.setColumnCaptionType("CAPTION");C46.setColumnCaption("Terminal");C46.setDisplayAlignment("RIGHT");C46.setColumnUnits("PROPORTION");C46.setColumnCaptionAlign("RIGHT");C46.setColumnVisible(false);C46.iC();C47.setColumnWidth(c3);C47.setDisplayPosition(7);C47.setParent(C40);C47.setSource(f.F1);C47.setThemeDrawStyle("Heading2");
C47.setColumnUnits("PROPORTION");C47.setColumnCaptionAlign("LEFT");C47.iC();C48.setDisplayPosition(1);C48.setLayoutManager(C12);C48.setLeft(0);C48.setParent(C56);C48.setRowHeight(80);C48.setTabPosition(1);C48.setThemeDrawStyle("Card");C48.setTop(0);C48.setHeight(579);C48.setWidth(930);C48.setStyle(C0);C48.iC();C49.setCaption("Origin City");C49.setDisplayPosition(5);C49.setDragStyle("NONE");C49.setLeft(16);C49.setParent(C48);C49.setSource(f.F2);C49.setTabPosition(1);C49.setTop(8);C49.setHeight(23);
C49.setThemeDrawStyle("Heading2");C49.setWidth(87);C49.setCaptionAlignment("TOPLEFT");C49.setCaptionMarginTop(0);C49.setCaptionMarginRight(0);C49.setCaptionMarginLeft(0);C49.setCaptionMarginBottom(0);C49.iC();C50.setCaption("Flight Number");C50.setDisplayPosition(6);C50.setDragStyle("NONE");C50.setLeft(16);C50.setParent(C48);C50.setSource(f.F4);C50.setTabPosition(4);C50.setTop(33);C50.setWidth(76);C50.setHeight(15);C50.setCaptionAlignment("TOPLEFT");C50.setCaptionMarginBottom(0);C50.setCaptionMarginLeft(0);
C50.setCaptionMarginRight(0);C50.setCaptionMarginTop(0);C50.setThemeDrawStyle("Subheading");C50.iC();C51.setDisplayPosition(1);C51.setDragStyle("NONE");C51.setLeft(833);C51.setParent(C48);C51.setSource(f.F3);C51.setTabPosition(5);C51.setHeight(17);C51.setWidth(81);C51.setCaptionAlignment("TOPRIGHT");C51.setCaption("Current Time");C51.setCaptionMarginBottom(0);C51.setCaptionMarginLeft(0);C51.setCaptionMarginRight(0);C51.setCaptionMarginTop(0);C51.iC();C52.setDisplayPosition(7);C52.setDragStyle("NONE");
C52.setLeft(860);C52.setParent(C48);C52.setSource(f.F5);C52.setTabPosition(6);C52.setTop(55);C52.setHeight(15);C52.setWidth(54);C52.setCaption("Gate: TBA");C52.setThemeDrawStyle("Subheading");C52.setCaptionMarginBottom(0);C52.setCaptionMarginLeft(0);C52.setCaptionMarginRight(0);C52.setCaptionMarginTop(0);C52.iC();C53.setDisplayPosition(4);C53.setDragStyle("NONE");C53.setLeft(845);C53.setParent(C48);C53.setSource(f.F1);C53.setTabPosition(7);C53.setTop(29);C53.setWidth(69);C53.setCaptionAlignment("TOPRIGHT");
C53.setHeight(17);C53.setWordWrap(true);C53.setCaption("Comments");C53.setCaptionMarginBottom(0);C53.setCaptionMarginLeft(0);C53.setCaptionMarginRight(0);C53.setCaptionMarginTop(0);C53.iC();C54.setBottomLayoutPriority(4);C54.setComponentVersion(2);C54.setDisplayPosition(1);C54.setHeight(579);C54.setLeft(0);C54.setLeftLayoutPriority(1);C54.setParent(C57);C54.setRightLayoutPriority(2);C54.setTabPosition(2);C54.setTopLayoutPriority(3);C54.setWidth(946);C54.setShowPageTabs(false);C54.setStyle(C1);C54.setTop(60);
C54.iC();C55.setDisplayPosition(1);C55.setHeight(579);C55.setLeft(0);C55.setParent(C54);C55.setTabPosition(1);C55.setTabStop(false);C55.setTop(0);C55.setWidth(946);C55.setLayoutManager(C23);C55.iC();C56.setDisplayPosition(2);C56.setHeight(579);C56.setLeft(0);C56.setParent(C54);C56.setTabPosition(2);C56.setTabStop(false);C56.setTop(0);C56.setWidth(946);C56.setLayoutManager(C27);C56.iC();C57.setDisplayPosition(1);C57.setHeight(641);C57.setLeft(8);C57.setParent(this);C57.setTabPosition(1);C57.setTabStop(false);
C57.setTop(8);C57.setWidth(948);C57.setLayoutManager(C31);C57.setThemeDrawStyle("Card");C57.iC();C58.setDisplayPosition(2);C58.setDragStyle("NONE");C58.setLeft(0);C58.setParent(C48);C58.setTabPosition(8);C58.setTop(79);C58.setThemeDrawStyle("BottomDivider");C58.setHeight(1);C58.setWidth(930);C58.iC();C59.setCaption("Airline Name");C59.setDisplayPosition(8);C59.setDragStyle("NONE");C59.setLeft(16);C59.setParent(C48);C59.setSource(f.F7);C59.setTabPosition(2);C59.setTop(55);C59.setWidth(79);C59.setHeight(17);
C59.setThemeDrawStyle("Emphasis+ForegroundMediumAccent");C59.setCaptionMarginBottom(0);C59.setCaptionMarginLeft(0);C59.setCaptionMarginRight(0);C59.setCaptionMarginTop(0);C59.iC();l.WEB().aH("DEVICECHANGED",this,e2);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C2);this.setCaption("Airport View");this.setHeight(649);this.setWidth(964);var li=this.aL("XFTAIRPOR");li.AIRPORTFLIGHTS=l.cLT({"XFLTFLD02":f.F7,"XFLTFLD08":f.F8,"XFLTFLD05":f.F4,"XFLTFLD25":f.F2,"XFLTFLD06":f.F3,"XFLTFLD23":f.F1,"XFLTFLD14":f.F6,"XFLTFLD24":f.F5},null);
}});cO.mthLOADAIRPORT=function(p0,p1,p2,p3){var li=this.LIST.XFTAIRPOR,f=this.FLD.XFTAIRPOR,m=this.REF,r=l.mR(this,cO,"LoadAirport",89),mth=r;var P0=r.cP("FLIGHTTYPE","PRIM_STR");var P1=r.cP("AIRPORTID","PRIM_STR");var P2=r.cP("AIRPORTNAME","PRIM_STR");var P3=r.cP("AIRPORTCOUNTRY","PRIM_STR");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);var C0=r.cDR("FIND","XFTSERVER","FINDAIRPORTFLIGHTS");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=89;{r.ln=97;m.LISTDESKTOP.clearList();r.ln=98;m.LISTMOBILE.clearList();
r.ln=100;m.AIRPORT.set(P2.get());r.ln=101;m.ARRIVALSORDEPARTURE.setCaption(P0.get());r.ln=103;m.PANEL1.setImage(l.WEB().getLoadingImage());r.ln=105;if(l.tB(l.s.eq(P0.get(),"Arrivals"))){r.ln=107;m.COLUMNORIGINCITY.setColumnCaption("Destination");}else{r.ln=111;m.COLUMNORIGINCITY.setColumnCaption("Origin");}r.ln=115;C0.mthEXECUTEASYNC({FLD:{"XFLTFLD21":P0.get(),"XFLTFLD03":P1.get()}},{LIST:{"AIRPORTFLIGHTS":li.AIRPORTFLIGHTS}});}r.ln=151;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Find.Completed",117,mth);
r.ln=117;{r.ln=119;this.mthUPDATEFORDEVICE();r.ln=121;{var l1=li.AIRPORTFLIGHTS.selectList();while(l1.step()){r.ln=123;{var eP=l.ePs();eP.cR("ID","PRIM_STR");eP.cR("NAME","PRIM_STR");eP.cR("LOGO","PRIM_STR");eP.r("ID").set(f.F8.get());this.fE("FINDNAMEANDLOGO",eP);f.F7.set(eP.r("NAME").get());f.F9.set(eP.r("LOGO").get());eP.e();}r.ln=125;if(l.s.eq(f.F9.get(),"")){continue;}r.ln=129;f.F4.set(l.s.Substitute("&1&2",f.F8.get(),f.F4.get()));r.ln=131;m.LISTDESKTOP.addEntry();r.ln=133;m.LISTIMAGE.getCurrentItem().setImageFileName(f.F9.get());
r.ln=135;m.COLUMNCOMMENTS.getCurrentItem().setThemeDrawStyle(cO.mthSETMOBLETHEMEFORCOMMENTS.call(this,f.F1.get()));r.ln=138;f.F5.set(l.s.Substitute("Gate: &1",f.F5.get()));r.ln=140;m.LISTMOBILE.addEntry();r.ln=142;m.COMMENTS.getCurrentItem().setThemeDrawStyle(cO.mthSETMOBLETHEMEFORCOMMENTS.call(this,f.F1.get()));r.ln=144;}l1.end();}r.ln=146;m.PANEL1.setImage(null);}r.ln=148;r.e();}};cO.mthUPDATEFORDEVICE=function(){var m=this.REF,r=l.mR(this,cO,"UpdateForDevice",153);r.ln=153;{r.ln=155;{var v1=l.WEB().getDevice();
if(r.ln=157,l.s.eq(v1,"MOBILE")){r.ln=159;m.SHEETDESKTOP.setVisible(false);r.ln=160;m.SHEETMOBILE.setVisible(true);}else if(r.ln=162,l.s.eq(v1,"TABLET")){r.ln=164;m.SHEETDESKTOP.setVisible(true);r.ln=165;m.SHEETMOBILE.setVisible(false);}else if(r.ln=167,l.s.eq(v1,"DESKTOP")){r.ln=169;m.SHEETDESKTOP.setVisible(true);r.ln=170;m.SHEETMOBILE.setVisible(false);}r.ln=172;}}r.ln=174;r.e();};cO.mthSETMOBLETHEMEFORCOMMENTS=function(p0){var r=l.mR(this,cO,"SetMobleThemeForComments",176);var P0=r.cPF("COMMENT",Fd.F1.Dc);
var P1=r.cP("THEME","PRIM_ALPH");P0.set(p0);r.ln=176;{r.ln=181;if(l.or(l.or(l.s.Contains(l.s.UpperCase(P0.get()),"BOARDING"),l.s.Contains(l.s.UpperCase(P0.get()),"DELAY")),l.s.Contains(l.s.UpperCase(P0.get()),"LATE"))){r.ln=183;P1.set("Subheading+ForegroundMediumAccent");}else{r.ln=187;if(l.s.Contains(l.s.UpperCase(P0.get()),"CANCEL")){r.ln=189;P1.set("Subheading+ForegroundMediumError+Strong");}else{r.ln=193;P1.set("Subheading+ForegroundMediumSuccess");}}}r.ln=199;return r.rV(P1.get());};function e2(sender,Ps)
{var r=l.eR(this,cO,"#SYS_WEB.DeviceChanged",205);r.ln=205;{r.ln=207;this.mthUPDATEFORDEVICE();}r.ln=209;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XFLTFLD23"});}},{rp:["PRIM_VIEW","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.Label","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String","PRIM_MD.List","PRIM_MD.ListLabel","PRIM_TAB","PRIM_TBSH","PRIM_PANL","PRIM_WEB.DataRequest","PRIM_FLD"]});