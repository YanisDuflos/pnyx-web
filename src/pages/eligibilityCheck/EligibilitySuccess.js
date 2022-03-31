import React from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import SecondaryButton from '../../buttons/SecondaryButton';

function EligibilitySuccess() {
  return (
    <div className='text-base text-left'>
      <h1 className="font-bold text-center text-lg">Bonne nouvelle ! Vous êtes éligibles à l'inscription aux listes électorales.</h1>
      <span>Nous allons vous aider à constituer votre dossier.
        3 étapes, quelques questions, 10 minutes maximum.</span>
      <div className='flex space-x-2 justify-center'>
        <SecondaryButton label="Peut-être plus tard" />
        <PrimaryButton label="Démarrer" />
      </div>
    </div>
  );
}

export default EligibilitySuccess;