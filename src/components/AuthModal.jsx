import Button from "./Button";
import FormField from "./FormField";
import { useState } from "react";
import { useNavigate } from "react-router";

function AuthModal({ onClose, onSuccess }) {
  const [isSignUp, setSignUp] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    let isValid = true;
    setEmailError("");
    setNameError("");
    setPasswordError("");

    if (isSignUp && fullName.trim() === "") {
      setNameError("Enter your name");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Enter your email");
      isValid = false;
    }

    if (password === "") {
      setPasswordError("Enter your password");
      isValid = false;
    } else if (isSignUp && password.length < 8) {
      setPasswordError("Use at least 8 characters");
      isValid = false;
    } else if (isSignUp && /[A-Z]/.test(password) === false) {
      setPasswordError("Add an uppercase letter");
      isValid = false;
    } else if (isSignUp && /[a-z]/.test(password) === false) {
      setPasswordError("Add a lowercase letter");
      isValid = false;
    } else if (isSignUp && /[0-9]/.test(password) === false) {
      setPasswordError("Add a number");
      isValid = false;
    } else if (isSignUp && /[^A-Za-z0-9]/.test(password) === false) {
      setPasswordError("Add a special character");
      isValid = false;
    }

    if (isValid) {
      onSuccess({ name: isSignUp ? fullName : email, email: email });
      navigate("/dashboard");
    }
  }

  return (
    <>
      {/* blur backdrop */}
      <div onClick={()=> {setIsClosing(true);}} className="flex items-center justify-center fixed top-0 left-0 w-full h-full z-50 bg-black/50 backdrop-blur-xs">
        {/* Signup card div */}
        <div
          onClick={(e)=> {e.stopPropagation();}}
          className={`p-4 flex justify-center items-start flex-col h-150 w-140 ${isClosing ? "animate-popOut" : "animate-pop"} bg-surfaceColor rounded-4xl border border-gray-800 shadow-[0px_10px_80px] shadow-buttonShadow/10`}
          onAnimationEnd={() => {
            if (isClosing) {
              onClose();
            }
          }}
        >
          <div className="flex justify-between items-start px-11">
            <div className="flex flex-col gap-2 ">
              <h2 className="font-inter text-white font-semibold text-4xl">
                {isSignUp ? "Create your account" : "Welcome Back"}
              </h2>
              <p className="font-inter text-gray-700 font-light text-lg">
                Track prices and get alerts when they drop
              </p>
            </div>
            <Button
              text="✕"
              variant="secondary"
              onClick={() => {
                setIsClosing(true);
              }}
            ></Button>
          </div>

          {/* form fields and buttons */}
          <div className="w-full flex flex-col px-10 gap-6 pt-5 text-gray-700">
            {isSignUp && (
              <FormField
                id="name"
                label={"NAME"}
                placeholder={"Your Name"}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={nameError}
              />
            )}

            <FormField
              id="email"
              label={"EMAIL"}
              placeholder={"you@example.com"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            <FormField
              id="password"
              label={"PASSWORD"}
              placeholder={"At least 8 characters"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />
            <Button
              text={isSignUp ? "Create account" : "Sign In"}
              variant="primary"
              onClick={handleSubmit}
            />
            <div className="flex items-center justify-center">
              <span className="font-inter font-light text-lg pt-2 pl-7 text-gray-500">
                {isSignUp ? "Already have an account?" : "New here?"}
              </span>
              <span>
                <button
                  className="font-inter font-light text-lg pt-2 pl-2 text-cyan-400 cursor-pointer hover:text-cyan-300"
                  onClick={() => {
                    setSignUp(isSignUp ? false : true);
                    setNameError("");
                    setEmailError("");
                    setPasswordError("");
                    setPassword("");
                  }}
                >
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
