﻿LANSA.addComponent({id:"VF_FL200O",ot:"rp",tp:"Reusable Part",de:"\\OC=Server Handler Filter",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC007O",mt:{uInitialize:{},uTerminate:{}},co:function(){cO.aN.call(this);var C0=this.cA("SERVERHANDLERMANAGER","VF_SY200O");if((C0!=null)&&(C0.iI()==false)){C0.iC();}}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",11);var C0=r.cD("C0");r.ln=11;{r.ln=16;cA.mthUINITIALIZE.call(this);r.ln=19;m.SERVERHANDLERMANAGER.ref.mthZINT_INITIALIZEFILTER(this,{set:function(rn){C0=r.sR("C0",rn)}});
r.ln=22;if((C0!=null)){r.ln=23;{var l1=C0.getCHILDREN().cI();while(l1.step()){var OBJECT=r.sR("OBJECT",l1.item());r.ln=25;if(l.Io(OBJECT,"VF_SY203O")){r.ln=27;l.WEB().mthALERT(l.add("Title=",l.cast(OBJECT,"VF_SY203O").getTITLE()));}r.ln=32;}l1.end();r.dR("OBJECT");}}}r.ln=36;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",39);r.ln=39;{r.ln=42;m.SERVERHANDLERMANAGER.ref.mthZINT_TERMINATEFILTER(this);r.ln=45;cA.mthUTERMINATE.call(this);}r.ln=47;r.e();};},{rc:["VF_AC007O","VF_SY200O"],
dc:["VF_SY202O"]});