// -----------------------------
// -- Reusable Part: VLFMAS_5 --
// -----------------------------
LANSA.addComponent(
{
   id: "VLFMAS_5", 
   nm: "VLFMASTER_HandleShowAbout", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Show About", 
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
      an: "VF_AC010O", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
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
   // mthUEXECUTE - uExecute
   //
   COM_OWNER.mthUEXECUTE = function( parm_GOTOFREESTATE, parm_SWITCHCALLERREFERENCE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "uExecute", 8 );

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
      rtn.Line( 8 );
      {

         //
         // INVOKE Method(#Com_Ancestor.uExecute) Gotofreestate(#GotoFreeState) Switchcallerreference(#SwitchCallerReference)
         //
         rtn.Line( 11 );
         COM_ANCESTOR.mthUEXECUTE.call( this, GOTOFREESTATE, SWITCHCALLERREFERENCE );

         //
         // #avFrameworkManager.avSwitch Caller(#COM_OWNER) ToObjectNamed("*FRAMEWORK_ABOUT")
         //
         rtn.Line( 14 );
         this.REF.AVFRAMEWORKMANAGER.mthAVSWITCH( "*FRAMEWORK_ABOUT", undefined, undefined, undefined, this, undefined, undefined, undefined );

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_GOTOFREESTATE.set( GOTOFREESTATE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 16 );
      rtn.end();
   };

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefAVFRAMEWORKMANAGER = function( refNew )
   {
      COM_ANCESTOR.setrefAVFRAMEWORKMANAGER.call( this, refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC010O" ]
});

//# sourceURL=vlfmas_5.js
