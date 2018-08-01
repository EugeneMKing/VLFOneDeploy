﻿LANSA.addComponent({id:"GITVLF_3",nm:"GITVLFONE__XCONTACTS_SCRUD_Filter",ot:"rp",tp:"Reusable Part",de:"Filter",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var m1={"ENG":"Refresh List","FRA":"Actualiser la liste"}[cL];var Fd={F1:{nm:"XCONLAME",an:"xContactLastName",ft:"NV",ln:50,dc:0,lb:"Last Name",h1:"Last Name",h2:" ",h3:" ",de:"Last Name",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl1,mt:"Last Name must be entered"}]},F2:{nm:"XCONFNAME",an:"xContactFirstName",
ft:"NV",ln:50,dc:0,lb:"First Name",h1:"First Name",h2:" ",h3:" ",de:"First Name",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",vi:"Y",vu:"U",vd:"N",rd:rl2,mt:"First Name must be entered"}]},F3:{nm:"XCONID",an:"xContactIdentification",ft:"I",ln:4,dc:0,lb:"Contact ID",h1:"Contact ID",h2:" ",h3:" ",de:"Contact ID",dv:0,ia:["FE","RB"]},F4:{nm:"XCONEMAIL",an:"xContactEmailAddress",ft:"NV",ln:200,dc:0,lb:"Email Address",h1:"Email Address",h2:" ",h3:" ",de:"Email Address",dv:"",ia:["FE","LC"],vr:[{wt:"N",wf:"E",
vi:"Y",vu:"U",vd:"N",rd:rl3,mt:"Email Address is not valid"}]},F5:{nm:"XCONPHMOB",an:"xContactMobilePhone",ft:"C",ln:15,dc:0,lb:"Mobile Phone",h1:"Mobile Phone",h2:" ",h3:" ",de:"Mobile Phone",dv:"",ia:["FE","RB"]},F6:{nm:"XCONJOBTL",an:"xContactJobTitle",ft:"NV",ln:50,dc:0,lb:"Job Title",h1:"Job Title",h2:" ",h3:" ",de:"Job Title",dv:"",ia:["FE","LC"]},F7:{nm:"XCONPHHME",an:"xContactHomePhone",ft:"C",ln:15,dc:0,lb:"Home Phone",h1:"Home Phone",h2:" ",h3:" ",de:"Home Phone",dv:"",ia:["FE","RB"]}};
var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uTerminate:{},uInitialize:{},avExecuteAsyncOperation:{ps:{"OperationID":{pt:"i"},"Parameter1":{pt:"i"},"Parameter2":{pt:"i"},"ParameterReference1":{pt:"i"},"ParameterReference2":{pt:"i"},"KillOtherPendingOperations":{pt:"o"},"ClearMessagesAfterDelay":{pt:"o"}}}},co:function(){cO.aN.call(this);var f=this.aF("GITVLF_3",Fd);this.cD("LOCALLISTMANAGERREFERENCE");this.setHeight(270);this.setWidth(500);var li=this.aL("GITVLF_3");li.INSTANCELIST_COLUMNS=l.cLT({"XCONLAME":f.F1,"XCONFNAME":f.F2,"XCONID":f.F3,"XCONEMAIL":f.F4,"XCONPHMOB":f.F5,"XCONJOBTL":f.F6,"XCONPHHME":f.F7},null);
}});var cA=cO.aN.prototype;cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",16);r.ln=16;{r.ln=18;this.srLOCALLISTMANAGERREFERENCE(null);r.ln=20;cA.mthUTERMINATE.call(this);}r.ln=21;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",23);r.ln=23;{r.ln=25;cA.mthUINITIALIZE.call(this);r.ln=27;this.setAVFILTERLOCATION("NONE");r.ln=28;this.mthAVCHANGECLEARLISTBUTTONCAPTION(m1);r.ln=29;this.srLOCALLISTMANAGERREFERENCE(this.getAVLISTMANAGER());r.ln=31;this.mthAVQUEUEASYNCOPERATION("LOADALLDATA",u,u,u,u,"Loading all Contacts",u,u,u,u,u);
}r.ln=32;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#LocalListManagerReference.ListCleared",34);var P0=Ps.r("FROMCLEARLISTBUTTON");r.ln=34;{r.ln=36;if(l.tB(P0.get())){r.ln=37;this.mthAVQUEUEASYNCOPERATION("LOADALLDATA",u,u,u,u,"Reloading all Contacts",u,u,u,true,u);}}r.ln=39;r.e();};cO.mthAVEXECUTEASYNCOPERATION=function(p0,p1,p2,p3,p4,p5,p6){var li=this.LIST.GITVLF_3,f=this.FLD.GITVLF_3,r=l.mR(this,cO,"avExecuteAsyncOperation",41),mth=r;var P0=r.cP("OPERATIONID","PRIM_DC","UnicodeString");
var P1=r.cP("PARAMETER1","PRIM_DC","UnicodeString");var P2=r.cP("PARAMETER2","PRIM_DC","UnicodeString");var P3=r.cPD("PARAMETERREFERENCE1");var P4=r.cPD("PARAMETERREFERENCE2");var P5=r.cP("KILLOTHERPENDINGOPERATIONS","PRIM_BOLN");var P6=r.cP("CLEARMESSAGESAFTERDELAY","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(p2);P3=p3;P4=p4;P6.set("FALSE");var C0=r.cR("SERVERMODULERESULT","PRIM_BOLN");var C1=r.cDR("LOADINSTANCELISTDATA","GITVLFO_1","LOADINSTANCELISTDATA");C0.iC();C1.iC();C1.aH("COMPLETED",this,e2);
C1.aH("FAILED",this,e3);r.ln=41;{r.ln=48;C1.mthEXECUTE({},{FLD:{"SERVERMODULERESULT":C0},LIST:{"INSTANCELIST_COLUMNS":li.INSTANCELIST_COLUMNS}});p5.set(P5.get());if(p6!==u){p6.set(P6.get());}}r.ln=65;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#LoadInstanceListData.Completed",50,mth);r.ln=50;{r.ln=52;this.REF.AVLISTMANAGER.mthCLEARLIST(u,u);r.ln=53;{var l1=li.INSTANCELIST_COLUMNS.selectList();while(l1.step()){r.ln=54;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F1.get(),f.F2.get(),u,u,u,u,u,f.F3.get(),u,u,u,u,u,u,u,u,u,u,u,u,f.F4.get(),f.F5.get(),f.F7.get(),f.F6.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);
r.ln=55;}l1.end();}r.ln=57;li.INSTANCELIST_COLUMNS.clearList();r.ln=59;P6.set(true);}r.ln=60;r.e();}function e3(sender,Ps){var r=l.eR(this,cO,"#LoadInstanceListData.Failed",62,mth);var P7=Ps.r("HANDLED");r.ln=62;{r.ln=63;P7.set(this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR(this,C0));}r.ln=64;r.e();}};function rl1(F1){return (l.n.gt(l.s.CurSize(F1.get()),0));};function rl2(F2){return (l.n.gt(l.s.CurSize(F2.get()),0));};function rl3(F4){return (l.or(l.n.eq(l.s.CurChars(l.s.Trim(F4.get())),0),l.s.IsValidEmail(F4.get())));
};cO.srLOCALLISTMANAGERREFERENCE=function(rn){if(this.REF.LOCALLISTMANAGERREFERENCE!=null){this.REF.LOCALLISTMANAGERREFERENCE.rH("LISTCLEARED",this,e1);}this.sR("LOCALLISTMANAGERREFERENCE",rn);if(this.REF.LOCALLISTMANAGERREFERENCE!=null){this.REF.LOCALLISTMANAGERREFERENCE.aH("LISTCLEARED",this,e1);}};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_WEB.DataRequest"],dc:["VF_LM002O"],
dp:["PRIM_BOLN"]});