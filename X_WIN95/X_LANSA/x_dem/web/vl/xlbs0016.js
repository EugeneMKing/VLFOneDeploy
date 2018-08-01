// --------------------------
// -- Web Widget: XLBS0016 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBS0016", 
   nm: "XWebModule_Widget_OAuth2Login_Util", 
   ot: "ww", 
   tp: "Widget", 
   de: "Web API: OAuth2 Login Util", 
   tl: 14000101, 
   cl: 14020008
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      function( PROTOTYPE, WIDGET )
      {
          function getSystemInfo()
          {
              var location = document.location;
              var pathElements = location.pathname.split("/");
              var searchElements = location.search.substring(1).split("&");
      
              var queries = { };
              for(var i = 0; i < searchElements.length; i++)
              {
                  var keyValuePair = searchElements[i].split("=");
                  var key = keyValuePair[0];
                  var value = keyValuePair[1];
                  queries[key] = decodeURIComponent(value);
              }
      
              return {
                  host: location.host,
                  system: pathElements[1],
                  partition: pathElements[2],
                  language: queries["lang"]
              };
          }
      
          PROTOTYPE.GetOAuth2CallbackUrl = function()
          {
              var sysInfo = getSystemInfo();
              var location = document.location;
              
              return location.protocol + "//" + sysInfo.host + "/" + sysInfo.system + "/" + sysInfo.partition + "/xlbs0015.html";
          }
      
      
         return WIDGET.Completed;
      }
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBS0016", 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Object", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   COM_OWNER.mthGETOAUTH2CALLBACKURL = function()
   {
      return Lansa.toString( this.invoke( "GetOAuth2CallbackUrl" ) );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Object" ]
});

//# sourceURL=xlbs0016.js
