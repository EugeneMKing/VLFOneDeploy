// -----------------------------
// -- Reusable Part: VLFDEM_3 --
// -----------------------------
LANSA.addComponent(
{
   id: "VLFDEM_3", 
   nm: "VLFDEMO_XCONTACTS_SCRUD_Handler", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Command Handler", 
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

   // ---------------------------------------
   // -- Multilingual Variable Definitions --
   // ---------------------------------------
   var 
      mtxtUF_SAVE = {"ENG" : "Save", "FRA" : "Enregistrer" }[ curLanguage ], 
      mtxtUF_DELETE = {"ENG" : "Delete", "FRA" : "Supprimer" }[ curLanguage ], 
      mtxtUF_CREATEMORE = {"ENG" : "Create Another", "FRA" : "Créer un autre" }[ curLanguage ], 
      mtxtUF_SAVING = {"ENG" : "Saving", "FRA" : "Enregistrement" }[ curLanguage ], 
      mtxtUF_LOADING = {"ENG" : "Loading", "FRA" : "Chargement" }[ curLanguage ], 
      mtxtUF_MSG_0009 = {"ENG" : "Changes made to &1 have not been saved. Do you want to save them?", "FRA" : "Modifications de &1 non enregistrées. Voulez-vous les enregistrer?" }[ curLanguage ];

   // ---------------
   // -- Constants --
   // ---------------
   var 
      const1 = Lansa.createDate( "1900-01-01" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
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
      XCONTACTT:
      {
         nm: "XCONTACTT",
         an: "xContactTitle",
         ft: "N",
         ln: 40,
         dc: 0,
         lb: "Title",
         h1: "Title",
         h2: " ",
         h3: " ",
         de: "Title",
         dv: "",
         ia: [ "FE", "LC" ],
         vr: 
         [
            {
               wt: "A",
               wf: "N",
               vi: "Y",
               vu: "U",
               vd: "N",
               rd: rule1,
               mt: { "ENG": "Title - not an allowed value (list of values)", "FRA": "Title - not an allowed value (list of values)" }[ curLanguage ]
            },
            {
               wt: "N",
               wf: "E",
               vi: "Y",
               vu: "U",
               vd: "N",
               rd: rule2,
               mt: "Title must be Mr | Mrs | Miss | Ms | Dr"
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
               rd: rule3,
               mt: "Last Name must be entered"
            }
         ]
      },
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
               rd: rule4,
               mt: "First Name must be entered"
            }
         ]
      },
      XCONTACTG:
      {
         nm: "XCONTACTG",
         an: "xContactGender",
         ft: "A",
         ln: 15,
         dc: 0,
         lb: "Gender",
         h1: "Gender",
         h2: " ",
         h3: " ",
         de: "Gender",
         dv: "Undisclosed",
         ia: [ "FE", "LC" ],
         vr: 
         [
            {
               wt: "N",
               wf: "E",
               vi: "Y",
               vu: "U",
               vd: "N",
               rd: rule5,
               mt: "Gender must be Male, Female or Undisclosed"
            }
         ]
      },
      XCONEMAIL:
      {
         nm: "XCONEMAIL",
         an: "xContactEmailAddress",
         ft: "NV",
         ln: 200,
         dc: 0,
         lb: "Email Address",
         h1: "Email Address",
         h2: " ",
         h3: " ",
         de: "Email Address",
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
               rd: rule6,
               mt: "Email Address is not valid"
            }
         ]
      },
      XCONPHMOB:
      {
         nm: "XCONPHMOB",
         an: "xContactMobilePhone",
         ft: "C",
         ln: 15,
         dc: 0,
         lb: "Mobile Phone",
         h1: "Mobile Phone",
         h2: " ",
         h3: " ",
         de: "Mobile Phone",
         dv: "",
         ia: [ "FE", "RB" ]
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
      XCONPHFAX:
      {
         nm: "XCONPHFAX",
         an: "xContactFaxNumber",
         ft: "C",
         ln: 15,
         dc: 0,
         lb: "Fax Number",
         h1: "Fax Number",
         h2: " ",
         h3: " ",
         de: "Fax Number",
         dv: "",
         ia: [ "FE", "RB" ]
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
      },
      XCONNOTES:
      {
         nm: "XCONNOTES",
         an: "xContactNotes",
         ft: "NV",
         ln: 2000,
         dc: 0,
         lb: "Notes",
         h1: "Notes",
         h2: " ",
         h3: " ",
         de: "Notes",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONIMAGE:
      {
         nm: "XCONIMAGE",
         an: "xContactPhoto",
         ft: "NV",
         ln: 255,
         dc: 0,
         lb: "Photo",
         h1: "Photo",
         h2: " ",
         h3: " ",
         de: "Photo",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONINTRS:
      {
         nm: "XCONINTRS",
         an: "xContactInterests",
         ft: "NV",
         ln: 200,
         dc: 0,
         lb: "Interests",
         h1: "Interests",
         h2: " ",
         h3: " ",
         de: "Interests",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONDOB:
      {
         nm: "XCONDOB",
         an: "xContactBirthdate",
         ft: "D",
         ln: 10,
         dc: 0,
         lb: "Birth Date",
         h1: "Birth Date",
         h2: " ",
         h3: " ",
         de: "Birth Date",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "ISO" ]
      },
      XCONHMETN:
      {
         nm: "XCONHMETN",
         an: "xContactHometown",
         ft: "NV",
         ln: 50,
         dc: 0,
         lb: "Hometown",
         h1: "Hometown",
         h2: " ",
         h3: " ",
         de: "Hometown",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONCITY:
      {
         nm: "XCONCITY",
         an: "xContactCity",
         ft: "NV",
         ln: 50,
         dc: 0,
         lb: "City",
         h1: "City",
         h2: " ",
         h3: " ",
         de: "City",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONJOBTL:
      {
         nm: "XCONJOBTL",
         an: "xContactJobTitle",
         ft: "NV",
         ln: 50,
         dc: 0,
         lb: "Job Title",
         h1: "Job Title",
         h2: " ",
         h3: " ",
         de: "Job Title",
         dv: "",
         ia: [ "FE", "LC" ]
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
      XCONADDR:
      {
         nm: "XCONADDR",
         an: "xContactAddress",
         ft: "NV",
         ln: 200,
         dc: 0,
         lb: "Address",
         h1: "Address",
         h2: " ",
         h3: " ",
         de: "Address",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCONWSITE:
      {
         nm: "XCONWSITE",
         an: "xContactCompanySite",
         ft: "NV",
         ln: 500,
         dc: 0,
         lb: "Company Website",
         h1: "Company Website",
         h2: " ",
         h3: " ",
         de: "Company Website",
         dv: "",
         ia: [ "FE", "LC" ]
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
      XCONFADD:
      {
         nm: "XCONFADD",
         an: "xContactFullAddress",
         ft: "NV",
         ln: 260,
         dc: 0,
         lb: "Full Address",
         h1: "Full",
         h2: "Address",
         h3: " ",
         de: "Full Address",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      STD_INT:
      {
         nm: "STD_INT",
         ft: "I",
         ln: 4,
         dc: 0,
         ec: "J",
         lb: { "ENG": "Std Integer", "FRA": "?" }[ curLanguage ],
         h1: { "ENG": "Standard", "FRA": "?" }[ curLanguage ],
         h2: { "ENG": "Integer", "FRA": "?" }[ curLanguage ],
         h3: { "ENG": "Field", "FRA": "?" }[ curLanguage ],
         de: { "ENG": "Standard Integer field", "FRA": "?" }[ curLanguage ],
         dv: 0,
         ia: [ "FE", "RB" ]
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
      },
      XEMPLOYID:
      {
         nm: "XEMPLOYID",
         an: "xEmployeeIdentification",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: { "ENG": "Employee Id", "FRA": "Id employé" }[ curLanguage ],
         h1: { "ENG": "Employee", "FRA": "Identification" }[ curLanguage ],
         h2: { "ENG": "Identification", "FRA": "Employé" }[ curLanguage ],
         h3: " ",
         de: "Identification",
         dv: "",
         ia: [ "FE" ]
      },
      XSURNAME:
      {
         nm: "XSURNAME",
         an: "xEmployeeSurname",
         ft: "N",
         ln: 40,
         dc: 0,
         lb: { "ENG": "Surname", "FRA": "Nom" }[ curLanguage ],
         h1: { "ENG": "Employee", "FRA": "Nom" }[ curLanguage ],
         h2: { "ENG": "Surname", "FRA": "Employé" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Surname", "FRA": "Nom" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XGIVENAME:
      {
         nm: "XGIVENAME",
         an: "xEmployeeGivenNames",
         ft: "N",
         ln: 40,
         dc: 0,
         lb: { "ENG": "Given Names", "FRA": "Prénoms" }[ curLanguage ],
         h1: { "ENG": "Employee", "FRA": "Prénoms" }[ curLanguage ],
         h2: { "ENG": "Given", "FRA": "Employé" }[ curLanguage ],
         h3: { "ENG": "Names", "FRA": " " }[ curLanguage ],
         de: { "ENG": "Given Names", "FRA": "Prénoms" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XGENDER:
      {
         nm: "XGENDER",
         an: "xEmployeeGender",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: { "ENG": "Gender", "FRA": "Genre" }[ curLanguage ],
         h1: { "ENG": "Employee", "FRA": "Genre" }[ curLanguage ],
         h2: { "ENG": "Gender", "FRA": "Employé" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Gender", "FRA": "Genre" }[ curLanguage ],
         dv: "Male",
         ia: [ "FE", "LC" ]
      },
      XSTREET:
      {
         nm: "XSTREET",
         an: "xEmployeeStreet",
         ft: "N",
         ln: 40,
         dc: 0,
         lb: { "ENG": "Street", "FRA": "Rue" }[ curLanguage ],
         h1: { "ENG": "Street", "FRA": "Rue" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Street", "FRA": "Rue" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XCITY:
      {
         nm: "XCITY",
         an: "xEmployeeCity",
         ft: "N",
         ln: 40,
         dc: 0,
         lb: { "ENG": "City", "FRA": "Commune" }[ curLanguage ],
         h1: { "ENG": "City", "FRA": "Commune" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "City", "FRA": "Commune" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XPOSTCODE:
      {
         nm: "XPOSTCODE",
         an: "xEmployeePostalCode",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: { "ENG": "Postal Code", "FRA": "Code Postal" }[ curLanguage ],
         h1: { "ENG": "Postal", "FRA": "Code" }[ curLanguage ],
         h2: { "ENG": "Code", "FRA": "Postal" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Postal Code", "FRA": "Code Postal" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      },
      XSTARTDTE:
      {
         nm: "XSTARTDTE",
         an: "xEmployeeStartDate",
         ft: "D",
         ln: 10,
         dc: 0,
         lb: { "ENG": "Start Date", "FRA": "Date Embauche" }[ curLanguage ],
         h1: { "ENG": "Start", "FRA": "Date" }[ curLanguage ],
         h2: { "ENG": "Date", "FRA": "Embauche" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Start Date", "FRA": "Date d'Embauche" }[ curLanguage ],
         dv: Lansa.SqlNull,
         ia: [ "FE", "ASQN" ]
      },
      XTERMDATE:
      {
         nm: "XTERMDATE",
         an: "xEmployeeTerminationDate",
         ft: "D",
         ln: 10,
         dc: 0,
         lb: { "ENG": "Termination", "FRA": "Date de départ" }[ curLanguage ],
         h1: { "ENG": "Termination", "FRA": "Date" }[ curLanguage ],
         h2: { "ENG": "Date", "FRA": "Départ" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Termination Date", "FRA": "Date de départ" }[ curLanguage ],
         dv: Lansa.SqlNull,
         ia: [ "FE", "ASQN" ]
      }
   };

   // -----------------------
   // -- File Definitions --
   // -----------------------
   var Files = 
   {
      XEMPLOYEE:
      {
         fd:
         [
            {
               nm: "XEMPLOYID",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule7,
                     mt: "Employee Id must be in the range 1-999999"
                  }
               ]
            },
            {
               nm: "XEMPTITLE"
            },
            {
               nm: "XSURNAME",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule8,
                     mt: "Surname must be entered"
                  }
               ]
            },
            {
               nm: "XGIVENAME",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule9,
                     mt: "Given Name(s) must be entered"
                  }
               ]
            },
            {
               nm: "XEMPDOB"
            },
            {
               nm: "XGENDER",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule10,
                     mt: "Gender must be Male, Female or NoDisclose"
                  }
               ]
            },
            {
               nm: "XSTREET",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule11,
                     mt: "Street must be entered"
                  }
               ]
            },
            {
               nm: "XCITY",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule12,
                     mt: "City must be entered"
                  }
               ]
            },
            {
               nm: "XSTATE"
            },
            {
               nm: "XPOSTCODE",
               vr: 
               [
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "U",
                     vd: "N",
                     rd: rule13,
                     mt: "Postal Code must be in the range 1000-99999"
                  }
               ]
            },
            {
               nm: "XCOUNTRY"
            },
            {
               nm: "XPHONEHME"
            },
            {
               nm: "XPHONEBUS"
            },
            {
               nm: "XPHONEMOB"
            },
            {
               nm: "XSALARY"
            },
            {
               nm: "XSTARTDTE",
               vr: 
               [
                  {
                     wt: "E",
                     wf: "N",
                     vi: "Y",
                     vu: "N",
                     vd: "N",
                     rd: rule14,
                     mt: "Start Date must be today or later"
                  }
               ]
            },
            {
               nm: "XTERMDATE",
               vr: 
               [
                  {
                     wt: "A",
                     wf: "N",
                     vi: "Y",
                     vu: "Y",
                     vd: "N",
                     rd: rule15,
                     mt: { "ENG": "Termination - fails validation test (simple)", "FRA": "Date de départ - fails validation test (simple)" }[ curLanguage ]
                  },
                  {
                     wt: "N",
                     wf: "E",
                     vi: "Y",
                     vu: "Y",
                     vd: "N",
                     rd: rule16,
                     mt: "Termination Date must be after the Start Date"
                  }
               ]
            },
            {
               nm: "XDEPTMENT"
            },
            {
               nm: "XMONTHSAL"
            },
            {
               nm: "XEMPAGE"
            },
            {
               nm: "XEMPDEPT"
            }
         ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "VF_AC010O", 
      fd: Fields, 
      rm: [ "dt" ], 

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

         uExecute: 
         {
            ps: 
            {
               "GotoFreeState":
               {
                  pt: "io"
               },

               "SwitchCallerReference":
               {
                  pt: "i"
               }
            }
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
         },

         LoadNew: 
         {
            ps: 
            {
               "ClearMessagesAfterDelay":
               {
                  pt: "o"
               }
            }
         },

         Load: 
         {
            ps: 
            {
               "ClearMessagesAfterDelay":
               {
                  pt: "o"
               }
            }
         },

         avHandleTrackedControlChange: 
         {
            ps: 
            {
               "Control":
               {
                  pt: "i"
               },

               "ControlMD":
               {
                  pt: "i"
               },

               "ControlMDDT":
               {
                  pt: "i"
               }
            }
         },

         avValidateTrackedMDControl: 
         {
            ps: 
            {
               "ControlMD_Edit":
               {
                  pt: "i"
               },

               "ControlMD_DateTime":
               {
                  pt: "i"
               },

               "ForOperation":
               {
                  pt: "i"
               },

               "ErrorCount":
               {
                  pt: "i"
               }
            }
         },

         CheckClientSideValidation: 
         {
            ps: 
            {
               "ForOperation":
               {
                  pt: "i"
               }
            }
         },

         Save: 
         {
            ps: 
            {
               "ClearMessagesAfterDelay":
               {
                  pt: "o"
               }
            }
         },

         SaveNew: 
         {
            ps: 
            {
               "ClearMessagesAfterDelay":
               {
                  pt: "o"
               }
            }
         },

         Delete: 
         {
            ps: 
            {
               "ClearMessagesAfterDelay":
               {
                  pt: "o"
               }
            }
         },

         uQueryCanClose: 
         {
            ps: 
            {
               "CanBeCancelled":
               {
                  pt: "i"
               },

               "TimeOutinProgress":
               {
                  pt: "i"
               }
            }
         },

         CheckForUnsavedChanges: 
         {
            ps: 
            {
               "TimeOutinProgress":
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
         this.addFields( "VLFDEM_3", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#Prim_Boln) Name(#ServerModuleResult)
         //
         var SERVERMODULERESULT = this.createReference( "SERVERMODULERESULT", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#Prim_panl) Name(#DataItemPanel) Parent(#COM_OWNER) Displayposition(1) Tabposition(1) Height(238) Left(0) Top(0) Width(500) Horizontalscroll(True) Verticalscroll(True) Tabstop(False)
         //
         var DATAITEMPANEL = this.createReference( "DATAITEMPANEL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#Prim_panl) Name(#ButtonPanel) Parent(#COM_OWNER) Displayposition(2) Tabposition(2) Left(0) Top(238) Width(500) Layoutmanager(#ButtonPanelAttachmenthManager) Height(32) Tabstop(False)
         //
         var BUTTONPANEL = this.createReference( "BUTTONPANEL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachDataItemPanel) Manage(#DataItemPanel) Parent(#MainPanelAttachmentManager) Attachment(Center)
         //
         var ATTACHDATAITEMPANEL = this.createReference( "ATTACHDATAITEMPANEL", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachButtonPanel) Manage(#ButtonPanel) Parent(#MainPanelAttachmentManager) Attachment(Bottom)
         //
         var ATTACHBUTTONPANEL = this.createReference( "ATTACHBUTTONPANEL", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#Prim_atlm) Name(#ButtonPanelAttachmenthManager)
         //
         var BUTTONPANELATTACHMENTHMANAGER = this.createReference( "BUTTONPANELATTACHMENTHMANAGER", "PRIM_ATLM" );

         //
         // DEFINE_COM Class(#Prim_atli) Name(#ButtonPanelAttachmentSave) Parent(#ButtonPanelAttachmenthManager) Manage(#Save_Button) Attachment(Right) Marginright(4) Margintop(4) Marginbottom(4)
         //
         var BUTTONPANELATTACHMENTSAVE = this.createReference( "BUTTONPANELATTACHMENTSAVE", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#Prim_atli) Name(#ButtonPanelAttachmentDelete) Parent(#ButtonPanelAttachmenthManager) Manage(#Delete_Button) Attachment(Right) Marginright(4) Margintop(4) Marginbottom(4)
         //
         var BUTTONPANELATTACHMENTDELETE = this.createReference( "BUTTONPANELATTACHMENTDELETE", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#Prim_atli) Name(#ButtonPanelAttachmentAnother) Parent(#ButtonPanelAttachmenthManager) Manage(#Another_Button) Attachment(Right) Marginright(4) Margintop(4) Marginbottom(4)
         //
         var BUTTONPANELATTACHMENTANOTHER = this.createReference( "BUTTONPANELATTACHMENTANOTHER", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_MD.RaisedButton) Name(#Save_Button) Parent(#ButtonPanel) Caption(*MTXTUF_SAVE) Displayposition(1) Tabposition(1) Height(24) Left(416) Top(4) Buttondefault(True) Themedrawstyle('MediumTitle')
         //
         var SAVE_BUTTON = this.createReference( "SAVE_BUTTON", "PRIM_MD", "RaisedButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.RaisedButton) Name(#Delete_Button) Parent(#ButtonPanel) Caption(*MTXTUF_DELETE) Displayposition(2) Tabposition(2) Height(24) Left(332) Top(4) Themedrawstyle('ForegroundMediumPrimary')
         //
         var DELETE_BUTTON = this.createReference( "DELETE_BUTTON", "PRIM_MD", "RaisedButton" );

         //
         // DEFINE_COM Class(#PRIM_MD.RaisedButton) Name(#Another_Button) Parent(#ButtonPanel) Caption(*MTXTUF_CREATEMORE) Displayposition(3) Tabposition(3) Height(24) Left(332) Top(4) Buttondefault(True) Width(100) Themedrawstyle('ForegroundMediumPrimary')
         //
         var ANOTHER_BUTTON = this.createReference( "ANOTHER_BUTTON", "PRIM_MD", "RaisedButton" );

         //
         // DEFINE_COM Class(#xContactIdentification.EditField) Parent(#DataItemPanel) Displayposition(1) CaptionType(DESCRIPTION) Tabposition(1) Top(4) Left(4) Height(56) Width(400)
         //
         var XCONTACTIDENTIFICATION = this.createFieldReference( "XCONTACTIDENTIFICATION", Fields.XCONID.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactTitle.EditField) Parent(#DataItemPanel) Displayposition(2) CaptionType(DESCRIPTION) Tabposition(2) Top(62) Left(4) Height(56) Width(400)
         //
         var XCONTACTTITLE = this.createFieldReference( "XCONTACTTITLE", Fields.XCONTACTT.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactLastName.EditField) Parent(#DataItemPanel) Displayposition(3) CaptionType(DESCRIPTION) Tabposition(3) Top(120) Left(4) Height(56) Width(400)
         //
         var XCONTACTLASTNAME = this.createFieldReference( "XCONTACTLASTNAME", Fields.XCONLAME.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactFirstName.EditField) Parent(#DataItemPanel) Displayposition(4) CaptionType(DESCRIPTION) Tabposition(4) Top(178) Left(4) Height(56) Width(400)
         //
         var XCONTACTFIRSTNAME = this.createFieldReference( "XCONTACTFIRSTNAME", Fields.XCONFNAME.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactGender.EditField) Parent(#DataItemPanel) Displayposition(5) CaptionType(DESCRIPTION) Tabposition(5) Top(236) Left(4) Height(56) Width(400)
         //
         var XCONTACTGENDER = this.createFieldReference( "XCONTACTGENDER", Fields.XCONTACTG.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactEmailAddress.EditField) Parent(#DataItemPanel) Displayposition(6) CaptionType(DESCRIPTION) Tabposition(6) Top(294) Left(4) Height(56) Width(400)
         //
         var XCONTACTEMAILADDRESS = this.createFieldReference( "XCONTACTEMAILADDRESS", Fields.XCONEMAIL.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactMobilePhone.EditField) Parent(#DataItemPanel) Displayposition(7) CaptionType(DESCRIPTION) Tabposition(7) Top(352) Left(4) Height(56) Width(400)
         //
         var XCONTACTMOBILEPHONE = this.createFieldReference( "XCONTACTMOBILEPHONE", Fields.XCONPHMOB.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactHomePhone.EditField) Parent(#DataItemPanel) Displayposition(8) CaptionType(DESCRIPTION) Tabposition(8) Top(410) Left(4) Height(56) Width(400)
         //
         var XCONTACTHOMEPHONE = this.createFieldReference( "XCONTACTHOMEPHONE", Fields.XCONPHHME.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactFaxNumber.EditField) Parent(#DataItemPanel) Displayposition(9) CaptionType(DESCRIPTION) Tabposition(9) Top(468) Left(4) Height(56) Width(400)
         //
         var XCONTACTFAXNUMBER = this.createFieldReference( "XCONTACTFAXNUMBER", Fields.XCONPHFAX.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactBusinessPhone.EditField) Parent(#DataItemPanel) Displayposition(10) CaptionType(DESCRIPTION) Tabposition(10) Top(526) Left(4) Height(56) Width(400)
         //
         var XCONTACTBUSINESSPHONE = this.createFieldReference( "XCONTACTBUSINESSPHONE", Fields.XCONPHBUS.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactNotes.EditField) Parent(#DataItemPanel) Displayposition(11) CaptionType(DESCRIPTION) Tabposition(11) Top(584) Left(4) Height(56) Width(400)
         //
         var XCONTACTNOTES = this.createFieldReference( "XCONTACTNOTES", Fields.XCONNOTES.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactPhoto.EditField) Parent(#DataItemPanel) Displayposition(12) CaptionType(DESCRIPTION) Tabposition(12) Top(642) Left(4) Height(56) Width(400)
         //
         var XCONTACTPHOTO = this.createFieldReference( "XCONTACTPHOTO", Fields.XCONIMAGE.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactInterests.EditField) Parent(#DataItemPanel) Displayposition(13) CaptionType(DESCRIPTION) Tabposition(13) Top(700) Left(4) Height(56) Width(400)
         //
         var XCONTACTINTERESTS = this.createFieldReference( "XCONTACTINTERESTS", Fields.XCONINTRS.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactBirthdate.DateTimeField) Parent(#DataItemPanel) Displayposition(14) CaptionType(DESCRIPTION) Tabposition(14) Top(758) Left(4) Height(56) Width(400)
         //
         var XCONTACTBIRTHDATE = this.createFieldReference( "XCONTACTBIRTHDATE", Fields.XCONDOB.DATETIMEFIELD );

         //
         // DEFINE_COM Class(#xContactHometown.EditField) Parent(#DataItemPanel) Displayposition(15) CaptionType(DESCRIPTION) Tabposition(15) Top(816) Left(4) Height(56) Width(400)
         //
         var XCONTACTHOMETOWN = this.createFieldReference( "XCONTACTHOMETOWN", Fields.XCONHMETN.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactCity.EditField) Parent(#DataItemPanel) Displayposition(16) CaptionType(DESCRIPTION) Tabposition(16) Top(874) Left(4) Height(56) Width(400)
         //
         var XCONTACTCITY = this.createFieldReference( "XCONTACTCITY", Fields.XCONCITY.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactJobTitle.EditField) Parent(#DataItemPanel) Displayposition(17) CaptionType(DESCRIPTION) Tabposition(17) Top(932) Left(4) Height(56) Width(400)
         //
         var XCONTACTJOBTITLE = this.createFieldReference( "XCONTACTJOBTITLE", Fields.XCONJOBTL.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactCompany.EditField) Parent(#DataItemPanel) Displayposition(18) CaptionType(DESCRIPTION) Tabposition(18) Top(990) Left(4) Height(56) Width(400)
         //
         var XCONTACTCOMPANY = this.createFieldReference( "XCONTACTCOMPANY", Fields.XCONCMPY.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactAddress.EditField) Parent(#DataItemPanel) Displayposition(19) CaptionType(DESCRIPTION) Tabposition(19) Top(1048) Left(4) Height(56) Width(400)
         //
         var XCONTACTADDRESS = this.createFieldReference( "XCONTACTADDRESS", Fields.XCONADDR.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactCompanySite.EditField) Parent(#DataItemPanel) Displayposition(20) CaptionType(DESCRIPTION) Tabposition(20) Top(1106) Left(4) Height(56) Width(400)
         //
         var XCONTACTCOMPANYSITE = this.createFieldReference( "XCONTACTCOMPANYSITE", Fields.XCONWSITE.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactFullName.EditField) Parent(#DataItemPanel) Displayposition(21) CaptionType(DESCRIPTION) Tabposition(21) Top(1164) Left(4) Height(56) Width(400) ReadOnly(True) Appearance(None)
         //
         var XCONTACTFULLNAME = this.createFieldReference( "XCONTACTFULLNAME", Fields.XCONFNAM.EDITFIELD );

         //
         // DEFINE_COM Class(#xContactFullAddress.EditField) Parent(#DataItemPanel) Displayposition(22) CaptionType(DESCRIPTION) Tabposition(22) Top(1222) Left(4) Height(56) Width(400) ReadOnly(True) Appearance(None)
         //
         var XCONTACTFULLADDRESS = this.createFieldReference( "XCONTACTFULLADDRESS", Fields.XCONFADD.EDITFIELD );

         // ------------------------------------
         // -- Initialize #SERVERMODULERESULT --
         // ------------------------------------
         SERVERMODULERESULT.initialize();

         // -------------------------------
         // -- Initialize #DATAITEMPANEL --
         // -------------------------------
         DATAITEMPANEL.setParent( this );
         DATAITEMPANEL.setDisplayPosition( 1 );
         DATAITEMPANEL.setTabPosition( 1 );
         DATAITEMPANEL.setHeight( 238 );
         DATAITEMPANEL.setLeft( 0 );
         DATAITEMPANEL.setTop( 0 );
         DATAITEMPANEL.setWidth( 500 );
         DATAITEMPANEL.setHorizontalScroll( true );
         DATAITEMPANEL.setVerticalScroll( true );
         DATAITEMPANEL.setTabStop( false );
         DATAITEMPANEL.initialize();

         // -----------------------------
         // -- Initialize #BUTTONPANEL --
         // -----------------------------
         BUTTONPANEL.setParent( this );
         BUTTONPANEL.setDisplayPosition( 2 );
         BUTTONPANEL.setTabPosition( 2 );
         BUTTONPANEL.setLeft( 0 );
         BUTTONPANEL.setTop( 238 );
         BUTTONPANEL.setWidth( 500 );
         BUTTONPANEL.setLayoutManager( BUTTONPANELATTACHMENTHMANAGER );
         BUTTONPANEL.setHeight( 32 );
         BUTTONPANEL.setTabStop( false );
         BUTTONPANEL.initialize();

         // -------------------------------------
         // -- Initialize #ATTACHDATAITEMPANEL --
         // -------------------------------------
         ATTACHDATAITEMPANEL.setManage( DATAITEMPANEL );
         ATTACHDATAITEMPANEL.setParent( this.REF.MAINPANELATTACHMENTMANAGER );
         ATTACHDATAITEMPANEL.setAttachment( "CENTER" );
         ATTACHDATAITEMPANEL.initialize();

         // -----------------------------------
         // -- Initialize #ATTACHBUTTONPANEL --
         // -----------------------------------
         ATTACHBUTTONPANEL.setManage( BUTTONPANEL );
         ATTACHBUTTONPANEL.setParent( this.REF.MAINPANELATTACHMENTMANAGER );
         ATTACHBUTTONPANEL.setAttachment( "BOTTOM" );
         ATTACHBUTTONPANEL.initialize();

         // -----------------------------------------------
         // -- Initialize #BUTTONPANELATTACHMENTHMANAGER --
         // -----------------------------------------------
         BUTTONPANELATTACHMENTHMANAGER.initialize();

         // -------------------------------------------
         // -- Initialize #BUTTONPANELATTACHMENTSAVE --
         // -------------------------------------------
         BUTTONPANELATTACHMENTSAVE.setParent( BUTTONPANELATTACHMENTHMANAGER );
         BUTTONPANELATTACHMENTSAVE.setManage( SAVE_BUTTON );
         BUTTONPANELATTACHMENTSAVE.setAttachment( "RIGHT" );
         BUTTONPANELATTACHMENTSAVE.setMarginRight( 4 );
         BUTTONPANELATTACHMENTSAVE.setMarginTop( 4 );
         BUTTONPANELATTACHMENTSAVE.setMarginBottom( 4 );
         BUTTONPANELATTACHMENTSAVE.initialize();

         // ---------------------------------------------
         // -- Initialize #BUTTONPANELATTACHMENTDELETE --
         // ---------------------------------------------
         BUTTONPANELATTACHMENTDELETE.setParent( BUTTONPANELATTACHMENTHMANAGER );
         BUTTONPANELATTACHMENTDELETE.setManage( DELETE_BUTTON );
         BUTTONPANELATTACHMENTDELETE.setAttachment( "RIGHT" );
         BUTTONPANELATTACHMENTDELETE.setMarginRight( 4 );
         BUTTONPANELATTACHMENTDELETE.setMarginTop( 4 );
         BUTTONPANELATTACHMENTDELETE.setMarginBottom( 4 );
         BUTTONPANELATTACHMENTDELETE.initialize();

         // ----------------------------------------------
         // -- Initialize #BUTTONPANELATTACHMENTANOTHER --
         // ----------------------------------------------
         BUTTONPANELATTACHMENTANOTHER.setParent( BUTTONPANELATTACHMENTHMANAGER );
         BUTTONPANELATTACHMENTANOTHER.setManage( ANOTHER_BUTTON );
         BUTTONPANELATTACHMENTANOTHER.setAttachment( "RIGHT" );
         BUTTONPANELATTACHMENTANOTHER.setMarginRight( 4 );
         BUTTONPANELATTACHMENTANOTHER.setMarginTop( 4 );
         BUTTONPANELATTACHMENTANOTHER.setMarginBottom( 4 );
         BUTTONPANELATTACHMENTANOTHER.initialize();

         // -----------------------------
         // -- Initialize #SAVE_BUTTON --
         // -----------------------------
         SAVE_BUTTON.setParent( BUTTONPANEL );
         SAVE_BUTTON.setCaption( mtxtUF_SAVE );
         SAVE_BUTTON.setDisplayPosition( 1 );
         SAVE_BUTTON.setTabPosition( 1 );
         SAVE_BUTTON.setHeight( 24 );
         SAVE_BUTTON.setLeft( 416 );
         SAVE_BUTTON.setTop( 4 );
         SAVE_BUTTON.setButtonDefault( true );
         SAVE_BUTTON.setThemeDrawStyle( "MediumTitle" );
         SAVE_BUTTON.initialize();

         // -------------------------------
         // -- Initialize #DELETE_BUTTON --
         // -------------------------------
         DELETE_BUTTON.setParent( BUTTONPANEL );
         DELETE_BUTTON.setCaption( mtxtUF_DELETE );
         DELETE_BUTTON.setDisplayPosition( 2 );
         DELETE_BUTTON.setTabPosition( 2 );
         DELETE_BUTTON.setHeight( 24 );
         DELETE_BUTTON.setLeft( 332 );
         DELETE_BUTTON.setTop( 4 );
         DELETE_BUTTON.setThemeDrawStyle( "ForegroundMediumPrimary" );
         DELETE_BUTTON.initialize();

         // --------------------------------
         // -- Initialize #ANOTHER_BUTTON --
         // --------------------------------
         ANOTHER_BUTTON.setParent( BUTTONPANEL );
         ANOTHER_BUTTON.setCaption( mtxtUF_CREATEMORE );
         ANOTHER_BUTTON.setDisplayPosition( 3 );
         ANOTHER_BUTTON.setTabPosition( 3 );
         ANOTHER_BUTTON.setHeight( 24 );
         ANOTHER_BUTTON.setLeft( 332 );
         ANOTHER_BUTTON.setTop( 4 );
         ANOTHER_BUTTON.setButtonDefault( true );
         ANOTHER_BUTTON.setWidth( 100 );
         ANOTHER_BUTTON.setThemeDrawStyle( "ForegroundMediumPrimary" );
         ANOTHER_BUTTON.initialize();

         // ----------------------------------------
         // -- Initialize #XCONTACTIDENTIFICATION --
         // ----------------------------------------
         XCONTACTIDENTIFICATION.setParent( DATAITEMPANEL );
         XCONTACTIDENTIFICATION.setDisplayPosition( 1 );
         XCONTACTIDENTIFICATION.setCaptionType( "DESCRIPTION" );
         XCONTACTIDENTIFICATION.setTabPosition( 1 );
         XCONTACTIDENTIFICATION.setTop( 4 );
         XCONTACTIDENTIFICATION.setLeft( 4 );
         XCONTACTIDENTIFICATION.setHeight( 56 );
         XCONTACTIDENTIFICATION.setWidth( 400 );
         XCONTACTIDENTIFICATION.applyDefault();
         XCONTACTIDENTIFICATION.initialize();

         // -------------------------------
         // -- Initialize #XCONTACTTITLE --
         // -------------------------------
         XCONTACTTITLE.setParent( DATAITEMPANEL );
         XCONTACTTITLE.setDisplayPosition( 2 );
         XCONTACTTITLE.setCaptionType( "DESCRIPTION" );
         XCONTACTTITLE.setTabPosition( 2 );
         XCONTACTTITLE.setTop( 62 );
         XCONTACTTITLE.setLeft( 4 );
         XCONTACTTITLE.setHeight( 56 );
         XCONTACTTITLE.setWidth( 400 );
         XCONTACTTITLE.applyDefault();
         XCONTACTTITLE.initialize();

         // ----------------------------------
         // -- Initialize #XCONTACTLASTNAME --
         // ----------------------------------
         XCONTACTLASTNAME.setParent( DATAITEMPANEL );
         XCONTACTLASTNAME.setDisplayPosition( 3 );
         XCONTACTLASTNAME.setCaptionType( "DESCRIPTION" );
         XCONTACTLASTNAME.setTabPosition( 3 );
         XCONTACTLASTNAME.setTop( 120 );
         XCONTACTLASTNAME.setLeft( 4 );
         XCONTACTLASTNAME.setHeight( 56 );
         XCONTACTLASTNAME.setWidth( 400 );
         XCONTACTLASTNAME.applyDefault();
         XCONTACTLASTNAME.initialize();

         // -----------------------------------
         // -- Initialize #XCONTACTFIRSTNAME --
         // -----------------------------------
         XCONTACTFIRSTNAME.setParent( DATAITEMPANEL );
         XCONTACTFIRSTNAME.setDisplayPosition( 4 );
         XCONTACTFIRSTNAME.setCaptionType( "DESCRIPTION" );
         XCONTACTFIRSTNAME.setTabPosition( 4 );
         XCONTACTFIRSTNAME.setTop( 178 );
         XCONTACTFIRSTNAME.setLeft( 4 );
         XCONTACTFIRSTNAME.setHeight( 56 );
         XCONTACTFIRSTNAME.setWidth( 400 );
         XCONTACTFIRSTNAME.applyDefault();
         XCONTACTFIRSTNAME.initialize();

         // --------------------------------
         // -- Initialize #XCONTACTGENDER --
         // --------------------------------
         XCONTACTGENDER.setParent( DATAITEMPANEL );
         XCONTACTGENDER.setDisplayPosition( 5 );
         XCONTACTGENDER.setCaptionType( "DESCRIPTION" );
         XCONTACTGENDER.setTabPosition( 5 );
         XCONTACTGENDER.setTop( 236 );
         XCONTACTGENDER.setLeft( 4 );
         XCONTACTGENDER.setHeight( 56 );
         XCONTACTGENDER.setWidth( 400 );
         XCONTACTGENDER.applyDefault();
         XCONTACTGENDER.initialize();

         // --------------------------------------
         // -- Initialize #XCONTACTEMAILADDRESS --
         // --------------------------------------
         XCONTACTEMAILADDRESS.setParent( DATAITEMPANEL );
         XCONTACTEMAILADDRESS.setDisplayPosition( 6 );
         XCONTACTEMAILADDRESS.setCaptionType( "DESCRIPTION" );
         XCONTACTEMAILADDRESS.setTabPosition( 6 );
         XCONTACTEMAILADDRESS.setTop( 294 );
         XCONTACTEMAILADDRESS.setLeft( 4 );
         XCONTACTEMAILADDRESS.setHeight( 56 );
         XCONTACTEMAILADDRESS.setWidth( 400 );
         XCONTACTEMAILADDRESS.applyDefault();
         XCONTACTEMAILADDRESS.initialize();

         // -------------------------------------
         // -- Initialize #XCONTACTMOBILEPHONE --
         // -------------------------------------
         XCONTACTMOBILEPHONE.setParent( DATAITEMPANEL );
         XCONTACTMOBILEPHONE.setDisplayPosition( 7 );
         XCONTACTMOBILEPHONE.setCaptionType( "DESCRIPTION" );
         XCONTACTMOBILEPHONE.setTabPosition( 7 );
         XCONTACTMOBILEPHONE.setTop( 352 );
         XCONTACTMOBILEPHONE.setLeft( 4 );
         XCONTACTMOBILEPHONE.setHeight( 56 );
         XCONTACTMOBILEPHONE.setWidth( 400 );
         XCONTACTMOBILEPHONE.applyDefault();
         XCONTACTMOBILEPHONE.initialize();

         // -----------------------------------
         // -- Initialize #XCONTACTHOMEPHONE --
         // -----------------------------------
         XCONTACTHOMEPHONE.setParent( DATAITEMPANEL );
         XCONTACTHOMEPHONE.setDisplayPosition( 8 );
         XCONTACTHOMEPHONE.setCaptionType( "DESCRIPTION" );
         XCONTACTHOMEPHONE.setTabPosition( 8 );
         XCONTACTHOMEPHONE.setTop( 410 );
         XCONTACTHOMEPHONE.setLeft( 4 );
         XCONTACTHOMEPHONE.setHeight( 56 );
         XCONTACTHOMEPHONE.setWidth( 400 );
         XCONTACTHOMEPHONE.applyDefault();
         XCONTACTHOMEPHONE.initialize();

         // -----------------------------------
         // -- Initialize #XCONTACTFAXNUMBER --
         // -----------------------------------
         XCONTACTFAXNUMBER.setParent( DATAITEMPANEL );
         XCONTACTFAXNUMBER.setDisplayPosition( 9 );
         XCONTACTFAXNUMBER.setCaptionType( "DESCRIPTION" );
         XCONTACTFAXNUMBER.setTabPosition( 9 );
         XCONTACTFAXNUMBER.setTop( 468 );
         XCONTACTFAXNUMBER.setLeft( 4 );
         XCONTACTFAXNUMBER.setHeight( 56 );
         XCONTACTFAXNUMBER.setWidth( 400 );
         XCONTACTFAXNUMBER.applyDefault();
         XCONTACTFAXNUMBER.initialize();

         // ---------------------------------------
         // -- Initialize #XCONTACTBUSINESSPHONE --
         // ---------------------------------------
         XCONTACTBUSINESSPHONE.setParent( DATAITEMPANEL );
         XCONTACTBUSINESSPHONE.setDisplayPosition( 10 );
         XCONTACTBUSINESSPHONE.setCaptionType( "DESCRIPTION" );
         XCONTACTBUSINESSPHONE.setTabPosition( 10 );
         XCONTACTBUSINESSPHONE.setTop( 526 );
         XCONTACTBUSINESSPHONE.setLeft( 4 );
         XCONTACTBUSINESSPHONE.setHeight( 56 );
         XCONTACTBUSINESSPHONE.setWidth( 400 );
         XCONTACTBUSINESSPHONE.applyDefault();
         XCONTACTBUSINESSPHONE.initialize();

         // -------------------------------
         // -- Initialize #XCONTACTNOTES --
         // -------------------------------
         XCONTACTNOTES.setParent( DATAITEMPANEL );
         XCONTACTNOTES.setDisplayPosition( 11 );
         XCONTACTNOTES.setCaptionType( "DESCRIPTION" );
         XCONTACTNOTES.setTabPosition( 11 );
         XCONTACTNOTES.setTop( 584 );
         XCONTACTNOTES.setLeft( 4 );
         XCONTACTNOTES.setHeight( 56 );
         XCONTACTNOTES.setWidth( 400 );
         XCONTACTNOTES.applyDefault();
         XCONTACTNOTES.initialize();

         // -------------------------------
         // -- Initialize #XCONTACTPHOTO --
         // -------------------------------
         XCONTACTPHOTO.setParent( DATAITEMPANEL );
         XCONTACTPHOTO.setDisplayPosition( 12 );
         XCONTACTPHOTO.setCaptionType( "DESCRIPTION" );
         XCONTACTPHOTO.setTabPosition( 12 );
         XCONTACTPHOTO.setTop( 642 );
         XCONTACTPHOTO.setLeft( 4 );
         XCONTACTPHOTO.setHeight( 56 );
         XCONTACTPHOTO.setWidth( 400 );
         XCONTACTPHOTO.applyDefault();
         XCONTACTPHOTO.initialize();

         // -----------------------------------
         // -- Initialize #XCONTACTINTERESTS --
         // -----------------------------------
         XCONTACTINTERESTS.setParent( DATAITEMPANEL );
         XCONTACTINTERESTS.setDisplayPosition( 13 );
         XCONTACTINTERESTS.setCaptionType( "DESCRIPTION" );
         XCONTACTINTERESTS.setTabPosition( 13 );
         XCONTACTINTERESTS.setTop( 700 );
         XCONTACTINTERESTS.setLeft( 4 );
         XCONTACTINTERESTS.setHeight( 56 );
         XCONTACTINTERESTS.setWidth( 400 );
         XCONTACTINTERESTS.applyDefault();
         XCONTACTINTERESTS.initialize();

         // -----------------------------------
         // -- Initialize #XCONTACTBIRTHDATE --
         // -----------------------------------
         XCONTACTBIRTHDATE.setParent( DATAITEMPANEL );
         XCONTACTBIRTHDATE.setDisplayPosition( 14 );
         XCONTACTBIRTHDATE.setCaptionType( "DESCRIPTION" );
         XCONTACTBIRTHDATE.setTabPosition( 14 );
         XCONTACTBIRTHDATE.setTop( 758 );
         XCONTACTBIRTHDATE.setLeft( 4 );
         XCONTACTBIRTHDATE.setHeight( 56 );
         XCONTACTBIRTHDATE.setWidth( 400 );
         XCONTACTBIRTHDATE.applyDefault();
         XCONTACTBIRTHDATE.initialize();

         // ----------------------------------
         // -- Initialize #XCONTACTHOMETOWN --
         // ----------------------------------
         XCONTACTHOMETOWN.setParent( DATAITEMPANEL );
         XCONTACTHOMETOWN.setDisplayPosition( 15 );
         XCONTACTHOMETOWN.setCaptionType( "DESCRIPTION" );
         XCONTACTHOMETOWN.setTabPosition( 15 );
         XCONTACTHOMETOWN.setTop( 816 );
         XCONTACTHOMETOWN.setLeft( 4 );
         XCONTACTHOMETOWN.setHeight( 56 );
         XCONTACTHOMETOWN.setWidth( 400 );
         XCONTACTHOMETOWN.applyDefault();
         XCONTACTHOMETOWN.initialize();

         // ------------------------------
         // -- Initialize #XCONTACTCITY --
         // ------------------------------
         XCONTACTCITY.setParent( DATAITEMPANEL );
         XCONTACTCITY.setDisplayPosition( 16 );
         XCONTACTCITY.setCaptionType( "DESCRIPTION" );
         XCONTACTCITY.setTabPosition( 16 );
         XCONTACTCITY.setTop( 874 );
         XCONTACTCITY.setLeft( 4 );
         XCONTACTCITY.setHeight( 56 );
         XCONTACTCITY.setWidth( 400 );
         XCONTACTCITY.applyDefault();
         XCONTACTCITY.initialize();

         // ----------------------------------
         // -- Initialize #XCONTACTJOBTITLE --
         // ----------------------------------
         XCONTACTJOBTITLE.setParent( DATAITEMPANEL );
         XCONTACTJOBTITLE.setDisplayPosition( 17 );
         XCONTACTJOBTITLE.setCaptionType( "DESCRIPTION" );
         XCONTACTJOBTITLE.setTabPosition( 17 );
         XCONTACTJOBTITLE.setTop( 932 );
         XCONTACTJOBTITLE.setLeft( 4 );
         XCONTACTJOBTITLE.setHeight( 56 );
         XCONTACTJOBTITLE.setWidth( 400 );
         XCONTACTJOBTITLE.applyDefault();
         XCONTACTJOBTITLE.initialize();

         // ---------------------------------
         // -- Initialize #XCONTACTCOMPANY --
         // ---------------------------------
         XCONTACTCOMPANY.setParent( DATAITEMPANEL );
         XCONTACTCOMPANY.setDisplayPosition( 18 );
         XCONTACTCOMPANY.setCaptionType( "DESCRIPTION" );
         XCONTACTCOMPANY.setTabPosition( 18 );
         XCONTACTCOMPANY.setTop( 990 );
         XCONTACTCOMPANY.setLeft( 4 );
         XCONTACTCOMPANY.setHeight( 56 );
         XCONTACTCOMPANY.setWidth( 400 );
         XCONTACTCOMPANY.applyDefault();
         XCONTACTCOMPANY.initialize();

         // ---------------------------------
         // -- Initialize #XCONTACTADDRESS --
         // ---------------------------------
         XCONTACTADDRESS.setParent( DATAITEMPANEL );
         XCONTACTADDRESS.setDisplayPosition( 19 );
         XCONTACTADDRESS.setCaptionType( "DESCRIPTION" );
         XCONTACTADDRESS.setTabPosition( 19 );
         XCONTACTADDRESS.setTop( 1048 );
         XCONTACTADDRESS.setLeft( 4 );
         XCONTACTADDRESS.setHeight( 56 );
         XCONTACTADDRESS.setWidth( 400 );
         XCONTACTADDRESS.applyDefault();
         XCONTACTADDRESS.initialize();

         // -------------------------------------
         // -- Initialize #XCONTACTCOMPANYSITE --
         // -------------------------------------
         XCONTACTCOMPANYSITE.setParent( DATAITEMPANEL );
         XCONTACTCOMPANYSITE.setDisplayPosition( 20 );
         XCONTACTCOMPANYSITE.setCaptionType( "DESCRIPTION" );
         XCONTACTCOMPANYSITE.setTabPosition( 20 );
         XCONTACTCOMPANYSITE.setTop( 1106 );
         XCONTACTCOMPANYSITE.setLeft( 4 );
         XCONTACTCOMPANYSITE.setHeight( 56 );
         XCONTACTCOMPANYSITE.setWidth( 400 );
         XCONTACTCOMPANYSITE.applyDefault();
         XCONTACTCOMPANYSITE.initialize();

         // ----------------------------------
         // -- Initialize #XCONTACTFULLNAME --
         // ----------------------------------
         XCONTACTFULLNAME.setParent( DATAITEMPANEL );
         XCONTACTFULLNAME.setDisplayPosition( 21 );
         XCONTACTFULLNAME.setCaptionType( "DESCRIPTION" );
         XCONTACTFULLNAME.setTabPosition( 21 );
         XCONTACTFULLNAME.setTop( 1164 );
         XCONTACTFULLNAME.setLeft( 4 );
         XCONTACTFULLNAME.setHeight( 56 );
         XCONTACTFULLNAME.setWidth( 400 );
         XCONTACTFULLNAME.setReadOnly( true );
         XCONTACTFULLNAME.setAppearance( "NONE" );
         XCONTACTFULLNAME.applyDefault();
         XCONTACTFULLNAME.initialize();

         // -------------------------------------
         // -- Initialize #XCONTACTFULLADDRESS --
         // -------------------------------------
         XCONTACTFULLADDRESS.setParent( DATAITEMPANEL );
         XCONTACTFULLADDRESS.setDisplayPosition( 22 );
         XCONTACTFULLADDRESS.setCaptionType( "DESCRIPTION" );
         XCONTACTFULLADDRESS.setTabPosition( 22 );
         XCONTACTFULLADDRESS.setTop( 1222 );
         XCONTACTFULLADDRESS.setLeft( 4 );
         XCONTACTFULLADDRESS.setHeight( 56 );
         XCONTACTFULLADDRESS.setWidth( 400 );
         XCONTACTFULLADDRESS.setReadOnly( true );
         XCONTACTFULLADDRESS.setAppearance( "NONE" );
         XCONTACTFULLADDRESS.applyDefault();
         XCONTACTFULLADDRESS.initialize();

         // -----------------------------------------
         // -- Add Event Handlers for #SAVE_BUTTON --
         // -----------------------------------------
         SAVE_BUTTON.addEventHandler( "CLICK", this, evtRoutine6 );

         // -------------------------------------------
         // -- Add Event Handlers for #DELETE_BUTTON --
         // -------------------------------------------
         DELETE_BUTTON.addEventHandler( "CLICK", this, evtRoutine7 );

         // --------------------------------------------
         // -- Add Event Handlers for #ANOTHER_BUTTON --
         // --------------------------------------------
         ANOTHER_BUTTON.addEventHandler( "CLICK", this, evtRoutine8 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 270 );
         this.setWidth( 500 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "VLFDEM_3" );

         //
         // DEF_LIST Name(#AllDataItems) Fields(#XG_AllDataItems) Type(*Working) Entrys(*MAX)
         //
         list.ALLDATAITEMS = Lansa.createList( { "XCONID": XCONTACTIDENTIFICATION, "XCONTACTT": XCONTACTTITLE, "XCONLAME": XCONTACTLASTNAME, "XCONFNAME": XCONTACTFIRSTNAME, "XCONTACTG": XCONTACTGENDER, "XCONEMAIL": XCONTACTEMAILADDRESS, "XCONPHMOB": XCONTACTMOBILEPHONE, "XCONPHHME": XCONTACTHOMEPHONE, "XCONPHFAX": XCONTACTFAXNUMBER, "XCONPHBUS": XCONTACTBUSINESSPHONE, "XCONNOTES": XCONTACTNOTES, "XCONIMAGE": XCONTACTPHOTO, "XCONINTRS": XCONTACTINTERESTS, "XCONDOB": XCONTACTBIRTHDATE, "XCONHMETN": XCONTACTHOMETOWN, "XCONCITY": XCONTACTCITY, "XCONJOBTL": XCONTACTJOBTITLE, "XCONCMPY": XCONTACTCOMPANY, "XCONADDR": XCONTACTADDRESS, "XCONWSITE": XCONTACTCOMPANYSITE, "XCONFNAM": XCONTACTFULLNAME, "XCONFADD": XCONTACTFULLADDRESS }, null );

         //
         // DEF_LIST Name(#EditableDataItems) Fields(#XG_EditableDataItems) Type(*Working) Entrys(*MAX)
         //
         list.EDITABLEDATAITEMS = Lansa.createList( { "XCONID": XCONTACTIDENTIFICATION, "XCONTACTT": XCONTACTTITLE, "XCONLAME": XCONTACTLASTNAME, "XCONFNAME": XCONTACTFIRSTNAME, "XCONTACTG": XCONTACTGENDER, "XCONEMAIL": XCONTACTEMAILADDRESS, "XCONPHMOB": XCONTACTMOBILEPHONE, "XCONPHHME": XCONTACTHOMEPHONE, "XCONPHFAX": XCONTACTFAXNUMBER, "XCONPHBUS": XCONTACTBUSINESSPHONE, "XCONNOTES": XCONTACTNOTES, "XCONIMAGE": XCONTACTPHOTO, "XCONINTRS": XCONTACTINTERESTS, "XCONDOB": XCONTACTBIRTHDATE, "XCONHMETN": XCONTACTHOMETOWN, "XCONCITY": XCONTACTCITY, "XCONJOBTL": XCONTACTJOBTITLE, "XCONCMPY": XCONTACTCOMPANY, "XCONADDR": XCONTACTADDRESS, "XCONWSITE": XCONTACTCOMPANYSITE }, null );

         //
         // DEF_LIST Name(#ReadOnlyDataItems) Fields(#XG_ReadOnlyDataItems) Type(*Working) Entrys(*MAX)
         //
         list.READONLYDATAITEMS = Lansa.createList( { "XCONFNAM": XCONTACTFULLNAME, "XCONFADD": XCONTACTFULLADDRESS }, null );

         //
         // DEF_LIST Name(#AccessKeys) Fields(#XG_AccessKeys) Type(*Working) Entrys(1)
         //
         list.ACCESSKEYS = Lansa.createList( { "XCONID": XCONTACTIDENTIFICATION }, null );
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
   // mthUINITIALIZE - uInitialize
   //
   COM_OWNER.mthUINITIALIZE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "uInitialize", 65 );

      //
      // MTHROUTINE Name(uInitialize) Options(*REDEFINE)
      //
      rtn.Line( 65 );
      {

         //
         // #COM_ANCESTOR.uInitialize
         //
         rtn.Line( 67 );
         COM_ANCESTOR.mthUINITIALIZE.call( this );

         //
         // #COM_SELF.avTrackControlChanges Incontainer(#COM_Self) Insertclearcontenticon(True)
         //
         rtn.Line( 69 );
         this.mthAVTRACKCONTROLCHANGES( this, undefined, true );

         //
         // #COM_SELF.avStartAutoArrangingControls Onpanel(#DataItemPanel)
         //
         rtn.Line( 71 );
         this.mthAVSTARTAUTOARRANGINGCONTROLS( ref.DATAITEMPANEL, undefined, undefined, undefined, undefined, undefined );

         //
         // SET Com(#Save_Button #Delete_Button #Another_Button) Visible(False)
         //
         rtn.Line( 73 );
         ref.SAVE_BUTTON.setVisible( false );
         ref.DELETE_BUTTON.setVisible( false );
         ref.ANOTHER_BUTTON.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   //
   // mthUTERMINATE - uTerminate
   //
   COM_OWNER.mthUTERMINATE = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uTerminate", 77 );

      //
      // MTHROUTINE Name(uTerminate) Options(*REDEFINE)
      //
      rtn.Line( 77 );
      {

         //
         // #COM_SELF.avStopTrackingControlChanges
         //
         rtn.Line( 79 );
         this.mthAVSTOPTRACKINGCONTROLCHANGES();

         //
         // #Com_Self.avStopAutoArrangingControls
         //
         rtn.Line( 81 );
         this.mthAVSTOPAUTOARRANGINGCONTROLS();

         //
         // #COM_ANCESTOR.uTerminate
         //
         rtn.Line( 83 );
         COM_ANCESTOR.mthUTERMINATE.call( this );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 84 );
      rtn.end();
   };

   //
   // mthUEXECUTE - uExecute
   //
   COM_OWNER.mthUEXECUTE = function( parm_GOTOFREESTATE, parm_SWITCHCALLERREFERENCE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uExecute", 87 );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(GotoFreeState) For(*BOTH)
      //
      var GOTOFREESTATE = rtn.createParameter( "GOTOFREESTATE", "PRIM_BOLN" );

      //
      // DEFINE_MAP Class(#PRIM_OBJT) Name(SwitchCallerReference) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var SWITCHCALLERREFERENCE = rtn.createDynamicParameter( "SWITCHCALLERREFERENCE" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      GOTOFREESTATE.set( parm_GOTOFREESTATE.get() );
      SWITCHCALLERREFERENCE = parm_SWITCHCALLERREFERENCE;

      //
      // MTHROUTINE Name(uExecute) Options(*REDEFINE)
      //
      rtn.Line( 87 );
      {

         //
         // #COM_ANCESTOR.uExecute Gotofreestate(#GotoFreeState) Switchcallerreference(#SwitchCallerReference)
         //
         rtn.Line( 89 );
         COM_ANCESTOR.mthUEXECUTE.call( this, GOTOFREESTATE, SWITCHCALLERREFERENCE );

         //
         // IF (#COM_OWNER.CheckForUnsavedChanges( False ))
         //
         rtn.Line( 91 );
         if ( COM_OWNER.mthCHECKFORUNSAVEDCHANGES.call( this, false ) )
         {

            //
            // #COM_OWNER.avQueueAsyncOperation Operationid(Load + #COM_OWNER.avAlphaArg1)
            //
            rtn.Line( 92 );
            this.mthAVQUEUEASYNCOPERATION( Lansa.cat( "LOAD", this.getAVALPHAARG1() ), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined );

            //
            // #GotoFreeState := False /* Don't go back to a free state until async operations complete */
            //
            rtn.Line( 93 );
            GOTOFREESTATE.set( false );

         //
         // ENDIF 
         //
         }

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_GOTOFREESTATE.set( GOTOFREESTATE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 95 );
      rtn.end();
   };

   //
   // mthAVEXECUTEASYNCOPERATION - avExecuteAsyncOperation
   //
   COM_OWNER.mthAVEXECUTEASYNCOPERATION = function( parm_OPERATIONID, parm_PARAMETER1, parm_PARAMETER2, parm_PARAMETERREFERENCE1, parm_PARAMETERREFERENCE2, parm_KILLOTHERPENDINGOPERATIONS, parm_CLEARMESSAGESAFTERDELAY )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "avExecuteAsyncOperation", 98 );

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
      // MTHROUTINE Name(avExecuteAsyncOperation) Options(*REDEFINE)
      //
      rtn.Line( 98 );
      {

         //
         // #Com_Owner.avClearMDControlErrors
         //
         rtn.Line( 100 );
         this.mthAVCLEARMDCONTROLERRORS();

         //
         // CASE (#OperationID)
         //
         rtn.Line( 102 );
         {
            var value1 = OPERATIONID.get();

            //
            // WHEN (= LoadNew)    /* Create new Contact            */
            //
            if ( rtn.Line( 103 ), Lansa.String.eq( value1, "LOADNEW" ) )
            {

               //
               // #COM_OWNER.LoadNew ClearMessagesAfterDelay(#ClearMessagesAfterDelay)
               //
               rtn.Line( 104 );
               this.mthLOADNEW( CLEARMESSAGESAFTERDELAY );
            }

            //
            // WHEN (= Load)       /* Display/edit existing Contact */
            //
            else if ( rtn.Line( 105 ), Lansa.String.eq( value1, "LOAD" ) )
            {

               //
               // #COM_OWNER.Load ClearMessagesAfterDelay(#ClearMessagesAfterDelay)
               //
               rtn.Line( 106 );
               this.mthLOAD( CLEARMESSAGESAFTERDELAY );
            }

            //
            // WHEN (= SaveNew)    /* Save new Contact              */
            //
            else if ( rtn.Line( 107 ), Lansa.String.eq( value1, "SAVENEW" ) )
            {

               //
               // #COM_OWNER.SaveNew ClearMessagesAfterDelay(#ClearMessagesAfterDelay)
               //
               rtn.Line( 108 );
               this.mthSAVENEW( CLEARMESSAGESAFTERDELAY );
            }

            //
            // WHEN (= Save)       /* Save existing Contact         */
            //
            else if ( rtn.Line( 109 ), Lansa.String.eq( value1, "SAVE" ) )
            {

               //
               // #COM_OWNER.Save ClearMessagesAfterDelay(#ClearMessagesAfterDelay)
               //
               rtn.Line( 110 );
               this.mthSAVE( CLEARMESSAGESAFTERDELAY );
            }

            //
            // WHEN (= Delete)     /* Delete Contact                */
            //
            else if ( rtn.Line( 111 ), Lansa.String.eq( value1, "DELETE" ) )
            {

               //
               // #COM_OWNER.Delete ClearMessagesAfterDelay(#ClearMessagesAfterDelay)
               //
               rtn.Line( 112 );
               this.mthDELETE( CLEARMESSAGESAFTERDELAY );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 113 );
         }

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
      rtn.Line( 114 );
      rtn.end();
   };

   //
   // mthLOADNEW - LoadNew
   //
   COM_OWNER.mthLOADNEW = function( parm_CLEARMESSAGESAFTERDELAY )
   {
      var list = this.LIST.VLFDEM_3, fld = this.FLD.VLFDEM_3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "LoadNew", 117 ), mth = rtn;

      //
      // DEFINE_MAP For(*Output) Class(#prim_Boln) Name(#ClearMessagesAfterDelay)
      //
      var CLEARMESSAGESAFTERDELAY = rtn.createParameter( "CLEARMESSAGESAFTERDELAY", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#VLFDEMO_XCONTACTS_SCRUD_ServerModule.InitializeNewData) Name(#InitializeNewData)
      //
      var INITIALIZENEWDATA = rtn.createDataRequest( "INITIALIZENEWDATA", "VLFDEMO_X", "INITIALIZENEWDATA" );

      // -----------------------------------
      // -- Initialize #INITIALIZENEWDATA --
      // -----------------------------------
      INITIALIZENEWDATA.initialize();

      // -----------------------------------------------
      // -- Add Event Handlers for #INITIALIZENEWDATA --
      // -----------------------------------------------
      INITIALIZENEWDATA.addEventHandler( "FAILED", this, evtRoutine1 );

      //
      // MTHROUTINE Name(LoadNew) Access(*PRIVATE)
      //
      rtn.Line( 117 );
      {

         //
         // #InitializeNewData.Execute Alldataitems(#AllDataItems)
         //
         rtn.Line( 122 );
         INITIALIZENEWDATA.mthEXECUTE( {  }, { LIST: { "ALLDATAITEMS": list.ALLDATAITEMS } } );

         //
         // GET_ENTRY Number(1) From_List(#AllDataItems)
         //
         rtn.Line( 124 );
         fld.IOdSTS.set( lastIoStatus = list.ALLDATAITEMS.getEntry( 1 ) );

         //
         // SET Com(#Save_Button #Delete_Button #Another_Button) Visible(False)
         //
         rtn.Line( 126 );
         ref.SAVE_BUTTON.setVisible( false );
         ref.DELETE_BUTTON.setVisible( false );
         ref.ANOTHER_BUTTON.setVisible( false );

         //
         // SET Com(#xContactIdentification) ReadOnly(False)
         //
         rtn.Line( 128 );
         ref.XCONTACTIDENTIFICATION.setReadOnly( false );

         //
         // SET Com(#xContactFullName #xContactFullAddress) Visible(False)
         //
         rtn.Line( 129 );
         ref.XCONTACTFULLNAME.setVisible( false );
         ref.XCONTACTFULLADDRESS.setVisible( false );

         //
         // #Save_Button.ComponentTag := SaveNew
         //
         rtn.Line( 130 );
         ref.SAVE_BUTTON.setComponentTag( "SAVENEW" );

         //
         // #DataItemPanel.Enabled := True
         //
         rtn.Line( 131 );
         ref.DATAITEMPANEL.setEnabled( true );

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_CLEARMESSAGESAFTERDELAY.set( CLEARMESSAGESAFTERDELAY.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 136 );
      rtn.end();

      //
      // evtRoutine1 - #InitializeNewData.Failed
      //
      function evtRoutine1( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#InitializeNewData.Failed", 133, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#InitializeNewData.Failed) Handled(#Handled)
         //
         rtn.Line( 133 );
         {

            //
            // #Handled := #AVFRAMEWORKMANAGER.avHandleServerError( #COM_OWNER #ServerModuleResult )
            //
            rtn.Line( 134 );
            HANDLED.set( this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR( this, ref.SERVERMODULERESULT ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 135 );
         rtn.end();
      }
   };

   //
   // mthLOAD - Load
   //
   COM_OWNER.mthLOAD = function( parm_CLEARMESSAGESAFTERDELAY )
   {
      var list = this.LIST.VLFDEM_3, fld = this.FLD.VLFDEM_3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Load", 139 ), mth = rtn;

      //
      // DEFINE_MAP For(*Output) Class(#prim_Boln) Name(#ClearMessagesAfterDelay)
      //
      var CLEARMESSAGESAFTERDELAY = rtn.createParameter( "CLEARMESSAGESAFTERDELAY", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#VLFDEMO_XCONTACTS_SCRUD_ServerModule.GetData) Name(#GetData)
      //
      var GETDATA = rtn.createDataRequest( "GETDATA", "VLFDEMO_X", "GETDATA" );

      // -------------------------
      // -- Initialize #GETDATA --
      // -------------------------
      GETDATA.initialize();

      // -------------------------------------
      // -- Add Event Handlers for #GETDATA --
      // -------------------------------------
      GETDATA.addEventHandler( "FAILED", this, evtRoutine2 );

      //
      // MTHROUTINE Name(Load) Access(*PRIVATE)
      //
      rtn.Line( 139 );
      {

         //
         // #xContactIdentification := #Com_Self.avAssociatedInstance.avNKey1
         //
         rtn.Line( 144 );
         ref.XCONTACTIDENTIFICATION.set( this.getAVASSOCIATEDINSTANCE().getAVNKEY1().get() );

         //
         // INZ_LIST Named(#AccessKeys)
         //
         rtn.Line( 145 );
         list.ACCESSKEYS.initList( 1 );

         //
         // #GetData.Execute Accesskeys(#AccessKeys) Alldataitems(#AllDataItems) Servermoduleresult(#ServerModuleResult)
         //
         rtn.Line( 147 );
         GETDATA.mthEXECUTE( { LIST: { "ACCESSKEYS": list.ACCESSKEYS } }, { FLD: { "SERVERMODULERESULT": ref.SERVERMODULERESULT }, LIST: { "ALLDATAITEMS": list.ALLDATAITEMS } } );

         //
         // IF (#ServerModuleResult)
         //
         rtn.Line( 149 );
         if ( Lansa.toBool( ref.SERVERMODULERESULT.get() ) )
         {

            //
            // #ClearMessagesAfterDelay := True
            //
            rtn.Line( 150 );
            CLEARMESSAGESAFTERDELAY.set( true );

            //
            // GET_ENTRY Number(1) From_List(#AllDataItems)
            //
            rtn.Line( 151 );
            fld.IOdSTS.set( lastIoStatus = list.ALLDATAITEMS.getEntry( 1 ) );

            //
            // SET Com(#Save_Button #Another_Button) Visible(False)
            //
            rtn.Line( 152 );
            ref.SAVE_BUTTON.setVisible( false );
            ref.ANOTHER_BUTTON.setVisible( false );

            //
            // #Delete_Button.Visible := True
            //
            rtn.Line( 153 );
            ref.DELETE_BUTTON.setVisible( true );

            //
            // #DataItemPanel.Enabled := True
            //
            rtn.Line( 154 );
            ref.DATAITEMPANEL.setEnabled( true );

            //
            // SET Com(#xContactFullName #xContactFullAddress) Visible(True)
            //
            rtn.Line( 155 );
            ref.XCONTACTFULLNAME.setVisible( true );
            ref.XCONTACTFULLADDRESS.setVisible( true );

            //
            // #Save_Button.ComponentTag := Save
            //
            rtn.Line( 156 );
            ref.SAVE_BUTTON.setComponentTag( "SAVE" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // CHANGE Field(#AllDataItems) To(*null)
            //
            rtn.Line( 158 );
            ref.XCONTACTIDENTIFICATION.set( 0 );
            ref.XCONTACTTITLE.set( "" );
            ref.XCONTACTLASTNAME.set( "" );
            ref.XCONTACTFIRSTNAME.set( "" );
            ref.XCONTACTGENDER.set( "" );
            ref.XCONTACTEMAILADDRESS.set( "" );
            ref.XCONTACTMOBILEPHONE.set( "" );
            ref.XCONTACTHOMEPHONE.set( "" );
            ref.XCONTACTFAXNUMBER.set( "" );
            ref.XCONTACTBUSINESSPHONE.set( "" );
            ref.XCONTACTNOTES.set( "" );
            ref.XCONTACTPHOTO.set( "" );
            ref.XCONTACTINTERESTS.set( "" );
            ref.XCONTACTBIRTHDATE.set( const1 );
            ref.XCONTACTHOMETOWN.set( "" );
            ref.XCONTACTCITY.set( "" );
            ref.XCONTACTJOBTITLE.set( "" );
            ref.XCONTACTCOMPANY.set( "" );
            ref.XCONTACTADDRESS.set( "" );
            ref.XCONTACTCOMPANYSITE.set( "" );
            ref.XCONTACTFULLNAME.set( "" );
            ref.XCONTACTFULLADDRESS.set( "" );

            //
            // SET Com(#Save_Button #Delete_Button #Another_Button) Visible(False)
            //
            rtn.Line( 159 );
            ref.SAVE_BUTTON.setVisible( false );
            ref.DELETE_BUTTON.setVisible( false );
            ref.ANOTHER_BUTTON.setVisible( false );

            //
            // #DataItemPanel.Enabled := False
            //
            rtn.Line( 160 );
            ref.DATAITEMPANEL.setEnabled( false );

            //
            // SET Com(#xContactFullName #xContactFullAddress) Visible(False)
            //
            rtn.Line( 161 );
            ref.XCONTACTFULLNAME.setVisible( false );
            ref.XCONTACTFULLADDRESS.setVisible( false );

         //
         // ENDIF 
         //
         }

         //
         // SET Com(#xContactIdentification) ReadOnly(True)
         //
         rtn.Line( 164 );
         ref.XCONTACTIDENTIFICATION.setReadOnly( true );

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_CLEARMESSAGESAFTERDELAY.set( CLEARMESSAGESAFTERDELAY.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 169 );
      rtn.end();

      //
      // evtRoutine2 - #GetData.Failed
      //
      function evtRoutine2( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetData.Failed", 166, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#GetData.Failed) Handled(#Handled)
         //
         rtn.Line( 166 );
         {

            //
            // #Handled := #AVFRAMEWORKMANAGER.avHandleServerError( #COM_OWNER #ServerModuleResult )
            //
            rtn.Line( 167 );
            HANDLED.set( this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR( this, ref.SERVERMODULERESULT ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 168 );
         rtn.end();
      }
   };

   //
   // mthAVHANDLETRACKEDCONTROLCHANGE - avHandleTrackedControlChange
   //
   COM_OWNER.mthAVHANDLETRACKEDCONTROLCHANGE = function( parm_CONTROL, parm_CONTROLMD, parm_CONTROLMDDT )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "avHandleTrackedControlChange", 172 );

      //
      // DEFINE_MAP Class(#PRIM_EVP) Name(Control) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var CONTROL = rtn.createDynamicParameter( "CONTROL" );

      //
      // DEFINE_MAP Class(#PRIM_MD.Edit) Name(ControlMD) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var CONTROLMD = rtn.createDynamicParameter( "CONTROLMD" );

      //
      // DEFINE_MAP Class(#PRIM_MD.DateTime) Name(ControlMDDT) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var CONTROLMDDT = rtn.createDynamicParameter( "CONTROLMDDT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CONTROL = parm_CONTROL;
      CONTROLMD = parm_CONTROLMD;
      CONTROLMDDT = parm_CONTROLMDDT;

      //
      // MTHROUTINE Name(avHandleTrackedControlChange) Options(*REDEFINE)
      //
      rtn.Line( 172 );
      {

         //
         // #Save_Button.Visible := #DataItemPanel.Enabled
         //
         rtn.Line( 173 );
         ref.SAVE_BUTTON.setVisible( ref.DATAITEMPANEL.getEnabled() );

         //
         // IF (#ControlMD *IsNot *null)
         //
         rtn.Line( 174 );
         if ( ( CONTROLMD != null ) )
         {

            //
            // #ControlMD.ClearError
            //
            rtn.Line( 175 );
            CONTROLMD.mthCLEARERROR();

         //
         // ENDIF 
         //
         }

         //
         // IF (#ControlMDDT *IsNot *null)
         //
         rtn.Line( 177 );
         if ( ( CONTROLMDDT != null ) )
         {

            //
            // #ControlMDDT.ClearError
            //
            rtn.Line( 178 );
            CONTROLMDDT.mthCLEARERROR();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 180 );
      rtn.end();
   };

   //
   // mthAVVALIDATETRACKEDMDCONTROL - avValidateTrackedMDControl
   //
   COM_OWNER.mthAVVALIDATETRACKEDMDCONTROL = function( parm_CONTROLMD_EDIT, parm_CONTROLMD_DATETIME, parm_FOROPERATION, parm_ERRORCOUNT )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "avValidateTrackedMDControl", 183 );

      //
      // DEFINE_MAP Class(#PRIM_MD.EditField) Name(ControlMD_Edit) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var CONTROLMD_EDIT = rtn.createDynamicParameter( "CONTROLMD_EDIT" );

      //
      // DEFINE_MAP Class(#PRIM_MD.DateTimeField) Name(ControlMD_DateTime) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var CONTROLMD_DATETIME = rtn.createDynamicParameter( "CONTROLMD_DATETIME" );

      //
      // DEFINE_MAP Class(#PRIM_ALPH) Name(ForOperation) For(*INPUT)
      //
      var FOROPERATION = rtn.createParameter( "FOROPERATION", "PRIM_ALPH" );

      //
      // DEFINE_MAP Class(#STD_INT.DataClass) Name(ErrorCount) For(*INPUT)
      //
      var ERRORCOUNT = rtn.createFieldParameter( "ERRORCOUNT", Fields.STD_INT.DataClass );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(IsValid) For(*RESULT)
      //
      var ISVALID = rtn.createParameter( "ISVALID", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CONTROLMD_EDIT = parm_CONTROLMD_EDIT;
      CONTROLMD_DATETIME = parm_CONTROLMD_DATETIME;
      FOROPERATION.set( parm_FOROPERATION );
      ERRORCOUNT.set( parm_ERRORCOUNT );

      //
      // MTHROUTINE Name(avValidateTrackedMDControl) Options(*REDEFINE)
      //
      rtn.Line( 183 );
      {

         //
         // #IsValid := True
         //
         rtn.Line( 184 );
         ISVALID.set( true );

         //
         // IF (#ControlMD_Edit *IsNot *null)
         //
         rtn.Line( 185 );
         if ( ( CONTROLMD_EDIT != null ) )
         {

            //
            // #IsValid := #ControlMD_Edit.Validate( #ForOperation #xEmployee )
            //
            rtn.Line( 186 );
            ISVALID.set( CONTROLMD_EDIT.mthVALIDATE( FOROPERATION.get(), Files.XEMPLOYEE ) );

            //
            // IF ((#IsValid.Not) And (#ErrorCount = 0))
            //
            rtn.Line( 187 );
            if ( Lansa.and( Lansa.Boolean.Not( ISVALID.get() ), Lansa.Number.eq( ERRORCOUNT.get(), 0 ) ) )
            {

               //
               // #DataItemPanel.VerticalScrollTo Control(#ControlMD_Edit) Scrollposition(Visible)
               //
               rtn.Line( 188 );
               ref.DATAITEMPANEL.mthVERTICALSCROLLTO( CONTROLMD_EDIT, "VISIBLE" );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // IF (#ControlMD_DateTime *IsNot *null)
         //
         rtn.Line( 191 );
         if ( ( CONTROLMD_DATETIME != null ) )
         {

            //
            // #IsValid := #ControlMD_DateTime.Validate( #ForOperation #xEmployee )
            //
            rtn.Line( 192 );
            ISVALID.set( CONTROLMD_DATETIME.mthVALIDATE( FOROPERATION.get(), Files.XEMPLOYEE ) );

            //
            // IF ((#IsValid.Not) And (#ErrorCount = 0))
            //
            rtn.Line( 193 );
            if ( Lansa.and( Lansa.Boolean.Not( ISVALID.get() ), Lansa.Number.eq( ERRORCOUNT.get(), 0 ) ) )
            {

               //
               // #DataItemPanel.VerticalScrollTo Control(#ControlMD_DateTime) Scrollposition(Visible)
               //
               rtn.Line( 194 );
               ref.DATAITEMPANEL.mthVERTICALSCROLLTO( CONTROLMD_DATETIME, "VISIBLE" );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 197 );
      return rtn.retVal( ISVALID.get() );
   };

   //
   // mthCHECKCLIENTSIDEVALIDATION - CheckClientSideValidation
   //
   COM_OWNER.mthCHECKCLIENTSIDEVALIDATION = function( parm_FOROPERATION )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "CheckClientSideValidation", 200 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_ALPH) Name(#ForOperation)
      //
      var FOROPERATION = rtn.createParameter( "FOROPERATION", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*RESULT) Class(#Prim_Boln) Name(#AllValid)
      //
      var ALLVALID = rtn.createParameter( "ALLVALID", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      FOROPERATION.set( parm_FOROPERATION );

      //
      // MTHROUTINE Name(CheckClientSideValidation) Access(*PRIVATE)
      //
      rtn.Line( 200 );
      {

         //
         // #COM_OWNER.avValidateAllTrackedMDControls Foroperation(#ForOperation) Allvalid(#AllValid)
         //
         rtn.Line( 203 );
         ALLVALID.set( this.mthAVVALIDATEALLTRACKEDMDCONTROLS( FOROPERATION.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 205 );
      return rtn.retVal( ALLVALID.get() );
   };

   //
   // mthSAVE - Save
   //
   COM_OWNER.mthSAVE = function( parm_CLEARMESSAGESAFTERDELAY )
   {
      var list = this.LIST.VLFDEM_3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Save", 208 ), mth = rtn;

      //
      // DEFINE_MAP For(*Output) Class(#prim_Boln) Name(#ClearMessagesAfterDelay)
      //
      var CLEARMESSAGESAFTERDELAY = rtn.createParameter( "CLEARMESSAGESAFTERDELAY", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#VLFDEMO_XCONTACTS_SCRUD_ServerModule.PutData) Name(#PutData)
      //
      var PUTDATA = rtn.createDataRequest( "PUTDATA", "VLFDEMO_X", "PUTDATA" );

      // -------------------------
      // -- Initialize #PUTDATA --
      // -------------------------
      PUTDATA.initialize();

      // -------------------------------------
      // -- Add Event Handlers for #PUTDATA --
      // -------------------------------------
      PUTDATA.addEventHandler( "FAILED", this, evtRoutine3 );

      //
      // MTHROUTINE Name(Save) Access(*PRIVATE)
      //
      rtn.Line( 208 );
      {

         //
         // INZ_LIST Named(#EditableDataItems)
         //
         rtn.Line( 213 );
         list.EDITABLEDATAITEMS.initList( 1 );

         //
         // #PutData.Execute Editabledataitems(#EditableDataItems) Servermoduleresult(#ServerModuleResult)
         //
         rtn.Line( 214 );
         PUTDATA.mthEXECUTE( { LIST: { "EDITABLEDATAITEMS": list.EDITABLEDATAITEMS } }, { FLD: { "SERVERMODULERESULT": ref.SERVERMODULERESULT } } );

         //
         // IF (#ServerModuleResult)
         //
         rtn.Line( 215 );
         if ( Lansa.toBool( ref.SERVERMODULERESULT.get() ) )
         {

            //
            // #ClearMessagesAfterDelay := True
            //
            rtn.Line( 216 );
            CLEARMESSAGESAFTERDELAY.set( true );

            //
            // #AVLISTMANAGER.AddtoList VisualID1(#xContactFirstName) VisualID2(#xContactLastName) NKey1(#xContactIdentification) AColumn3(#xContactFullName) AColumn1(#xContactHomePhone) AColumn4(#xContactCompany) AColumn2(#xContactBusinessPhone)
            //
            rtn.Line( 217 );
            this.REF.AVLISTMANAGER.mthADDTOLIST( ref.XCONTACTFIRSTNAME.get(), ref.XCONTACTLASTNAME.get(), undefined, undefined, undefined, undefined, undefined, ref.XCONTACTIDENTIFICATION.get(), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ref.XCONTACTHOMEPHONE.get(), ref.XCONTACTBUSINESSPHONE.get(), ref.XCONTACTFULLNAME.get(), ref.XCONTACTCOMPANY.get(), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined );

            //
            // SET Com(#Save_Button) Visible(False)
            //
            rtn.Line( 218 );
            ref.SAVE_BUTTON.setVisible( false );

         //
         // ENDIF 
         //
         }

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_CLEARMESSAGESAFTERDELAY.set( CLEARMESSAGESAFTERDELAY.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 224 );
      rtn.end();

      //
      // evtRoutine3 - #PutData.Failed
      //
      function evtRoutine3( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PutData.Failed", 221, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#PutData.Failed) Handled(#Handled)
         //
         rtn.Line( 221 );
         {

            //
            // #Handled := #AVFRAMEWORKMANAGER.avHandleServerError( #COM_OWNER #ServerModuleResult )
            //
            rtn.Line( 222 );
            HANDLED.set( this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR( this, ref.SERVERMODULERESULT ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 223 );
         rtn.end();
      }
   };

   //
   // mthSAVENEW - SaveNew
   //
   COM_OWNER.mthSAVENEW = function( parm_CLEARMESSAGESAFTERDELAY )
   {
      var list = this.LIST.VLFDEM_3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SaveNew", 227 ), mth = rtn;

      //
      // DEFINE_MAP For(*Output) Class(#prim_Boln) Name(#ClearMessagesAfterDelay)
      //
      var CLEARMESSAGESAFTERDELAY = rtn.createParameter( "CLEARMESSAGESAFTERDELAY", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#VLFDEMO_XCONTACTS_SCRUD_ServerModule.PutData) Name(#PutData)
      //
      var PUTDATA = rtn.createDataRequest( "PUTDATA", "VLFDEMO_X", "PUTDATA" );

      // -------------------------
      // -- Initialize #PUTDATA --
      // -------------------------
      PUTDATA.initialize();

      // -------------------------------------
      // -- Add Event Handlers for #PUTDATA --
      // -------------------------------------
      PUTDATA.addEventHandler( "FAILED", this, evtRoutine4 );

      //
      // MTHROUTINE Name(SaveNew) Access(*PRIVATE)
      //
      rtn.Line( 227 );
      {

         //
         // INZ_LIST Named(#EditableDataItems)
         //
         rtn.Line( 232 );
         list.EDITABLEDATAITEMS.initList( 1 );

         //
         // #PutData.Execute Editabledataitems(#EditableDataItems) Servermoduleresult(#ServerModuleResult)
         //
         rtn.Line( 233 );
         PUTDATA.mthEXECUTE( { LIST: { "EDITABLEDATAITEMS": list.EDITABLEDATAITEMS } }, { FLD: { "SERVERMODULERESULT": ref.SERVERMODULERESULT } } );

         //
         // IF (#ServerModuleResult)
         //
         rtn.Line( 234 );
         if ( Lansa.toBool( ref.SERVERMODULERESULT.get() ) )
         {

            //
            // #ClearMessagesAfterDelay := True
            //
            rtn.Line( 235 );
            CLEARMESSAGESAFTERDELAY.set( true );

            //
            // #AVLISTMANAGER.AddtoList VisualID1(#xContactFirstName) VisualID2(#xContactLastName) NKey1(#xContactIdentification) AColumn3(#xContactFullName) AColumn1(#xContactHomePhone) AColumn4(#xContactCompany) AColumn2(#xContactBusinessPhone)
            //
            rtn.Line( 236 );
            this.REF.AVLISTMANAGER.mthADDTOLIST( ref.XCONTACTFIRSTNAME.get(), ref.XCONTACTLASTNAME.get(), undefined, undefined, undefined, undefined, undefined, ref.XCONTACTIDENTIFICATION.get(), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ref.XCONTACTHOMEPHONE.get(), ref.XCONTACTBUSINESSPHONE.get(), ref.XCONTACTFULLNAME.get(), ref.XCONTACTCOMPANY.get(), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined );

            //
            // #Save_Button.Visible := False
            //
            rtn.Line( 237 );
            ref.SAVE_BUTTON.setVisible( false );

            //
            // #Another_Button.Visible := True
            //
            rtn.Line( 238 );
            ref.ANOTHER_BUTTON.setVisible( true );

            //
            // #DataItemPanel.Enabled := False
            //
            rtn.Line( 239 );
            ref.DATAITEMPANEL.setEnabled( false );

         //
         // ENDIF 
         //
         }

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_CLEARMESSAGESAFTERDELAY.set( CLEARMESSAGESAFTERDELAY.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 245 );
      rtn.end();

      //
      // evtRoutine4 - #PutData.Failed
      //
      function evtRoutine4( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#PutData.Failed", 242, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#PutData.Failed) Handled(#Handled)
         //
         rtn.Line( 242 );
         {

            //
            // #Handled := #AVFRAMEWORKMANAGER.avHandleServerError( #COM_OWNER #ServerModuleResult )
            //
            rtn.Line( 243 );
            HANDLED.set( this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR( this, ref.SERVERMODULERESULT ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 244 );
         rtn.end();
      }
   };

   //
   // mthDELETE - Delete
   //
   COM_OWNER.mthDELETE = function( parm_CLEARMESSAGESAFTERDELAY )
   {
      var list = this.LIST.VLFDEM_3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Delete", 248 ), mth = rtn;

      //
      // DEFINE_MAP For(*Output) Class(#prim_Boln) Name(#ClearMessagesAfterDelay)
      //
      var CLEARMESSAGESAFTERDELAY = rtn.createParameter( "CLEARMESSAGESAFTERDELAY", "PRIM_BOLN" );

      //
      // DEFINE_COM Class(#VLFDEMO_XCONTACTS_SCRUD_ServerModule.DeleteData) Name(#DeleteData)
      //
      var DELETEDATA = rtn.createDataRequest( "DELETEDATA", "VLFDEMO_X", "DELETEDATA" );

      // ----------------------------
      // -- Initialize #DELETEDATA --
      // ----------------------------
      DELETEDATA.initialize();

      // ----------------------------------------
      // -- Add Event Handlers for #DELETEDATA --
      // ----------------------------------------
      DELETEDATA.addEventHandler( "FAILED", this, evtRoutine5 );

      //
      // MTHROUTINE Name(Delete) Access(*PRIVATE)
      //
      rtn.Line( 248 );
      {

         //
         // #xContactIdentification := #Com_Self.avAssociatedInstance.avNKey1
         //
         rtn.Line( 253 );
         ref.XCONTACTIDENTIFICATION.set( this.getAVASSOCIATEDINSTANCE().getAVNKEY1().get() );

         //
         // INZ_LIST Named(#AccessKeys)
         //
         rtn.Line( 254 );
         list.ACCESSKEYS.initList( 1 );

         //
         // #DeleteData.Execute Accesskeys(#AccessKeys) Servermoduleresult(#ServerModuleResult)
         //
         rtn.Line( 256 );
         DELETEDATA.mthEXECUTE( { LIST: { "ACCESSKEYS": list.ACCESSKEYS } }, { FLD: { "SERVERMODULERESULT": ref.SERVERMODULERESULT } } );

         //
         // IF (#ServerModuleResult)
         //
         rtn.Line( 258 );
         if ( Lansa.toBool( ref.SERVERMODULERESULT.get() ) )
         {

            //
            // #ClearMessagesAfterDelay := True
            //
            rtn.Line( 259 );
            CLEARMESSAGESAFTERDELAY.set( true );

            //
            // #AVLISTMANAGER.RemovefromList Dataitem(#Com_Self.avAssociatedInstance)
            //
            rtn.Line( 260 );
            this.REF.AVLISTMANAGER.mthREMOVEFROMLIST( undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, this.getAVASSOCIATEDINSTANCE() );

            //
            // SET Com(#Save_Button #Delete_Button) Visible(False)
            //
            rtn.Line( 261 );
            ref.SAVE_BUTTON.setVisible( false );
            ref.DELETE_BUTTON.setVisible( false );

            //
            // #DataItemPanel.Enabled := False
            //
            rtn.Line( 262 );
            ref.DATAITEMPANEL.setEnabled( false );

         //
         // ENDIF 
         //
         }

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_CLEARMESSAGESAFTERDELAY.set( CLEARMESSAGESAFTERDELAY.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 268 );
      rtn.end();

      //
      // evtRoutine5 - #DeleteData.Failed
      //
      function evtRoutine5( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DeleteData.Failed", 265, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#DeleteData.Failed) Handled(#Handled)
         //
         rtn.Line( 265 );
         {

            //
            // #Handled := #AVFRAMEWORKMANAGER.avHandleServerError( #COM_OWNER #ServerModuleResult )
            //
            rtn.Line( 266 );
            HANDLED.set( this.REF.AVFRAMEWORKMANAGER.mthAVHANDLESERVERERROR( this, ref.SERVERMODULERESULT ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 267 );
         rtn.end();
      }
   };

   //
   // evtRoutine6 - #Save_Button.Click
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Save_Button.Click", 271 );

      //
      // DEFINE_COM #Prim_Boln #ClientSideValid
      //
      var CLIENTSIDEVALID = rtn.createReference( "CLIENTSIDEVALID", "PRIM_BOLN" );

      // ---------------------------------
      // -- Initialize #CLIENTSIDEVALID --
      // ---------------------------------
      CLIENTSIDEVALID.initialize();

      //
      // EVTROUTINE Handling(#Save_Button.Click)
      //
      rtn.Line( 271 );
      {

         //
         // IF (#Save_Button.ComponentTag = Save)
         //
         rtn.Line( 273 );
         if ( Lansa.String.eq( ref.SAVE_BUTTON.getComponentTag(), "SAVE" ) )
         {

            //
            // #ClientSideValid := #COM_OWNER.CheckClientSideValidation( Update )
            //
            rtn.Line( 274 );
            CLIENTSIDEVALID.set( COM_OWNER.mthCHECKCLIENTSIDEVALIDATION.call( this, "UPDATE" ) );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #ClientSideValid := #COM_OWNER.CheckClientSideValidation( Insert )
            //
            rtn.Line( 276 );
            CLIENTSIDEVALID.set( COM_OWNER.mthCHECKCLIENTSIDEVALIDATION.call( this, "INSERT" ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#ClientSideValid)
         //
         rtn.Line( 278 );
         if ( Lansa.toBool( CLIENTSIDEVALID.get() ) )
         {

            //
            // #COM_OWNER.avQueueAsyncOperation Operationid(#Save_Button.ComponentTag) Busystatetext(*MTXTUF_Saving)
            //
            rtn.Line( 279 );
            this.mthAVQUEUEASYNCOPERATION( ref.SAVE_BUTTON.getComponentTag(), undefined, undefined, undefined, undefined, mtxtUF_SAVING, undefined, undefined, undefined, undefined, undefined );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 281 );
      rtn.end();
   };

   //
   // evtRoutine7 - #Delete_Button.Click
   //
   function evtRoutine7( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Delete_Button.Click", 284 );

      //
      // EVTROUTINE Handling(#Delete_Button.Click)
      //
      rtn.Line( 284 );
      {

         //
         // IF (#COM_OWNER.CheckClientSideValidation( Delete ))
         //
         rtn.Line( 285 );
         if ( COM_OWNER.mthCHECKCLIENTSIDEVALIDATION.call( this, "DELETE" ) )
         {

            //
            // #COM_OWNER.avQueueAsyncOperation Operationid(Delete) Busystatetext(*MTXTUF_Delete)
            //
            rtn.Line( 286 );
            this.mthAVQUEUEASYNCOPERATION( "DELETE", undefined, undefined, undefined, undefined, mtxtUF_DELETE, undefined, undefined, undefined, undefined, undefined );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 288 );
      rtn.end();
   };

   //
   // evtRoutine8 - #Another_Button.Click
   //
   function evtRoutine8( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Another_Button.Click", 291 );

      //
      // EVTROUTINE Handling(#Another_Button.Click)
      //
      rtn.Line( 291 );
      {

         //
         // #COM_OWNER.avQueueAsyncOperation Operationid(LoadNew) Busystatetext(*MTXTUF_Loading)
         //
         rtn.Line( 292 );
         this.mthAVQUEUEASYNCOPERATION( "LOADNEW", undefined, undefined, undefined, undefined, mtxtUF_LOADING, undefined, undefined, undefined, undefined, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 293 );
      rtn.end();
   };

   //
   // mthUQUERYCANCLOSE - uQueryCanClose
   //
   COM_OWNER.mthUQUERYCANCLOSE = function( parm_CANBECANCELLED, parm_TIMEOUTINPROGRESS )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uQueryCanClose", 297 );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(CanBeCancelled) For(*INPUT)
      //
      var CANBECANCELLED = rtn.createParameter( "CANBECANCELLED", "PRIM_BOLN" );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(Allow) For(*RESULT)
      //
      var ALLOW = rtn.createParameter( "ALLOW", "PRIM_BOLN" );

      //
      // DEFINE_MAP Class(#PRIM_BOLN) Name(TimeOutinProgress) For(*INPUT)
      //
      var TIMEOUTINPROGRESS = rtn.createParameter( "TIMEOUTINPROGRESS", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CANBECANCELLED.set( parm_CANBECANCELLED );
      TIMEOUTINPROGRESS.set( parm_TIMEOUTINPROGRESS );

      //
      // MTHROUTINE Name(uQueryCanClose) Options(*REDEFINE)
      //
      rtn.Line( 297 );
      {

         //
         // #COM_OWNER.CheckForUnsavedChanges Timeoutinprogress(#TimeOutinProgress) Allowtoproceed(#Allow)
         //
         rtn.Line( 298 );
         ALLOW.set( this.mthCHECKFORUNSAVEDCHANGES( TIMEOUTINPROGRESS.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 299 );
      return rtn.retVal( ALLOW.get() );
   };

   //
   // mthCHECKFORUNSAVEDCHANGES - CheckForUnsavedChanges
   //
   COM_OWNER.mthCHECKFORUNSAVEDCHANGES = function( parm_TIMEOUTINPROGRESS )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "CheckForUnsavedChanges", 303 );

      //
      // DEFINE_MAP For(*INPUT) Class(#prim_boln) Name(#TimeOutinProgress)
      //
      var TIMEOUTINPROGRESS = rtn.createParameter( "TIMEOUTINPROGRESS", "PRIM_BOLN" );

      //
      // DEFINE_MAP For(*result) Class(#prim_boln) Name(#AllowtoProceed)
      //
      var ALLOWTOPROCEED = rtn.createParameter( "ALLOWTOPROCEED", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TIMEOUTINPROGRESS.set( parm_TIMEOUTINPROGRESS );

      //
      // MTHROUTINE Name(CheckForUnsavedChanges)
      //
      rtn.Line( 303 );
      {

         //
         // IF (#Save_Button.Visible And #TimeOutinProgress.Not)
         //
         rtn.Line( 307 );
         if ( Lansa.and( ref.SAVE_BUTTON.getVisible(), Lansa.Boolean.Not( TIMEOUTINPROGRESS.get() ) ) )
         {

            //
            // #AllowtoProceed := (#SYS_WEB.Confirm( (*MTXTUF_MSG_0009.Substitute((#xContactIdentification.AsDisplayString)))) = Cancel)
            //
            rtn.Line( 308 );
            ALLOWTOPROCEED.set( Lansa.String.eq( Lansa.WEB().mthCONFIRM( Lansa.String.Substitute( mtxtUF_MSG_0009, Lansa.Number.AsDisplayString( ref.XCONTACTIDENTIFICATION.get(), 4, 0 ) ) ), "CANCEL" ) );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AllowtoProceed := True /* Default */
            //
            rtn.Line( 310 );
            ALLOWTOPROCEED.set( true );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 312 );
      return rtn.retVal( ALLOWTOPROCEED.get() );
   };

   // ----------------------
   // -- Validation rules --
   // ----------------------

   //
   // XCONTACTT - Accept blank
   //
   function rule1( XCONTACTT )
   {
      var value = XCONTACTT.get();

      return (

         //
         // *BLANK
         //
         Lansa.String.eq( value, "" )

      );
   };

   //
   // XCONTACTT - List Check Mr/Mrs/Miss/Ms/Dr
   //
   function rule2( XCONTACTT )
   {
      var value = XCONTACTT.get();

      return (

         //
         // 'Mr'
         //
         Lansa.String.eq( value, "Mr" )

         //
         // 'Mrs'
         //
         || Lansa.String.eq( value, "Mrs" )

         //
         // 'Miss'
         //
         || Lansa.String.eq( value, "Miss" )

         //
         // 'Ms'
         //
         || Lansa.String.eq( value, "Ms" )

         //
         // 'Dr'
         //
         || Lansa.String.eq( value, "Dr" )

      );
   };

   //
   // XCONLAME - Last Name cannot be Blank
   //
   function rule3( XCONLAME )
   {
      //
      // #xContactLastName.Cursize > 0
      //
      return ( Lansa.Number.gt( Lansa.String.CurSize( XCONLAME.get() ), 0 ) );
   };

   //
   // XCONFNAME - First Name cannot be Blank
   //
   function rule4( XCONFNAME )
   {
      //
      // #xContactFirstName.Cursize > 0
      //
      return ( Lansa.Number.gt( Lansa.String.CurSize( XCONFNAME.get() ), 0 ) );
   };

   //
   // XCONTACTG - Check Male/Female/Undisclosed
   //
   function rule5( XCONTACTG )
   {
      var value = XCONTACTG.get();

      return (

         //
         // 'Male'
         //
         Lansa.String.eq( value, "Male" )

         //
         // 'Female'
         //
         || Lansa.String.eq( value, "Female" )

         //
         // 'Undisclosed'
         //
         || Lansa.String.eq( value, "Undisclosed" )

      );
   };

   //
   // XCONEMAIL - Check Valid Email Address
   //
   function rule6( XCONEMAIL )
   {
      //
      // (#xContactEmailAddress.Trim.CurChars = 0) *OR ( #xContactEmailAddress.IsValidEmail)
      //
      return ( Lansa.or( Lansa.Number.eq( Lansa.String.CurChars( Lansa.String.Trim( XCONEMAIL.get() ) ), 0 ), Lansa.String.IsValidEmail( XCONEMAIL.get() ) ) );
   };

   //
   // XEMPLOYID - Employee Id must be between 1
   //
   function rule7( XEMPLOYID )
   {
      var value = XEMPLOYID.get();

      return (

         //
         // '000001' - '999999'
         //
         Lansa.String.ge( value, "000001" ) && Lansa.String.le( value, "999999" )

      );
   };

   //
   // XSURNAME - Surname must be entered
   //
   function rule8( XSURNAME )
   {
      //
      // #xEmployeeSurname *ne *blanks
      //
      return ( Lansa.String.ne( XSURNAME.get(), "" ) );
   };

   //
   // XGIVENAME - Given Name(s) must be entered
   //
   function rule9( XGIVENAME )
   {
      //
      // #xEmployeeGivenNames *ne *blanks
      //
      return ( Lansa.String.ne( XGIVENAME.get(), "" ) );
   };

   //
   // XGENDER - Male, Female or Nodisclose
   //
   function rule10( XGENDER )
   {
      var value = XGENDER.get();

      return (

         //
         // 'Male'
         //
         Lansa.String.eq( value, "Male" )

         //
         // 'Female'
         //
         || Lansa.String.eq( value, "Female" )

         //
         // 'NoDisclose'
         //
         || Lansa.String.eq( value, "NoDisclose" )

      );
   };

   //
   // XSTREET - Street must be entered
   //
   function rule11( XSTREET )
   {
      //
      // #xEmployeeStreet *ne *blanks
      //
      return ( Lansa.String.ne( XSTREET.get(), "" ) );
   };

   //
   // XCITY - City must be entered
   //
   function rule12( XCITY )
   {
      //
      // #xEmployeeCity *ne *blanks
      //
      return ( Lansa.String.ne( XCITY.get(), "" ) );
   };

   //
   // XPOSTCODE - Must be in range 1000-99999
   //
   function rule13( XPOSTCODE )
   {
      var value = XPOSTCODE.get();

      return (

         //
         // '01000' - '99999'
         //
         Lansa.String.ge( value, "01000" ) && Lansa.String.le( value, "99999" )

      );
   };

   //
   // XSTARTDTE - StartDate today or later
   //
   function rule14( XSTARTDTE )
   {
      //
      // #xEmployeeStartDate *LT #xEmployeeStartDate.Now
      //
      return ( Lansa.DateTime.lt( XSTARTDTE.get(), Lansa.Date.Now( XSTARTDTE.get() ) ) );
   };

   //
   // XTERMDATE - Check value before validate
   //
   function rule15( XTERMDATE )
   {
      //
      // #xEmployeeTerminationDate *is *sqlnull
      //
      return ( ( XTERMDATE.get() === Lansa.SqlNull ) );
   };

   //
   // XTERMDATE - Termination date after Start
   //
   function rule16( XTERMDATE, context )
   {
      var XSTARTDTE = context.fld( "XSTARTDTE" );

      if ( XSTARTDTE === undefined )
      {
         return undefined;
      }

      //
      // #xEmployeeTerminationDate *gt #xEmployeeStartDate
      //
      return ( Lansa.DateTime.gt( XTERMDATE.get(), XSTARTDTE.get() ) );
   };

   // ---------------------------
   // -- XCONID Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONID );
      };

      Lansa.createFieldClass( { co: Fields.XCONID.DataClass, an: "PRIM_FLD", fn: "XCONID" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONID.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONID.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONID.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONID", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONTACTT Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONTACTT.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONTACTT );
      };

      Lansa.createFieldClass( { co: Fields.XCONTACTT.DataClass, an: "PRIM_FLD", fn: "XCONTACTT" } );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.XCONTACTT.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_1) Value('Mr') Caption('Mr') Parent(#Picklist)
         //
         var PKIT_1 = this.createReference( "PKIT_1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_2) Value('Mrs') Caption('Mrs') Parent(#Picklist)
         //
         var PKIT_2 = this.createReference( "PKIT_2", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_3) Value('Miss') Caption('Miss') Parent(#Picklist)
         //
         var PKIT_3 = this.createReference( "PKIT_3", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_4) Value('Ms') Caption('Ms') Parent(#Picklist)
         //
         var PKIT_4 = this.createReference( "PKIT_4", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_5) Value('Dr') Caption('Dr') Parent(#Picklist)
         //
         var PKIT_5 = this.createReference( "PKIT_5", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT1) Parent(#Picklist) Caption(' ') Value(' ') Default(True)
         //
         var PKIT1 = this.createReference( "PKIT1", "PRIM_PKIT" );

         // ------------------------
         // -- Initialize #PKIT_1 --
         // ------------------------
         PKIT_1.setValue( "Mr" );
         PKIT_1.setCaption( "Mr" );
         PKIT_1.setParent( this );
         PKIT_1.initialize();

         // ------------------------
         // -- Initialize #PKIT_2 --
         // ------------------------
         PKIT_2.setValue( "Mrs" );
         PKIT_2.setCaption( "Mrs" );
         PKIT_2.setParent( this );
         PKIT_2.initialize();

         // ------------------------
         // -- Initialize #PKIT_3 --
         // ------------------------
         PKIT_3.setValue( "Miss" );
         PKIT_3.setCaption( "Miss" );
         PKIT_3.setParent( this );
         PKIT_3.initialize();

         // ------------------------
         // -- Initialize #PKIT_4 --
         // ------------------------
         PKIT_4.setValue( "Ms" );
         PKIT_4.setCaption( "Ms" );
         PKIT_4.setParent( this );
         PKIT_4.initialize();

         // ------------------------
         // -- Initialize #PKIT_5 --
         // ------------------------
         PKIT_5.setValue( "Dr" );
         PKIT_5.setCaption( "Dr" );
         PKIT_5.setParent( this );
         PKIT_5.initialize();

         // -----------------------
         // -- Initialize #PKIT1 --
         // -----------------------
         PKIT1.setParent( this );
         PKIT1.setCaption( " " );
         PKIT1.setValue( " " );
         PKIT1.setDefault( true );
         PKIT1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "SHOWVALUE" );
      };

      Lansa.createFieldClass( { co: Fields.XCONTACTT.pl, an: "PRIM_PKLT", fn: "XCONTACTT", cn: "Picklist" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONTACTT.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONTACTT.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONTACTT.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONTACTT", cn: "EditField" } );
   }

   // -----------------------------
   // -- XCONLAME Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONLAME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONLAME );
      };

      Lansa.createFieldClass( { co: Fields.XCONLAME.DataClass, an: "PRIM_FLD", fn: "XCONLAME" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONLAME.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONLAME.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONLAME.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONLAME", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONFNAME Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONFNAME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONFNAME );
      };

      Lansa.createFieldClass( { co: Fields.XCONFNAME.DataClass, an: "PRIM_FLD", fn: "XCONFNAME" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONFNAME.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONFNAME.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONFNAME.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONFNAME", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONTACTG Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONTACTG.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONTACTG );
      };

      Lansa.createFieldClass( { co: Fields.XCONTACTG.DataClass, an: "PRIM_FLD", fn: "XCONTACTG" } );

      // --------------------
      // -- GENDERPICKLIST --
      // --------------------
      Fields.XCONTACTG.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#Male) Caption('Male') Parent(#GenderPicklist) Value('Male')
         //
         var MALE = this.createReference( "MALE", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#Female) Caption('Female') Parent(#GenderPicklist) Value('Female')
         //
         var FEMALE = this.createReference( "FEMALE", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#Undisclosed) Parent(#GenderPicklist) Value('Undisclosed') Caption('Undisclosed') Default(True)
         //
         var UNDISCLOSED = this.createReference( "UNDISCLOSED", "PRIM_PKIT" );

         // ----------------------
         // -- Initialize #MALE --
         // ----------------------
         MALE.setCaption( "Male" );
         MALE.setParent( this );
         MALE.setValue( "Male" );
         MALE.initialize();

         // ------------------------
         // -- Initialize #FEMALE --
         // ------------------------
         FEMALE.setCaption( "Female" );
         FEMALE.setParent( this );
         FEMALE.setValue( "Female" );
         FEMALE.initialize();

         // -----------------------------
         // -- Initialize #UNDISCLOSED --
         // -----------------------------
         UNDISCLOSED.setParent( this );
         UNDISCLOSED.setValue( "Undisclosed" );
         UNDISCLOSED.setCaption( "Undisclosed" );
         UNDISCLOSED.setDefault( true );
         UNDISCLOSED.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "SHOWVALUE" );
      };

      Lansa.createFieldClass( { co: Fields.XCONTACTG.pl, an: "PRIM_PKLT", fn: "XCONTACTG", cn: "GenderPicklist" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONTACTG.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONTACTG.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONTACTG.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONTACTG", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONEMAIL Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONEMAIL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONEMAIL );
      };

      Lansa.createFieldClass( { co: Fields.XCONEMAIL.DataClass, an: "PRIM_FLD", fn: "XCONEMAIL" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONEMAIL.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONEMAIL.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONEMAIL.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONEMAIL", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONPHMOB Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONPHMOB.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONPHMOB );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHMOB.DataClass, an: "PRIM_FLD", fn: "XCONPHMOB" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONPHMOB.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONPHMOB.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHMOB.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONPHMOB", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONPHHME Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONPHHME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONPHHME );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHHME.DataClass, an: "PRIM_FLD", fn: "XCONPHHME" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONPHHME.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONPHHME.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHHME.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONPHHME", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONPHFAX Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONPHFAX.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONPHFAX );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHFAX.DataClass, an: "PRIM_FLD", fn: "XCONPHFAX" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONPHFAX.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONPHFAX.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHFAX.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONPHFAX", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONPHBUS Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONPHBUS.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONPHBUS );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHBUS.DataClass, an: "PRIM_FLD", fn: "XCONPHBUS" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONPHBUS.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONPHBUS.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONPHBUS.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONPHBUS", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONNOTES Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONNOTES.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONNOTES );
      };

      Lansa.createFieldClass( { co: Fields.XCONNOTES.DataClass, an: "PRIM_FLD", fn: "XCONNOTES" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONNOTES.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONNOTES.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONNOTES.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONNOTES", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONIMAGE Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONIMAGE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONIMAGE );
      };

      Lansa.createFieldClass( { co: Fields.XCONIMAGE.DataClass, an: "PRIM_FLD", fn: "XCONIMAGE" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONIMAGE.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONIMAGE.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONIMAGE.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONIMAGE", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONINTRS Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONINTRS.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONINTRS );
      };

      Lansa.createFieldClass( { co: Fields.XCONINTRS.DataClass, an: "PRIM_FLD", fn: "XCONINTRS" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONINTRS.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONINTRS.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONINTRS.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONINTRS", cn: "EditField" } );
   }

   // ----------------------------
   // -- XCONDOB Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONDOB.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONDOB );
      };

      Lansa.createFieldClass( { co: Fields.XCONDOB.DataClass, an: "PRIM_FLD", fn: "XCONDOB" } );

      // -------------------
      // -- DATETIMEFIELD --
      // -------------------
      Fields.XCONDOB.DATETIMEFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONDOB.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONDOB.DATETIMEFIELD, an: "PRIM_MD", at: "DateTimeField", fn: "XCONDOB", cn: "DateTimeField" } );
   }

   // ------------------------------
   // -- XCONHMETN Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONHMETN.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONHMETN );
      };

      Lansa.createFieldClass( { co: Fields.XCONHMETN.DataClass, an: "PRIM_FLD", fn: "XCONHMETN" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONHMETN.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONHMETN.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONHMETN.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONHMETN", cn: "EditField" } );
   }

   // -----------------------------
   // -- XCONCITY Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONCITY.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONCITY );
      };

      Lansa.createFieldClass( { co: Fields.XCONCITY.DataClass, an: "PRIM_FLD", fn: "XCONCITY" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONCITY.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONCITY.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONCITY.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONCITY", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONJOBTL Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONJOBTL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONJOBTL );
      };

      Lansa.createFieldClass( { co: Fields.XCONJOBTL.DataClass, an: "PRIM_FLD", fn: "XCONJOBTL" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONJOBTL.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONJOBTL.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONJOBTL.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONJOBTL", cn: "EditField" } );
   }

   // -----------------------------
   // -- XCONCMPY Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONCMPY.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONCMPY );
      };

      Lansa.createFieldClass( { co: Fields.XCONCMPY.DataClass, an: "PRIM_FLD", fn: "XCONCMPY" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONCMPY.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONCMPY.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONCMPY.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONCMPY", cn: "EditField" } );
   }

   // -----------------------------
   // -- XCONADDR Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONADDR.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONADDR );
      };

      Lansa.createFieldClass( { co: Fields.XCONADDR.DataClass, an: "PRIM_FLD", fn: "XCONADDR" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONADDR.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONADDR.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONADDR.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONADDR", cn: "EditField" } );
   }

   // ------------------------------
   // -- XCONWSITE Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONWSITE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONWSITE );
      };

      Lansa.createFieldClass( { co: Fields.XCONWSITE.DataClass, an: "PRIM_FLD", fn: "XCONWSITE" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONWSITE.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONWSITE.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONWSITE.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONWSITE", cn: "EditField" } );
   }

   // -----------------------------
   // -- XCONFNAM Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONFNAM.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONFNAM );
      };

      Lansa.createFieldClass( { co: Fields.XCONFNAM.DataClass, an: "PRIM_FLD", fn: "XCONFNAM" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONFNAM.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONFNAM.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONFNAM.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONFNAM", cn: "EditField" } );
   }

   // -----------------------------
   // -- XCONFADD Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XCONFADD.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XCONFADD );
      };

      Lansa.createFieldClass( { co: Fields.XCONFADD.DataClass, an: "PRIM_FLD", fn: "XCONFADD" } );

      // ---------------
      // -- EDITFIELD --
      // ---------------
      Fields.XCONFADD.EDITFIELD = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XCONFADD.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XCONFADD.EDITFIELD, an: "PRIM_MD", at: "EditField", fn: "XCONFADD", cn: "EditField" } );
   }

   // ----------------------------
   // -- STD_INT Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_INT.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_INT );
      };

      Lansa.createFieldClass( { co: Fields.STD_INT.DataClass, an: "PRIM_FLD", fn: "STD_INT" } );
   }

   // ----------------------------
   // -- XGENDER Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XGENDER.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XGENDER );
      };

      Lansa.createFieldClass( { co: Fields.XGENDER.DataClass, an: "PRIM_FLD", fn: "XGENDER" } );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.XGENDER.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#Item_1) Caption('Male') Parent(#Picklist) Value('Male')
         //
         var ITEM_1 = this.createReference( "ITEM_1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#Item_2) Caption('Female') Parent(#Picklist) Value('Female')
         //
         var ITEM_2 = this.createReference( "ITEM_2", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#Item_3) Caption('Not Disclosed') Parent(#Picklist) Value('NoDisclose')
         //
         var ITEM_3 = this.createReference( "ITEM_3", "PRIM_PKIT" );

         // ------------------------
         // -- Initialize #ITEM_1 --
         // ------------------------
         ITEM_1.setCaption( "Male" );
         ITEM_1.setParent( this );
         ITEM_1.setValue( "Male" );
         ITEM_1.initialize();

         // ------------------------
         // -- Initialize #ITEM_2 --
         // ------------------------
         ITEM_2.setCaption( "Female" );
         ITEM_2.setParent( this );
         ITEM_2.setValue( "Female" );
         ITEM_2.initialize();

         // ------------------------
         // -- Initialize #ITEM_3 --
         // ------------------------
         ITEM_3.setCaption( "Not Disclosed" );
         ITEM_3.setParent( this );
         ITEM_3.setValue( "NoDisclose" );
         ITEM_3.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "SHOWVALUE" );
      };

      Lansa.createFieldClass( { co: Fields.XGENDER.pl, an: "PRIM_PKLT", fn: "XGENDER", cn: "Picklist" } );
   }

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefAVFRAMEWORKMANAGER = function( refNew )
   {
      COM_ANCESTOR.setrefAVFRAMEWORKMANAGER.call( this, refNew );
   };

   COM_OWNER.setrefAVLISTMANAGER = function( refNew )
   {
      COM_ANCESTOR.setrefAVLISTMANAGER.call( this, refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC010O" ],
   rp: [ "PRIM_BOLN", "PRIM_PANL", "PRIM_ATLI", "PRIM_ATLM", "PRIM_MD.RaisedButton", "PRIM_MD.EditField", "PRIM_PKLT", "PRIM_MD.DateTimeField", "PRIM_WEB.DataRequest", "PRIM_FLD", "PRIM_DTIM" ],
   dp: [ "PRIM_BOLN" ]
});

//# sourceURL=vlfdem_3.js
