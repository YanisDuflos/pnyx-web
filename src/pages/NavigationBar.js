import Logo from '../Logo.png'
import { Link } from "react-router-dom";

function NavigationBar() {
  return (

    <nav className="w-screen flex flex-row justify-between text-gray-800 px-6 py-4 bg-indigo-200 border-solid border-b-2 
    p-4 space-x-4 
    lg:text-left lg:flex-row lg:space-x-72 lg:px-24 lg:py-6">
      <div className='flex flex-row space-x-12 lg:space-x-0'>
        {/* TODO: Burger */}
        {/* <img className="w-12 lg:hidden" src={Logo} alt="L'icône du menu." /> */}
        <Link to="/" className="flex flex-row space-x-4 items-center hover:text-indigo-500">
          <img className="w-12 lg:w-16" src={Logo} alt="Le logo pnyx." />
          <div className='text-2xl font-extrabold' >pnyx</div>
        </Link>
      </div>
      <div className='hidden lg:flex space-x-8 items-center'>
        <Link to="/manifeste" className='hover:text-indigo-500 lg:text-xl'>Manifeste</Link>
        <Link
          to="/verifier-eligibilite-inscription"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base lg:text-xl font-medium rounded-md 
            text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Vérifier mon statut électoral
        </Link>

        {/* <PrimaryButton label="Vérifier mon statut électoral" /> */}
        {/* <Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Éligibilité</Link>
                    <Link to="/verifier-inscription-listes" className='hover:text-indigo-500'>Listes</Link>
                    <Link to="/preparer-dossier-inscription" className='hover:text-indigo-500'>Dossier</Link>
                    <Link to="/manifeste" className='hover:text-indigo-500'>Manifeste</Link> */}
      </div>
    </nav>
  )
}

export default NavigationBar;