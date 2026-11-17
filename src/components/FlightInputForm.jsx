import Button from "./Button";
import { useState } from "react";
import DateField from "./DateField.jsx";
import AirportField from "./AirportField.jsx";

function FlightInputForm({ onSearch }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromError, setFromError] = useState("");
  const [toError, setToError] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");

  function handleSearch() {
    let isValid = true;
    setFromError("");
    setToError("");

    if (from.trim() === "") {
      setFromError("Enter a departure city or airport");
      isValid = false;
    } else if (/^[A-Za-z ]+$/.test(from) === false) {
      setFromError("Use only letters");
      isValid = false;
    } else if (fromCode === "") {
      setFromError("Pick an airport from the list");
      isValid = false;
    }

    if (to.trim() === "") {
      setToError("Enter an arrival city or airport");
      isValid = false;
    } else if (/^[A-Za-z ]+$/.test(to) === false) {
      setToError("Use only letters");
      isValid = false;
    } else if (toCode === "") {
      setToError("Pick an airport from the list");
      isValid = false;
    }

    if (isValid) {
      onSearch(fromCode, toCode, selectedDate);
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
          onChange={(e) => {
            setFromCode("");
            setFrom(e.target.value);
          }}
          error={fromError}
          code={fromCode}
          onPick={(airport) => {
            setFrom(airport.code + " " + airport.city);
            setFromCode(airport.code);
          }}
        />

        <AirportField
          label="To"
          id="to"
          placeholder="City, country, or airport"
          value={to}
          onChange={(e) => {
            setToCode("");
            setTo(e.target.value);
          }}
          error={toError}
          code={toCode}
          onPick={(airport) => {
            setTo(airport.code + " " + airport.city);
            setToCode(airport.code);
          }}
        />

        <DateField
          selectedDate={selectedDate}
          onSelect={(date) => setSelectedDate(date)}
        />

        <div className="flex flex-col gap-1 justify-center">
          <span className="invisible text-sm">s</span>
          <Button text="Search" variant="primary" onClick={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default FlightInputForm;