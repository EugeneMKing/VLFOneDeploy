// -----------------------------
// -- Reusable Part: XLBS0011 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBS0011", 
   nm: "XWebModule_Client_OAuth2Login", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Web API: OAuth2 Login Client", 
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
      an: "PRIM_OBJT", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         IsSigningIn: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ShowSigninForm: 
         {
            ps: 
            {
               "IdentityProvider":
               {
                  pt: "i"
               },

               "AuthorizationScopes":
               {
                  pt: "i"
               }
            }
         },

         InvokeCallback: 
         {
            ps: 
            {
               "CallbackData":
               {
                  pt: "i"
               }
            }
         },

         OnLoginCompleted: 
         {
            ps: 
            {
               "OK":
               {
                  pt: "i"
               },

               "RedirectUrl":
               {
                  pt: "i"
               },

               "ErrorMessage":
               {
                  pt: "i"
               },

               "ErrorCode":
               {
                  pt: "i"
               }
            }
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         Completed: 
         {
            ps: 
            {
               "OK":
               {
                  pt: "i"
               },

               "RedirectUrl":
               {
                  pt: "i"
               },

               "ErrorCode":
               {
                  pt: "i"
               },

               "ErrorMessage":
               {
                  pt: "i"
               }
            }
         }
      },

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
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gIsLoggingIn)
         //
         var GISLOGGINGIN = this.createReference( "GISLOGGINGIN", "PRIM_BOLN" );

         // ------------------------------
         // -- Initialize #GISLOGGINGIN --
         // ------------------------------
         GISLOGGINGIN.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 14 );

      //
      // DEFINE_COM Class(#PRIM_WEB.URLParameter) Name(#StateUrlParam) Reference(*DYNAMIC)
      //
      var STATEURLPARAM = rtn.createDynamicReference( "STATEURLPARAM" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#CallbackData)
      //
      var CALLBACKDATA = rtn.createReference( "CALLBACKDATA", "PRIM_DC", "UnicodeString" );

      // ------------------------------
      // -- Initialize #CALLBACKDATA --
      // ------------------------------
      CALLBACKDATA.initialize();

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 14 );
      {

         //
         // #StateUrlParam <= #SYS_WEB.URLParameters<'state'>
         //
         rtn.Line( 19 );
         STATEURLPARAM = rtn.setref( "STATEURLPARAM", Lansa.WEB().getURLParameters().get( "state" ) );

         //
         // IF (#StateUrlParam *IsNot *Null)
         //
         rtn.Line( 20 );
         if ( ( STATEURLPARAM != null ) )
         {

            //
            // #CallbackData := #StateUrlParam.Value
            //
            rtn.Line( 21 );
            CALLBACKDATA.set( STATEURLPARAM.getValue() );

            //
            // #gIsLoggingIn := True
            //
            rtn.Line( 22 );
            ref.GISLOGGINGIN.set( true );

            //
            // #COM_SELF.InvokeCallback Callbackdata(#CallbackData)
            //
            rtn.Line( 24 );
            this.mthINVOKECALLBACK( CALLBACKDATA.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      rtn.end();
   };

   //
   // mthSHOWSIGNINFORM - ShowSigninForm
   //
   COM_OWNER.mthSHOWSIGNINFORM = function( parm_IDENTITYPROVIDER, parm_AUTHORIZATIONSCOPES )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowSigninForm", 28 ), mth = rtn;

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#IdentityProvider)
      //
      var IDENTITYPROVIDER = rtn.createParameter( "IDENTITYPROVIDER", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_LCOL<#XWebApi_OAuth2AuthorizationScope>) Name(#AuthorizationScopes) Pass(*BY_REFERENCE)
      //
      var AUTHORIZATIONSCOPES = rtn.createDynamicParameter( "AUTHORIZATIONSCOPES" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      IDENTITYPROVIDER.set( parm_IDENTITYPROVIDER );
      AUTHORIZATIONSCOPES = parm_AUTHORIZATIONSCOPES;

      //
      // DEFINE_COM Class(#XWebModule_Server_OAuth2Login.GetLoginUrl) Name(#GetLoginUrl)
      //
      var GETLOGINURL = rtn.createDataRequest( "GETLOGINURL", "XLBS0012", "GETLOGINURL" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#LoginUrl)
      //
      var LOGINURL = rtn.createReference( "LOGINURL", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#XWebModule_Widget_OAuth2Login_Util) Name(#Util)
      //
      var UTIL = rtn.createReference( "UTIL", "XLBS0016" );

      // -----------------------------
      // -- Initialize #GETLOGINURL --
      // -----------------------------
      GETLOGINURL.initialize();

      // --------------------------
      // -- Initialize #LOGINURL --
      // --------------------------
      LOGINURL.initialize();

      // ----------------------
      // -- Initialize #UTIL --
      // ----------------------
      UTIL.initialize();

      // -----------------------------------------
      // -- Add Event Handlers for #GETLOGINURL --
      // -----------------------------------------
      GETLOGINURL.addEventHandler( "COMPLETED", this, evtRoutine2 );

      //
      // MTHROUTINE Name(ShowSigninForm)
      //
      rtn.Line( 28 );
      {

         //
         // IF (#AuthorizationScopes *Is *Null)
         //
         rtn.Line( 36 );
         if ( ( AUTHORIZATIONSCOPES == null ) )
         {

            //
            // #AuthorizationScopes <= *New #PRIM_LCOL<#XWebApi_OAuth2AuthorizationScope>
            //
            rtn.Line( 37 );
            AUTHORIZATIONSCOPES = rtn.setref( "AUTHORIZATIONSCOPES", Lansa.createComponent( "PRIM_LCOL" ).typedBy( [ type1 ] ) );

         //
         // ENDIF 
         //
         }

         //
         // #GetLoginUrl.ExecuteAsync Currenturl(#SYS_WEB.URL) Callbackurl(#Util.GetOAuth2CallbackUrl) Identityprovider(#IdentityProvider) Authorizationscopes(#AuthorizationScopes) Result(#LoginUrl)
         //
         rtn.Line( 40 );
         GETLOGINURL.mthEXECUTEASYNC( { FLD: { "FLD_CURRENTURL": Lansa.WEB().getURL(), "FLD_CALLBACKURL": UTIL.mthGETOAUTH2CALLBACKURL(), "FLD_IDENTITYPROVIDER": IDENTITYPROVIDER.get() }, LIST: { "LIST_AUTHSCOPES": AUTHORIZATIONSCOPES } }, { FLD: { "FLD_LOGINURL": LOGINURL } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 45 );
      rtn.end();

      //
      // evtRoutine2 - #GetLoginUrl.Completed
      //
      function evtRoutine2( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetLoginUrl.Completed", 42, mth );

         //
         // EVTROUTINE Handling(#GetLoginUrl.Completed)
         //
         rtn.Line( 42 );
         {

            //
            // #SYS_WEB.Navigate Url(#LoginUrl) Target(Current)
            //
            rtn.Line( 43 );
            Lansa.WEB().mthNAVIGATE( LOGINURL.get(), "CURRENT" );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 44 );
         rtn.end();
      }
   };

   //
   // mthINVOKECALLBACK - InvokeCallback
   //
   COM_OWNER.mthINVOKECALLBACK = function( parm_CALLBACKDATA )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "InvokeCallback", 47 ), mth = rtn;

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#CallbackData)
      //
      var CALLBACKDATA = rtn.createParameter( "CALLBACKDATA", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CALLBACKDATA.set( parm_CALLBACKDATA );

      //
      // DEFINE_COM Class(#PRIM_WEB.URLParameter) Name(#CodeUrlParam) Reference(*DYNAMIC)
      //
      var CODEURLPARAM = rtn.createDynamicReference( "CODEURLPARAM" );

      //
      // DEFINE_COM Class(#XWebModule_Server_OAuth2Login.Callback) Name(#InvokeCallback)
      //
      var INVOKECALLBACK = rtn.createDataRequest( "INVOKECALLBACK", "XLBS0012", "CALLBACK" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage)
      //
      var ERRORMESSAGE = rtn.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorCode)
      //
      var ERRORCODE = rtn.createReference( "ERRORCODE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#RedirectUrl)
      //
      var REDIRECTURL = rtn.createReference( "REDIRECTURL", "PRIM_DC", "UnicodeString" );

      // --------------------------------
      // -- Initialize #INVOKECALLBACK --
      // --------------------------------
      INVOKECALLBACK.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      // ------------------------------
      // -- Initialize #ERRORMESSAGE --
      // ------------------------------
      ERRORMESSAGE.initialize();

      // ---------------------------
      // -- Initialize #ERRORCODE --
      // ---------------------------
      ERRORCODE.initialize();

      // -----------------------------
      // -- Initialize #REDIRECTURL --
      // -----------------------------
      REDIRECTURL.initialize();

      // --------------------------------------------
      // -- Add Event Handlers for #INVOKECALLBACK --
      // --------------------------------------------
      INVOKECALLBACK.addEventHandler( "COMPLETED", this, evtRoutine3 );
      INVOKECALLBACK.addEventHandler( "FAILED", this, evtRoutine4 );

      //
      // MTHROUTINE Name(InvokeCallback) Access(*PRIVATE)
      //
      rtn.Line( 47 );
      {

         //
         // #CodeUrlParam <= #SYS_WEB.URLParameters<'code'>
         //
         rtn.Line( 58 );
         CODEURLPARAM = rtn.setref( "CODEURLPARAM", Lansa.WEB().getURLParameters().get( "code" ) );

         //
         // IF (#CodeUrlParam *IsNot *Null)
         //
         rtn.Line( 61 );
         if ( ( CODEURLPARAM != null ) )
         {

            //
            // #InvokeCallback.ExecuteAsync Authorizationcode(#CodeUrlParam.Value) Ok(#OK) Errormesssage(#ErrorMessage) Errorcode(#ErrorCode) Callbackdata(#CallbackData) Redirecturl(#RedirectUrl)
            //
            rtn.Line( 62 );
            INVOKECALLBACK.mthEXECUTEASYNC( { FLD: { "FLD_AUTHORIZATIONCODE": CODEURLPARAM.getValue(), "FLD_CALLBACKDATA": CALLBACKDATA.get() } }, { FLD: { "FLD_OK": OK, "FLD_ERRORMESSAGE": ERRORMESSAGE, "FLD_ERRORCODE": ERRORCODE, "FLD_CURRENTURL": REDIRECTURL } } );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 78 );
      rtn.end();

      //
      // evtRoutine3 - #InvokeCallback.Completed
      //
      function evtRoutine3( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#InvokeCallback.Completed", 65, mth );

         //
         // EVTROUTINE Handling(#InvokeCallback.Completed)
         //
         rtn.Line( 65 );
         {

            //
            // IF (#OK)
            //
            rtn.Line( 66 );
            if ( Lansa.toBool( OK.get() ) )
            {

               //
               // #COM_SELF.OnLoginCompleted Ok(True) Redirecturl(#RedirectUrl)
               //
               rtn.Line( 67 );
               this.mthONLOGINCOMPLETED( true, REDIRECTURL.get(), undefined, undefined );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #COM_SELF.OnLoginCompleted Ok(False) Redirecturl(#RedirectUrl) Errormessage(#ErrorMessage) Errorcode(#ErrorCode)
               //
               rtn.Line( 69 );
               this.mthONLOGINCOMPLETED( false, REDIRECTURL.get(), ERRORMESSAGE.get(), ERRORCODE.get() );

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 71 );
         rtn.end();
      }

      //
      // evtRoutine4 - #InvokeCallback.Failed
      //
      function evtRoutine4( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#InvokeCallback.Failed", 73, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#InvokeCallback.Failed) Handled(#Handled)
         //
         rtn.Line( 73 );
         {

            //
            // #COM_SELF.OnLoginCompleted Ok(False) Redirecturl(#RedirectUrl) Errorcode(Fatal_Error) Errormessage('Failed to submit request')
            //
            rtn.Line( 74 );
            this.mthONLOGINCOMPLETED( false, REDIRECTURL.get(), "Failed to submit request", "FATAL_ERROR" );

            //
            // #Handled := True
            //
            rtn.Line( 76 );
            HANDLED.set( true );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 77 );
         rtn.end();
      }
   };

   //
   // mthONLOGINCOMPLETED - OnLoginCompleted
   //
   COM_OWNER.mthONLOGINCOMPLETED = function( parm_OK, parm_REDIRECTURL, parm_ERRORMESSAGE, parm_ERRORCODE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "OnLoginCompleted", 80 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createParameter( "OK", "PRIM_BOLN" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#RedirectUrl)
      //
      var REDIRECTURL = rtn.createParameter( "REDIRECTURL", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage) Mandatory('')
      //
      var ERRORMESSAGE = rtn.createParameter( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#ErrorCode) Mandatory('')
      //
      var ERRORCODE = rtn.createParameter( "ERRORCODE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      OK.set( parm_OK );
      REDIRECTURL.set( parm_REDIRECTURL );
      ERRORMESSAGE.set( ( parm_ERRORMESSAGE === undefined )  ?  ( "" ) : ( parm_ERRORMESSAGE ) );
      ERRORCODE.set( ( parm_ERRORCODE === undefined )  ?  ( "" ) : ( parm_ERRORCODE ) );

      //
      // MTHROUTINE Name(OnLoginCompleted)
      //
      rtn.Line( 80 );
      {

         //
         // SIGNAL Event(Completed) Ok(#OK) Redirecturl(#RedirectUrl) Errorcode(#ErrorCode) Errormessage(#ErrorMessage)
         //
         rtn.Line( 86 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createReference( "OK", "PRIM_BOLN" );
            evtParms.createReference( "REDIRECTURL", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "ERRORCODE", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

            evtParms.ref( "OK" ).set( OK.get() );
            evtParms.ref( "REDIRECTURL" ).set( REDIRECTURL.get() );
            evtParms.ref( "ERRORCODE" ).set( ERRORCODE.get() );
            evtParms.ref( "ERRORMESSAGE" ).set( ERRORMESSAGE.get() );

            this.fireEvent( "COMPLETED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(IsSigningIn) Get(*AUTO #gIsLoggingIn)
   //
   COM_OWNER.getISSIGNINGIN = function()
   {
      return this.REF.GISLOGGINGIN.get();
   };

   // -----------------------------------
   // -- Parameterized Type Parameters --
   // -----------------------------------
   var 
      type1 = { p: "XLBS0009" };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT", "PRIM_BOLN", "PRIM_WEB.DataRequest" ],
   dc: [ "XLBS0016" ],
   dp: [ "PRIM_WEB.URLParameter", "PRIM_DC.UnicodeString", "PRIM_BOLN" ]
});

//# sourceURL=xlbs0011.js
