function ThresholdButton({price}){
    return(
        <>
            <button className="w-full h-13 border border-gray-800 rounded-lg font-inter text-gray-400 text-md font-medium cursor-pointer hover:bg-buttonBg hover:border-buttonBg hover:text-gray-900 hover:font-inter" >{price}</button>

        </>
    )
}

export default ThresholdButton;