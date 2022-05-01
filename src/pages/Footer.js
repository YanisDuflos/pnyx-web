import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../Logo.png';

function Footer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <footer className="flex justify-between bg-indigo-200 text-gray-700 w-full 
        text-center text-sm flex-col space-y-reverse-6 px-6 py-8
        lg:text-left lg:flex-row lg:space-x-42 lg:px-24 lg:py-14">
            <div className='flex flex-col space-y-4 mt-6 order-last lg:mt-0 lg:-order-none'>
                <Link to='/' className='flex flex-row justify-center items-center lg:justify-start space-x-6 hover:text-indigo-500'>
                    <img className="w-12 lg:w-24" src={Logo} />
                    <h1 className="font-extrabold text-3xl">pnyx</h1>
                </Link>
                <div className='flex flex-col space-y-2'>
                    <p>Dites-nous comment nous améliorer !</p>
                    <a href="mailto:contact@pnyx.fr" className='font-bold text-indigo-700 underline '>contact@pnyx.fr</a>
                    {/* TODO: Social */}
                    {/* <div className='flex flex-row space-x-4'>
                        <img className="w-6" src={Logo} />
                        <img className="w-6" src={Logo} />
                        <img className="w-6" src={Logo} />
                        <img className="w-6" src={Logo} />
                    </div> */}
                </div>
            </div>

            <div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-24'>
            <div className='flex flex-col space-y-2'>
                    <h2 className='font-bold text-2xl'>Fiches explicatives</h2>
                    <ul className='space-y-1'>
                        <li><Link to="/comment-voter-elections-legislatives-2022" className='hover:text-indigo-500'>Comment voter aux élections législatives 2022 ?</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Comment changer de bureau de vote en 2022 ?</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Comment savoir si on a le droit de voter en 2022 ?</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-2'>
                    <h2 className='font-bold text-2xl'>Plus d'outils</h2>
                    <ul className='space-y-1'>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Trouver mon bureau de vote</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Vérifier mon éligibilité électorale</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Évaluer les programmmes</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Émettre des propositions</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-2'>
                    <h2 className='font-bold text-2xl'>À propos</h2>
                    <ul className='space-y-1'>
                        <li><Link to="/manifeste" className='hover:text-indigo-500'>Manifeste</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>L'équipe</Link></li>
                        <li><Link to="/verifier-eligibilite-inscription" className='hover:text-indigo-500'>Mentions légales</Link></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer;