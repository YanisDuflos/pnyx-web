function CheckboxInput({ label, value, onChange, subtitle, option }) {
  return (
    <div className="flex items-start text-left justify-between">
      <div className="text-base">
        <label htmlFor={option.name} className="font-medium text-gray-700">
          {label}
        </label>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      <div className="flex items-center h-5">
        <input
          id={option.id}
          name={option.name}
          key={value}
          checked={value}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default CheckboxInput;