function DateInput({name, label, placeholder}) {
    return (
        <div className="flex text-base justify-between space-x-2 text-left">
            <div className="flex">
                <label htmlFor="email-address" className="">
                    {label}
                </label>
            </div>
            <div className="flex">
                <input
                    id="date"
                    name="date"
                    type="date"
                    autoComplete="date"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default DateInput;