import Button from "./Button"

function TrackedFlightRow({flightNo,from,to,departs,tracked,now, change}){
    return(
        <>
        <div className="gap-8 py-5 grid grid-cols-[1fr_1.5fr_2fr_1fr_1fr_2fr_160px] items-center font-inter text-gray-400 text-lg" >
                        <div>{flightNo}</div>
                        <div>
                            <span className="text-gray-200 font-semibold">{from}</span>{" "}
                            <span>→</span>{" "}
                            <span className="text-gray-200 font-semibold">{to}</span>
                        </div>
                        <div>{departs}</div>
                        <div className="text-right">${tracked}</div>
                        <div className="text-right text-gray-200">${now}</div>
                        <div><span className="text-emerald-400">↓ ${change}</span></div>
                        <div className="flex justify-end"><Button text="Stop Tracking" variant="secondary"/></div>
                    </div>
                    <div className="h-px bg-gray-900"></div>
        </>
    )
}

export default TrackedFlightRow;
