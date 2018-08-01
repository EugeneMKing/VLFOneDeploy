// -----------------------------
// -- Reusable Part: VLFMAS_2 --
// -----------------------------
LANSA.addComponent(
{
   id: "VLFMAS_2", 
   nm: "VLFMASTER_AssistancePane", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "ASSISTANCEPANE handler", 
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
      an: "VF_AC031O", 
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
         },

         AddClickableURL: 
         {
            ps: 
            {
               "Caption":
               {
                  pt: "i"
               },

               "URL":
               {
                  pt: "i"
               },

               "Icon":
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
         this.addFields( "VLFMAS_2", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#Prim_acol<#Prim_MD.Label>) Name(#CollectLabels)
         //
         var COLLECTLABELS = this.createReference( "COLLECTLABELS", "PRIM_ACOL" );

         //
         // DEFINE_COM Class(#Prim_acol<#Prim_atli>) Name(#CollectAttachments)
         //
         var COLLECTATTACHMENTS = this.createReference( "COLLECTATTACHMENTS", "PRIM_ACOL" );

         //
         // DEFINE_COM Class(#Prim_Vs.Style) Name(#LikeURLStyle) Textcolor(Blue) Fontsize(13) Fontunits(Pixel)
         //
         var LIKEURLSTYLE = this.createReference( "LIKEURLSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#Prim_Vs.Style) Name(#LikeURLOverStyle) Underline(True) Cursor(Hand)
         //
         var LIKEURLOVERSTYLE = this.createReference( "LIKEURLOVERSTYLE", "PRIM_VS", "Style" );

         // -------------------------------
         // -- Initialize #COLLECTLABELS --
         // -------------------------------
         COLLECTLABELS.setCollects( "PRIM_MD.Label" );
         COLLECTLABELS.initialize();

         // ------------------------------------
         // -- Initialize #COLLECTATTACHMENTS --
         // ------------------------------------
         COLLECTATTACHMENTS.setCollects( "PRIM_ATLI" );
         COLLECTATTACHMENTS.initialize();

         // ------------------------------
         // -- Initialize #LIKEURLSTYLE --
         // ------------------------------
         LIKEURLSTYLE.setTextColor( "BLUE" );
         LIKEURLSTYLE.setFontSize( 13 );
         LIKEURLSTYLE.setFontUnits( "PIXEL" );
         LIKEURLSTYLE.initialize();

         // ----------------------------------
         // -- Initialize #LIKEURLOVERSTYLE --
         // ----------------------------------
         LIKEURLOVERSTYLE.setUnderline( true );
         LIKEURLOVERSTYLE.setCursor( "HAND" );
         LIKEURLOVERSTYLE.initialize();

         // -------------------------------------------
         // -- Add Event Handlers for #COLLECTLABELS --
         // -------------------------------------------
         COLLECTLABELS.addEventHandler( "CLICK", this, evtRoutine1 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setWidth( 281 );
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
      var rtn = Lansa.ptyRoutine( this, COM_OWNER, "Get_uHint", 26 );

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(ReturnHint) For(*OUTPUT)
      //
      var RETURNHINT = rtn.createParameter( "RETURNHINT", "PRIM_DC", "UnicodeString" );

      //
      // PTYROUTINE Name(Get_uHint) Options(*REDEFINE)
      //
      rtn.Line( 26 );
      {

         //
         // #ReturnHint := #COM_ANCESTOR.uHint
         //
         rtn.Line( 27 );
         RETURNHINT.set( this.getUHINT() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 28 );
      return rtn.retVal( RETURNHINT.get() );
   };

   //
   // mthGET_UIMAGENAME - Get_uImageName
   //
   COM_OWNER.mthGET_UIMAGENAME = function()
   {
      var rtn = Lansa.ptyRoutine( this, COM_OWNER, "Get_uImageName", 32 );

      //
      // DEFINE_MAP Class(#VF_ELSYMN.DataClass) Name(ReturnImageName) For(*OUTPUT)
      //
      var RETURNIMAGENAME = rtn.createFieldParameter( "RETURNIMAGENAME", Fields.VF_ELSYMN.DataClass );

      //
      // PTYROUTINE Name(Get_uImageName) Options(*REDEFINE)
      //
      rtn.Line( 32 );
      {

         //
         // #ReturnImageName := #COM_ANCESTOR.uImageName
         //
         rtn.Line( 33 );
         RETURNIMAGENAME.set( this.getUIMAGENAME() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 34 );
      return rtn.retVal( RETURNIMAGENAME.get() );
   };

   //
   // mthUINITIALIZE - uInitialize
   //
   COM_OWNER.mthUINITIALIZE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uInitialize", 38 );

      //
      // MTHROUTINE Name(uInitialize) Options(*REDEFINE)
      //
      rtn.Line( 38 );
      {

         //
         // #COM_ANCESTOR.uInitialize
         //
         rtn.Line( 40 );
         COM_ANCESTOR.mthUINITIALIZE.call( this );

         //
         // #Com_Owner.AddClickableURL Caption("Open IBM Web Site") Url("http://www.ibm.com/") Icon('computer')
         //
         rtn.Line( 43 );
         this.mthADDCLICKABLEURL( "Open IBM Web Site", "http://www.ibm.com/", "computer" );

         //
         // #Com_Owner.AddClickableURL Caption("Open Apple Web Site") Url("http://www.apple.com/") Icon('desktop_mac')
         //
         rtn.Line( 44 );
         this.mthADDCLICKABLEURL( "Open Apple Web Site", "http://www.apple.com/", "desktop_mac" );

         //
         // #Com_Owner.AddClickableURL Caption("Open Microsoft Web Site") Url("http://www.microsoft.com/") Icon('desktop_windows')
         //
         rtn.Line( 45 );
         this.mthADDCLICKABLEURL( "Open Microsoft Web Site", "http://www.microsoft.com/", "desktop_windows" );

         //
         // #Com_Owner.AddClickableURL Caption("Open LANSA Web Site") Url("https://www.lansa.com/") Icon('fa-heart')
         //
         rtn.Line( 46 );
         this.mthADDCLICKABLEURL( "Open LANSA Web Site", "https://www.lansa.com/", "fa-heart" );

         //
         // #Com_Owner.AddClickableURL Caption("Open LANSA Documentation Site") Url("https://docs.lansa.com/") Icon('help')
         //
         rtn.Line( 47 );
         this.mthADDCLICKABLEURL( "Open LANSA Documentation Site", "https://docs.lansa.com/", "help" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 49 );
      rtn.end();
   };

   //
   // mthUTERMINATE - uTerminate
   //
   COM_OWNER.mthUTERMINATE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "uTerminate", 53 );

      //
      // MTHROUTINE Name(uTerminate) Options(*REDEFINE)
      //
      rtn.Line( 53 );
      {

         //
         // #CollectAttachments.RemoveAll
         //
         rtn.Line( 55 );
         ref.COLLECTATTACHMENTS.mthREMOVEALL();

         //
         // #CollectLabels.RemoveAll
         //
         rtn.Line( 56 );
         ref.COLLECTLABELS.mthREMOVEALL();

         //
         // #COM_ANCESTOR.uTerminate
         //
         rtn.Line( 58 );
         COM_ANCESTOR.mthUTERMINATE.call( this );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      rtn.end();
   };

   //
   // mthUDISPLAYREQUESTED - uDisplayRequested
   //
   COM_OWNER.mthUDISPLAYREQUESTED = function( parm_ADDITIONALREQUESTDETAILS )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uDisplayRequested", 63 );

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
      rtn.Line( 63 );
      {

         //
         // #COM_ANCESTOR.uDisplayRequested Additionalrequestdetails(#AdditionalRequestdetails)
         //
         rtn.Line( 65 );
         COM_ANCESTOR.mthUDISPLAYREQUESTED.call( this, ADDITIONALREQUESTDETAILS );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 67 );
      rtn.end();
   };

   //
   // mthADDCLICKABLEURL - AddClickableURL
   //
   COM_OWNER.mthADDCLICKABLEURL = function( parm_CAPTION, parm_URL, parm_ICON )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddClickableURL", 71 );

      //
      // DEFINE_MAP For(*input) Class(#Prim_DC.UnicodeString) Name(#Caption)
      //
      var CAPTION = rtn.createParameter( "CAPTION", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*input) Class(#PRIM_ALPH) Name(#URL)
      //
      var URL = rtn.createParameter( "URL", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*input) Class(#PRIM_ALPH) Name(#Icon)
      //
      var ICON = rtn.createParameter( "ICON", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CAPTION.set( parm_CAPTION );
      URL.set( parm_URL );
      ICON.set( parm_ICON );

      //
      // DEFINE_COM Class(#Prim_MD.Label) Name(#NewLabel) Parent(#COM_OWNER) Style(#LikeURLStyle) Mouseoverstyle(#LikeURLOverStyle) Height(24)
      //
      var NEWLABEL = rtn.createReference( "NEWLABEL", "PRIM_MD", "Label" );

      //
      // DEFINE_COM Class(#Prim_atli) Name(#NewAttachmentItem) Parent(#MAINPANELATTACHMENTMANAGER) Manage(#NewLabel) Attachment(Top) Marginleft(16) Marginright(16) Margintop(4) Marginbottom(4)
      //
      var NEWATTACHMENTITEM = rtn.createReference( "NEWATTACHMENTITEM", "PRIM_ATLI" );

      // --------------------------
      // -- Initialize #NEWLABEL --
      // --------------------------
      NEWLABEL.setParent( this );
      NEWLABEL.setStyle( ref.LIKEURLSTYLE );
      NEWLABEL.setMouseOverStyle( ref.LIKEURLOVERSTYLE );
      NEWLABEL.setHeight( 24 );
      NEWLABEL.initialize();

      // -----------------------------------
      // -- Initialize #NEWATTACHMENTITEM --
      // -----------------------------------
      NEWATTACHMENTITEM.setParent( this.REF.MAINPANELATTACHMENTMANAGER );
      NEWATTACHMENTITEM.setManage( NEWLABEL );
      NEWATTACHMENTITEM.setAttachment( "TOP" );
      NEWATTACHMENTITEM.setMarginLeft( 16 );
      NEWATTACHMENTITEM.setMarginRight( 16 );
      NEWATTACHMENTITEM.setMarginTop( 4 );
      NEWATTACHMENTITEM.setMarginBottom( 4 );
      NEWATTACHMENTITEM.initialize();

      //
      // MTHROUTINE Name(AddClickableURL)
      //
      rtn.Line( 71 );
      {

         //
         // #CollectLabels.Insert Item(#NewLabel)
         //
         rtn.Line( 81 );
         ref.COLLECTLABELS.mthINSERT( NEWLABEL );

         //
         // #CollectAttachments.Insert Item(#NewAttachmentItem)
         //
         rtn.Line( 82 );
         ref.COLLECTATTACHMENTS.mthINSERT( NEWATTACHMENTITEM );

         //
         // IF (#CollectAttachments.ItemCount = 1)
         //
         rtn.Line( 84 );
         if ( Lansa.Number.eq( ref.COLLECTATTACHMENTS.getItemCount(), 1 ) )
         {

            //
            // #NewAttachmentItem.MarginTop := 16
            //
            rtn.Line( 85 );
            NEWATTACHMENTITEM.setMarginTop( 16 );

         //
         // ENDIF 
         //
         }

         //
         // #COM_OWNER.Height := ((#NewLabel.Height + #NewAttachmentItem.MarginTop + #NewAttachmentItem.MarginBottom) * #CollectLabels.ItemCount) + 16
         //
         rtn.Line( 88 );
         this.setHeight( Lansa.add( Lansa.mul( Lansa.add( Lansa.add( NEWLABEL.getHeight(), NEWATTACHMENTITEM.getMarginTop() ), NEWATTACHMENTITEM.getMarginBottom() ), ref.COLLECTLABELS.getItemCount() ), 16 ) );

         //
         // SET Com(#NewLabel) Caption(#Caption) Componenttag(#URL) Icon(#Icon)
         //
         rtn.Line( 91 );
         NEWLABEL.setCaption( CAPTION.get() );
         NEWLABEL.setComponentTag( URL.get() );
         NEWLABEL.setIcon( ICON.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 93 );
      rtn.end();
   };

   //
   // evtRoutine1 - #CollectLabels<>.Click
   //
   function evtRoutine1( SENDER, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#CollectLabels<>.Click", 97 );

      //
      // EVTROUTINE Handling(#CollectLabels<>.Click) Com_Sender(#Sender)
      //
      rtn.Line( 97 );
      {

         //
         // #SYS_WEB.Navigate Url(#Sender.ComponentTag) Target(New)
         //
         rtn.Line( 99 );
         Lansa.WEB().mthNAVIGATE( SENDER.getComponentTag(), "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 101 );
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
   rc: [ "VF_AC031O" ],
   rp: [ "PRIM_ACOL", "PRIM_VS.Style", "PRIM_FLD" ],
   dp: [ "PRIM_MD.Label", "PRIM_ATLI" ]
});

//# sourceURL=vlfmas_2.js
