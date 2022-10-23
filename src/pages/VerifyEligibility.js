import { Route, Routes } from "react-router-dom";
import ProcessHeader from "../components/ProcessHeader";
import EligibilityFail from "./eligibilityCheck/EligibilityFail";
import EligibilitySuccess from "./eligibilityCheck/EligibilitySuccess";
import VerifyEligibilityForm from "./eligibilityCheck/VerifyEligibilityForm";


// function MobileHeader() {
//     return (
//       <div className='flex-row space-y-2 w-full '>
//         <div className='flex justify-between space-x-8 w-full px-2 m-auto'>
//           <span className='text-xl font-bold text-indigo-500'>pnyx</span>
//           <span className='text-xs font-bold'>Vérifier mon éligibilité</span>
//           <span className='text-xs font-bold text-indigo-300'>1/3</span>
//         </div>
//         <div class="inset-0 flex items-center">
//           <div class="w-24 border-b border-2 border-indigo-500"></div>
//           <div class="w-full border-b border-2 border-gray-100"></div>
//         </div>
//       </div>
//     )
//   }
  

function VerifyEligibility() {
    return (
        <div className="w-screen bg-white text-slate-900 text-left text-lg">
            <ProcessHeader processName="Vérifier mon éligibilité" currentStep={1} maxStep={3}/>
            {/* <h1 className="text-xxl font-black">Éligibilité à l'inscription aux listes électorales</h1> */}
            <Routes className="px-6">
                <Route index element={<VerifyEligibilityForm />} />
                <Route path="/success" element={<EligibilitySuccess />} />
                <Route path="/fail" element={<EligibilityFail />} />
            </Routes>
        </div>
    )
}

export default VerifyEligibility;