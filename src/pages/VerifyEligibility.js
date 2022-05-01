import { Route, Routes } from "react-router-dom";
import EligibilityFail from "./eligibilityCheck/EligibilityFail";
import EligibilitySuccess from "./eligibilityCheck/EligibilitySuccess";
import VerifyEligibilityForm from "./eligibilityCheck/VerifyEligibilityForm";

function VerifyEligibility() {
    return (
        <div className="w-screen bg-white text-slate-900 text-left text-lg p-6 lg:p-24">
            <h1 className="text-xxl font-black">Éligibilité à l'inscription aux listes électorales</h1>
            <Routes>
                <Route index element={<VerifyEligibilityForm />} />
                <Route path="/success" element={<EligibilitySuccess />} />
                <Route path="/fail" element={<EligibilityFail />} />
            </Routes>
        </div>
    )
}

export default VerifyEligibility;