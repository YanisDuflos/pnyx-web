import React from 'react';
// import axios from 'axios';
import TextInput from '../../inputs/TextInput.js';
import RadioInput from '../../inputs/RadioInput';
import CheckboxInput from '../../inputs/CheckboxInput';
import DateInput from '../../inputs/DateInput';
import SingleSelectInput from '../../inputs/SingleSelectInput';
import communeUgle from '../../communeUgle.js';
import consulatUgle from '../../consulatUgle.js';
import PrimaryButton from '../../buttons/PrimaryButton';

class VerifyRegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: '',
      where: 'france', // 'world' or 'france'
      searchedTown: '',
      town: '',
      consulatUgle: '',
      searchedCommune: 'searchedC',
      commune: '',
      name: '',
      _noFirstName: 'on',
      firstNames: '',
      sexe: '',
      _noBirthDate: 'on',
      birthDay: '',
      birthMonth: 'month',
      birthYear: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  componentDidMount() {
    // axios.get('https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE')
  }

  handleSubmit(event) {
    const params = new URLSearchParams();

    Object.entries(this.state).map((value, key) => params.append(key, value));

    // axios.post('https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE', params)
    //   .then(response => console.log(response))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheckChange(event) {
    this.setState({ [event.target.name]: this.state[event.target.name] === "on" ? "off" : "on" })
  }

  render() {
    const whereFranceOption = { name: 'where', value: 'france', label: 'En France' }
    const whereWorldOption = { name: 'where', value: 'world', label: 'À l\'étranger' }
    const sexMaleOption = { name: 'sexe', value: 'masculin', label: 'Masculin' }
    const sexFemaleOption = { name: 'sexe', value: 'feminin', label: 'Féminin' }
    const noFirstNameOption = { name: '_noFirstName' }
    const noBirthDateOption = { name: '_noBirthDate' }

    return (
      <form onSubmit={this.handleSubmit} className=" p-4">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="mt-10">
          <span className="font-bold">Situation géographique</span>
          <RadioInput name="where" label="Où votez-vous ?" value={this.state.where}  onChange={this.handleChange} option1={whereFranceOption} option2={whereWorldOption} />
          {this.state.where === 'france'
            ?
            <>
              <SingleSelectInput name="communeUgle" label="Quelle est votre commune de vote ?" options={communeUgle} placeholder="Taverny" value={this.state.searchedCommune} onChange={this.handleChange}/>
              {/* <TextInput name="searchedCommune" value={this.state.nom} type="text" onChange={this.handleChange} label="Quelle est votre commune de vote ?" placeholder="Taverny" /> */}
              {/* <TextInput name="commune" value={this.state.nom} type="text" onChange={this.handleChange} label="Commune ?" placeholder="DUFLOS" /> */}
              {/* <TextInput name="communeUgle" value={this.state.nom} type="text" onChange={this.handleChange} label="Commune UGLE ?" placeholder="DUFLOS" /> */}
            </>
            :
            <>
              
              <SingleSelectInput name="consulatUgle" label="Quel est votre consulat de vote ?" options={consulatUgle} placeholder="Hambourg" value={this.state.searchedTown} onChange={this.handleChange}/>
              {/* <TextInput name="searchedTown" value={this.state.nom} type="text" onChange={this.handleChange} label="Que est votre consulat de vote ?" placeholder="Hambourg" /> */}
              {/* <TextInput name="town" value={this.state.nom} type="text" onChange={this.handleChange} label="Que est votre nom ?" placeholder="DUFLOS" /> */}
              {/* <TextInput name="consulatUgle" value={this.state.nom} type="text" onChange={this.handleChange} label="Que est votre nom ?" placeholder="DUFLOS" /> */}
            </>
          }
        </div>

        <div className="mt-10">
          <span className="font-bold">Identité</span>
          <TextInput name="name" value={this.state.nom} type="text" onChange={this.handleChange} label="Quel est votre nom ?" placeholder="DUFLOS" />
          <CheckboxInput name="_noFirstName" value={this.state._noFirstName} onChange={this.handleCheckChange} label="Je n'ai pas de prénom" subtitle="Cochez si vous êtes concerné" option={noFirstNameOption} />
          {this.state._noFirstName === "on"
            ?
            <>
              <TextInput name="prénom" value={this.state.firstNames} onChange={this.handleChange} label="Quel est votre prénom ?" placeholder="Yanis" />
              <TextInput name="firstname" label="Ajouter un prénom suivant" placeholder="Jean+" />
            </>
            : <></>
          }
          {/* TODO: Additional fields */}
          {/* <div>
            <a>+</a>
          </div> */}
          <RadioInput name="sexe" label="Quel est votre sexe ?" value={this.state.sexe} onChange={this.handleChange} option1={sexMaleOption} option2={sexFemaleOption} />
          <CheckboxInput name="_noBirthDate" label="Mon acte de naissance d'indique pas la date complète" subtitle="Cochez si vous êtes concerné" option={noBirthDateOption} value={this.state._noBirthDate} onChange={this.handleCheckChange} />
          {this.state._noBirthDate === "on"
            ? <DateInput name="birthDate" label="Quelle est votre date de naissance ?" placeholder="03/01/1999" />
            : <></>
          }
        </div>
        <PrimaryButton type="submit" name="Vérifier" />
      </form>
    )
  }
}

export default VerifyRegistrationForm;