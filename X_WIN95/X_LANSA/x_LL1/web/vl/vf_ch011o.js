﻿LANSA.addComponent({id:"VF_CH011O",ot:"rp",tp:"Reusable Part",de:"\\OC= User Details",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"User Name","FRA":"Nom d'utilisateur","JPN":"ﾕｰｻﾞｰ ﾌﾟﾛﾌｧｲﾙ"}[cL],m2={"ENG":"Email Address","FRA":"Adresse email :","JPN":"e-mail ｱﾄﾞﾚｽ："}[cL],m3={"ENG":"Temp Directory (PC)","FRA":"Répertoire temporaire du PC :","JPN":"PCの一時ﾃﾞｨﾚｸﾄﾘ："}[cL],m4={"ENG":"Save","FRA":"Enregistrer","JPN":"保存"}[cL],m5={"ENG":"Log on if inactive for","FRA":"Reconnecter si inactif pour","JPN":"非アクティブ状態が続けばログオン"}[cL],
m6={"ENG":"Log off if inactive for","FRA":"Déconnexion si inactif pour","JPN":"ログオフする非アクティブ時間:"}[cL],m7={"ENG":"Inactivity Timeout Settings (minutes)","FRA":"Délai d'inactivité (minutes)","JPN":"非アクティブ タイムアウト (分)"}[cL],m8={"ENG":"Administrative User","FRA":"Utilisateur administration :","JPN":"管理ﾕｰｻﾞｰ"}[cL],m9={"ENG":"Disabled","FRA":"Désactivé","JPN":"無効"}[cL],m10={"ENG":"User Groups","FRA":"Groupes d'utilisateurs","JPN":"ユーザー グループ"}[cL];var Fd={F1:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],
h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]},F2:{nm:"VF_ELCA_1",an:"VF_ELCAPNU",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC","ASQN"],oa:["ASQN"]},F3:{nm:"VF_ELUSRL",ft:"A",ln:32,dc:0,lb:{"ENG":"User profile","FRA":"Utilisateur","JPN":"User profile"}[cL],h1:{"ENG":"User","FRA":"Profil","JPN":"User"}[cL],h2:{"ENG":"Profile","FRA":"Utilisateur","JPN":"Profile"}[cL],
h3:"",de:{"ENG":"Long User","FRA":"Profil utilisateur","JPN":"User profile"}[cL],dv:"",ia:["FE"]},F4:{nm:"VF_ELSVAV",ft:"A",ln:256,dc:0,ks:"O",lb:"Alpha Value",h1:"Alpha",h2:"Value",h3:"",de:"Alpha Value",dv:"",ia:["FE","LC"]},F5:{nm:"PROPERTYTYPE",ft:"A",ln:1,dc:0,lb:"Property Type",h1:"Property",h2:"Type",h3:"",de:"Property Type",dv:"",ia:["FE"]},F6:{nm:"PROPERTYNAME",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F7:{nm:"PROPERTYLANGUAGE",ft:"A",ln:4,dc:0,lb:"Property Langua",
h1:"Property",h2:"Language",h3:"",de:"Property Language",dv:l.eSV("*LANGUAGE"),ia:["FE"]},F8:{nm:"PROPERTYINSTANCE",ft:"P",ln:7,dc:0,ec:"K",lb:"Property Instan",h1:"Property",h2:"Instance",h3:"",de:"Property Instance",dv:0,ia:["RB","FE"]},F9:{nm:"PROPERTYVALUE",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F10:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F11:{nm:"VF_ELPTYN",ft:"A",
ln:32,dc:0,lb:"Property Name",h1:"Property",h2:"Name",h3:"",de:"Property Name",dv:"",ia:["FE"]},F12:{nm:"VF_ELPUVA",ft:"NV",ln:4096,dc:0,lb:"Unicode propert",h1:"Unicode",h2:"property",h3:"Value",de:"Unicode property Value",dv:"",ia:["FE"]},F13:{nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F14:{nm:"VF_ELPTYT",ft:"A",ln:1,dc:0,lb:"Property Type",h1:"Property",h2:"Type",h3:"",de:"Property Type",
dv:"",ia:["FE"]},F15:{nm:"VF_ELLANG",ft:"A",ln:4,dc:0,lb:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],h1:{"ENG":"Language","FRA":"Code","JPN":"言語"}[cL],h2:{"ENG":"Code","FRA":"langue","JPN":"コード"}[cL],h3:"",de:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],dv:l.eSV("*LANGUAGE"),ia:["FE"]},F16:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F17:{nm:"VF_ELCA_3",an:"VF_ELCAP1U",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC"]},F18:{nm:"VF_ELGPID",ft:"A",ln:32,dc:0,lb:{"ENG":"Group ID","FRA":"Business Object","JPN":"Business Object"}[cL],h1:{"ENG":"Group","FRA":"Business","JPN":"Business"}[cL],h2:{"ENG":"ID","FRA":"Object","JPN":"Object"}[cL],h3:{"ENG":"","FRA":"ID","JPN":"ID"}[cL],
de:{"ENG":"Group  ID","FRA":"Business Object ID","JPN":"Business Object ID"}[cL],dv:"",ia:["FE"]},F19:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]},F20:{nm:"IOTYPE",ft:"A",ln:1,dc:0,
lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F21:{nm:"GROUPIDENTIFIER",ft:"A",ln:32,dc:0,lb:"Internal Identi",h1:"Internal",h2:"Identifier",h3:"",de:"Internal Identifier",dv:"",ia:["FE"]},F22:{nm:"INUSERGROUP",ft:"B",ln:1,dc:0,lb:"InUserGroup",h1:"InUserGroup",h2:"",h3:"",de:"InUserGroup",dv:false},F23:{nm:"GROUPCAPTION",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC","ASQN"],oa:["ASQN"]}};var cO=l.rC(oI,
{an:"VF_AC010O",fd:Fd,pt:{uPasswordOK:{da:"r"}},mt:{uTerminate:{},uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},REQUEST_EXECUTE_IMMED:{},RequestExecuteonTimer:{ps:{"GotoBusyStateText":{pt:"i"}}},RefreshDisplay:{ps:{"TellOthersAboutIt":{pt:"i"}}},UpdateUserProperty:{ps:{"PtyName":{pt:"i"},"PtyValue":{pt:"i"},"PtyInstance":{pt:"i"},"PtyType":{pt:"i"},"PtyLanguage":{pt:"i"}}},AddGroups:{}},co:function(){cO.aN.call(this);var f=this.aF("VF_CH011O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");
var C1=this.cR("ATTACHITEM18","PRIM_ATLI");var C2=this.cR("ATTACHITEM19","PRIM_ATLI");var C3=this.cR("ATTACHITEM20","PRIM_ATLI");var C4=this.cR("ATTACHITEM21","PRIM_ATLI");var C5=this.cR("ATTACHITEM22","PRIM_ATLI");var C6=this.cR("ATTACHITEM23","PRIM_ATLI");var C7=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C8=this.cR("ATTACHITEM25","PRIM_ATLI");var C9=this.cR("ATTACHITEM1","PRIM_ATLI");var C10=this.cR("ATTACHITEM2","PRIM_ATLI");var C11=this.cR("ATTACHITEM3","PRIM_ATLI");var C12=this.cR("ATTACHITEM5","PRIM_ATLI");
var C13=this.cR("ATTACHITEM7","PRIM_ATLI");var C14=this.cR("ATTACHITEM9","PRIM_ATLI");var C15=this.cR("ATTACHITEM10","PRIM_ATLI");var C16=this.cR("ATTACHITEM11","PRIM_ATLI");var C17=this.cR("ATTACHITEM12","PRIM_ATLI");var C18=this.cR("ATTACHITEM8","PRIM_ATLI");var C19=this.cR("ATTACHITEM14","PRIM_ATLI");var C20=this.cR("ATTACHITEM24","PRIM_ATLI");var C21=this.cR("ATTACHITEM26","PRIM_ATLI");var C22=this.cR("ATTACHLAYOUT3","PRIM_ATLM");var C23=this.cR("ATTACHITEM4","PRIM_ATLI");var C24=this.cR("BUTTON_PANEL","PRIM_PANL");
var C25=this.cF("USERIDENTIFIER",Fd.F1.VISUAL);var C26=this.cF("UCAPTION",Fd.F2.VISUAL);var C27=this.cF("UUSERPROFILE",Fd.F3.VISUAL);var C28=this.cF("UEMAILADDRESS",Fd.F4.VISUAL);var C29=this.cF("UTEMPDIRECTORY",Fd.F4.VISUAL);var C30=this.cR("BUTTON_SAVE","PRIM_PHBN");var C31=this.cR("USIGNONTIMEOUT","PRIM_EDIT");var C32=this.cR("USIGNOFFTIMEOUT","PRIM_EDIT");var C33=this.cR("USIGNONTIMEOUT_LABEL","PRIM_LABL");var C34=this.cR("USIGNOFFTIMEOUT_LABEL","PRIM_LABL");var C35=this.cR("INACTIVITYSETTINGS","PRIM_GPBX");
var C36=this.cR("UADMIN","PRIM_CKBX");var C37=this.cR("UDISABLED","PRIM_CKBX");var C38=this.cR("USERPANEL","PRIM_PANL");var C39=this.cR("USERGROUP_PANEL","PRIM_PANL");var C40=this.cR("GROUPLIST","PRIM_LIST");var C41=this.cR("PENDING_REQUEST_EXECUTE_IMMED","PRIM_ALPH");var C42=this.cR("UGROUPUSER","PRIM_BOLN");this.cD("ASSOCIATEDINSTANCEITEM");var C44=this.cR("COLCAPTION","PRIM_LIST","String");var C45=this.cR("COLGROUPID","PRIM_LIST","String");var C46=this.cR("PASSWORDOK","PRIM_BOLN");var C47=this.cR("SERIALNAMEDPROPERTYSTREAM","PRIM_ACOL");
var C48=this.cR("USERGROUPS","PRIM_ACOL");var C49=this.cA("USERVERINTERFACE","VF_SY169O");C0.iC();C1.setManage(C28);C1.setParent(C0);C1.setAttachment("TOP");C1.setMarginTop(4);C1.setMarginLeft(4);C1.setMarginRight(4);C1.iC();C2.setManage(C29);C2.setParent(C0);C2.setAttachment("TOP");C2.setMarginTop(4);C2.setMarginLeft(4);C2.setMarginRight(4);C2.iC();C3.setManage(C35);C3.setParent(C0);C3.setAttachment("TOP");C3.setMarginLeft(184);C3.setMarginRight(4);C3.iC();C4.setManage(C36);C4.setParent(C0);C4.setAttachment("TOP");
C4.setMarginLeft(184);C4.setMarginRight(4);C4.iC();C5.setManage(C37);C5.setParent(C0);C5.setAttachment("TOP");C5.setMarginLeft(184);C5.setMarginRight(4);C5.iC();C6.setAttachment("RIGHT");C6.setManage(C39);C6.setParent(C0);C6.iC();C7.iC();C8.setManage(C40);C8.setParent(C7);C8.setAttachment("CENTER");C8.setMarginTop(4);C8.setMarginRight(4);C8.iC();C9.setAttachment("TOP");C9.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C9.iC();C10.setManage(C25);C10.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C10.setAttachment("TOP");
C10.setMarginTop(4);C10.setMarginLeft(4);C10.setMarginRight(4);C10.iC();C11.setManage(C26);C11.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C11.setAttachment("TOP");C11.setMarginTop(4);C11.setMarginLeft(4);C11.setMarginRight(4);C11.iC();C12.setManage(C27);C12.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C12.setAttachment("TOP");C12.setMarginTop(4);C12.setMarginLeft(4);C12.setMarginRight(4);C12.iC();C13.setManage(C24);C13.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C13.setAttachment("BOTTOM");
C13.setMarginLeft(4);C13.iC();C14.setManage(C36);C14.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C14.setAttachment("TOP");C14.iC();C15.setManage(C35);C15.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C15.setAttachment("TOP");C15.setMarginLeft(4);C15.setMarginRight(4);C15.iC();C16.setManage(C29);C16.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C16.setAttachment("TOP");C16.iC();C17.setManage(C28);C17.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C17.setAttachment("TOP");C17.iC();C18.setAttachment("TOP");
C18.setManage(C37);C18.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C18.setMarginLeft(4);C18.setMarginRight(4);C18.iC();C19.setAttachment("CENTER");C19.setManage(C38);C19.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C19.iC();C20.setManage(C39);C20.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C20.setAttachment("RIGHT");C20.iC();C21.setParent(C7);C21.setAttachment("BOTTOM");C21.iC();C22.iC();C23.setManage(C30);C23.setParent(C22);C23.setAttachment("RIGHT");C23.setMarginBottom(4);C23.setMarginLeft(4);
C23.setMarginRight(4);C23.setMarginTop(4);C23.iC();C24.setDisplayPosition(6);C24.setParent(this);C24.setTabPosition(6);C24.setLeft(4);C24.setTop(396);C24.setWidth(677);C24.setHeight(29);C24.setLayoutManager(C22);C24.iC();C25.setDisplayPosition(1);C25.setHeight(23);C25.setParent(this);C25.setTabPosition(3);C25.setWidth(673);C25.setReadOnly(true);C25.setEnabled(false);C25.setTop(4);C25.setLeft(4);C25.setTabStop(false);C25.setUsePicklist(false);C25.setMarginLeft(180);C25.aD();C25.iC();C26.setDisplayPosition(2);
C26.setParent(this);C26.setTabPosition(1);C26.setTop(31);C26.setHeight(23);C26.setWidth(673);C26.setLeft(4);C26.setUsePicklist(false);C26.setMarginLeft(180);C26.aD();C26.iC();C27.setDisplayPosition(3);C27.setParent(this);C27.setTabPosition(2);C27.setTop(58);C27.setHeight(23);C27.setUsePicklist(false);C27.setWidth(673);C27.setLabelType("CAPTION");C27.setCaption(m1);C27.setLeft(4);C27.setMarginLeft(180);C27.aD();C27.iC();C28.setComponentVersion(1);C28.setDisplayPosition(1);C28.setParent(C38);C28.setTabPosition(1);
C28.setHeight(24);C28.setUsePicklist(false);C28.setCaption(m2);C28.setLabelType("CAPTION");C28.setWidth(448);C28.setTop(4);C28.setLeft(4);C28.setMarginLeft(180);C28.aD();C28.iC();C29.setComponentVersion(1);C29.setDisplayPosition(2);C29.setParent(C38);C29.setTabPosition(2);C29.setTop(32);C29.setHeight(24);C29.setUsePicklist(false);C29.setCaption(m3);C29.setLabelType("CAPTION");C29.setWidth(448);C29.setLeft(4);C29.setMarginLeft(180);C29.aD();C29.iC();C30.setCaption(m4);C30.setDisplayPosition(1);C30.setLeft(593);
C30.setParent(C24);C30.setTabPosition(1);C30.setTop(4);C30.setEnabled(false);C30.setButtonDefault(true);C30.setHeight(21);C30.iC();C31.setDisplayPosition(2);C31.setLeft(208);C31.setParent(C35);C31.setShowSelection(false);C31.setShowSelectionHilight(false);C31.setTabPosition(2);C31.setTop(32);C31.setHeight(22);C31.setWidth(50);C31.iC();C32.setDisplayPosition(4);C32.setLeft(208);C32.setParent(C35);C32.setShowSelection(false);C32.setShowSelectionHilight(false);C32.setTabPosition(4);C32.setTop(62);C32.setHeight(22);
C32.setWidth(50);C32.iC();C33.setCaption(m5);C33.setDisplayPosition(1);C33.setEllipses("WORD");C33.setHeight(22);C33.setLeft(16);C33.setParent(C35);C33.setTabPosition(1);C33.setTabStop(false);C33.setTop(32);C33.setVerticalAlignment("CENTER");C33.setWidth(188);C33.iC();C34.setCaption(m6);C34.setDisplayPosition(3);C34.setEllipses("WORD");C34.setHeight(22);C34.setLeft(16);C34.setParent(C35);C34.setTabPosition(3);C34.setTabStop(false);C34.setTop(62);C34.setVerticalAlignment("CENTER");C34.setWidth(189);
C34.iC();C35.setDisplayPosition(5);C35.setLeft(184);C35.setParent(C38);C35.setTabPosition(5);C35.setTabStop(false);C35.setTop(106);C35.setCaption(m7);C35.setWidth(268);C35.setHeight(97);C35.iC();C36.setCaption(m8);C36.setDisplayPosition(4);C36.setLeft(184);C36.setMarginLeft(2);C36.setParent(C38);C36.setTabPosition(4);C36.setTop(81);C36.setWidth(268);C36.iC();C37.setCaption(m9);C37.setDisplayPosition(3);C37.setLeft(184);C37.setMarginLeft(2);C37.setParent(C38);C37.setTabPosition(3);C37.setTop(56);C37.setWidth(268);
C37.iC();C38.setDisplayPosition(4);C38.setHeight(315);C38.setLeft(0);C38.setParent(this);C38.setTabPosition(4);C38.setTabStop(false);C38.setTop(81);C38.setWidth(456);C38.setLayoutManager(C0);C38.iC();C39.setDisplayPosition(5);C39.setHeight(315);C39.setLeft(456);C39.setParent(this);C39.setTabPosition(5);C39.setTabStop(false);C39.setTop(81);C39.setWidth(225);C39.setLayoutManager(C7);C39.iC();C40.setDisplayPosition(1);C40.setLeft(0);C40.setParent(C39);C40.setTabPosition(1);C40.setTop(4);C40.setHeight(311);
C40.setWidth(221);C40.setCheckBoxes(true);C40.setRowHeight(22);C40.iC();C41.iC();C42.iC();C44.setDisplayPosition(1);C44.setParent(C40);C44.setSource(f.F17);C44.setColumnWidth(100);C44.setColumnCaptionType("CAPTION");C44.setColumnCaption(m10);C44.setColumnUnits("PROPORTION");C44.iC();C45.setDisplayPosition(2);C45.setParent(C40);C45.setSource(f.F18);C45.setColumnVisible(false);C45.iC();C46.iC();C47.setCollects("VF_SY183O");C47.iC();C48.setCollects("VF_SY182O");C48.iC();if((C49!=null)&&(C49.iI()==false))
{C49.iC();}C26.aH("CHANGED",this,e8);C27.aH("CHANGED",this,e7);C28.aH("CHANGED",this,e7);C29.aH("CHANGED",this,e7);C30.aH("CLICK",this,e3);C31.aH("CHANGED",this,e5);C32.aH("CHANGED",this,e5);C36.aH("CLICK",this,e6);C37.aH("CLICK",this,e6);C40.aH("ITEMCHANGED",this,e4);this.REF.UFRAMEWORK.ref.aH("USERDELETED",this,e1);this.REF.AVLOCALTIMER.aH("TICK",this,e2);C47.aLF({"PROPERTYTYPE":f.F5,"PROPERTYNAME":f.F6,"PROPERTYLANGUAGE":f.F7,"PROPERTYINSTANCE":f.F8,"PROPERTYVALUE":f.F9});C48.aLF({});this.setHeight(425);
this.setWidth(681);this.setVerticalScroll(true);}});var cA=cO.aN.prototype;cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",96);r.ln=96;{r.ln=98;this.srASSOCIATEDINSTANCEITEM(null);}r.ln=100;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",102);r.ln=102;{r.ln=104;cA.mthUINITIALIZE.call(this);r.ln=106;this.REF.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.GROUPLIST,this);r.ln=108;m.UUSERPROFILE.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("USR_PROF"));
r.ln=109;m.UEMAILADDRESS.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("EMAIL"));r.ln=110;m.UTEMPDIRECTORY.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("TEMPDIR"));r.ln=111;m.BUTTON_SAVE.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("SAVE"));r.ln=112;m.UADMIN.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("USR_ADMIN"));r.ln=113;m.UDISABLED.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("USERDISABLED"));r.ln=114;m.USIGNONTIMEOUT_LABEL.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("SIGNONTIME"));
r.ln=115;m.USIGNOFFTIMEOUT_LABEL.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("SIGNOFFTIME"));r.ln=116;m.INACTIVITYSETTINGS.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("INACTIVITY"));r.ln=117;m.COLCAPTION.setColumnCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("USERGROUPS"));}r.ln=119;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UFRAMEWORK.UserDeleted",122);var P0=Ps.r("USERIDENTIFIER");r.ln=122;{r.ln=125;if((m.ASSOCIATEDINSTANCEITEM!=null)){r.ln=126;if(l.tB(l.s.eq(m.ASSOCIATEDINSTANCEITEM.getAVAKEY1().get(),P0.get())))
{r.ln=127;this.mthAVCLOSEFORM();}}}r.ln=131;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",135);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=135;{r.ln=138;this.setVisible(false);r.ln=140;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=142;m.PASSWORDOK.set(true);r.ln=143;m.SERIALNAMEDPROPERTYSTREAM.clearList();r.ln=144;m.USERGROUPS.clearList();r.ln=147;this.REF.AVLOCALTIMERREQUEST.set(l.s.UpperCase(this.getAVALPHAARG1()));
r.ln=149;if(l.tB(l.s.eq(this.REF.AVLOCALTIMERREQUEST.get(),"DETAILS"))){r.ln=150;this.srASSOCIATEDINSTANCEITEM(this.getAVASSOCIATEDINSTANCE());r.ln=151;m.USERIDENTIFIER.set(m.ASSOCIATEDINSTANCEITEM.getAVAKEY1().get());r.ln=152;m.UUSERPROFILE.set(m.ASSOCIATEDINSTANCEITEM.getAVVISUALID1().get());}else{r.ln=154;this.srASSOCIATEDINSTANCEITEM(null);r.ln=155;m.USERIDENTIFIER.set("");r.ln=156;m.UUSERPROFILE.set("");}r.ln=160;P0.set(false);r.ln=161;this.REF.AVLOCALTIMER.setInterval(1);p0.set(P0.get());}r.ln=163;
r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",167);r.ln=167;{r.ln=169;this.REF.AVLOCALTIMER.setInterval(0);r.ln=171;{var v1=this.REF.AVLOCALTIMERREQUEST.get();if(r.ln=173,l.or(l.s.eq(v1,"SHOW_NEWUSER"),l.s.eq(v1,"SHOW_NEWGROUP"))){r.ln=174;this.setVisible(true);r.ln=175;this.mthREFRESHDISPLAY(false);r.ln=176;m.BUTTON_SAVE.setEnabled(true);r.ln=177;this.mthAVGOTOFREESTATE();}else if(r.ln=179,l.or(l.s.eq(v1,"SHOW_USER_OR_GROUP"),l.s.eq(v1,"USER_CHANGED"))){r.ln=180;
this.setVisible(true);r.ln=181;this.mthREFRESHDISPLAY(l.s.eq(this.REF.AVLOCALTIMERREQUEST.get(),"USER_CHANGED"));r.ln=182;m.BUTTON_SAVE.setEnabled(false);r.ln=183;this.mthAVGOTOFREESTATE();}else if(r.ln=185,l.or(l.or(l.s.eq(v1,"NEWGROUP"),l.s.eq(v1,"NEWUSER")),l.s.eq(v1,"DETAILS"))){r.ln=186;this.mthREQUESTEXECUTEONTIMER("");}else if(r.ln=188,l.s.eq(v1,"UPDATE_USER")){r.ln=189;this.mthREQUESTEXECUTEONTIMER(this.REF.USYSTEM.ref.getUMTXTVALUES("SAVE"));}else if(r.ln=191,l.s.eq(v1,"REQUEST_EXECUTE_IMMED"))
{r.ln=192;this.mthREQUEST_EXECUTE_IMMED();}else{r.ln=195;l.WEB().mthALERT(l.cat(l.cat(l.add("VF_CH011O: ",this.REF.USYSTEM.ref.getUMTXTVALUES("CH011O_01")),this.REF.AVLOCALTIMERREQUEST.get())," encountered."));}r.ln=196;}}r.ln=198;r.e();};cO.mthREQUEST_EXECUTE_IMMED=function(){var m=this.REF,r=l.mR(this,cO,"REQUEST_EXECUTE_IMMED",201);var C0=r.cR("RETURNCODE","PRIM_ALPH");C0.iC();r.ln=201;{r.ln=205;m.USERVERINTERFACE.ref.mthZINT_HANDLEUSERSERVICEREQUEST(m.PENDING_REQUEST_EXECUTE_IMMED.get(),m.UUSERPROFILE.get(),m.USERIDENTIFIER.get(),m.USERGROUPS,m.SERIALNAMEDPROPERTYSTREAM,this.REF.AVFRAMEWORKMANAGER.mthGETMESSAGEASSIGNEDCOLLECTIONNUMBER(this,false),C0,this.REF.AVLOCALTIMERREQUEST);
r.ln=207;if(l.tB(l.s.ne(C0.get(),"OK"))){r.ln=208;l.WEB().mthALERT(l.cat(l.cat(l.add(l.cat(l.add("Vf_sy169OInterface.HandleUserServiceRequest ",this.REF.USYSTEM.ref.getUMTXTVALUES("FAILED")),". "),this.REF.USYSTEM.ref.getUMTXTVALUES("RETURNCODE")),": "),C0.get()));}r.ln=212;this.mthAVGOTOFREESTATE();r.ln=214;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=216;r.e();};cO.mthREQUESTEXECUTEONTIMER=function(p0){var m=this.REF,r=l.mR(this,cO,"RequestExecuteonTimer",219);var P0=r.cP("GOTOBUSYSTATETEXT","PRIM_DC","UnicodeString");
P0.set(p0);r.ln=219;{r.ln=222;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u,u);r.ln=224;this.mthAVGOTOBUSYSTATE(P0.get(),false,u);r.ln=226;m.PENDING_REQUEST_EXECUTE_IMMED.set(this.REF.AVLOCALTIMERREQUEST.get());r.ln=227;this.REF.AVLOCALTIMERREQUEST.set("REQUEST_EXECUTE_IMMED");r.ln=228;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=230;r.e();};cO.mthREFRESHDISPLAY=function(p0){var f=this.FLD.VF_CH011O,m=this.REF,r=l.mR(this,cO,"RefreshDisplay",234);var P0=r.cP("TELLOTHERSABOUTIT","PRIM_BOLN");
P0.set(p0);var C0=r.cF("INGROUPIDENTIFIER",Fd.F1.Dc);C0.iC();r.ln=234;{r.ln=240;m.UGROUPUSER.set(false);r.ln=241;m.USIGNONTIMEOUT.set("0");r.ln=242;m.USIGNOFFTIMEOUT.set("0");r.ln=243;m.UTEMPDIRECTORY.set("");r.ln=244;m.UEMAILADDRESS.set("");r.ln=245;m.UADMIN.setButtonState("UNCHECKED");r.ln=246;m.UDISABLED.setButtonState("UNCHECKED");r.ln=247;m.UUSERPROFILE.set("");r.ln=248;m.USERIDENTIFIER.set("");r.ln=249;m.UCAPTION.set("");r.ln=251;{var l1=m.SERIALNAMEDPROPERTYSTREAM.selectList();while(l1.step())
{r.ln=253;{var v1=f.F6.get();if(r.ln=255,l.s.eq(v1,"UGROUPUSER")){r.ln=256;m.UGROUPUSER.set(l.s.eq(l.s.UpperCase(f.F9.get()),"TRUE"));}else if(r.ln=258,l.s.eq(v1,"USIGNONTIMEOUT")){r.ln=259;m.USIGNONTIMEOUT.set(f.F9.get());}else if(r.ln=261,l.s.eq(v1,"USIGNOFFTIMEOUT")){r.ln=262;m.USIGNOFFTIMEOUT.set(f.F9.get());}else if(r.ln=264,l.s.eq(v1,"UTEMPDIRECTORY")){r.ln=265;m.UTEMPDIRECTORY.set(f.F9.get());}else if(r.ln=267,l.s.eq(v1,"UEMAILADDRESS")){r.ln=268;m.UEMAILADDRESS.set(f.F9.get());}else if(r.ln=270,l.s.eq(v1,"UADMIN"))
{r.ln=271;if(l.s.ne(f.F9.get(),"FALSE")){r.ln=272;m.UADMIN.setButtonState("CHECKED");}}else if(r.ln=275,l.s.eq(v1,"UDISABLED")){r.ln=276;if(l.s.ne(f.F9.get(),"FALSE")){r.ln=277;m.UDISABLED.setButtonState("CHECKED");}}else if(r.ln=280,l.s.eq(v1,"UUSERPROFILE")){r.ln=281;m.UUSERPROFILE.set(f.F9.get());}else if(r.ln=283,l.s.eq(v1,"UCAPTION")){r.ln=284;m.UCAPTION.set(f.F9.get());}else if(r.ln=286,l.s.eq(v1,"UIDENTIFIER")){r.ln=287;m.USERIDENTIFIER.set(f.F9.get());}r.ln=289;}r.ln=291;}l1.end();}r.ln=293;
if(l.tB(m.UGROUPUSER.get())){r.ln=295;m.USERPANEL.setVisible(false);r.ln=296;m.USERGROUP_PANEL.setVisible(false);}else{r.ln=300;this.mthADDGROUPS();r.ln=301;m.USERPANEL.setVisible(true);r.ln=302;m.USERGROUP_PANEL.setVisible(true);}r.ln=308;if(l.tB(P0.get())){r.ln=310;this.REF.UFRAMEWORK.ref.mthZINT_SIGNALUSERCREATEDORCHANGED(m.USERIDENTIFIER.get(),m.UUSERPROFILE.get(),m.UCAPTION.get(),l.s.eq(m.UADMIN.getButtonState(),"CHECKED"),l.s.eq(m.UDISABLED.getButtonState(),"CHECKED"));}}r.ln=315;r.e();};function e3(sender,Ps)
{var r=l.eR(this,cO,"#Button_Save.Click",318);r.ln=318;{r.ln=320;this.REF.AVLOCALTIMERREQUEST.set("UPDATE_USER");r.ln=321;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=323;r.e();};function sr1(p0,p1,p2,p3,p4,p5){var f=this.FLD.VF_CH011O,m=this.REF,r=l.sR(this,cO,"AddUserDetailsEntry",326);f.F5.set(p0);f.F6.set(p1);f.F7.set(p2);f.F8.set(p3);f.F9.set(p4);f.F10.set(p5);r.ln=326;{r.ln=327;m.SERIALNAMEDPROPERTYSTREAM.addEntry();}r.ln=328;r.e();};cO.mthUPDATEUSERPROPERTY=function(p0,p1,p2,p3,p4){var f=this.FLD.VF_CH011O,m=this.REF,r=l.mR(this,cO,"UpdateUserProperty",331);
var P0=r.cPF("PTYNAME",Fd.F11.Dc);var P1=r.cPF("PTYVALUE",Fd.F12.Dc);var P2=r.cPF("PTYINSTANCE",Fd.F13.Dc);var P3=r.cPF("PTYTYPE",Fd.F14.Dc);var P4=r.cPF("PTYLANGUAGE",Fd.F15.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);var C0=r.cF("LISTENTRYNUMBER",Fd.F16.Dc);C0.iC();r.ln=331;{r.ln=340;f.F19.set(lIO=m.SERIALNAMEDPROPERTYSTREAM.locateEntry(function(e){return l.and(l.s.eq(((e["PTYNAME"]!==u)?e["PTYNAME"]:P0.get()),((e["PROPERTYNAME"]!==u)?e["PROPERTYNAME"]:f.F6.get())),l.n.eq(((e["PTYINSTANCE"]!==u)?e["PTYINSTANCE"]:P2.get()),((e["PROPERTYINSTANCE"]!==u)?e["PROPERTYINSTANCE"]:f.F8.get())))},C0,true));
r.ln=342;if(lIO=="OK"){r.ln=344;f.F19.set(lIO=m.SERIALNAMEDPROPERTYSTREAM.getEntry(C0.get()));r.ln=346;f.F9.set(P1.get());r.ln=349;f.F20.set("U");r.ln=351;m.SERIALNAMEDPROPERTYSTREAM.updateEntry();}else{r.ln=355;sr1.call(this,P3.get(),P0.get(),P4.get(),P2.get(),P1.get(),"I");}r.ln=359;m.BUTTON_SAVE.setEnabled(true);}r.ln=360;r.e();};function e4(GROUPITEM,Ps){var f=this.FLD.VF_CH011O,m=this.REF,r=l.eR(this,cO,"#GroupList.ItemChanged",364);r.ln=364;{r.ln=366;f.F19.set(lIO=m.USERGROUPS.getEntry(m.GROUPLIST.getCurrentItem().getEntry()));
r.ln=368;{var l1=m.USERGROUPS.selectList();while(l1.step()){r.ln=370;if(l.s.eq(f.F18.get(),f.F21.get())){r.ln=372;f.F22.set(l.s.eq(m.GROUPLIST.getCurrentItem().getChecked(),"CHECKED"));r.ln=374;m.USERGROUPS.updateEntry();r.ln=376;break;}r.ln=380;}l1.end();}r.ln=382;m.BUTTON_SAVE.setEnabled(true);}r.ln=384;r.e();};function e5(EDITCONTROL,Ps){var r=l.eR(this,cO,"#USignOffTimeout.Changed #USignOnTimeout.Changed",386);r.ln=386;{r.ln=388;if(l.b.Not(l.s.IsNumber(EDITCONTROL.getValue()))){r.ln=389;EDITCONTROL.setValue("0");
}else{r.ln=391;if(l.n.lt(l.s.AsNumber(EDITCONTROL.getValue()),0)){r.ln=392;EDITCONTROL.setValue("0");}}r.ln=396;this.mthUPDATEUSERPROPERTY(EDITCONTROL.getName(),EDITCONTROL.getValue(),1,"N","ALL");}r.ln=398;r.e();};function e6(UCHECKBOX,Ps){var r=l.eR(this,cO,"#UDISABLED.Click #UADMIN.Click",401);r.ln=401;{r.ln=403;this.mthUPDATEUSERPROPERTY(UCHECKBOX.getName(),l.s.UpperCase(l.b.AsString(l.s.eq(UCHECKBOX.getButtonState(),"CHECKED"))),1,"A","ALL");}r.ln=405;r.e();};function e7(CONTROL,Ps){var r=l.eR(this,cO,"#UUSERPROFILE.Changed #UTEMPDIRECTORY.Changed #UEMAILADDRESS.Changed",408);
r.ln=408;{r.ln=410;this.mthUPDATEUSERPROPERTY(CONTROL.getName(),CONTROL.getText(),1,"A","ALL");}r.ln=412;r.e();};function e8(CONTROL,Ps){var r=l.eR(this,cO,"#UCAPTION.Changed",416);r.ln=416;{r.ln=418;this.mthUPDATEUSERPROPERTY(CONTROL.getName(),CONTROL.getText(),1,"A",l.eSV("*LANGUAGE"));}r.ln=420;r.e();};cO.mthADDGROUPS=function(){var f=this.FLD.VF_CH011O,m=this.REF,r=l.mR(this,cO,"AddGroups",424);var C0=r.cF("LISTENTRYNUMBER",Fd.F13.Dc);C0.iC();r.ln=424;{r.ln=428;m.GROUPLIST.clearList();r.ln=430;
{var l1=m.USERGROUPS.selectList();while(l1.step()){r.ln=432;f.F17.set(f.F23.get());r.ln=433;f.F18.set(f.F21.get());r.ln=435;m.GROUPLIST.addEntry();r.ln=437;if(f.F22.get()){r.ln=438;m.GROUPLIST.getCurrentItem().setChecked("CHECKED");}else{r.ln=440;m.GROUPLIST.getCurrentItem().setChecked("UNCHECKED");}r.ln=443;}l1.end();}}r.ln=445;r.e();};cO.getUPASSWORDOK=function(){return this.REF.PASSWORDOK.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});Fd.F1.VISUAL=function()
{this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"VF_ELIDN",cn:"Visual"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELCA_1"});Fd.F2.VISUAL=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.VISUAL,an:"PRIM_EVEF",fn:"VF_ELCA_1",cn:"Visual"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELUSRL"});Fd.F3.VISUAL=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.VISUAL,an:"PRIM_EVEF",fn:"VF_ELUSRL",cn:"Visual"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELSVAV"});Fd.F4.VISUAL=function(){this.aN.call(this,new Fd.F4.Dc());};l.cFC({co:Fd.F4.VISUAL,an:"PRIM_EVEF",fn:"VF_ELSVAV",cn:"Visual"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"VF_ELPTYN"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"VF_ELPUVA"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});
}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"VF_ELPTYT"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"VF_ELLANG"});}{Fd.F16.Dc=function(){this.aN.call(this,Fd.F16);};l.cFC({co:Fd.F16.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srASSOCIATEDINSTANCEITEM=function(rn){this.sR("ASSOCIATEDINSTANCEITEM",rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O","VF_SY169O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_EVEF","PRIM_PHBN","PRIM_EDIT","PRIM_LABL","PRIM_GPBX","PRIM_CKBX","PRIM_LIST","PRIM_ALPH","PRIM_BOLN","PRIM_LIST.String","PRIM_ACOL","PRIM_FLD"],
dc:["VF_LM003O","VF_SY183O","VF_SY182O"],dp:["PRIM_ALPH"]});