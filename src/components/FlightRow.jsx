import { useState } from "react";
import Button from "./Button";

function FlightRow({ flightNo, airline, from, to, fromCity, toCity, departTime, arriveTime, duration, stops, price, priceDrop }) {
  const [isTracking, setIsTracking] = useState(false);

  return (
    <div className="items-center grid grid-cols-[160px_200px_240px_100px_120px] justify-between text-left text-gray-500 pt-5 border-b pb-5 border-gray-600">
      <div className="flex flex-col">
        <span className="font-mono text-lg text-white">{flightNo}</span>
        <span className="text-sm">{airline}</span>
      </div>

      <div className="flex flex-col">
        <div className="font-mono text-lg">
          <span className="text-white font-semibold">{from}</span>{" "}
          <span>→</span>{" "}
          <span className="text-white font-semibold">{to}</span>
        </div>
        <span className="text-sm">{fromCity} to {toCity}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-lg text-white">{departTime} → {arriveTime}</span>
        <span className="text-sm">{duration} · {stops === 0 ? "Nonstop" : stops + " stop"}</span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-white font-semibold text-lg">${price}</span>
        {priceDrop > 0 && (
          <span className="text-emerald-400 font-semibold text-sm">↓ ${priceDrop} Today</span>
        )}
      </div>

      <div className="flex justify-end">
        {isTracking ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-buttonBg animate-pulse"></div>
            <span className="text-buttonBg">Tracking</span>
          </div>
        ) : (
          <Button text="Track" variant="secondary" onClick={() => setIsTracking(true)} />
        )}
      </div>
    </div>
  );
}

export default FlightRow;