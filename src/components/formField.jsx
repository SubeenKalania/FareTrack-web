function FormField({id, label, placeholder, value, readOnly, onClick}){
    return(
        <>
         <div className='flex flex-col gap-1 flex-1' >
            <label htmlFor={id} className='text-formTextColor font-Inter font-light'>{label}</label>
            <input type="text" name="" id={id}  placeholder={placeholder} value={value} onClick={onClick} readOnly={readOnly} className='font-inter font-light text-white px-4 placeholder-mauve-500 caret-buttonBg h-12 border border-gray-800 rounded-md  outline-none focus:border-cyan-300 bg-bodyBg'/>
        </div>
        </>
    )
}

export default FormField;