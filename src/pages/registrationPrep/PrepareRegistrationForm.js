import { useState } from "react"
import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from "../../buttons/SecondaryButton"
import CheckboxInput from "../../inputs/CheckboxInput"
import communeUgle from "../../communeUgle"
import RadioInput from "../../inputs/RadioInput"
import SingleSelectInput from "../../inputs/SingleSelectInput"


function VerifyRegistrationForm() {

    const [step, setStep] = useState(1);
    const [eligibilityData, setEligibilityData] = useState({
        firstname: '',
        citizenship: {
          _noBirthDate: true,
          birthDate: '',
          frenchNational: true,
          firstname: '',
        },
        city: {},
        cityRelationship: {},
        folderConstititution: {},
        _noBirthDate: false,
      })
    
    
    //step1
    const whereFranceOption = { name: 'where', value: 'france', label: 'En France' }
    const whereWorldOption = { name: 'where', value: 'world', label: 'À l\'étranger' }
    const sameYesOption = { name: 'same', value: true, label: 'Oui' }
    const sameNoOption = { name: 'same', value: false, label: 'Non' }
    const city = {}

    //step2
    const noBirthDateOption = { name: '_noBirthDate' }
    const cityRelationship = {}

    //step3
    const option = { name: "test" }
    const folderConstititution = {}

    function handleSubmit(event) {
        // const params = new URLSearchParams();

        // Object.entries(this.state).map((value, key) => params.append(key, value));

        // axios.post('https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE', params)
        //   .then(response => console.log(response))
    }

    function goNextStep(event) {
        console.log(step)
        // if (step === 4) return;
        setStep(step + 1);
    }

    function goPreviousStep(event) {
        // if (step === 1) return;
        setStep(step - 1);
    }

    function updateData(key, value) {
        console.log("prev " + eligibilityData[key])
        console.log("key: " + key + " / Val: " + value)
        setEligibilityData({
          ...eligibilityData,
          [key]: value
        })
      }
    

    return (
        <form onSubmit={handleSubmit} className=" p-4">
            <div>
                <progress max="4" value={step} >{step}</progress>

                <div className="mt-10">

                    <span> test </span>
                    {
                        step === 1 &&
                        <>
                            <RadioInput name="where" label="Où souhaitez-vous vous inscrire ?" value={city.where} onChange={updateData} option1={whereFranceOption} option2={whereWorldOption} />
                            <SingleSelectInput name="communeUgle" label="Dans quelle commune souhaitez-vous vous inscrire ?" options={communeUgle} placeholder="Taverny" value={city.searchedCommune} onChange={updateData} />
                            <RadioInput name="same" label="Est-ce la même commune que celle dans laquelle vous voulez voter ?" value={city.sameCity} onChange={updateData} option1={sameYesOption} option2={sameNoOption} />
                        </>
                    }
                    {
                        step === 2 &&
                        <>
                            <CheckboxInput name="cityDomicile" label="A C’est la commune de mon domicile" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                            <CheckboxInput name="cityParents" label="B J’ai moins de 26 ans, et c’est la commune du domicile de mes parents" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                            <CheckboxInput name="cityResident" label="C Je suis résident de la commune depuis plus de 6 mois" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                            <CheckboxInput name="cityFonctionnaire" label="D Je suis fonctionnaire public et suis assujeti à résidence obligatoire dans la commune" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                            <CheckboxInput name="cityTaxpayer" label="E Je suis contribuable aux impôts locaux de la commune depuis plus de deux ans" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                            <CheckboxInput name="cityShareholder" label="F Je suis actionnaire principal ou gérant d’une société contribuable à la commune depuis plus de deux ans" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                            <CheckboxInput name="cityNone" label="Je n’ai aucune des attaches exposées ici" option={noBirthDateOption} value={cityRelationship._noBirthDate} onChange={updateData} />
                        </>
                    }
                    {step === 3 &&
                        <>
                            <h1 className="font-bold">Constitution du dossier</h1>
                            <div className="text-left my-4">
                                <div className='my-2'>
                                    <span className="text-base block">Bravo, vous êtes <span className="font-semibold">éligibles</span> à l’inscription sur les listes électorales !</span>
                                    <span className="text-base block">Vous avez jusqu’au {"dynamic_date"} pour finaliser votre inscription. <a href="#">(* sauf exceptions)</a></span>
                                </div>
                                <span className="font-medium text-base block">Documents à préparer :</span>
                                <div className='my-2'>
                                    <span className="text-sm block mb-2">Formulaire d'inscription</span>
                                    <CheckboxInput name="documentCerfa" label="Cerfa n°12669*02, disponible en mairie ou en ligne" option={option} value={folderConstititution.documentCerfa} onChange={updateData} />
                                </div>
                                <div className='my-2'>
                                    <span className="text-sm block mb-2">Justificatif(s) d'identité et de nationalité</span>
                                    <CheckboxInput name="documentIdentity" label="Preuve d’identité" option={option} value={folderConstititution.proofOfIdentity} onChange={updateData} />
                                    <CheckboxInput name="documentNationality" label="Preuve de nationalité" option={option} value={folderConstititution.proofOfCitizenship} onChange={updateData} />
                                </div>
                                <div className='my-2'>
                                    <span className="text-sm block mb-2">Justificatif(s) d'attache à la commune</span>
                                    <CheckboxInput name="documentResidencyProof" label="(A+B) Justificatif de domicile récent de moins de 3 mois" option={option} value={folderConstititution.proofOfResidency} onChange={updateData} />
                                    <CheckboxInput name="documentFiliationProof" label="(B) Attestation de lien de filiation" option={option} value={folderConstititution.attestationOfFiliation} onChange={updateData} />
                                    <CheckboxInput name="documentTaxpayerProof" label="(E) Justificatif d’inscription au rôle des impôts locaux depuis au moins 2 ans" option={option} value={folderConstititution.proofOfTaxRegistration} onChange={updateData} />
                                    <CheckboxInput name="documentShareholderProof" label="(F) Une décision de nomination retranscrite au registe des décisions d’assemblée générale OU les statuts de la société OU une attestation délivrée par la société dont je détiens les parts" option={option} value={folderConstititution.proofOfShareholderStatus} onChange={updateData} />
                                    <CheckboxInput name="documentShareholderPromise" label="(F) Attestation sur l’honneur de la continuité de ma qualité de gérant et/ou actionnaire principale" option={option} value={folderConstititution.attestationOfHonor} onChange={updateData} />
                                </div>
                            </div>
                        </>
                    }
                </div>
                {/* {step === 1 && <CitizenshipStep data={eligibilityData.citizenship} update={updateData} />} */}
                {/* {step === 2 && <CityStep data={eligibilityData.city} update={updateData} />} */}
                {/* {step === 3 && <CityRelationshipStep data={eligibilityData.cityRelationship} update={updateData} />} */}
                {/* {step === 4 && <FolderConstitutionStep data={eligibilityData.folderConstititution} update={updateData} />} */}


                <div className='flex justify-around'>
                    {step > 1 && <SecondaryButton type="button" name="Retour" onClick={goPreviousStep} />}
                    {step === 5
                        ? <PrimaryButton type="submit" name="Vérifier" />
                        : <PrimaryButton type="button" name="Continuer" onClick={goNextStep} />
                    }
                </div>
            </div>
        </form>
    )

}

export default VerifyRegistrationForm;