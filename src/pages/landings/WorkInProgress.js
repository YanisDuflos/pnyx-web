import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toast'
import { Link } from "react-router-dom";

function WorkInProgress() {
    // const [email, setEmail] = useState('')
    // const [willContribute, setWillContribute] = useState(false)

    // const subscribe = async (e) => {
    //     e.preventDefault()
    //     // const response = await axios.post('http://localhost:3001/subscribe', { email: email })
    //     const response = await axios.post(process.env.REACT_APP_FIREBASE_FIRESTORE_URL + 'subscribe', { email: email })

    //     if (response && response.status === 200) {
    //         toast.success('On a bien reçu votre adresse ! Merci et à très vite.')
    //         console.log("success", response)
    //     } else {
    //         toast.error('Malheureusement nous n\'avons pas réussi à sauvegarder votre adresse. \n Réessayez pour voir ?')
    //         console.log("error")
    //     }
    // }


    return (
        <div className="bg-white w-screen text-black text-left text-lg p-6 lg:p-24">
            <div className="flex flex-row">
                <div className="flex flex-col space-y-6 lg:space-y-8">
                    <h1 className="font-bold text-3xl lg:text-4xl">Désolé, cette fonctionnalité n'est pas encore disponible !</h1>
                    <div className="flex flex-col space-y-2">
                        <p>
                            Nous travaillons activement à développer <span className="font-extrabold text-indigo-500">pnyx</span>. En cliquant sur nos fonctionnalités, vous nous aider à les prioriser, merci !
                        </p>
                        <p>
                            Nous avons l’ambition de faciliter la vie électorale de tous les citoyens français. Beau projet, non ?
                        </p>
                    </div>


                    {/* <form className="flex flex-col mt-4" onSubmit={subscribe}>
                        <h3 className='font-bold'>Laissez-nous votre email pour être informé de la sortie des prochaines fonctionnalités</h3>

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
                                Tenez-moi au courant
                            </button>
                        </div>
                    </form> */}
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSebaipUtHF6Sd8c2xjtKDfufKkb-wKqrKj1LEm6nWq6DsC8tw/viewform?usp=sf_link"
                        className="flex self-start justify-center py-2 px-4 border border-transparent shadow-sm text-base lg:text-xl font-medium rounded-md 
                        text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Tenez-moi au courant !
                    </a>

                    <div className="text-sm flex flex-col lg:flex-row lg:pt-6 lg:space-x-3">
                        <div className="inline lg:block"><span className="font-extrabold text-indigo-500">pnyx</span> est un service créé bénévolement pour servir l'intérêt général.</div>
                        <Link to="manifeste" className="inline lg:block text-indigo-500 font-bold">Lire le manifeste →</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkInProgress;