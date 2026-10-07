import {useState} from "react";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import FlightRow from "./components/FlightRow";
import AuthModal from "./components/AuthModal";

function App() {
  const [showAuth, setShowAuth]= useState(false);
  return (
    <>
      <Navbar onSignUpClick={()=>{setShowAuth(true)}} />
      {showAuth && <AuthModal onClose={()=> {setShowAuth(false)}}/>}

      <div className="pl-15 pt-15 pr-15 max-w-350 mx-auto px-6">
        <h1 className="max-w-4xl text-white text-6xl font-inter font-semibold ">
          Track flight prices before you book.
        </h1>
        <p className="pt-7 pb-15 text-gray-500 text-xl font-inter font-light ">
          Search a route, save it, and we'll watch the price for you.
        </p>
        <InputForm />

        <div className="text-gray-600 font-inter font-light pt-30 flex justify-between">
          <span className="text-xl font-semibold">RESULTS</span>
          <span>6 flights</span>
        </div>

        <div>
          <div className="grid grid-cols-[100px_180px_100px_80px_180px] justify-between text-left text-gray-500 pt-10 border-b pb-10 border-gray-600">
            <div>FLT</div>
            <div>ROUTE</div>
            <div>TIME</div>
            <div className="text-right">PRICE</div>
            <div></div>
          </div>
          <FlightRow
            flightNo="DL 1422"
            from="LAX"
            to="JFK"
            time="8:45 AM"
            price="234"
            priceDropped={true}
          />
          <FlightRow
            flightNo="RX 2192"
            from="JFK"
            to="LAX"
            time="10:45 AM"
            price="300"
            priceDropped={false}
          />
        </div>
      </div>
    </>
  );
}

export default App;
