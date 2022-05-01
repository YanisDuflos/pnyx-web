import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toast'

function Manifesto() {
    const [email, setEmail] = useState('')
    const [willContribute, setWillContribute] = useState(false)

    const subscribe = async (e) => {
        e.preventDefault()
        // const response = await axios.post('http://localhost:3001/subscribe', { email: email })
        const response = await axios.post(process.env.REACT_APP_FIREBASE_FIRESTORE_URL + 'subscribe', { email: email })

        if (response && response.status === 200) {
            toast.success('On a bien reçu votre adresse ! Merci et à très vite.')
            console.log("success", response)
        } else {
            toast.error('Malheureusement nous n\'avons pas réussi à sauvegarder votre adresse. \n Réessayez pour voir ?')
            console.log("error")
        }
    }

    return (
        <div className="bg-white text-black text-left text-lg p-6 lg:px-24 lg:py-12">
            <div className='flex flex-col space-y-6'>
                <div>
                    <h2 className='font-bold text-2xl py-4'>C'est quoi <span className="font-extrabold text-indigo-500">pnyx</span> ?</h2>
                    <p className='py-2'>
                        <span className="font-extrabold text-indigo-500">pnyx</span> est un service conçu pour faciliter l'accès au vote des citoyens français.
                    </p>
                    <p className='py-2'>
                        Aujourd'hui, plus de 6 millions de français sont inscrits sur les listes électorales de la mauvaise commune. 200 000 autres ont été radiés de leur liste sans être informés. 2 millions d'autres sont éligibles au vote mais ne sont inscrits sur aucune liste.
                    </p>
                    <p className='py-2'>
                        Au total, ce sont <span className='font-bold'>plus de 12 millions de français qui sont éloignés du vote pour des raisons purement pratiques</span>.
                    </p>
                    <p className='py-2'>
                        L'ambition de <span className="font-extrabold text-indigo-500">pnyx</span> est d'éliminer les barrières pratiques de l'équation démocratique et permettre à tous d'accéder au vote.
                    </p>
                    <p className='py-2'>
                        Cette application a une vocation d'intérêt général, il n'y a pas de monétisation.
                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-2xl py-4'>Pourquoi le nom <span className="font-extrabold text-indigo-500">pnyx</span> ?</h2>
                    <p className='py-2'>
                        Pour comprendre d'où provient le nom de notre application, il faut remonter 2000 ans en arrière.
                        Pnyx est la colline sur laquelle était jûchée l'Ecclesia. Sanctuaire démocratique, c'est là-bas qu'est née la première république participative.
                        Chaque mois, les citoyens de la cité d'Athènes gravissaient les flans du Pnyx pour rejoindre l'assemblée démocratique, suivre les affaires de la cité, débattre et voter les décisions politiques.
                    </p>
                    <p className='py-2'>
                        Depuis la Grèce antique, nos démocraties ont bien évoluées. Pour voter, nous n'avons plus à enfiler nos chaussures de randonnée, ou rater une journée du travail tant la route est longue.
                        En revanche, nous faisons face à de nouveaux défis, plus modernes : des démarches administratives complexes et opaques, une mobilité individuelle croissante, des affaires du quotidien toujours plus pressantes...
                    </p>
                    <p className='py-2'>
                        Si tant que beaucoup ne parviennent plus à se hisser en haut de la colline, et s'éloignent de l'Ecclesia. Au moins <span className='font-bold'>6 millions</span> à la dernière élection présidentielle.
                    </p>
                    <p className='py-2'>
                        Avec <span className="font-extrabold text-indigo-500">pnyx</span>, nous avons pour ambition d'aider chacun des citoyens français à rejoindre l'assemblée démocratique, et permettre à tous d'être acteurs de la cité.
                    </p>
                </div>
            </div>

            <div className='mt-6'>
                <h2 className='font-bold text-2xl py-4'>Comment contribuer ?</h2>
                <p><span className="font-extrabold text-indigo-500">pnyx</span> est un projet porté par de jeunes actifs, et qui nécessite beaucoup de travail. Tout soutien est le bienvenu.</p>
                <div className="mt-2">Si vous êtes arrivés jusqu'ici, c'est que vous avez votre pierre à apporter. Pour cela, nous vous proposons deux options:
                    <ol className='list-decimal list-inside'>
                        <li><span className='font-bold'>Encourager</span>: manifestez votre intérêt en rejoignant la communauté de citoyens engagés pour l'accessibilité de la démocratie.</li>
                        <li><span className='font-bold'>Contribuer</span>: partagez votre avis et vos idées, ou mettez directement à profit votre temps ou votre argent.</li>
                    </ol>
                </div>
                <form className="flex flex-col mt-4" onSubmit={subscribe}>
                    <h3 className='font-bold'>Sautez le pas !</h3>

                    <div className='flex flex-row space-x-6'>
                        <div className='flex flex-col space-y-2'>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor='email'>
                                    Votre adresse email :
                                </label>
                                <input type="email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-2 rounded-md"
                                />
                            </div>
                            <div className="flex flex-row space-x-4 items-center">
                                <div className="flex items-center h-5">
                                    <input
                                        id="contribuer"
                                        name="contribuer"
                                        key={willContribute}
                                        checked={willContribute}
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        onChange={(e) => setWillContribute(e.target.value)}
                                    />
                                </div>
                                <label htmlFor="contribuer" className="font-medium text-gray-700">
                                    Je veux contribuer
                                </label>
                            </div>
                        </div>

                        <button type="submit"
                            className="flex items-end self-end justify-center py-2 px-4 border border-transparent shadow-sm text-base lg:text-xl font-medium rounded-md 
                text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Tenez-moi informé
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Manifesto;