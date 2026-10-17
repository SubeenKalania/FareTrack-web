function Avatar({name}){

    const initial = name.charAt(0).toUpperCase();
    return(
        <>
        <div className="w-20 h-20 rounded-full bg-bodyBg flex items-center justify-center font-bold text-4xl  text-cyan-400 font-inter border border-gray-800">
            {initial}
        </div>
        </>
    )
}

export default Avatar;