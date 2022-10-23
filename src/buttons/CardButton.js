function CardButton({ icon, label, style, onClick}) {
    return (
        <div className={`flex-col space-y-2 font-medium py-6 rounded-lg w-24 border-2 border-gray-200 
        ${style == 'primary' ? 'bg-purple-300' : 'bg-gray-200'} drop-shadow-lg`}
        onClick={{onClick}}>
            <p className="text-center">{icon}</p>
            <p className="text-center">{label}</p>
        </div>
    )
}

export default CardButton;