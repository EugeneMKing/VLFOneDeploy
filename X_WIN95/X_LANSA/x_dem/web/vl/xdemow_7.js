﻿LANSA.addComponent({id:"XDEMOW_7",nm:"xDemoWebTraceHandler",ot:"rp",tp:"Reusable Part",de:"Web Trace Handler",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",im:["PRIM_APP.ITraceHandler"],rm:["dt"],mt:{TraceMessage:{ps:{"ComponentName":{pt:"i"},"Description":{pt:"i"},"LineNumber":{pt:"i"},"MessageText":{pt:"i"}}},WriteToConsole:{ps:{"ComponentName":{pt:"i"},"Description":{pt:"i"},"LineNumber":{pt:"i"},"Message":{pt:"i"}}},TracingState:{ps:{"MessageTracingActive":{pt:"o"}}}},co:function()
{cO.aN.call(this);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_Owner.CreateInstance",9);r.ln=9;{r.ln=11;{var l1=l.WEB().getURLParameters().cI();while(l1.step()){var PARAMETER=r.sR("PARAMETER",l1.item());r.ln=13;if(l.s.ne(l.s.UpperCase(PARAMETER.getName()),"TRACE")){continue;}r.ln=14;if(l.s.ne(l.s.UpperCase(PARAMETER.getValue()),"TRUE")){continue;}r.ln=16;l.APPL().setTraceHandler(this);r.ln=18;break;r.ln=20;}l1.end();r.dR("PARAMETER");}}r.ln=22;r.e();};cO.mthTRACEMESSAGE=function(p0,p1,p2,p3)
{var r=l.mR(this,cO,"TraceMessage",24);var P0=r.cPs("COMPONENTNAME");var P1=r.cPs("DESCRIPTION");var P2=r.cPi("LINENUMBER");var P3=r.cPs("MESSAGETEXT");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);r.ln=24;{r.ln=26;cO.mthWRITETOCONSOLE.call(this,P0.get(),P1.get(),P2.get(),P3.get());}r.ln=28;r.e();};cO.mthWRITETOCONSOLE=function(p0,p1,p2,p3){var r=l.mR(this,cO,"WriteToConsole",30);var P0=r.cP("COMPONENTNAME","PRIM_STR");var P1=r.cP("DESCRIPTION","PRIM_STR");var P2=r.cP("LINENUMBER","PRIM_NMBR");var P3=r.cP("MESSAGE","PRIM_STR");
P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);var C0=r.cR("NOW","PRIM_DAT");C0.iC();r.ln=30;{r.ln=38;P3.set(l.add(l.cat(l.cat(l.cat(l.add(l.cat(l.add(l.cat(l.s.RightTrim(l.dt.AsString(l.dt.AsLocalizedDateTime(l.dt.Now(C0.get()))),"0")," "),P0.get())," "),P1.get())," "),l.n.AsString(P2.get()))," "),P3.get()));r.ln=40;l.WEB().getConsole().mthLOG(P3.get());}r.ln=42;r.e();};cO.mthTRACINGSTATE=function(p0){var r=l.mR(this,cO,"TracingState",44);var P0=r.cPb("MESSAGETRACINGACTIVE");r.ln=44;{r.ln=46;P0.set(true);
p0.set(P0.get());}r.ln=48;r.e();};},{rp:["PRIM_OBJT","PRIM_DTIM"],dp:["PRIM_DAT"]});