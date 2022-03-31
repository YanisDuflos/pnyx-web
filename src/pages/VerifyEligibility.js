import VerifyEligibilityForm from "./eligibilityCheck/VerifyEligibilityForm";

function VerifyEligibility() {
    return (
        <div className="bg-white text-slate-900">
            <h1 className="text-xxl font-black">Éligibilité à l'inscription aux listes électorales</h1>
            <VerifyEligibilityForm />
        </div>
    )
}

export default VerifyEligibility;