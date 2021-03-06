﻿// -----------------------------
// -- Reusable Part: VLFDEMO_ --
// -----------------------------
LANSA.addComponent(
{
   id: "VLFDEMO_", 
   nm: "VLFDEMO_BottomSlider", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "SLIDERPANEBOTTOM handler", 
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
      an: "VF_AC028O", 

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
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem1) Manage(#TemporaryMessage) Parent(#CustomPanelBodyLayoutManager) Attachment(Center) Marginbottom(8) Marginleft(8) Marginright(8) Margintop(8)
         //
         var ATTACHITEM1 = this.createReference( "ATTACHITEM1", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#Prim_MD.Label) Name(#TemporaryMessage) Displayposition(1) Tabstop(False) Parent(#CustomPanelBody) Tabposition(1) Height(166) Left(8) Top(8) Width(849) Style(#BigText) CaptionAlignment(Center) Caption('This is your custom bottom pane slider VLFDEMO_BottomSlider. Delete this label and add your own content.') Wordwrap(True)
         //
         var TEMPORARYMESSAGE = this.createReference( "TEMPORARYMESSAGE", "PRIM_MD", "Label" );

         //
         // DEFINE_COM Class(#Prim_vs.Style) Name(#BigText) Fontsize(19) Fontunits(Pixel) Textcolor(18:69:114)
         //
         var BIGTEXT = this.createReference( "BIGTEXT", "PRIM_VS", "Style" );

         // ----------------------------
         // -- Initialize #CLOSEIMAGE --
         // ----------------------------
         this.REF.CLOSEIMAGE.setLeft( 833 );

         // ---------------------------------
         // -- Initialize #CUSTOMPANELBODY --
         // ---------------------------------
         this.REF.CUSTOMPANELBODY.setHeight( 182 );
         this.REF.CUSTOMPANELBODY.setWidth( 865 );

         // ---------------------------
         // -- Initialize #DOCKIMAGE --
         // ---------------------------
         this.REF.DOCKIMAGE.setLeft( 849 );

         // -----------------------------
         // -- Initialize #HEADERPANEL --
         // -----------------------------
         this.REF.HEADERPANEL.setWidth( 865 );

         // -----------------------------
         // -- Initialize #ATTACHITEM1 --
         // -----------------------------
         ATTACHITEM1.setManage( TEMPORARYMESSAGE );
         ATTACHITEM1.setParent( this.REF.CUSTOMPANELBODYLAYOUTMANAGER );
         ATTACHITEM1.setAttachment( "CENTER" );
         ATTACHITEM1.setMarginBottom( 8 );
         ATTACHITEM1.setMarginLeft( 8 );
         ATTACHITEM1.setMarginRight( 8 );
         ATTACHITEM1.setMarginTop( 8 );
         ATTACHITEM1.initialize();

         // ----------------------------------
         // -- Initialize #TEMPORARYMESSAGE --
         // ----------------------------------
         TEMPORARYMESSAGE.setDisplayPosition( 1 );
         TEMPORARYMESSAGE.setTabStop( false );
         TEMPORARYMESSAGE.setParent( this.REF.CUSTOMPANELBODY );
         TEMPORARYMESSAGE.setTabPosition( 1 );
         TEMPORARYMESSAGE.setHeight( 166 );
         TEMPORARYMESSAGE.setLeft( 8 );
         TEMPORARYMESSAGE.setTop( 8 );
         TEMPORARYMESSAGE.setWidth( 849 );
         TEMPORARYMESSAGE.setStyle( BIGTEXT );
         TEMPORARYMESSAGE.setCaptionAlignment( "CENTER" );
         TEMPORARYMESSAGE.setCaption( "This is your custom bottom pane slider VLFDEMO_BottomSlider. Delete this label and add your own content." );
         TEMPORARYMESSAGE.setWordWrap( true );
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
         this.setHeight( 200 );
         this.setWidth( 865 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthUINITIALIZE - uInitialize
   //
   COM_OWNER.mthUINITIALIZE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uInitialize", 27 );

      //
      // MTHROUTINE Name(uInitialize) Options(*REDEFINE)
      //
      rtn.Line( 27 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 29 );
      rtn.end();
   };

   //
   // mthUTERMINATE - uTerminate
   //
   COM_OWNER.mthUTERMINATE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uTerminate", 31 );

      //
      // MTHROUTINE Name(uTerminate) Options(*REDEFINE)
      //
      rtn.Line( 31 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 33 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC028O" ],
   rp: [ "PRIM_ATLI", "PRIM_MD.Label", "PRIM_VS.Style" ]
});

//# sourceURL=vlfdemo_.js
