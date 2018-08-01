// ------------------------
// -- Web Page: XLBE0007 --
// ------------------------
LANSA.addComponent(
{
   id: "XLBE0007", 
   nm: "xDemoOpenWeatherMapWebPage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Open Weather Map Example", 
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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Bold(True) Fontsize(14)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Bold(True)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style3) Bold(True)
         //
         var STYLE3 = this.createReference( "STYLE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4) Fontsize(10)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style5) Fontsize(10)
         //
         var STYLE5 = this.createReference( "STYLE5", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUTROW1 = this.createReference( "LAYOUTROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUTCOLUMN1 = this.createReference( "LAYOUTCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#LayoutColumn1) Manage(#Label3) Parent(#Layout1) Row(#LayoutRow1) Sizing(None)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label3) Caption('Open Weather Map Demo') Displayposition(1) Ellipses(Word) Height(41) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Verticalalignment(Center) Width(497) Style(#Style1) Top(0)
         //
         var LABEL3 = this.createReference( "LABEL3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Please Enter a City (e.g sydney, London ...etc)') Displayposition(2) Ellipses(Word) Height(25) Left(8) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(48) Verticalalignment(Center) Width(481) Style(#Style5)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#CityBox) Displayposition(3) Left(8) Parent(#COM_OWNER) Showselection(False) Showselectionhilight(False) Tabposition(3) Top(80) Width(161)
         //
         var CITYBOX = this.createReference( "CITYBOX", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('Current Temperature is') Displayposition(4) Ellipses(Word) Height(25) Left(8) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(152) Verticalalignment(Center) Width(169) Style(#Style4)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#CurrentTempEdit) Displayposition(5) Left(184) Parent(#COM_OWNER) Showselection(False) Showselectionhilight(False) Tabposition(5) Top(152) Width(104) Readonly(True)
         //
         var CURRENTTEMPEDIT = this.createReference( "CURRENTTEMPEDIT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#GetTempButton) Caption('Get Current Temp') Displayposition(6) Left(8) Parent(#COM_OWNER) Tabposition(6) Top(112) Width(129)
         //
         var GETTEMPBUTTON = this.createReference( "GETTEMPBUTTON", "PRIM_PHBN" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBold( true );
         STYLE1.setFontSize( 14 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setBold( true );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #STYLE3 --
         // ------------------------
         STYLE3.setBold( true );
         STYLE3.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.setFontSize( 10 );
         STYLE4.initialize();

         // ------------------------
         // -- Initialize #STYLE5 --
         // ------------------------
         STYLE5.setFontSize( 10 );
         STYLE5.initialize();

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW1 --
         // ----------------------------
         LAYOUTROW1.setDisplayPosition( 1 );
         LAYOUTROW1.setParent( LAYOUT1 );
         LAYOUTROW1.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN1 --
         // -------------------------------
         LAYOUTCOLUMN1.setDisplayPosition( 1 );
         LAYOUTCOLUMN1.setParent( LAYOUT1 );
         LAYOUTCOLUMN1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM6.setManage( LABEL3 );
         LAYOUTITEM6.setParent( LAYOUT1 );
         LAYOUTITEM6.setRow( LAYOUTROW1 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.initialize();

         // ------------------------
         // -- Initialize #LABEL3 --
         // ------------------------
         LABEL3.setCaption( "Open Weather Map Demo" );
         LABEL3.setDisplayPosition( 1 );
         LABEL3.setEllipses( "WORD" );
         LABEL3.setHeight( 41 );
         LABEL3.setLeft( 0 );
         LABEL3.setParent( this );
         LABEL3.setTabPosition( 1 );
         LABEL3.setTabStop( false );
         LABEL3.setVerticalAlignment( "CENTER" );
         LABEL3.setWidth( 497 );
         LABEL3.setStyle( STYLE1 );
         LABEL3.setTop( 0 );
         LABEL3.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Please Enter a City (e.g sydney, London ...etc)" );
         LABEL1.setDisplayPosition( 2 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 25 );
         LABEL1.setLeft( 8 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 2 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 48 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 481 );
         LABEL1.setStyle( STYLE5 );
         LABEL1.initialize();

         // -------------------------
         // -- Initialize #CITYBOX --
         // -------------------------
         CITYBOX.setDisplayPosition( 3 );
         CITYBOX.setLeft( 8 );
         CITYBOX.setParent( this );
         CITYBOX.setShowSelection( false );
         CITYBOX.setShowSelectionHilight( false );
         CITYBOX.setTabPosition( 3 );
         CITYBOX.setTop( 80 );
         CITYBOX.setWidth( 161 );
         CITYBOX.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "Current Temperature is" );
         LABEL2.setDisplayPosition( 4 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 8 );
         LABEL2.setParent( this );
         LABEL2.setTabPosition( 4 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 152 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 169 );
         LABEL2.setStyle( STYLE4 );
         LABEL2.initialize();

         // ---------------------------------
         // -- Initialize #CURRENTTEMPEDIT --
         // ---------------------------------
         CURRENTTEMPEDIT.setDisplayPosition( 5 );
         CURRENTTEMPEDIT.setLeft( 184 );
         CURRENTTEMPEDIT.setParent( this );
         CURRENTTEMPEDIT.setShowSelection( false );
         CURRENTTEMPEDIT.setShowSelectionHilight( false );
         CURRENTTEMPEDIT.setTabPosition( 5 );
         CURRENTTEMPEDIT.setTop( 152 );
         CURRENTTEMPEDIT.setWidth( 104 );
         CURRENTTEMPEDIT.setReadOnly( true );
         CURRENTTEMPEDIT.initialize();

         // -------------------------------
         // -- Initialize #GETTEMPBUTTON --
         // -------------------------------
         GETTEMPBUTTON.setCaption( "Get Current Temp" );
         GETTEMPBUTTON.setDisplayPosition( 6 );
         GETTEMPBUTTON.setLeft( 8 );
         GETTEMPBUTTON.setParent( this );
         GETTEMPBUTTON.setTabPosition( 6 );
         GETTEMPBUTTON.setTop( 112 );
         GETTEMPBUTTON.setWidth( 129 );
         GETTEMPBUTTON.initialize();

         // -------------------------------------------
         // -- Add Event Handlers for #GETTEMPBUTTON --
         // -------------------------------------------
         GETTEMPBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( LAYOUT1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 24 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 24 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 25 );
      rtn.end();
   };

   //
   // evtRoutine2 - #GetTempButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetTempButton.Click", 27 );

      //
      // DEFINE_COM Class(#xDemoOpenWeatherMapServerModule.GetWeather) Name(#Weather)
      //
      var WEATHER = rtn.createDataRequest( "WEATHER", "XLBE0006", "GETWEATHER" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage)
      //
      var ERRORMESSAGE = rtn.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      // -------------------------
      // -- Initialize #WEATHER --
      // -------------------------
      WEATHER.initialize();

      // ------------------------------
      // -- Initialize #ERRORMESSAGE --
      // ------------------------------
      ERRORMESSAGE.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      //
      // EVTROUTINE Handling(#GetTempButton.Click)
      //
      rtn.Line( 27 );
      {

         //
         // #Weather.Execute City(#CityBox) Temp(#CurrentTempEdit) Ok(#OK) Errormessage(#ErrorMessage)
         //
         rtn.Line( 33 );
         WEATHER.mthEXECUTE( { FLD: { "FLD_CITY": ref.CITYBOX.get() } }, { FLD: { "FLD_TEMP": ref.CURRENTTEMPEDIT, "FLD_OK": OK, "FLD_ERRORMESSAGE": ERRORMESSAGE } } );

         //
         // IF (*Not #OK)
         //
         rtn.Line( 35 );
         if ( Lansa.toBool( Lansa.not( OK.get() ) ) )
         {

            //
            // #SYS_WEB.Alert Caption('An error has occurred: ' + #ErrorMessage)
            //
            rtn.Line( 36 );
            Lansa.WEB().mthALERT( Lansa.add( "An error has occurred: ", ERRORMESSAGE.get() ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 39 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_EDIT", "PRIM_PHBN", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_DC.UnicodeString", "PRIM_BOLN" ]
});

//# sourceURL=xlbe0007.js
