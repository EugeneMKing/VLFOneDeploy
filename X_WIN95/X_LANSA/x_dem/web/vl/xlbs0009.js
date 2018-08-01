// -----------------------------
// -- Reusable Part: XLBS0009 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBS0009", 
   nm: "XWebApi_OAuth2AuthorizationScope", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Web API: OAuth2 Authorization Scope", 
   tl: 14020008
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   if ( Lansa.getCurrentLanguage() == "FRA" )
   {
      curLanguage = Lansa.getCurrentLanguage();
   }

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XLBS0013:
      {
         nm: "XLBS0013",
         an: "XWebApi_OAuth2AuthorizationScopeField",
         ft: "N",
         ln: 500,
         dc: 0,
         lb: "OAuth2 Authoriz",
         h1: "OAuth2",
         h2: "Authorization",
         h3: "Scope",
         de: "Web API: OAuth2 Authorization Scope",
         dv: "",
         ia: [ "FE", "LC" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_OBJT", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         Scope: 
         {
            da: "rw"
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

         // -------------------
         // -- Create Fields --
         // -------------------
         var fld = this.addFields( "XLBS0009", Fields );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "XLBS0013": fld.XLBS0013 } );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // DEFINE_PTY Name(Scope) Get(*AUTO #XWebApi_OAuth2AuthorizationScopeField) Set(*AUTO #XWebApi_OAuth2AuthorizationScopeField)
   //
   COM_OWNER.getSCOPE = function()
   {
      var fld = this.FLD.XLBS0009;

      return fld.XLBS0013.get();
   };

   COM_OWNER.setSCOPE = function( value )
   {
      var fld = this.FLD.XLBS0009;

      fld.XLBS0013.set( value );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xlbs0009.js
