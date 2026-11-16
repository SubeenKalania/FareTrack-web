import Button from "./Button";
import FormField from "./FormField";
import { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";
import {airports} from "../data/mockData";


function findAirports(text){

  const cleanedText = text.toLowerCase().trim();
  return airports.filter((airport)=>{return airport.city.toLowerCase().includes(cleanedText)||airport.code.toLowerCase().includes(cleanedText)||airport.country.toLowerCase().includes(cleanedText)||airport.name.toLowerCase().includes(cleanedText)})

}


function FlightInputForm({onSearch}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFromOpen, setFromOpen]= useState(false);
  const [isToOpen, setToOpen]= useState(false);

  const fromRef= useRef(null);
  const toRef = useRef(null);
  const dateRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [fromError, setFromError]=useState("");
  const [toError, setToError]=useState(""); 
  
  const fromSuggestions = findAirports(from);
  const toSuggestions = findAirports(to);

  useEffect(()=>{
    function handleClickOutside(e){
      if(dateRef.current.contains(e.target)===false){
        setIsOpen(false);
      }
      if(fromRef.current.contains(e.target)===false){
        setFromOpen(false);
      }
       if(toRef.current.contains(e.target)===false){
        setToOpen(false);
      }
      
    };

    document.addEventListener("mousedown", handleClickOutside);

    return()=> {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div ref={fromRef} className="relative flex-1">
          <FormField 
          id="from-field" 
          label="FROM" 
          placeholder="JFK"
          value={from} 
          onChange={(e)=>setFrom(e.target.value)} 
          error={fromError} 
          onFocus={()=> setFromOpen(true)}/>

          {isFromOpen && (
            <div className="absolute top-full left-0 max-h-70 z-10 w-110  mt-2.5 p-3 bg-surfaceColor border border-gray-800 rounded-4xl flex flex-col gap-0.5 animate-dropdown shadow-[0px_1px_30px] shadow-buttonShadow/10 ">

              <div className="overflow-y-auto scroll-bar cursor-pointer pr-1">
                 {fromSuggestions.map((airport) => (
                <button type="button" key={airport.code}  className="group text-white flex hover:bg-white/3 cursor-pointer rounded-2xl items-center gap-3 w-full text-left px-3 py-2.5 transition-colors duration-200 ease-out">
                  <span className="group-hover:bg-accentColor/20 transition-colors duration-200 w-14 text-center shrink-0 py-1 rounded-lg font-mono text-lg tracking-wider font-bold  text-accentColor bg-accentColor/10">{airport.code}</span> 
                  <div className="flex flex-col">
                    <span className="text-lg font-inter font-medium">{airport.city}, {airport.country}</span>
                    <span className="text-xs text-gray-400 font-medium font-inter">{airport.name}</span>
                  </div>
                </button>
              ))}

              </div>
             
            </div>
          )}
        </div>
        
        <div ref={toRef} className="relative flex-1">
          <FormField 
          id="to-field" 
          label="TO" 
          placeholder="LAX" 
          value={to} 
          onChange={(e)=> setTo(e.target.value)} 
          error={toError} 
          onFocus={()=> setToOpen(true)}/>

          {isToOpen && (
            <div className="absolute top-full left-0 max-h-70 z-10 w-110 mt-1.5 p-3 bg-surfaceColor border border-gray-800 rounded-4xl flex flex-col gap-0.5  animate-dropdown shadow-[0px_1px_30px] shadow-buttonShadow/10">

              <div className="overflow-y-auto scroll-bar cursor-pointer pr-1">
                 {fromSuggestions.map((airport) => (
                <button type="button" key={airport.code}  className="group text-white flex hover:bg-white/3 cursor-pointer rounded-2xl items-center gap-3 w-full text-left px-3 py-2.5 transition-colors duration-200 ease-out">
                  <span className="group-hover:bg-accentColor/20 transition-colors duration-200 w-14 text-center shrink-0 py-1 rounded-lg font-mono text-lg tracking-wider font-bold  text-accentColor bg-accentColor/10">{airport.code}</span> 
                  <div className="flex flex-col">
                    <span className="text-lg font-inter font-medium">{airport.city}, {airport.country}</span>
                    <span className="text-xs text-gray-400 font-medium font-inter">{airport.name}</span>
                  </div>
                </button>
              ))}

              </div>
             
            </div>
          )}
        </div>
        
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
