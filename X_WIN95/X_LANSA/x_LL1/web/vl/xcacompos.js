LANSA.addComponent({id:"XCACOMPOS",nm:"XCAComposeEmail",ot:"ww",tp:"Widget",de:"Launch the default email editor",tl:14000101,cl:14020008},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.Compose = function()
{
function generateRecipientString(list, separator)
{
return list.join(separator);
}
function addUrlParam(link, name, value)
{
if(value.length > 0)
{
link += name + "=" + encodeURIComponent(value) + "&";
}
return link;
}
var link = "mailto:";
link += generateRecipientString(this.m_To, ",");
link += "?";
link = addUrlParam(link, "subject", this.m_Subject);
link = addUrlParam(link, "body", this.m_Body);
link = addUrlParam(link, "cc", generateRecipientString(this.m_Cc, ","));
link = addUrlParam(link, "bcc", generateRecipientString(this.m_Bcc, ","));
document.location.href = link;
}
PROTOTYPE.getSubject = function()
{
return this.m_Subject;
}
PROTOTYPE.setSubject = function( strValue )
{
if(typeof strValue !== "string") strValue = "";
this.m_Subject = strValue;
}
PROTOTYPE.getBody = function()
{
return this.m_Body;
}
PROTOTYPE.setBody = function( strValue )
{
if(typeof strValue !== "string") strValue = "";
this.m_Body = strValue;
}
PROTOTYPE.addRecipient = function( strEmail )
{
this.m_To.push(strEmail);
}
PROTOTYPE.addCC = function( strEmail )
{
this.m_Cc.push(strEmail);
}
PROTOTYPE.addBCC = function( strEmail )
{
this.m_Bcc.push(strEmail);
}
PROTOTYPE.onCreateInstance = function()
{
this.m_Body = "";
this.m_Subject = "";
this.m_To = [];
this.m_Cc = [];
this.m_Bcc = [];
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCACOMPOS",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setSUBJECT("");this.setBODY("");}});cO.getSUBJECT=function(){return l.tS(this.get("Subject"));};cO.setSUBJECT=function(v){this.set("Subject",l.tS(v));};cO.getBODY=function(){return l.tS(this.get("Body"));};cO.setBODY=function(v){this.set("Body",l.tS(v));};cO.mthADDRECIPIENT=function(P0){this.invoke("addRecipient",[l.tS(P0)]);};cO.mthADDCC=function(P0){this.invoke("addCC",[l.tS(P0)]);};cO.mthADDBCC=function(P0)
{this.invoke("addBCC",[l.tS(P0)]);};cO.mthCOMPOSE=function(){this.invoke("Compose");};},{rp:["PRIM_WDGT.Control"]});