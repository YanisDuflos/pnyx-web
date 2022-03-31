import VerifyRegistrationForm from "./registrationCheck/VerifyRegistrationForm";

function VerifyRegistration() {
    return (
        <div className="bg-white text-slate-900">
            <h1 className="text-xxl font-black">Vérifiez votre inscription aux listes électorales</h1>
            <VerifyRegistrationForm/>
        </div>
    )
}

export default VerifyRegistration;