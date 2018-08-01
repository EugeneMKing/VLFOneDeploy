LANSA.addComponent({id:"VF_SY017O",ot:"ww",tp:"Widget",de:"\\OC=VLF-ONE System Services Widget",tl:14000101,cl:14020008},function(l,oI,u){var fF=function(wP){wP.fireVisibilityChanged=function(){l.fE(this,"VISIBILITYCHANGED");};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.zInt_Initialize = function ()
{
var pThis = this;
var visibilityChangeEvent;
this.hiddenProperty = "UNKNOWN";
if (typeof document.hidden !== "undefined")
{ // Opera 12.10 and Firefox 18 and later support
this.hiddenProperty = "hidden";
visibilityChangeEvent = "visibilitychange";
} else if (typeof document.msHidden !== "undefined")
{
this.hiddenProperty = "msHidden";
visibilityChangeEvent = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined")
{
this.hiddenProperty = "webkitHidden";
visibilityChangeEvent = "webkitvisibilitychange";
}
this.handleVisibilityChange = function (e) { pThis.fireVisibilityChanged(); };
document.addEventListener(visibilityChangeEvent, this.handleVisibilityChange, false);
}
PROTOTYPE.zInt_Terminate = function ()
{
}
PROTOTYPE.getBrowserHidden = function ()
{
var bResult = false;
if ( document[this.hiddenProperty] ) bResult = true;
return bResult;
}
PROTOTYPE.setBrowserHidden = function (bValue)
{
}
return WIDGET.Completed;
}
;
l.rWg({nm:"VF_SY017O",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setBROWSERHIDDEN(false);}});cO.getBROWSERHIDDEN=function(){return l.tB(this.get("BrowserHidden"));};cO.setBROWSERHIDDEN=function(v){this.set("BrowserHidden",l.tB(v));};cO.mthZINT_INITIALIZE=function(){this.invoke("zInt_Initialize");};cO.mthZINT_TERMINATE=function(){this.invoke("zInt_Terminate");};},{rp:["PRIM_WDGT.Object"]});