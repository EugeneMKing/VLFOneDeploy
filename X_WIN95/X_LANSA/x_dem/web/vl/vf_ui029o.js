﻿LANSA.addComponent({id:"VF_UI029O",ot:"rp",tp:"Reusable Part",de:"\\OC=Message Display VLF-ONE",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F3:{nm:"VF_ELXU01",ft:"N",ln:4096,dc:0,lb:"Field Value",h1:"Field Value",h2:"",h3:"",de:{"ENG":"Unicode Field Value","FRA":"Field Value","JPN":"Field Value"}[cL],dv:"",ia:["FE"]},F4:{nm:"VF_ELXU02",ft:"N",ln:4096,dc:0,lb:"Field Value",h1:"Field Value",h2:"",h3:"",de:{"ENG":"Unicode Field Value","FRA":"Field Value","JPN":"Field Value"}[cL],dv:"",ia:["FE"]},F5:{
nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{CollectionNumber:{da:"r"},CurrentlyinDarkContainer:{da:"na"},CurrentMessageCount:{da:"na"}},mt:
{zInt_Initialize:{ps:{"ShowTopBorder":{pt:"i"},"UseCollectionNumber":{pt:"i"},"MayBeInDarkContainer":{pt:"i"}}},zInt_Terminate:{},zInt_ShowCurrentMessage:{},zInt_MessageStyle:{ps:{"Type":{pt:"i"},"ForDarkBackground":{pt:"i"}}},zInt_HandleRequestShowAllMessages:{ps:{"MinimumtoShow":{pt:"i"}}},zInt_HandleRequestIssueTextMessage:{},zInt_HandleRequestClearAllMessages:{}},ev:{MessagesCleared:{}},co:function(){cO.aN.call(this);var f=this.aF("VF_UI029O",Fd);var C0=this.cR("MAINLAYOUTMANAGER","PRIM_ATLM");
var C1=this.cA("USYSTEM","VF_SY001O");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM6","PRIM_ATLI");var C4=this.cR("CURRENTMESSAGEPANEL","PRIM_PANL");var C5=this.cR("ATTACHMESSAGEPANEL","PRIM_ATLI");var C6=this.cR("ATTACHIMAGEDOWN","PRIM_ATLI");var C7=this.cR("ATTACHIMAGEUP","PRIM_ATLI");var C8=this.cR("ATTACHCLEAR","PRIM_ATLI");var C9=this.cR("CURRENTMESSAGETEXT","PRIM_LABL");var C10=this.cR("MESSAGESPOPUP","PRIM_PPNL");var C11=this.cR("NOBORDERS","PRIM_VS","Style");var C12=this.cR("POPOVERPANELATTACHMENTMANAGER","PRIM_ATLM");
var C13=this.cR("POPOVERPANELATTACHMENTMANAGERITEM","PRIM_ATLI");var C14=this.cR("MESSAGESPOPUPCONTENT","PRIM_PANL");var C15=this.cR("POPUPLAYOUTMANAGER","PRIM_ATLM");var C16=this.cR("ATTACHITEM3","PRIM_ATLI");var C17=this.cR("LIST_MESSAGES2","PRIM_LIST");var C18=this.cR("COLUMN1","PRIM_LIST","String");var C19=this.cR("HIDDENCOLUMN","PRIM_LIST","String");var C20=this.cR("IMAGE_UP","VF_UI005O");var C21=this.cR("IMAGE_CLEAR","VF_UI005O");var C22=this.cR("IMAGE_DOWN","VF_UI005O");this.cD("CURRENTMESSAGE");
var C24=this.cF("USEMATERIALMARGIN",Fd.F1.Dc);var C25=this.cR("BORDERTOP","PRIM_VS","Style");this.cD("MESSAGES");var C27=this.cF("COLLECTIONNUMBER",Fd.F1.Dc);var C28=this.cR("AUTOCLEARTIMER","PRIM_TIMR");var C29=this.cR("USEMAYBEINDARKCONTAINER","PRIM_BOLN");var C30=this.cR("MATERIALDESIGNRESIZETIMER","PRIM_TIMR");this.cD("PARENTPANEL");C0.iC();if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setManage(C9);C3.setParent(C2);C3.setAttachment("CENTER");C3.setMarginLeft(4);C3.iC();C4.setParent(this);
C4.setDisplayPosition(4);C4.setTabPosition(4);C4.setHeight(24);C4.setLeft(74);C4.setTop(0);C4.setWidth(727);C4.setLayoutManager(C2);C4.iC();C5.setManage(C4);C5.setParent(C0);C5.setAttachment("CENTER");C5.iC();C6.setManage(C22);C6.setParent(C0);C6.setAttachment("LEFT");C6.setMarginTop(4);C6.setMarginRight(2);C6.iC();C7.setManage(C20);C7.setParent(C0);C7.setAttachment("LEFT");C7.setMarginTop(4);C7.setMarginRight(2);C7.iC();C8.setParent(C0);C8.setAttachment("LEFT");C8.setManage(C21);C8.setMarginTop(4);
C8.iC();C9.setTabStop(false);C9.setDisplayPosition(1);C9.setParent(C4);C9.setTabPosition(1);C9.setHeight(24);C9.setTop(0);C9.setWidth(723);C9.setVerticalAlignment("CENTER");C9.setLeft(4);C9.iC();C10.setStyle(C11);C10.setLayoutManager(C12);C10.iC();C11.setBorderBottom(0);C11.setBorderLeft(0);C11.setBorderTop(0);C11.setBorderRight(0);C11.setEffect(null);C11.iC();C12.iC();C13.setParent(C12);C13.setAttachment("CENTER");C13.setManage(C14);C13.iC();C14.setVisible(false);C14.setDisplayPosition(7);C14.setHeight(200);
C14.setWidth(400);C14.setLayoutManager(C0);C14.setParent(C10);C14.setTabPosition(1);C14.iC();C15.iC();C16.setManage(C17);C16.setParent(C0);C16.setAttachment("CENTER");C16.iC();C17.setDisplayPosition(1);C17.setLeft(0);C17.setParent(C14);C17.setTabPosition(6);C17.setTop(0);C17.setWidth(162);C17.setColumnHeaderHeight(0);C17.setHeight(25);C17.setColumnLines(false);C17.setRowLines(false);C17.setRowHeight(20);C17.iC();C18.setDisplayPosition(1);C18.setParent(C17);C18.setSource(f.F3);C18.setColumnUnits("PROPORTION");
C18.setColumnWidth(100);C18.iC();C19.setDisplayPosition(1);C19.setParent(C17);C19.setSource(f.F4);C19.setColumnVisible(false);C19.iC();C20.setLeft(47);C20.setParent(this);C20.setTabStop(false);C20.setTop(4);C20.setWidth(25);C20.setHeight(20);C20.setDisplayPosition(3);C20.setTabPosition(2);C20.iC();C21.setParent(this);C21.setTabStop(false);C21.setWidth(25);C21.setHeight(20);C21.setTop(4);C21.iC();C22.setDisplayPosition(2);C22.setLeft(25);C22.setParent(this);C22.setTabPosition(3);C22.setTabStop(false);
C22.setTop(4);C22.setWidth(20);C22.setHeight(20);C22.iC();C24.aD();C24.iC();C25.setBorderTop(1);C25.iC();C27.aD();C27.iC();C28.setInterval(0);C28.iC();C29.iC();C30.setInterval(0);C30.iC();C1.aH("CURRENTTHEMEALTERED",this,e1);C1.aH("REQUESTISSUETEXTMESSAGE",this,e6);C1.aH("REQUESTCLEARALLMESSAGES",this,e7);C1.aH("REQUESTSHOWALLMESSAGES",this,e8);C9.aH("CLICK",this,e9);C17.aH("ITEMMOUSEENTER",this,e4);C20.aH("CLICK",this,e12);C21.aH("WASCLICKED",this,e10);C22.aH("WASCLICKED",this,e11);C28.aH("TICK",this,e5);
C30.aH("TICK",this,e3);this.setTabStop(false);this.setWidth(801);this.setHeight(24);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C0);this.setLeft(0);this.setTop(0);this.aH("CLICK",this,e9);}});cO.mthGET_CURRENTLYINDARKCONTAINER=function(){var m=this.REF,r=l.pR(this,cO,"Get_CurrentlyinDarkContainer",76);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=76;{r.ln=79;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=80;P0.set(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_ISDARKSTYLE());
}else{r.ln=82;P0.set(l.and(m.USEMAYBEINDARKCONTAINER.get(),m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME()));}}r.ln=87;return r.rV(P0.get());};cO.mthGET_CURRENTMESSAGECOUNT=function(){var m=this.REF,r=l.pR(this,cO,"Get_CurrentMessageCount",91);var P0=r.cPF("RESULT",Fd.F1.Dc);r.ln=91;{r.ln=94;if((m.MESSAGES!=null)){r.ln=95;P0.set(m.MESSAGES.getItemCount());}}r.ln=98;return r.rV(P0.get());};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.CurrentThemeAltered",102);var C0=r.cR("REVERSELIGHTANDDARK","PRIM_BOLN");
C0.iC();r.ln=102;{r.ln=106;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=108;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_STYLE());r.ln=110;m.MESSAGESPOPUPCONTENT.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_STYLE());r.ln=112;m.LIST_MESSAGES2.setRowHeight(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_HEIGHT());}else{r.ln=116;C0.set(l.and(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME(),m.USEMAYBEINDARKCONTAINER.get()));r.ln=118;m.BORDERTOP.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());
r.ln=120;m.IMAGE_UP.setUSEREVERSELIGHTANDDARK(C0.get());m.IMAGE_DOWN.setUSEREVERSELIGHTANDDARK(C0.get());m.IMAGE_CLEAR.setUSEREVERSELIGHTANDDARK(C0.get());r.ln=122;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBASEFORMBACKGROUNDANDFONT());}}r.ln=126;r.e();};cO.mthZINT_INITIALIZE=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"zInt_Initialize",131);var P0=r.cP("SHOWTOPBORDER","PRIM_BOLN");var P1=r.cPF("USECOLLECTIONNUMBER",Fd.F1.Dc);var P2=r.cP("MAYBEINDARKCONTAINER","PRIM_BOLN");P0.set(p0);P1.set(p1);
P2.set(p2);var C0=r.cR("REVERSELIGHTANDDARK","PRIM_BOLN");var C1=r.cR("ICONSIZE","PRIM_ALPH");var C2=r.cF("MARGINTOP",Fd.F1.Dc);var C3=r.cF("LOCALTIMER",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();C3.iC();r.ln=131;{r.ln=142;m.USYSTEM.ref.mthZINT_STARTTIMING(C3);r.ln=144;m.USEMATERIALMARGIN.set(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_MARGIN());r.ln=146;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=148;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_STYLE());r.ln=149;this.srPARENTPANEL(l.cast(this.getParent(),"PRIM_PANL"));
r.ln=150;m.USEMAYBEINDARKCONTAINER.set(true);r.ln=152;m.MESSAGESPOPUPCONTENT.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_STYLE());r.ln=154;m.LIST_MESSAGES2.setRowHeight(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_HEIGHT());}else{r.ln=158;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBASEFORMBACKGROUNDANDFONT());r.ln=159;m.USEMAYBEINDARKCONTAINER.set(P2.get());}r.ln=163;C0.set(this.getCURRENTLYINDARKCONTAINER());r.ln=166;m.COLLECTIONNUMBER.set(P1.get());r.ln=169;this.srMESSAGES(m.USYSTEM.ref.getMESSAGECOLLECTOR(m.COLLECTIONNUMBER.get()).getMESSAGES());
r.ln=171;m.BORDERTOP.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=173;if(l.tB(P0.get())){r.ln=174;this.getStyles().mthADD(m.BORDERTOP);}r.ln=179;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=180;C1.set(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_IMAGESIZE());}else{r.ln=182;C1.set("SMALL");}r.ln=185;m.USYSTEM.ref.mthZINT_ENDTIMING(C3,"Stage 1 completed",false,this);r.ln=187;m.IMAGE_UP.mthZINT_INTIALIZEIMAGE("SYM=UP_ARROW",u,"",C1.get(),C0.get(),u,u,u,u);r.ln=189;
m.IMAGE_DOWN.mthZINT_INTIALIZEIMAGE("SYM=DOWN_ARROW",u,"",C1.get(),C0.get(),u,u,u,u);r.ln=191;m.IMAGE_CLEAR.mthZINT_INTIALIZEIMAGE("SYM=CLOSE",u,"",C1.get(),C0.get(),u,u,u,u);r.ln=193;m.USYSTEM.ref.mthZINT_ENDTIMING(C3,"Stage 2 completed",false,this);r.ln=195;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=197;this.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_HEIGHT());r.ln=199;C2.set(l.div(l.sub(this.getHeight(),m.IMAGE_UP.getIMAGEDIMENSION()),2));r.ln=201;m.ATTACHIMAGEDOWN.setMarginTop(C2.get());
m.ATTACHIMAGEDOWN.setAttachment("RIGHT");m.ATTACHIMAGEDOWN.setMarginLeft(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_IMAGEPADDING());m.ATTACHCLEAR.setMarginTop(C2.get());m.ATTACHCLEAR.setAttachment("RIGHT");m.ATTACHCLEAR.setMarginLeft(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_IMAGEPADDING());m.ATTACHIMAGEUP.setMarginTop(C2.get());m.ATTACHIMAGEUP.setAttachment("RIGHT");m.ATTACHIMAGEUP.setMarginLeft(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_IMAGEPADDING());r.ln=203;m.IMAGE_CLEAR.setDisplayPosition(99);
r.ln=205;m.ATTACHCLEAR.setMarginRight(l.div(m.USYSTEM.ref.getCURRENTTHEME().getMATERIALMESSAGE_IMAGEPADDING(),2));}r.ln=209;if(l.n.ge(this.getCURRENTMESSAGECOUNT(),1)){r.ln=210;this.srCURRENTMESSAGE(m.MESSAGES.get(1));}else{r.ln=212;this.srCURRENTMESSAGE(null);}r.ln=215;this.mthZINT_SHOWCURRENTMESSAGE();r.ln=217;m.USYSTEM.ref.mthZINT_ENDTIMING(C3,"Stage 3 completed",false,this);}r.ln=219;r.e();};cO.mthZINT_TERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Terminate",223);r.ln=223;{r.ln=225;
this.srPARENTPANEL(null);r.ln=227;m.AUTOCLEARTIMER.setInterval(0);r.ln=229;m.MATERIALDESIGNRESIZETIMER.setInterval(0);r.ln=231;this.srMESSAGES(null);r.ln=233;if(l.n.gt(m.COLLECTIONNUMBER.get(),1)){r.ln=234;m.USYSTEM.ref.mthZINT_DESTROYMESSAGECOLLECTOR(m.COLLECTIONNUMBER.get());}r.ln=237;this.srCURRENTMESSAGE(null);}r.ln=239;r.e();};cO.mthZINT_SHOWCURRENTMESSAGE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_ShowCurrentMessage",242);var C0=r.cR("MORETHANONEMESSAGE","PRIM_BOLN");C0.iC();r.ln=242;{r.ln=246;
if((m.CURRENTMESSAGE==null)){r.ln=248;m.CURRENTMESSAGETEXT.setCaption("");m.CURRENTMESSAGETEXT.setHint("");r.ln=250;this.setVisible(false);}else{r.ln=254;if(m.CURRENTMESSAGE.getHASSECONDLEVELTEXT()){r.ln=255;m.CURRENTMESSAGETEXT.setCaption(m.CURRENTMESSAGE.getFIRSTLEVELTEXT());m.CURRENTMESSAGETEXT.setHint(m.USYSTEM.ref.mthAVPREPAREHINT(m.CURRENTMESSAGE.getSECONDLEVELTEXT()));}else{r.ln=257;m.CURRENTMESSAGETEXT.setCaption(m.CURRENTMESSAGE.getFIRSTLEVELTEXT());m.CURRENTMESSAGETEXT.setHint("");}r.ln=260;
m.CURRENTMESSAGETEXT.setStyle(cO.mthZINT_MESSAGESTYLE.call(this,m.CURRENTMESSAGE.getSEVERITY(),this.getCURRENTLYINDARKCONTAINER()));m.CURRENTMESSAGEPANEL.setStyle(cO.mthZINT_MESSAGESTYLE.call(this,m.CURRENTMESSAGE.getSEVERITY(),this.getCURRENTLYINDARKCONTAINER()));r.ln=262;m.IMAGE_CLEAR.setVisible(true);r.ln=264;C0.set(l.n.gt(this.getCURRENTMESSAGECOUNT(),1));r.ln=266;m.IMAGE_UP.setVisible(C0.get());m.IMAGE_UP.setEnabled(true);m.IMAGE_UP.setOpacity(100);m.IMAGE_DOWN.setVisible(C0.get());m.IMAGE_DOWN.setEnabled(true);
m.IMAGE_DOWN.setOpacity(100);r.ln=268;{var v1=m.CURRENTMESSAGE.getCOLLECTIONINDEX();if(r.ln=270,l.n.eq(v1,1)){r.ln=271;m.IMAGE_DOWN.setEnabled(false);r.ln=272;m.IMAGE_UP.setEnabled(C0.get());}else if(r.ln=274,l.n.eq(v1,this.getCURRENTMESSAGECOUNT())){r.ln=275;m.IMAGE_UP.setEnabled(false);r.ln=276;m.IMAGE_DOWN.setEnabled(C0.get());}r.ln=278;}r.ln=280;if(l.b.Not(m.IMAGE_DOWN.getEnabled())){r.ln=281;m.IMAGE_DOWN.setOpacity(20);}r.ln=284;if(l.b.Not(m.IMAGE_UP.getEnabled())){r.ln=285;m.IMAGE_UP.setOpacity(20);
}r.ln=288;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=290;m.MATERIALDESIGNRESIZETIMER.setInterval(30);}else{r.ln=294;this.setVisible(true);}}}r.ln=300;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ParentPanel.SizeChanged",303);r.ln=303;{r.ln=305;if((m.USYSTEM.ref.getUIMATERIALDESIGN()&&this.getVisible())){r.ln=307;m.MATERIALDESIGNRESIZETIMER.setInterval(10);}}r.ln=311;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MaterialDesignResizeTimer.Tick",315);r.ln=315;{r.ln=318;
m.MATERIALDESIGNRESIZETIMER.setInterval(0);r.ln=320;this.setLeft(m.USEMATERIALMARGIN.get());this.setTop(l.sub(l.sub(m.PARENTPANEL.getHeight(),this.getHeight()),m.USEMATERIALMARGIN.get()));this.setDisplayPosition(1);this.setVisible(true);this.setWidth(l.sub(m.PARENTPANEL.getWidth(),l.mul(2,m.USEMATERIALMARGIN.get())));}r.ln=322;r.e();};cO.mthZINT_MESSAGESTYLE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"zInt_MessageStyle",326);var P0=r.cPF("TYPE",Fd.F2.Dc);var P1=r.cP("FORDARKBACKGROUND","PRIM_BOLN");
var P2=r.cPD("RETURNSTYLE");P0.set(p0);P1.set(p1);r.ln=326;{r.ln=331;{var v1=l.s.UpperCase(l.s.Substring(P0.get(),1,1));if(r.ln=333,l.s.eq(v1,"W")){r.ln=334;if(l.tB(P1.get())){r.ln=335;P2=r.sR("P2",m.USYSTEM.ref.getCURRENTTHEME().getWARNMESSAGESTYLE_DARKBACKGROUND());}else{r.ln=337;P2=r.sR("P2",m.USYSTEM.ref.getCURRENTTHEME().getWARNMESSAGESTYLE_LIGHTBACKGROUND());}}else if(r.ln=340,l.s.eq(v1,"F")){r.ln=341;if(l.tB(P1.get())){r.ln=342;P2=r.sR("P2",m.USYSTEM.ref.getCURRENTTHEME().getFATALMESSAGESTYLE_DARKBACKGROUND());
}else{r.ln=344;P2=r.sR("P2",m.USYSTEM.ref.getCURRENTTHEME().getFATALMESSAGESTYLE_LIGHTBACKGROUND());}}else{r.ln=348;if(l.tB(P1.get())){r.ln=349;P2=r.sR("P2",m.USYSTEM.ref.getCURRENTTHEME().getINFOMESSAGESTYLE_DARKBACKGROUND());}else{r.ln=351;P2=r.sR("P2",m.USYSTEM.ref.getCURRENTTHEME().getINFOMESSAGESTYLE_LIGHTBACKGROUND());}}r.ln=354;}}r.ln=356;return r.rR(P2);};function e4(sender,Ps){var f=this.FLD.VF_UI029O,m=this.REF,r=l.eR(this,cO,"#List_Messages2.ItemMouseEnter",359);var P0=Ps.r("ITEM");r.ln=359;
{r.ln=360;f.F5.set(lIO=m.LIST_MESSAGES2.getEntry(P0.getEntry()));r.ln=361;m.LIST_MESSAGES2.setHint(m.USYSTEM.ref.mthAVPREPAREHINT(f.F4.get()));}r.ln=362;r.e();};cO.mthZINT_HANDLEREQUESTSHOWALLMESSAGES=function(p0){var f=this.FLD.VF_UI029O,m=this.REF,r=l.mR(this,cO,"zInt_HandleRequestShowAllMessages",365);var P0=r.cPF("MINIMUMTOSHOW",Fd.F1.Dc);P0.set(p0);var C0=r.cF("REQUIREDHEIGHT",Fd.F1.Dc);var C1=r.cF("AVAILABLEHEIGHT",Fd.F1.Dc);var C2=r.cF("LINECOUNT",Fd.F1.Dc);var C3=r.cF("USETOP",Fd.F1.Dc);var C4=r.cR("USINGDARKCONTAINER","PRIM_BOLN");
C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();r.ln=365;{r.ln=374;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=375;C4.set(this.getCURRENTLYINDARKCONTAINER());}else{r.ln=377;C4.set(false);}r.ln=380;m.LIST_MESSAGES2.clearList();r.ln=382;if((m.MESSAGES!=null)){r.ln=384;{var l1=m.MESSAGES.cI();while(l1.step()){var MESSAGE=r.sR("MESSAGE",l1.item());r.ln=385;C2.set(l.add(C2.get(),1));r.ln=386;f.F3.set(MESSAGE.getFIRSTLEVELTEXT());r.ln=387;if(MESSAGE.getHASSECONDLEVELTEXT()){r.ln=388;f.F4.set(MESSAGE.getSECONDLEVELTEXT());
}else{r.ln=390;f.F4.set(f.F3.get());}r.ln=393;m.LIST_MESSAGES2.addEntry();r.ln=395;m.LIST_MESSAGES2.getCurrentItem().setStyle(cO.mthZINT_MESSAGESTYLE.call(this,MESSAGE.getSEVERITY(),C4.get()));r.ln=397;}l1.end();r.dR("MESSAGE");}}r.ln=402;if(l.n.lt(C2.get(),P0.get())){r.ln=403;m.LIST_MESSAGES2.clearList();r.e();return;}r.ln=408;if(l.n.eq(C2.get(),0)){r.ln=409;C2.set(l.add(C2.get(),1));r.ln=410;f.F3.set(m.USYSTEM.ref.getUMTXTVALUES("NO_MESSAGES"));r.ln=411;f.F4.set("");r.ln=412;m.LIST_MESSAGES2.addEntry();
r.ln=413;m.LIST_MESSAGES2.getCurrentItem().setStyle(cO.mthZINT_MESSAGESTYLE.call(this,"I",C4.get()));}r.ln=417;if(l.n.le(C2.get(),10)){r.ln=418;C0.set(l.mul(C2.get(),l.add(m.LIST_MESSAGES2.getRowHeight(),4)));}else{r.ln=420;C0.set(l.mul(11,l.add(m.LIST_MESSAGES2.getRowHeight(),4)));}r.ln=423;m.MESSAGESPOPUPCONTENT.setVisible(true);r.ln=425;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=427;C1.set(l.sub(m.PARENTPANEL.getHeight(),l.mul(2,m.USEMATERIALMARGIN.get())));r.ln=429;if(l.n.gt(C0.get(),C1.get()))
{r.ln=430;C0.set(C1.get());}r.ln=433;C3.set(l.sub(l.sub(m.PARENTPANEL.getHeight(),C0.get()),m.USEMATERIALMARGIN.get()));r.ln=435;C3.set(l.sub(C3.get(),l.add(m.CURRENTMESSAGEPANEL.getHeight(),m.USEMATERIALMARGIN.get())));r.ln=437;m.MESSAGESPOPUP.setVisible(true);m.MESSAGESPOPUP.setWidth(l.sub(m.PARENTPANEL.getWidth(),l.mul(2,m.USEMATERIALMARGIN.get())));m.MESSAGESPOPUP.setHeight(C0.get());r.ln=439;m.MESSAGESPOPUPCONTENT.setTop(0);m.MESSAGESPOPUPCONTENT.setLeft(0);m.MESSAGESPOPUPCONTENT.setWidth(m.MESSAGESPOPUP.getWidth());
m.MESSAGESPOPUPCONTENT.setHeight(m.MESSAGESPOPUP.getHeight());r.ln=441;m.MESSAGESPOPUP.mthSHOWPOPUP(l.add(m.PARENTPANEL.getScreenLeft(),m.USEMATERIALMARGIN.get()),l.add(m.PARENTPANEL.getScreenTop(),C3.get()),u,"SLIDEINBOTTOM",m.PARENTPANEL);}else{r.ln=445;m.MESSAGESPOPUPCONTENT.setWidth(m.USYSTEM.ref.getCURRENTTHEME().getMESSAGEPOPUPWIDTH());r.ln=446;m.MESSAGESPOPUPCONTENT.setHeight(C0.get());r.ln=447;m.MESSAGESPOPUP.setHeight(C0.get());r.ln=448;m.MESSAGESPOPUP.setWidth(m.USYSTEM.ref.getCURRENTTHEME().getMESSAGEPOPUPWIDTH());
r.ln=449;m.MESSAGESPOPUPCONTENT.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBASEPANELBODYSTYLE());r.ln=450;m.MESSAGESPOPUP.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBASEPANELBODYSTYLE());r.ln=452;m.USYSTEM.ref.mthZINT_APPLYAPPROPRIATEEFFECTS(m.MESSAGESPOPUP);r.ln=454;m.MESSAGESPOPUP.mthSHOWPOPUP(u,u,u,u,u);}}r.ln=460;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AutoClearTimer.Tick",463);r.ln=463;{r.ln=465;m.AUTOCLEARTIMER.setInterval(0);r.ln=467;m.USYSTEM.ref.mthZINT_CLEARALLMESSAGES(m.COLLECTIONNUMBER.get(),true,u);
}r.ln=470;r.e();};cO.mthZINT_HANDLEREQUESTISSUETEXTMESSAGE=function(){var m=this.REF,r=l.mR(this,cO,"zInt_HandleRequestIssueTextMessage",473);r.ln=473;{r.ln=475;if((m.MESSAGES!=null)){r.ln=477;this.srCURRENTMESSAGE(m.MESSAGES.get(this.getCURRENTMESSAGECOUNT()));r.ln=479;if(l.b.eq(m.CURRENTMESSAGE.getAUTOCLEAR(),true)){r.ln=481;m.AUTOCLEARTIMER.setInterval(m.USYSTEM.ref.getCURRENTTHEME().getMESSAGEAUTOCLEARINTERVAL());}else{r.ln=485;if(l.n.ne(m.AUTOCLEARTIMER.getInterval(),0)){r.ln=486;m.AUTOCLEARTIMER.setInterval(0);
r.ln=487;this.mthZINT_HANDLEREQUESTCLEARALLMESSAGES();}}r.ln=493;this.mthZINT_SHOWCURRENTMESSAGE();}}r.ln=497;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestIssueTextMessage",500);var P0=Ps.r("COLLECTIONNUMBER");r.ln=500;{r.ln=502;if(l.n.eq(P0.get(),m.COLLECTIONNUMBER.get())){r.ln=504;this.mthZINT_HANDLEREQUESTISSUETEXTMESSAGE();}}r.ln=507;r.e();};cO.mthZINT_HANDLEREQUESTCLEARALLMESSAGES=function(){var m=this.REF,r=l.mR(this,cO,"zInt_HandleRequestClearAllMessages",510);
r.ln=510;{r.ln=512;if(m.MESSAGESPOPUP.getIsOpen()){r.ln=513;m.MESSAGESPOPUP.mthCLOSEPOPUP();}r.ln=516;this.srCURRENTMESSAGE(null);r.ln=518;this.mthZINT_SHOWCURRENTMESSAGE();r.ln=520;this.fE("MESSAGESCLEARED");}r.ln=522;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestClearAllMessages",525);var P0=Ps.r("COLLECTIONNUMBER");r.ln=525;{r.ln=527;if(l.n.eq(P0.get(),m.COLLECTIONNUMBER.get())){r.ln=529;this.mthZINT_HANDLEREQUESTCLEARALLMESSAGES();}}r.ln=534;r.e();};function e8(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#USystem.RequestShowAllMessages",537);var P0=Ps.r("COLLECTIONNUMBER");r.ln=537;{r.ln=539;if(l.n.eq(P0.get(),m.COLLECTIONNUMBER.get())){r.ln=540;this.mthZINT_HANDLEREQUESTSHOWALLMESSAGES(0);}}r.ln=543;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentMessageText.Click #COM_OWNER.Click",547);var P0=Ps.r("HANDLED");r.ln=547;{r.ln=549;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=550;this.mthZINT_HANDLEREQUESTSHOWALLMESSAGES(2);}else{r.ln=552;this.mthZINT_HANDLEREQUESTSHOWALLMESSAGES(1);
}r.ln=555;P0.set(true);}r.ln=557;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Image_Clear.WasClicked",561);r.ln=561;{r.ln=563;m.USYSTEM.ref.mthZINT_CLEARALLMESSAGES(m.COLLECTIONNUMBER.get(),true,u);}r.ln=565;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Image_Down.WasClicked",569);var C0=r.cF("INDEX",Fd.F1.Dc);C0.iC();r.ln=569;{r.ln=573;if(((m.MESSAGES!=null)&&(m.CURRENTMESSAGE!=null))){r.ln=575;C0.set(l.sub(m.CURRENTMESSAGE.getCOLLECTIONINDEX(),1));r.ln=577;if(l.and(l.n.ge(C0.get(),1),l.n.le(C0.get(),this.getCURRENTMESSAGECOUNT())))
{r.ln=578;this.srCURRENTMESSAGE(m.MESSAGES.get(C0.get()));r.ln=579;this.mthZINT_SHOWCURRENTMESSAGE();}}}r.ln=584;r.e();};function e12(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Image_Up.Click",588);var P0=Ps.r("HANDLED");var C0=r.cF("INDEX",Fd.F1.Dc);C0.iC();r.ln=588;{r.ln=592;if(((m.MESSAGES!=null)&&(m.CURRENTMESSAGE!=null))){r.ln=594;C0.set(l.add(m.CURRENTMESSAGE.getCOLLECTIONINDEX(),1));r.ln=596;if(l.and(l.n.ge(C0.get(),1),l.n.le(C0.get(),this.getCURRENTMESSAGECOUNT()))){r.ln=597;this.srCURRENTMESSAGE(m.MESSAGES.get(C0.get()));
r.ln=598;this.mthZINT_SHOWCURRENTMESSAGE();}}r.ln=603;P0.set(true);}r.ln=605;r.e();};cO.getCOLLECTIONNUMBER=function(){return this.REF.COLLECTIONNUMBER.get();};cO.getCURRENTLYINDARKCONTAINER=function(){return this.mthGET_CURRENTLYINDARKCONTAINER();};cO.getCURRENTMESSAGECOUNT=function(){return this.mthGET_CURRENTMESSAGECOUNT();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});
}cO.srCURRENTMESSAGE=function(rn){this.sR("CURRENTMESSAGE",rn);};cO.srMESSAGES=function(rn){this.sR("MESSAGES",rn);if(this.REF.MESSAGES!=null){this.REF.MESSAGES.setCollects("VF_SY172O");}};cO.srPARENTPANEL=function(rn){if(this.REF.PARENTPANEL!=null){this.REF.PARENTPANEL.rH("SIZECHANGED",this,e2);}this.sR("PARENTPANEL",rn);if(this.REF.PARENTPANEL!=null){this.REF.PARENTPANEL.aH("SIZECHANGED",this,e2);}};},{rc:["VF_SY001O","VF_UI005O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_PPNL","PRIM_VS.Style","PRIM_LIST","PRIM_LIST.String","PRIM_FLD","PRIM_TIMR","PRIM_BOLN","PRIM_HINT"],
dc:["VF_SY172O"],dp:["PRIM_ACOL","PRIM_PANL","PRIM_BOLN","PRIM_ALPH"]});