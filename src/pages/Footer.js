import Logo from '../Logo.png'

function Footer() {
    return (
        <footer className="bg-indigo-300 w-full flex text-left space-x-4 p-8">
            <div>
                <div className='flex items-center space-x-4'>
                    <img className="w-16" src={Logo} />
                    <h1 className="font-bold">pnyx</h1>
                </div>
                <h3 className="text-xl">Dites nous comment nous améliorer !</h3>
                <a className="text-lg underline">contact@pnyx.fr</a>
            </div>
            <div>
                <h2 className="font-medium">Assistants</h2>
                <ul className="text-xl">
                    <li><a>Trouver mon bureau de vote</a></li>
                    <li><a>Vérifier mon éligibilité à l'inscription aux listes électorales</a></li>
                    <li><a>Évaluer les programmes</a></li>
                    <li><a>Émettre des propositions</a></li>
                </ul>

            </div>
            <div>
                <h2 className="font-medium">À propos</h2>
                <ul className="text-xl">
                    <li><a>Manifeste</a></li>
                    <li><a>L'équipe</a></li>
                    <li><a>Mentions légales</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;