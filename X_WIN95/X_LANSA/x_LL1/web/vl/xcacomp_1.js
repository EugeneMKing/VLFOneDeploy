LANSA.addComponent({id:"XCACOMP_1",nm:"XCAComposeSMS",ot:"ww",tp:"Widget",de:"Launch SMS editor on device",tl:14000101,cl:14020008},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.getTo = function()
{
return this.m_To;
}
PROTOTYPE.setTo = function( strValue )
{
if(typeof strValue !== "string")
{
strValue = "";
}
this.m_To = strValue.trim();
}
PROTOTYPE.getBody = function()
{
return this.m_Body;
}
PROTOTYPE.setBody = function( strValue )
{
if(typeof strValue !== "string")
{
strValue = "";
}
this.m_Body = strValue;
}
PROTOTYPE.Compose = function()
{
var target = this.m_To.replace(/ /g, "");
var link = "sms:" + encodeURI(target);
if(this.m_Body.length > 0)
{
if(navigator.platform.match(/iPhone|iPod|iPad/))
{
link += "&";
}
else
{
link += "?";
}
link += "body=" + encodeURIComponent(this.m_Body);
}
document.location.href = link;
}
PROTOTYPE.onCreateInstance = function()
{
this.m_To = "";
this.m_Body = "";
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XCACOMP_1",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setTO("");this.setBODY("");}});cO.getTO=function(){return l.tS(this.get("To"));};cO.setTO=function(v){this.set("To",l.tS(v));};cO.getBODY=function(){return l.tS(this.get("Body"));};cO.setBODY=function(v){this.set("Body",l.tS(v));};cO.mthCOMPOSE=function(){this.invoke("Compose");};},{rp:["PRIM_WDGT.Object"]});