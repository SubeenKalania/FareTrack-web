import Button from "./Button"


function Navbar({onSignUpClick}){
    return(
        
    <>
        <div className="border border-b-gray-800 flex items-center justify-between p-5">
            <div>
                <span className="font-semibold text-2xl text-white">fare</span><span className="text-2xl font-semibold text-buttonHoverBg">track</span>
             </div> 
             <Button text="Sign up" variant="secondary" onClick={onSignUpClick}/>
        </div>
    </>
    )
}

export default Navbar;