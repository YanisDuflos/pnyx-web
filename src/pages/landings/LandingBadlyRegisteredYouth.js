import { Link } from "react-router-dom"

function LandingBadlyRegisteredYouth() {
    return (
        <div className="bg-white text-xl text-gray-700 text-left p-6 md:p-12 md:text-2xl">
            <h1 className="text-2xl md:text-3xl font-bold">Change de bureau de vote <strong className="font-extrabold text-indigo-500">avant le 10 juin</strong> pour voter aux élections législatives.</h1>
            <div className="mt-8">
                Aux élections présidentielles, plus de <strong>1,7 millions de jeunes français</strong> ne sont pas allés voter car inscrits dans la mauvaise commune.
            </div>
            <div className="mt-4">
                Avec <strong className="font-extrabold text-indigo-500">pnyx</strong>, change de bureau de vote en trois clics et fais entendre ta voix pour élire les députés qui porteront la tienne.

            </div>

            <div className="mt-6">
                <Link to="/verifier-inscription-listes" className='bg-indigo-500 rounded-md border border-transparent p-2 text-white hover:bg-indigo-700 hover-'>Je m'inscris</Link>
            </div>
            <div className="mt-8 text-base md:text-lg">
                <h5>Tu penses être inscrit dans la bonne commune ?</h5>
                <a href="#" className="text-indigo-500 font-bold">Je vérifie mon statut d'électeur →</a>
            </div>
            <div className="mt-16 text-sm md:text-base">
                <h5><strong className="font-extrabold text-indigo-500">pnyx</strong> est un service créé bénévolement pour servir l’intérêt général. <Link to="/manifeste" className="text-indigo-500 font-bold">Lire le manifeste →</Link></h5>
            </div>
        </div>
    )
}

export default LandingBadlyRegisteredYouth