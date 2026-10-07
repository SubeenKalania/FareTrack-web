import Button from "./components/Button";
import FormField from "./components/formField";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import FlightRow from "./components/FlightRow";

function App() {
  return (
    <>
      <Navbar />
      {/* blur backdrop */}
      <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full z-50 bg-cyan/50 backdrop-blur-xs">
        {/* Signup card div */}
        <div className=" p-4 flex justify-center items-left flex-col h-150 w-140 bg-surfaceColor rounded-4xl border border-gray-800 shadow-[0px_10px_30px] shadow-buttonShadow/10">
          <div className="flex justify-between items-start px-11">
            <div className="flex flex-col gap-2 ">
              <h2 className="font-inter text-white font-semibold text-4xl">
                {" "}
                Create your account
              </h2>
              <p className="font-inter text-gray-700 font-light text-l">
                Track prices and get alerts when they drop
              </p>
            </div>
            <Button text="✕" variant="secondary"></Button>
          </div>

          {/* form fields and buttons */}
          <div className="w-full flex flex-col px-10 gap-6 pt-5 text-gray-700">
            <FormField id="name" label={"NAME"} placeholder={"Your Name"} />
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
            <Button text="Create account" variant="primary">
              Create account
            </Button>
            <div className="flex items-center justify-center">
              <span className="font-inter font-light text-l pt-2 pl-7 text-gray-500 font-light">
                Already have an account?
              </span>
              <span>
                <button className="font-inter font-light text-l pt-2 pl-2 text-cyan-400 cursor-pointer hover:text-cyan-300">
                  Sign in
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
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
