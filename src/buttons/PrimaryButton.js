function PrimaryButton({ type, label, onClick }) {
    return (
        <button
            type={type}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base md:text-lg font-medium rounded-md 
            text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default PrimaryButton;