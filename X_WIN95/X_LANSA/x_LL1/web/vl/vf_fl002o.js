﻿LANSA.addComponent({id:"VF_FL002O",ot:"rp",tp:"Reusable Part",de:"\\OC=User Administration filter",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"Search","FRA":"Rechercher","JPN":"検索"}[cL],m2={"ENG":"User Name","FRA":"Nom d'utilisateur","JPN":"ﾕｰｻﾞｰ ﾌﾟﾛﾌｧｲﾙ"}[cL],m3={"ENG":"Yes","FRA":"Oui","JPN":"はい"}[cL];var Fd={F1:{nm:"VF_ELUSRL",ft:"A",ln:32,dc:0,lb:{"ENG":"User profile","FRA":"Utilisateur","JPN":"User profile"}[cL],h1:{"ENG":"User","FRA":"Profil","JPN":"User"}[cL],
h2:{"ENG":"Profile","FRA":"Utilisateur","JPN":"Profile"}[cL],h3:"",de:{"ENG":"Long User","FRA":"Profil utilisateur","JPN":"User profile"}[cL],dv:"",ia:["FE"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],
h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F4:{nm:"VF_SY184_DISABLED",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F5:{nm:"VF_SY184_ADMINISTRATOR",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F6:{nm:"VF_SY184_NAME",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]
},F7:{nm:"VF_SY184_CAPTION",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F8:{nm:"VF_SY184_GUID",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{},PerformSelectionProcess:{},InitiateSelectionProcess:{}},co:function(){cO.aN.call(this);this.aF("VF_FL002O",Fd);var C0=this.cR("SEARCH_BUTTON","PRIM_PHBN");var C1=this.cF("SEARCHUSER",Fd.F1.VISUAL);var C2=this.cR("SELECTED_USERS","PRIM_ACOL");
var C3=this.cA("USERVERINTERFACE","VF_SY169O");C0.setButtonDefault(true);C0.setCaption(m1);C0.setParent(this);C0.setDisplayPosition(2);C0.setTabPosition(2);C0.setLeft(328);C0.setWidth(105);C0.setTop(7);C0.iC();C1.setParent(this);C1.setDisplayPosition(1);C1.setTabPosition(1);C1.setUsePicklist(false);C1.setWidth(305);C1.setCaption(m2);C1.setLabelType("CAPTION");C1.setLeft(8);C1.setTop(6);C1.setHeight(25);C1.setMarginLeft(130);C1.aD();C1.iC();C2.setCollects("VF_SY184O");C2.iC();if((C3!=null)&&(C3.iI()==false))
{C3.iC();}C0.aH("CLICK",this,e1);C1.aH("ENTER",this,e1);this.REF.AVLOCALTIMER.aH("TICK",this,e2);this.REF.UFRAMEWORK.ref.aH("USERDELETED",this,e3);this.REF.UFRAMEWORK.ref.aH("USERCREATEDORCHANGED",this,e4);C2.aLF({});this.setHeight(39);this.setWidth(993);}});var cA=cO.aN.prototype;function e1(sender,Ps){var r=l.eR(this,cO,"#Search_Button.Click #SearchUser.Enter",30);r.ln=30;{r.ln=33;this.REF.AVLOCALTIMERREQUEST.set("INITIATESELECTIONPROCESS");r.ln=34;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=36;
r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#AVLOCALTIMER.Tick",40);r.ln=40;{r.ln=42;this.REF.AVLOCALTIMER.setInterval(0);r.ln=44;{var v1=this.REF.AVLOCALTIMERREQUEST.get();if(r.ln=46,l.s.eq(v1,"INITIATESELECTIONPROCESS")){r.ln=47;this.mthINITIATESELECTIONPROCESS();}else if(r.ln=49,l.s.eq(v1,"PERFORMSELECTIONPROCESS")){r.ln=50;this.mthPERFORMSELECTIONPROCESS();}r.ln=52;}}r.ln=54;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",57);r.ln=57;{r.ln=60;cA.mthUINITIALIZE.call(this);
r.ln=63;this.setAVFILTERLOCATION("TOP");r.ln=64;this.setAVALLOWLOCATIONCHANGE(false);r.ln=67;m.SEARCHUSER.mthSETFOCUS();r.ln=70;if(l.b.Not(this.REF.UFRAMEWORK.ref.getUSINGFRAMEWORKAUTHORITY())){r.ln=72;l.WEB().mthALERT(l.add(l.add(l.cat(l.add(l.cat(l.add(l.cat(this.REF.USYSTEM.ref.getUMTXTVALUES("VF_FL002O_01")," "),this.REF.USYSTEM.ref.getUMTXTVALUES("VF_FL002O_02"))," "),this.REF.USYSTEM.ref.getUMTXTVALUES("VF_FL002O_03"))," "),this.REF.USYSTEM.ref.getUMTXTVALUES("VF_FL002O_04")),this.REF.USYSTEM.ref.getUMTXTVALUES("VF_FL002O_05")));
}else{r.ln=80;if(l.b.Not(this.REF.USYSTEM.ref.getFRAMEWORKPLATFORMA())){r.ln=82;l.abort(this.REF.USYSTEM.ref.getUMTXTVALUES("USR_NOT_ADMN"));}}}r.ln=87;r.e();};cO.mthPERFORMSELECTIONPROCESS=function(){var f=this.FLD.VF_FL002O,m=this.REF,r=l.mR(this,cO,"PerformSelectionProcess",90);var C0=r.cR("RETURNCCODE","PRIM_ALPH");var C1=r.cF("COUNTUSERSFOUND",Fd.F2.Dc);var C2=r.cR("DISABLED_TEXT","PRIM_DC","UnicodeString");var C3=r.cR("ADMINISTRATOR_TEXT","PRIM_DC","UnicodeString");C0.iC();C1.iC();C2.iC();C3.iC();
r.ln=90;{r.ln=97;m.USERVERINTERFACE.ref.mthZINT_FINDUSERS(m.SEARCHUSER,m.SELECTED_USERS,this.REF.AVFRAMEWORKMANAGER.mthGETMESSAGEASSIGNEDCOLLECTIONNUMBER(this,false),C0);r.ln=99;{var l1=m.SELECTED_USERS.selectList();while(l1.step()){r.ln=101;if(l.s.eq(f.F4.get(),"TRUE")){r.ln=102;C2.set(m3);}else{r.ln=104;C2.set("");}r.ln=107;if(l.s.eq(f.F5.get(),"TRUE")){r.ln=108;C3.set(m3);}else{r.ln=110;C3.set("");}r.ln=115;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F6.get(),f.F7.get(),f.F8.get(),u,u,u,u,u,u,u,u,u,false,false,u,u,u,u,u,u,C2.get(),C3.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);
r.ln=117;C1.set(l.add(C1.get(),1));r.ln=119;}l1.end();}r.ln=122;m.SELECTED_USERS.clearList();r.ln=125;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat(l.cat(l.add(l.cat(l.n.AsString(C1.get())," "),this.REF.USYSTEM.ref.getUMTXTVALUES("VF_FL002O_06")),"\""),m.SEARCHUSER.get()),"\""),u,u,this,true,u,u);r.ln=128;this.mthAVGOTOFREESTATE();}r.ln=130;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#UFRAMEWORK.UserDeleted",133);var P0=Ps.r("USERIDENTIFIER");r.ln=133;{r.ln=136;this.REF.AVLISTMANAGER.mthREMOVEFROMLIST(P0.get(),u,u,u,u,u,u,u,u,u,u);
}r.ln=138;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#UFRAMEWORK.UserCreatedorChanged",141);var P0=Ps.r("USERIDENTIFIER");var P1=Ps.r("USERCAPTION");var P2=Ps.r("ISADMINSTRATOR");var P3=Ps.r("ISDISABLED");var P4=Ps.r("USERNAME");var C0=r.cR("DISABLED_ASTEXT","PRIM_DC","UnicodeString");var C1=r.cR("ADMINISTRATOR_ASTEXT","PRIM_DC","UnicodeString");C0.iC();C1.iC();r.ln=141;{r.ln=146;if(l.tB(P3.get())){r.ln=147;C0.set(m3);}r.ln=150;if(l.tB(P2.get())){r.ln=151;C1.set(m3);}r.ln=154;this.REF.AVLISTMANAGER.mthADDTOLIST(P4.get(),P1.get(),P0.get(),u,u,u,u,u,u,u,u,u,false,false,u,u,u,u,u,u,C0.get(),C1.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);
}r.ln=156;r.e();};cO.mthINITIATESELECTIONPROCESS=function(){var r=l.mR(this,cO,"InitiateSelectionProcess",159);r.ln=159;{r.ln=162;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=165;this.mthAVGOTOBUSYSTATE(this.REF.USYSTEM.ref.getUMTXTVALUES("SEARCHING"),false,u);r.ln=168;this.REF.AVLOCALTIMERREQUEST.set("PERFORMSELECTIONPROCESS");r.ln=169;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=171;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELUSRL"});
Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"VF_ELUSRL",cn:"Visual"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O","VF_SY169O"],rp:["PRIM_PHBN","PRIM_EVEF","PRIM_ACOL","PRIM_FLD"],
dc:["VF_SY184O"],dp:["PRIM_ALPH","PRIM_DC.UnicodeString"]});