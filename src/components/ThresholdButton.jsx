function ThresholdButton({price, onClick, isSelected}){
    return(
        <>
            <button onClick={onClick} className={`transition-colors duration-300 w-full h-13 border border-gray-800 rounded-lg font-inter ${isSelected ? "text-gray-900" : " text-gray-400"} text-base font-medium cursor-pointer hover:bg-buttonBg hover:border-buttonBg hover:text-gray-900 hover:font-inter   ${isSelected ? "bg-buttonBg" : "bg-surfaceColor"}`} >${price}</button>

        </>
    )
}

export default ThresholdButton;