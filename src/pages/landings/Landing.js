import Logo from '../../Logo.png'
import LandingImage from '../../assets/pnyx-home.png'
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="bg-white text-black text-left text-lg p-6 lg:p-24">
            <div className="flex flex-row">
                <div className="flex flex-col space-y-6 lg:space-y-8">
                    <h1 className="font-bold text-3xl lg:text-4xl"><span className="font-extrabold text-indigo-500">pnyx</span>, rendre le vote plus facile.</h1>
                    <div className="flex flex-col space-y-2">
                        <p>
                            Aux élections présidentielles 2022, <span className="font-bold">6 millions de français étaient inscrits sur les mauvaises listes électorales</span>. <br/>200 000 autres en ont été radiés sans être informés. C’est trop de citoyens écartés de la démocratie !
                        </p>
                        <p>
                            Avec l'assistant <span className="font-extrabold text-indigo-500">pnyx</span>, vérifiez votre statut électoral en quelques clics, et préparez les prochaines élections simplement pour enfin faire entendre votre voix.
                        </p>
                    </div>


                    {/* <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSebaipUtHF6Sd8c2xjtKDfufKkb-wKqrKj1LEm6nWq6DsC8tw/viewform?usp=sf_link"
                        className="flex self-start justify-center py-2 px-4 border border-transparent shadow-sm text-base lg:text-xl font-medium rounded-md 
                        text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Je vérifie mon statut électoral

                    </a> */}
                    <Link
                        to="/verifier-eligibilite-inscription"
                        className="flex self-start justify-center py-2 px-4 border border-transparent shadow-sm text-base lg:text-xl font-medium rounded-md 
            text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Je vérifie mon statut électoral
                    </Link>
                    <div className="flex flex-col lg:flex-row lg:space-x-3">
                        <div>Pas sûr d'être éligible au vote ?</div>
                        <Link to="/verifier-eligibilite-inscription" className="text-indigo-500 font-bold hover:underline">Je vérifie mon éligibilité →</Link>
                    </div>
                    <div className="text-sm flex flex-col lg:flex-row lg:pt-6 lg:space-x-3">
                        <div className="inline lg:block"><span className="font-extrabold text-indigo-500">pnyx</span> est un service créé bénévolement pour servir l'intérêt général.</div>
                        <Link to="manifeste" className="inline lg:block text-indigo-500 font-bold hover:underline">Lire le manifeste →</Link>
                    </div>

                </div>

                <div className="hidden lg:block p-8">
                    <img className="w-12 lg:w-96" src={LandingImage} alt="L'application pnyx." />
                </div>
            </div>


            {/* <div>
                <span>Les outils à votre disposition</span>
                <div className="text-sm flex space-x-3">
                    <div>Je suis inscrit mais je ne sais pas où voter ?</div>
                    <a href='#' className="text-purple-500 font-bold underline">Je trouve mon bureau de vote →</a>
                </div>
                <div className="text-sm flex space-x-3">
                    <div>Je ne sais pas si je suis inscrit, ou je ne suis pas sûr d'être inscrit dans la bonne commune ?</div>
                    <a href='#' className="text-purple-500 font-bold underline">Je vérifie que je suis inscrit aux listes électorales →</a>
                </div>
                <div className="text-sm flex space-x-3">
                    <div>Je ne sais pas si je suis éligible à l'inscription ?</div>
                    <a href='#' className="text-purple-500 font-bold underline">Je vérifie mon éligibilité →</a>
                </div>
                <div className="text-sm flex space-x-3">
                    <div>Je veux m'inscrire mais ne sait pas par où commencer ?</div>
                    <a href='#' className="text-purple-500 font-bold underline">Je constitue mon dossier d'inscription →</a>
                </div>
                <div className="text-sm flex space-x-3">
                    <div>Je veux comprendre les enjeux des différentes élections ?</div>
                    <a href='#' className="text-purple-500 font-bold underline">J'explore les fiches démocratiques →</a>
                </div>
                <div className="text-sm flex space-x-3">
                    <div>Je souhaite analyser et comparer les différents programmes ?</div>
                    <a href='#' className="text-purple-500 font-bold underline">Je lance le comparateur de programmes →</a>
                </div>
            </div> */}
        </div>
    )
}

export default Landing;