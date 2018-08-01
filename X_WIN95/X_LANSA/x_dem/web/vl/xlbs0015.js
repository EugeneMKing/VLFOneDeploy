// ------------------------
// -- Web Page: XLBS0015 --
// ------------------------
LANSA.addComponent(
{
   id: "XLBS0015", 
   nm: "XWebModule_WebPage_OAuth2Login_Callback", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Web API: OAuth2 Callback Landing Webpage", 
   tl: 14020008
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XWebModule_Client_OAuth2Login) Name(#ExtSignIn)
         //
         var EXTSIGNIN = this.createReference( "EXTSIGNIN", "XLBS0011" );

         // ---------------------------
         // -- Initialize #EXTSIGNIN --
         // ---------------------------
         EXTSIGNIN.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #EXTSIGNIN --
         // ---------------------------------------
         EXTSIGNIN.addEventHandler( "COMPLETED", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #ExtSignIn.Completed
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ExtSignIn.Completed", 5 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var OK = parms.ref( "OK" );
      var ERRORCODE = parms.ref( "ERRORCODE" );
      var ERRORMESSAGE = parms.ref( "ERRORMESSAGE" );
      var REDIRECTURL = parms.ref( "REDIRECTURL" );

      //
      // EVTROUTINE Handling(#ExtSignIn.Completed) Ok(#OK) Errorcode(#ErrorCode) Errormessage(#ErrorMessage) Redirecturl(#RedirectUrl)
      //
      rtn.Line( 5 );
      {

         //
         // IF (*Not #OK)
         //
         rtn.Line( 6 );
         if ( Lansa.toBool( Lansa.not( OK.get() ) ) )
         {

            //
            // #SYS_WEB.Alert Caption('Failed to login: ' + #ErrorMessage)
            //
            rtn.Line( 7 );
            Lansa.WEB().mthALERT( Lansa.add( "Failed to login: ", ERRORMESSAGE.get() ) );

         //
         // ENDIF 
         //
         }

         //
         // #SYS_WEB.Navigate Url(#RedirectUrl) Target(Current)
         //
         rtn.Line( 10 );
         Lansa.WEB().mthNAVIGATE( REDIRECTURL.get(), "CURRENT" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 11 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBS0011" ],
   rp: [ "PRIM_WEB" ]
});

//# sourceURL=xlbs0015.js
