import FormField from "./FormField";
import { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

function DateField({selectedDate, onSelect}){
    const [isOpen, setIsOpen] = useState(false);
    const fieldRef = useRef(null);

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
  }, []);

    return(
        <div ref={fieldRef} className="relative flex-1">
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
                  onSelect(date);
                  setIsOpen(false);
                }}
              />
            </div>
          )}
        </div>
    )
}

export default DateField;