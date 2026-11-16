function FormField({ error, id, label, placeholder, value, readOnly, onClick, type="text", onChange}) {
  return (
    <>
      <div className="flex flex-col gap-1 flex-1">
        <label
          htmlFor={id}
          className="text-formTextColor font-inter font-light"
        >
          {label}
        </label>
        <input
          name=""
          id={id}
          placeholder={placeholder}
          value={value}
          onClick={onClick}
          readOnly={readOnly}
          type={type}
          onChange={onChange}
          className="font-inter font-light text-white px-4 placeholder-mauve-500 caret-buttonBg h-12 border border-gray-800 rounded-2xl  outline-none focus:border-cyan-300 bg-bodyBg"
        />
        {error && <p className="text-red-400 text-sm font-inter">{error}</p>}
      </div>
    </>
  );
}

export default FormField;
