// ------------------------
// -- Web Page: XLBE0001 --
// ------------------------
LANSA.addComponent(
{
   id: "XLBE0001", 
   nm: "xDemoGoogleTranslateWebPage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Demo: Google Translate Web API Usage", 
   tl: 14020008
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- IO STATUS --
   // ---------------
   var lastIoStatus = "";

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
      STD_TEXT:
      {
         nm: "STD_TEXT",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: { "ENG": "Text", "FRA": "Texte" }[ curLanguage ],
         h1: { "ENG": "Text", "FRA": "Texte" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Standard TEXT", "FRA": "Texte Standard" }[ curLanguage ],
         dv: "",
         ia: [ "LC" ],
         vr: 
         [
            {
               wt: "E",
               wf: "N",
               vi: "Y",
               vu: "Y",
               vd: "N",
               rd: rule1,
               mt: { "ENG": "Text must be specified", "FRA": "Texte must be specified" }[ curLanguage ]
            }
         ]
      },
      IOdSTS:
      {
         nm: "IO$STS",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: { "ENG": "I/O status ....", "FRA": "Statut I/O  . ." }[ curLanguage ],
         h1: { "ENG": "I/O", "FRA": "Statut" }[ curLanguage ],
         h2: { "ENG": "Status", "FRA": "I/O" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Data base I/O operation status code", "FRA": "Code statut opération I/O" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         AddLanguage: 
         {
            ps: 
            {
               "Language":
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
         var fld = this.addFields( "XLBE0001", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#Layout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#Layout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(2) Parent(#Layout1) Height(30) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(3) Parent(#Layout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#Layout1) Height(45) Units(Content)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopLeft) Column(#Column1) Manage(#Label1) Parent(#Layout1) Row(#Row2) Sizing(None) Flow(Down)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column1) Manage(#SourceText) Parent(#Layout1) Row(#Row2) Flow(Down)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#Column2) Manage(#Label2) Parent(#Layout1) Row(#Row2) Sizing(None) Flow(Down)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column2) Manage(#ResultText) Parent(#Layout1) Row(#Row2) Flow(Down)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#Column1) Manage(#TranslateButton) Parent(#Layout1) Row(#Row1) Sizing(FitToWidth) Columnspan(2)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Column(#Column1) Flow(Down) Manage(#Label3) Parent(#Layout1) Row(#Row3) Sizing(None) Alignment(TopLeft)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Column(#Column1) Flow(Down) Manage(#SrcLangDropdown) Parent(#Layout1) Row(#Row3) Sizing(FitToWidth) Alignment(TopLeft) Marginright(10)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(TopLeft) Column(#Column2) Manage(#Label4) Parent(#Layout1) Row(#Row3) Sizing(None) Flow(Down)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Alignment(TopLeft) Column(#Column2) Manage(#TargetLangDropdown) Parent(#Layout1) Row(#Row3) Sizing(FitToWidth) Flow(Down) Marginright(10)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Input Text') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(75) Verticalalignment(Center) Width(120)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TEXT) Name(#SourceText) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(2) Top(100) Width(591) Height(725) Text('Translate this text!')
         //
         var SOURCETEXT = this.createReference( "SOURCETEXT", "PRIM_TEXT" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('Result:') Displayposition(3) Ellipses(Word) Height(25) Left(591) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(75) Verticalalignment(Center) Width(120)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TEXT) Name(#ResultText) Displayposition(4) Left(591) Parent(#COM_OWNER) Tabposition(4) Top(100) Width(591) Height(725)
         //
         var RESULTTEXT = this.createReference( "RESULTTEXT", "PRIM_TEXT" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#TranslateButton) Caption('TRANSLATE') Displayposition(5) Left(0) Parent(#COM_OWNER) Tabposition(5) Top(48) Width(1182)
         //
         var TRANSLATEBUTTON = this.createReference( "TRANSLATEBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label3) Caption('From Language:') Displayposition(6) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(0) Verticalalignment(Center) Width(120)
         //
         var LABEL3 = this.createReference( "LABEL3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LIST.DropDown) Name(#SrcLangDropdown) Columnheaderheight(0) Columnlines(False) Displayposition(7) Left(0) Parent(#COM_OWNER) Rowlines(False) Showselection(False) Tabposition(7) Top(25) Width(581)
         //
         var SRCLANGDROPDOWN = this.createReference( "SRCLANGDROPDOWN", "PRIM_LIST", "DropDown" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnSTD_TEXT1) Columnunits(Proportion) Columnwidth(1) Displayposition(1) Parent(#SrcLangDropdown) Source(#STD_TEXT)
         //
         var COLUMNSTD_TEXT1 = this.createReference( "COLUMNSTD_TEXT1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label4) Caption('To Language:') Displayposition(8) Ellipses(Word) Height(25) Left(591) Parent(#COM_OWNER) Tabposition(8) Tabstop(False) Top(0) Verticalalignment(Center) Width(120)
         //
         var LABEL4 = this.createReference( "LABEL4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LIST.DropDown) Name(#TargetLangDropdown) Columnheaderheight(0) Columnlines(False) Displayposition(9) Left(591) Parent(#COM_OWNER) Rowlines(False) Showselection(False) Tabposition(9) Top(25) Width(581)
         //
         var TARGETLANGDROPDOWN = this.createReference( "TARGETLANGDROPDOWN", "PRIM_LIST", "DropDown" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnSTD_TEXT2) Columnunits(Proportion) Columnwidth(1) Displayposition(1) Parent(#TargetLangDropdown) Source(#STD_TEXT)
         //
         var COLUMNSTD_TEXT2 = this.createReference( "COLUMNSTD_TEXT2", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#PRIM_ALPH>) Name(#gLangList)
         //
         var GLANGLIST = this.createReference( "GLANGLIST", "PRIM_LCOL" );

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( LAYOUT1 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( LAYOUT1 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 2 );
         ROW1.setParent( LAYOUT1 );
         ROW1.setHeight( 30 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 3 );
         ROW2.setParent( LAYOUT1 );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( LAYOUT1 );
         ROW3.setHeight( 45 );
         ROW3.setUnits( "CONTENT" );
         ROW3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( LABEL1 );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setManage( SOURCETEXT );
         LAYOUTITEM2.setParent( LAYOUT1 );
         LAYOUTITEM2.setRow( ROW2 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setManage( LABEL2 );
         LAYOUTITEM3.setParent( LAYOUT1 );
         LAYOUTITEM3.setRow( ROW2 );
         LAYOUTITEM3.setSizing( "NONE" );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN2 );
         LAYOUTITEM4.setManage( RESULTTEXT );
         LAYOUTITEM4.setParent( LAYOUT1 );
         LAYOUTITEM4.setRow( ROW2 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( COLUMN1 );
         LAYOUTITEM5.setManage( TRANSLATEBUTTON );
         LAYOUTITEM5.setParent( LAYOUT1 );
         LAYOUTITEM5.setRow( ROW1 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.setColumnSpan( 2 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setColumn( COLUMN1 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( LABEL3 );
         LAYOUTITEM6.setParent( LAYOUT1 );
         LAYOUTITEM6.setRow( ROW3 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setColumn( COLUMN1 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( SRCLANGDROPDOWN );
         LAYOUTITEM7.setParent( LAYOUT1 );
         LAYOUTITEM7.setRow( ROW3 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.setAlignment( "TOPLEFT" );
         LAYOUTITEM7.setMarginRight( 10 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "TOPLEFT" );
         LAYOUTITEM8.setColumn( COLUMN2 );
         LAYOUTITEM8.setManage( LABEL4 );
         LAYOUTITEM8.setParent( LAYOUT1 );
         LAYOUTITEM8.setRow( ROW3 );
         LAYOUTITEM8.setSizing( "NONE" );
         LAYOUTITEM8.setFlow( "DOWN" );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setAlignment( "TOPLEFT" );
         LAYOUTITEM9.setColumn( COLUMN2 );
         LAYOUTITEM9.setManage( TARGETLANGDROPDOWN );
         LAYOUTITEM9.setParent( LAYOUT1 );
         LAYOUTITEM9.setRow( ROW3 );
         LAYOUTITEM9.setSizing( "FITTOWIDTH" );
         LAYOUTITEM9.setFlow( "DOWN" );
         LAYOUTITEM9.setMarginRight( 10 );
         LAYOUTITEM9.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Input Text" );
         LABEL1.setDisplayPosition( 1 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 25 );
         LABEL1.setLeft( 0 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 1 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 75 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 120 );
         LABEL1.initialize();

         // ----------------------------
         // -- Initialize #SOURCETEXT --
         // ----------------------------
         SOURCETEXT.setDisplayPosition( 2 );
         SOURCETEXT.setLeft( 0 );
         SOURCETEXT.setParent( this );
         SOURCETEXT.setTabPosition( 2 );
         SOURCETEXT.setTop( 100 );
         SOURCETEXT.setWidth( 591 );
         SOURCETEXT.setHeight( 725 );
         SOURCETEXT.setText( "Translate this text!" );
         SOURCETEXT.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "Result:" );
         LABEL2.setDisplayPosition( 3 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 591 );
         LABEL2.setParent( this );
         LABEL2.setTabPosition( 3 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 75 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 120 );
         LABEL2.initialize();

         // ----------------------------
         // -- Initialize #RESULTTEXT --
         // ----------------------------
         RESULTTEXT.setDisplayPosition( 4 );
         RESULTTEXT.setLeft( 591 );
         RESULTTEXT.setParent( this );
         RESULTTEXT.setTabPosition( 4 );
         RESULTTEXT.setTop( 100 );
         RESULTTEXT.setWidth( 591 );
         RESULTTEXT.setHeight( 725 );
         RESULTTEXT.initialize();

         // ---------------------------------
         // -- Initialize #TRANSLATEBUTTON --
         // ---------------------------------
         TRANSLATEBUTTON.setCaption( "TRANSLATE" );
         TRANSLATEBUTTON.setDisplayPosition( 5 );
         TRANSLATEBUTTON.setLeft( 0 );
         TRANSLATEBUTTON.setParent( this );
         TRANSLATEBUTTON.setTabPosition( 5 );
         TRANSLATEBUTTON.setTop( 48 );
         TRANSLATEBUTTON.setWidth( 1182 );
         TRANSLATEBUTTON.initialize();

         // ------------------------
         // -- Initialize #LABEL3 --
         // ------------------------
         LABEL3.setCaption( "From Language:" );
         LABEL3.setDisplayPosition( 6 );
         LABEL3.setEllipses( "WORD" );
         LABEL3.setHeight( 25 );
         LABEL3.setLeft( 0 );
         LABEL3.setParent( this );
         LABEL3.setTabPosition( 6 );
         LABEL3.setTabStop( false );
         LABEL3.setTop( 0 );
         LABEL3.setVerticalAlignment( "CENTER" );
         LABEL3.setWidth( 120 );
         LABEL3.initialize();

         // ---------------------------------
         // -- Initialize #SRCLANGDROPDOWN --
         // ---------------------------------
         SRCLANGDROPDOWN.setColumnHeaderHeight( 0 );
         SRCLANGDROPDOWN.setColumnLines( false );
         SRCLANGDROPDOWN.setDisplayPosition( 7 );
         SRCLANGDROPDOWN.setLeft( 0 );
         SRCLANGDROPDOWN.setParent( this );
         SRCLANGDROPDOWN.setRowLines( false );
         SRCLANGDROPDOWN.setShowSelection( false );
         SRCLANGDROPDOWN.setTabPosition( 7 );
         SRCLANGDROPDOWN.setTop( 25 );
         SRCLANGDROPDOWN.setWidth( 581 );
         SRCLANGDROPDOWN.initialize();

         // ---------------------------------
         // -- Initialize #COLUMNSTD_TEXT1 --
         // ---------------------------------
         COLUMNSTD_TEXT1.setColumnUnits( "PROPORTION" );
         COLUMNSTD_TEXT1.setColumnWidth( 1 );
         COLUMNSTD_TEXT1.setDisplayPosition( 1 );
         COLUMNSTD_TEXT1.setParent( SRCLANGDROPDOWN );
         COLUMNSTD_TEXT1.setSource( fld.STD_TEXT );
         COLUMNSTD_TEXT1.initialize();

         // ------------------------
         // -- Initialize #LABEL4 --
         // ------------------------
         LABEL4.setCaption( "To Language:" );
         LABEL4.setDisplayPosition( 8 );
         LABEL4.setEllipses( "WORD" );
         LABEL4.setHeight( 25 );
         LABEL4.setLeft( 591 );
         LABEL4.setParent( this );
         LABEL4.setTabPosition( 8 );
         LABEL4.setTabStop( false );
         LABEL4.setTop( 0 );
         LABEL4.setVerticalAlignment( "CENTER" );
         LABEL4.setWidth( 120 );
         LABEL4.initialize();

         // ------------------------------------
         // -- Initialize #TARGETLANGDROPDOWN --
         // ------------------------------------
         TARGETLANGDROPDOWN.setColumnHeaderHeight( 0 );
         TARGETLANGDROPDOWN.setColumnLines( false );
         TARGETLANGDROPDOWN.setDisplayPosition( 9 );
         TARGETLANGDROPDOWN.setLeft( 591 );
         TARGETLANGDROPDOWN.setParent( this );
         TARGETLANGDROPDOWN.setRowLines( false );
         TARGETLANGDROPDOWN.setShowSelection( false );
         TARGETLANGDROPDOWN.setTabPosition( 9 );
         TARGETLANGDROPDOWN.setTop( 25 );
         TARGETLANGDROPDOWN.setWidth( 581 );
         TARGETLANGDROPDOWN.initialize();

         // ---------------------------------
         // -- Initialize #COLUMNSTD_TEXT2 --
         // ---------------------------------
         COLUMNSTD_TEXT2.setColumnUnits( "PROPORTION" );
         COLUMNSTD_TEXT2.setColumnWidth( 1 );
         COLUMNSTD_TEXT2.setDisplayPosition( 1 );
         COLUMNSTD_TEXT2.setParent( TARGETLANGDROPDOWN );
         COLUMNSTD_TEXT2.setSource( fld.STD_TEXT );
         COLUMNSTD_TEXT2.initialize();

         // ---------------------------
         // -- Initialize #GLANGLIST --
         // ---------------------------
         GLANGLIST.setCollects( "PRIM_ALPH" );
         GLANGLIST.initialize();

         // ---------------------------------------------
         // -- Add Event Handlers for #TRANSLATEBUTTON --
         // ---------------------------------------------
         TRANSLATEBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( LAYOUT1 );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 32 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 32 );
      {

         //
         // #COM_SELF.AddLanguage( 'en' )
         //
         rtn.Line( 33 );
         this.mthADDLANGUAGE( "en" );

         //
         // #COM_SELF.AddLanguage( 'fr' )
         //
         rtn.Line( 34 );
         this.mthADDLANGUAGE( "fr" );

         //
         // #COM_SELF.AddLanguage( 'ja' )
         //
         rtn.Line( 35 );
         this.mthADDLANGUAGE( "ja" );

         //
         // #COM_SELF.AddLanguage( 'de' )
         //
         rtn.Line( 36 );
         this.mthADDLANGUAGE( "de" );

         //
         // #SrcLangDropdown.Items<1>.Selected := True
         //
         rtn.Line( 38 );
         ref.SRCLANGDROPDOWN.getItems().get( 1 ).setSelected( true );

         //
         // #TargetLangDropdown.Items<2>.Selected := True
         //
         rtn.Line( 39 );
         ref.TARGETLANGDROPDOWN.getItems().get( 2 ).setSelected( true );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 40 );
      rtn.end();
   };

   //
   // evtRoutine2 - #TranslateButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var fld = this.FLD.XLBE0001, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#TranslateButton.Click", 42 );

      //
      // DEFINE_COM Class(#xDemoGoogleTranslateServerModule.Translate) Name(#Translate)
      //
      var TRANSLATE = rtn.createDataRequest( "TRANSLATE", "XLBE0002", "TRANSLATE" );

      //
      // DEFINE_COM Class(#PRIM_ALPH) Name(#SrcLang)
      //
      var SRCLANG = rtn.createReference( "SRCLANG", "PRIM_ALPH" );

      //
      // DEFINE_COM Class(#PRIM_ALPH) Name(#TargetLang)
      //
      var TARGETLANG = rtn.createReference( "TARGETLANG", "PRIM_ALPH" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage)
      //
      var ERRORMESSAGE = rtn.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize #TRANSLATE --
      // ---------------------------
      TRANSLATE.initialize();

      // -------------------------
      // -- Initialize #SRCLANG --
      // -------------------------
      SRCLANG.initialize();

      // ----------------------------
      // -- Initialize #TARGETLANG --
      // ----------------------------
      TARGETLANG.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      // ------------------------------
      // -- Initialize #ERRORMESSAGE --
      // ------------------------------
      ERRORMESSAGE.initialize();

      //
      // EVTROUTINE Handling(#TranslateButton.Click)
      //
      rtn.Line( 42 );
      {

         //
         // GET_ENTRY Number(#SrcLangDropdown.CurrentItem.Entry) From_List(#SrcLangDropdown)
         //
         rtn.Line( 49 );
         fld.IOdSTS.set( lastIoStatus = ref.SRCLANGDROPDOWN.getEntry( ref.SRCLANGDROPDOWN.getCurrentItem().getEntry() ) );

         //
         // #SrcLang := #STD_TEXT
         //
         rtn.Line( 50 );
         SRCLANG.set( fld.STD_TEXT.get() );

         //
         // GET_ENTRY Number(#TargetLangDropdown.CurrentItem.Entry) From_List(#TargetLangDropdown)
         //
         rtn.Line( 51 );
         fld.IOdSTS.set( lastIoStatus = ref.TARGETLANGDROPDOWN.getEntry( ref.TARGETLANGDROPDOWN.getCurrentItem().getEntry() ) );

         //
         // #TargetLang := #STD_TEXT
         //
         rtn.Line( 52 );
         TARGETLANG.set( fld.STD_TEXT.get() );

         //
         // IF (#SrcLang <> #TargetLang)
         //
         rtn.Line( 54 );
         if ( Lansa.toBool( Lansa.String.ne( SRCLANG.get(), TARGETLANG.get() ) ) )
         {

            //
            // #Translate.Execute Inputtext(#SourceText) Outputtext(#ResultText) Srclanguage(#SrcLang) Targetlanguage(#TargetLang) Ok(#OK) Errormessage(#ErrorMessage)
            //
            rtn.Line( 56 );
            TRANSLATE.mthEXECUTE( { FLD: { "FLD_INPUTTEXT": ref.SOURCETEXT.get(), "FLD_SRCLANGUAGE": SRCLANG.get(), "FLD_TARGETLANGUAGE": TARGETLANG.get() } }, { FLD: { "FLD_OUTPUTTEXT": ref.RESULTTEXT, "FLD_OK": OK, "FLD_ERRORMESSAGE": ERRORMESSAGE } } );

            //
            // IF (*Not #OK)
            //
            rtn.Line( 58 );
            if ( Lansa.toBool( Lansa.not( OK.get() ) ) )
            {

               //
               // #SYS_WEB.Alert Caption(#ErrorMessage)
               //
               rtn.Line( 59 );
               Lansa.WEB().mthALERT( ERRORMESSAGE.get() );

            //
            // ENDIF 
            //
            }

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #SYS_WEB.alert Caption('Please enter different source and target languages')
            //
            rtn.Line( 63 );
            Lansa.WEB().mthALERT( "Please enter different source and target languages" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 66 );
      rtn.end();
   };

   //
   // mthADDLANGUAGE - AddLanguage
   //
   COM_OWNER.mthADDLANGUAGE = function( parm_LANGUAGE )
   {
      var fld = this.FLD.XLBE0001, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddLanguage", 68 );

      //
      // DEFINE_MAP For(*input) Class(#PRIM_ALPH) Name(#Language)
      //
      var LANGUAGE = rtn.createParameter( "LANGUAGE", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      LANGUAGE.set( parm_LANGUAGE );

      //
      // MTHROUTINE Name(AddLanguage) Access(*PRIVATE)
      //
      rtn.Line( 68 );
      {

         //
         // #STD_TEXT := #Language
         //
         rtn.Line( 71 );
         fld.STD_TEXT.set( LANGUAGE.get() );

         //
         // ADD_ENTRY To_List(#SrcLangDropdown)
         //
         rtn.Line( 72 );
         ref.SRCLANGDROPDOWN.addEntry();

         //
         // ADD_ENTRY To_List(#TargetLangDropdown)
         //
         rtn.Line( 73 );
         ref.TARGETLANGDROPDOWN.addEntry();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   // ----------------------
   // -- Validation rules --
   // ----------------------

   //
   // STD_TEXT - Must not be Blank
   //
   function rule1( STD_TEXT )
   {
      var value = STD_TEXT.get();

      return (

         //
         // *BLANK
         //
         Lansa.String.eq( value, "" )

      );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TEXT", "PRIM_PHBN", "PRIM_LIST.DropDown", "PRIM_LIST.String", "PRIM_LCOL", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_ALPH", "PRIM_BOLN", "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlbe0001.js
