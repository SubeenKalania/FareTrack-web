function AirportOption({airport, onPick}){
    return(
        <button type="button" className="group text-white flex hover:bg-white/3 cursor-pointer rounded-2xl items-center gap-3 w-full text-left px-3 py-2.5 transition-colors duration-200 ease-out" onClick={()=> { onPick(airport);}}>
                  <span className="group-hover:bg-accentColor/20 transition-colors duration-200 w-14 text-center shrink-0 py-1 rounded-lg font-mono text-lg tracking-wider font-bold  text-accentColor bg-accentColor/10">{airport.code}</span> 
                  <div className="flex flex-col">
                    <span className="text-lg font-inter font-medium">{airport.city}, {airport.country}</span>
                    <span className="text-xs text-gray-400 font-medium font-inter">{airport.name}</span>
                  </div>
        </button>
    )
}

export default AirportOption;