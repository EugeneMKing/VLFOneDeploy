﻿LANSA.addComponent({id:"UF_OHEADP",ot:"rp",tp:"Reusable Part",de:"\\OC=VLF-ONE example logon header panel",tl:14020008},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C2=this.cR("ATTACH_LARGETEXTMESSAGE","PRIM_ATLI");var C3=this.cR("ATTACH_SMALLTEXTMESSAGE","PRIM_ATLI");var C4=this.cR("LARGETEXTMESSAGE","PRIM_LABL");var C5=this.cR("SMALLTEXTMESSAGE","PRIM_LABL");var C6=this.cR("LARGETEXT","PRIM_VS","Style");
var C7=this.cR("SMALLTEXT","PRIM_VS","Style");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setManage(C4);C2.setParent(C1);C2.setAttachment("TOP");C2.iC();C3.setManage(C5);C3.setParent(C1);C3.setAttachment("CENTER");C3.setMarginLeft(6);C3.iC();C4.setParent(this);C4.setDisplayPosition(2);C4.setTabPosition(2);C4.setTabStop(false);C4.setHeight(56);C4.setLeft(0);C4.setTop(0);C4.setWidth(335);C4.setStyle(C6);C4.setVerticalAlignment("CENTER");C4.setAlignment("CENTER");C4.setCaption("Welcome - Desktop Mode");
C4.iC();C5.setParent(this);C5.setDisplayPosition(1);C5.setTabPosition(1);C5.setTabStop(false);C5.setHeight(33);C5.setTop(56);C5.setWidth(329);C5.setStyle(C7);C5.setVerticalAlignment("CENTER");C5.setCaption("Welcome");C5.setLeft(6);C5.setAlignment("CENTER");C5.iC();C6.setFontSize(24);C6.setTextColor("BLUE");C6.setFontUnits("PIXEL");C6.iC();C7.setFontSize(11);C7.setTextColor("BLACK");C7.setFontUnits("PIXEL");C7.iC();this.setDisplayPosition(1);this.setHeight(89);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setWidth(335);this.setLayoutManager(C1);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",41);r.ln=41;{r.ln=43;if(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVLARGESCREEN()){r.ln=44;m.LARGETEXT.setFontSize(16);}r.ln=47;m.SMALLTEXTMESSAGE.set(l.cat(l.cat("For a Windows server enter any user and password.",l.n.AsUnicodeString(10)),"For an IBM i server enter a valid user's credentials."));r.ln=49;if(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVLARGESCREEN())
{r.ln=50;if(m.USYSTEM.ref.getUIMATERIALDESIGN()){r.ln=51;m.LARGETEXTMESSAGE.set("Welcome - Material Desktop Mode");}else{r.ln=53;m.LARGETEXTMESSAGE.set("Welcome - Windows Desktop Mode");}r.e();return;}r.ln=58;if(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVSMALLSCREEN()){r.ln=59;m.LARGETEXTMESSAGE.set("Welcome - Phone Mode");r.e();return;}r.ln=63;if(m.USYSTEM.ref.getUFRAMEWORKMANAGER().getAVMEDIUMSCREEN()){r.ln=64;m.LARGETEXTMESSAGE.set("Welcome - Tablet Mode");r.e();return;}}r.ln=68;r.e();};},{rc:["VF_SY001O"],
rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_VS.Style"]});