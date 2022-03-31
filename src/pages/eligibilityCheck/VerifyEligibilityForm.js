import React, { useState } from 'react';
import RadioInput from '../../inputs/RadioInput';
import CheckboxInput from '../../inputs/CheckboxInput';
import DateInput from '../../inputs/DateInput';
import PrimaryButton from '../../buttons/PrimaryButton';
import EligibilityFail from './EligibilityFail';
import EligibilitySuccess from './EligibilitySuccess';


function VerifyEligibilityForm() {

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

  function handleSubmit(event) {
    // const params = new URLSearchParams();

    // Object.entries(this.state).map((value, key) => params.append(key, value));

    // axios.post('https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE', params)
    //   .then(response => console.log(response))
  }

  function handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  function handleCheckChange(event) {
    this.setState({ [event.target.name]: this.state[event.target.name] === "on" ? "off" : "on" })
  }

  function goPreviousStep(event) {
    // if (step === 1) return;
    setStep(step - 1);
  }

  function goNextStep(event) {
    console.log(step)
    // if (step === 4) return;
    setStep(step + 1);
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

      <div className="mt-10">
        <CheckboxInput value={eligibilityData._noBirthDate} onChange={(e) => updateData('_noBirthDate', e.target.value)}
          option={{ name: '_noBirthDate' }} name="_noBirthDate"
          label="Mon acte de naissance n'indique pas la date complète" subtitle="Cochez si vous êtes concerné" />
        {eligibilityData._noBirthDate === false
          ? <DateInput value={eligibilityData.birthDate} onChange={(e) => updateData('birthDate', eligibilityData.birthDate)}
            name="birthDate" label="Quelle est votre date de naissance ?" placeholder="03/01/1999" />
          : <></>
        }
        <RadioInput value={eligibilityData.isFrenchNational} onChange={(e) => updateData('isFrenchNational', e.target.value)}
          firstOption={{ id: "isFrenchNational", value: "on", label: "Oui" }} secondOption={{ id: "isNotFrenchNational", value: "off", label: "Non" }}
          label="Détenez-vous la nationalité française ?" />
        <RadioInput value={eligibilityData.hasPoliticalRights} onChange={(e) => updateData('hasPoliticalRights', e.target.value)}
          firstOption={{ id: "hasPoliticalRights", value: "on", label: "Oui" }} secondOption={{ id: "noPoliticalRights", value: "off", label: "Non" }}
          label="Jouissez-vous de vos droits politiques et éléctoraux ?" />
      </div>
      <PrimaryButton type="submit" label="Vérifier" />
      <EligibilityFail />
      <EligibilitySuccess/>
    </form>
  )
}

export default VerifyEligibilityForm;