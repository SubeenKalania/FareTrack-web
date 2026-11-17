import Button from "./Button";
import FormField from "./FormField";
import { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

import AirportField from "./AirportField";



function FlightInputForm({onSearch}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const dateRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromError, setFromError]=useState("");
  const [toError, setToError]=useState(""); 
  

  useEffect(()=>{
    function handleClickOutside(e){
      if(dateRef.current.contains(e.target)===false){
        setIsOpen(false);
      }
      
    };

    document.addEventListener("mousedown", handleClickOutside);

    return()=> {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  /*--------------------Validating the inputs in the form-----------------------*/ 
  function handleSearch(){
    let isValid=true;
     setFromError("");
     setToError("");


     if(from.trim()===""){
      setFromError("Enter a departure city or airport");
      isValid=false;
    }else if(/^[A-Za-z ]+$/.test(from)===false){
      setFromError("Use only letters");
      isValid=false;
     }
     
     if(to.trim()===""){
      setToError("Enter an arrival city or airport");
      isValid=false;
     }else if(/^[A-Za-z ]+$/.test(to)===false){
      setToError("Use only letters");
      isValid=false;
     }

     if(isValid){
      console.log(from,to,selectedDate);
     }
  }


  return (
    <>
      <div className=" flex flex-col md:flex-row gap-2 bg-surfaceColor p-7 rounded-3xl border border-gray-800">
        <AirportField
        label="From"
        id="from"
        placeholder="City, country, or airport"
        value={from}
        onChange={(e)=> setFrom(e.target.value)}
        error={fromError}
        onPick={(airport=>setFrom(airport.code + " "+ airport.city))}
        />
        
        <AirportField 
        label="To"
        id="to"
        placeholder="City, country, or airport"
        value={to}
        onChange={(e)=> setTo(e.target.value)}
        error={toError}
        onPick={(airport=>setTo(airport.code + " "+ airport.city))}
        />

        <div ref={dateRef} className="relative flex-1">
          <FormField
            id="date-field"
            label="DATE"
            placeholder="Pick a Date"
            value={format(selectedDate, "MMM d")}
            onClick={() => setIsOpen(true)}
            readOnly={true}
          />
          {isOpen && (
            <div className=" text-white absolute top-full left-0 m-2 z-10 bg-surfaceColor border border-gray-800 shadow-[0px_1px_30px] shadow-buttonShadow/10 rounded-3xl p-5  animate-dropdown">
              <DayPicker
                mode="single"
                disabled={{ before: new Date() }}
                style={{ "--rdp-accent-color": "var(--color-accentColor)" }}
                required
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setIsOpen(false);
                }}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <span className="invisible text-sm">s</span>
          <Button text="Search" variant="primary" onClick={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default FlightInputForm;
