// ------------------------
// -- Web Page: XLBE0008 --
// ------------------------
LANSA.addComponent(
{
   id: "XLBE0008", 
   nm: "xDemoAuthy2FAWebPage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Demo: Twilio Authy 2-Factor Auth", 
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
      STD_BOOL:
      {
         nm: "STD_BOOL",
         ft: "A",
         ln: 5,
         dc: 0,
         lb: { "ENG": "Standard", "FRA": "Booléen std" }[ curLanguage ],
         h1: { "ENG": "Boolean", "FRA": "Booléen" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Standard Boolean", "FRA": "Booléen standard" }[ curLanguage ],
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
         DoLoginFirstPart: 
         {
         },

         DoLoginSecondPart: 
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

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "XLBE0008", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Backgroundbrush(#Brush1)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(Theme100)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Backgroundbrush(#Brush2)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(Theme50)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style3) Fontsize(36) Fontunits(Point) Bold(True)
         //
         var STYLE3 = this.createReference( "STYLE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style4) Fontsize(20) Fontunits(Point)
         //
         var STYLE4 = this.createReference( "STYLE4", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style5) Fontsize(36) Fontunits(Point) Bold(True)
         //
         var STYLE5 = this.createReference( "STYLE5", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style6) Fontsize(20) Fontunits(Point)
         //
         var STYLE6 = this.createReference( "STYLE6", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style7) Bold(True) Fontsize(14) Fontunits(Pixel)
         //
         var STYLE7 = this.createReference( "STYLE7", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#Layout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(3) Parent(#Layout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(2) Parent(#Layout1) Units(Pixels) Width(10)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#Layout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item1) Manage(#Panel1) Parent(#Layout1) Row(#Row1) Column(#Column1)
         //
         var PANEL1ITEM1 = this.createReference( "PANEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column2) Manage(#Panel2) Parent(#Layout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout2) Marginright(2)
         //
         var LAYOUT2 = this.createReference( "LAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(1) Parent(#Layout2)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(1) Parent(#Layout2) Height(65) Units(Content)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(5) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(6) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(7) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(4) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(2) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row9) Displayposition(8) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW9 = this.createReference( "ROW9", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row10) Displayposition(9) Parent(#Layout2) Height(25) Units(Content)
         //
         var ROW10 = this.createReference( "ROW10", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row11) Displayposition(10) Parent(#Layout2) Height(108) Units(Content)
         //
         var ROW11 = this.createReference( "ROW11", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column3) Manage(#Label1) Parent(#Layout2) Row(#Row2) Sizing(ContentWidthAndHeight)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column3) Manage(#CountryCodeInput) Parent(#Layout2) Row(#Row4) Sizing(None) Alignment(TopLeft) Flow(Right) Marginright(3)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Column(#Column3) Manage(#ReenterPasswordInput) Parent(#Layout2) Row(#Row10) Sizing(ContentHeightFitToWidth) Alignment(TopLeft)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#Column3) Manage(#CellNumberInput) Parent(#Layout2) Row(#Row4) Sizing(None) Flow(Right) Alignment(TopLeft)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column3) Manage(#Label2) Parent(#Layout2) Row(#Row9) Sizing(None)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(TopLeft) Column(#Column3) Manage(#Label3) Parent(#Layout2) Row(#Row8) Sizing(None)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(TopLeft) Column(#Column3) Manage(#Label4) Parent(#Layout2) Row(#Row7) Sizing(None)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Alignment(TopLeft) Column(#Column3) Manage(#Label5) Parent(#Layout2) Row(#Row5) Sizing(None)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Column(#Column3) Manage(#EmailInput) Parent(#Layout2) Row(#Row3) Sizing(ContentHeightFitToWidth) Alignment(TopLeft)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Column(#Column3) Manage(#PasswordInput) Parent(#Layout2) Row(#Row6) Sizing(ContentHeightFitToWidth) Alignment(TopLeft)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Alignment(TopLeft) Column(#Column3) Manage(#RegisterButton) Parent(#Layout2) Row(#Row11) Sizing(ContentWidthAndHeight) Margintop(50)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout3)
         //
         var LAYOUT3 = this.createReference( "LAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(1) Parent(#Layout3)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row12) Displayposition(1) Parent(#Layout3) Height(65) Units(Content)
         //
         var ROW12 = this.createReference( "ROW12", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row13) Displayposition(2) Parent(#Layout3) Height(25) Units(Content)
         //
         var ROW13 = this.createReference( "ROW13", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row14) Displayposition(3) Parent(#Layout3) Height(25) Units(Content)
         //
         var ROW14 = this.createReference( "ROW14", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row15) Displayposition(4) Parent(#Layout3) Height(25) Units(Content)
         //
         var ROW15 = this.createReference( "ROW15", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row16) Displayposition(5) Parent(#Layout3) Height(25) Units(Content)
         //
         var ROW16 = this.createReference( "ROW16", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row17) Displayposition(7) Parent(#Layout3) Height(108) Units(Content)
         //
         var ROW17 = this.createReference( "ROW17", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row18) Displayposition(6) Parent(#Layout3) Units(Pixels) Height(80)
         //
         var ROW18 = this.createReference( "ROW18", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem13) Alignment(TopLeft) Column(#Column3) Manage(#Label6) Parent(#Layout2) Row(#Row2) Sizing(ContentWidthAndHeight)
         //
         var LAYOUTITEM13 = this.createReference( "LAYOUTITEM13", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem14) Alignment(TopLeft) Column(#Column4) Manage(#Label7) Parent(#Layout3) Row(#Row12) Sizing(ContentWidthAndHeight)
         //
         var LAYOUTITEM14 = this.createReference( "LAYOUTITEM14", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem15) Alignment(TopLeft) Column(#Column4) Manage(#Label8) Parent(#Layout3) Row(#Row15) Sizing(None)
         //
         var LAYOUTITEM15 = this.createReference( "LAYOUTITEM15", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem16) Alignment(TopLeft) Column(#Column4) Manage(#PasswordInput2) Parent(#Layout3) Row(#Row16) Sizing(FitToWidth)
         //
         var LAYOUTITEM16 = this.createReference( "LAYOUTITEM16", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem17) Alignment(TopLeft) Column(#Column4) Manage(#Label9) Parent(#Layout3) Row(#Row13) Sizing(None)
         //
         var LAYOUTITEM17 = this.createReference( "LAYOUTITEM17", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem18) Alignment(TopLeft) Column(#Column4) Manage(#EmailInput2) Parent(#Layout3) Row(#Row14) Sizing(FitToWidth)
         //
         var LAYOUTITEM18 = this.createReference( "LAYOUTITEM18", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem19) Column(#Column4) Manage(#LoginButton) Margintop(50) Parent(#Layout3) Row(#Row17) Sizing(ContentWidthAndHeight) Alignment(TopLeft)
         //
         var LAYOUTITEM19 = this.createReference( "LAYOUTITEM19", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel3Item1) Manage(#Panel3) Parent(#Layout3) Row(#Row18) Sizing(ContentHeightFitToWidth) Alignment(CenterLeft) Column(#Column4)
         //
         var PANEL3ITEM1 = this.createReference( "PANEL3ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout4)
         //
         var LAYOUT4 = this.createReference( "LAYOUT4", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(1) Parent(#Layout4)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row19) Displayposition(1) Parent(#Layout4) Height(19) Units(Content)
         //
         var ROW19 = this.createReference( "ROW19", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row20) Displayposition(2) Parent(#Layout4) Height(30) Units(Content)
         //
         var ROW20 = this.createReference( "ROW20", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem20) Alignment(TopLeft) Column(#Column6) Manage(#TokenLabel) Parent(#Layout4) Row(#Row19) Sizing(ContentWidthAndHeight) Marginbottom(1)
         //
         var LAYOUTITEM20 = this.createReference( "LAYOUTITEM20", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem21) Alignment(TopLeft) Column(#Column6) Manage(#TokenInput) Parent(#Layout4) Row(#Row20) Sizing(ContentWidthAndHeight) Margintop(5)
         //
         var LAYOUTITEM21 = this.createReference( "LAYOUTITEM21", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Height(800) Width(595) Style(#Style1) Layoutmanager(#Layout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel2) Displayposition(2) Left(605) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(0) Height(800) Width(595) Style(#Style2) Layoutmanager(#Layout3)
         //
         var PANEL2 = this.createReference( "PANEL2", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Register User') Displayposition(1) Ellipses(Word) Height(65) Left(0) Parent(#Panel1) Tabposition(6) Tabstop(False) Top(0) Verticalalignment(Center) Width(300) Style(#Style3)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#CountryCodeInput) Displayposition(2) Left(0) Parent(#Panel1) Showselection(False) Showselectionhilight(False) Tabposition(2) Top(140) Placeholder('Country Code') Width(129)
         //
         var COUNTRYCODEINPUT = this.createReference( "COUNTRYCODEINPUT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#ReenterPasswordInput) Displayposition(3) Left(0) Parent(#Panel1) Showselection(False) Showselectionhilight(False) Tabposition(5) Top(240) Placeholder('Re-enter Password') Width(593) Passwordchar('*')
         //
         var REENTERPASSWORDINPUT = this.createReference( "REENTERPASSWORDINPUT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#CellNumberInput) Displayposition(4) Left(132) Parent(#Panel1) Showselection(False) Showselectionhilight(False) Tabposition(3) Top(140) Placeholder('Phone Number') Width(340)
         //
         var CELLNUMBERINPUT = this.createReference( "CELLNUMBERINPUT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('Re-enter Password') Displayposition(5) Ellipses(Word) Height(25) Left(0) Parent(#Panel1) Tabposition(8) Tabstop(False) Top(215) Verticalalignment(Center) Width(120)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label3) Caption('Email') Displayposition(6) Ellipses(Word) Height(25) Left(0) Parent(#Panel1) Tabposition(11) Tabstop(False) Top(65) Verticalalignment(Center) Width(120)
         //
         var LABEL3 = this.createReference( "LABEL3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label4) Caption('Cell Phone Number') Displayposition(7) Ellipses(Word) Height(25) Left(0) Parent(#Panel1) Tabposition(10) Tabstop(False) Top(115) Verticalalignment(Center) Width(120)
         //
         var LABEL4 = this.createReference( "LABEL4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label5) Caption('Password') Displayposition(8) Ellipses(Word) Height(25) Left(0) Parent(#Panel1) Tabposition(9) Tabstop(False) Top(165) Verticalalignment(Center) Width(120)
         //
         var LABEL5 = this.createReference( "LABEL5", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#EmailInput) Displayposition(9) Left(0) Parent(#Panel1) Showselection(False) Showselectionhilight(False) Tabposition(1) Top(90) Placeholder('Enter Email') Width(593)
         //
         var EMAILINPUT = this.createReference( "EMAILINPUT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#PasswordInput) Displayposition(10) Left(0) Parent(#Panel1) Showselection(False) Showselectionhilight(False) Tabposition(4) Top(190) Placeholder('Enter Password') Width(593) Passwordchar('*')
         //
         var PASSWORDINPUT = this.createReference( "PASSWORDINPUT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#RegisterButton) Caption('Register') Displayposition(11) Left(0) Parent(#Panel1) Tabposition(12) Top(315) Style(#Style4) Height(58) Width(160) Marginbottom(10) Marginleft(30) Marginright(30) Margintop(10)
         //
         var REGISTERBUTTON = this.createReference( "REGISTERBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label6) Caption('Register User') Displayposition(12) Ellipses(Word) Height(65) Left(0) Parent(#Panel1) Tabposition(7) Tabstop(False) Top(0) Verticalalignment(Center) Width(300) Style(#Style3)
         //
         var LABEL6 = this.createReference( "LABEL6", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label7) Caption('Login') Displayposition(1) Ellipses(Word) Height(65) Left(0) Parent(#Panel2) Tabposition(3) Tabstop(False) Top(0) Verticalalignment(Center) Width(128) Style(#Style5)
         //
         var LABEL7 = this.createReference( "LABEL7", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label8) Caption('Password') Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#Panel2) Tabposition(5) Tabstop(False) Top(115) Verticalalignment(Center) Width(120)
         //
         var LABEL8 = this.createReference( "LABEL8", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#PasswordInput2) Displayposition(3) Left(0) Parent(#Panel2) Showselection(False) Showselectionhilight(False) Tabposition(2) Top(140) Width(595) Passwordchar('*') Placeholder('Enter Password')
         //
         var PASSWORDINPUT2 = this.createReference( "PASSWORDINPUT2", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label9) Caption('Email') Displayposition(4) Ellipses(Word) Height(25) Left(0) Parent(#Panel2) Tabposition(4) Tabstop(False) Top(65) Verticalalignment(Center) Width(120)
         //
         var LABEL9 = this.createReference( "LABEL9", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#EmailInput2) Displayposition(5) Left(0) Parent(#Panel2) Showselection(False) Showselectionhilight(False) Tabposition(1) Top(90) Width(595) Placeholder('Enter Email')
         //
         var EMAILINPUT2 = this.createReference( "EMAILINPUT2", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginButton) Caption('Login') Displayposition(6) Left(0) Parent(#Panel2) Tabposition(6) Top(295) Style(#Style6) Height(58) Width(130) Marginleft(30) Marginbottom(10) Marginright(30) Margintop(10)
         //
         var LOGINBUTTON = this.createReference( "LOGINBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel3) Displayposition(7) Left(0) Parent(#Panel2) Tabposition(7) Tabstop(False) Top(180) Width(595) Layoutmanager(#Layout4)
         //
         var PANEL3 = this.createReference( "PANEL3", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#TokenLabel) Caption('Enter the token sent to your phone:') Displayposition(1) Ellipses(Word) Height(20) Left(0) Parent(#Panel3) Tabposition(1) Tabstop(False) Verticalalignment(Center) Width(235) Visible(False) Style(#Style7) Top(-1)
         //
         var TOKENLABEL = this.createReference( "TOKENLABEL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_EDIT) Name(#TokenInput) Displayposition(2) Left(0) Parent(#Panel3) Showselection(False) Showselectionhilight(False) Tabposition(2) Top(24) Width(209) Visible(False)
         //
         var TOKENINPUT = this.createReference( "TOKENINPUT", "PRIM_EDIT" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#IsLoginSecondPart)
         //
         var ISLOGINSECONDPART = this.createReference( "ISLOGINSECONDPART", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_ALPH) Name(#EOL)
         //
         var EOL = this.createReference( "EOL", "PRIM_ALPH" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBackgroundBrush( BRUSH1 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "THEME100" );
         BRUSH1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setBackgroundBrush( BRUSH2 );
         STYLE2.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "THEME50" );
         BRUSH2.initialize();

         // ------------------------
         // -- Initialize #STYLE3 --
         // ------------------------
         STYLE3.setFontSize( 36 );
         STYLE3.setFontUnits( "POINT" );
         STYLE3.setBold( true );
         STYLE3.initialize();

         // ------------------------
         // -- Initialize #STYLE4 --
         // ------------------------
         STYLE4.setFontSize( 20 );
         STYLE4.setFontUnits( "POINT" );
         STYLE4.initialize();

         // ------------------------
         // -- Initialize #STYLE5 --
         // ------------------------
         STYLE5.setFontSize( 36 );
         STYLE5.setFontUnits( "POINT" );
         STYLE5.setBold( true );
         STYLE5.initialize();

         // ------------------------
         // -- Initialize #STYLE6 --
         // ------------------------
         STYLE6.setFontSize( 20 );
         STYLE6.setFontUnits( "POINT" );
         STYLE6.initialize();

         // ------------------------
         // -- Initialize #STYLE7 --
         // ------------------------
         STYLE7.setBold( true );
         STYLE7.setFontSize( 14 );
         STYLE7.setFontUnits( "PIXEL" );
         STYLE7.initialize();

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
         COLUMN2.setDisplayPosition( 3 );
         COLUMN2.setParent( LAYOUT1 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 2 );
         COLUMN5.setParent( LAYOUT1 );
         COLUMN5.setUnits( "PIXELS" );
         COLUMN5.setWidth( 10 );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( LAYOUT1 );
         ROW1.initialize();

         // -----------------------------
         // -- Initialize #PANEL1ITEM1 --
         // -----------------------------
         PANEL1ITEM1.setManage( PANEL1 );
         PANEL1ITEM1.setParent( LAYOUT1 );
         PANEL1ITEM1.setRow( ROW1 );
         PANEL1ITEM1.setColumn( COLUMN1 );
         PANEL1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setManage( PANEL2 );
         LAYOUTITEM1.setParent( LAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // -------------------------
         // -- Initialize #LAYOUT2 --
         // -------------------------
         LAYOUT2.setMarginRight( 2 );
         LAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 1 );
         COLUMN3.setParent( LAYOUT2 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 1 );
         ROW2.setParent( LAYOUT2 );
         ROW2.setHeight( 65 );
         ROW2.setUnits( "CONTENT" );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( LAYOUT2 );
         ROW3.setHeight( 25 );
         ROW3.setUnits( "CONTENT" );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 5 );
         ROW4.setParent( LAYOUT2 );
         ROW4.setHeight( 25 );
         ROW4.setUnits( "CONTENT" );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 6 );
         ROW5.setParent( LAYOUT2 );
         ROW5.setHeight( 25 );
         ROW5.setUnits( "CONTENT" );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 7 );
         ROW6.setParent( LAYOUT2 );
         ROW6.setHeight( 25 );
         ROW6.setUnits( "CONTENT" );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 4 );
         ROW7.setParent( LAYOUT2 );
         ROW7.setHeight( 25 );
         ROW7.setUnits( "CONTENT" );
         ROW7.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 2 );
         ROW8.setParent( LAYOUT2 );
         ROW8.setHeight( 25 );
         ROW8.setUnits( "CONTENT" );
         ROW8.initialize();

         // ----------------------
         // -- Initialize #ROW9 --
         // ----------------------
         ROW9.setDisplayPosition( 8 );
         ROW9.setParent( LAYOUT2 );
         ROW9.setHeight( 25 );
         ROW9.setUnits( "CONTENT" );
         ROW9.initialize();

         // -----------------------
         // -- Initialize #ROW10 --
         // -----------------------
         ROW10.setDisplayPosition( 9 );
         ROW10.setParent( LAYOUT2 );
         ROW10.setHeight( 25 );
         ROW10.setUnits( "CONTENT" );
         ROW10.initialize();

         // -----------------------
         // -- Initialize #ROW11 --
         // -----------------------
         ROW11.setDisplayPosition( 10 );
         ROW11.setParent( LAYOUT2 );
         ROW11.setHeight( 108 );
         ROW11.setUnits( "CONTENT" );
         ROW11.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN3 );
         LAYOUTITEM2.setManage( LABEL1 );
         LAYOUTITEM2.setParent( LAYOUT2 );
         LAYOUTITEM2.setRow( ROW2 );
         LAYOUTITEM2.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN3 );
         LAYOUTITEM3.setManage( COUNTRYCODEINPUT );
         LAYOUTITEM3.setParent( LAYOUT2 );
         LAYOUTITEM3.setRow( ROW4 );
         LAYOUTITEM3.setSizing( "NONE" );
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setFlow( "RIGHT" );
         LAYOUTITEM3.setMarginRight( 3 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setColumn( COLUMN3 );
         LAYOUTITEM4.setManage( REENTERPASSWORDINPUT );
         LAYOUTITEM4.setParent( LAYOUT2 );
         LAYOUTITEM4.setRow( ROW10 );
         LAYOUTITEM4.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( COLUMN3 );
         LAYOUTITEM5.setManage( CELLNUMBERINPUT );
         LAYOUTITEM5.setParent( LAYOUT2 );
         LAYOUTITEM5.setRow( ROW4 );
         LAYOUTITEM5.setSizing( "NONE" );
         LAYOUTITEM5.setFlow( "RIGHT" );
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN3 );
         LAYOUTITEM6.setManage( LABEL2 );
         LAYOUTITEM6.setParent( LAYOUT2 );
         LAYOUTITEM6.setRow( ROW9 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "TOPLEFT" );
         LAYOUTITEM7.setColumn( COLUMN3 );
         LAYOUTITEM7.setManage( LABEL3 );
         LAYOUTITEM7.setParent( LAYOUT2 );
         LAYOUTITEM7.setRow( ROW8 );
         LAYOUTITEM7.setSizing( "NONE" );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "TOPLEFT" );
         LAYOUTITEM8.setColumn( COLUMN3 );
         LAYOUTITEM8.setManage( LABEL4 );
         LAYOUTITEM8.setParent( LAYOUT2 );
         LAYOUTITEM8.setRow( ROW7 );
         LAYOUTITEM8.setSizing( "NONE" );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setAlignment( "TOPLEFT" );
         LAYOUTITEM9.setColumn( COLUMN3 );
         LAYOUTITEM9.setManage( LABEL5 );
         LAYOUTITEM9.setParent( LAYOUT2 );
         LAYOUTITEM9.setRow( ROW5 );
         LAYOUTITEM9.setSizing( "NONE" );
         LAYOUTITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setColumn( COLUMN3 );
         LAYOUTITEM10.setManage( EMAILINPUT );
         LAYOUTITEM10.setParent( LAYOUT2 );
         LAYOUTITEM10.setRow( ROW3 );
         LAYOUTITEM10.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM10.setAlignment( "TOPLEFT" );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setColumn( COLUMN3 );
         LAYOUTITEM11.setManage( PASSWORDINPUT );
         LAYOUTITEM11.setParent( LAYOUT2 );
         LAYOUTITEM11.setRow( ROW6 );
         LAYOUTITEM11.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         LAYOUTITEM11.setAlignment( "TOPLEFT" );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setAlignment( "TOPLEFT" );
         LAYOUTITEM12.setColumn( COLUMN3 );
         LAYOUTITEM12.setManage( REGISTERBUTTON );
         LAYOUTITEM12.setParent( LAYOUT2 );
         LAYOUTITEM12.setRow( ROW11 );
         LAYOUTITEM12.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM12.setMarginTop( 50 );
         LAYOUTITEM12.initialize();

         // -------------------------
         // -- Initialize #LAYOUT3 --
         // -------------------------
         LAYOUT3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 1 );
         COLUMN4.setParent( LAYOUT3 );
         COLUMN4.initialize();

         // -----------------------
         // -- Initialize #ROW12 --
         // -----------------------
         ROW12.setDisplayPosition( 1 );
         ROW12.setParent( LAYOUT3 );
         ROW12.setHeight( 65 );
         ROW12.setUnits( "CONTENT" );
         ROW12.initialize();

         // -----------------------
         // -- Initialize #ROW13 --
         // -----------------------
         ROW13.setDisplayPosition( 2 );
         ROW13.setParent( LAYOUT3 );
         ROW13.setHeight( 25 );
         ROW13.setUnits( "CONTENT" );
         ROW13.initialize();

         // -----------------------
         // -- Initialize #ROW14 --
         // -----------------------
         ROW14.setDisplayPosition( 3 );
         ROW14.setParent( LAYOUT3 );
         ROW14.setHeight( 25 );
         ROW14.setUnits( "CONTENT" );
         ROW14.initialize();

         // -----------------------
         // -- Initialize #ROW15 --
         // -----------------------
         ROW15.setDisplayPosition( 4 );
         ROW15.setParent( LAYOUT3 );
         ROW15.setHeight( 25 );
         ROW15.setUnits( "CONTENT" );
         ROW15.initialize();

         // -----------------------
         // -- Initialize #ROW16 --
         // -----------------------
         ROW16.setDisplayPosition( 5 );
         ROW16.setParent( LAYOUT3 );
         ROW16.setHeight( 25 );
         ROW16.setUnits( "CONTENT" );
         ROW16.initialize();

         // -----------------------
         // -- Initialize #ROW17 --
         // -----------------------
         ROW17.setDisplayPosition( 7 );
         ROW17.setParent( LAYOUT3 );
         ROW17.setHeight( 108 );
         ROW17.setUnits( "CONTENT" );
         ROW17.initialize();

         // -----------------------
         // -- Initialize #ROW18 --
         // -----------------------
         ROW18.setDisplayPosition( 6 );
         ROW18.setParent( LAYOUT3 );
         ROW18.setUnits( "PIXELS" );
         ROW18.setHeight( 80 );
         ROW18.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM13 --
         // ------------------------------
         LAYOUTITEM13.setAlignment( "TOPLEFT" );
         LAYOUTITEM13.setColumn( COLUMN3 );
         LAYOUTITEM13.setManage( LABEL6 );
         LAYOUTITEM13.setParent( LAYOUT2 );
         LAYOUTITEM13.setRow( ROW2 );
         LAYOUTITEM13.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM13.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM14 --
         // ------------------------------
         LAYOUTITEM14.setAlignment( "TOPLEFT" );
         LAYOUTITEM14.setColumn( COLUMN4 );
         LAYOUTITEM14.setManage( LABEL7 );
         LAYOUTITEM14.setParent( LAYOUT3 );
         LAYOUTITEM14.setRow( ROW12 );
         LAYOUTITEM14.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM14.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM15 --
         // ------------------------------
         LAYOUTITEM15.setAlignment( "TOPLEFT" );
         LAYOUTITEM15.setColumn( COLUMN4 );
         LAYOUTITEM15.setManage( LABEL8 );
         LAYOUTITEM15.setParent( LAYOUT3 );
         LAYOUTITEM15.setRow( ROW15 );
         LAYOUTITEM15.setSizing( "NONE" );
         LAYOUTITEM15.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM16 --
         // ------------------------------
         LAYOUTITEM16.setAlignment( "TOPLEFT" );
         LAYOUTITEM16.setColumn( COLUMN4 );
         LAYOUTITEM16.setManage( PASSWORDINPUT2 );
         LAYOUTITEM16.setParent( LAYOUT3 );
         LAYOUTITEM16.setRow( ROW16 );
         LAYOUTITEM16.setSizing( "FITTOWIDTH" );
         LAYOUTITEM16.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM17 --
         // ------------------------------
         LAYOUTITEM17.setAlignment( "TOPLEFT" );
         LAYOUTITEM17.setColumn( COLUMN4 );
         LAYOUTITEM17.setManage( LABEL9 );
         LAYOUTITEM17.setParent( LAYOUT3 );
         LAYOUTITEM17.setRow( ROW13 );
         LAYOUTITEM17.setSizing( "NONE" );
         LAYOUTITEM17.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM18 --
         // ------------------------------
         LAYOUTITEM18.setAlignment( "TOPLEFT" );
         LAYOUTITEM18.setColumn( COLUMN4 );
         LAYOUTITEM18.setManage( EMAILINPUT2 );
         LAYOUTITEM18.setParent( LAYOUT3 );
         LAYOUTITEM18.setRow( ROW14 );
         LAYOUTITEM18.setSizing( "FITTOWIDTH" );
         LAYOUTITEM18.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM19 --
         // ------------------------------
         LAYOUTITEM19.setColumn( COLUMN4 );
         LAYOUTITEM19.setManage( LOGINBUTTON );
         LAYOUTITEM19.setMarginTop( 50 );
         LAYOUTITEM19.setParent( LAYOUT3 );
         LAYOUTITEM19.setRow( ROW17 );
         LAYOUTITEM19.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM19.setAlignment( "TOPLEFT" );
         LAYOUTITEM19.initialize();

         // -----------------------------
         // -- Initialize #PANEL3ITEM1 --
         // -----------------------------
         PANEL3ITEM1.setManage( PANEL3 );
         PANEL3ITEM1.setParent( LAYOUT3 );
         PANEL3ITEM1.setRow( ROW18 );
         PANEL3ITEM1.setSizing( "CONTENTHEIGHTFITTOWIDTH" );
         PANEL3ITEM1.setAlignment( "CENTERLEFT" );
         PANEL3ITEM1.setColumn( COLUMN4 );
         PANEL3ITEM1.initialize();

         // -------------------------
         // -- Initialize #LAYOUT4 --
         // -------------------------
         LAYOUT4.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 1 );
         COLUMN6.setParent( LAYOUT4 );
         COLUMN6.initialize();

         // -----------------------
         // -- Initialize #ROW19 --
         // -----------------------
         ROW19.setDisplayPosition( 1 );
         ROW19.setParent( LAYOUT4 );
         ROW19.setHeight( 19 );
         ROW19.setUnits( "CONTENT" );
         ROW19.initialize();

         // -----------------------
         // -- Initialize #ROW20 --
         // -----------------------
         ROW20.setDisplayPosition( 2 );
         ROW20.setParent( LAYOUT4 );
         ROW20.setHeight( 30 );
         ROW20.setUnits( "CONTENT" );
         ROW20.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM20 --
         // ------------------------------
         LAYOUTITEM20.setAlignment( "TOPLEFT" );
         LAYOUTITEM20.setColumn( COLUMN6 );
         LAYOUTITEM20.setManage( TOKENLABEL );
         LAYOUTITEM20.setParent( LAYOUT4 );
         LAYOUTITEM20.setRow( ROW19 );
         LAYOUTITEM20.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM20.setMarginBottom( 1 );
         LAYOUTITEM20.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM21 --
         // ------------------------------
         LAYOUTITEM21.setAlignment( "TOPLEFT" );
         LAYOUTITEM21.setColumn( COLUMN6 );
         LAYOUTITEM21.setManage( TOKENINPUT );
         LAYOUTITEM21.setParent( LAYOUT4 );
         LAYOUTITEM21.setRow( ROW20 );
         LAYOUTITEM21.setSizing( "CONTENTWIDTHANDHEIGHT" );
         LAYOUTITEM21.setMarginTop( 5 );
         LAYOUTITEM21.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 1 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 0 );
         PANEL1.setHeight( 800 );
         PANEL1.setWidth( 595 );
         PANEL1.setStyle( STYLE1 );
         PANEL1.setLayoutManager( LAYOUT2 );
         PANEL1.initialize();

         // ------------------------
         // -- Initialize #PANEL2 --
         // ------------------------
         PANEL2.setDisplayPosition( 2 );
         PANEL2.setLeft( 605 );
         PANEL2.setParent( this );
         PANEL2.setTabPosition( 2 );
         PANEL2.setTabStop( false );
         PANEL2.setTop( 0 );
         PANEL2.setHeight( 800 );
         PANEL2.setWidth( 595 );
         PANEL2.setStyle( STYLE2 );
         PANEL2.setLayoutManager( LAYOUT3 );
         PANEL2.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Register User" );
         LABEL1.setDisplayPosition( 1 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 65 );
         LABEL1.setLeft( 0 );
         LABEL1.setParent( PANEL1 );
         LABEL1.setTabPosition( 6 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 0 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 300 );
         LABEL1.setStyle( STYLE3 );
         LABEL1.initialize();

         // ----------------------------------
         // -- Initialize #COUNTRYCODEINPUT --
         // ----------------------------------
         COUNTRYCODEINPUT.setDisplayPosition( 2 );
         COUNTRYCODEINPUT.setLeft( 0 );
         COUNTRYCODEINPUT.setParent( PANEL1 );
         COUNTRYCODEINPUT.setShowSelection( false );
         COUNTRYCODEINPUT.setShowSelectionHilight( false );
         COUNTRYCODEINPUT.setTabPosition( 2 );
         COUNTRYCODEINPUT.setTop( 140 );
         COUNTRYCODEINPUT.setPlaceholder( "Country Code" );
         COUNTRYCODEINPUT.setWidth( 129 );
         COUNTRYCODEINPUT.initialize();

         // --------------------------------------
         // -- Initialize #REENTERPASSWORDINPUT --
         // --------------------------------------
         REENTERPASSWORDINPUT.setDisplayPosition( 3 );
         REENTERPASSWORDINPUT.setLeft( 0 );
         REENTERPASSWORDINPUT.setParent( PANEL1 );
         REENTERPASSWORDINPUT.setShowSelection( false );
         REENTERPASSWORDINPUT.setShowSelectionHilight( false );
         REENTERPASSWORDINPUT.setTabPosition( 5 );
         REENTERPASSWORDINPUT.setTop( 240 );
         REENTERPASSWORDINPUT.setPlaceholder( "Re-enter Password" );
         REENTERPASSWORDINPUT.setWidth( 593 );
         REENTERPASSWORDINPUT.setPasswordChar( "*" );
         REENTERPASSWORDINPUT.initialize();

         // ---------------------------------
         // -- Initialize #CELLNUMBERINPUT --
         // ---------------------------------
         CELLNUMBERINPUT.setDisplayPosition( 4 );
         CELLNUMBERINPUT.setLeft( 132 );
         CELLNUMBERINPUT.setParent( PANEL1 );
         CELLNUMBERINPUT.setShowSelection( false );
         CELLNUMBERINPUT.setShowSelectionHilight( false );
         CELLNUMBERINPUT.setTabPosition( 3 );
         CELLNUMBERINPUT.setTop( 140 );
         CELLNUMBERINPUT.setPlaceholder( "Phone Number" );
         CELLNUMBERINPUT.setWidth( 340 );
         CELLNUMBERINPUT.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "Re-enter Password" );
         LABEL2.setDisplayPosition( 5 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 0 );
         LABEL2.setParent( PANEL1 );
         LABEL2.setTabPosition( 8 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 215 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 120 );
         LABEL2.initialize();

         // ------------------------
         // -- Initialize #LABEL3 --
         // ------------------------
         LABEL3.setCaption( "Email" );
         LABEL3.setDisplayPosition( 6 );
         LABEL3.setEllipses( "WORD" );
         LABEL3.setHeight( 25 );
         LABEL3.setLeft( 0 );
         LABEL3.setParent( PANEL1 );
         LABEL3.setTabPosition( 11 );
         LABEL3.setTabStop( false );
         LABEL3.setTop( 65 );
         LABEL3.setVerticalAlignment( "CENTER" );
         LABEL3.setWidth( 120 );
         LABEL3.initialize();

         // ------------------------
         // -- Initialize #LABEL4 --
         // ------------------------
         LABEL4.setCaption( "Cell Phone Number" );
         LABEL4.setDisplayPosition( 7 );
         LABEL4.setEllipses( "WORD" );
         LABEL4.setHeight( 25 );
         LABEL4.setLeft( 0 );
         LABEL4.setParent( PANEL1 );
         LABEL4.setTabPosition( 10 );
         LABEL4.setTabStop( false );
         LABEL4.setTop( 115 );
         LABEL4.setVerticalAlignment( "CENTER" );
         LABEL4.setWidth( 120 );
         LABEL4.initialize();

         // ------------------------
         // -- Initialize #LABEL5 --
         // ------------------------
         LABEL5.setCaption( "Password" );
         LABEL5.setDisplayPosition( 8 );
         LABEL5.setEllipses( "WORD" );
         LABEL5.setHeight( 25 );
         LABEL5.setLeft( 0 );
         LABEL5.setParent( PANEL1 );
         LABEL5.setTabPosition( 9 );
         LABEL5.setTabStop( false );
         LABEL5.setTop( 165 );
         LABEL5.setVerticalAlignment( "CENTER" );
         LABEL5.setWidth( 120 );
         LABEL5.initialize();

         // ----------------------------
         // -- Initialize #EMAILINPUT --
         // ----------------------------
         EMAILINPUT.setDisplayPosition( 9 );
         EMAILINPUT.setLeft( 0 );
         EMAILINPUT.setParent( PANEL1 );
         EMAILINPUT.setShowSelection( false );
         EMAILINPUT.setShowSelectionHilight( false );
         EMAILINPUT.setTabPosition( 1 );
         EMAILINPUT.setTop( 90 );
         EMAILINPUT.setPlaceholder( "Enter Email" );
         EMAILINPUT.setWidth( 593 );
         EMAILINPUT.initialize();

         // -------------------------------
         // -- Initialize #PASSWORDINPUT --
         // -------------------------------
         PASSWORDINPUT.setDisplayPosition( 10 );
         PASSWORDINPUT.setLeft( 0 );
         PASSWORDINPUT.setParent( PANEL1 );
         PASSWORDINPUT.setShowSelection( false );
         PASSWORDINPUT.setShowSelectionHilight( false );
         PASSWORDINPUT.setTabPosition( 4 );
         PASSWORDINPUT.setTop( 190 );
         PASSWORDINPUT.setPlaceholder( "Enter Password" );
         PASSWORDINPUT.setWidth( 593 );
         PASSWORDINPUT.setPasswordChar( "*" );
         PASSWORDINPUT.initialize();

         // --------------------------------
         // -- Initialize #REGISTERBUTTON --
         // --------------------------------
         REGISTERBUTTON.setCaption( "Register" );
         REGISTERBUTTON.setDisplayPosition( 11 );
         REGISTERBUTTON.setLeft( 0 );
         REGISTERBUTTON.setParent( PANEL1 );
         REGISTERBUTTON.setTabPosition( 12 );
         REGISTERBUTTON.setTop( 315 );
         REGISTERBUTTON.setStyle( STYLE4 );
         REGISTERBUTTON.setHeight( 58 );
         REGISTERBUTTON.setWidth( 160 );
         REGISTERBUTTON.setMarginBottom( 10 );
         REGISTERBUTTON.setMarginLeft( 30 );
         REGISTERBUTTON.setMarginRight( 30 );
         REGISTERBUTTON.setMarginTop( 10 );
         REGISTERBUTTON.initialize();

         // ------------------------
         // -- Initialize #LABEL6 --
         // ------------------------
         LABEL6.setCaption( "Register User" );
         LABEL6.setDisplayPosition( 12 );
         LABEL6.setEllipses( "WORD" );
         LABEL6.setHeight( 65 );
         LABEL6.setLeft( 0 );
         LABEL6.setParent( PANEL1 );
         LABEL6.setTabPosition( 7 );
         LABEL6.setTabStop( false );
         LABEL6.setTop( 0 );
         LABEL6.setVerticalAlignment( "CENTER" );
         LABEL6.setWidth( 300 );
         LABEL6.setStyle( STYLE3 );
         LABEL6.initialize();

         // ------------------------
         // -- Initialize #LABEL7 --
         // ------------------------
         LABEL7.setCaption( "Login" );
         LABEL7.setDisplayPosition( 1 );
         LABEL7.setEllipses( "WORD" );
         LABEL7.setHeight( 65 );
         LABEL7.setLeft( 0 );
         LABEL7.setParent( PANEL2 );
         LABEL7.setTabPosition( 3 );
         LABEL7.setTabStop( false );
         LABEL7.setTop( 0 );
         LABEL7.setVerticalAlignment( "CENTER" );
         LABEL7.setWidth( 128 );
         LABEL7.setStyle( STYLE5 );
         LABEL7.initialize();

         // ------------------------
         // -- Initialize #LABEL8 --
         // ------------------------
         LABEL8.setCaption( "Password" );
         LABEL8.setDisplayPosition( 2 );
         LABEL8.setEllipses( "WORD" );
         LABEL8.setHeight( 25 );
         LABEL8.setLeft( 0 );
         LABEL8.setParent( PANEL2 );
         LABEL8.setTabPosition( 5 );
         LABEL8.setTabStop( false );
         LABEL8.setTop( 115 );
         LABEL8.setVerticalAlignment( "CENTER" );
         LABEL8.setWidth( 120 );
         LABEL8.initialize();

         // --------------------------------
         // -- Initialize #PASSWORDINPUT2 --
         // --------------------------------
         PASSWORDINPUT2.setDisplayPosition( 3 );
         PASSWORDINPUT2.setLeft( 0 );
         PASSWORDINPUT2.setParent( PANEL2 );
         PASSWORDINPUT2.setShowSelection( false );
         PASSWORDINPUT2.setShowSelectionHilight( false );
         PASSWORDINPUT2.setTabPosition( 2 );
         PASSWORDINPUT2.setTop( 140 );
         PASSWORDINPUT2.setWidth( 595 );
         PASSWORDINPUT2.setPasswordChar( "*" );
         PASSWORDINPUT2.setPlaceholder( "Enter Password" );
         PASSWORDINPUT2.initialize();

         // ------------------------
         // -- Initialize #LABEL9 --
         // ------------------------
         LABEL9.setCaption( "Email" );
         LABEL9.setDisplayPosition( 4 );
         LABEL9.setEllipses( "WORD" );
         LABEL9.setHeight( 25 );
         LABEL9.setLeft( 0 );
         LABEL9.setParent( PANEL2 );
         LABEL9.setTabPosition( 4 );
         LABEL9.setTabStop( false );
         LABEL9.setTop( 65 );
         LABEL9.setVerticalAlignment( "CENTER" );
         LABEL9.setWidth( 120 );
         LABEL9.initialize();

         // -----------------------------
         // -- Initialize #EMAILINPUT2 --
         // -----------------------------
         EMAILINPUT2.setDisplayPosition( 5 );
         EMAILINPUT2.setLeft( 0 );
         EMAILINPUT2.setParent( PANEL2 );
         EMAILINPUT2.setShowSelection( false );
         EMAILINPUT2.setShowSelectionHilight( false );
         EMAILINPUT2.setTabPosition( 1 );
         EMAILINPUT2.setTop( 90 );
         EMAILINPUT2.setWidth( 595 );
         EMAILINPUT2.setPlaceholder( "Enter Email" );
         EMAILINPUT2.initialize();

         // -----------------------------
         // -- Initialize #LOGINBUTTON --
         // -----------------------------
         LOGINBUTTON.setCaption( "Login" );
         LOGINBUTTON.setDisplayPosition( 6 );
         LOGINBUTTON.setLeft( 0 );
         LOGINBUTTON.setParent( PANEL2 );
         LOGINBUTTON.setTabPosition( 6 );
         LOGINBUTTON.setTop( 295 );
         LOGINBUTTON.setStyle( STYLE6 );
         LOGINBUTTON.setHeight( 58 );
         LOGINBUTTON.setWidth( 130 );
         LOGINBUTTON.setMarginLeft( 30 );
         LOGINBUTTON.setMarginBottom( 10 );
         LOGINBUTTON.setMarginRight( 30 );
         LOGINBUTTON.setMarginTop( 10 );
         LOGINBUTTON.initialize();

         // ------------------------
         // -- Initialize #PANEL3 --
         // ------------------------
         PANEL3.setDisplayPosition( 7 );
         PANEL3.setLeft( 0 );
         PANEL3.setParent( PANEL2 );
         PANEL3.setTabPosition( 7 );
         PANEL3.setTabStop( false );
         PANEL3.setTop( 180 );
         PANEL3.setWidth( 595 );
         PANEL3.setLayoutManager( LAYOUT4 );
         PANEL3.initialize();

         // ----------------------------
         // -- Initialize #TOKENLABEL --
         // ----------------------------
         TOKENLABEL.setCaption( "Enter the token sent to your phone:" );
         TOKENLABEL.setDisplayPosition( 1 );
         TOKENLABEL.setEllipses( "WORD" );
         TOKENLABEL.setHeight( 20 );
         TOKENLABEL.setLeft( 0 );
         TOKENLABEL.setParent( PANEL3 );
         TOKENLABEL.setTabPosition( 1 );
         TOKENLABEL.setTabStop( false );
         TOKENLABEL.setVerticalAlignment( "CENTER" );
         TOKENLABEL.setWidth( 235 );
         TOKENLABEL.setVisible( false );
         TOKENLABEL.setStyle( STYLE7 );
         TOKENLABEL.setTop( -1 );
         TOKENLABEL.initialize();

         // ----------------------------
         // -- Initialize #TOKENINPUT --
         // ----------------------------
         TOKENINPUT.setDisplayPosition( 2 );
         TOKENINPUT.setLeft( 0 );
         TOKENINPUT.setParent( PANEL3 );
         TOKENINPUT.setShowSelection( false );
         TOKENINPUT.setShowSelectionHilight( false );
         TOKENINPUT.setTabPosition( 2 );
         TOKENINPUT.setTop( 24 );
         TOKENINPUT.setWidth( 209 );
         TOKENINPUT.setVisible( false );
         TOKENINPUT.initialize();

         // -----------------------------------
         // -- Initialize #ISLOGINSECONDPART --
         // -----------------------------------
         ISLOGINSECONDPART.initialize();

         // ---------------------
         // -- Initialize #EOL --
         // ---------------------
         EOL.initialize();

         // --------------------------------------------
         // -- Add Event Handlers for #REGISTERBUTTON --
         // --------------------------------------------
         REGISTERBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // -----------------------------------------
         // -- Add Event Handlers for #LOGINBUTTON --
         // -----------------------------------------
         LOGINBUTTON.addEventHandler( "CLICK", this, evtRoutine3 );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 103 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 103 );
      {

         //
         // #EOL := (13).AsUnicodeString
         //
         rtn.Line( 104 );
         ref.EOL.set( Lansa.Number.AsUnicodeString( 13 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 105 );
      rtn.end();
   };

   //
   // evtRoutine2 - #RegisterButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var fld = this.FLD.XLBE0008, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#RegisterButton.Click", 107 );

      //
      // DEFINE_COM Class(#xDemoAuthy2FAServerModule.RegisterUser) Name(#Service)
      //
      var SERVICE = rtn.createDataRequest( "SERVICE", "XLBE0009", "REGISTERUSER" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#Message)
      //
      var MESSAGE = rtn.createReference( "MESSAGE", "PRIM_DC", "UnicodeString" );

      // -------------------------
      // -- Initialize #SERVICE --
      // -------------------------
      SERVICE.initialize();

      // -------------------------
      // -- Initialize #MESSAGE --
      // -------------------------
      MESSAGE.initialize();

      //
      // EVTROUTINE Handling(#RegisterButton.Click)
      //
      rtn.Line( 107 );
      {

         //
         // #EmailInput := #EmailInput.Value.Trim
         //
         rtn.Line( 112 );
         ref.EMAILINPUT.set( Lansa.String.Trim( ref.EMAILINPUT.getValue() ) );

         //
         // #CountryCodeInput := #CountryCodeInput.Value.Trim
         //
         rtn.Line( 113 );
         ref.COUNTRYCODEINPUT.set( Lansa.String.Trim( ref.COUNTRYCODEINPUT.getValue() ) );

         //
         // #CellNumberInput := #CellNumberInput.Value.Trim
         //
         rtn.Line( 114 );
         ref.CELLNUMBERINPUT.set( Lansa.String.Trim( ref.CELLNUMBERINPUT.getValue() ) );

         //
         // IF (#EmailInput = '')
         //
         rtn.Line( 116 );
         if ( Lansa.String.eq( ref.EMAILINPUT.get(), "" ) )
         {

            //
            // #Message += 'Please enter your email address' + #EOL
            //
            rtn.Line( 117 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "Please enter your email address", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF ((#CountryCodeInput = '') *Or (*Not #CountryCodeInput.Value.IsNumber))
         //
         rtn.Line( 120 );
         if ( Lansa.or( Lansa.String.eq( ref.COUNTRYCODEINPUT.get(), "" ), Lansa.not( Lansa.String.IsNumber( ref.COUNTRYCODEINPUT.getValue() ) ) ) )
         {

            //
            // #Message += 'Please enter your cell phone number''s country code' + #EOL
            //
            rtn.Line( 121 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "Please enter your cell phone number's country code", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#CellNumberInput = '')
         //
         rtn.Line( 124 );
         if ( Lansa.String.eq( ref.CELLNUMBERINPUT.get(), "" ) )
         {

            //
            // #Message += 'Please enter your cell phone number' + #EOL
            //
            rtn.Line( 125 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "Please enter your cell phone number", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#PasswordInput = '')
         //
         rtn.Line( 128 );
         if ( Lansa.String.eq( ref.PASSWORDINPUT.get(), "" ) )
         {

            //
            // #Message += 'Please enter a password' + #EOL
            //
            rtn.Line( 129 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "Please enter a password", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#PasswordInput <> #ReenterPasswordInput)
         //
         rtn.Line( 132 );
         if ( Lansa.String.ne( ref.PASSWORDINPUT.get(), ref.REENTERPASSWORDINPUT.get() ) )
         {

            //
            // #Message += 'The password you re-entered does not match the first' + #EOL
            //
            rtn.Line( 133 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "The password you re-entered does not match the first", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#Message = '')
         //
         rtn.Line( 137 );
         if ( Lansa.toBool( Lansa.String.eq( MESSAGE.get(), "" ) ) )
         {

            //
            // #Service.Execute Email(#EmailInput) Cellcountry(#CountryCodeInput) Cellnumber(#CellNumberInput) Password(#PasswordInput) Ok(#STD_BOOL) Message(#Message)
            //
            rtn.Line( 138 );
            SERVICE.mthEXECUTE( { FLD: { "EMAILFIELD": ref.EMAILINPUT.get(), "XLBE0014": ref.COUNTRYCODEINPUT.get(), "XLBE0012": ref.CELLNUMBERINPUT.get(), "PASSWORDFIELD": ref.PASSWORDINPUT.get() } }, { FLD: { "STD_BOOL": fld.STD_BOOL, "MESSAGEFIELD": MESSAGE } } );

            //
            // IF (#STD_BOOL = True)
            //
            rtn.Line( 140 );
            if ( Lansa.String.eq( fld.STD_BOOL.get(), "TRUE" ) )
            {

               //
               // #Message += 'You have successfully registered & enabled two-factor authentication.' + #EOL
               //
               rtn.Line( 141 );
               MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "You have successfully registered & enabled two-factor authentication.", ref.EOL.get() ) ) );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #Message += #EOL + 'An error has occurred, you have NOT been registered.' + #EOL
               //
               rtn.Line( 143 );
               MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( Lansa.cat( ref.EOL.get(), "An error has occurred, you have NOT been registered." ), ref.EOL.get() ) ) );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // IF (#Message <> '')
         //
         rtn.Line( 148 );
         if ( Lansa.toBool( Lansa.String.ne( MESSAGE.get(), "" ) ) )
         {

            //
            // #SYS_WEB.Alert Caption(#Message)
            //
            rtn.Line( 149 );
            Lansa.WEB().mthALERT( MESSAGE.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 151 );
      rtn.end();
   };

   //
   // evtRoutine3 - #LoginButton.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoginButton.Click", 153 );

      //
      // EVTROUTINE Handling(#LoginButton.Click)
      //
      rtn.Line( 153 );
      {

         //
         // IF (#IsLoginSecondPart)
         //
         rtn.Line( 154 );
         if ( Lansa.toBool( ref.ISLOGINSECONDPART.get() ) )
         {

            //
            // #COM_SELF.DoLoginSecondPart
            //
            rtn.Line( 155 );
            this.mthDOLOGINSECONDPART();

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #COM_SELF.DoLoginFirstPart
            //
            rtn.Line( 157 );
            this.mthDOLOGINFIRSTPART();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 159 );
      rtn.end();
   };

   //
   // mthDOLOGINFIRSTPART - DoLoginFirstPart
   //
   COM_OWNER.mthDOLOGINFIRSTPART = function()
   {
      var fld = this.FLD.XLBE0008, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "DoLoginFirstPart", 161 );

      //
      // DEFINE_COM Class(#xDemoAuthy2FAServerModule.LoginUserFirstPart) Name(#Service)
      //
      var SERVICE = rtn.createDataRequest( "SERVICE", "XLBE0009", "LOGINUSERFIRSTPART" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#Message)
      //
      var MESSAGE = rtn.createReference( "MESSAGE", "PRIM_DC", "UnicodeString" );

      // -------------------------
      // -- Initialize #SERVICE --
      // -------------------------
      SERVICE.initialize();

      // -------------------------
      // -- Initialize #MESSAGE --
      // -------------------------
      MESSAGE.initialize();

      //
      // MTHROUTINE Name(DoLoginFirstPart)
      //
      rtn.Line( 161 );
      {

         //
         // #EmailInput := #EmailInput.Value.Trim
         //
         rtn.Line( 166 );
         ref.EMAILINPUT.set( Lansa.String.Trim( ref.EMAILINPUT.getValue() ) );

         //
         // IF (#EmailInput2 = '')
         //
         rtn.Line( 168 );
         if ( Lansa.String.eq( ref.EMAILINPUT2.get(), "" ) )
         {

            //
            // #Message += 'Please enter your email address' + #EOL
            //
            rtn.Line( 169 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "Please enter your email address", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#PasswordInput2 = '')
         //
         rtn.Line( 172 );
         if ( Lansa.String.eq( ref.PASSWORDINPUT2.get(), "" ) )
         {

            //
            // #Message += 'Please enter your password' + #EOL
            //
            rtn.Line( 173 );
            MESSAGE.set( Lansa.cat( MESSAGE.get(), Lansa.cat( "Please enter your password", ref.EOL.get() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#Message = '')
         //
         rtn.Line( 177 );
         if ( Lansa.toBool( Lansa.String.eq( MESSAGE.get(), "" ) ) )
         {

            //
            // #Service.Execute Email(#EmailInput2) Password(#PasswordInput2) Ok(#STD_BOOL) Message(#Message)
            //
            rtn.Line( 178 );
            SERVICE.mthEXECUTE( { FLD: { "EMAILFIELD": ref.EMAILINPUT2.get(), "PASSWORDFIELD": ref.PASSWORDINPUT2.get() } }, { FLD: { "STD_BOOL": fld.STD_BOOL, "MESSAGEFIELD": MESSAGE } } );

            //
            // IF (#STD_BOOL = True)
            //
            rtn.Line( 180 );
            if ( Lansa.String.eq( fld.STD_BOOL.get(), "TRUE" ) )
            {

               //
               // #IsLoginSecondPart := True
               //
               rtn.Line( 181 );
               ref.ISLOGINSECONDPART.set( true );

               //
               // #EmailInput2.Enabled := False
               //
               rtn.Line( 182 );
               ref.EMAILINPUT2.setEnabled( false );

               //
               // #PasswordInput2.Enabled := False
               //
               rtn.Line( 183 );
               ref.PASSWORDINPUT2.setEnabled( false );

               //
               // #TokenLabel.Visible := True
               //
               rtn.Line( 185 );
               ref.TOKENLABEL.setVisible( true );

               //
               // #TokenInput.Visible := True
               //
               rtn.Line( 186 );
               ref.TOKENINPUT.setVisible( true );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // IF (#Message <> '')
         //
         rtn.Line( 190 );
         if ( Lansa.toBool( Lansa.String.ne( MESSAGE.get(), "" ) ) )
         {

            //
            // #SYS_WEB.Alert Caption(#Message)
            //
            rtn.Line( 191 );
            Lansa.WEB().mthALERT( MESSAGE.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 193 );
      rtn.end();
   };

   //
   // mthDOLOGINSECONDPART - DoLoginSecondPart
   //
   COM_OWNER.mthDOLOGINSECONDPART = function()
   {
      var fld = this.FLD.XLBE0008, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "DoLoginSecondPart", 195 );

      //
      // DEFINE_COM Class(#xDemoAuthy2FAServerModule.LoginUserSecondPart) Name(#Service)
      //
      var SERVICE = rtn.createDataRequest( "SERVICE", "XLBE0009", "LOGINUSERSECONDPART" );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#Message)
      //
      var MESSAGE = rtn.createReference( "MESSAGE", "PRIM_DC", "UnicodeString" );

      // -------------------------
      // -- Initialize #SERVICE --
      // -------------------------
      SERVICE.initialize();

      // -------------------------
      // -- Initialize #MESSAGE --
      // -------------------------
      MESSAGE.initialize();

      //
      // MTHROUTINE Name(DoLoginSecondPart)
      //
      rtn.Line( 195 );
      {

         //
         // #TokenInput := #TokenInput.Value.Trim
         //
         rtn.Line( 200 );
         ref.TOKENINPUT.set( Lansa.String.Trim( ref.TOKENINPUT.getValue() ) );

         //
         // IF (#TokenInput = '')
         //
         rtn.Line( 201 );
         if ( Lansa.String.eq( ref.TOKENINPUT.get(), "" ) )
         {

            //
            // #Message := 'Enter the token sent to your phone.'
            //
            rtn.Line( 202 );
            MESSAGE.set( "Enter the token sent to your phone." );

         //
         // ENDIF 
         //
         }

         //
         // IF (#Message = '')
         //
         rtn.Line( 206 );
         if ( Lansa.toBool( Lansa.String.eq( MESSAGE.get(), "" ) ) )
         {

            //
            // #Service.Execute Email(#EmailInput2) Token(#TokenInput) Ok(#STD_BOOL) Message(#Message)
            //
            rtn.Line( 207 );
            SERVICE.mthEXECUTE( { FLD: { "EMAILFIELD": ref.EMAILINPUT2.get(), "TOKENFIELD": ref.TOKENINPUT.get() } }, { FLD: { "STD_BOOL": fld.STD_BOOL, "MESSAGEFIELD": MESSAGE } } );

            //
            // IF (#STD_BOOL = True)
            //
            rtn.Line( 209 );
            if ( Lansa.String.eq( fld.STD_BOOL.get(), "TRUE" ) )
            {

               //
               // #IsLoginSecondPart := False
               //
               rtn.Line( 210 );
               ref.ISLOGINSECONDPART.set( false );

               //
               // #EmailInput2.Enabled := True
               //
               rtn.Line( 211 );
               ref.EMAILINPUT2.setEnabled( true );

               //
               // #PasswordInput2.Enabled := True
               //
               rtn.Line( 212 );
               ref.PASSWORDINPUT2.setEnabled( true );

               //
               // #TokenLabel.Visible := False
               //
               rtn.Line( 214 );
               ref.TOKENLABEL.setVisible( false );

               //
               // #TokenInput.Visible := False
               //
               rtn.Line( 215 );
               ref.TOKENINPUT.setVisible( false );

               //
               // #EmailInput2.Value := ''
               //
               rtn.Line( 217 );
               ref.EMAILINPUT2.setValue( "" );

               //
               // #PasswordInput2.Value := ''
               //
               rtn.Line( 218 );
               ref.PASSWORDINPUT2.setValue( "" );

               //
               // #TokenInput.Value := ''
               //
               rtn.Line( 219 );
               ref.TOKENINPUT.setValue( "" );

               //
               // #Message := 'Token verified, you have successfully logged-in.'
               //
               rtn.Line( 221 );
               MESSAGE.set( "Token verified, you have successfully logged-in." );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // IF (#Message <> '')
         //
         rtn.Line( 225 );
         if ( Lansa.toBool( Lansa.String.ne( MESSAGE.get(), "" ) ) )
         {

            //
            // #SYS_WEB.Alert Caption(#Message)
            //
            rtn.Line( 226 );
            Lansa.WEB().mthALERT( MESSAGE.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 228 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_PANL", "PRIM_LABL", "PRIM_EDIT", "PRIM_PHBN", "PRIM_BOLN", "PRIM_ALPH", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlbe0008.js
