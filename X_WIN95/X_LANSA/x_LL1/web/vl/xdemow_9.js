﻿LANSA.addComponent({id:"XDEMOW_9",nm:"xDemoWebTileEmployeeItem",ot:"rp",tp:"Reusable Part",de:"Tile Employee Design",tl:14020008},function(l,oI,u){var c1=l.cDec("1.59");var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TILE.ITileDesign"],mt:{OnItemGotReference:{ps:{"TileItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT","PRIM_TBLO");var C1=this.cR("ROW1","PRIM_TBLO","Row");var C2=this.cR("ROW2","PRIM_TBLO","Row");var C3=this.cR("ROW3","PRIM_TBLO","Row");var C4=this.cR("ROW4","PRIM_TBLO","Row");
var C5=this.cR("COL1","PRIM_TBLO","Column");var C6=this.cR("COL2","PRIM_TBLO","Column");var C7=this.cR("COL3","PRIM_TBLO","Column");var C8=this.cR("ITEM3","PRIM_TBLO","Item");var C9=this.cR("ITEM4","PRIM_TBLO","Item");var C10=this.cR("ITEM5","PRIM_TBLO","Item");var C11=this.cR("ITEM6","PRIM_TBLO","Item");this.cD("GEMPLOYEE");this.cD("GTILEITEM");var C14=this.cR("LFULLNAME","PRIM_LABL");var C15=this.cR("LADDRESS1","PRIM_LABL");var C16=this.cR("LADDRESS2","PRIM_LABL");var C17=this.cR("LADDRESS3","PRIM_LABL");
var C18=this.cR("LNAME","PRIM_LABL");var C19=this.cR("TBLO_1","PRIM_TBLO","Item");var C20=this.cR("LADDRESS","PRIM_LABL");var C21=this.cR("TBLO_2","PRIM_TBLO","Item");var C22=this.cR("COLUMN_1","PRIM_TBLO","Column");var C23=this.cR("ROW_1","PRIM_TBLO","Row");var C24=this.cR("ROW_2","PRIM_TBLO","Row");var C25=this.cR("LCONTACT","PRIM_LABL");var C26=this.cR("TBLO_3","PRIM_TBLO","Item");var C27=this.cR("ROW_3","PRIM_TBLO","Row");var C28=this.cR("LWORK","PRIM_LABL");var C29=this.cR("TBLO_4","PRIM_TBLO","Item");
var C30=this.cR("LHOME","PRIM_LABL");var C31=this.cR("TBLO_5","PRIM_TBLO","Item");var C32=this.cR("LEMAIL","PRIM_LABL");var C33=this.cR("TBLO_6","PRIM_TBLO","Item");var C34=this.cR("LPHONEWORK","PRIM_LABL");var C35=this.cR("TBLO_7","PRIM_TBLO","Item");var C36=this.cR("LPHONEHOME","PRIM_LABL");var C37=this.cR("TBLO_8","PRIM_TBLO","Item");var C38=this.cR("LEMAILADDRESS","PRIM_LABL");var C39=this.cR("TBLO_9","PRIM_TBLO","Item");var C40=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");var C41=this.cR("TBLO_10","PRIM_TBLO","Item");
var C42=this.cR("ROW_4","PRIM_TBLO","Row");var C43=this.cR("LDEPARTMENT","PRIM_LABL");var C44=this.cR("TBLO_12","PRIM_TBLO","Item");var C45=this.cR("LDEPARTMENTDESCRIPTION","PRIM_LABL");var C46=this.cR("TBLO_13","PRIM_TBLO","Item");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(3);C2.setParent(C0);C2.iC();C3.setDisplayPosition(4);C3.setParent(C0);C3.iC();C4.setDisplayPosition(5);C4.setParent(C0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setUnits("PIXELS");
C5.setWidth(50);C5.iC();C6.setDisplayPosition(2);C6.setParent(C0);C6.setUnits("PIXELS");C6.setWidth(85);C6.iC();C7.setDisplayPosition(3);C7.setParent(C0);C7.setWidth(58);C7.setUnits("PIXELS");C7.iC();C8.setColumn(C7);C8.setManage(C14);C8.setParent(C0);C8.setRow(C1);C8.setColumnSpan(2);C8.iC();C9.setColumn(C7);C9.setManage(C15);C9.setParent(C0);C9.setRow(C23);C9.setColumnSpan(2);C9.iC();C10.setColumn(C7);C10.setManage(C16);C10.setParent(C0);C10.setRow(C24);C10.setColumnSpan(2);C10.iC();C11.setColumn(C7);
C11.setManage(C17);C11.setParent(C0);C11.setRow(C27);C11.setColumnSpan(2);C11.iC();C14.setCaption("Firstname, Surname");C14.setDisplayPosition(1);C14.setEllipses("WORD");C14.setHeight(26);C14.setLeft(135);C14.setParent(this);C14.setTabPosition(4);C14.setTabStop(false);C14.setTop(0);C14.setVerticalAlignment("CENTER");C14.setWidth(334);C14.setThemeDrawStyle("Strong");C14.iC();C15.setCaption("Address 1");C15.setDisplayPosition(2);C15.setEllipses("WORD");C15.setHeight(25);C15.setLeft(135);C15.setParent(this);
C15.setTabPosition(3);C15.setTabStop(false);C15.setTop(129);C15.setVerticalAlignment("CENTER");C15.setWidth(334);C15.iC();C16.setCaption("Address 2");C16.setDisplayPosition(3);C16.setEllipses("WORD");C16.setHeight(25);C16.setLeft(135);C16.setParent(this);C16.setTabPosition(2);C16.setTabStop(false);C16.setTop(154);C16.setVerticalAlignment("CENTER");C16.setWidth(334);C16.iC();C17.setCaption("Address 3 & PostCode");C17.setDisplayPosition(4);C17.setEllipses("WORD");C17.setHeight(25);C17.setLeft(135);
C17.setParent(this);C17.setTabPosition(1);C17.setTabStop(false);C17.setTop(179);C17.setVerticalAlignment("CENTER");C17.setWidth(334);C17.iC();C18.setCaption("Name");C18.setDisplayPosition(5);C18.setEllipses("WORD");C18.setLeft(50);C18.setParent(this);C18.setTabPosition(5);C18.setTabStop(false);C18.setTop(0);C18.setVerticalAlignment("CENTER");C18.setHeight(26);C18.setWidth(85);C18.setThemeDrawStyle("Strong");C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C6);C19.setManage(C18);C19.setParent(C0);
C19.setRow(C1);C19.iC();C20.setCaption("Address");C20.setDisplayPosition(6);C20.setEllipses("WORD");C20.setLeft(50);C20.setParent(this);C20.setTabPosition(6);C20.setTabStop(false);C20.setTop(129);C20.setVerticalAlignment("CENTER");C20.setHeight(25);C20.setWidth(85);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C6);C21.setFlow("DOWN");C21.setManage(C20);C21.setParent(C0);C21.setRow(C23);C21.iC();C22.setDisplayPosition(4);C22.setParent(C0);C22.setWidth(c1);C22.iC();C23.setDisplayPosition(6);C23.setParent(C0);
C23.iC();C24.setDisplayPosition(7);C24.setParent(C0);C24.iC();C25.setCaption("Contact");C25.setDisplayPosition(7);C25.setEllipses("WORD");C25.setLeft(50);C25.setParent(this);C25.setTabPosition(7);C25.setTabStop(false);C25.setTop(52);C25.setVerticalAlignment("CENTER");C25.setHeight(26);C25.setWidth(85);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C6);C26.setFlow("DOWN");C26.setManage(C25);C26.setParent(C0);C26.setRow(C2);C26.iC();C27.setDisplayPosition(8);C27.setParent(C0);C27.iC();C28.setCaption("Work");
C28.setDisplayPosition(8);C28.setEllipses("WORD");C28.setLeft(135);C28.setParent(this);C28.setTabPosition(8);C28.setTabStop(false);C28.setTop(52);C28.setVerticalAlignment("CENTER");C28.setHeight(26);C28.setWidth(58);C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C7);C29.setFlow("DOWN");C29.setManage(C28);C29.setParent(C0);C29.setRow(C2);C29.iC();C30.setCaption("Home");C30.setDisplayPosition(9);C30.setEllipses("WORD");C30.setLeft(135);C30.setParent(this);C30.setTabPosition(9);C30.setTabStop(false);
C30.setTop(78);C30.setVerticalAlignment("CENTER");C30.setHeight(26);C30.setWidth(58);C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C7);C31.setFlow("DOWN");C31.setManage(C30);C31.setParent(C0);C31.setRow(C3);C31.iC();C32.setCaption("Email");C32.setDisplayPosition(10);C32.setEllipses("WORD");C32.setLeft(135);C32.setParent(this);C32.setTabPosition(10);C32.setTabStop(false);C32.setTop(104);C32.setVerticalAlignment("CENTER");C32.setHeight(25);C32.setWidth(58);C32.iC();C33.setAlignment("TOPLEFT");
C33.setColumn(C7);C33.setFlow("DOWN");C33.setManage(C32);C33.setParent(C0);C33.setRow(C4);C33.iC();C34.setCaption("Work Phone");C34.setDisplayPosition(11);C34.setEllipses("WORD");C34.setLeft(193);C34.setParent(this);C34.setTabPosition(11);C34.setTabStop(false);C34.setTop(52);C34.setVerticalAlignment("CENTER");C34.setHeight(26);C34.setWidth(276);C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C22);C35.setFlow("DOWN");C35.setManage(C34);C35.setParent(C0);C35.setRow(C2);C35.iC();C36.setCaption("Home Phone");
C36.setDisplayPosition(12);C36.setEllipses("WORD");C36.setLeft(193);C36.setParent(this);C36.setTabPosition(12);C36.setTabStop(false);C36.setTop(78);C36.setVerticalAlignment("CENTER");C36.setHeight(26);C36.setWidth(276);C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C22);C37.setFlow("DOWN");C37.setManage(C36);C37.setParent(C0);C37.setRow(C3);C37.iC();C38.setCaption("Email");C38.setDisplayPosition(13);C38.setEllipses("WORD");C38.setLeft(193);C38.setParent(this);C38.setTabPosition(13);C38.setTabStop(false);
C38.setTop(104);C38.setVerticalAlignment("CENTER");C38.setHeight(25);C38.setWidth(276);C38.iC();C39.setAlignment("TOPLEFT");C39.setColumn(C22);C39.setFlow("DOWN");C39.setManage(C38);C39.setParent(C0);C39.setRow(C4);C39.iC();C40.setDisplayPosition(14);C40.setParent(this);C40.setTabPosition(14);C40.setTop(2);C40.setLeft(2);C40.setWidth(46);C40.setImageSizing("BESTFIT");C40.iC();C41.setAlignment("TOPLEFT");C41.setColumn(C5);C41.setFlow("DOWN");C41.setManage(C40);C41.setParent(C0);C41.setRow(C1);C41.setSizing("FITTOWIDTH");
C41.setMarginTop(2);C41.setMarginBottom(2);C41.setMarginLeft(2);C41.setMarginRight(2);C41.iC();C42.setDisplayPosition(2);C42.setParent(C0);C42.iC();C43.setCaption("Department");C43.setDisplayPosition(15);C43.setEllipses("WORD");C43.setLeft(50);C43.setParent(this);C43.setTabPosition(15);C43.setTabStop(false);C43.setTop(26);C43.setVerticalAlignment("CENTER");C43.setHeight(26);C43.setWidth(85);C43.iC();C44.setAlignment("TOPLEFT");C44.setColumn(C6);C44.setFlow("DOWN");C44.setManage(C43);C44.setParent(C0);
C44.setRow(C42);C44.iC();C45.setCaption("<text>");C45.setDisplayPosition(16);C45.setEllipses("WORD");C45.setLeft(135);C45.setParent(this);C45.setTabPosition(16);C45.setTabStop(false);C45.setTop(26);C45.setVerticalAlignment("CENTER");C45.setHeight(26);C45.setWidth(334);C45.iC();C46.setAlignment("TOPLEFT");C46.setColumn(C7);C46.setFlow("DOWN");C46.setManage(C45);C46.setParent(C0);C46.setRow(C42);C46.setColumnSpan(2);C46.iC();this.setHeight(204);this.setWidth(469);this.setLayoutManager(C0);this.setDisplayPosition(1);
this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setThemeDrawStyle("ListItem");}});cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",57);var P0=r.cPD("TILEITEM");P0=p0;r.ln=57;{r.ln=59;this.srGEMPLOYEE(l.cast(P0.getRelatedReference(),"XDEMO_32"));r.ln=61;m.LFULLNAME.set(l.s.Substitute("&1 &2 (&3)",m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getSURNAME(),m.GEMPLOYEE.getID()));r.ln=62;m.LDEPARTMENTDESCRIPTION.set(l.s.Substitute("&1 (&2)",m.GEMPLOYEE.getDEPARTMENT().getDESCRIPTION(),m.GEMPLOYEE.getDEPARTMENT().getID()));
r.ln=63;m.LADDRESS1.set(m.GEMPLOYEE.getSTREET());r.ln=64;m.LADDRESS2.set(m.GEMPLOYEE.getCITY());r.ln=65;m.LADDRESS3.set(l.s.Substitute("&1, &2",m.GEMPLOYEE.getSTATE(),m.GEMPLOYEE.getPOSTCODE()));r.ln=66;m.LPHONEHOME.set(m.GEMPLOYEE.getPHONEHOME());r.ln=67;m.LPHONEWORK.set(m.GEMPLOYEE.getPHONEWORK());r.ln=68;m.LEMAILADDRESS.set(l.s.LowerCase(l.s.Substitute("&1.&2@acompany.com",m.GEMPLOYEE.getGIVENNAME(),m.GEMPLOYEE.getSURNAME())));r.ln=69;m.EMPLOYEEIMAGE.setImage(m.GEMPLOYEE.getTHUMBNAIL());}r.ln=71;
r.e();};cO.srGEMPLOYEE=function(rn){this.sR("GEMPLOYEE",rn);};cO.srGTILEITEM=function(rn){this.sR("GTILEITEM",rn);};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG"],dc:["XDEMO_32"],dp:["PRIM_TILE.TileItem"]});