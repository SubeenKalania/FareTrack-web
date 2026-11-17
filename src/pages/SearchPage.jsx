import { useState } from "react";
import { format } from "date-fns";
import InputForm from "../components/FlightInputForm";
import Navbar from "../components/Navbar";
import FlightRow from "../components/FlightRow";
import EmptyState from "../components/EmptyState";
import AuthModal from "../components/AuthModal";
import { flights, airports } from "../data/mockData";

const planeIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const planeSlashIcon = (
  <svg className="text-accentColor" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    <path d="M3 3l18 18" />
  </svg>
);

function SearchPage({ user, setUser }) {
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);

  const fromAirport =
    searchQuery === null
      ? null
      : airports.find((airport) => {
          return airport.code === searchQuery.from;
        });

  const toAirport =
    searchQuery === null
      ? null
      : airports.find((airport) => {
          return airport.code === searchQuery.to;
        });

  const results =
    searchQuery === null
      ? []
      : flights.filter((flight) => {
          return flight.from === searchQuery.from && flight.to === searchQuery.to;
        });

  return (
    <div className="min-h-screen bg-[radial-gradient(900px_420px_at_12%_-8%,rgba(30,240,220,0.08),transparent_70%),radial-gradient(760px_380px_at_92%_2%,rgba(242,196,109,0.07),transparent_70%)]">
      <Navbar
        user={user}
        onSignUpClick={() => {
          setShowAuth(true);
        }}
      />
      <div className="pl-15 pt-15 pr-15 max-w-350 mx-auto px-6">
        <h1 className="max-w-4xl text-white text-6xl font-inter font-semibold leading-[1.05] tracking-tight">
          Track flight prices <span className="text-accentColor">before you book.</span>
        </h1>
        <p className="pt-7 pb-15 text-[#8b92a0] text-xl font-inter font-light ">
          Search a route, save it, and we'll watch the price for you.
        </p>

        <InputForm
          onSearch={(from, to, date) => {
            setSearchQuery({ from, to, date });
          }}
        />

        <div
          key={searchQuery === null ? "none" : searchQuery.from + searchQuery.to}
          className="animate-dropdown"
        >
          <div className="font-inter pt-30 pb-6 flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white">Results</span>
              {searchQuery !== null && (
                <p className="text-[#8b92a0]">
                  {fromAirport.city} ({fromAirport.code}) → {toAirport.city} ({toAirport.code}) · {format(searchQuery.date, "EEE, MMM d")}
                </p>
              )}
            </div>
            {searchQuery !== null && (
              <span className="text-[#8b92a0]">
                {results.length === 1 ? "1 flight" : results.length + " flights"}
              </span>
            )}
          </div>

          <div>
            {searchQuery === null && (
              <EmptyState
                icon={planeIcon}
                title="Search a route to see flights"
                message="Pick where you're flying from and to, then press Search."
              />
            )}

            {searchQuery !== null && results.length === 0 && (
              <EmptyState
                icon={planeSlashIcon}
                title="No flights found"
                message={"We could not find any flights from " + fromAirport.city + " to " + toAirport.city + ". Try a different route or a nearby airport."}
              />
            )}

            {results.length > 0 && (
              <>
                <div className="grid grid-cols-[160px_200px_240px_100px_120px] justify-between text-left text-[#8b92a0] pt-4 border-b pb-6 border-[#2a303c]">
                  <div>Flight</div>
                  <div>Route</div>
                  <div>Time</div>
                  <div className="text-right">Price</div>
                  <div></div>
                </div>
                {results.map((flight) => (
                  <FlightRow
                    key={flight.id}
                    flightNo={flight.flightNo}
                    airline={flight.airline}
                    from={flight.from}
                    to={flight.to}
                    fromCity={fromAirport.city}
                    toCity={toAirport.city}
                    departTime={flight.departTime}
                    arriveTime={flight.arriveTime}
                    duration={flight.duration}
                    stops={flight.stops}
                    price={flight.price}
                    priceDrop={flight.priceDrop}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {showAuth && (
        <AuthModal
          onClose={() => {
            setShowAuth(false);
          }}
          onSuccess={(newUser) => {
            setUser(newUser);
          }}
        />
      )}
    </div>
  );
}

export default SearchPage;