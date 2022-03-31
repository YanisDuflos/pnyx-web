import PrepareRegistrationForm from "./registrationPrep/PrepareRegistrationForm";

function PrepareRegistration() {
    return (
        <div className="bg-white text-slate-900">
            <h1 className="text-xxl font-black">Éligibilité à l'inscription aux listes électorales</h1>
            <PrepareRegistrationForm/>
        </div>
    )
}

export default PrepareRegistration;