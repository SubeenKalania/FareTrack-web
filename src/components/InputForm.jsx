import Button from "./Button";
import FormField from "./FormField";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

function InputForm({ id, label, placeholder, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelctedDate] = useState(new Date());
  return (
    <>
      <div className=" flex flex-col md:flex-row gap-2 bg-surfaceColor p-4 rounded-md border border-gray-800">
        <FormField id="from-field" label="FROM" placeholder="JFK" />
        <FormField id="to-field" label="TO" placeholder="LAX" />
        <div className="relative flex-1">
          <FormField
            id="date-field"
            label="DATE"
            placeholder="OCT 14"
            value={format(selectedDate, "MMM d")}
            onClick={() => setIsOpen(true)}
            readOnly={true}
          />
          {isOpen && (
            <div className=" text-white absolute top-full left-0 m-2 z-10 bg-surfaceColor border border-gray-800 shadow-[0px_1px_30px] shadow-buttonShadow/10 rounded-md p-2 "> 
            <DayPicker
              mode="single"
              disabled={{ before: new Date()}}
              style={{ "--rdp-accent-color": "var(--color-buttonBg)" }}
              required
              selected={selectedDate}
              onSelect={(date) => {
                setSelctedDate(date);
                setIsOpen(false);
              }}
            />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <span className="invisible text-sm">s</span>
          <Button text="Search" variant="primary" />
        </div>
      </div>
    </>
  );
}

export default InputForm;
