function ProcessHeader({ processName, currentStep, maxStep }) {
    return (
        <div>

            <div className="flex-row">
                <span>pnyx</span>
                <span className="text-xs">{processName}</span>
                <span>{currentStep}/{maxStep}</span>
            </div>
            <div className='flex-row space-y-2 w-full '>
                <div className='flex justify-between space-x-8 w-full px-2 m-auto'>
                    <span className='text-xl font-bold text-indigo-500'>pnyx</span>
                    <span className='text-xs font-bold'>{processName}</span>
                    <span className='text-xs font-bold text-indigo-300'>{currentStep}/{maxStep}</span>
                </div>
            </div>
            <div class="inset-0 flex items-center">
                <div class="w-24 border-b border-2 border-indigo-500"></div>
                <div class="w-full border-b border-2 border-gray-100"></div>
            </div>
        </div>
    )
}

export default ProcessHeader;