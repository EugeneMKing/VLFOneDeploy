﻿LANSA.addComponent({id:"DF_T64H1O",ot:"rp",tp:"Reusable Part",de:"\\OC=Show set of images",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},ShowImage:{},ExtractImageNames:{}},co:function(){cO.aN.call(this);this.aF("DF_T64H1O",Fd);var C0=this.cR("ATTACHITEM1","PRIM_ATLI");var C1=this.cR("ATTACHITEM2","PRIM_ATLI");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM3","PRIM_ATLI");var C4=this.cR("ATTACHITEM4","PRIM_ATLI");var C5=this.cR("VISIBLEIMAGE","PRIM_IMAG");var C6=this.cR("BUTTONPANEL","PRIM_PANL");
var C7=this.cR("NEXTBUTTON","PRIM_PHBN");var C8=this.cR("PREVBUTTON","PRIM_PHBN");var C9=this.cR("IMAGENAMECOLLECTION","PRIM_ACOL");var C10=this.cF("NEXTIMAGETOSHOW",Fd.F1.Dc);C0.setManage(C6);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("BOTTOM");C0.iC();C1.setManage(C5);C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("CENTER");C1.iC();C2.setMarginBottom(2);C2.setMarginLeft(2);C2.setMarginRight(2);C2.setMarginTop(2);C2.iC();C3.setManage(C7);C3.setParent(C2);
C3.setAttachment("RIGHT");C3.iC();C4.setManage(C8);C4.setParent(C2);C4.setAttachment("LEFT");C4.iC();C5.setParent(this);C5.setDisplayPosition(1);C5.setTabPosition(1);C5.setHeight(228);C5.setLeft(0);C5.setTop(0);C5.setWidth(493);C5.setImageSizing("FITBOTH");C5.iC();C6.setParent(this);C6.setDisplayPosition(2);C6.setTabPosition(2);C6.setLeft(0);C6.setTop(228);C6.setWidth(493);C6.setHeight(22);C6.setLayoutManager(C2);C6.iC();C7.setParent(C6);C7.setCaption("Next >>");C7.setDisplayPosition(2);C7.setTabPosition(2);
C7.setHeight(18);C7.setLeft(411);C7.setTop(2);C7.iC();C8.setParent(C6);C8.setCaption("<< Previous");C8.setDisplayPosition(1);C8.setTabPosition(1);C8.setHeight(18);C8.setLeft(2);C8.setTop(2);C8.iC();C9.setCollects("PRIM_ALPH");C9.iC();C10.aD();C10.iC();C7.aH("CLICK",this,e2);C8.aH("CLICK",this,e1);this.setHeight(250);this.setWidth(493);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",41);r.ln=41;{r.ln=44;cA.mthUINITIALIZE.call(this);r.ln=47;this.mthEXTRACTIMAGENAMES();
}r.ln=49;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",53);r.ln=53;{r.ln=56;m.IMAGENAMECOLLECTION.mthREMOVEALL();r.ln=59;cA.mthUTERMINATE.call(this);}r.ln=61;r.e();};cO.mthUEXECUTE=function(p0,p1){var r=l.mR(this,cO,"uExecute",65);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=65;{r.ln=68;cA.mthUEXECUTE.call(this,P0,P1);r.ln=71;this.mthSHOWIMAGE();p0.set(P0.get());}r.ln=73;r.e();};cO.mthSHOWIMAGE=function()
{var m=this.REF,r=l.mR(this,cO,"ShowImage",76);r.ln=76;{r.ln=78;if(l.or(l.n.lt(m.NEXTIMAGETOSHOW.get(),1),l.n.gt(m.NEXTIMAGETOSHOW.get(),m.IMAGENAMECOLLECTION.getItemCount()))){r.ln=79;m.NEXTIMAGETOSHOW.set(1);}r.ln=82;if(l.and(l.n.ge(m.NEXTIMAGETOSHOW.get(),1),l.n.le(m.NEXTIMAGETOSHOW.get(),m.IMAGENAMECOLLECTION.getItemCount()))){r.ln=84;m.VISIBLEIMAGE.setImage(l.APPL().mthCREATEBITMAP(m.IMAGENAMECOLLECTION.get(m.NEXTIMAGETOSHOW.get()).get()));r.ln=86;m.NEXTBUTTON.setVisible(l.n.lt(m.NEXTIMAGETOSHOW.get(),m.IMAGENAMECOLLECTION.getItemCount()));
r.ln=88;m.PREVBUTTON.setVisible(l.n.gt(m.NEXTIMAGETOSHOW.get(),1));}else{r.ln=92;m.NEXTBUTTON.setVisible(false);m.PREVBUTTON.setVisible(false);}}r.ln=97;r.e();};cO.mthEXTRACTIMAGENAMES=function(){var m=this.REF,r=l.mR(this,cO,"ExtractImageNames",101);var C0=r.cR("IMAGENAMESSTRING","PRIM_ALPH");var C1=r.cF("LIMIT",Fd.F1.Dc);var C2=r.cF("INDEX",Fd.F1.Dc);var C3=r.cR("CURRENTCHAR","PRIM_ALPH");var C4=r.cD("C4");C0.iC();C1.iC();C2.iC();C3.iC();r.ln=101;{r.ln=110;C0.set(l.cat(l.cat(l.s.Trim(this.getAVALPHAARG1())," "),l.s.Trim(this.getAVALPHAARG2())));
r.ln=114;C1.set(l.s.CurChars(C0.get()));r.ln=116;for(var i1=1,s1=1,t1=l.tI(C1.get());C2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=117;C3.set(l.s.Substring(C0.get(),C2.get(),1));r.ln=118;if(l.tB(l.s.eq(C3.get()," "))){r.ln=119;if((C4!=null)){r.ln=120;m.IMAGENAMECOLLECTION.mthINSERT(C4);r.ln=121;C4=r.sR("C4",null);}}else{r.ln=124;if((C4==null)){r.ln=125;C4=r.sR("C4",l.cC("PRIM_ALPH"));}r.ln=127;C4.set(l.cat(C4.get(),C3.get()));}}r.ln=132;if((C4!=null)){r.ln=133;m.IMAGENAMECOLLECTION.mthINSERT(C4);
}}r.ln=136;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PrevButton.Click",139);r.ln=139;{r.ln=141;m.NEXTIMAGETOSHOW.set(l.sub(m.NEXTIMAGETOSHOW.get(),1));r.ln=142;this.mthSHOWIMAGE();}r.ln=144;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#NextButton.Click",147);r.ln=147;{r.ln=149;m.NEXTIMAGETOSHOW.set(l.add(m.NEXTIMAGETOSHOW.get(),1));r.ln=150;this.mthSHOWIMAGE();}r.ln=152;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});
}},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_ATLM","PRIM_IMAG","PRIM_PANL","PRIM_PHBN","PRIM_ACOL","PRIM_FLD"],dp:["PRIM_ALPH"]});