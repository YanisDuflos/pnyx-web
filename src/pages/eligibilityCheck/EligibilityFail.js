import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryButton from '../../buttons/PrimaryButton';
import SecondaryButton from '../../buttons/SecondaryButton';

function EligibilityFail() {

  const { state } = useLocation();
  const { reasonsForIneligibility } = state;

  return (
    <div className='text-base text-left'>
      <h1 className="font-bold text-center text-lg">Malheureusement, vous n’êtes actuellement pas éligibles.</h1>
      <span>
        Vous le serez quand:
        <ul className='list-disc'>
          {reasonsForIneligibility.notANational ? <li>vous aurez obtenu la nationalité française</li> : <></>}
          {reasonsForIneligibility.noElectoralRights ? <li>vous aurez récupéré vos droits électoraux et politiques</li> : <></>}
          {reasonsForIneligibility.notOfAge ? <li>vous aurez atteint la majorité</li> : <></>}
        </ul>
      </span>
      <h2 className='text-lg'>Laissez-nous vous rappeler quand vous deviendrez éligible.</h2>
      <div>
        <label>À quelle adresse email devrions-nous vous notifier ?</label>
        <div>
          <input type='email' className='border-2' />
        </div>
        <span className='text-sm'>*votre adresse email ne sera utilisée que pour l’envoi de rappels à l’inscription aux listes électorales.</span>
      </div>
      <div className='flex space-x-2 justify-center'>
        <SecondaryButton label="Je m'en rappelerai tout seul" />
        <PrimaryButton label="M'envoyer un rappel dès que je suis éligible" />
      </div>
      
      <div className='text-center'>
        <span className='text-sm'>Vous pensez qu'il y a erreur ? </span>
        <div>
          <Link to="/verifier-eligibilite-inscription" className='text-sm underline text-purple-700'>Réessayer</Link>
        </div>
        <span className='text-sm'>En cas de doute, nous vous invitons à contacter votre mairie pour en savoir plus.</span>
      </div>
    </div>
  );
}

export default EligibilityFail;