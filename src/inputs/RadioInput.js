function RadioInput({ label, value, onChange, firstOption, secondOption }) {
    return (
        <div className="flex text-base justify-between items-center text-left">
        <span>{label}</span>
        <div className="flex space-x-4">
          <div className="flex">
            <input
              type="radio"
              id={firstOption.id}
              value={firstOption.value}
              checked={value === firstOption.value ? true : false}
              onChange={onChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label htmlFor={firstOption.id} className="ml-3 block text-sm font-medium text-gray-700">
              {firstOption.label}
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              id={secondOption.id}
              value={secondOption.value}
              checked={value === secondOption.value ? true : false}
              onChange={onChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label htmlFor={secondOption.id} className="ml-3 block text-sm font-medium text-gray-700">
              {secondOption.label}
            </label>
          </div>
        </div>
      </div>
    );
}

export default RadioInput;