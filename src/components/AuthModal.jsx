import Button from "./Button";
import FormField from "./FormField";
import { useState } from "react";

function AuthModal({onClose}) {

  const[isSignUp, setSignUp]=useState(false)
  const[isClosing, setIsClosing]=useState(false);
  return (
    <>
      {/* blur backdrop */}
      <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full z-50 bg-cyan/50 backdrop-blur-xs">
        {/* Signup card div */}
        <div className={`p-4 flex justify-center items-left flex-col h-150 w-140 ${isClosing ? "animate-popOut" : "animate-pop"} bg-surfaceColor rounded-4xl border border-gray-800 shadow-[0px_10px_30px] shadow-buttonShadow/10`}
        onAnimationEnd = {()=> {
          if(isClosing){
            onClose();
          }
        }}
        >
          <div className="flex justify-between items-start px-11">
            <div className="flex flex-col gap-2 ">
              <h2 className="font-inter text-white font-semibold text-4xl">
                {" "}
                {isSignUp ? "Create your account" : "Welcome Back"}
              </h2>
              <p className="font-inter text-gray-700 font-light text-l">
                Track prices and get alerts when they drop
              </p>
            </div>
            <Button text="✕" variant="secondary" onClick={()=>{setIsClosing(true)}}></Button>
          </div>

          {/* form fields and buttons */}
          <div className="w-full flex flex-col px-10 gap-6 pt-5 text-gray-700">
           {isSignUp && <FormField id="name" label={"NAME"} placeholder={"Your Name"} />}
           
            <FormField
              id="email"
              label={"EMAIL"}
              placeholder={"you@example.com"}
            />
            <FormField
              id="password"
              label={"PASSWORD"}
              placeholder={"At least 8 characters"}
            />
            <Button text={isSignUp ? "Create account" : "Sign In"} variant="primary">
              Create account
            </Button>
            <div className="flex items-center justify-center">
              <span className="font-inter font-light text-l pt-2 pl-7 text-gray-500 font-light">
                {isSignUp ? "Already have an account?" : "New here?"}
              </span>
              <span>
                <button className="font-inter font-light text-l pt-2 pl-2 text-cyan-400 cursor-pointer hover:text-cyan-300" onClick={()=> setSignUp(isSignUp ? false : true)}>
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthModal;