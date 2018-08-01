// -----------------------------
// -- Reusable Part: VLFMAS_3 --
// -----------------------------
LANSA.addComponent(
{
   id: "VLFMAS_3", 
   nm: "VLFMASTER_SettingsPane", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "SETTINGSPANE handler", 
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
      VF_ELSYMN:
      {
         nm: "VF_ELSYMN",
         an: "VF_ELSYMNAME",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: "Image Name",
         h1: "Image",
         h2: "Name",
         h3: " ",
         de: "Image Name",
         dv: "",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "VF_AC030O", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         uInitialize: 
         {
         },

         uTerminate: 
         {
         },

         uDisplayRequested: 
         {
            ps: 
            {
               "AdditionalRequestdetails":
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

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "VLFMAS_3", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem1) Manage(#TemporaryMessage) Parent(#MainPanelAttachmentManager) Attachment(Center)
         //
         var ATTACHITEM1 = this.createReference( "ATTACHITEM1", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#Prim_Labl) Name(#TemporaryMessage) Displayposition(1) Tabstop(False) Parent(#COM_OWNER) Tabposition(1) Height(439) Left(0) Top(0) Width(327) Style(#BigText) Alignment(Center) Verticalalignment(Center) Caption('This is your custom settings pane. Delete this label and add your own content.')
         //
         var TEMPORARYMESSAGE = this.createReference( "TEMPORARYMESSAGE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#Prim_vs.Style) Name(#BigText) Fontsize(19) Fontunits(Pixel) Textcolor(18:69:114)
         //
         var BIGTEXT = this.createReference( "BIGTEXT", "PRIM_VS", "Style" );

         // -----------------------------
         // -- Initialize #ATTACHITEM1 --
         // -----------------------------
         ATTACHITEM1.setManage( TEMPORARYMESSAGE );
         ATTACHITEM1.setParent( this.REF.MAINPANELATTACHMENTMANAGER );
         ATTACHITEM1.setAttachment( "CENTER" );
         ATTACHITEM1.initialize();

         // ----------------------------------
         // -- Initialize #TEMPORARYMESSAGE --
         // ----------------------------------
         TEMPORARYMESSAGE.setDisplayPosition( 1 );
         TEMPORARYMESSAGE.setTabStop( false );
         TEMPORARYMESSAGE.setParent( this );
         TEMPORARYMESSAGE.setTabPosition( 1 );
         TEMPORARYMESSAGE.setHeight( 439 );
         TEMPORARYMESSAGE.setLeft( 0 );
         TEMPORARYMESSAGE.setTop( 0 );
         TEMPORARYMESSAGE.setWidth( 327 );
         TEMPORARYMESSAGE.setStyle( BIGTEXT );
         TEMPORARYMESSAGE.setAlignment( "CENTER" );
         TEMPORARYMESSAGE.setVerticalAlignment( "CENTER" );
         TEMPORARYMESSAGE.setCaption( "This is your custom settings pane. Delete this label and add your own content." );
         TEMPORARYMESSAGE.initialize();

         // -------------------------
         // -- Initialize #BIGTEXT --
         // -------------------------
         BIGTEXT.setFontSize( 19 );
         BIGTEXT.setFontUnits( "PIXEL" );
         BIGTEXT.setTextColor( "18:69:114" );
         BIGTEXT.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setWidth( 327 );
      }
   });

   // ------------------
   // -- COM_ANCESTOR --
   // ------------------
   var COM_ANCESTOR = COM_OWNER.Ancestor.prototype;

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthGET_UHINT - Get_uHint
   //
   COM_OWNER.mthGET_UHINT = function()
   {
      var rtn = Lansa.ptyRoutine( this, COM_OWNER, "Get_uHint", 24 );

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(ReturnHint) For(*OUTPUT)
      //
      var RETURNHINT = rtn.createParameter( "RETURNHINT", "PRIM_DC", "UnicodeString" );

      //
      // PTYROUTINE Name(Get_uHint) Options(*REDEFINE)
      //
      rtn.Line( 24 );
      {

         //
         // #ReturnHint := #COM_ANCESTOR.uHint
         //
         rtn.Line( 25 );
         RETURNHINT.set( this.getUHINT() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      return rtn.retVal( RETURNHINT.get() );
   };

   //
   // mthGET_UIMAGENAME - Get_uImageName
   //
   COM_OWNER.mthGET_UIMAGENAME = function()
   {
      var rtn = Lansa.ptyRoutine( this, COM_OWNER, "Get_uImageName", 30 );

      //
      // DEFINE_MAP Class(#VF_ELSYMN.DataClass) Name(ReturnImageName) For(*OUTPUT)
      //
      var RETURNIMAGENAME = rtn.createFieldParameter( "RETURNIMAGENAME", Fields.VF_ELSYMN.DataClass );

      //
      // PTYROUTINE Name(Get_uImageName) Options(*REDEFINE)
      //
      rtn.Line( 30 );
      {

         //
         // #ReturnImageName := #COM_ANCESTOR.uImageName
         //
         rtn.Line( 31 );
         RETURNIMAGENAME.set( this.getUIMAGENAME() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 32 );
      return rtn.retVal( RETURNIMAGENAME.get() );
   };

   //
   // mthUINITIALIZE - uInitialize
   //
   COM_OWNER.mthUINITIALIZE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uInitialize", 36 );

      //
      // MTHROUTINE Name(uInitialize) Options(*REDEFINE)
      //
      rtn.Line( 36 );
      {

         //
         // #COM_ANCESTOR.uInitialize
         //
         rtn.Line( 37 );
         COM_ANCESTOR.mthUINITIALIZE.call( this );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 38 );
      rtn.end();
   };

   //
   // mthUTERMINATE - uTerminate
   //
   COM_OWNER.mthUTERMINATE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uTerminate", 42 );

      //
      // MTHROUTINE Name(uTerminate) Options(*REDEFINE)
      //
      rtn.Line( 42 );
      {

         //
         // #COM_ANCESTOR.uTerminate
         //
         rtn.Line( 43 );
         COM_ANCESTOR.mthUTERMINATE.call( this );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 44 );
      rtn.end();
   };

   //
   // mthUDISPLAYREQUESTED - uDisplayRequested
   //
   COM_OWNER.mthUDISPLAYREQUESTED = function( parm_ADDITIONALREQUESTDETAILS )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uDisplayRequested", 48 );

      //
      // DEFINE_MAP Class(#PRIM_OBJT) Name(AdditionalRequestdetails) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var ADDITIONALREQUESTDETAILS = rtn.createDynamicParameter( "ADDITIONALREQUESTDETAILS" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ADDITIONALREQUESTDETAILS = parm_ADDITIONALREQUESTDETAILS;

      //
      // MTHROUTINE Name(uDisplayRequested) Options(*REDEFINE)
      //
      rtn.Line( 48 );
      {

         //
         // #COM_ANCESTOR.uDisplayRequested Additionalrequestdetails(#AdditionalRequestdetails)
         //
         rtn.Line( 50 );
         COM_ANCESTOR.mthUDISPLAYREQUESTED.call( this, ADDITIONALREQUESTDETAILS );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      rtn.end();
   };

   // ------------------------------
   // -- VF_ELSYMN Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.VF_ELSYMN.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.VF_ELSYMN );
      };

      Lansa.createFieldClass( { co: Fields.VF_ELSYMN.DataClass, an: "PRIM_FLD", fn: "VF_ELSYMN" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC030O" ],
   rp: [ "PRIM_ATLI", "PRIM_LABL", "PRIM_VS.Style", "PRIM_FLD" ]
});

//# sourceURL=vlfmas_3.js
