import CardButton from "../../buttons/CardButton";

function VerifyAge() {
    return (
        <div className='bg-white text-center text-black'>
            <div className='flex-col p-8 space-y-8 justify-center'>
                <h1 className='text-2xl font-bold'>Êtes-vous majeur ?</h1>
                <div className='flex space-x-4 justify-center'>
                    <CardButton icon="🐣" label="Non" customStyle="secondary" />
                    <CardButton icon="🐓" label="Oui" customStyle="primary" />
                </div>
            </div>
            <div className='flex-col space-y-2'>
                <h2 className='text-lg font-medium'>Le saviez-vous ?</h2>
                <p className='text-sm'>La majorité est un concept qui a été introduit en... En France, on devient un adulte majeur le jour de ses 18 ans.</p>
            </div>
        </div>
    )
}

export default VerifyAge;