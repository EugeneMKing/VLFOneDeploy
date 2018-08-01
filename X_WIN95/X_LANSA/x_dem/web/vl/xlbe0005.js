// ------------------------
// -- Web Page: XLBE0005 --
// ------------------------
LANSA.addComponent(
{
   id: "XLBE0005", 
   nm: "xDemoExternalProvidersLoginWebPage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Demo: External Providers Login", 
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

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ShowBasicPersonalInfo: 
         {
         },

         SetButtonsState: 
         {
            ps: 
            {
               "Enabled":
               {
                  pt: "i"
               },

               "Visible":
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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Fontsize(20)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Fontsize(20)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style3) Fontsize(22)
         //
         var STYLE3 = this.createReference( "STYLE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4) Fontsize(22)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow1) Displayposition(1) Parent(#Layout1) Height(10) Units(Content)
         //
         var LAYOUTROW1 = this.createReference( "LAYOUTROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn1) Displayposition(1) Parent(#Layout1)
         //
         var LAYOUTCOLUMN1 = this.createReference( "LAYOUTCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(2) Parent(#Layout1) Height(74) Units(Content)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(3) Parent(#Layout1) Height(74) Units(Content)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(4) Parent(#Layout1) Height(74) Units(Content)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row9) Displayposition(5) Parent(#Layout1)
         //
         var ROW9 = this.createReference( "ROW9", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#LayoutColumn1) Manage(#LoginUsingGoogleButton) Parent(#Layout1) Row(#Row5) Sizing(ContentWidthAndHeight) Flow(Down) Alignment(TopCenter) Marginleft(3) Marginright(3) Margintop(12)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#LayoutColumn1) Manage(#BasicInfoPanel) Parent(#Layout1) Row(#LayoutRow1) Sizing(ContentHeight) Flow(Down) Alignment(TopCenter)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#LoginUsingMsAzureButton) Parent(#Layout1) Row(#Row9) Sizing(None) Margintop(14) Flow(Down)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#LoginwithSalesForceButton) Parent(#Layout1) Row(#Row9) Sizing(None) Margintop(14) Flow(Down)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Alignment(TopCenter) Column(#LayoutColumn1) Manage(#LoginwithFacebookButton) Parent(#Layout1) Row(#Row9) Sizing(None) Flow(Down) Margintop(16)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout2)
         //
         var LAYOUT2 = this.createReference( "LAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(2) Parent(#Layout2)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutRow2) Displayposition(1) Parent(#Layout2) Height(37) Units(Content)
         //
         var LAYOUTROW2 = this.createReference( "LAYOUTROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutColumn2) Displayposition(1) Parent(#Layout2) Units(Content) Width(120)
         //
         var LAYOUTCOLUMN2 = this.createReference( "LAYOUTCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(3) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(4) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(5) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(2) Parent(#Layout2) Units(Pixels) Height(20)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(6) Parent(#Layout2) Units(Content) Height(68)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#LayoutColumn2) Manage(#Label1) Parent(#Layout2) Row(#LayoutRow2) Sizing(ContentHeightFitToWidth) Columnspan(2)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label2Item1) Column(#LayoutColumn2) Manage(#Label2) Parent(#Layout2) Sizing(None) Row(#Row1) Alignment(TopLeft)
         //
         var LABEL2ITEM1 = this.createReference( "LABEL2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label3Item1) Manage(#Label3) Parent(#Layout2) Row(#Row2) Sizing(None) Column(#LayoutColumn2) Alignment(TopLeft)
         //
         var LABEL3ITEM1 = this.createReference( "LABEL3ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label4Item1) Manage(#Label4) Parent(#Layout2) Row(#Row3) Sizing(None) Column(#LayoutColumn2) Alignment(TopLeft)
         //
         var LABEL4ITEM1 = this.createReference( "LABEL4ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column1) Manage(#EmailBox) Parent(#Layout2) Row(#Row1) Sizing(ContentHeightFitToWidth)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column1) Manage(#GivenNameBox) Parent(#Layout2) Row(#Row2) Sizing(ContentHeightFitToWidth)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column1) Manage(#SurnameBox) Parent(#Layout2) Row(#Row3) Sizing(ContentHeightFitToWidth)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Column(#LayoutColumn1) Manage(#LoginUsingMsLiveButton) Parent(#Layout1) Row(#Row6) Sizing(ContentWidthAndHeight) Flow(Down) Alignment(TopCenter) Marginleft(3) Marginright(3) Margintop(12)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(TopLeft) Column(#LayoutColumn2) Manage(#LogoutButton) Parent(#Layout2) Row(#Row8) Sizing(ContentWidthAndHeight) Margintop(20) Columnspan(2)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Column(#LayoutColumn1) Manage(#LoginUsingMsOffice365Button) Parent(#Layout1) Row(#Row7) Sizing(ContentWidthAndHeight) Flow(Down) Alignment(TopCenter) Marginleft(3) Marginright(3) Margintop(12)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginUsingGoogleButton) Caption('Login with Google') Displayposition(1) Left(431) Parent(#COM_OWNER) Tabposition(3) Top(22) Themedrawstyle('Title') Height(62) Width(338) Marginbottom(10) Marginleft(50) Marginright(50) Margintop(10) Enabled(False) Componenttag('Google')
         //
         var LOGINUSINGGOOGLEBUTTON = this.createReference( "LOGINUSINGGOOGLEBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#BasicInfoPanel) Displayposition(2) Left(443) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(0) Height(200) Width(314) Layoutmanager(#Layout2) Visible(False)
         //
         var BASICINFOPANEL = this.createReference( "BASICINFOPANEL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('You are now signed-in') Displayposition(2) Ellipses(Word) Height(37) Left(0) Parent(#BasicInfoPanel) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(314) Themedrawstyle('DarkTitle') Marginbottom(10) Marginleft(10) Marginright(10) Margintop(10)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('Email') Displayposition(3) Ellipses(Word) Height(25) Left(0) Parent(#BasicInfoPanel) Tabposition(2) Tabstop(False) Top(57) Verticalalignment(Center) Width(120)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label3) Caption('Given Name') Displayposition(4) Ellipses(Word) Height(25) Left(0) Parent(#BasicInfoPanel) Tabposition(3) Tabstop(False) Top(82) Verticalalignment(Center) Width(120)
         //
         var LABEL3 = this.createReference( "LABEL3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label4) Caption('Surname') Displayposition(5) Ellipses(Word) Height(25) Left(0) Parent(#BasicInfoPanel) Tabposition(4) Tabstop(False) Top(107) Verticalalignment(Center) Width(120)
         //
         var LABEL4 = this.createReference( "LABEL4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#EmailBox) Displayposition(6) Left(120) Parent(#BasicInfoPanel) Showselection(False) Showselectionhilight(False) Tabposition(5) Top(57) Width(194) Readonly(True)
         //
         var EMAILBOX = this.createReference( "EMAILBOX", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#GivenNameBox) Displayposition(7) Left(120) Parent(#BasicInfoPanel) Showselection(False) Showselectionhilight(False) Tabposition(6) Top(82) Width(194) Readonly(True)
         //
         var GIVENNAMEBOX = this.createReference( "GIVENNAMEBOX", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#SurnameBox) Displayposition(8) Left(120) Parent(#BasicInfoPanel) Showselection(False) Showselectionhilight(False) Tabposition(7) Top(107) Width(194) Readonly(True)
         //
         var SURNAMEBOX = this.createReference( "SURNAMEBOX", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#XWebModule_Client_OAuth2Login) Name(#ExtSignIn)
         //
         var EXTSIGNIN = this.createReference( "EXTSIGNIN", "XLBS0011" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginUsingMsLiveButton) Caption('Login with Microsoft Live') Displayposition(3) Left(388) Parent(#COM_OWNER) Tabposition(2) Top(96) Themedrawstyle('Title') Height(62) Width(424) Marginbottom(10) Marginleft(50) Marginright(50) Margintop(10) Enabled(False) Componenttag('MsLive')
         //
         var LOGINUSINGMSLIVEBUTTON = this.createReference( "LOGINUSINGMSLIVEBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LogoutButton) Caption('Logout (App, not External Provider)') Displayposition(1) Left(0) Parent(#BasicInfoPanel) Tabposition(8) Top(152) Height(48) Width(220) Marginbottom(15) Marginleft(15) Marginright(15) Margintop(15)
         //
         var LOGOUTBUTTON = this.createReference( "LOGOUTBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#PRIM_PHBN>) Name(#Buttons)
         //
         var BUTTONS = this.createReference( "BUTTONS", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginUsingMsOffice365Button) Caption('Login with Microsoft Office 365') Displayposition(4) Left(348) Parent(#COM_OWNER) Tabposition(1) Top(170) Themedrawstyle('Title') Height(62) Width(504) Marginbottom(10) Marginleft(50) Marginright(50) Margintop(10) Enabled(False) Componenttag('MsOffice365')
         //
         var LOGINUSINGMSOFFICE365BUTTON = this.createReference( "LOGINUSINGMSOFFICE365BUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginUsingMsAzureButton) Caption('Login with Microsoft Azure') Displayposition(5) Left(355) Parent(#COM_OWNER) Tabposition(5) Top(246) Width(491) Height(62) Componenttag('MsAzure') Style(#Style1)
         //
         var LOGINUSINGMSAZUREBUTTON = this.createReference( "LOGINUSINGMSAZUREBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginwithSalesForceButton) Caption('Login with Salesforce') Displayposition(6) Left(356) Parent(#COM_OWNER) Tabposition(6) Top(322) Width(489) Height(56) Componenttag('salesforce') Style(#Style2)
         //
         var LOGINWITHSALESFORCEBUTTON = this.createReference( "LOGINWITHSALESFORCEBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginwithFacebookButton) Caption('Login with Facebook') Displayposition(7) Left(356) Parent(#COM_OWNER) Tabposition(7) Top(394) Height(57) Width(489) Style(#Style3) Componenttag('facebook')
         //
         var LOGINWITHFACEBOOKBUTTON = this.createReference( "LOGINWITHFACEBOOKBUTTON", "PRIM_PHBN" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setFontSize( 20 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setFontSize( 20 );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #STYLE3 --
         // ------------------------
         STYLE3.setFontSize( 22 );
         STYLE3.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.setFontSize( 22 );
         STYLE4.initialize();

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW1 --
         // ----------------------------
         LAYOUTROW1.setDisplayPosition( 1 );
         LAYOUTROW1.setParent( LAYOUT1 );
         LAYOUTROW1.setHeight( 10 );
         LAYOUTROW1.setUnits( "CONTENT" );
         LAYOUTROW1.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN1 --
         // -------------------------------
         LAYOUTCOLUMN1.setDisplayPosition( 1 );
         LAYOUTCOLUMN1.setParent( LAYOUT1 );
         LAYOUTCOLUMN1.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 2 );
         ROW5.setParent( LAYOUT1 );
         ROW5.setHeight( 74 );
         ROW5.setUnits( "CONTENT" );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 3 );
         ROW6.setParent( LAYOUT1 );
         ROW6.setHeight( 74 );
         ROW6.setUnits( "CONTENT" );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 4 );
         ROW7.setParent( LAYOUT1 );
         ROW7.setHeight( 74 );
         ROW7.setUnits( "CONTENT" );
         ROW7.initialize();

         // ----------------------
         // -- Initialize #ROW9 --
         // ----------------------
         ROW9.setDisplayPosition( 5 );
         ROW9.setParent( LAYOUT1 );
         ROW9.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM1.setManage( LOGINUSINGGOOGLEBUTTON );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW5 );
         LAYOUTITEM1.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setAlignment( "TOPCENTER" );
         LAYOUTITEM1.setMarginLeft( 3 );
         LAYOUTITEM1.setMarginRight( 3 );
         LAYOUTITEM1.setMarginTop( 12 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM2.setManage( BASICINFOPANEL );
         LAYOUTITEM2.setParent( LAYOUT1 );
         LAYOUTITEM2.setRow( LAYOUTROW1 );
         LAYOUTITEM2.setSizing( "CONTENTHEIGHT" );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setAlignment( "TOPCENTER" );
         LAYOUTITEM10.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM10.setManage( LOGINUSINGMSAZUREBUTTON );
         LAYOUTITEM10.setParent( LAYOUT1 );
         LAYOUTITEM10.setRow( ROW9 );
         LAYOUTITEM10.setSizing( "NONE" );
         LAYOUTITEM10.setMarginTop( 14 );
         LAYOUTITEM10.setFlow( "DOWN" );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setAlignment( "TOPCENTER" );
         LAYOUTITEM11.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM11.setManage( LOGINWITHSALESFORCEBUTTON );
         LAYOUTITEM11.setParent( LAYOUT1 );
         LAYOUTITEM11.setRow( ROW9 );
         LAYOUTITEM11.setSizing( "NONE" );
         LAYOUTITEM11.setMarginTop( 14 );
         LAYOUTITEM11.setFlow( "DOWN" );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setAlignment( "TOPCENTER" );
         LAYOUTITEM12.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM12.setManage( LOGINWITHFACEBOOKBUTTON );
         LAYOUTITEM12.setParent( LAYOUT1 );
         LAYOUTITEM12.setRow( ROW9 );
         LAYOUTITEM12.setSizing( "NONE" );
         LAYOUTITEM12.setFlow( "DOWN" );
         LAYOUTITEM12.setMarginTop( 16 );
         LAYOUTITEM12.initialize();

         // -------------------------
         // -- Initialize #LAYOUT2 --
         // -------------------------
         LAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 2 );
         COLUMN1.setParent( LAYOUT2 );
         COLUMN1.initialize();

         // ----------------------------
         // -- Initialize #LAYOUTROW2 --
         // ----------------------------
         LAYOUTROW2.setDisplayPosition( 1 );
         LAYOUTROW2.setParent( LAYOUT2 );
         LAYOUTROW2.setHeight( 37 );
         LAYOUTROW2.setUnits( "CONTENT" );
         LAYOUTROW2.initialize();

         // -------------------------------
         // -- Initialize #LAYOUTCOLUMN2 --
         // -------------------------------
         LAYOUTCOLUMN2.setDisplayPosition( 1 );
         LAYOUTCOLUMN2.setParent( LAYOUT2 );
         LAYOUTCOLUMN2.setUnits( "CONTENT" );
         LAYOUTCOLUMN2.setWidth( 120 );
         LAYOUTCOLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 3 );
         ROW1.setParent( LAYOUT2 );
         ROW1.setHeight( 25 );
         ROW1.setUnits( "CONTENT" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 4 );
         ROW2.setParent( LAYOUT2 );
         ROW2.setHeight( 25 );
         ROW2.setUnits( "CONTENT" );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 5 );
         ROW3.setParent( LAYOUT2 );
         ROW3.setHeight( 25 );
         ROW3.setUnits( "CONTENT" );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 2 );
         ROW4.setParent( LAYOUT2 );
         ROW4.setUnits( "PIXELS" );
         ROW4.setHeight( 20 );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 6 );
         ROW8.setParent( LAYOUT2 );
         ROW8.setUnits( "CONTENT" );
         ROW8.setHeight( 68 );
         ROW8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM3.setManage( LABEL1 );
         LAYOUTITEM3.setParent( LAYOUT2 );
         LAYOUTITEM3.setRow( LAYOUTROW2 );
         LAYOUTITEM3.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM3.setColumnSpan( 2 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LABEL2ITEM1 --
         // -----------------------------
         LABEL2ITEM1.setColumn( LAYOUTCOLUMN2 );
         LABEL2ITEM1.setManage( LABEL2 );
         LABEL2ITEM1.setParent( LAYOUT2 );
         LABEL2ITEM1.setSizing( "NONE" );
         LABEL2ITEM1.setRow( ROW1 );
         LABEL2ITEM1.setAlignment( "TOPLEFT" );
         LABEL2ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LABEL3ITEM1 --
         // -----------------------------
         LABEL3ITEM1.setManage( LABEL3 );
         LABEL3ITEM1.setParent( LAYOUT2 );
         LABEL3ITEM1.setRow( ROW2 );
         LABEL3ITEM1.setSizing( "NONE" );
         LABEL3ITEM1.setColumn( LAYOUTCOLUMN2 );
         LABEL3ITEM1.setAlignment( "TOPLEFT" );
         LABEL3ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LABEL4ITEM1 --
         // -----------------------------
         LABEL4ITEM1.setManage( LABEL4 );
         LABEL4ITEM1.setParent( LAYOUT2 );
         LABEL4ITEM1.setRow( ROW3 );
         LABEL4ITEM1.setSizing( "NONE" );
         LABEL4ITEM1.setColumn( LAYOUTCOLUMN2 );
         LABEL4ITEM1.setAlignment( "TOPLEFT" );
         LABEL4ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN1 );
         LAYOUTITEM4.setManage( EMAILBOX );
         LAYOUTITEM4.setParent( LAYOUT2 );
         LAYOUTITEM4.setRow( ROW1 );
         LAYOUTITEM4.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN1 );
         LAYOUTITEM5.setManage( GIVENNAMEBOX );
         LAYOUTITEM5.setParent( LAYOUT2 );
         LAYOUTITEM5.setRow( ROW2 );
         LAYOUTITEM5.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN1 );
         LAYOUTITEM6.setManage( SURNAMEBOX );
         LAYOUTITEM6.setParent( LAYOUT2 );
         LAYOUTITEM6.setRow( ROW3 );
         LAYOUTITEM6.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM7.setManage( LOGINUSINGMSLIVEBUTTON );
         LAYOUTITEM7.setParent( LAYOUT1 );
         LAYOUTITEM7.setRow( ROW6 );
         LAYOUTITEM7.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setAlignment( "TOPCENTER" );
         LAYOUTITEM7.setMarginLeft( 3 );
         LAYOUTITEM7.setMarginRight( 3 );
         LAYOUTITEM7.setMarginTop( 12 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "TOPLEFT" );
         LAYOUTITEM8.setColumn( LAYOUTCOLUMN2 );
         LAYOUTITEM8.setManage( LOGOUTBUTTON );
         LAYOUTITEM8.setParent( LAYOUT2 );
         LAYOUTITEM8.setRow( ROW8 );
         LAYOUTITEM8.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM8.setMarginTop( 20 );
         LAYOUTITEM8.setColumnSpan( 2 );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setColumn( LAYOUTCOLUMN1 );
         LAYOUTITEM9.setManage( LOGINUSINGMSOFFICE365BUTTON );
         LAYOUTITEM9.setParent( LAYOUT1 );
         LAYOUTITEM9.setRow( ROW7 );
         LAYOUTITEM9.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM9.setFlow( "DOWN" );
         LAYOUTITEM9.setAlignment( "TOPCENTER" );
         LAYOUTITEM9.setMarginLeft( 3 );
         LAYOUTITEM9.setMarginRight( 3 );
         LAYOUTITEM9.setMarginTop( 12 );
         LAYOUTITEM9.initialize();

         // ----------------------------------------
         // -- Initialize #LOGINUSINGGOOGLEBUTTON --
         // ----------------------------------------
         LOGINUSINGGOOGLEBUTTON.setCaption( "Login with Google" );
         LOGINUSINGGOOGLEBUTTON.setDisplayPosition( 1 );
         LOGINUSINGGOOGLEBUTTON.setLeft( 431 );
         LOGINUSINGGOOGLEBUTTON.setParent( this );
         LOGINUSINGGOOGLEBUTTON.setTabPosition( 3 );
         LOGINUSINGGOOGLEBUTTON.setTop( 22 );
         LOGINUSINGGOOGLEBUTTON.setThemeDrawStyle( "Title" );
         LOGINUSINGGOOGLEBUTTON.setHeight( 62 );
         LOGINUSINGGOOGLEBUTTON.setWidth( 338 );
         LOGINUSINGGOOGLEBUTTON.setMarginBottom( 10 );
         LOGINUSINGGOOGLEBUTTON.setMarginLeft( 50 );
         LOGINUSINGGOOGLEBUTTON.setMarginRight( 50 );
         LOGINUSINGGOOGLEBUTTON.setMarginTop( 10 );
         LOGINUSINGGOOGLEBUTTON.setEnabled( false );
         LOGINUSINGGOOGLEBUTTON.setComponentTag( "Google" );
         LOGINUSINGGOOGLEBUTTON.initialize();

         // --------------------------------
         // -- Initialize #BASICINFOPANEL --
         // --------------------------------
         BASICINFOPANEL.setDisplayPosition( 2 );
         BASICINFOPANEL.setLeft( 443 );
         BASICINFOPANEL.setParent( this );
         BASICINFOPANEL.setTabPosition( 4 );
         BASICINFOPANEL.setTabStop( false );
         BASICINFOPANEL.setTop( 0 );
         BASICINFOPANEL.setHeight( 200 );
         BASICINFOPANEL.setWidth( 314 );
         BASICINFOPANEL.setLayoutManager( LAYOUT2 );
         BASICINFOPANEL.setVisible( false );
         BASICINFOPANEL.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "You are now signed-in" );
         LABEL1.setDisplayPosition( 2 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 37 );
         LABEL1.setLeft( 0 );
         LABEL1.setParent( BASICINFOPANEL );
         LABEL1.setTabPosition( 1 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 0 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 314 );
         LABEL1.setThemeDrawStyle( "DarkTitle" );
         LABEL1.setMarginBottom( 10 );
         LABEL1.setMarginLeft( 10 );
         LABEL1.setMarginRight( 10 );
         LABEL1.setMarginTop( 10 );
         LABEL1.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "Email" );
         LABEL2.setDisplayPosition( 3 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 0 );
         LABEL2.setParent( BASICINFOPANEL );
         LABEL2.setTabPosition( 2 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 57 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 120 );
         LABEL2.initialize();

         // ------------------------
         // -- Initialize #LABEL3 --
         // ------------------------
         LABEL3.setCaption( "Given Name" );
         LABEL3.setDisplayPosition( 4 );
         LABEL3.setEllipses( "WORD" );
         LABEL3.setHeight( 25 );
         LABEL3.setLeft( 0 );
         LABEL3.setParent( BASICINFOPANEL );
         LABEL3.setTabPosition( 3 );
         LABEL3.setTabStop( false );
         LABEL3.setTop( 82 );
         LABEL3.setVerticalAlignment( "CENTER" );
         LABEL3.setWidth( 120 );
         LABEL3.initialize();

         // ------------------------
         // -- Initialize #LABEL4 --
         // ------------------------
         LABEL4.setCaption( "Surname" );
         LABEL4.setDisplayPosition( 5 );
         LABEL4.setEllipses( "WORD" );
         LABEL4.setHeight( 25 );
         LABEL4.setLeft( 0 );
         LABEL4.setParent( BASICINFOPANEL );
         LABEL4.setTabPosition( 4 );
         LABEL4.setTabStop( false );
         LABEL4.setTop( 107 );
         LABEL4.setVerticalAlignment( "CENTER" );
         LABEL4.setWidth( 120 );
         LABEL4.initialize();

         // --------------------------
         // -- Initialize #EMAILBOX --
         // --------------------------
         EMAILBOX.setDisplayPosition( 6 );
         EMAILBOX.setLeft( 120 );
         EMAILBOX.setParent( BASICINFOPANEL );
         EMAILBOX.setShowSelection( false );
         EMAILBOX.setShowSelectionHilight( false );
         EMAILBOX.setTabPosition( 5 );
         EMAILBOX.setTop( 57 );
         EMAILBOX.setWidth( 194 );
         EMAILBOX.setReadOnly( true );
         EMAILBOX.initialize();

         // ------------------------------
         // -- Initialize #GIVENNAMEBOX --
         // ------------------------------
         GIVENNAMEBOX.setDisplayPosition( 7 );
         GIVENNAMEBOX.setLeft( 120 );
         GIVENNAMEBOX.setParent( BASICINFOPANEL );
         GIVENNAMEBOX.setShowSelection( false );
         GIVENNAMEBOX.setShowSelectionHilight( false );
         GIVENNAMEBOX.setTabPosition( 6 );
         GIVENNAMEBOX.setTop( 82 );
         GIVENNAMEBOX.setWidth( 194 );
         GIVENNAMEBOX.setReadOnly( true );
         GIVENNAMEBOX.initialize();

         // ----------------------------
         // -- Initialize #SURNAMEBOX --
         // ----------------------------
         SURNAMEBOX.setDisplayPosition( 8 );
         SURNAMEBOX.setLeft( 120 );
         SURNAMEBOX.setParent( BASICINFOPANEL );
         SURNAMEBOX.setShowSelection( false );
         SURNAMEBOX.setShowSelectionHilight( false );
         SURNAMEBOX.setTabPosition( 7 );
         SURNAMEBOX.setTop( 107 );
         SURNAMEBOX.setWidth( 194 );
         SURNAMEBOX.setReadOnly( true );
         SURNAMEBOX.initialize();

         // ---------------------------
         // -- Initialize #EXTSIGNIN --
         // ---------------------------
         EXTSIGNIN.initialize();

         // ----------------------------------------
         // -- Initialize #LOGINUSINGMSLIVEBUTTON --
         // ----------------------------------------
         LOGINUSINGMSLIVEBUTTON.setCaption( "Login with Microsoft Live" );
         LOGINUSINGMSLIVEBUTTON.setDisplayPosition( 3 );
         LOGINUSINGMSLIVEBUTTON.setLeft( 388 );
         LOGINUSINGMSLIVEBUTTON.setParent( this );
         LOGINUSINGMSLIVEBUTTON.setTabPosition( 2 );
         LOGINUSINGMSLIVEBUTTON.setTop( 96 );
         LOGINUSINGMSLIVEBUTTON.setThemeDrawStyle( "Title" );
         LOGINUSINGMSLIVEBUTTON.setHeight( 62 );
         LOGINUSINGMSLIVEBUTTON.setWidth( 424 );
         LOGINUSINGMSLIVEBUTTON.setMarginBottom( 10 );
         LOGINUSINGMSLIVEBUTTON.setMarginLeft( 50 );
         LOGINUSINGMSLIVEBUTTON.setMarginRight( 50 );
         LOGINUSINGMSLIVEBUTTON.setMarginTop( 10 );
         LOGINUSINGMSLIVEBUTTON.setEnabled( false );
         LOGINUSINGMSLIVEBUTTON.setComponentTag( "MsLive" );
         LOGINUSINGMSLIVEBUTTON.initialize();

         // ------------------------------
         // -- Initialize #LOGOUTBUTTON --
         // ------------------------------
         LOGOUTBUTTON.setCaption( "Logout (App, not External Provider)" );
         LOGOUTBUTTON.setDisplayPosition( 1 );
         LOGOUTBUTTON.setLeft( 0 );
         LOGOUTBUTTON.setParent( BASICINFOPANEL );
         LOGOUTBUTTON.setTabPosition( 8 );
         LOGOUTBUTTON.setTop( 152 );
         LOGOUTBUTTON.setHeight( 48 );
         LOGOUTBUTTON.setWidth( 220 );
         LOGOUTBUTTON.setMarginBottom( 15 );
         LOGOUTBUTTON.setMarginLeft( 15 );
         LOGOUTBUTTON.setMarginRight( 15 );
         LOGOUTBUTTON.setMarginTop( 15 );
         LOGOUTBUTTON.initialize();

         // -------------------------
         // -- Initialize #BUTTONS --
         // -------------------------
         BUTTONS.setCollects( "PRIM_PHBN" );
         BUTTONS.initialize();

         // ---------------------------------------------
         // -- Initialize #LOGINUSINGMSOFFICE365BUTTON --
         // ---------------------------------------------
         LOGINUSINGMSOFFICE365BUTTON.setCaption( "Login with Microsoft Office 365" );
         LOGINUSINGMSOFFICE365BUTTON.setDisplayPosition( 4 );
         LOGINUSINGMSOFFICE365BUTTON.setLeft( 348 );
         LOGINUSINGMSOFFICE365BUTTON.setParent( this );
         LOGINUSINGMSOFFICE365BUTTON.setTabPosition( 1 );
         LOGINUSINGMSOFFICE365BUTTON.setTop( 170 );
         LOGINUSINGMSOFFICE365BUTTON.setThemeDrawStyle( "Title" );
         LOGINUSINGMSOFFICE365BUTTON.setHeight( 62 );
         LOGINUSINGMSOFFICE365BUTTON.setWidth( 504 );
         LOGINUSINGMSOFFICE365BUTTON.setMarginBottom( 10 );
         LOGINUSINGMSOFFICE365BUTTON.setMarginLeft( 50 );
         LOGINUSINGMSOFFICE365BUTTON.setMarginRight( 50 );
         LOGINUSINGMSOFFICE365BUTTON.setMarginTop( 10 );
         LOGINUSINGMSOFFICE365BUTTON.setEnabled( false );
         LOGINUSINGMSOFFICE365BUTTON.setComponentTag( "MsOffice365" );
         LOGINUSINGMSOFFICE365BUTTON.initialize();

         // -----------------------------------------
         // -- Initialize #LOGINUSINGMSAZUREBUTTON --
         // -----------------------------------------
         LOGINUSINGMSAZUREBUTTON.setCaption( "Login with Microsoft Azure" );
         LOGINUSINGMSAZUREBUTTON.setDisplayPosition( 5 );
         LOGINUSINGMSAZUREBUTTON.setLeft( 355 );
         LOGINUSINGMSAZUREBUTTON.setParent( this );
         LOGINUSINGMSAZUREBUTTON.setTabPosition( 5 );
         LOGINUSINGMSAZUREBUTTON.setTop( 246 );
         LOGINUSINGMSAZUREBUTTON.setWidth( 491 );
         LOGINUSINGMSAZUREBUTTON.setHeight( 62 );
         LOGINUSINGMSAZUREBUTTON.setComponentTag( "MsAzure" );
         LOGINUSINGMSAZUREBUTTON.setStyle( STYLE1 );
         LOGINUSINGMSAZUREBUTTON.initialize();

         // -------------------------------------------
         // -- Initialize #LOGINWITHSALESFORCEBUTTON --
         // -------------------------------------------
         LOGINWITHSALESFORCEBUTTON.setCaption( "Login with Salesforce" );
         LOGINWITHSALESFORCEBUTTON.setDisplayPosition( 6 );
         LOGINWITHSALESFORCEBUTTON.setLeft( 356 );
         LOGINWITHSALESFORCEBUTTON.setParent( this );
         LOGINWITHSALESFORCEBUTTON.setTabPosition( 6 );
         LOGINWITHSALESFORCEBUTTON.setTop( 322 );
         LOGINWITHSALESFORCEBUTTON.setWidth( 489 );
         LOGINWITHSALESFORCEBUTTON.setHeight( 56 );
         LOGINWITHSALESFORCEBUTTON.setComponentTag( "salesforce" );
         LOGINWITHSALESFORCEBUTTON.setStyle( STYLE2 );
         LOGINWITHSALESFORCEBUTTON.initialize();

         // -----------------------------------------
         // -- Initialize #LOGINWITHFACEBOOKBUTTON --
         // -----------------------------------------
         LOGINWITHFACEBOOKBUTTON.setCaption( "Login with Facebook" );
         LOGINWITHFACEBOOKBUTTON.setDisplayPosition( 7 );
         LOGINWITHFACEBOOKBUTTON.setLeft( 356 );
         LOGINWITHFACEBOOKBUTTON.setParent( this );
         LOGINWITHFACEBOOKBUTTON.setTabPosition( 7 );
         LOGINWITHFACEBOOKBUTTON.setTop( 394 );
         LOGINWITHFACEBOOKBUTTON.setHeight( 57 );
         LOGINWITHFACEBOOKBUTTON.setWidth( 489 );
         LOGINWITHFACEBOOKBUTTON.setStyle( STYLE3 );
         LOGINWITHFACEBOOKBUTTON.setComponentTag( "facebook" );
         LOGINWITHFACEBOOKBUTTON.initialize();

         // ------------------------------------------
         // -- Add Event Handlers for #LOGOUTBUTTON --
         // ------------------------------------------
         LOGOUTBUTTON.addEventHandler( "CLICK", this, evtRoutine5 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTONS --
         // -------------------------------------
         BUTTONS.addEventHandler( "CLICK", this, evtRoutine2 );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 63 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 63 );
      {

         //
         // #Buttons.Insert( #LoginUsingGoogleButton )
         //
         rtn.Line( 64 );
         ref.BUTTONS.mthINSERT( ref.LOGINUSINGGOOGLEBUTTON );

         //
         // #Buttons.Insert( #LoginUsingMsLiveButton )
         //
         rtn.Line( 65 );
         ref.BUTTONS.mthINSERT( ref.LOGINUSINGMSLIVEBUTTON );

         //
         // #Buttons.Insert( #LoginUsingMsOffice365Button )
         //
         rtn.Line( 66 );
         ref.BUTTONS.mthINSERT( ref.LOGINUSINGMSOFFICE365BUTTON );

         //
         // #Buttons.Insert( #LoginUsingMsAzureButton )
         //
         rtn.Line( 67 );
         ref.BUTTONS.mthINSERT( ref.LOGINUSINGMSAZUREBUTTON );

         //
         // #Buttons.Insert( #LoginwithSalesForceButton )
         //
         rtn.Line( 68 );
         ref.BUTTONS.mthINSERT( ref.LOGINWITHSALESFORCEBUTTON );

         //
         // #Buttons.Insert( #LoginwithFacebookButton )
         //
         rtn.Line( 69 );
         ref.BUTTONS.mthINSERT( ref.LOGINWITHFACEBOOKBUTTON );

         //
         // #COM_SELF.SetButtonsState Enabled(False)
         //
         rtn.Line( 71 );
         this.mthSETBUTTONSSTATE( false, undefined );

         //
         // #COM_SELF.ShowBasicPersonalInfo
         //
         rtn.Line( 73 );
         this.mthSHOWBASICPERSONALINFO();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Buttons<>.Click
   //
   function evtRoutine2( SENDER, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Buttons<>.Click", 76 );

      //
      // EVTROUTINE Handling(#Buttons<>.Click) Com_Sender(#Sender)
      //
      rtn.Line( 76 );
      {

         //
         // #ExtSignIn.ShowSigninForm Identityprovider(#Sender.ComponentTag) Authorizationscopes(*NULL)
         //
         rtn.Line( 77 );
         ref.EXTSIGNIN.mthSHOWSIGNINFORM( SENDER.getComponentTag(), null );

         //
         // #COM_SELF.SetButtonsState Enabled(False)
         //
         rtn.Line( 79 );
         this.mthSETBUTTONSSTATE( false, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 80 );
      rtn.end();
   };

   //
   // mthSHOWBASICPERSONALINFO - ShowBasicPersonalInfo
   //
   COM_OWNER.mthSHOWBASICPERSONALINFO = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowBasicPersonalInfo", 82 ), mth = rtn;

      //
      // DEFINE_COM Class(#XWebModule_Server_OAuth2Login.GetBasicUserInfo) Name(#GetInfo)
      //
      var GETINFO = rtn.createDataRequest( "GETINFO", "XLBS0012", "GETBASICUSERINFO" );

      //
      // DEFINE_COM Class(#PRIM_BOLN) Name(#OK)
      //
      var OK = rtn.createReference( "OK", "PRIM_BOLN" );

      // -------------------------
      // -- Initialize #GETINFO --
      // -------------------------
      GETINFO.initialize();

      // --------------------
      // -- Initialize #OK --
      // --------------------
      OK.initialize();

      // -------------------------------------
      // -- Add Event Handlers for #GETINFO --
      // -------------------------------------
      GETINFO.addEventHandler( "COMPLETED", this, evtRoutine3 );
      GETINFO.addEventHandler( "FAILED", this, evtRoutine4 );

      //
      // MTHROUTINE Name(ShowBasicPersonalInfo)
      //
      rtn.Line( 82 );
      {

         //
         // #GetInfo.ExecuteAsync Email(#EmailBox) Givenname(#GivenNameBox) Surname(#SurnameBox) Ok(#OK)
         //
         rtn.Line( 86 );
         GETINFO.mthEXECUTEASYNC( {  }, { FLD: { "FLD_EMAIL": ref.EMAILBOX, "FLD_GIVENNAME": ref.GIVENNAMEBOX, "FLD_SURNAME": ref.SURNAMEBOX, "FLD_OK": OK } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 104 );
      rtn.end();

      //
      // evtRoutine3 - #GetInfo.Completed
      //
      function evtRoutine3( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetInfo.Completed", 88, mth );

         //
         // EVTROUTINE Handling(#GetInfo.Completed)
         //
         rtn.Line( 88 );
         {

            //
            // #COM_SELF.SetButtonsState Visible(False)
            //
            rtn.Line( 89 );
            this.mthSETBUTTONSSTATE( undefined, false );

            //
            // IF (#OK)
            //
            rtn.Line( 91 );
            if ( Lansa.toBool( OK.get() ) )
            {

               //
               // #BasicInfoPanel.Visible := True
               //
               rtn.Line( 92 );
               ref.BASICINFOPANEL.setVisible( true );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #BasicInfoPanel.Visible := False
               //
               rtn.Line( 94 );
               ref.BASICINFOPANEL.setVisible( false );

               //
               // #SYS_WEB.Alert Caption('Unable to retrieve basic user information.')
               //
               rtn.Line( 95 );
               Lansa.WEB().mthALERT( "Unable to retrieve basic user information." );

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 97 );
         rtn.end();
      }

      //
      // evtRoutine4 - #GetInfo.Failed
      //
      function evtRoutine4( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetInfo.Failed", 99, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#GetInfo.Failed) Handled(#Handled)
         //
         rtn.Line( 99 );
         {

            //
            // #BasicInfoPanel.Visible := False
            //
            rtn.Line( 100 );
            ref.BASICINFOPANEL.setVisible( false );

            //
            // #COM_SELF.SetButtonsState Enabled(True)
            //
            rtn.Line( 101 );
            this.mthSETBUTTONSSTATE( true, undefined );

            //
            // #Handled := True
            //
            rtn.Line( 102 );
            HANDLED.set( true );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 103 );
         rtn.end();
      }
   };

   //
   // mthSETBUTTONSSTATE - SetButtonsState
   //
   COM_OWNER.mthSETBUTTONSSTATE = function( parm_ENABLED, parm_VISIBLE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetButtonsState", 106 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_BOLN) Name(#Enabled) Mandatory(True)
      //
      var ENABLED = rtn.createParameter( "ENABLED", "PRIM_BOLN" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_BOLN) Name(#Visible) Mandatory(True)
      //
      var VISIBLE = rtn.createParameter( "VISIBLE", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ENABLED.set( ( parm_ENABLED === undefined )  ?  ( true ) : ( parm_ENABLED ) );
      VISIBLE.set( ( parm_VISIBLE === undefined )  ?  ( true ) : ( parm_VISIBLE ) );

      //
      // MTHROUTINE Name(SetButtonsState)
      //
      rtn.Line( 106 );
      {

         //
         // SET Com(#Buttons<>) Enabled(#Enabled) Visible(#Visible)
         //
         rtn.Line( 110 );
         for ( var l1 = ref.BUTTONS.createIterator(); l1.step(); )
         {
            l1.item().setEnabled( ENABLED.get() );
            l1.item().setVisible( VISIBLE.get() );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 111 );
      rtn.end();
   };

   //
   // evtRoutine5 - #LogoutButton.Click
   //
   function evtRoutine5( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LogoutButton.Click", 113 );

      //
      // DEFINE_COM Class(#XWebModule_Server_OAuth2Login.EndWebSession) Name(#Srv)
      //
      var SRV = rtn.createDataRequest( "SRV", "XLBS0012", "ENDWEBSESSION" );

      // ---------------------
      // -- Initialize #SRV --
      // ---------------------
      SRV.initialize();

      //
      // EVTROUTINE Handling(#LogoutButton.Click)
      //
      rtn.Line( 113 );
      {

         //
         // #Srv.Execute
         //
         rtn.Line( 116 );
         SRV.mthEXECUTE( {  }, {  } );

         //
         // #COM_SELF.ShowBasicPersonalInfo
         //
         rtn.Line( 117 );
         this.mthSHOWBASICPERSONALINFO();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 118 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBS0011" ],
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_PHBN", "PRIM_PANL", "PRIM_LABL", "PRIM_EDIT", "PRIM_LCOL", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_BOLN" ]
});

//# sourceURL=xlbe0005.js
