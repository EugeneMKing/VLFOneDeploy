﻿LANSA.addComponent({id:"XCECRTDLG",nm:"xCECreateEstimate",ot:"wv",tp:"Dialog",de:"Create Estimate",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"STD_DTIMX",ft:"DT",ln:26,dc:0,lb:{"ENG":"Std RDMLX Datim","FRA":"?","JPN":"?","LLL":"Std RDMLX Datim"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"RDMLX","FRA":"?","JPN":"?","LLL":"RDMLX"}[cL],h3:{"ENG":"Datetime","FRA":"?","JPN":"?","LLL":"Datetime"}[cL],
de:{"ENG":"Standard RDMLX Datetime","FRA":"?","JPN":"?","LLL":"Standard RDMLX Datetime"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO","SUTC"]},F2:{nm:"XFLRCVRID",an:"xFloorCoveringID",ft:"I",ln:4,dc:0,lb:{"ENG":"Floor Covering","FRA":"Category ID","JPN":"Category ID","LLL":"Floor Covering"}[cL],h1:{"ENG":"Floor","FRA":"Category","JPN":"Category","LLL":"Floor"}[cL],h2:{"ENG":"Covering ID","FRA":"ID","JPN":"ID","LLL":"Covering ID"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Floor Covering ID","FRA":"Category ID","JPN":"Category ID","LLL":"Floor Covering ID"}[cL],
dv:0,ia:["FE","RB"]},F3:{nm:"XFLRCVRN",an:"xFloorCoveringName",ft:"NV",ln:100,dc:0,lb:{"ENG":"Name","FRA":"Description","JPN":"Description","LLL":"Name"}[cL],h1:{"ENG":"Floor Covering","FRA":"Description","JPN":"Description","LLL":"Floor Covering"}[cL],h2:{"ENG":"Name","FRA":" ","JPN":" ","LLL":"Name"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Floor Covering Name","FRA":"Description","JPN":"Description","LLL":"Floor Covering Name"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"STD_BLOB",
ft:"BL",ln:0,dc:0,lb:{"ENG":"Standard BLOB","FRA":"?","JPN":"?","LLL":"Standard BLOB"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"BLOB","FRA":"?","JPN":"?","LLL":"BLOB"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Standard BLOB","FRA":"?","JPN":"?","LLL":"Standard BLOB"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F5:{nm:"XFLRCVR$",an:"xFloorCoveringPrice",ft:"P",ln:7,dc:2,lb:{"ENG":"Price","FRA":"Unit Price","JPN":"Unit Price","LLL":"Price"}[cL],
h1:{"ENG":"Floor Covering","FRA":"Unit","JPN":"Unit","LLL":"Floor Covering"}[cL],h2:"Price",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Floor Covering Price","FRA":"Unit Price","JPN":"Unit Price","LLL":"Floor Covering Price"}[cL],dv:0,ia:["FE","RB"]},F6:{nm:"XFLRCVCID",an:"xFloorCoveringCategoryID",ft:"I",ln:4,dc:0,lb:"Category ID",h1:{"ENG":"Floor Covering","FRA":"Category","JPN":"Category","LLL":"Floor Covering"}[cL],h2:{"ENG":"Category ID","FRA":"ID","JPN":"ID","LLL":"Category ID"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Floor Covering Category ID","FRA":"Category ID","JPN":"Category ID","LLL":"Floor Covering Category ID"}[cL],dv:0,ia:["FE","RB"]},F7:{nm:"XFLRCVRI",an:"xFloorCoveringImage",ft:"NV",ln:255,dc:0,lb:{"ENG":"Image","FRA":"Image","JPN":"Icon Name","LLL":"Image"}[cL],h1:{"ENG":"Floor Covering","FRA":"Image","JPN":"Icon Name","LLL":"Floor Covering"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Floor Covering Image","FRA":"Image","JPN":"Icon Name","LLL":"Floor Covering Image"}[cL],dv:"",ia:["ASQN","FE","LC"]},F8:{nm:"XFLRCVRM",an:"xFloorCoveringManufacturer",ft:"NV",ln:255,dc:0,lb:{"ENG":"Manufacturer","FRA":"Image","JPN":"Icon Name","LLL":"Manufacturer"}[cL],h1:{"ENG":"Floor Covering","FRA":"Image","JPN":"Icon Name","LLL":"Floor Covering"}[cL],h2:{"ENG":"Manufacturer","FRA":" ","JPN":" ","LLL":"Manufacturer"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Floor Covering Manufacturer","FRA":"Image","JPN":"Icon Name","LLL":"Floor Covering Manufacturer"}[cL],
dv:"",ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_DLG",fd:Fd,rm:["dt"],pt:{ClientName:{da:"na"},ContactName:{da:"na"},Phone:{da:"na"},Email:{da:"na"},AppointmentDate:{da:"na"},AppointmentTime:{da:"na"},Address:{da:"na"},City:{da:"na"},State:{da:"na"},ZipCode:{da:"na"},Price:{da:"na"},TotalPrice:{da:"na"},Dimensions:{da:"na"},RoomName:{da:"rw"},RoomLengthFeet:{da:"rw"},RoomLengthInches:{da:"rw"},RoomWidthFeet:{da:"rw"},RoomWidthInches:{da:"rw"},FloorID:{da:"r"},DiscountPercentage:{da:"rw"},TaxPercentage:
{da:"rw"},FloorName:{da:"r"},Status:{da:"rw"},Signature:{da:"rw"}},mt:{ReadFloor:{},Load:{ps:{"sClientName":{pt:"i"},"sContactName":{pt:"i"},"sPhone":{pt:"i"},"sEmail":{pt:"i"},"sAppointmentDate":{pt:"i"},"sAppointmentTime":{pt:"i"},"sAddress":{pt:"i"},"sCity":{pt:"i"},"sState":{pt:"i"},"sZipCode":{pt:"i"},"sRoomName":{pt:"i"},"sRoomLengthFeet":{pt:"i"},"sRoomLengthInches":{pt:"i"},"sRoomWidthFeet":{pt:"i"},"sRoomWidthInches":{pt:"i"},"sStatus":{pt:"i"}}},AllowSave:{}},ev:{CreateEstimate:{}},co:function()
{cO.aN.call(this);this.aF("XCECRTDLG",Fd);var C0=this.cR("STYLEHAND","PRIM_VS","Style");var C1=this.cR("LAYOUTMAIN","PRIM_TBLO");var C2=this.cR("LAYOUTMAINCOLUMN1","PRIM_TBLO","Column");var C3=this.cR("LAYOUTMAINCOLUMN2","PRIM_TBLO","Column");var C4=this.cR("LAYOUTMAINROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTMAINITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTMAINITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMAINITEM3","PRIM_TBLO","Item");var C8=this.cR("LAYOUTMAINITEM4","PRIM_TBLO","Item");
var C9=this.cR("LAYOUTPANEL1","PRIM_TBLO");var C10=this.cR("LAYOUTPANEL1ROW1","PRIM_TBLO","Row");var C11=this.cR("LAYOUTPANEL1COLUMN1","PRIM_TBLO","Column");var C12=this.cR("LAYOUTPANEL1ITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUTPANEL1ITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUTPANEL1ITEM3","PRIM_TBLO","Item");var C15=this.cR("LAYOUTPANEL1ITEM4","PRIM_TBLO","Item");var C16=this.cR("LAYOUTPANEL1ITEM5","PRIM_TBLO","Item");var C17=this.cR("LAYOUTPANEL1ITEM6","PRIM_TBLO","Item");var C18=this.cR("LAYOUTPANEL1ITEM7","PRIM_TBLO","Item");
var C19=this.cR("LAYOUTPANEL1ITEM8","PRIM_TBLO","Item");var C20=this.cR("LAYOUTPANEL1ITEM9","PRIM_TBLO","Item");var C21=this.cR("LAYOUTPANEL1ITEM10","PRIM_TBLO","Item");var C22=this.cR("LAYOUTPANEL1ITEM11","PRIM_TBLO","Item");var C23=this.cR("LAYOUTPANEL2","PRIM_TBLO");var C24=this.cR("LAYOUTPANEL2ROW1","PRIM_TBLO","Row");var C25=this.cR("LAYOUTPANEL2COLUMN1","PRIM_TBLO","Column");var C26=this.cR("LAYOUTPANEL2ITEM1","PRIM_TBLO","Item");var C27=this.cR("LAYOUTPANEL2ITEM2","PRIM_TBLO","Item");var C28=this.cR("LAYOUTPANEL2ITEM3","PRIM_TBLO","Item");
var C29=this.cR("LAYOUTPANEL2ITEM4","PRIM_TBLO","Item");var C30=this.cR("LAYOUTPANEL2ITEM5","PRIM_TBLO","Item");var C31=this.cR("APPBAR","PRIM_MD","AppBar");var C32=this.cR("BUTTONSAVE","PRIM_MD","RaisedButton");var C33=this.cR("PANEL1","PRIM_PANL");var C34=this.cR("TEXTINFORMATION","PRIM_MD","Label");var C35=this.cR("EDITCLIENTNAME","PRIM_MD","Edit");var C36=this.cR("EDITCONTACTNAME","PRIM_MD","Edit");var C37=this.cR("EDITPHONE","PRIM_MD","Edit");var C38=this.cR("EDITEMAIL","PRIM_MD","Edit");var C39=this.cR("TEXT2","PRIM_MD","Label");
var C40=this.cF("DATEAPPOINTMENTDATE",Fd.F1.DATETIMEFIELD);var C41=this.cR("DATEAPPOINTMENTTIME","PRIM_MD","DateTime");var C42=this.cR("PANEL2","PRIM_PANL");var C43=this.cR("TEXTLOCATION","PRIM_MD","Label");var C44=this.cR("EDITADDRESS","PRIM_MD","Edit");var C45=this.cR("EDITCITY","PRIM_MD","Edit");var C46=this.cR("EDITSTATE","PRIM_MD","Edit");var C47=this.cR("EDITZIPCODE","PRIM_MD","Edit");var C48=this.cR("ROOMNAME","PRIM_ALPH");var C49=this.cR("ROOMLENGTHFEET","PRIM_NMBR");var C50=this.cR("ROOMLENGTHINCHES","PRIM_NMBR");
var C51=this.cR("ROOMWIDTHFEET","PRIM_NMBR");var C52=this.cR("ROOMWIDTHINCHES","PRIM_NMBR");var C53=this.cR("STATUS","PRIM_ALPH");var C54=this.cR("TOTALDISCOUNTPERCENTAGE","PRIM_NMBR");var C55=this.cR("TOTALTAXPERCENTAGE","PRIM_NMBR");C0.setCursor("HAND");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(1);C4.setParent(C1);C4.iC();C5.setAlignment("TOPCENTER");C5.setColumn(C2);C5.setManage(C31);C5.setParent(C1);
C5.setRow(C4);C5.setSizing("FITTOWIDTH");C5.setColumnSpan(2);C5.iC();C6.setAlignment("BOTTOMCENTER");C6.setColumn(C2);C6.setManage(C32);C6.setParent(C1);C6.setRow(C4);C6.setSizing("FITTOWIDTH");C6.setColumnSpan(2);C6.iC();C7.setColumn(C2);C7.setManage(C33);C7.setParent(C1);C7.setRow(C4);C7.setMarginTop(56);C7.setMarginBottom(56);C7.iC();C8.setColumn(C3);C8.setManage(C42);C8.setParent(C1);C8.setRow(C4);C8.setMarginTop(56);C8.iC();C9.iC();C10.setDisplayPosition(1);C10.setParent(C9);C10.iC();C11.setDisplayPosition(1);
C11.setParent(C9);C11.iC();C12.setAlignment("TOPCENTER");C12.setColumn(C11);C12.setManage(C34);C12.setParent(C9);C12.setRow(C10);C12.setSizing("FITTOWIDTH");C12.setFlow("DOWN");C12.setMarginLeft(20);C12.setMarginRight(20);C12.setMarginTop(20);C12.setMarginBottom(20);C12.iC();C13.setAlignment("TOPCENTER");C13.setColumn(C11);C13.setManage(C43);C13.setParent(C9);C13.setRow(C10);C13.setSizing("FITTOWIDTH");C13.setFlow("DOWN");C13.iC();C14.setAlignment("TOPCENTER");C14.setColumn(C11);C14.setManage(C35);
C14.setParent(C9);C14.setRow(C10);C14.setSizing("FITTOWIDTH");C14.setFlow("DOWN");C14.setMarginBottom(5);C14.setMarginLeft(20);C14.setMarginRight(20);C14.setMarginTop(10);C14.iC();C15.setAlignment("TOPCENTER");C15.setColumn(C11);C15.setManage(C36);C15.setParent(C9);C15.setRow(C10);C15.setSizing("FITTOWIDTH");C15.setFlow("DOWN");C15.setMarginBottom(5);C15.setMarginLeft(20);C15.setMarginRight(20);C15.setMarginTop(10);C15.iC();C16.setAlignment("TOPCENTER");C16.setColumn(C11);C16.setManage(C37);C16.setParent(C9);
C16.setRow(C10);C16.setSizing("FITTOWIDTH");C16.setFlow("DOWN");C16.setMarginBottom(5);C16.setMarginLeft(20);C16.setMarginRight(20);C16.setMarginTop(10);C16.iC();C17.setAlignment("TOPCENTER");C17.setColumn(C11);C17.setManage(C38);C17.setParent(C9);C17.setRow(C10);C17.setSizing("FITTOWIDTH");C17.setFlow("DOWN");C17.setMarginBottom(5);C17.setMarginLeft(20);C17.setMarginRight(20);C17.setMarginTop(10);C17.iC();C18.setColumn(C11);C18.setManage(C41);C18.setParent(C9);C18.setSizing("NONE");C18.setAlignment("TOPRIGHT");
C18.setFlow("DOWN");C18.setRow(C10);C18.setMarginRight(20);C18.setMarginTop(522);C18.iC();C19.setAlignment("TOPCENTER");C19.setColumn(C11);C19.setManage(C40);C19.setParent(C9);C19.setRow(C10);C19.setSizing("FITTOWIDTH");C19.setFlow("DOWN");C19.setMarginBottom(5);C19.setMarginLeft(20);C19.setMarginRight(240);C19.setMarginTop(10);C19.iC();C20.setAlignment("TOPCENTER");C20.setColumn(C11);C20.setManage(C39);C20.setParent(C9);C20.setRow(C10);C20.setSizing("FITTOWIDTH");C20.setFlow("DOWN");C20.setMarginBottom(20);
C20.setMarginLeft(20);C20.setMarginRight(20);C20.setMarginTop(20);C20.iC();C21.setAlignment("TOPCENTER");C21.setColumn(C11);C21.setManage(C44);C21.setParent(C9);C21.setRow(C10);C21.setSizing("FITTOWIDTH");C21.setFlow("DOWN");C21.setMarginBottom(20);C21.setMarginLeft(20);C21.setMarginRight(20);C21.setMarginTop(10);C21.iC();C22.setAlignment("TOPCENTER");C22.setColumn(C11);C22.setManage(C42);C22.setParent(C9);C22.setRow(C10);C22.setSizing("FITTOWIDTH");C22.setFlow("DOWN");C22.iC();C23.iC();C24.setDisplayPosition(1);
C24.setParent(C23);C24.iC();C25.setDisplayPosition(1);C25.setParent(C23);C25.iC();C26.setAlignment("TOPCENTER");C26.setColumn(C25);C26.setManage(C43);C26.setParent(C23);C26.setRow(C24);C26.setSizing("FITTOWIDTH");C26.setFlow("DOWN");C26.setMarginBottom(20);C26.setMarginLeft(20);C26.setMarginRight(20);C26.setMarginTop(20);C26.iC();C27.setAlignment("TOPCENTER");C27.setColumn(C25);C27.setManage(C44);C27.setParent(C23);C27.setRow(C24);C27.setSizing("FITTOWIDTH");C27.setFlow("DOWN");C27.setMarginBottom(5);
C27.setMarginLeft(20);C27.setMarginRight(20);C27.setMarginTop(10);C27.iC();C28.setAlignment("TOPCENTER");C28.setColumn(C25);C28.setManage(C45);C28.setParent(C23);C28.setRow(C24);C28.setSizing("FITTOWIDTH");C28.setFlow("DOWN");C28.setMarginBottom(5);C28.setMarginLeft(20);C28.setMarginRight(100);C28.setMarginTop(10);C28.iC();C29.setAlignment("TOPRIGHT");C29.setColumn(C25);C29.setManage(C46);C29.setParent(C23);C29.setRow(C24);C29.setSizing("NONE");C29.setFlow("DOWN");C29.setMarginBottom(5);C29.setMarginRight(20);
C29.setMarginTop(175);C29.iC();C30.setAlignment("TOPCENTER");C30.setColumn(C25);C30.setManage(C47);C30.setParent(C23);C30.setRow(C24);C30.setSizing("FITTOWIDTH");C30.setFlow("DOWN");C30.setMarginBottom(5);C30.setMarginLeft(20);C30.setMarginRight(100);C30.setMarginTop(10);C30.iC();C31.setCaption("New Estimate");C31.setDisplayPosition(2);C31.setParent(this);C31.setTabPosition(1);C31.setThemeDrawStyle("Heading2+Background1");C31.setCaptionAlignment("CENTER");C31.setWidth(903);C31.setIcon("close");C31.setIconAlignment("CENTERLEFT");
C31.iC();C32.setCaption("Save Estimate");C32.setDisplayPosition(1);C32.setLeft(0);C32.setParent(this);C32.setTabPosition(4);C32.setThemeDrawStyle("MediumTitle+Background4");C32.setTop(692);C32.setWidth(903);C32.setStyle(C0);C32.setHeight(56);C32.iC();C33.setDisplayPosition(3);C33.setHeight(636);C33.setLeft(0);C33.setParent(this);C33.setTabPosition(2);C33.setTabStop(false);C33.setTop(56);C33.setWidth(452);C33.setLayoutManager(C9);C33.setVerticalScroll(true);C33.setThemeDrawStyle("Card");C33.iC();C34.setCaption("Client Information");
C34.setDisplayPosition(1);C34.setLeft(20);C34.setParent(C33);C34.setTabPosition(1);C34.setThemeDrawStyle("Heading2");C34.setTop(20);C34.setWidth(410);C34.iC();C35.setCaption("Client name*");C35.setDisplayPosition(2);C35.setLeft(20);C35.setParent(C33);C35.setTabPosition(2);C35.setAppearance("TEXTFIELDAREABOX");C35.setWidth(410);C35.setTop(86);C35.iC();C36.setCaption("Contact name (if different than client name)");C36.setDisplayPosition(3);C36.setLeft(20);C36.setParent(C33);C36.setTabPosition(3);C36.setTop(176);
C36.setAppearance("TEXTFIELDAREABOX");C36.setWidth(410);C36.iC();C37.setCaption("Phone*");C37.setDisplayPosition(4);C37.setLeft(20);C37.setParent(C33);C37.setTabPosition(4);C37.setTop(266);C37.setAppearance("TEXTFIELDAREABOX");C37.setWidth(410);C37.iC();C38.setCaption("Email*");C38.setDisplayPosition(5);C38.setLeft(20);C38.setParent(C33);C38.setTabPosition(5);C38.setTop(356);C38.setAppearance("TEXTFIELDAREABOX");C38.setWidth(410);C38.iC();C39.setCaption("Appointment Detail");C39.setDisplayPosition(6);
C39.setLeft(20);C39.setParent(C33);C39.setTabPosition(6);C39.setThemeDrawStyle("Heading2");C39.setTop(456);C39.setWidth(410);C39.iC();C40.setCaption("Appointment date");C40.setDisplayPosition(7);C40.setIconOpacity(50);C40.setLeft(20);C40.setParent(C33);C40.setTabPosition(7);C40.setTop(522);C40.setAppearance("TEXTFIELDAREABOX");C40.setWidth(190);C40.setCaptionType("CAPTION");C40.aD();C40.iC();C41.setCaption("Appointment time");C41.setDisplayPosition(8);C41.setIconOpacity(50);C41.setLeft(230);C41.setParent(C33);
C41.setTabPosition(8);C41.setTop(522);C41.setAppearance("TEXTFIELDAREABOX");C41.setShowTime(true);C41.setShowDate(false);C41.setPromptOnly(false);C41.iC();C42.setDisplayPosition(4);C42.setHeight(692);C42.setLeft(452);C42.setParent(this);C42.setTabPosition(3);C42.setTabStop(false);C42.setTop(56);C42.setWidth(451);C42.setLayoutManager(C23);C42.setThemeDrawStyle("Card");C42.iC();C43.setCaption("Location");C43.setDisplayPosition(1);C43.setLeft(20);C43.setParent(C42);C43.setTabPosition(1);C43.setThemeDrawStyle("Heading2");
C43.setTop(20);C43.setWidth(409);C43.iC();C44.setCaption("Address*");C44.setDisplayPosition(2);C44.setLeft(20);C44.setParent(C42);C44.setTabPosition(2);C44.setTop(86);C44.setAppearance("TEXTFIELDAREABOX");C44.setWidth(409);C44.iC();C45.setCaption("City*");C45.setDisplayPosition(3);C45.setLeft(20);C45.setParent(C42);C45.setTabPosition(3);C45.setTop(176);C45.setAppearance("TEXTFIELDAREABOX");C45.setWidth(329);C45.iC();C46.setCaption("State*");C46.setDisplayPosition(4);C46.setLeft(358);C46.setParent(C42);
C46.setTabPosition(4);C46.setAppearance("TEXTFIELDAREABOX");C46.setWidth(71);C46.setTop(175);C46.iC();C47.setCaption("Zip code*");C47.setDisplayPosition(5);C47.setLeft(20);C47.setParent(C42);C47.setTabPosition(5);C47.setTop(266);C47.setAppearance("TEXTFIELDAREABOX");C47.setWidth(329);C47.iC();C48.iC();C49.iC();C50.iC();C51.iC();C52.iC();C53.iC();C54.setValue(10);C54.iC();C55.setValue(5);C55.iC();l.WEB().aH("DEVICECHANGED",this,e3);C31.aH("ICONCLICK",this,e1);C32.aH("CLICK",this,e2);this.setLayoutManager(C1);
this.setHeight(750);this.setWidth(905);this.setThemeDrawStyle("Background3");}});cO.mthGETCLIENTNAME=function(){var m=this.REF,r=l.pR(this,cO,"GetClientName",110);var P0=r.cP("SCLIENTNAME","PRIM_ALPH");r.ln=110;{r.ln=113;P0.set(m.EDITCLIENTNAME.getValue());}r.ln=115;return r.rV(P0.get());};cO.mthGETCONTACTNAME=function(){var m=this.REF,r=l.pR(this,cO,"GetContactName",117);var P0=r.cP("SCONTACTNAME","PRIM_ALPH");r.ln=117;{r.ln=120;P0.set(m.EDITCONTACTNAME.getValue());}r.ln=122;return r.rV(P0.get());
};cO.mthGETPHONE=function(){var m=this.REF,r=l.pR(this,cO,"GetPhone",124);var P0=r.cP("SPHONE","PRIM_ALPH");r.ln=124;{r.ln=127;P0.set(m.EDITPHONE.getValue());}r.ln=129;return r.rV(P0.get());};cO.mthGETEMAIL=function(){var m=this.REF,r=l.pR(this,cO,"GetEmail",131);var P0=r.cP("SPHONE","PRIM_ALPH");r.ln=131;{r.ln=134;P0.set(m.EDITEMAIL.getValue());}r.ln=136;return r.rV(P0.get());};cO.mthGETAPPOINTMENTDATE=function(){var m=this.REF,r=l.pR(this,cO,"GetAppointmentDate",138);var P0=r.cP("SAPPOINTMENTDATE","PRIM_DAT");
r.ln=138;{r.ln=141;P0.set(m.DATEAPPOINTMENTDATE.getValue());}r.ln=143;return r.rV(P0.get());};cO.mthGETAPPOINTMENTTIME=function(){var m=this.REF,r=l.pR(this,cO,"GetAppointmentTime",145);var P0=r.cP("SAPPOINTMENTTIME","PRIM_DAT");r.ln=145;{r.ln=148;P0.set(m.DATEAPPOINTMENTTIME.getValue());}r.ln=150;return r.rV(P0.get());};cO.mthGETADDRESS=function(){var m=this.REF,r=l.pR(this,cO,"GetAddress",152);var P0=r.cP("SADDRESS","PRIM_ALPH");r.ln=152;{r.ln=155;P0.set(m.EDITADDRESS.getValue());}r.ln=157;return r.rV(P0.get());
};cO.mthGETCITY=function(){var m=this.REF,r=l.pR(this,cO,"GetCity",159);var P0=r.cP("SCITY","PRIM_ALPH");r.ln=159;{r.ln=162;P0.set(m.EDITCITY.getValue());}r.ln=164;return r.rV(P0.get());};cO.mthGETSTATE=function(){var m=this.REF,r=l.pR(this,cO,"GetState",166);var P0=r.cP("SSTATE","PRIM_ALPH");r.ln=166;{r.ln=169;P0.set(m.EDITSTATE.getValue());}r.ln=171;return r.rV(P0.get());};cO.mthGETZIPCODE=function(){var m=this.REF,r=l.pR(this,cO,"GetZipCode",173);var P0=r.cP("SZIPCODE","PRIM_ALPH");r.ln=173;{r.ln=176;
P0.set(m.EDITZIPCODE.getValue());}r.ln=178;return r.rV(P0.get());};cO.mthGETPRICEDISPLAYSTRING=function(){var f=this.FLD.XCECRTDLG,r=l.pR(this,cO,"GetPriceDisplayString",180);var P0=r.cP("PRICE","PRIM_ALPH");var C0=r.cR("TOTAL","PRIM_NMBR");C0.setDecimals(2);C0.iC();r.ln=180;{r.ln=185;C0.set(f.F5.get());r.ln=187;P0.set(l.cat(P0.get(),l.cat(l.cat("$",l.n.AsString(C0.get())),"/sq ft")));}r.ln=189;return r.rV(P0.get());};cO.mthGETTOTALPRICEDISPLAYSTRING=function(){var f=this.FLD.XCECRTDLG,m=this.REF,r=l.pR(this,cO,"GetTotalPriceDisplayString",191);
var P0=r.cP("PRICE","PRIM_ALPH");var C0=r.cR("TOTAL","PRIM_NMBR");var C1=r.cR("WIDTHTOTALFEET","PRIM_NMBR");var C2=r.cR("LENGTHTOTALFEET","PRIM_NMBR");var C3=r.cR("SQUAREFEET","PRIM_NMBR");C0.setDecimals(2);C0.iC();C1.setDecimals(2);C1.iC();C2.setDecimals(2);C2.iC();C3.setDecimals(2);C3.iC();r.ln=191;{r.ln=200;C1.set(l.add(m.ROOMWIDTHFEET.get(),l.div(m.ROOMWIDTHINCHES.get(),12)));r.ln=201;C2.set(l.add(m.ROOMLENGTHFEET.get(),l.div(m.ROOMLENGTHINCHES.get(),12)));r.ln=203;C3.set(l.mul(C1.get(),C2.get()));
r.ln=205;C0.set(l.mul(f.F5.get(),C3.get()));r.ln=207;if(l.tB(l.n.gt(m.TOTALDISCOUNTPERCENTAGE.get(),0))){r.ln=209;C0.set(l.sub(C0.get(),l.mul(l.div(C0.get(),100),m.TOTALDISCOUNTPERCENTAGE.get())));}r.ln=213;if(l.tB(l.n.gt(m.TOTALTAXPERCENTAGE.get(),0))){r.ln=215;C0.set(l.add(C0.get(),l.mul(l.div(C0.get(),100),m.TOTALTAXPERCENTAGE.get())));}r.ln=219;P0.set(l.cat(P0.get(),l.cat(l.cat("$",l.n.AsString(C0.get())),"/sq ft")));}r.ln=221;return r.rV(P0.get());};cO.mthGETDIMENSIONSDISPLAYSTRING=function()
{var m=this.REF,r=l.pR(this,cO,"GetDimensionsDisplayString",223);var P0=r.cP("DIMENSIONS","PRIM_ALPH");var C0=r.cR("WIDTHTOTALFEET","PRIM_NMBR");var C1=r.cR("LENGTHTOTALFEET","PRIM_NMBR");var C2=r.cR("SQUAREFEET","PRIM_NMBR");C0.setDecimals(2);C0.iC();C1.setDecimals(2);C1.iC();C2.setDecimals(2);C2.iC();r.ln=223;{r.ln=230;C0.set(l.add(m.ROOMWIDTHFEET.get(),l.div(m.ROOMWIDTHINCHES.get(),12)));r.ln=231;C1.set(l.add(m.ROOMLENGTHFEET.get(),l.div(m.ROOMLENGTHINCHES.get(),12)));r.ln=233;C2.set(l.mul(C0.get(),C1.get()));
r.ln=235;P0.set(l.cat(l.n.AsString(C2.get())," sq ft"));}r.ln=237;return r.rV(P0.get());};cO.mthSETFLOORID=function(p0){var f=this.FLD.XCECRTDLG,r=l.pR(this,cO,"SetFloorId",240);var P0=r.cP("ID","PRIM_NMBR");P0.set(p0);r.ln=240;{r.ln=243;f.F2.set(P0.get());r.ln=245;this.mthREADFLOOR();}r.ln=247;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Appbar.IconClick",253);r.ln=253;{r.ln=255;this.mthCLOSE();}r.ln=257;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonSave.Click",259);r.ln=259;{
r.ln=261;if(cO.mthALLOWSAVE.call(this)){r.ln=262;this.fE("CREATEESTIMATE");r.ln=264;this.mthCLOSE();}}r.ln=268;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Sys_Web.DeviceChanged",270);r.ln=270;{r.ln=272;{var v1=l.WEB().getDevice();if(r.ln=274,l.s.eq(v1,"MOBILE")){r.ln=276;this.setPlacement("FULLSCREEN");r.ln=278;m.LAYOUTMAINCOLUMN2.setUnits("PIXELS");r.ln=279;m.LAYOUTMAINCOLUMN2.setWidth(0);r.ln=281;m.PANEL2.setParent(m.PANEL1);r.ln=282;m.PANEL2.setDisplayPosition(99);r.ln=283;m.PANEL2.setHeight(350);
}else if(r.ln=285,l.s.eq(v1,"TABLET")){r.ln=287;this.setPlacement("FULLSCREEN");r.ln=289;m.LAYOUTMAINCOLUMN2.setUnits("PROPORTION");r.ln=290;m.LAYOUTMAINCOLUMN2.setWidth(1);r.ln=292;m.PANEL2.setParent(this);}else if(r.ln=294,l.s.eq(v1,"DESKTOP")){r.ln=296;this.setPlacement("CENTER");r.ln=298;m.LAYOUTMAINCOLUMN2.setUnits("PROPORTION");r.ln=299;m.LAYOUTMAINCOLUMN2.setWidth(1);r.ln=301;m.PANEL2.setParent(this);}r.ln=303;}}r.ln=305;r.e();};cO.mthREADFLOOR=function(){var f=this.FLD.XCECRTDLG,r=l.mR(this,cO,"ReadFloor",311),mth=r;
var C0=r.cDR("READ","XCESERVER","READCOVERING");C0.iC();C0.aH("COMPLETED",this,e4);r.ln=311;{r.ln=314;C0.mthEXECUTEASYNC({FLD:{"XFLRCVRID":f.F2.get()}},{FLD:{"XFLRCVRID":f.F2,"XFLRCVCID":f.F6,"XFLRCVRN":f.F3,"XFLRCVR$":f.F5,"XFLRCVRI":f.F7,"XFLRCVRM":f.F8}});}r.ln=320;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#Read.Completed",316,mth);r.ln=316;{}r.ln=318;r.e();}};cO.mthLOAD=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15){var m=this.REF,r=l.mR(this,cO,"Load",322);var P0=r.cP("SCLIENTNAME","PRIM_ALPH");
var P1=r.cP("SCONTACTNAME","PRIM_ALPH");var P2=r.cP("SPHONE","PRIM_ALPH");var P3=r.cP("SEMAIL","PRIM_ALPH");var P4=r.cP("SAPPOINTMENTDATE","PRIM_DAT");var P5=r.cP("SAPPOINTMENTTIME","PRIM_DAT");var P6=r.cP("SADDRESS","PRIM_ALPH");var P7=r.cP("SCITY","PRIM_ALPH");var P8=r.cP("SSTATE","PRIM_ALPH");var P9=r.cP("SZIPCODE","PRIM_ALPH");var P10=r.cP("SROOMNAME","PRIM_ALPH");var P11=r.cP("SROOMLENGTHFEET","PRIM_NMBR");var P12=r.cP("SROOMLENGTHINCHES","PRIM_NMBR");var P13=r.cP("SROOMWIDTHFEET","PRIM_NMBR");
var P14=r.cP("SROOMWIDTHINCHES","PRIM_NMBR");var P15=r.cP("SSTATUS","PRIM_ALPH");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(p6);P7.set(p7);P8.set(p8);P9.set(p9);P10.set(p10);P11.set(p11);P12.set(p12);P13.set(p13);P14.set(p14);P15.set(p15);r.ln=322;{r.ln=340;m.EDITCLIENTNAME.setValue(P0.get());r.ln=341;m.EDITCONTACTNAME.setValue(P1.get());r.ln=342;m.EDITPHONE.setValue(P2.get());r.ln=343;m.EDITEMAIL.setValue(P3.get());r.ln=344;m.DATEAPPOINTMENTDATE.setValue(P4.get());r.ln=345;
m.DATEAPPOINTMENTTIME.setValue(P5.get());r.ln=346;m.EDITADDRESS.setValue(P6.get());r.ln=347;m.EDITCITY.setValue(P7.get());r.ln=348;m.EDITSTATE.setValue(P8.get());r.ln=349;m.EDITZIPCODE.setValue(P9.get());r.ln=351;m.ROOMNAME.set(P10.get());r.ln=352;m.ROOMLENGTHFEET.set(P11.get());r.ln=353;m.ROOMLENGTHINCHES.set(P12.get());r.ln=354;m.ROOMWIDTHFEET.set(P13.get());r.ln=355;m.ROOMWIDTHINCHES.set(P14.get());r.ln=356;m.STATUS.set(P15.get());}r.ln=358;r.e();};cO.mthALLOWSAVE=function(){var m=this.REF,r=l.mR(this,cO,"AllowSave",360);
var P0=r.cP("ALLOWSAVE","PRIM_BOLN");r.ln=360;{r.ln=363;P0.set(true);r.ln=365;if(l.s.eq(m.EDITCLIENTNAME.getValue(),"")){r.ln=367;m.EDITCLIENTNAME.mthSHOWERROR("Client name cannot be blank");r.ln=369;P0.set(false);}else{r.ln=373;m.EDITZIPCODE.mthCLEARERROR();}r.ln=377;if(l.s.eq(m.EDITPHONE.getValue(),"")){r.ln=379;m.EDITPHONE.mthSHOWERROR("Phone cannot be blank");r.ln=381;P0.set(false);}else{r.ln=385;m.EDITPHONE.mthCLEARERROR();}r.ln=389;if(l.s.eq(m.EDITEMAIL.getValue(),"")){r.ln=391;m.EDITEMAIL.mthSHOWERROR("Email cannot be blank");
r.ln=393;P0.set(false);}else{r.ln=397;m.EDITEMAIL.mthCLEARERROR();}r.ln=401;if(l.dt.IsSqlNull(m.DATEAPPOINTMENTDATE.getValue())){r.ln=403;m.DATEAPPOINTMENTDATE.mthSHOWERROR("Appointment date cannot be blank");r.ln=405;P0.set(false);}else{r.ln=409;m.DATEAPPOINTMENTDATE.mthCLEARERROR();}r.ln=413;if(l.dt.IsSqlNull(m.DATEAPPOINTMENTTIME.getValue())){r.ln=415;m.DATEAPPOINTMENTTIME.mthSHOWERROR("Appointment time cannot be blank");r.ln=417;P0.set(false);}else{r.ln=421;m.DATEAPPOINTMENTTIME.mthCLEARERROR();
}r.ln=425;if(l.s.eq(m.EDITADDRESS.getValue(),"")){r.ln=427;m.EDITADDRESS.mthSHOWERROR("Address cannot be blank");r.ln=429;P0.set(false);}else{r.ln=433;m.EDITADDRESS.mthCLEARERROR();}r.ln=437;if(l.s.eq(m.EDITCITY.getValue(),"")){r.ln=439;m.EDITCITY.mthSHOWERROR("City cannot be blank");r.ln=441;P0.set(false);}else{r.ln=445;m.EDITCITY.mthCLEARERROR();}r.ln=449;if(l.s.eq(m.EDITSTATE.getValue(),"")){r.ln=451;m.EDITSTATE.mthSHOWERROR("State cannot be blank");r.ln=453;P0.set(false);}else{r.ln=457;m.EDITSTATE.mthCLEARERROR();
}r.ln=461;if(l.s.eq(m.EDITZIPCODE.getValue(),"")){r.ln=463;m.EDITZIPCODE.mthSHOWERROR("Zip code cannot be blank");r.ln=465;P0.set(false);}else{r.ln=469;m.EDITZIPCODE.mthCLEARERROR();}}r.ln=473;return r.rV(P0.get());};cO.getCLIENTNAME=function(){return this.mthGETCLIENTNAME();};cO.getCONTACTNAME=function(){return this.mthGETCONTACTNAME();};cO.getPHONE=function(){return this.mthGETPHONE();};cO.getEMAIL=function(){return this.mthGETEMAIL();};cO.getAPPOINTMENTDATE=function(){return this.mthGETAPPOINTMENTDATE();
};cO.getAPPOINTMENTTIME=function(){return this.mthGETAPPOINTMENTTIME();};cO.getADDRESS=function(){return this.mthGETADDRESS();};cO.getCITY=function(){return this.mthGETCITY();};cO.getSTATE=function(){return this.mthGETSTATE();};cO.getZIPCODE=function(){return this.mthGETZIPCODE();};cO.getPRICE=function(){return this.mthGETPRICEDISPLAYSTRING();};cO.getTOTALPRICE=function(){return this.mthGETTOTALPRICEDISPLAYSTRING();};cO.getDIMENSIONS=function(){return this.mthGETDIMENSIONSDISPLAYSTRING();};cO.getROOMNAME=function()
{return this.REF.ROOMNAME.get();};cO.setROOMNAME=function(v){this.REF.ROOMNAME.set(v);};cO.getROOMLENGTHFEET=function(){return this.REF.ROOMLENGTHFEET.get();};cO.setROOMLENGTHFEET=function(v){this.REF.ROOMLENGTHFEET.set(v);};cO.getROOMLENGTHINCHES=function(){return this.REF.ROOMLENGTHINCHES.get();};cO.setROOMLENGTHINCHES=function(v){this.REF.ROOMLENGTHINCHES.set(v);};cO.getROOMWIDTHFEET=function(){return this.REF.ROOMWIDTHFEET.get();};cO.setROOMWIDTHFEET=function(v){this.REF.ROOMWIDTHFEET.set(v);
};cO.getROOMWIDTHINCHES=function(){return this.REF.ROOMWIDTHINCHES.get();};cO.setROOMWIDTHINCHES=function(v){this.REF.ROOMWIDTHINCHES.set(v);};cO.getFLOORID=function(){var f=this.FLD.XCECRTDLG;return f.F2.get();};cO.setFLOORID=function(v){this.mthSETFLOORID(v);};cO.getDISCOUNTPERCENTAGE=function(){return this.REF.TOTALDISCOUNTPERCENTAGE.get();};cO.setDISCOUNTPERCENTAGE=function(v){this.REF.TOTALDISCOUNTPERCENTAGE.set(v);};cO.getTAXPERCENTAGE=function(){return this.REF.TOTALTAXPERCENTAGE.get();};cO.setTAXPERCENTAGE=function(v)
{this.REF.TOTALTAXPERCENTAGE.set(v);};cO.getFLOORNAME=function(){var f=this.FLD.XCECRTDLG;return f.F3.get();};cO.getSTATUS=function(){return this.REF.STATUS.get();};cO.setSTATUS=function(v){this.REF.STATUS.set(v);};cO.getSIGNATURE=function(){var f=this.FLD.XCECRTDLG;return f.F4.get();};cO.setSIGNATURE=function(v){var f=this.FLD.XCECRTDLG;f.F4.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_DTIMX"});Fd.F1.DATETIMEFIELD=function(){this.aN.call(this,new Fd.F1.Dc());
};l.cFC({co:Fd.F1.DATETIMEFIELD,an:"PRIM_MD",at:"DateTimeField",fn:"STD_DTIMX",cn:"DateTimeField"});}},{rp:["PRIM_DLG","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_MD.AppBar","PRIM_MD.RaisedButton","PRIM_PANL","PRIM_MD.Label","PRIM_MD.Edit","PRIM_MD.DateTimeField","PRIM_MD.DateTime","PRIM_ALPH","PRIM_NMBR","PRIM_WEB.DataRequest","PRIM_DTIM"],dp:["PRIM_NMBR"]});