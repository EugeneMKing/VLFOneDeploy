﻿LANSA.addComponent({id:"VF_CH012O",ot:"rp",tp:"Reusable Part",de:"\\OC=Delete User Details",tl:14020008},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_CH012O",Fd);var C0=this.cA("USERVERINTERFACE","VF_SY169O");
if((C0!=null)&&(C0.iI()==false)){C0.iC();}this.setHeight(425);this.setWidth(681);this.setVerticalScroll(true);}});var cA=cO.aN.prototype;cO.mthUEXECUTE=function(p0,p1){var f=this.FLD.VF_CH012O,m=this.REF,r=l.mR(this,cO,"uExecute",13);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;var C0=r.cF("DELETERESULT",Fd.F1.Dc);var C1=r.cR("SERIALNAMEDPROPERTYSTREAM","PRIM_ACOL");var C2=r.cR("USERGROUPS","PRIM_ACOL");var C3=r.cF("RETURNCODE",Fd.F1.Dc);var C4=r.cR("REQUEST","PRIM_ALPH");
var C5=r.cR("NEXTREQUEST","PRIM_ALPH");var C6=r.cD("C6");C0.iC();C1.setCollects("VF_SY183O");C1.iC();C2.setCollects("VF_SY182O");C2.iC();C3.iC();C4.iC();C5.iC();C1.aLF({});C2.aLF({});r.ln=13;{r.ln=23;cA.mthUEXECUTE.call(this,P0,P1);r.ln=27;C6=r.sR("C6",this.REF.AVLISTMANAGER.getCURRENTINSTANCE());r.ln=29;if((C6!=null)){r.ln=31;C0.set(l.WEB().mthCONFIRM(l.add(l.cat(this.REF.USYSTEM.ref.getUMTXTVALUES("CONFDELUSER"),": "),C6.getAVVISUALID1().get())));r.ln=33;if(l.s.eq(C0.get(),"OK")){r.ln=35;C4.set("DELETE");
r.ln=37;m.USERVERINTERFACE.ref.mthZINT_HANDLEUSERSERVICEREQUEST(C4.get(),C6.getAVVISUALID1().get(),C6.getAVAKEY1().get(),C2,C1,this.REF.AVFRAMEWORKMANAGER.mthGETMESSAGEASSIGNEDCOLLECTIONNUMBER(this,false),C3,C5);r.ln=39;if(l.s.eq(C3.get(),"OK")){r.ln=43;this.REF.UFRAMEWORK.ref.mthZINT_SIGNALUSERDELETED(C6.getAVAKEY1().get());}else{r.ln=46;l.WEB().mthALERT(l.cat(l.cat(l.add(l.cat(l.add("UServerInterface.HandleUserServiceRequest ",this.REF.USYSTEM.ref.getUMTXTVALUES("FAILED")),". "),this.REF.USYSTEM.ref.getUMTXTVALUES("RETURNCODE")),": "),C3.get()));
}}}r.ln=53;P0.set(true);p0.set(P0.get());}r.ln=55;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O","VF_SY169O"],rp:["PRIM_FLD"],dc:["VF_LM003O","VF_SY183O","VF_SY182O"],dp:["PRIM_ACOL","PRIM_ALPH"]});