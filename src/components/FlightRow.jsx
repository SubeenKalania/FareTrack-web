import {useState} from 'react';
import Button from './Button';




function FlightRow({flightNo, from, to, time, price, priceDropped}){
  const [isTracking, setIsTracking]=useState(false);


    return(

        <>
         <div className="items-center text-mono text-xl grid grid-cols-[100px_180px_100px_80px_180px] justify-between text-left text-gray-500 pt-5 border-b pb-5 border-gray-600">
            <div>{flightNo}</div>
            <div>
              <span className="text-white font-semibold">{from}</span>{" "}
              <span>→</span>{" "}
              <span className="text-white font-semibold">{to}</span>
            </div>
            <div>{time}</div>
            <div className=" flex flex-col items-end">
              <span className="text-white font-semibold text-right">${price}</span>
              {priceDropped && (
                <span className="text-emerald-400 font-semibold text-right text-sm">↓ $12 Today</span>
              )}
              
            </div>
            <div>
              {isTracking ? (
                <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-buttonBg animate-pulse text-buttonBg"></div>
              <span className="text-buttonBg">Tracking</span>
            </div>
              ) :(
                <Button text="Track" variant="secondary" onClick={()=> setIsTracking(true)} />
              )}
              </div>
            </div>
        </>
        
    )
}

export default FlightRow;