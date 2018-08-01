// -----------------------------
// -- Reusable Part: VLFDEM_2 --
// -----------------------------
LANSA.addComponent(
{
   id: "VLFDEM_2", 
   nm: "VLFDEMO_XCONTACTS_SCRUD_Filter", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Filter", 
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

   // ---------------------------------------
   // -- Multilingual Variable Definitions --
   // ---------------------------------------
   var 
      mtxtUF_REFRESH_LIST = {"ENG" : "Refresh List", "FRA" : "Actualiser la liste" }[ curLanguage ];

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XCONFNAME:
      {
         nm: "XCONFNAME",
         an: "xContactFirstName",
         ft: "NV",
         ln: 50,
         dc: 0,
         lb: "First Name",
         h1: "First Name",
         h2: " ",
         h3: " ",
         de: "First Name",
         dv: "",
         ia: [ "FE", "LC" ],
         vr: 
         [
            {
               wt: "N",
               wf: "E",
               vi: "Y",
               vu: "U",
               vd: "N",
               rd: rule1,
               mt: "First Name must be entered"
            }
         ]
      },
      XCONLAME:
      {
         nm: "XCONLAME",
         an: "xContactLastName",
         ft: "NV",
         ln: 50,
         dc: 0,
         lb: "Last Name",
         h1: "Last Name",
         h2: " ",
         h3: " ",
         de: "Last Name",
         dv: "",
         ia: [ "FE", "LC" ],
         vr: 
         [
            {
               wt: "N",
               wf: "E",
               vi: "Y",
               vu: "U",
               vd: "N",
               rd: rule2,
               mt: "Last Name must be entered"
            }
         ]
      },
      XCONID:
      {
         nm: "XCONID",
         an: "xContactIdentification",
         ft: "I",
         ln: 4,
         dc: 0,
         lb: "Contact ID",
         h1: "Contact ID",
         h2: " ",
         h3: " ",
         de: "Contact ID",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XCONFNAM:
      {
         nm: "XCONFNAM",
         an: "xContactFullName",
         ft: "NV",
         ln: 210,
         dc: 0,
         lb: "Full Name",
         h1: "Full Name",
         h2: " ",
         h3: " ",
         de: "Full Name",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONPHHME:
      {
         nm: "XCONPHHME",
         an: "xContactHomePhone",
         ft: "C",
         ln: 15,
         dc: 0,
         lb: "Home Phone",
         h1: "Home Phone",
         h2: " ",
         h3: " ",
         de: "Home Phone",
         dv: "",
         ia: [ "FE", "RB" ]
      },
      XCONCMPY:
      {
         nm: "XCONCMPY",
         an: "xContactCompany",
         ft: "NV",
         ln: 50,
         dc: 0,
         lb: "Company Name",
         h1: "Company Name",
         h2: " ",
         h3: " ",
         de: "Company Name",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONPHBUS:
      {
         nm: "XCONPHBUS",
         an: "xContactBusinessPhone",
         ft: "C",
         ln: 15,
         dc: 0,
         lb: "Business Phone",
         h1: "Business Phone",
         h2: " ",
         h3: " ",
         de: "Business Phone",
         dv: "",
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "VF_AC007O", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         uTerminate: 
         {
         },

         uInitialize: 
         {
         },

         avExecuteAsyncOperation: 
         {
            ps: 
            {
               "OperationID":
               {
                  pt: "i"
               },

               "Parameter1":
               {
                  pt: "i"
               },

               "Parameter2":
               {
                  pt: "i"
               },

               "ParameterReference1":
               {
                  pt: "i"
               },

               "ParameterReference2":
               {
                  pt: "i"
               },

               "KillOtherPendingOperations":
               {
                  pt: "o"
               },

               "ClearMessagesAfterDelay":
               {
                  pt: "o"
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
         var fld = this.addFields( "VLFDEM_2", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#vf_lm002O) Name(#LocalListManagerReference) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "LOCALLISTMANAGERREFERENCE" );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 270 );
         this.setWidth( 500 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "VLFDEM_2" );

         //
         // DEF_LIST Name(#InstanceList_Columns) Fields(#XG_InstanceListColumns) Type(*Working) Entrys(*MAX)
         //
         list.INSTANCELIST_COLUMNS = Lansa.createList( { "XCONFNAME": fld.XCONFNAME, "XCONLAME": fld.XCONLAME, "XCONID": fld.XCONID, "XCONFNAM": fld.XCONFNAM, "XCONPHHME": fld.XCONPHHME, "XCONCMPY": fld.XCONCMPY, "XCONPHBUS": fld.XCONPHBUS }, null );
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
   // mthUTERMINATE - uTerminate
   //
   COM_OWNER.mthUTERMINATE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "uTerminate", 16 );

      //
      // MTHROUTINE Name(uTerminate) Options(*REDEFINE)
      //
      rtn.Line( 16 );
      {

         //
         // #LocalListManagerReference <= *null
         //
         rtn.Line( 18 );
         this.setrefLOCALLISTMANAGERREFERENCE( null );

         //
         // #COM_ANCESTOR.uTerminate
         //
         rtn.Line( 20 );
         COM_ANCESTOR.mthUTERMINATE.call( this );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 21 );
      rtn.end();
   };

   //
   // mthUINITIALIZE - uInitialize
   //
   COM_OWNER.mthUINITIALIZE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "uInitialize", 23 );

      //
      // MTHROUTINE Name(uInitialize) Options(*REDEFINE)
      //
      rtn.Line( 23 );
      {

         //
         // #COM_ANCESTOR.uInitialize
         //
         rtn.Line( 25 );
         COM_ANCESTOR.mthUINITIALIZE.call( this );

         //
         // #COM_Self.avFilterLocation := NONE
         //
         rtn.Line( 27 );
         this.setAVFILTERLOCATION( "NONE" );

         //
         // #COM_Self.avChangeClearListButtonCaption To(*MTXTUF_REFRESH_LIST)
         //
         rtn.Line( 28 );
         this.mthAVCHANGECLEARLISTBUTTONCAPTION( mtxtUF_REFRESH_LIST );

         //
         // #LocalListManagerReference <= #COM_OWNER.avListManager
         //
         rtn.Line( 29 );
         this.setrefLOCALLISTMANAGERREFERENCE( this.getAVLISTMANAGER() );

         //
         // #Com_Owner.avQueueAsyncOperation Operationid(LoadAllData) Busystatetext("Loading all Contacts")
         //
         rtn.Line( 31 );
         this.mthAVQUEUEASYNCOPERATION( "LOADALLDATA", undefined, undefined, undefined, undefined, "Loading all Contacts", undefined, undefined, undefined, undefined, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 32 );
      rtn.end();
   };

   //
   // evtRoutine1 - #LocalListManagerReference.ListCleared
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LocalListManagerReference.ListCleared", 34 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var FROMCLEARLISTBUTTON = parms.ref( "FROMCLEARLISTBUTTON" );

      //
      // EVTROUTINE Handling(#LocalListManagerReference.ListCleared) Fromclearlistbutton(#Fromclearlistbutton)
      //
      rtn.Line( 34 );
      {

         //
         // IF (#Fromclearlistbutton)
         //
         rtn.Line( 36 );
         if ( Lansa.toBool( FROMCLEARLISTBUTTON.get() ) )
         {

            //
            // #Com_Owner.avQueueAsyncOperation Operationid(LoadAllData) Busystatetext("Reloading all Contacts") Onlyifnothingelsepending(True)
            //
            rtn.Line( 37 );
            this.mthAVQUEUEASYNCOPERATION( "LOADALLDATA", undefined, undefined, undefined, undefined, "Reloading all Contacts", undefined, undefined, undefined, true, undefined );

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

   //
   // mthAVEXECUTEASYNCOPERATION - avExecuteAsyncOperation
   //
   COM_OWNER.mthAVEXECUTEASYNCOPERATION = function( parm_OPERATIONID, parm_PARAMETER1, parm_PARAMETER2, parm_PARAMETERREFERENCE1, parm_PARAMETERREFERENCE2, parm_KILLOTHERPENDINGOPERATIONS, parm_CLEARMESSAGESAFTERDELAY )
   {
      var list = this.LIST.VLFDEM_2, fld = this.FLD.VLFDEM_2, rtn = Lansa.mthRoutine( this, COM_OWNER, "avExecuteAsyncOperation", 41 ), mth = rtn;

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(OperationID) For(*INPUT)
      //
      var OPERATIONID = rtn.createParameter( "OPERATIONID", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(Parameter1) For(*INPUT)
      //
      var PARAMETER1 = rtn.createParameter( "PARAMETER1", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(Parameter2) For(*INPUT)
      //
      var PARAMETER2 = rtn.createParameter( "PARAMETER2", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP Class(#PRIM_OBJT) Name(ParameterReference1) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var PARAMETERREFERENCE1 = rtn.createDynamicParameter( "PARAMETERREFERENCE1" );

      //
      // DEFINE_MAP Class(#PRIM_OBJT) Name(ParameterReference2) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var PARAMETERREFERENCE2 = rtn.createDynamicParameter( "PARAMETERREFERENCE2" );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(KillOtherPendingOperations) For(*OUTPUT)
      //
      var KILLOTHERPENDINGOPERATIONS = rtn.createParameter( "KILLOTHERPENDINGOPERATIONS", "PRIM_BOLN" );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(ClearMessagesAfterDelay) For(*OUTPUT) Mandatory(False)
      //
      var CLEARMESSAGESAFTERDELAY = rtn.createParameter( "CLEARMESSAGESAFTERDELAY", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      OPERATIONID.set( parm_OPERATIONID );
      PARAMETER1.set( parm_PARAMETER1 );
      PARAMETER2.set( parm_PARAMETER2 );
      PARAMETERREFERENCE1 = parm_PARAMETERREFERENCE1;
      PARAMETERREFERENCE2 = parm_PARAMETERREFERENCE2;
      CLEARMESSAGESAFTERDELAY.set( "FALSE" );

      //
      // DEFINE_COM Class(#prim_boln) Name(#ServerModuleResult)
      //
      var SERVERMODULERESULT = rtn.createReference( "SERVERMODULERESULT", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#VLFDEMO_XCONTACTS_SCRUD_ServerModule.LoadInstanceListData) Name(#LoadInstanceListData)
      //
      var LOADINSTANCELISTDATA = rtn.createDataRequest( "LOADINSTANCELISTDATA", "VLFDEMO_X", "LOADINSTANCELISTDATA" );

      // ------------------------------------
      // -- Initialize #SERVERMODULERESULT --
      // ------------------------------------
      SERVERMODULERESULT.initialize();

      // --------------------------------------
      // -- Initialize #LOADINSTANCELISTDATA --
      // --------------------------------------
      LOADINSTANCELISTDATA.initialize();

      // --------------------------------------------------
      // -- Add Event Handlers for #LOADINSTANCELISTDATA --
      // --------------------------------------------------
      LOADINSTANCELISTDATA.addEventHandler( "COMPLETED", this, evtRoutine2 );
      LOADINSTANCELISTDATA.addEventHandler( "FAILED", this, evtRoutine3 );

      //
      // MTHROUTINE Name(avExecuteAsyncOperation) Options(*REDEFINE)
      //
      rtn.Line( 41 );
      {

         //
         // #LoadInstanceListData.Execute Instancelist_Columns(#InstanceList_Columns) Servermoduleresult(#ServerModuleResult)
         //
         rtn.Line( 48 );
         LOADINSTANCELISTDATA.mthEXECUTE( {  }, { FLD: { "SERVERMODULERESULT": SERVERMODULERESULT }, LIST: { "INSTANCELIST_COLUMNS": list.INSTANCELIST_COLUMNS } } );

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_KILLOTHERPENDINGOPERATIONS.set( KILLOTHERPENDINGOPERATIONS.get() );
         if ( parm_CLEARMESSAGESAFTERDELAY !== undefined )
         {
            parm_CLEARMESSAGESAFTERDELAY.set( CLEARMESSAGESAFTERDELAY.get() );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 65 );
      rtn.end();

      //
      // evtRoutine2 - #LoadInstanceListData.Completed
      //
      function evtRoutine2( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadInstanceListData.Completed", 50, mth );

         //
         // EVTROUTINE Handling(#LoadInstanceListData.Completed)
         //
         rtn.Line( 50 );
         {

            //
            // #AVLISTMANAGER.ClearList
            //
            rtn.Line( 52 );
            this.REF.AVLISTMANAGER.mthCLEARLIST( undefined, undefined );

            //
            // SELECTLIST Named(#InstanceList_Columns)
            //
            rtn.Line( 53 );
            {
               var l1 = list.INSTANCELIST_COLUMNS.selectList();

               while( l1.step() )
               {

                  //
                  // #AVLISTMANAGER.AddtoList VisualID1(#xContactFirstName) VisualID2(#xContactLastName) NKey1(#xContactIdentification) AColumn3(#xContactFullName) AColumn1(#xContactHomePhone) AColumn4(#xContactCompany) AColumn2(#xContactBusinessPhone)
                  //
                  rtn.Line( 54 );
                  this.REF.AVLISTMANAGER.mthADDTOLIST( fld.XCONFNAME.get(), fld.XCONLAME.get(), undefined, undefined, undefined, undefined, undefined, fld.XCONID.get(), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fld.XCONPHHME.get(), fld.XCONPHBUS.get(), fld.XCONFNAM.get(), fld.XCONCMPY.get(), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined );

               //
               // ENDSELECT 
               //
               rtn.Line( 55 );
               }

               l1.end();
            }

            //
            // CLR_LIST Named(#InstanceList_Columns)
            //
            rtn.Line( 57 );
            list.INSTANCELIST_COLUMNS.clearList();

            //
            // #ClearMessagesAfterDelay := True
            //
            rtn.Line( 59 );
            CLEARMESSAGESAFTERDELAY.set( true );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 60 );
         rtn.end();
      }

      //
      // evtRoutine3 - #LoadInstanceListData.Failed
      //
      function evtRoutine3( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadInstanceListData.Failed", 62, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#LoadInstanceListData.Failed) Handled(#Handled)
         //
         rtn.Line( 62 );
         {

            //
            // #Handled := #AVFRAMEWORKMANAGER.avHandleServerError( #COM_OWNER #ServerModuleResult )
            //
            rtn.Line( 63 );
            HANDLED.set( this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR( this, SERVERMODULERESULT ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 64 );
         rtn.end();
      }
   };

   // ----------------------
   // -- Validation rules --
   // ----------------------

   //
   // XCONFNAME - First Name cannot be Blank
   //
   function rule1( XCONFNAME )
   {
      //
      // #xContactFirstName.Cursize > 0
      //
      return ( Lansa.Number.gt( Lansa.String.CurSize( XCONFNAME.get() ), 0 ) );
   };

   //
   // XCONLAME - Last Name cannot be Blank
   //
   function rule2( XCONLAME )
   {
      //
      // #xContactLastName.Cursize > 0
      //
      return ( Lansa.Number.gt( Lansa.String.CurSize( XCONLAME.get() ), 0 ) );
   };

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefLOCALLISTMANAGERREFERENCE = function( refNew )
   {
      if ( this.REF.LOCALLISTMANAGERREFERENCE != null )
      {
         // ----------------------------------------------------------
         // -- Remove Event Handlers for #LOCALLISTMANAGERREFERENCE --
         // ----------------------------------------------------------
         this.REF.LOCALLISTMANAGERREFERENCE.removeEventHandler( "LISTCLEARED", this, evtRoutine1 );
      }

      this.setref( "LOCALLISTMANAGERREFERENCE", refNew );

      if ( this.REF.LOCALLISTMANAGERREFERENCE != null )
      {
         // -------------------------------------------------------
         // -- Add Event Handlers for #LOCALLISTMANAGERREFERENCE --
         // -------------------------------------------------------
         this.REF.LOCALLISTMANAGERREFERENCE.addEventHandler( "LISTCLEARED", this, evtRoutine1 );
      }
   };

   COM_OWNER.setrefAVLISTMANAGER = function( refNew )
   {
      COM_ANCESTOR.setrefAVLISTMANAGER.call( this, refNew );
   };

   COM_OWNER.setrefAVFRAMEWORKMANAGER = function( refNew )
   {
      COM_ANCESTOR.setrefAVFRAMEWORKMANAGER.call( this, refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC007O" ],
   rp: [ "PRIM_WEB.DataRequest" ],
   dc: [ "VF_LM002O" ],
   dp: [ "PRIM_BOLN" ]
});

//# sourceURL=vlfdem_2.js
