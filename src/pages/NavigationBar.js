import Logo from '../Logo.png'
import { Link, Outlet } from "react-router-dom";

function NavigationBar() {
    return (
        <div className="w-screen text-gray-800 bg-indigo-300">
            <nav className="border-solid border-b-2 p-4 space-x-4 flex justify-between">
                <div className=''>
                    <Link to="/" className="font-extrabold flex flex-row space-x-4 hover:text-indigo-500">
                        <img className="w-12" src={Logo} />
                        <div>pnyx</div>
                    </Link>
                </div>
                <div className='flex space-x-4'>
                    <Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Éligibilité</Link>
                    <Link to="/verifier-inscription-listes" className='hover:text-indigo-500'>Listes</Link>
                    <Link to="/preparer-dossier-inscription" className='hover:text-indigo-500'>Dossier</Link>
                    <Link to="/manifeste" className='hover:text-indigo-500'>Manifeste</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavigationBar;