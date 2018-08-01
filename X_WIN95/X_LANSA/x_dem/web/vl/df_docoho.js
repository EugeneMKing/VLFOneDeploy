﻿LANSA.addComponent({id:"DF_DOCOHO",ot:"rp",tp:"Reusable Part",de:"\\OC=Demonstration Documentation Handler",tl:14020008},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"VF_ELURL",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]},F3:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,
{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},AddPotentialDocument:{ps:{"Caption":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_DOCOHO",Fd);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");var C1=this.cR("ATTACHITEM2","PRIM_ATLI");var C2=this.cR("ATTACHITEM3","PRIM_ATLI");var C3=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C4=this.cR("ATTACHITEM5","PRIM_ATLI");var C5=this.cR("ATTACHITEM6","PRIM_ATLI");var C6=this.cR("CAPTIONS","PRIM_ACOL");
var C7=this.cR("DISPLAYDOCUMENTS","PRIM_ACOL");var C8=this.cR("DOWNLOADDOCUMENTS","PRIM_ACOL");var C9=this.cR("RANDOMNUMBERS","PRIM_ACOL");var C10=this.cA("DF_RAMPCV","DF_RAMPCV");var C11=this.cR("LIST1","PRIM_LIST");var C12=this.cR("VISIBLECOLUMN","PRIM_LIST","String");var C13=this.cR("COLUMNSTD_INT","PRIM_LIST","Number");var C14=this.cR("BUTTONSPANEL","PRIM_PANL");var C15=this.cR("SHOWDOCUMENT","PRIM_WEB","Page");var C16=this.cR("DOWNLOAD","PRIM_PHBN");var C17=this.cR("TITLETEXT","PRIM_LABL");var C18=this.cR("BLUETEXT","PRIM_VS","Style");
var C19=this.cR("BLUETEXTBOLD","PRIM_VS","Style");C0.setManage(C11);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.setMarginBottom(2);C0.setMarginLeft(2);C0.setMarginRight(2);C0.setMarginTop(2);C0.iC();C1.setManage(C14);C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("TOP");C1.setMarginBottom(2);C1.setMarginLeft(2);C1.setMarginRight(2);C1.setMarginTop(2);C1.iC();C2.setManage(C15);C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("CENTER");
C2.setMarginBottom(2);C2.setMarginLeft(2);C2.setMarginRight(2);C2.setMarginTop(2);C2.iC();C3.iC();C4.setManage(C16);C4.setParent(C3);C4.setAttachment("RIGHT");C4.setMarginBottom(2);C4.setMarginLeft(2);C4.setMarginRight(2);C4.setMarginTop(2);C4.iC();C5.setManage(C17);C5.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C5.setAttachment("TOP");C5.iC();C6.setCollects("PRIM_ALPH");C6.iC();C7.setCollects("PRIM_ALPH");C7.iC();C8.setCollects("PRIM_ALPH");C8.iC();C9.setCollects("STD_INT");C9.iC();if((C10!=null)&&(C10.iI()==false))
{C10.iC();}C11.setDisplayPosition(1);C11.setLeft(2);C11.setParent(this);C11.setTabPosition(1);C11.setTop(2);C11.setHeight(119);C11.setWidth(533);C11.setColumnLines(false);C11.setColumnSortArrow(false);C11.iC();C12.setColumnWidth(100);C12.setDisplayPosition(1);C12.setParent(C11);C12.setSource(f.F2);C12.setColumnCaptionAlign("LEFT");C12.setColumnCaptionType("CAPTION");C12.setColumnUnits("PROPORTION");C12.iC();C13.setParent(C11);C13.setSource(f.F1);C13.setColumnCaptionAlign("LEFT");C13.setColumnVisible(false);
C13.iC();C14.setParent(this);C14.setDisplayPosition(2);C14.setTabPosition(2);C14.setLeft(2);C14.setTop(125);C14.setWidth(533);C14.setHeight(30);C14.setLayoutManager(C3);C14.iC();C15.setDescription("Web Page");C15.setDisplayPosition(3);C15.setHeight(124);C15.setParent(this);C15.setTabPosition(3);C15.setTabStop(false);C15.setWidth(533);C15.setTop(187);C15.setLeft(2);C15.iC();C16.setParent(C14);C16.setDisplayPosition(1);C16.setTabPosition(1);C16.setCaption("Download");C16.setHeight(26);C16.setLeft(451);
C16.setTop(2);C16.iC();C17.setParent(this);C17.setDisplayPosition(4);C17.setTabPosition(4);C17.setTabStop(false);C17.setAlignment("CENTER");C17.setVerticalAlignment("CENTER");C17.setLeft(0);C17.setTop(157);C17.setWidth(537);C17.setHeight(28);C17.setStyle(C19);C17.iC();C18.setTextColor("BLUE");C18.iC();C19.setTextColor("BLUE");C19.setBold(true);C19.setBorderTop(1);C19.iC();C11.aH("ITEMGOTFOCUS",this,e1);C16.aH("CLICK",this,e2);this.setWidth(537);this.setHeight(313);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function()
{var m=this.REF,r=l.mR(this,cO,"uInitialize",54);r.ln=54;{r.ln=56;cA.mthUINITIALIZE.call(this);r.ln=58;this.REF.USYSTEM.ref.getCURRENTTHEME().mthAVSTYLEPRIM_LISTFORFORMFACTOR(m.LIST1,this);r.ln=60;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Product Fact Sheet");r.ln=61;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Supplementary Product Fact Sheet");r.ln=62;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Service Quote");r.ln=63;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Sales Receipt");r.ln=64;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Purchase Order");
r.ln=65;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Product Booklet");r.ln=66;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Packaging Slip");r.ln=67;cO.mthADDPOTENTIALDOCUMENT.call(this,"      Marketing Plan");r.ln=68;cO.mthADDPOTENTIALDOCUMENT.call(this,"      GS1 Product Fact Sheet");r.ln=71;this.setAVCONTENTNEEDSSHIELDING(true);r.ln=72;this.setAVCONTENTREQUIRESCONSTANTPARENTAGE(true);}r.ln=73;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",75);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");
var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;var C0=r.cD("C0");var C1=r.cD("C1");r.ln=75;{r.ln=81;cA.mthUEXECUTE.call(this,P0,P1);r.ln=84;C1=r.sR("C1",this.REF.AVLISTMANAGER.getCURRENTINSTANCE());r.ln=85;this.setVisible((C1!=null));r.ln=87;if(this.getVisible()){r.ln=89;m.VISIBLECOLUMN.setColumnCaption(l.add(l.cat(l.add("Documents that are currently available for ",C1.getAVVISUALID1().get())," - "),C1.getAVVISUALID2().get()));r.ln=92;m.RANDOMNUMBERS.mthREMOVEALL();r.ln=93;{var l1=m.DISPLAYDOCUMENTS.cI();
while(l1.step()){var DOCUMENT=r.sR("DOCUMENT",l1.item());r.ln=94;C0=r.sR("C0",new Fd.F1.Dc());r.ln=95;C0.set(100);r.ln=96;m.RANDOMNUMBERS.mthINSERT(C0);r.ln=97;}l1.end();r.dR("DOCUMENT");}r.ln=100;m.DF_RAMPCV.ref.mthGETRANDOMVALUESLIST(m.RANDOMNUMBERS);r.ln=104;m.LIST1.clearList();r.ln=105;{var l1=m.RANDOMNUMBERS.cI();while(l1.step()){var RANDOMNUMBER=r.sR("RANDOMNUMBER",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=106;if(l.n.le(RANDOMNUMBER.get(),50)){r.ln=107;sr1.call(this,m.CAPTIONS.get(INDEX.get()).getValue(),INDEX.get());
}r.ln=109;}l1.end();r.dR("RANDOMNUMBER");r.dR("INDEX");}r.ln=111;m.DOWNLOAD.setEnabled(false);}p0.set(P0.get());}r.ln=115;r.e();};function sr1(p0,p1){var f=this.FLD.DF_DOCOHO,m=this.REF,r=l.sR(this,cO,"AddVisibleItem",117);f.F2.set(p0);f.F1.set(p1);r.ln=117;{r.ln=118;m.LIST1.addEntry();r.ln=119;m.LIST1.getCurrentItem().getStyles().mthADD(m.BLUETEXT);}r.ln=120;r.e();};cO.mthADDPOTENTIALDOCUMENT=function(p0){var m=this.REF,r=l.mR(this,cO,"AddPotentialDocument",122);var P0=r.cP("CAPTION","PRIM_ALPH");
P0.set(p0);var C0=r.cR("DISPLAYDOCUMENT","PRIM_ALPH");var C1=r.cR("DOWNLOADDOCUMENT","PRIM_ALPH");C0.iC();C1.iC();r.ln=122;{r.ln=128;m.CAPTIONS.mthINSERT(P0);r.ln=130;C1.set(l.cat(l.cat(l.cat("DF_DOCOHO","_"),l.s.ReplaceAll(l.s.Trim(P0.get())," ","_")),".DOCX"));r.ln=131;m.DOWNLOADDOCUMENTS.mthINSERT(C1);r.ln=133;C0.set(l.cat(l.cat(l.cat("DF_DOCOHO","_"),l.s.ReplaceAll(l.s.Trim(P0.get())," ","_")),".PDF"));r.ln=134;m.DISPLAYDOCUMENTS.mthINSERT(C0);}r.ln=137;r.e();};function e1(sender,Ps){var f=this.FLD.DF_DOCOHO,m=this.REF,r=l.eR(this,cO,"#List1.ItemGotFocus",139);
r.ln=139;{r.ln=140;if((m.LIST1.getFocusItem()!=null)){r.ln=141;f.F3.set(lIO=m.LIST1.getEntry(m.LIST1.getFocusItem().getEntry()));r.ln=142;m.TITLETEXT.setCaption(m.CAPTIONS.get(f.F1.get()).getValue());r.ln=143;m.SHOWDOCUMENT.setSource(l.cat("vlfone/",m.DISPLAYDOCUMENTS.get(f.F1.get()).getValue()));r.ln=144;m.DOWNLOAD.setEnabled(true);}}r.ln=146;r.e();};function e2(sender,Ps){var f=this.FLD.DF_DOCOHO,m=this.REF,r=l.eR(this,cO,"#Download.Click",149);r.ln=149;{r.ln=150;if((m.LIST1.getFocusItem()!=null))
{r.ln=151;f.F3.set(lIO=m.LIST1.getEntry(m.LIST1.getFocusItem().getEntry()));r.ln=152;l.WEB().mthNAVIGATE(l.cat("vlfone/",m.DOWNLOADDOCUMENTS.get(f.F1.get()).getValue()),"NEW");}}r.ln=154;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC010O","DF_RAMPCV"],rp:["PRIM_ATLI","PRIM_ATLM","PRIM_ACOL","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Number","PRIM_PANL","PRIM_WEB.Page","PRIM_PHBN","PRIM_LABL","PRIM_VS.Style","PRIM_FLD"],
dc:["VF_LM003O"],dp:["PRIM_ALPH"]});