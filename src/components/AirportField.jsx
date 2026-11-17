import FormField from "./FormField";
import { useState, useEffect, useRef } from "react";
import {airports} from "../data/mockData";
import AirportOption from "./AirportOption";


function findAirports(text){

  const cleanedText = text.toLowerCase().trim();
  return airports.filter((airport)=>{return airport.city.toLowerCase().includes(cleanedText)||airport.code.toLowerCase().includes(cleanedText)||airport.country.toLowerCase().includes(cleanedText)||airport.name.toLowerCase().includes(cleanedText)})

}

function AirportField({label, id, placeholder, value, onChange, error, onPick, code}){
    const[isOpen, setIsOpen]=useState(false);
    const fieldRef = useRef(null);
    const suggestions =findAirports(value);

  


    useEffect(()=>{
    function handleClickOutside(e){
      if(fieldRef.current.contains(e.target)===false){
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return()=> {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    },[]);


    return(
        <div ref={fieldRef} className="relative flex-1">
          <FormField 
          id={id} 
          label={label}
          placeholder={placeholder}
          value={value} 
          onChange={onChange} 
          error={error} 
          onFocus={()=> setIsOpen(true)}/>

          {isOpen && code==="" && (
            <div className="absolute top-full left-0 max-h-70 z-10 w-110  mt-2.5 p-3 bg-surfaceColor border border-gray-800 rounded-4xl flex flex-col gap-0.5 animate-dropdown shadow-[0px_1px_30px] shadow-buttonShadow/10 " >

              <div className="overflow-y-auto scroll-bar cursor-pointer pr-1">
                {suggestions.length === 0 && (
                    <p className="px-3 py-2.5 text-gray-400"> No airports matched</p>
                )}
                {suggestions.map((airport) => (
               <AirportOption 
               key={airport.code}
               airport={airport}
               onPick={(picked) => {
                onPick(picked);
                setIsOpen(false);
               }} />

              ))}

              </div>
             
            </div>
          )}
        </div>
    )

}

export default AirportField;