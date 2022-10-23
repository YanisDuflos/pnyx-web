// import { useState } from "react";
import { Link } from "react-router-dom";
import CardButton from "../../buttons/CardButton";

function onOptionSelected(optionValue) {
    // setVotingRights(optionValue)
    // .then set state to master userdata
    // .then navigate to next page
}

function LongCardButton() {
    return (
        <>
            <div className="flex w-max space-x-4 font-medium py-2 px-4 rounded-lg w-24 border-2 border-gray-200 
         drop-shadow-lg bg-purple-300">
                {/* //  ${style == 'primary' ? 'bg-purple-300' : 'bg-gray-200'}onClick={{onClick}} */}
                <p className="text-m font-medium">Notifiez-moi dès que je suis éligible</p>
                <p className="text-m font-medium">📆</p>
            </div>
            <Link className="text-sm text-purple-500" to="#">Je m'en rappelerai tout seul</Link>
        </>
    )
}

function VerifyVotingRights({ userData }) {
    // const [votingRights, setVotingRights] = useState({ hasVotingRights: true })

    return (
        <div className='bg-white text-center text-black'>
            <div className='flex-col p-8 space-y-8 justify-center'>
                <h1 className='text-2xl font-bold'>Jouissez-vous de vos droits politiques et électoraux ?</h1>
                <div className='flex space-x-4 justify-center'>
                    <CardButton icon="❌" label="Non" customStyle="secondary" onClick={() => onOptionSelected(false)} />
                    <CardButton icon="✅" label="Oui" customStyle="primary" onClick={() => onOptionSelected(false)} />
                </div>
            </div>
            <div className='flex-col space-y-2 mx-8'>
                <h2 className='text-lg font-medium'>Le saviez-vous ?</h2>
                <p className='text-sm'>Si vous hésitez, il est très probable que vous ne soyez pas concerné par une suspension de vos droits. Les droits politiques peuvent être suspendus dans les scénarios suivants...</p>
            </div>
            <LongCardButton />
        </div>
    )
}

export default VerifyVotingRights;