﻿LANSA.addComponent({id:"VF_UI068O",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE User properties items",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELCA_1",an:"VF_ELCAPNU",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC","ASQN"],oa:["ASQN"]},F2:{nm:"VF_ELN300",ft:"S",ln:30,dc:0,ec:"M",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]},F3:{nm:"VF_ELN301",
ft:"S",ln:30,dc:1,ec:"M",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]},F4:{nm:"VF_ELN302",ft:"S",ln:30,dc:2,ec:"M",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]},F5:{nm:"VF_ELN303",ft:"S",ln:30,dc:3,ec:"M",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]},F6:{nm:"VF_ELN304",ft:"S",ln:30,dc:4,ec:"M",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]
},F7:{nm:"VF_ELN305",ft:"S",ln:30,dc:5,ec:"M",lb:"Numeric Value",h1:"Numeric",h2:"Value",h3:"",de:"Numeric Value",dv:0,ia:["RB","FE"]},F8:{nm:"VF_ELPTYI",ft:"P",ln:7,dc:0,ec:"K",lb:"Property Instan",h1:"Property",h2:"Instance",h3:"",de:"Property Instance",dv:0,ia:["RB","FE"]},F9:{nm:"VF_ELAVAL",ft:"A",ln:132,dc:0,ks:"O",lb:"Alpha Persitent",h1:"Alpha",h2:"Persitent",h3:"Property",de:"Alpha Persitent Property",dv:"",ia:["FE","LC"]},F10:{nm:"VF_ELBOOL",ft:"A",ln:5,dc:0,lb:{"ENG":"Standard","FRA":"?","JPN":"Standard Boolea"}[cL],
h1:{"ENG":"Boolean","FRA":"?","JPN":"Standard"}[cL],h2:{"ENG":"","FRA":"","JPN":"Boolean"}[cL],h3:"",de:{"ENG":"Standard Boolean","FRA":"?","JPN":"Standard Boolean"}[cL],dv:"",ia:["FE"]},F11:{nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F12:{nm:"VF_ELPTYT",ft:"A",ln:1,dc:0,lb:"Property Type",h1:"Property",h2:"Type",h3:"",de:"Property Type",dv:"",ia:["FE"]},F13:{nm:"VF_ELTXTA",ft:"A",ln:132,dc:0,
ks:"O",lb:"Standard Long T",h1:"Standard",h2:"Long",h3:"Text",de:"Standard Long Text",dv:"",ia:["FE","LC"]},F14:{nm:"VF_ELURLU",ft:"N",ln:256,dc:0,lb:"URL (Unicode)",h1:"URL",h2:"(Unicode)",h3:"",de:"URL (Unicode)",dv:"",ia:["FE","LC"]},F15:{nm:"VF_ELENAB",ft:"A",ln:5,dc:0,lb:"Enable",h1:"Enable",h2:"",h3:"",de:"Enable",dv:""},F16:{nm:"DIRTYVALUE",ft:"A",ln:132,dc:0,ks:"O",lb:"Alpha Persitent",h1:"Alpha",h2:"Persitent",h3:"Property",de:"Alpha Persitent Property",dv:"",ia:["FE","LC"]},F17:{nm:"VF_ELNUM",
ft:"P",ln:7,dc:0,ec:"K",lb:{"ENG":"Number","FRA":"?","JPN":"Standard Number"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":"?","JPN":"Number"}[cL],h3:"",de:{"ENG":"Standard Number","FRA":"?","JPN":"Standard Number"}[cL],dv:0,ia:["RB","FE"]},F18:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_TREE.ITreeDesign"],fd:Fd,pt:{uManagedPropertyRef:{da:"rw"},uUseCaption:{da:"rw"},uPropertyIsDirty:{da:"rw"}},mt:{zInt_Initialize:{ps:{"ForProperty":{pt:"i"}}},zInt_GetPropertyValue:{ps:{"Instance":{pt:"i"},"Value":{pt:"o"}}},zInt_GetBooleanValue:{ps:{"Instance":{pt:"i"},"OutValue":{pt:"o"}}},zInt_GetFixedValue:{ps:{"CheckValue":{pt:"i"},"Instance":{pt:"i"},"Selected":{pt:"o"}}},zInt_VisualizeItem:{ps:{"Value":{pt:"i"},"Instance":{pt:"i"}}
},zInt_ChangeItem:{ps:{"Value":{pt:"i"},"Instance":{pt:"i"},"Type":{pt:"i"}}},zInt_ChangeBooleanItem:{ps:{"Value":{pt:"i"},"Instance":{pt:"i"}}},zInt_ChangeFixedListItem:{ps:{"Value":{pt:"i"},"Instance":{pt:"i"}}},zInt_ChangeListItem:{ps:{"Instance":{pt:"i"},"Value":{pt:"i"}}},zInt_AddBooleanFixed:{ps:{"Value":{pt:"i"},"Instance":{pt:"i"},"CaptionInstance":{pt:"i"}}},zInt_AddFixedListItem:{ps:{"Value":{pt:"i"},"Instance":{pt:"i"},"CaptionInstance":{pt:"i"}}},zInt_AddListItem:{ps:{"Value":{pt:"i"},
"Instance":{pt:"i"}}},zInt_VisualizeList:{ps:{"MultipleSelect":{pt:"i"},"Type":{pt:"i"},"Method":{pt:"i"}}},zInt_AddAlphaListItem:{ps:{"Value":{pt:"i"},"CaptionInstance":{pt:"i"}}},zInt_AddNumberListItem:{ps:{"Value":{pt:"i"},"CaptionInstance":{pt:"i"}}},zInt_ChangeNumberField:{ps:{"Value":{pt:"i"}}},zInt_VisualizeAlphaItem:{ps:{"Value":{pt:"i"}}},zInt_VisualizeNumericItem:{ps:{"Value":{pt:"i"}}},zInt_VisualizeBooleanItem:{ps:{"State":{pt:"i"}}},zInt_LayoutProperty:{ps:{"For":{pt:"i"}}},zInt_VisualizeHeader:
{ps:{"UseCaption":{pt:"i"}}},zInt_AddChangedProperty:{ps:{"propertyvalue":{pt:"i"},"propertyinstance":{pt:"i"},"Clear":{pt:"i"}}},zInt_ClearList:{},zInt_HideEverything:{}},co:function(){cO.aN.call(this);var f=this.aF("VF_UI068O",Fd);var C0=this.cA("AVFRAMEWORKMANAGER","VF_SY100O");var C1=this.cA("USYSTEM","VF_SY001O");this.cD("UMANAGEDPROPERTYREF");var C3=this.cR("TABLELAYOUT1","PRIM_TBLO");var C4=this.cR("COLCAPTION","PRIM_TBLO","Column");var C5=this.cR("COLVALUE","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");
var C7=this.cR("CAPTIONITEM","PRIM_TBLO","Item");var C8=this.cR("VALUEITEM","PRIM_TBLO","Item");var C9=this.cR("ALPHAVALUE","PRIM_EDIT");var C10=this.cR("BOOLEANVALUE","PRIM_CKBX");var C11=this.cR("PROPERTYCAPTION","PRIM_LABL");var C12=this.cR("LISTOFALPHAS","PRIM_LIST");var C13=this.cR("COLUMNCAPTION_A","PRIM_LIST","String");var C14=this.cR("ALPHALISTVALUE","PRIM_LIST","String");var C15=this.cR("LISTOFNUMBERS","PRIM_LIST");var C16=this.cR("COLUMNCAPTION_N","PRIM_LIST","String");var C17=this.cR("NUMBER300","PRIM_LIST","Number");
var C18=this.cR("NUMBER301","PRIM_LIST","Number");var C19=this.cR("NUMBER302","PRIM_LIST","Number");var C20=this.cR("NUMBER303","PRIM_LIST","Number");var C21=this.cR("NUMBER304","PRIM_LIST","Number");var C22=this.cR("NUMBER305","PRIM_LIST","Number");var C23=this.cR("LISTOFBOOLEANS","PRIM_LIST");var C24=this.cR("CHECKBOXCAPTION","PRIM_LIST","String");var C25=this.cR("BOOLEANLISTVALUE","PRIM_LIST","String");var C26=this.cR("BOOLEANLISTSAV","PRIM_LIST","String");var C27=this.cF("UUSECAPTION",Fd.F1.Dc);
var C28=this.cR("UPROPERTYISDIRTY","PRIM_BOLN");var C29=this.cR("CLEARLIST","PRIM_BOLN");var C30=this.cR("VF_ELN30X","PRIM_KCOL");var C31=this.cF("VF_ELN300_V",Fd.F2.VISUAL);var C32=this.cF("VF_ELN301_V",Fd.F3.VISUAL);var C33=this.cF("VF_ELN302_V",Fd.F4.VISUAL);var C34=this.cF("VF_ELN303_V",Fd.F5.VISUAL);var C35=this.cF("VF_ELN304_V",Fd.F6.VISUAL);var C36=this.cF("VF_ELN305_V",Fd.F7.VISUAL);if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C3.iC();C4.setDisplayPosition(1);
C4.setParent(C3);C4.setUnits("PIXELS");C4.setWidth(250);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.iC();C6.setDisplayPosition(1);C6.setParent(C3);C6.iC();C7.setColumn(C4);C7.setRow(C6);C7.setAlignment("TOPLEFT");C7.setParent(C3);C7.setMarginTop(5);C7.iC();C8.setColumn(C5);C8.setRow(C6);C8.setAlignment("TOPLEFT");C8.setParent(C3);C8.setMarginTop(5);C8.iC();C9.setDisplayPosition(9);C9.setParent(this);C9.setShowSelection(false);C9.setShowSelectionHilight(false);C9.setTabPosition(9);C9.setVisible(false);
C9.iC();C10.setParent(this);C10.setDisplayPosition(7);C10.setTabPosition(7);C10.setHeight(20);C10.setCaption("Boolean value");C10.setVisible(false);C10.iC();C11.setCaption("Label1");C11.setDisplayPosition(8);C11.setLeft(0);C11.setParent(this);C11.setTabPosition(8);C11.setTabStop(false);C11.setTop(0);C11.setVisible(false);C11.iC();C12.setParent(this);C12.setDisplayPosition(5);C12.setTabPosition(5);C12.setLeft(350);C12.setTop(60);C12.setWidth(323);C12.setColumnHeaderHeight(0);C12.setRowHeight(24);C12.setVisible(false);
C12.setColumnLines(false);C12.setColumnSortArrow(false);C12.setRowLines(false);C12.setTreeButtons(false);C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.setSource(f.F1);C13.setColumnUnits("PROPORTION");C13.setColumnWidth(100);C13.setColumnCaptionType("CAPTION");C13.setColumnCaptionAlign("LEFT");C13.setColumnVisible(false);C13.iC();C14.setSource(f.F14);C14.setParent(C12);C14.setColumnReadOnly(false);C14.setColumnVisible(false);C14.iC();C15.setParent(this);C15.setDisplayPosition(4);C15.setTabPosition(4);
C15.setRowLines(false);C15.setLeft(302);C15.setTop(0);C15.setWidth(150);C15.setColumnHeaderHeight(0);C15.setRowHeight(20);C15.setVisible(false);C15.setColumnLines(false);C15.setColumnSortArrow(false);C15.setTreeButtons(false);C15.setHeight(78);C15.iC();C16.setDisplayPosition(1);C16.setParent(C15);C16.setSource(f.F1);C16.setColumnUnits("PROPORTION");C16.setColumnWidth(100);C16.setColumnCaptionType("CAPTION");C16.setColumnCaptionAlign("LEFT");C16.setColumnVisible(false);C16.iC();C17.setSource(f.F2);
C17.setParent(C15);C17.setColumnReadOnly(false);C17.setColumnVisible(false);C17.iC();C18.setSource(f.F3);C18.setParent(C15);C18.setColumnReadOnly(false);C18.setColumnVisible(false);C18.iC();C19.setSource(f.F4);C19.setParent(C15);C19.setColumnReadOnly(false);C19.setColumnVisible(false);C19.iC();C20.setSource(f.F5);C20.setParent(C15);C20.setColumnReadOnly(false);C20.setColumnVisible(false);C20.iC();C21.setSource(f.F6);C21.setParent(C15);C21.setColumnReadOnly(false);C21.setColumnVisible(false);C21.iC();
C22.setSource(f.F7);C22.setParent(C15);C22.setColumnReadOnly(false);C22.setColumnVisible(false);C22.iC();C23.setParent(this);C23.setDisplayPosition(2);C23.setTabPosition(2);C23.setColumnHeaderHeight(0);C23.setRowHeight(24);C23.setCheckBoxes(true);C23.setVisible(false);C23.setColumnLines(false);C23.setColumnSortArrow(false);C23.setRowLines(false);C23.setTreeButtons(false);C23.setTop(0);C23.setLeft(0);C23.setWidth(302);C23.setHeight(78);C23.iC();C24.setSource(f.F1);C24.setParent(C23);C24.iC();C25.setSource(f.F10);
C25.setParent(C23);C25.setColumnVisible(false);C25.iC();C26.setSource(f.F15);C26.setParent(C23);C26.setColumnVisible(false);C26.iC();C27.aD();C27.iC();C28.iC();C29.iC();C30.setStyle("COLLECTION");C30.setCollects("PRIM_EVEF");C30.setKeyedBy(Fd.F17.Dc);C30.iC();C31.setDisplayPosition(6);C31.setHeight(19);C31.setLeft(208);C31.setMarginLeft(0);C31.setParent(this);C31.setTabPosition(6);C31.setTop(120);C31.setWidth(284);C31.setUsePicklist(false);C31.setVisible(false);C31.aD();C31.iC();C32.setDisplayPosition(10);
C32.setHeight(19);C32.setLeft(200);C32.setMarginLeft(0);C32.setParent(this);C32.setTabPosition(10);C32.setTop(24);C32.setWidth(284);C32.setUsePicklist(false);C32.setVisible(false);C32.aD();C32.iC();C33.setDisplayPosition(11);C33.setHeight(19);C33.setLeft(200);C33.setMarginLeft(0);C33.setParent(this);C33.setTabPosition(11);C33.setTop(48);C33.setWidth(284);C33.setUsePicklist(false);C33.setVisible(false);C33.aD();C33.iC();C34.setDisplayPosition(12);C34.setHeight(19);C34.setLeft(184);C34.setMarginLeft(0);
C34.setParent(this);C34.setTabPosition(12);C34.setTop(72);C34.setWidth(284);C34.setUsePicklist(false);C34.setVisible(false);C34.aD();C34.iC();C35.setDisplayPosition(1);C35.setHeight(19);C35.setLeft(200);C35.setMarginLeft(0);C35.setParent(this);C35.setTabPosition(1);C35.setTop(184);C35.setWidth(284);C35.setUsePicklist(false);C35.setVisible(false);C35.aD();C35.iC();C36.setDisplayPosition(3);C36.setHeight(19);C36.setLeft(200);C36.setMarginLeft(0);C36.setParent(this);C36.setTabPosition(3);C36.setTop(160);
C36.setWidth(284);C36.setUsePicklist(false);C36.setVisible(false);C36.aD();C36.iC();C9.aH("CHANGED",this,e1);C10.aH("CLICK",this,e2);C12.aH("ITEMCHANGED",this,e1);C15.aH("ITEMCHANGED",this,e1);C23.aH("ITEMCHANGED",this,e3);C31.aH("CHANGED",this,e1);C33.aH("CHANGED",this,e1);C34.aH("CHANGED",this,e1);C35.aH("CHANGED",this,e1);C36.aH("CHANGED",this,e1);this.setDisplayPosition(1);this.setTabPosition(1);this.setWidth(673);this.setLeft(0);this.setTop(0);this.setHeight(78);this.setLayoutManager(C3);var li=this.aL("VF_UI068O");
li.DIRTYVALUES=l.cLT({"VF_ELPTYI":f.F8,"DIRTYVALUE":f.F16},null);}});cO.mthZINT_INITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",71);var P0=r.cPD("FORPROPERTY");P0=p0;r.ln=71;{r.ln=75;m.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.LISTOFALPHAS,this);r.ln=76;m.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.LISTOFBOOLEANS,this);r.ln=77;m.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.LISTOFNUMBERS,this);r.ln=79;this.srUMANAGEDPROPERTYREF(P0);
r.ln=81;{var v1=m.UMANAGEDPROPERTYREF.getUMETHOD();if(r.ln=83,l.s.eq(v1,"SINGLE")){r.ln=85;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"N")){r.ln=87;m.VF_ELN30X.set(0,m.VF_ELN300_V);r.ln=88;m.VF_ELN30X.set(1,m.VF_ELN301_V);r.ln=89;m.VF_ELN30X.set(2,m.VF_ELN302_V);r.ln=90;m.VF_ELN30X.set(3,m.VF_ELN303_V);r.ln=91;m.VF_ELN30X.set(4,m.VF_ELN304_V);r.ln=92;m.VF_ELN30X.set(5,m.VF_ELN305_V);r.ln=94;for(var l1=m.VF_ELN30X.cI();l1.step();){l1.item().setVisible(false);}}}else if(r.ln=98,l.s.eq(v1,"FIXED")){
r.ln=100;m.COLUMNCAPTION_A.setColumnVisible(true);r.ln=101;m.COLUMNCAPTION_N.setColumnVisible(true);}else if(r.ln=103,l.s.eq(v1,"LIST")){r.ln=105;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"N")){r.ln=107;{var v2=this.getUMANAGEDPROPERTYREF().getUMAXDECIMAL();if(r.ln=108,l.n.eq(v2,0)){r.ln=109;m.NUMBER300.setColumnVisible(true);}else if(r.ln=110,l.n.eq(v2,1)){r.ln=111;m.NUMBER301.setColumnVisible(true);}else if(r.ln=112,l.n.eq(v2,2)){r.ln=113;m.NUMBER302.setColumnVisible(true);}else if(r.ln=114,l.n.eq(v2,3))
{r.ln=115;m.NUMBER303.setColumnVisible(true);}else if(r.ln=116,l.n.eq(v2,4)){r.ln=117;m.NUMBER304.setColumnVisible(true);}else if(r.ln=118,l.n.eq(v2,5)){r.ln=119;m.NUMBER305.setColumnVisible(true);}r.ln=120;}}else{r.ln=123;m.ALPHALISTVALUE.setColumnVisible(true);}}r.ln=126;}r.ln=128;this.setHeight(l.mul(P0.getUEXECMAXINSTANCE(),25));this.setEnabled(P0.getUADMINCHANGE());this.setUUSECAPTION(P0.getUCAPTION());this.setUPROPERTYISDIRTY(l.and(l.s.eq(P0.getUMETHOD(),"FIXED"),l.s.ne(P0.getUTYPE(),"B")));
r.ln=130;if(l.or(l.s.eq(m.UMANAGEDPROPERTYREF.getUMETHOD(),"LIST"),l.s.eq(m.UMANAGEDPROPERTYREF.getUMETHOD(),"FIXED"))){r.ln=131;this.mthZINT_VISUALIZELIST(P0.getUMULTIPLESELECT(),P0.getUTYPE(),P0.getUMETHOD());}}r.ln=134;r.e();};cO.mthZINT_GETPROPERTYVALUE=function(p0,p1){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_GetPropertyValue",136);var P0=r.cPF("INSTANCE",Fd.F8.Dc);var P1=r.cPF("VALUE",Fd.F9.Dc);P0.set(p0);r.ln=136;{r.ln=141;{var v1=m.UMANAGEDPROPERTYREF.getUMETHOD();if(r.ln=143,l.s.eq(v1,"LIST"))
{r.ln=145;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"A")){r.ln=146;f.F18.set(lIO=m.LISTOFALPHAS.getEntry(P0.get()));r.ln=147;P1.set(f.F14.get());}else{r.ln=149;f.F18.set(lIO=m.LISTOFNUMBERS.getEntry(P0.get()));r.ln=150;{var v2=this.getUMANAGEDPROPERTYREF().getUMAXDECIMAL();if(r.ln=151,l.n.eq(v2,0)){r.ln=152;P1.set(l.n.AsString(f.F2.get()));}else if(r.ln=153,l.n.eq(v2,1)){r.ln=154;P1.set(l.n.AsString(f.F3.get()));}else if(r.ln=155,l.n.eq(v2,2)){r.ln=156;P1.set(l.n.AsString(f.F4.get()));}else if(r.ln=157,l.n.eq(v2,3))
{r.ln=158;P1.set(l.n.AsString(f.F5.get()));}else if(r.ln=159,l.n.eq(v2,4)){r.ln=160;P1.set(l.n.AsString(f.F6.get()));}else if(r.ln=161,l.n.eq(v2,5)){r.ln=162;P1.set(l.n.AsString(f.F7.get()));}r.ln=163;}}}else if(r.ln=166,l.s.eq(v1,"SINGLE")){r.ln=168;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"A")){r.ln=169;P1.set(m.ALPHAVALUE.get());}else{r.ln=171;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"N")){r.ln=173;{var v2=this.getUMANAGEDPROPERTYREF().getUMAXDECIMAL();if(r.ln=174,l.n.eq(v2,0)){r.ln=175;P1.set(l.n.AsString(m.VF_ELN300_V.get()));
}else if(r.ln=176,l.n.eq(v2,1)){r.ln=177;P1.set(l.n.AsString(m.VF_ELN301_V.get()));}else if(r.ln=178,l.n.eq(v2,2)){r.ln=179;P1.set(l.n.AsString(m.VF_ELN302_V.get()));}else if(r.ln=180,l.n.eq(v2,3)){r.ln=181;P1.set(l.n.AsString(m.VF_ELN303_V.get()));}else if(r.ln=182,l.n.eq(v2,4)){r.ln=183;P1.set(l.n.AsString(m.VF_ELN304_V.get()));}else if(r.ln=184,l.n.eq(v2,5)){r.ln=185;P1.set(l.n.AsString(m.VF_ELN305_V.get()));}r.ln=186;}}else{r.ln=190;if(l.s.eq(m.BOOLEANVALUE.getButtonState(),"CHECKED")){r.ln=191;
P1.set("TRUE");}else{r.ln=193;P1.set("FALSE");}}}}r.ln=200;}p1.set(P1.get());}r.ln=202;r.e();};cO.mthZINT_GETBOOLEANVALUE=function(p0,p1){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_GetBooleanValue",204);var P0=r.cPF("INSTANCE",Fd.F8.Dc);var P1=r.cPF("OUTVALUE",Fd.F10.Dc);P0.set(p0);r.ln=204;{r.ln=209;f.F18.set(lIO=m.LISTOFBOOLEANS.getEntry(P0.get()));r.ln=211;if(lIO=="OK"){r.ln=212;P1.set(f.F10.get());}else{r.ln=214;P1.set("FALSE");}p1.set(P1.get());}r.ln=217;r.e();};cO.mthZINT_GETFIXEDVALUE=function(p0,p1,p2)
{var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_GetFixedValue",219);var P0=r.cPF("CHECKVALUE",Fd.F9.Dc);var P1=r.cPF("INSTANCE",Fd.F8.Dc);var P2=r.cP("SELECTED","PRIM_BOLN");P0.set(p0);P1.set(p1);r.ln=219;{r.ln=225;P2.set(false);r.ln=227;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"A")){r.ln=229;{var l1=m.LISTOFALPHAS.selectList();while(l1.step()){r.ln=231;if(l.s.eq(f.F14.get(),P0.get())){r.ln=233;m.LISTOFALPHAS.updateEntry();r.ln=234;P2.set(m.LISTOFALPHAS.getCurrentItem().getSelected());
r.ln=235;break;}r.ln=239;}l1.end();}}else{r.ln=243;{var l1=m.LISTOFNUMBERS.selectList();while(l1.step()){r.ln=245;if(l.or(l.or(l.or(l.or(l.or(l.n.eq(f.F2.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get())),l.n.eq(f.F3.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()))),l.n.eq(f.F4.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()))),l.n.eq(f.F5.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()))),l.n.eq(f.F6.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()))),l.n.eq(f.F7.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()))))
{r.ln=247;m.LISTOFNUMBERS.updateEntry();r.ln=248;P2.set(m.LISTOFNUMBERS.getCurrentItem().getSelected());r.ln=249;break;}r.ln=253;}l1.end();}}p2.set(P2.get());}r.ln=256;r.e();};cO.mthZINT_VISUALIZEITEM=function(p0,p1){var r=l.mR(this,cO,"zInt_VisualizeItem",258);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");var P1=r.cPF("INSTANCE",Fd.F8.Dc);P0.set(p0);P1.set(p1);r.ln=258;{r.ln=263;{var v1=this.getUMANAGEDPROPERTYREF().getUTYPE();if(r.ln=265,l.s.eq(v1,"A")){r.ln=266;this.mthZINT_VISUALIZEALPHAITEM(P0.get());
}else if(r.ln=267,l.s.eq(v1,"N")){r.ln=268;this.mthZINT_VISUALIZENUMERICITEM(P0.get());}else if(r.ln=269,l.s.eq(v1,"B")){r.ln=270;this.mthZINT_VISUALIZEBOOLEANITEM(P0.get());}r.ln=272;}}r.ln=274;r.e();};cO.mthZINT_CHANGEITEM=function(p0,p1,p2){var r=l.mR(this,cO,"zInt_ChangeItem",276);var P0=r.cPF("VALUE",Fd.F9.Dc);var P1=r.cPF("INSTANCE",Fd.F11.Dc);var P2=r.cPF("TYPE",Fd.F12.Dc);P0.set(p0);P1.set(p1);P2.set(p2);r.ln=276;{r.ln=282;{var v1=this.getUMANAGEDPROPERTYREF().getUMETHOD();if(r.ln=284,l.s.eq(v1,"SINGLE"))
{r.ln=285;this.mthZINT_VISUALIZEITEM(P0.get(),1);}else if(r.ln=286,l.s.eq(v1,"LIST")){r.ln=287;this.mthZINT_CHANGELISTITEM(P1.get(),P0.get());}else if(r.ln=288,l.s.eq(v1,"FIXED")){r.ln=289;if(l.s.eq(P2.get(),"B")){r.ln=290;this.mthZINT_CHANGEBOOLEANITEM(P0.get(),P1.get());}else{r.ln=292;this.mthZINT_CHANGEFIXEDLISTITEM(P0.get(),P1.get());}}r.ln=295;}}r.ln=297;r.e();};cO.mthZINT_CHANGEBOOLEANITEM=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"zInt_ChangeBooleanItem",299);var P0=r.cPF("VALUE",Fd.F9.Dc);
var P1=r.cPF("INSTANCE",Fd.F11.Dc);P0.set(p0);P1.set(p1);r.ln=299;{r.ln=304;{var l1=m.LISTOFBOOLEANS.getItems().cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());r.ln=306;if(l.n.eq(ITEM.getEntry(),P1.get())){r.ln=308;if(l.s.eq(l.s.UpperCase(P0.get()),"TRUE")){r.ln=309;ITEM.setChecked("CHECKED");}else{r.ln=311;ITEM.setChecked("UNCHECKED");}r.ln=314;break;}r.ln=317;}l1.end();r.dR("ITEM");}}r.ln=319;r.e();};cO.mthZINT_CHANGEFIXEDLISTITEM=function(p0,p1){var r=l.mR(this,cO,"zInt_ChangeFixedListItem",321);
var P0=r.cPF("VALUE",Fd.F9.Dc);var P1=r.cPF("INSTANCE",Fd.F11.Dc);P0.set(p0);P1.set(p1);r.ln=321;{r.ln=326;this.mthZINT_CHANGELISTITEM(P1.get(),P0.get());}r.ln=327;r.e();};cO.mthZINT_CHANGELISTITEM=function(p0,p1){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_ChangeListItem",329);var P0=r.cPF("INSTANCE",Fd.F11.Dc);var P1=r.cPF("VALUE",Fd.F13.Dc);P0.set(p0);P1.set(p1);r.ln=329;{r.ln=334;{var v1=this.getUMANAGEDPROPERTYREF().getUTYPE();if(r.ln=336,l.s.eq(v1,"A")){r.ln=338;if(l.s.eq(this.getUMANAGEDPROPERTYREF().getUMETHOD(),"FIXED"))
{r.ln=340;{var l1=m.LISTOFALPHAS.selectList();while(l1.step()){r.ln=342;if(l.s.eq(f.F14.get(),P1.get())){r.ln=343;m.LISTOFALPHAS.getCurrentItem().setSelected(true);r.ln=344;break;}r.ln=347;}l1.end();}}else{r.ln=351;f.F18.set(lIO=m.LISTOFALPHAS.getEntry(P0.get()));r.ln=352;f.F14.set(P1.get());r.ln=353;m.LISTOFALPHAS.updateEntry();}}else if(r.ln=357,l.s.eq(v1,"N")){r.ln=359;if(l.s.eq(this.getUMANAGEDPROPERTYREF().getUMETHOD(),"FIXED")){r.ln=361;{var l1=m.LISTOFNUMBERS.selectList();while(l1.step()){
r.ln=363;if(l.or(l.or(l.or(l.or(l.or(l.n.eq(f.F2.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get())),l.n.eq(f.F3.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()))),l.n.eq(f.F4.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()))),l.n.eq(f.F5.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()))),l.n.eq(f.F6.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()))),l.n.eq(f.F7.get(),m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get())))){r.ln=364;m.LISTOFNUMBERS.getCurrentItem().setSelected(true);r.ln=365;
break;}r.ln=368;}l1.end();}}else{r.ln=372;f.F18.set(lIO=m.LISTOFNUMBERS.getEntry(P0.get()));r.ln=374;{var v2=this.getUMANAGEDPROPERTYREF().getUMAXDECIMAL();if(r.ln=375,l.n.eq(v2,0)){r.ln=376;f.F2.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()));}else if(r.ln=377,l.n.eq(v2,1)){r.ln=378;f.F3.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()));}else if(r.ln=379,l.n.eq(v2,2)){r.ln=380;f.F4.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()));}else if(r.ln=381,l.n.eq(v2,3)){r.ln=382;f.F5.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()));
}else if(r.ln=383,l.n.eq(v2,4)){r.ln=384;f.F6.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()));}else if(r.ln=385,l.n.eq(v2,5)){r.ln=386;f.F7.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P1.get()));}r.ln=387;}r.ln=389;m.LISTOFNUMBERS.updateEntry();}r.ln=392;if(l.s.eq(this.getUMANAGEDPROPERTYREF().getUMETHOD(),"FIXED")){r.ln=393;m.LISTOFNUMBERS.getCurrentItem().setSelected(true);}}r.ln=396;}}r.ln=398;r.e();};cO.mthZINT_ADDBOOLEANFIXED=function(p0,p1,p2){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_AddBooleanFixed",400);
var P0=r.cPF("VALUE",Fd.F13.Dc);var P1=r.cPF("INSTANCE",Fd.F11.Dc);var P2=r.cPF("CAPTIONINSTANCE",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set(p2);r.ln=400;{r.ln=406;f.F1.set(P2.get());r.ln=407;f.F10.set(l.s.UpperCase(P0.get()));r.ln=408;f.F15.set(f.F10.get());r.ln=410;m.LISTOFBOOLEANS.addEntry();r.ln=412;if(l.s.eq(f.F10.get(),"TRUE")){r.ln=413;m.LISTOFBOOLEANS.getCurrentItem().setChecked("CHECKED");}else{r.ln=415;m.LISTOFBOOLEANS.getCurrentItem().setChecked("UNCHECKED");}}r.ln=418;r.e();};cO.mthZINT_ADDFIXEDLISTITEM=function(p0,p1,p2)
{var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_AddFixedListItem",420);var P0=r.cPF("VALUE",Fd.F13.Dc);var P1=r.cPF("INSTANCE",Fd.F11.Dc);var P2=r.cPF("CAPTIONINSTANCE",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set(p2);r.ln=420;{r.ln=426;f.F1.set("");f.F2.set(0);f.F3.set(0);f.F4.set(0);f.F5.set(0);f.F6.set(0);f.F7.set(0);r.ln=428;if(l.s.eq(m.UMANAGEDPROPERTYREF.getUTYPE(),"A")){r.ln=429;this.mthZINT_ADDALPHALISTITEM(P0.get(),P2.get());r.ln=430;m.LISTOFALPHAS.getCurrentItem().setSelected(l.n.eq(P1.get(),1));
}else{r.ln=432;this.mthZINT_ADDNUMBERLISTITEM(P0.get(),P2.get());r.ln=433;m.LISTOFNUMBERS.getCurrentItem().setSelected(l.n.eq(P1.get(),1));}r.e();return;}r.ln=438;};cO.mthZINT_ADDLISTITEM=function(p0,p1){var r=l.mR(this,cO,"zInt_AddListItem",440);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");var P1=r.cPF("INSTANCE",Fd.F11.Dc);P0.set(p0);P1.set(p1);r.ln=440;{r.ln=445;if(l.s.eq(this.getUMANAGEDPROPERTYREF().getUTYPE(),"A")){r.ln=446;this.mthZINT_ADDALPHALISTITEM(P0.get(),u);}else{r.ln=448;this.mthZINT_ADDNUMBERLISTITEM(P0.get(),u);
}}r.ln=451;r.e();};cO.mthZINT_VISUALIZELIST=function(p0,p1,p2){var li=this.LIST.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_VisualizeList",453);var P0=r.cP("MULTIPLESELECT","PRIM_ALPH");var P1=r.cPF("TYPE",Fd.F12.Dc);var P2=r.cP("METHOD","PRIM_ALPH");P0.set(p0);P1.set(p1);P2.set(p2);r.ln=453;{r.ln=459;li.DIRTYVALUES.clearList();r.ln=461;if(l.tB(l.s.eq(P2.get(),"FIXED"))){r.ln=463;{var v1=P1.get();if(r.ln=465,l.s.eq(v1,"B")){r.ln=466;this.mthZINT_LAYOUTPROPERTY(m.LISTOFBOOLEANS);}else if(r.ln=467,l.s.eq(v1,"N"))
{r.ln=468;this.mthZINT_LAYOUTPROPERTY(m.LISTOFNUMBERS);r.ln=469;m.LISTOFNUMBERS.setSelectionStyle(P0.get());}else if(r.ln=470,l.s.eq(v1,"A")){r.ln=471;this.mthZINT_LAYOUTPROPERTY(m.LISTOFALPHAS);r.ln=472;m.LISTOFALPHAS.setSelectionStyle(P0.get());}r.ln=473;}}else{r.ln=477;if(l.s.eq(P1.get(),"A")){r.ln=478;this.mthZINT_LAYOUTPROPERTY(m.LISTOFALPHAS);}else{r.ln=480;this.mthZINT_LAYOUTPROPERTY(m.LISTOFNUMBERS);}}}r.ln=485;r.e();};cO.mthZINT_ADDALPHALISTITEM=function(p0,p1){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_AddAlphaListItem",487);
var P0=r.cP("VALUE","PRIM_DC","UnicodeString");var P1=r.cPF("CAPTIONINSTANCE",Fd.F1.Dc);P0.set(p0);P1.set((p1===u)?(""):(p1));r.ln=487;{r.ln=491;m.ALPHALISTVALUE.setMaxLength(this.getUMANAGEDPROPERTYREF().getUMAXLENGTH());r.ln=493;if(this.getUMANAGEDPROPERTYREF().getUUPPERCASE()){r.ln=494;m.ALPHALISTVALUE.setCharacterCase("UPPER");}else{r.ln=496;m.ALPHALISTVALUE.setCharacterCase("MIXED");}r.ln=499;f.F1.set(P1.get());r.ln=500;f.F14.set(P0.get());r.ln=502;m.LISTOFALPHAS.addEntry();}r.ln=504;r.e();};
cO.mthZINT_ADDNUMBERLISTITEM=function(p0,p1){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_AddNumberListItem",506);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");var P1=r.cPF("CAPTIONINSTANCE",Fd.F1.Dc);P0.set(p0);P1.set((p1===u)?(""):(p1));r.ln=506;{r.ln=511;this.mthZINT_CHANGENUMBERFIELD(P0.get());r.ln=512;f.F1.set(P1.get());r.ln=514;m.LISTOFNUMBERS.addEntry();}r.ln=516;r.e();};cO.mthZINT_CHANGENUMBERFIELD=function(p0){var f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_ChangeNumberField",518);
var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=518;{r.ln=522;{var v1=this.getUMANAGEDPROPERTYREF().getUMAXDECIMAL();if(r.ln=523,l.n.eq(v1,0)){r.ln=524;f.F2.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));}else if(r.ln=525,l.n.eq(v1,1)){r.ln=526;f.F3.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));}else if(r.ln=527,l.n.eq(v1,2)){r.ln=528;f.F4.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));}else if(r.ln=529,l.n.eq(v1,3)){r.ln=530;f.F5.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));
}else if(r.ln=531,l.n.eq(v1,4)){r.ln=532;f.F6.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));}else if(r.ln=533,l.n.eq(v1,5)){r.ln=534;f.F7.set(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));}r.ln=535;}}r.ln=537;r.e();};cO.mthZINT_VISUALIZEALPHAITEM=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_VisualizeAlphaItem",539);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=539;{r.ln=543;if(this.getUMANAGEDPROPERTYREF().getUUPPERCASE()){r.ln=544;m.ALPHAVALUE.setCharacterCase("UPPER");
}else{r.ln=546;m.ALPHAVALUE.setCharacterCase("MIXED");}r.ln=549;m.ALPHAVALUE.setValue(P0.get());m.ALPHAVALUE.setMaxLength(this.getUMANAGEDPROPERTYREF().getUMAXLENGTH());r.ln=551;this.mthZINT_LAYOUTPROPERTY(m.ALPHAVALUE);}r.ln=552;r.e();};cO.mthZINT_VISUALIZENUMERICITEM=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_VisualizeNumericItem",555);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");P0.set(p0);r.ln=555;{r.ln=559;{var v1=this.getUMANAGEDPROPERTYREF().getUMAXDECIMAL();if(r.ln=560,l.n.eq(v1,0))
{r.ln=561;m.VF_ELN300_V.setValue(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));r.ln=562;this.mthZINT_LAYOUTPROPERTY(m.VF_ELN300_V);}else if(r.ln=563,l.n.eq(v1,1)){r.ln=564;m.VF_ELN301_V.setValue(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));r.ln=565;this.mthZINT_LAYOUTPROPERTY(m.VF_ELN301_V);}else if(r.ln=566,l.n.eq(v1,2)){r.ln=567;m.VF_ELN302_V.setValue(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));r.ln=568;this.mthZINT_LAYOUTPROPERTY(m.VF_ELN302_V);}else if(r.ln=569,l.n.eq(v1,3)){r.ln=570;
m.VF_ELN303_V.setValue(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));r.ln=571;this.mthZINT_LAYOUTPROPERTY(m.VF_ELN303_V);}else if(r.ln=572,l.n.eq(v1,4)){r.ln=573;m.VF_ELN304_V.setValue(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));r.ln=574;this.mthZINT_LAYOUTPROPERTY(m.VF_ELN304_V);}else if(r.ln=575,l.n.eq(v1,5)){r.ln=576;m.VF_ELN305_V.setValue(m.USYSTEM.ref.mthZINT_STRINGTONUMBER(P0.get()));r.ln=577;this.mthZINT_LAYOUTPROPERTY(m.VF_ELN305_V);}r.ln=578;}}r.ln=580;r.e();};cO.mthZINT_VISUALIZEBOOLEANITEM=function(p0)
{var m=this.REF,r=l.mR(this,cO,"zInt_VisualizeBooleanItem",583);var P0=r.cP("STATE","PRIM_BOLN");P0.set(p0);r.ln=583;{r.ln=587;if(l.tB(P0.get())){r.ln=588;m.BOOLEANVALUE.setButtonState("CHECKED");}else{r.ln=590;m.BOOLEANVALUE.setButtonState("UNCHECKED");}r.ln=593;this.mthZINT_LAYOUTPROPERTY(m.BOOLEANVALUE);}r.ln=595;r.e();};cO.mthZINT_LAYOUTPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_LayoutProperty",599);var P0=r.cPD("FOR");P0=p0;r.ln=599;{r.ln=602;this.mthZINT_HIDEEVERYTHING();r.ln=604;
m.PROPERTYCAPTION.setVisible(true);r.ln=605;m.PROPERTYCAPTION.setCaption(this.getUUSECAPTION());r.ln=607;m.CAPTIONITEM.setManage(m.PROPERTYCAPTION);r.ln=609;m.VALUEITEM.setManage(P0);r.ln=611;P0.setVisible(true);}r.ln=613;r.e();};cO.mthZINT_VISUALIZEHEADER=function(p0){var m=this.REF,r=l.mR(this,cO,"zInt_VisualizeHeader",615);var P0=r.cPF("USECAPTION",Fd.F1.Dc);P0.set(p0);r.ln=615;{r.ln=619;m.PROPERTYCAPTION.setVisible(true);m.PROPERTYCAPTION.setCaption(P0.get());r.ln=621;m.CAPTIONITEM.setManage(m.PROPERTYCAPTION);
r.ln=623;this.setHeight(25);}r.ln=624;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#ListOfNumbers.ItemChanged #ListOfAlphas.ItemChanged #AlphaValue.Changed #VF_ELN300_V.Changed #VF_ELN302_V.Changed #VF_ELN303_V.Changed #VF_ELN304_V.Changed #VF_ELN305_V.Changed",629);r.ln=629;{r.ln=630;this.setUPROPERTYISDIRTY(true);}r.ln=632;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#BooleanValue.Click",634);r.ln=634;{r.ln=636;this.setUPROPERTYISDIRTY(true);}r.ln=638;r.e();};function e3(ITEM,Ps){var f=this.FLD.VF_UI068O,m=this.REF,r=l.eR(this,cO,"#ListOfBooleans.ItemChanged",640);
r.ln=640;{r.ln=642;if(l.s.eq(m.LISTOFBOOLEANS.getCurrentItem().getChecked(),"CHECKED")){r.ln=643;f.F10.set("TRUE");}else{r.ln=645;f.F10.set("FALSE");}r.ln=648;m.LISTOFBOOLEANS.updateEntry();r.ln=650;this.mthZINT_ADDCHANGEDPROPERTY(l.s.UpperCase(l.b.AsString(l.s.eq(m.BOOLEANVALUE.getButtonState(),"CHECKED"))),m.LISTOFBOOLEANS.getCurrentItem().getEntry(),false);}r.ln=652;r.e();};cO.mthZINT_ADDCHANGEDPROPERTY=function(p0,p1,p2){var li=this.LIST.VF_UI068O,f=this.FLD.VF_UI068O,r=l.mR(this,cO,"zInt_AddChangedProperty",654);
var P0=r.cPF("PROPERTYVALUE",Fd.F9.Dc);var P1=r.cPF("PROPERTYINSTANCE",Fd.F8.Dc);var P2=r.cP("CLEAR","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?(1):(p1));P2.set((p2===u)?(true):(p2));r.ln=654;{r.ln=660;if(l.tB(P2.get())){r.ln=662;li.DIRTYVALUES.clearList();}r.ln=666;f.F8.set(P1.get());r.ln=667;f.F16.set(P0.get());r.ln=669;li.DIRTYVALUES.addEntry();r.ln=671;this.setUPROPERTYISDIRTY(true);}r.ln=673;r.e();};cO.mthZINT_CLEARLIST=function(){var li=this.LIST.VF_UI068O,f=this.FLD.VF_UI068O,m=this.REF,r=l.mR(this,cO,"zInt_ClearList",675);
r.ln=675;{r.ln=677;li.DIRTYVALUES.clearList();r.ln=679;{var l1=m.LISTOFBOOLEANS.selectList();while(l1.step()){r.ln=681;f.F10.set(f.F15.get());r.ln=682;m.LISTOFBOOLEANS.updateEntry();r.ln=684;if(l.s.eq(f.F15.get(),"TRUE")){r.ln=685;m.LISTOFBOOLEANS.getCurrentItem().setChecked("CHECKED");}else{r.ln=687;m.LISTOFBOOLEANS.getCurrentItem().setChecked("UNCHECKED");}r.ln=690;}l1.end();}}r.ln=692;r.e();};cO.mthZINT_HIDEEVERYTHING=function(){var m=this.REF,r=l.mR(this,cO,"zInt_HideEverything",694);r.ln=694;
{r.ln=696;m.LISTOFBOOLEANS.setVisible(false);r.ln=697;m.LISTOFALPHAS.setVisible(false);r.ln=698;m.LISTOFNUMBERS.setVisible(false);r.ln=699;m.LISTOFALPHAS.setVisible(false);r.ln=700;m.LISTOFNUMBERS.setVisible(false);r.ln=701;m.ALPHAVALUE.setVisible(false);r.ln=703;m.VF_ELN300_V.setVisible(false);r.ln=704;m.VF_ELN301_V.setVisible(false);r.ln=705;m.VF_ELN302_V.setVisible(false);r.ln=706;m.VF_ELN303_V.setVisible(false);r.ln=707;m.VF_ELN304_V.setVisible(false);r.ln=708;m.VF_ELN305_V.setVisible(false);
r.ln=710;m.BOOLEANVALUE.setVisible(false);r.ln=711;m.PROPERTYCAPTION.setVisible(false);}r.ln=713;r.e();};cO.getUMANAGEDPROPERTYREF=function(){return this.REF.UMANAGEDPROPERTYREF;};cO.setUMANAGEDPROPERTYREF=function(v){this.srUMANAGEDPROPERTYREF(v);};cO.getUUSECAPTION=function(){return this.REF.UUSECAPTION.get();};cO.setUUSECAPTION=function(v){this.REF.UUSECAPTION.set(v);};cO.getUPROPERTYISDIRTY=function(){return this.REF.UPROPERTYISDIRTY.get();};cO.setUPROPERTYISDIRTY=function(v){this.REF.UPROPERTYISDIRTY.set(v);
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELCA_1"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELN300"});Fd.F2.VISUAL=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.VISUAL,an:"PRIM_EVEF",fn:"VF_ELN300",cn:"Visual"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELN301"});Fd.F3.VISUAL=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.VISUAL,an:"PRIM_EVEF",fn:"VF_ELN301",cn:"Visual"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELN302"});Fd.F4.VISUAL=function(){this.aN.call(this,new Fd.F4.Dc());};l.cFC({co:Fd.F4.VISUAL,an:"PRIM_EVEF",fn:"VF_ELN302",cn:"Visual"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELN303"});Fd.F5.VISUAL=function(){this.aN.call(this,new Fd.F5.Dc());};l.cFC({co:Fd.F5.VISUAL,an:"PRIM_EVEF",fn:"VF_ELN303",cn:"Visual"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};
l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELN304"});Fd.F6.VISUAL=function(){this.aN.call(this,new Fd.F6.Dc());};l.cFC({co:Fd.F6.VISUAL,an:"PRIM_EVEF",fn:"VF_ELN304",cn:"Visual"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"VF_ELN305"});Fd.F7.VISUAL=function(){this.aN.call(this,new Fd.F7.Dc());};l.cFC({co:Fd.F7.VISUAL,an:"PRIM_EVEF",fn:"VF_ELN305",cn:"Visual"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"VF_ELPTYI"});
}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"VF_ELAVAL"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"VF_ELBOOL"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"VF_ELPTYT"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"VF_ELTXTA"});
}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"VF_ELENAB"});Fd.F15.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");C0.setCaption("False");C0.setDefault(true);C0.setParent(this);C0.setValue("FALSE");C0.iC();C1.setCaption("True");C1.setParent(this);C1.setValue("TRUE");C1.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F15.pl,an:"PRIM_PKLT",fn:"VF_ELENAB",cn:"Picklist"});}{Fd.F17.Dc=function()
{this.aN.call(this,Fd.F17);};l.cFC({co:Fd.F17.Dc,an:"PRIM_FLD",fn:"VF_ELNUM"});}cO.srUMANAGEDPROPERTYREF=function(rn){this.sR("UMANAGEDPROPERTYREF",rn);};},{rc:["VF_SY100O","VF_SY001O"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_EDIT","PRIM_CKBX","PRIM_LABL","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Number","PRIM_FLD","PRIM_BOLN","PRIM_KCOL","PRIM_EVEF","PRIM_PKLT"],dc:["VF_FP017O"]});