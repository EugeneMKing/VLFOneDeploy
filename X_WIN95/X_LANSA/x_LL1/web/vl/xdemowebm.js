﻿LANSA.addComponent({id:"XDEMOWEBM",nm:"xDemoWebMessaging",ot:"wp",tp:"Web Page",de:"Messaging in the browser",tl:14020008},function(l,oI,u){var cL="ENG";if(l.gCL()=="FRA"){cL=l.gCL();}var Fd={F1:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:" ",de:"Unicode 128",dv:l.SqlNull,ia:["LC","ASQN"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOWEBM",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");
var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("ROW_3","PRIM_TBLO","Row");var C4=this.cR("ROW_4","PRIM_TBLO","Row");var C5=this.cR("COLUMN","PRIM_TBLO","Column");var C6=this.cR("SHOWALERT","PRIM_LABL");var C7=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C8=this.cR("SHOWPROMPT","PRIM_LABL");var C9=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C10=this.cR("SHOWCONFIRM","PRIM_LABL");var C11=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");var C12=this.cR("SHOWMESSAGEBOX","PRIM_LABL");var C13=this.cR("LAYOUTITEM_4","PRIM_TBLO","Item");
var C14=this.cR("STYLE_2","PRIM_VS","Style");var C15=this.cR("BRUSH","PRIM_VS","SolidBrush");var C16=this.cR("STYLE_3","PRIM_VS","Style");var C17=this.cR("BRUSH_2","PRIM_VS","SolidBrush");var C18=this.cR("STYLE_4","PRIM_VS","Style");var C19=this.cR("BRUSH_3","PRIM_VS","SolidBrush");var C20=this.cR("STYLE_5","PRIM_VS","Style");var C21=this.cR("BRUSH_4","PRIM_VS","SolidBrush");var C22=this.cR("MESSAGEBOX","PRIM_WEB","MessageBox");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);
C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(4);C4.setParent(C0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.iC();C6.setCaption("Alert");C6.setDisplayPosition(1);C6.setEllipses("WORD");C6.setLeft(4);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(4);C6.setVerticalAlignment("CENTER");C6.setHeight(192);C6.setWidth(1192);C6.setAlignment("CENTER");C6.setStyle(C14);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C5);C7.setFlow("DOWN");
C7.setManage(C6);C7.setParent(C0);C7.setRow(C1);C7.setMarginTop(4);C7.setMarginBottom(4);C7.setMarginLeft(4);C7.setMarginRight(4);C7.iC();C8.setCaption("Prompt");C8.setDisplayPosition(2);C8.setEllipses("WORD");C8.setLeft(4);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(204);C8.setVerticalAlignment("CENTER");C8.setHeight(192);C8.setWidth(1192);C8.setAlignment("CENTER");C8.setStyle(C16);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C5);C9.setFlow("DOWN");C9.setManage(C8);
C9.setParent(C0);C9.setRow(C2);C9.setMarginTop(4);C9.setMarginBottom(4);C9.setMarginLeft(4);C9.setMarginRight(4);C9.iC();C10.setCaption("Confirm");C10.setDisplayPosition(3);C10.setEllipses("WORD");C10.setLeft(4);C10.setParent(this);C10.setTabPosition(3);C10.setTabStop(false);C10.setTop(404);C10.setVerticalAlignment("CENTER");C10.setHeight(192);C10.setWidth(1192);C10.setAlignment("CENTER");C10.setStyle(C18);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C5);C11.setFlow("DOWN");C11.setManage(C10);
C11.setParent(C0);C11.setRow(C3);C11.setMarginTop(4);C11.setMarginBottom(4);C11.setMarginLeft(4);C11.setMarginRight(4);C11.iC();C12.setCaption("Message Box");C12.setDisplayPosition(4);C12.setEllipses("WORD");C12.setLeft(4);C12.setParent(this);C12.setTabPosition(4);C12.setTabStop(false);C12.setTop(604);C12.setVerticalAlignment("CENTER");C12.setHeight(192);C12.setWidth(1192);C12.setAlignment("CENTER");C12.setStyle(C20);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C5);C13.setFlow("DOWN");C13.setManage(C12);
C13.setParent(C0);C13.setRow(C4);C13.setMarginTop(4);C13.setMarginBottom(4);C13.setMarginLeft(4);C13.setMarginRight(4);C13.iC();C14.setBackgroundBrush(C15);C14.setFontSize(20);C14.setCornerTopLeft(3);C14.setCornerTopRight(3);C14.setCornerBottomLeft(3);C14.setCornerBottomRight(3);C14.setCursor("HAND");C14.iC();C15.setColor("255:13:7");C15.iC();C16.setBackgroundBrush(C17);C16.setFontSize(20);C16.setCornerTopLeft(3);C16.setCornerTopRight(3);C16.setCornerBottomLeft(3);C16.setCornerBottomRight(3);C16.setCursor("HAND");
C16.iC();C17.setColor("29:143:255");C17.iC();C18.setBackgroundBrush(C19);C18.setFontSize(20);C18.setCornerTopLeft(3);C18.setCornerTopRight(3);C18.setCornerBottomLeft(3);C18.setCornerBottomRight(3);C18.setCursor("HAND");C18.iC();C19.setColor("15:178:14");C19.iC();C20.setBackgroundBrush(C21);C20.setFontSize(20);C20.setCornerTopLeft(3);C20.setCornerTopRight(3);C20.setCornerBottomLeft(3);C20.setCornerBottomRight(3);C20.setCursor("HAND");C20.iC();C21.setColor("247:255:2");C21.iC();C22.iC();l.WEB().aH("CLOSEQUERY",this,e7);
C6.aH("CLICK",this,e2);C8.aH("CLICK",this,e4);C10.aH("CLICK",this,e3);C12.aH("CLICK",this,e5);C22.aH("CLOSED",this,e6);this.setLayoutManager(C0);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",32);r.ln=32;{r.ln=35;m.MESSAGEBOX.setTitle("Configurable Message Box");r.ln=37;m.MESSAGEBOX.setImage("INFORMATION");r.ln=39;m.MESSAGEBOX.getCaptions().mthADD("Multiple captions");r.ln=40;m.MESSAGEBOX.getCaptions().mthADD("Configurable image");
r.ln=41;m.MESSAGEBOX.getCaptions().mthADD("Choice of button set");}r.ln=43;r.e();};function e2(sender,Ps){var f=this.FLD.XDEMOWEBM,r=l.eR(this,cO,"#ShowAlert.Click",45);r.ln=45;{r.ln=47;f.F1.set("Alert");r.ln=49;l.WEB().mthALERT(f.F1.get());}r.ln=51;r.e();};function e3(sender,Ps){var f=this.FLD.XDEMOWEBM,m=this.REF,r=l.eR(this,cO,"#ShowConfirm.Click",53);r.ln=53;{r.ln=55;f.F1.set("Confirm");r.ln=58;if(l.s.eq(l.WEB().mthCONFIRM(f.F1.get()),"OK")){r.ln=60;m.SHOWCONFIRM.set("Confirm - OK");}else{r.ln=64;
m.SHOWCONFIRM.set("Confirm - Cancelled");}}r.ln=68;r.e();};function e4(sender,Ps){var f=this.FLD.XDEMOWEBM,m=this.REF,r=l.eR(this,cO,"#ShowPrompt.Click",70);r.ln=70;{r.ln=72;f.F1.set("Enter a value here");r.ln=75;if(l.s.eq(l.WEB().mthPROMPT("Prompt",f.F1),"OK")){r.ln=77;m.SHOWPROMPT.set(l.s.Substitute("Prompt &1",f.F1.get()));}else{r.ln=81;m.SHOWPROMPT.set("Prompt cancelled");}}r.ln=85;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ShowMessageBox.Click",87);r.ln=87;{r.ln=89;m.MESSAGEBOX.mthSHOW();
}r.ln=91;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MessageBox.Closed",93);r.ln=93;{r.ln=95;m.SHOWMESSAGEBOX.set(l.cat(m.SHOWMESSAGEBOX.get(),l.cat(" ",m.MESSAGEBOX.getResult())));}r.ln=97;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#sys_web.CloseQuery",99);var P0=Ps.r("QUERYSTRING");r.ln=99;{r.ln=101;P0.set("Closing the page will end the LANSA session");}r.ln=103;r.e();};},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LABL","PRIM_TBLO.Item","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_WEB.MessageBox"]
});