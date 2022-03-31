function TextInput({ value, label, name, type, onChange, placeholder }) {
    return (
        <div className="flex align-middle justify-between space-x-2 columns-6">
            <div className="col-span-2">
                <label htmlFor="email-address" className="text-base">
                    {label}
                </label>
            </div>
            <div className="col-span-4">
                <input
                    id="email-address"
                    name={name}
                    type={type}
                    value={value}
                    autoComplete={type}
                    onChange={onChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default TextInput;