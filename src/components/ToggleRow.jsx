import { useState } from "react";

function ToggleRow({title ,description}){
    const [isToggled, setToggle] = useState(false);
    return(
        <>
        <div className="py-2 flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1 ">
                <h3 className=" text-gray-200 ">{title}</h3>
                <h4 className="text-gray-500 font-medium text-sm">{description}</h4>
            </div>
            <button onClick={()=> {setToggle(isToggled ? false : true)}} className={` ${isToggled ? "bg-buttonBg" : "bg-gray-800"} transition-colors duration-300 relative w-15 h-8 rounded-full shrink-0 cursor-pointer border border-transparent`}>
                <span className={`transition-all duration-300 absolute h-5 w-5 rounded-full ${isToggled ? "bg-bodyBg":"bg-gray-500"} top-[5px] ${isToggled ? "left-8.5" : "left-1" }`}></span>
            </button>
        </div>
        </>
    )
}

export default ToggleRow;