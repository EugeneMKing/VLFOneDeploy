LANSA.addComponent({id:"XCADIALPH",nm:"XCADialPhone",ot:"ww",tp:"Widget",de:"Dial a phone number",tl:14000101,cl:14020008},function(l,oI,u){var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.Dial = function( strPhoneNumber )
{
window.location.href = "tel:" + encodeURI(strPhoneNumber.replace(/ /g, ""));
}
PROTOTYPE.onCreateInstance = function()
{
}
return WIDGET.Completed;
}
;l.rWg({nm:"XCADIALPH",fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthDIAL=function(P0)
{this.invoke("Dial",[l.tS(P0)]);};},{rp:["PRIM_WDGT.Control"]});