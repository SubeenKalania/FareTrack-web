function Button({text, variant ="primary", onClick}){

    const styles ={
        primary:"items-center justify-center shadow-[0px_1px_30px] shadow-buttonShadow/30 text-black hover:text-black bg-buttonBg hover:bg-buttonHoverBg hover:shadow-buttonShadow/50 rounded-xl px-4 py-3   active:translate-y-1  active:shadow-sm active:bg-buttonBg font-semibold",
        secondary : "border border-gray-600 px-4 hover:border-buttonBg hover:text-buttonBg h-10 rounded-xl text-gray-400"
    }
    return (
     <>
     <button onClick={onClick} className={`cursor-pointer transition duration-200 ${styles[variant]}`}>{text}</button>
     </>

     )
     
}
export default Button;

