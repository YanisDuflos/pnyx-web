import React, { useState } from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useNavigate } from "react-router-dom"
import moment from 'moment';

function getAgeInYears(birthDate) {
  console.log("birthDate:", birthDate);
  let birthday = moment(birthDate)
  console.log("birthday:", birthday);
  let today = moment()
  console.log("birthday:", today);
  let diff = today.diff(birthday, 'years', true)
  console.log("diff:", diff)
  return diff
}


function VerifyEligibilityForm() {

  const navigate = useNavigate();
  const [isNational, setNationality] = useState({ isNational: false })
  const [hasRights, setRights] = useState({ hasRights: false })
  const [birthDate, setBirthDate] = useState({ setBirthDate: null })

  function handleSubmit(event) {
    event.preventDefault()

    console.log("verifying")
    const reasonsForIneligibility = {
      notANational: false,
      noElectoralRights: false,
      notOfAge: false
    }

    if (isNational === false) {
      console.log("nope il faut la nationalité française. enfin ça passe pour municipales et européennes si ressortissant européen")
      reasonsForIneligibility.notANational = true
      navigate("fail")
    }
    if (hasRights === false) {
      console.log("nope va falloir retrouver ses droits")
      reasonsForIneligibility.noElectoralRights = true
    }
    if (getAgeInYears(birthDate) < 18) {
      console.log("nope va falloir grandir")
      reasonsForIneligibility.notOfAge = true
    }


    console.log(reasonsForIneligibility)

    if (reasonsForIneligibility.noElectoralRights ||
      reasonsForIneligibility.notANational ||
      reasonsForIneligibility.notOfAge) {
      navigate("fail", { state: { reasonsForIneligibility } })
    } else {
      navigate("success", { replace: true })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">

      <div className="mt-10">
        <div className="flex text-base justify-between space-x-2 text-left">
          <div className="flex">
            <label htmlFor="birthDate" className="">
              Quelle est votre date de naissance ? <strong className='text-indigo-600'>*</strong>
            </label>
          </div>
          <div className="flex">
            <input
              id="date"
              name="birthDate"
              type="date"
              required
              autoComplete="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex text-base justify-between items-center text-left">
          <span>Jouissez vous de vos droits électoraux ? <strong className='text-indigo-600'>*</strong></span>
          <div className="flex space-x-4">
            <div className="flex">
              <input
                type="radio"
                id="oui"
                required
                name="hasRights"
                value={hasRights}
                checked={hasRights === true}
                onChange={() => setRights(true)}
                className="accent-indigo-600 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
              <label htmlFor="oui" className="ml-3 block text-sm font-medium text-gray-700">
                Oui
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="non"
                name="hasRights"
                value={hasRights}
                checked={hasRights === false}
                onChange={() => setRights(false)}
                className="accent-indigo-600 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
              <label htmlFor="non" className="ml-3 block text-sm font-medium text-gray-700">
                Non
              </label>
            </div>
          </div>
        </div>

        <div className="flex text-base justify-between items-center text-left">
          <span>Détenez-vous la nationalité française ? <strong className='text-indigo-600'>*</strong></span>
          <div className="flex space-x-4">
            <div className="flex">
              <input
                type="radio"
                id="oui"
                name="isNational"
                required
                value={isNational}
                checked={isNational === true}
                onChange={() => setNationality(true)}
                className="accent-indigo-600 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
              <label htmlFor="oui" className="ml-3 block text-sm font-medium text-gray-700">
                Oui
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                id="non"
                name="isNational"
                required
                value={isNational}
                checked={isNational === false}
                onChange={() => setNationality(false)}
                className="accent-indigo-600 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
              <label htmlFor="non" className="ml-3 block text-sm font-medium text-gray-700">
                Non
              </label>
            </div>
          </div>
        </div>
      </div>
      <PrimaryButton type="submit" label="Vérifier" />
      <div>
        <span className="text-xs">Source: <a target="_blank" href="https://www.vie-publique.fr/fiches/23926-quelles-sont-les-conditions-pour-voter" className='text-indigo-600 underline'>https://www.vie-publique.fr/fiches/23926-quelles-sont-les-conditions-pour-voter</a></span>
      </div>
    </form>
  )
}

export default VerifyEligibilityForm;