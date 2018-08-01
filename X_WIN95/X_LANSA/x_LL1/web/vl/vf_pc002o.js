﻿LANSA.addComponent({id:"VF_PC002O",ot:"rp",tp:"Reusable Part",de:"\\OC=Virtual Clipboard (VLF-ONE)",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELLANG",ft:"A",ln:4,dc:0,lb:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],h1:{"ENG":"Language","FRA":"Code","JPN":"言語"}[cL],h2:{"ENG":"Code","FRA":"langue","JPN":"コード"}[cL],h3:"",de:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],dv:l.eSV("*LANGUAGE"),ia:["FE"]},F3:{nm:"VF_ELNUMX",ft:"S",ln:30,dc:9,ec:"4",lb:"Maximum Number",h1:"Maximum",h2:"Number",h3:"",de:"Maximum Number",dv:0,ia:["RB","FE"]},F4:{nm:"VF_ELURLX",ft:"VC",ln:2048,dc:0,lb:{"ENG":"URL","FRA":"Extended URL","JPN":"Extended URL"}[cL],
h1:{"ENG":"URL","FRA":"Extended","JPN":"Extended"}[cL],h2:{"ENG":"","FRA":"URL","JPN":"URL"}[cL],h3:"",de:{"ENG":"URL","FRA":"Extended URL","JPN":"Extended URL"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,mt:{uSet:{ps:{"uID1":{pt:"i"},"uID2":{pt:"i"},"uID3":{pt:"i"},"uID4":{pt:"i"},"uID5":{pt:"i"},"uLanguage":{pt:"i"},"uInstance":{pt:"i"},"uAValue":{pt:"i"},"uNValue":{pt:"i"},"uPersistent":{pt:"i"}}},uGet:{ps:{"uID1":{pt:"i"},"uID2":{pt:"i"},"uID3":{pt:"i"},"uID4":{pt:"i"},"uID5":
{pt:"i"},"uLanguage":{pt:"i"},"uInstance":{pt:"i"},"uAValue":{pt:"o"},"uNValue":{pt:"o"},"uAValueDefault":{pt:"i"},"uNValueDefault":{pt:"i"}}},uDelete:{ps:{"uID1":{pt:"i"},"uID2":{pt:"i"},"uID3":{pt:"i"},"uID4":{pt:"i"},"uID5":{pt:"i"},"uLanguage":{pt:"i"},"uInstance":{pt:"i"}}},uClear:{},uSave:{},uRestore:{ps:{"FromMasterSpaceIdentifer":{pt:"i"}}},uInitialize:{},uTerminate:{}},ev:{VirtualClipboardEntryChanged:{ps:{"VF_PC003OReference":{pt:"i"}}},VirtualClipboardEntryDeleted:{ps:{"VF_PC003OReference":
{pt:"i"}}},VirtualClipboardCleared:{}},co:function(){cO.aN.call(this);this.aF("VF_PC002O",Fd);var C0=this.cA("USYSTEMCOMMON","VF_SY001X");var C1=this.cA("USYSTEM","VF_SY001O");var C2=this.cR("UMASTERSPACEIDENTIFER","PRIM_ALPH");var C3=this.cR("VIRTUALCLIPBOARDSTORAGE","PRIM_KCOL");var C4=this.cF("UCHANGECOUNTER",Fd.F1.Dc);if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setStyle("COLLECTION");C3.setCollects("VF_PC003O");C3.setKeyedBy(Fd.F4.Dc);C3.iC();
C4.aD();C4.iC();}});cO.mthUSET=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9){var m=this.REF,r=l.mR(this,cO,"uSet",38);var P0=r.cP("UID1","PRIM_ALPH");var P1=r.cP("UID2","PRIM_ALPH");var P2=r.cP("UID3","PRIM_ALPH");var P3=r.cP("UID4","PRIM_ALPH");var P4=r.cP("UID5","PRIM_ALPH");var P5=r.cPF("ULANGUAGE",Fd.F2.Dc);var P6=r.cPF("UINSTANCE",Fd.F1.Dc);var P7=r.cP("UAVALUE","PRIM_DC","UnicodeString");var P8=r.cPF("UNVALUE",Fd.F3.Dc);var P9=r.cP("UPERSISTENT","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?("N"):(p1));
P2.set((p2===u)?("N"):(p2));P3.set((p3===u)?("N"):(p3));P4.set((p4===u)?("N"):(p4));P5.set((p5===u)?("ALL"):(p5));P6.set((p6===u)?(1):(p6));P7.set((p7===u)?("<<NOT_PASSED>>"):(p7));P8.set((p8===u)?(0):(p8));P9.set((p9===u)?(true):(p9));var C0=r.cF("COMPOSITEKEY",Fd.F4.Dc);var C1=r.cD("C1");C0.iC();r.ln=38;{r.ln=55;m.UCHANGECOUNTER.set(l.add(m.UCHANGECOUNTER.get(),1));r.ln=59;C0.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.s.UpperCase(P0.get()),"-"),l.s.UpperCase(P1.get())),"-"),l.s.UpperCase(P2.get())),"-"),l.s.UpperCase(P3.get())),"-"),l.s.UpperCase(P4.get())),"-"),l.s.UpperCase(P5.get())),"-"),l.n.AsString(P6.get())));
r.ln=63;C1=r.sR("C1",m.VIRTUALCLIPBOARDSTORAGE.get(C0.get()));r.ln=65;if((C1==null)){r.ln=69;C1=r.sR("C1",l.cAs("VF_PC003O"));r.ln=73;C1.setID1(P0.get());r.ln=74;C1.setID2(P1.get());r.ln=75;C1.setID3(P2.get());r.ln=76;C1.setID4(P3.get());r.ln=77;C1.setID5(P4.get());r.ln=79;C1.setLANGUAGE(P5.get());r.ln=80;C1.setINSTANCE(P6.get());r.ln=84;C1.setCLIPBOARDKEY(C0.get());r.ln=88;m.VIRTUALCLIPBOARDSTORAGE.set(C0.get(),C1);}r.ln=94;if(l.tB(l.s.ne(P7.get(),"<<NOT_PASSED>>"))){r.ln=96;C1.setCLIPBOARDVALUE(P7.get());
}else{r.ln=100;C1.setCLIPBOARDVALUE(l.n.AsString(P8.get()));}r.ln=106;C1.setPERSISTENT(P9.get());r.ln=110;C1.setCHANGED(true);r.ln=113;{var eP=l.ePs();eP.cD("VF_PC003OREFERENCE");eP.sR("VF_PC003OREFERENCE",C1);this.fE("VIRTUALCLIPBOARDENTRYCHANGED",eP);eP.e();}r.ln=116;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=118;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add(l.cat(l.cat("Saved ",C0.get())," with value "),C1.getCLIPBOARDVALUE()),u,u,true,u);}}r.ln=123;r.e();};cO.mthUGET=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10)
{var m=this.REF,r=l.mR(this,cO,"uGet",126);var P0=r.cP("UID1","PRIM_ALPH");var P1=r.cP("UID2","PRIM_ALPH");var P2=r.cP("UID3","PRIM_ALPH");var P3=r.cP("UID4","PRIM_ALPH");var P4=r.cP("UID5","PRIM_ALPH");var P5=r.cPF("ULANGUAGE",Fd.F2.Dc);var P6=r.cPF("UINSTANCE",Fd.F1.Dc);var P7=r.cP("UAVALUE","PRIM_DC","UnicodeString");var P8=r.cPF("UNVALUE",Fd.F3.Dc);var P9=r.cP("UAVALUEDEFAULT","PRIM_DC","UnicodeString");var P10=r.cPF("UNVALUEDEFAULT",Fd.F3.Dc);var P11=r.cP("FOUND","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?("N"):(p1));
P2.set((p2===u)?("N"):(p2));P3.set((p3===u)?("N"):(p3));P4.set((p4===u)?("N"):(p4));P5.set((p5===u)?("ALL"):(p5));P6.set((p6===u)?(1):(p6));P7.set("");P8.set(0);P9.set((p9===u)?(""):(p9));P10.set((p10===u)?(0):(p10));P11.set(false);var C0=r.cF("COMPOSITEKEY",Fd.F4.Dc);var C1=r.cD("C1");C0.iC();r.ln=126;{r.ln=149;C0.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.s.UpperCase(P0.get()),"-"),l.s.UpperCase(P1.get())),"-"),l.s.UpperCase(P2.get())),"-"),l.s.UpperCase(P3.get())),"-"),l.s.UpperCase(P4.get())),"-"),l.s.UpperCase(P5.get())),"-"),l.n.AsString(P6.get())));
r.ln=153;C1=r.sR("C1",m.VIRTUALCLIPBOARDSTORAGE.get(C0.get()));r.ln=155;if((C1!=null)){r.ln=159;P7.setValue(C1.getCLIPBOARDVALUE());r.ln=163;if(l.s.IsNumber(C1.getCLIPBOARDVALUE())){r.ln=165;P8.set(l.s.AsNumber(C1.getCLIPBOARDVALUE()));}else{r.ln=169;P8.set(P10.get());}r.ln=175;P11.set(true);r.ln=178;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=180;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.add(l.cat(l.cat("Restored ",C0.get())," with value "),C1.getCLIPBOARDVALUE()),u,u,true,u);}}else{r.ln=189;
P7.set(P9.get());r.ln=191;P8.set(P10.get());r.ln=195;P11.set(false);r.ln=197;if(m.USYSTEMCOMMON.ref.getINSYSTRACEMODE()){r.ln=199;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,l.cat(l.cat("Did not restore ",C0.get())," default values returned."),u,u,true,u);}}if(p7!==u){p7.set(P7.get());}if(p8!==u){p8.set(P8.get());}}r.ln=205;return r.rV(P11.get());};cO.mthUDELETE=function(p0,p1,p2,p3,p4,p5,p6){var m=this.REF,r=l.mR(this,cO,"uDelete",208);var P0=r.cP("UID1","PRIM_ALPH");var P1=r.cP("UID2","PRIM_ALPH");
var P2=r.cP("UID3","PRIM_ALPH");var P3=r.cP("UID4","PRIM_ALPH");var P4=r.cP("UID5","PRIM_ALPH");var P5=r.cPF("ULANGUAGE",Fd.F2.Dc);var P6=r.cPF("UINSTANCE",Fd.F1.Dc);var P7=r.cP("FOUND","PRIM_BOLN");P0.set(p0);P1.set((p1===u)?("N"):(p1));P2.set((p2===u)?("N"):(p2));P3.set((p3===u)?("N"):(p3));P4.set((p4===u)?("N"):(p4));P5.set((p5===u)?("ALL"):(p5));P6.set((p6===u)?(1):(p6));P7.set(false);var C0=r.cF("COMPOSITEKEY",Fd.F4.Dc);var C1=r.cD("C1");C0.iC();r.ln=208;{r.ln=224;m.UCHANGECOUNTER.set(l.add(m.UCHANGECOUNTER.get(),1));
r.ln=228;C0.set(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat(l.s.UpperCase(P0.get()),"-"),l.s.UpperCase(P1.get())),"-"),l.s.UpperCase(P2.get())),"-"),l.s.UpperCase(P3.get())),"-"),l.s.UpperCase(P4.get())),"-"),l.s.UpperCase(P5.get())),"-"),l.n.AsString(P6.get())));r.ln=232;C1=r.sR("C1",m.VIRTUALCLIPBOARDSTORAGE.mthREMOVE(C0.getValue()));r.ln=236;if((C1!=null)){r.ln=240;P7.set(true);r.ln=244;{var eP=l.ePs();eP.cD("VF_PC003OREFERENCE");eP.sR("VF_PC003OREFERENCE",C1);this.fE("VIRTUALCLIPBOARDENTRYDELETED",eP);
eP.e();}}else{r.ln=250;P7.set(false);}}r.ln=254;return r.rV(P7.get());};cO.mthUCLEAR=function(){var m=this.REF,r=l.mR(this,cO,"uClear",258);r.ln=258;{r.ln=262;m.VIRTUALCLIPBOARDSTORAGE.mthREMOVEALL();r.ln=265;m.UCHANGECOUNTER.set(0);r.ln=269;this.fE("VIRTUALCLIPBOARDCLEARED");}r.ln=271;r.e();};cO.mthUSAVE=function(){var m=this.REF,r=l.mR(this,cO,"uSave",274);var C0=r.cR("JSON","PRIM_WEB","Json");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cD("C3");var C4=r.cR("LSKEYSTRING","PRIM_ALPH");C0.iC();C4.iC();
r.ln=274;{r.ln=284;if(l.n.gt(m.UCHANGECOUNTER.get(),0)){r.ln=295;C1=r.sR("C1",C0.mthCREATEROOTOBJECT());r.ln=299;C3=r.sR("C3",C1.mthINSERTARRAY("ClipboardItems"));r.ln=301;{var l1=m.VIRTUALCLIPBOARDSTORAGE.cI();while(l1.step()){var OVF_PC003O=r.sR("OVF_PC003O",l1.item());r.ln=305;if(OVF_PC003O.getPERSISTENT()){r.ln=309;C2=r.sR("C2",C3.mthINSERTOBJECT());r.ln=313;C2.mthINSERTSTRING("ID1",OVF_PC003O.getID1());r.ln=314;C2.mthINSERTSTRING("ID2",OVF_PC003O.getID2());r.ln=315;C2.mthINSERTSTRING("ID3",OVF_PC003O.getID3());
r.ln=316;C2.mthINSERTSTRING("ID4",OVF_PC003O.getID4());r.ln=317;C2.mthINSERTSTRING("ID5",OVF_PC003O.getID5());r.ln=318;C2.mthINSERTSTRING("Language",OVF_PC003O.getLANGUAGE());r.ln=319;C2.mthINSERTNUMBER("Instance",OVF_PC003O.getINSTANCE());r.ln=320;C2.mthINSERTSTRING("ClipboardKey",OVF_PC003O.getCLIPBOARDKEY());r.ln=321;C2.mthINSERTSTRING("ClipboardValue",OVF_PC003O.getCLIPBOARDVALUE());}r.ln=325;}l1.end();r.dR("OVF_PC003O");}r.ln=328;if(m.USYSTEM.ref.getLOCALSTORAGEAVAILABLE()){r.ln=330;C4.set(l.cat("VLF_",m.UMASTERSPACEIDENTIFER.get()));
r.ln=331;if(l.n.gt(m.USYSTEM.ref.getUIFORMFACTOR_ASINDEX(),1)){r.ln=332;C4.set(l.cat(C4.get(),l.cat("_",l.n.AsString(m.USYSTEM.ref.getUIFORMFACTOR_ASINDEX()))));}r.ln=335;l.WEB().getLocalStorage().mthADD(C4.get(),C0.get());}r.ln=339;m.UCHANGECOUNTER.set(0);}}r.ln=342;r.e();};cO.mthURESTORE=function(p0){var m=this.REF,r=l.mR(this,cO,"uRestore",346);var P0=r.cP("FROMMASTERSPACEIDENTIFER","PRIM_ALPH");P0.set(p0);var C0=r.cR("JSON","PRIM_WEB","Json");var C1=r.cD("C1");var C2=r.cF("COMPOSITEKEY",Fd.F4.Dc);
var C3=r.cD("C3");var C4=r.cR("JSONSTRING","PRIM_DC","UnicodeString");var C5=r.cR("LSKEYSTRING","PRIM_ALPH");C0.iC();C2.iC();C4.iC();C5.iC();r.ln=346;{r.ln=360;if(m.USYSTEM.ref.getLOCALSTORAGEAVAILABLE()){r.ln=363;this.mthUINITIALIZE();r.ln=366;m.UMASTERSPACEIDENTIFER.set(l.s.UpperCase(P0.get()));r.ln=369;C5.set(l.cat("VLF_",m.UMASTERSPACEIDENTIFER.get()));r.ln=370;if(l.n.gt(m.USYSTEM.ref.getUIFORMFACTOR_ASINDEX(),1)){r.ln=371;C5.set(l.cat(C5.get(),l.cat("_",l.n.AsString(m.USYSTEM.ref.getUIFORMFACTOR_ASINDEX()))));
}r.ln=374;if((l.WEB().getLocalStorage().get(C5.get())!=null)){r.ln=377;C0.set(l.WEB().getLocalStorage().get(C5.get()).get());r.ln=380;C1=r.sR("C1",C0.getRootItem());r.ln=382;if((C1!=null)){r.ln=386;{var l1=C1.get("ClipboardItems").cI();while(l1.step()){var JOVF_PC003O=r.sR("JOVF_PC003O",l1.item());r.ln=390;C3=r.sR("C3",l.cAs("VF_PC003O"));r.ln=392;C3.setID1(JOVF_PC003O.get("ID1").mthASSTRING());r.ln=393;C3.setID2(JOVF_PC003O.get("ID2").mthASSTRING());r.ln=394;C3.setID3(JOVF_PC003O.get("ID3").mthASSTRING());
r.ln=395;C3.setID4(JOVF_PC003O.get("ID4").mthASSTRING());r.ln=396;C3.setID5(JOVF_PC003O.get("ID5").mthASSTRING());r.ln=397;C3.setLANGUAGE(JOVF_PC003O.get("Language").mthASSTRING());r.ln=398;C3.setINSTANCE(JOVF_PC003O.get("Instance").mthASNUMBER());r.ln=399;C3.setCLIPBOARDKEY(JOVF_PC003O.get("ClipboardKey").mthASSTRING());r.ln=400;C3.setCLIPBOARDVALUE(JOVF_PC003O.get("ClipboardValue").mthASSTRING());r.ln=401;C3.setPERSISTENT(true);r.ln=405;m.VIRTUALCLIPBOARDSTORAGE.set(JOVF_PC003O.get("ClipboardKey").mthASSTRING(),C3);
r.ln=407;}l1.end();r.dR("JOVF_PC003O");}}}r.ln=414;m.UCHANGECOUNTER.set(0);}}r.ln=418;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",421);r.ln=421;{r.ln=424;this.mthUTERMINATE();r.ln=427;m.UCHANGECOUNTER.set(0);}r.ln=429;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",432);r.ln=432;{r.ln=434;m.VIRTUALCLIPBOARDSTORAGE.mthREMOVEALL();}r.ln=436;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELLANG"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELNUMX"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELURLX"});}},{rc:["VF_SY001X","VF_SY001O"],rp:["PRIM_OBJT","PRIM_ALPH","PRIM_KCOL","PRIM_FLD"],dc:["VF_PC003O"],dp:["PRIM_WEB.Json","PRIM_WEB.JsonObject","PRIM_WEB.JsonArray","PRIM_ALPH","PRIM_WEB.JsonElement","PRIM_DC.UnicodeString"]
});