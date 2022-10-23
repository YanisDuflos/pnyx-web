import CardButton from "../../buttons/CardButton";

function VerifyNationality() {
    return (
        <div className='bg-white text-center text-black'>
            <div className='flex-col p-8 space-y-8 justify-center'>
                <h1 className='text-2xl font-bold'>Avez-vous la nationalité française ?</h1>
                <div className='flex space-x-4 justify-center'>
                    <CardButton icon="🌍" label="Non" customStyle="secondary" href="/v2/verifyVotingRights" />
                    <CardButton icon="🇫🇷" label="Oui" customStyle="primary" href="/v2/verifyVotingRights"/>
                </div>
            </div>
            <div className='flex-col space-y-2'>
                <h2 className='text-lg font-medium'>Le saviez-vous ?</h2>
                <p className='text-sm'>Le concept de nationalité a été inventé en...</p>
            </div>
        </div>
    )
}

export default VerifyNationality;