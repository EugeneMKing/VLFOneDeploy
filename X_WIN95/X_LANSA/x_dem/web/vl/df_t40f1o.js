﻿LANSA.addComponent({id:"DF_T40F1O",ot:"rp",tp:"Reusable Part",de:"\\OC=People Filter",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"Search","FRA":"Rechercher","JPN":"検索"}[cL];var Fd={F1:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:{"ENG":"Text","FRA":"Text","JPN":" "}[cL],h3:" ",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",
ia:["LC","FE"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uTerminate:{},uInitialize:{},Search:{},uHandleSearchorCommand:{ps:{"Details":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T40F1O",Fd);
var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cF("SEARCHTEXT",Fd.F1.VISUALEDIT);var C2=this.cR("BUTTONBAR","VF_UI049O");var C3=this.cR("GPBX2","VF_UI036O");var C4=this.cR("SHOWCONTACT","PRIM_MD","CheckBox");var C5=this.cR("SHOWSALARY","PRIM_MD","CheckBox");var C6=this.cR("SHOWTRAVEL","PRIM_MD","CheckBox");var C7=this.cR("CLEARLIST_CKBX","PRIM_MD","CheckBox");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setDisplayPosition(1);C1.setHeight(24);C1.setParent(this);C1.setTabPosition(1);C1.setTop(5);
C1.setLeft(8);C1.setWidth(153);C1.setLabelType("CAPTION");C1.setMarginLeft(0);C1.setPlaceholder("Name or phone");C1.aD();C1.iC();C2.setDisplayPosition(2);C2.setLeft(166);C2.setParent(this);C2.setTabPosition(2);C2.setTop(5);C2.setWidth(100);C2.setHeight(33);C2.iC();C3.setDisplayPosition(3);C3.setLeft(8);C3.setParent(this);C3.setTabPosition(3);C3.setTabStop(false);C3.setTop(36);C3.setWidth(153);C3.setHeight(149);C3.iC();C4.setCaption("Contact Details");C4.setDisplayPosition(1);C4.setTabPosition(1);
C4.setTop(30);C4.setWidth(200);C4.setParent(C3);C4.iC();C5.setCaption("Salary Summary");C5.setDisplayPosition(3);C5.setTabPosition(3);C5.setTop(60);C5.setWidth(200);C5.setParent(C3);C5.iC();C6.setCaption("Travel Expenses");C6.setDisplayPosition(5);C6.setTabPosition(4);C6.setTop(90);C6.setWidth(200);C6.setParent(C3);C6.iC();C7.setCaption("Clear Last Search ");C7.setDisplayPosition(4);C7.setHeight(22);C7.setParent(C3);C7.setTabPosition(5);C7.setTop(120);C7.setWidth(200);C7.setCheckState("CHECKED");
C7.iC();C1.aH("ENTER",this,e1);C2.aH("BUTTONCLICKED",this,e1);C4.aH("CHANGED",this,e3);C5.aH("CHANGED",this,e4);C6.aH("CHANGED",this,e5);this.REF.AVLOCALTIMER.aH("TICK",this,e2);this.setLayoutManager(null);this.setHeight(193);this.setWidth(281);}});var cA=cO.aN.prototype;cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",35);r.ln=35;{r.ln=37;m.BUTTONBAR.mthUTERMINATE();r.ln=39;cA.mthUTERMINATE.call(this);}r.ln=41;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",44);
r.ln=44;{r.ln=46;this.REF.AVFRAMEWORKMANAGER.mthAVRECORDTRACE(this,"uInitialize executed.",u);r.ln=48;m.BUTTONBAR.mthUINITIALIZE(false,"LEFT");r.ln=49;m.BUTTONBAR.mthUADDBUTTON(m1,"SEARCH",u,u);r.ln=51;m.GPBX2.setCAPTION("Options");r.ln=54;m.PEOPLECONTROLLER.ref.setSHOULDSHOWCONTACT(true);r.ln=55;m.SHOWCONTACT.setCheckState("CHECKED");r.ln=57;if(m.PEOPLECONTROLLER.ref.getSHOULDSHOWSALARY()){r.ln=58;m.SHOWSALARY.setCheckState("CHECKED");}r.ln=61;if(m.PEOPLECONTROLLER.ref.getSHOULDSHOWTRAVEL()){r.ln=62;
m.SHOWTRAVEL.setCheckState("CHECKED");}r.ln=66;if(this.REF.AVFRAMEWORKMANAGER.getAVSMALLSCREEN()){r.ln=67;this.setScaleOriginLeft(0);this.setScaleOriginTop(0);this.setScaleHeight(120);this.setScaleWidth(120);}}r.ln=70;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ButtonBar.ButtonClicked #SearchText.Enter",74);r.ln=74;{r.ln=76;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=78;if(l.s.ne(l.s.Trim(m.SEARCHTEXT.get()),"")){r.ln=80;this.mthAVGOTOBUSYSTATE(l.cat(l.cat("Searching for \"",m.SEARCHTEXT.get()),"\""),false,u);
r.ln=82;this.REF.AVLOCALTIMERREQUEST.set("SEARCH");r.ln=83;this.REF.AVLOCALTIMER.setInterval(1);}else{r.ln=87;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("You need to specify something to search for",u,"WARNING",this,true,u,u);}}r.ln=91;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",95);r.ln=95;{r.ln=97;this.REF.AVLOCALTIMER.setInterval(0);r.ln=99;{var v1=this.REF.AVLOCALTIMERREQUEST.get();if(r.ln=101,l.s.eq(v1,"SEARCH")){r.ln=102;this.mthSEARCH();}else if(r.ln=104,l.s.eq(v1,"CONTACT"))
{r.ln=105;m.PEOPLECONTROLLER.ref.setSHOULDSHOWCONTACT(l.s.eq(m.SHOWCONTACT.getCheckState(),"CHECKED"));}else if(r.ln=107,l.s.eq(v1,"SALARY")){r.ln=108;m.PEOPLECONTROLLER.ref.setSHOULDSHOWSALARY(l.s.eq(m.SHOWSALARY.getCheckState(),"CHECKED"));}else if(r.ln=110,l.s.eq(v1,"TRAVEL")){r.ln=111;m.PEOPLECONTROLLER.ref.setSHOULDSHOWTRAVEL(l.s.eq(m.SHOWTRAVEL.getCheckState(),"CHECKED"));}r.ln=113;}r.ln=115;this.mthAVGOTOFREESTATE();}r.ln=117;r.e();};cO.mthSEARCH=function(){var m=this.REF,r=l.mR(this,cO,"Search",122);
var C0=r.cF("EMPLOYEECOUNT",Fd.F2.Dc);C0.iC();r.ln=122;{r.ln=126;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=129;m.PEOPLECONTROLLER.ref.mthFINDEMPLOYEES(1,true,l.s.Trim(m.SEARCHTEXT.get()),this.REF.AVLISTMANAGER,l.s.eq(m.CLEARLIST_CKBX.getCheckState(),"CHECKED"),C0);r.ln=132;if(l.n.eq(C0.get(),0)){r.ln=133;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat("Search for ",m.SEARCHTEXT.get())," found nothing."),u,"WARNING",this,true,u,u);}else{r.ln=135;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat(l.cat("Search for ",m.SEARCHTEXT.get())," found "),l.n.AsString(C0.get())),u,u,this,true,u,u);
}}r.ln=138;r.e();};cO.mthUHANDLESEARCHORCOMMAND=function(p0){var m=this.REF,r=l.mR(this,cO,"uHandleSearchorCommand",142);var P0=r.cPD("DETAILS");var P1=r.cP("HANDLED","PRIM_BOLN");P0=p0;r.ln=142;{r.ln=144;this.REF.AVFRAMEWORKMANAGER.mthAVRECORDTRACE(this,"uHandleSearchorCommand executed.",u);r.ln=148;if(l.s.eq(P0.getUUSEROBJECTTYPE(),"PEOPLE")){r.ln=152;if(l.n.ge(P0.getUSEARCHWORDSORCOMMANDS().getItemCount(),2)){r.ln=154;m.SEARCHTEXT.set(P0.getUSEARCHWORDSORCOMMANDS().get(2).get());r.ln=155;this.mthAVGOTOBUSYSTATE(l.cat(l.cat("Searching for \"",m.SEARCHTEXT.get()),"\""),false,u);
r.ln=157;this.REF.AVLOCALTIMERREQUEST.set("SEARCH");r.ln=158;this.REF.AVLOCALTIMER.setInterval(1);r.ln=160;this.REF.AVFRAMEWORKMANAGER.mthAVRECORDTRACE(this,l.cat("Searching for ",m.SEARCHTEXT.get()),u);}}}r.ln=166;return r.rV(P1.get());};function e3(sender,Ps){var r=l.eR(this,cO,"#ShowContact.Changed",171);r.ln=171;{r.ln=173;this.mthAVGOTOBUSYSTATE("Adjusting Contact Details",false,u);r.ln=174;this.REF.AVLOCALTIMERREQUEST.set("CONTACT");r.ln=175;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=177;r.e();
};function e4(sender,Ps){var r=l.eR(this,cO,"#ShowSalary.Changed",179);r.ln=179;{r.ln=181;this.mthAVGOTOBUSYSTATE("Adjusting Salary Details",false,u);r.ln=182;this.REF.AVLOCALTIMERREQUEST.set("SALARY");r.ln=183;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=185;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#ShowTravel.Changed",187);r.ln=187;{r.ln=189;this.mthAVGOTOBUSYSTATE("Adjusting Travel Details",false,u);r.ln=190;this.REF.AVLOCALTIMERREQUEST.set("TRAVEL");r.ln=191;this.REF.AVLOCALTIMER.setInterval(1);
}r.ln=193;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"DF_ELTX"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"DF_ELTX",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);
};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O","DF_EMCTLO","VF_UI049O","VF_UI036O"],rp:["PRIM_EVEF","PRIM_MD.CheckBox","PRIM_FLD"]});