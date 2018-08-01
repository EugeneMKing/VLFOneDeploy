// ------------------------
// -- Web Page: XLBE0003 --
// ------------------------
LANSA.addComponent(
{
   id: "XLBE0003", 
   nm: "xDemoGoogleGeocodingWebPage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Demo: Google Geocoding", 
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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Fontsize(20)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#Label1) Parent(#Layout1) Row(#LayoutRow1) Sizing(None)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Google Geocoding Demo') Displayposition(1) Ellipses(Word) Height(65) Left(432) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(337) Style(#Style1)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TAB) Name(#Tab1) Bottomlayoutpriority(4) Componentversion(2) Displayposition(2) Height(625) Left(16) Leftlayoutpriority(1) Parent(#COM_OWNER) Rightlayoutpriority(2) Tabposition(2) Top(56) Toplayoutpriority(3) Width(1169)
         //
         var TAB1 = this.createReference( "TAB1", "PRIM_TAB" );

         //
         // DEFINE_COM Class(#PRIM_TBSH) Name(#Sheet1) Caption('Get Geo-coordinate') Displayposition(1) Height(601) Left(0) Parent(#Tab1) Tabposition(1) Tabstop(False) Top(24) Width(1169)
         //
         var SHEET1 = this.createReference( "SHEET1", "PRIM_TBSH" );

         //
         // DEFINE_COM Class(#PRIM_TBSH) Name(#Sheet2) Caption('Get Address') Displayposition(2) Height(601) Left(0) Parent(#Tab1) Tabposition(2) Tabstop(False) Top(24) Width(1169)
         //
         var SHEET2 = this.createReference( "SHEET2", "PRIM_TBSH" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('Enter Address:') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#Sheet1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(161)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#getGeoCoordinateButton) Caption('Get Geo-Coordinate') Displayposition(2) Left(0) Parent(#Sheet1) Tabposition(2) Top(152) Width(281)
         //
         var GETGEOCOORDINATEBUTTON = this.createReference( "GETGEOCOORDINATEBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label3) Caption('Longitude:') Displayposition(3) Ellipses(Word) Height(25) Left(0) Parent(#Sheet1) Tabposition(3) Tabstop(False) Top(176) Verticalalignment(Center) Width(120)
         //
         var LABEL3 = this.createReference( "LABEL3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label4) Caption('Latitude:') Displayposition(4) Ellipses(Word) Height(25) Left(0) Parent(#Sheet1) Tabposition(4) Tabstop(False) Top(200) Verticalalignment(Center) Width(120)
         //
         var LABEL4 = this.createReference( "LABEL4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#LongitudeEdit1) Displayposition(5) Left(120) Parent(#Sheet1) Showselection(False) Showselectionhilight(False) Tabposition(5) Top(176)
         //
         var LONGITUDEEDIT1 = this.createReference( "LONGITUDEEDIT1", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#LatitudeEdit1) Displayposition(6) Left(120) Parent(#Sheet1) Showselection(False) Showselectionhilight(False) Tabposition(6) Top(200)
         //
         var LATITUDEEDIT1 = this.createReference( "LATITUDEEDIT1", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label5) Caption('Enter Geo-coordinate:') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#Sheet2) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(201)
         //
         var LABEL5 = this.createReference( "LABEL5", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label6) Caption('Longitude:') Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#Sheet2) Tabposition(2) Tabstop(False) Top(24) Verticalalignment(Center) Width(120)
         //
         var LABEL6 = this.createReference( "LABEL6", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label7) Caption('Latitude:') Displayposition(3) Ellipses(Word) Height(25) Left(0) Parent(#Sheet2) Tabposition(3) Tabstop(False) Top(48) Verticalalignment(Center) Width(120)
         //
         var LABEL7 = this.createReference( "LABEL7", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#LongitudeEdit2) Displayposition(4) Left(112) Parent(#Sheet2) Showselection(False) Showselectionhilight(False) Tabposition(4) Top(24)
         //
         var LONGITUDEEDIT2 = this.createReference( "LONGITUDEEDIT2", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#LatitudeEdit2) Displayposition(5) Left(112) Parent(#Sheet2) Showselection(False) Showselectionhilight(False) Tabposition(5) Top(48)
         //
         var LATITUDEEDIT2 = this.createReference( "LATITUDEEDIT2", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#GetAddressButton) Caption('Get Address') Displayposition(6) Left(0) Parent(#Sheet2) Tabposition(6) Top(80) Width(233)
         //
         var GETADDRESSBUTTON = this.createReference( "GETADDRESSBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label8) Caption('Address:') Displayposition(7) Ellipses(Word) Height(25) Left(0) Parent(#Sheet2) Tabposition(7) Tabstop(False) Top(120) Verticalalignment(Center) Width(120)
         //
         var LABEL8 = this.createReference( "LABEL8", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TEXT) Name(#GetAddressText) Displayposition(8) Left(0) Parent(#Sheet2) Tabposition(8) Top(144) Width(433) Height(97)
         //
         var GETADDRESSTEXT = this.createReference( "GETADDRESSTEXT", "PRIM_TEXT" );

         //
         // DEFINE_COM Class(#PRIM_TEXT) Name(#AddressEditBox) Displayposition(7) Left(0) Parent(#Sheet1) Tabposition(7) Top(24) Width(449) Height(113)
         //
         var ADDRESSEDITBOX = this.createReference( "ADDRESSEDITBOX", "PRIM_TEXT" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setFontSize( 20 );
         STYLE1.initialize();

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
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPCENTER" );
         LAYOUTITEM1.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM1.setManage( LABEL1 );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( LAYOUTROW1 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Google Geocoding Demo" );
         LABEL1.setDisplayPosition( 1 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 65 );
         LABEL1.setLeft( 432 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 1 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 0 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 337 );
         LABEL1.setStyle( STYLE1 );
         LABEL1.initialize();

         // ----------------------
         // -- Initialize #TAB1 --
         // ----------------------
         TAB1.setBottomLayoutPriority( 4 );
         TAB1.setComponentVersion( 2 );
         TAB1.setDisplayPosition( 2 );
         TAB1.setHeight( 625 );
         TAB1.setLeft( 16 );
         TAB1.setLeftLayoutPriority( 1 );
         TAB1.setParent( this );
         TAB1.setRightLayoutPriority( 2 );
         TAB1.setTabPosition( 2 );
         TAB1.setTop( 56 );
         TAB1.setTopLayoutPriority( 3 );
         TAB1.setWidth( 1169 );
         TAB1.initialize();

         // ------------------------
         // -- Initialize #SHEET1 --
         // ------------------------
         SHEET1.setCaption( "Get Geo-coordinate" );
         SHEET1.setDisplayPosition( 1 );
         SHEET1.setHeight( 601 );
         SHEET1.setLeft( 0 );
         SHEET1.setParent( TAB1 );
         SHEET1.setTabPosition( 1 );
         SHEET1.setTabStop( false );
         SHEET1.setTop( 24 );
         SHEET1.setWidth( 1169 );
         SHEET1.initialize();

         // ------------------------
         // -- Initialize #SHEET2 --
         // ------------------------
         SHEET2.setCaption( "Get Address" );
         SHEET2.setDisplayPosition( 2 );
         SHEET2.setHeight( 601 );
         SHEET2.setLeft( 0 );
         SHEET2.setParent( TAB1 );
         SHEET2.setTabPosition( 2 );
         SHEET2.setTabStop( false );
         SHEET2.setTop( 24 );
         SHEET2.setWidth( 1169 );
         SHEET2.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "Enter Address:" );
         LABEL2.setDisplayPosition( 1 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 0 );
         LABEL2.setParent( SHEET1 );
         LABEL2.setTabPosition( 1 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 0 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 161 );
         LABEL2.initialize();

         // ----------------------------------------
         // -- Initialize #GETGEOCOORDINATEBUTTON --
         // ----------------------------------------
         GETGEOCOORDINATEBUTTON.setCaption( "Get Geo-Coordinate" );
         GETGEOCOORDINATEBUTTON.setDisplayPosition( 2 );
         GETGEOCOORDINATEBUTTON.setLeft( 0 );
         GETGEOCOORDINATEBUTTON.setParent( SHEET1 );
         GETGEOCOORDINATEBUTTON.setTabPosition( 2 );
         GETGEOCOORDINATEBUTTON.setTop( 152 );
         GETGEOCOORDINATEBUTTON.setWidth( 281 );
         GETGEOCOORDINATEBUTTON.initialize();

         // ------------------------
         // -- Initialize #LABEL3 --
         // ------------------------
         LABEL3.setCaption( "Longitude:" );
         LABEL3.setDisplayPosition( 3 );
         LABEL3.setEllipses( "WORD" );
         LABEL3.setHeight( 25 );
         LABEL3.setLeft( 0 );
         LABEL3.setParent( SHEET1 );
         LABEL3.setTabPosition( 3 );
         LABEL3.setTabStop( false );
         LABEL3.setTop( 176 );
         LABEL3.setVerticalAlignment( "CENTER" );
         LABEL3.setWidth( 120 );
         LABEL3.initialize();

         // ------------------------
         // -- Initialize #LABEL4 --
         // ------------------------
         LABEL4.setCaption( "Latitude:" );
         LABEL4.setDisplayPosition( 4 );
         LABEL4.setEllipses( "WORD" );
         LABEL4.setHeight( 25 );
         LABEL4.setLeft( 0 );
         LABEL4.setParent( SHEET1 );
         LABEL4.setTabPosition( 4 );
         LABEL4.setTabStop( false );
         LABEL4.setTop( 200 );
         LABEL4.setVerticalAlignment( "CENTER" );
         LABEL4.setWidth( 120 );
         LABEL4.initialize();

         // --------------------------------
         // -- Initialize #LONGITUDEEDIT1 --
         // --------------------------------
         LONGITUDEEDIT1.setDisplayPosition( 5 );
         LONGITUDEEDIT1.setLeft( 120 );
         LONGITUDEEDIT1.setParent( SHEET1 );
         LONGITUDEEDIT1.setShowSelection( false );
         LONGITUDEEDIT1.setShowSelectionHilight( false );
         LONGITUDEEDIT1.setTabPosition( 5 );
         LONGITUDEEDIT1.setTop( 176 );
         LONGITUDEEDIT1.initialize();

         // -------------------------------
         // -- Initialize #LATITUDEEDIT1 --
         // -------------------------------
         LATITUDEEDIT1.setDisplayPosition( 6 );
         LATITUDEEDIT1.setLeft( 120 );
         LATITUDEEDIT1.setParent( SHEET1 );
         LATITUDEEDIT1.setShowSelection( false );
         LATITUDEEDIT1.setShowSelectionHilight( false );
         LATITUDEEDIT1.setTabPosition( 6 );
         LATITUDEEDIT1.setTop( 200 );
         LATITUDEEDIT1.initialize();

         // ------------------------
         // -- Initialize #LABEL5 --
         // ------------------------
         LABEL5.setCaption( "Enter Geo-coordinate:" );
         LABEL5.setDisplayPosition( 1 );
         LABEL5.setEllipses( "WORD" );
         LABEL5.setHeight( 25 );
         LABEL5.setLeft( 0 );
         LABEL5.setParent( SHEET2 );
         LABEL5.setTabPosition( 1 );
         LABEL5.setTabStop( false );
         LABEL5.setTop( 0 );
         LABEL5.setVerticalAlignment( "CENTER" );
         LABEL5.setWidth( 201 );
         LABEL5.initialize();

         // ------------------------
         // -- Initialize #LABEL6 --
         // ------------------------
         LABEL6.setCaption( "Longitude:" );
         LABEL6.setDisplayPosition( 2 );
         LABEL6.setEllipses( "WORD" );
         LABEL6.setHeight( 25 );
         LABEL6.setLeft( 0 );
         LABEL6.setParent( SHEET2 );
         LABEL6.setTabPosition( 2 );
         LABEL6.setTabStop( false );
         LABEL6.setTop( 24 );
         LABEL6.setVerticalAlignment( "CENTER" );
         LABEL6.setWidth( 120 );
         LABEL6.initialize();

         // ------------------------
         // -- Initialize #LABEL7 --
         // ------------------------
         LABEL7.setCaption( "Latitude:" );
         LABEL7.setDisplayPosition( 3 );
         LABEL7.setEllipses( "WORD" );
         LABEL7.setHeight( 25 );
         LABEL7.setLeft( 0 );
         LABEL7.setParent( SHEET2 );
         LABEL7.setTabPosition( 3 );
         LABEL7.setTabStop( false );
         LABEL7.setTop( 48 );
         LABEL7.setVerticalAlignment( "CENTER" );
         LABEL7.setWidth( 120 );
         LABEL7.initialize();

         // --------------------------------
         // -- Initialize #LONGITUDEEDIT2 --
         // --------------------------------
         LONGITUDEEDIT2.setDisplayPosition( 4 );
         LONGITUDEEDIT2.setLeft( 112 );
         LONGITUDEEDIT2.setParent( SHEET2 );
         LONGITUDEEDIT2.setShowSelection( false );
         LONGITUDEEDIT2.setShowSelectionHilight( false );
         LONGITUDEEDIT2.setTabPosition( 4 );
         LONGITUDEEDIT2.setTop( 24 );
         LONGITUDEEDIT2.initialize();

         // -------------------------------
         // -- Initialize #LATITUDEEDIT2 --
         // -------------------------------
         LATITUDEEDIT2.setDisplayPosition( 5 );
         LATITUDEEDIT2.setLeft( 112 );
         LATITUDEEDIT2.setParent( SHEET2 );
         LATITUDEEDIT2.setShowSelection( false );
         LATITUDEEDIT2.setShowSelectionHilight( false );
         LATITUDEEDIT2.setTabPosition( 5 );
         LATITUDEEDIT2.setTop( 48 );
         LATITUDEEDIT2.initialize();

         // ----------------------------------
         // -- Initialize #GETADDRESSBUTTON --
         // ----------------------------------
         GETADDRESSBUTTON.setCaption( "Get Address" );
         GETADDRESSBUTTON.setDisplayPosition( 6 );
         GETADDRESSBUTTON.setLeft( 0 );
         GETADDRESSBUTTON.setParent( SHEET2 );
         GETADDRESSBUTTON.setTabPosition( 6 );
         GETADDRESSBUTTON.setTop( 80 );
         GETADDRESSBUTTON.setWidth( 233 );
         GETADDRESSBUTTON.initialize();

         // ------------------------
         // -- Initialize #LABEL8 --
         // ------------------------
         LABEL8.setCaption( "Address:" );
         LABEL8.setDisplayPosition( 7 );
         LABEL8.setEllipses( "WORD" );
         LABEL8.setHeight( 25 );
         LABEL8.setLeft( 0 );
         LABEL8.setParent( SHEET2 );
         LABEL8.setTabPosition( 7 );
         LABEL8.setTabStop( false );
         LABEL8.setTop( 120 );
         LABEL8.setVerticalAlignment( "CENTER" );
         LABEL8.setWidth( 120 );
         LABEL8.initialize();

         // --------------------------------
         // -- Initialize #GETADDRESSTEXT --
         // --------------------------------
         GETADDRESSTEXT.setDisplayPosition( 8 );
         GETADDRESSTEXT.setLeft( 0 );
         GETADDRESSTEXT.setParent( SHEET2 );
         GETADDRESSTEXT.setTabPosition( 8 );
         GETADDRESSTEXT.setTop( 144 );
         GETADDRESSTEXT.setWidth( 433 );
         GETADDRESSTEXT.setHeight( 97 );
         GETADDRESSTEXT.initialize();

         // --------------------------------
         // -- Initialize #ADDRESSEDITBOX --
         // --------------------------------
         ADDRESSEDITBOX.setDisplayPosition( 7 );
         ADDRESSEDITBOX.setLeft( 0 );
         ADDRESSEDITBOX.setParent( SHEET1 );
         ADDRESSEDITBOX.setTabPosition( 7 );
         ADDRESSEDITBOX.setTop( 24 );
         ADDRESSEDITBOX.setWidth( 449 );
         ADDRESSEDITBOX.setHeight( 113 );
         ADDRESSEDITBOX.initialize();

         // ----------------------------------------------------
         // -- Add Event Handlers for #GETGEOCOORDINATEBUTTON --
         // ----------------------------------------------------
         GETGEOCOORDINATEBUTTON.addEventHandler( "CLICK", this, evtRoutine1 );

         // ----------------------------------------------
         // -- Add Event Handlers for #GETADDRESSBUTTON --
         // ----------------------------------------------
         GETADDRESSBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( LAYOUT1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #getGeoCoordinateButton.Click
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#getGeoCoordinateButton.Click", 29 );

      //
      // DEFINE_COM Class(#xDemoGoogleGeocodingServerModule.GetGeocoordinate) Name(#Geocoding)
      //
      var GEOCODING = rtn.createDataRequest( "GEOCODING", "XLBE0004", "GETGEOCOORDINATE" );

      //
      // DEFINE_COM Class(#PRIM_WEB.Json) Name(#Coordinate)
      //
      var COORDINATE = rtn.createReference( "COORDINATE", "PRIM_WEB", "Json" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage)
      //
      var ERRORMESSAGE = rtn.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize #GEOCODING --
      // ---------------------------
      GEOCODING.initialize();

      // ----------------------------
      // -- Initialize #COORDINATE --
      // ----------------------------
      COORDINATE.initialize();

      // ------------------------------
      // -- Initialize #ERRORMESSAGE --
      // ------------------------------
      ERRORMESSAGE.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      //
      // EVTROUTINE Handling(#getGeoCoordinateButton.Click)
      //
      rtn.Line( 29 );
      {

         //
         // #Geocoding.Execute Address(#AddressEditBox) Coordinate(#Coordinate) Ok(#OK) Errormessage(#ErrorMessage)
         //
         rtn.Line( 36 );
         GEOCODING.mthEXECUTE( { FLD: { "FLD_ADDRESS": ref.ADDRESSEDITBOX.get() } }, { FLD: { "FLD_GEOCOORDINATE": COORDINATE, "FLD_OK": OK, "FLD_ERRORMESSAGE": ERRORMESSAGE } } );

         //
         // IF (#OK)
         //
         rtn.Line( 38 );
         if ( Lansa.toBool( OK.get() ) )
         {

            //
            // #LongitudeEdit1 := #Coordinate.RootItem<'longitude'>.AsString
            //
            rtn.Line( 39 );
            ref.LONGITUDEEDIT1.set( COORDINATE.getRootItem().get( "longitude" ).mthASSTRING() );

            //
            // #LatitudeEdit1 := #Coordinate.RootItem<'latitude'>.AsString
            //
            rtn.Line( 40 );
            ref.LATITUDEEDIT1.set( COORDINATE.getRootItem().get( "latitude" ).mthASSTRING() );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #SYS_WEB.Alert Caption(#ErrorMessage)
            //
            rtn.Line( 42 );
            Lansa.WEB().mthALERT( ERRORMESSAGE.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 45 );
      rtn.end();
   };

   //
   // evtRoutine2 - #GetAddressButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetAddressButton.Click", 47 );

      //
      // DEFINE_COM Class(#xDemoGoogleGeocodingServerModule.GetAddress) Name(#Geocoding)
      //
      var GEOCODING = rtn.createDataRequest( "GEOCODING", "XLBE0004", "GETADDRESS" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#ErrorMessage)
      //
      var ERRORMESSAGE = rtn.createReference( "ERRORMESSAGE", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize #GEOCODING --
      // ---------------------------
      GEOCODING.initialize();

      // ------------------------------
      // -- Initialize #ERRORMESSAGE --
      // ------------------------------
      ERRORMESSAGE.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      //
      // EVTROUTINE Handling(#GetAddressButton.Click)
      //
      rtn.Line( 47 );
      {

         //
         // #Geocoding.Execute Latitude(#LongitudeEdit2.Value.AsNumber) Longtitude(#LatitudeEdit2.Value.AsNumber) Address(#GetAddressText) Ok(#OK) Errormessage(#ErrorMessage)
         //
         rtn.Line( 53 );
         GEOCODING.mthEXECUTE( { FLD: { "FLD_LATITUDE": Lansa.String.AsNumber( ref.LONGITUDEEDIT2.getValue() ), "FLD_LONGTITUDE": Lansa.String.AsNumber( ref.LATITUDEEDIT2.getValue() ) } }, { FLD: { "FLD_ADDRESS": ref.GETADDRESSTEXT, "FLD_OK": OK, "FLD_ERRORMESSAGE": ERRORMESSAGE } } );

         //
         // IF (*Not #OK)
         //
         rtn.Line( 55 );
         if ( Lansa.toBool( Lansa.not( OK.get() ) ) )
         {

            //
            // #SYS_WEB.Alert Caption(#ErrorMessage)
            //
            rtn.Line( 56 );
            Lansa.WEB().mthALERT( ERRORMESSAGE.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TAB", "PRIM_TBSH", "PRIM_PHBN", "PRIM_EDIT", "PRIM_TEXT", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_WEB.Json", "PRIM_DC.UnicodeString", "PRIM_BOLN" ]
});

//# sourceURL=xlbe0003.js
