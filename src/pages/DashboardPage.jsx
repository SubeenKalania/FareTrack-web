import Navbar from "../components/Navbar";
import Button from "../components/Button";

function DashboardPage(){
    return(
        <>
        <Navbar></Navbar>

        <div className="flex max-w-350 mx-auto p-20 gap-10 ">
            {/* Card div */}
            <div className="w-80 border border-gray-800 self-start bg-surfaceColor rounded-3xl p-5">
                {/* User profile display info  */}
                <div className="flex gap-5 pb-8">
                    <div className="w-20 h-20 rounded-full bg-bodyBg flex items-center justify-center font-bold text-4xl  text-cyan-400 font-inter border border-gray-800">
                        S
                    </div>
                    <div className="font-inter ">
                        <h1 className="text-gray-200 font-medium text-3xl ">Subeen</h1>
                        <h4 className="text-gray-500 font-medium text-sm">subeen@gmail.com</h4>
                    </div>
                </div>

                <div className="h-px bg-gray-800"></div>
                <h3 className="pt-4 text-gray-200 font-semibold pb-4">Alert Settings</h3>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1 ">
                        <h3 className=" text-gray-200 ">Email alerts</h3>
                        <h4 className="text-gray-500 font-medium text-sm">Get an email when the tracked price drops</h4>
                    </div>
                    <button className="bg-gray-800 relative w-15 h-8 rounded-full shrink-0 cursor-pointer border border-transparent hover:border-cyan-400">
                        <span className="absolute h-5 w-5 rounded-full bg-gray-500 top-[5px] left-1"></span>
                    </button>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4">
                    <div className="flex flex-col gap-1 ">
                        <h3 className=" text-gray-200 ">Weekly Summary</h3>
                        <h4 className="text-gray-500 font-medium text-sm">A Monday recap of every flight you track</h4>
                    </div>
                    <button className="bg-gray-800 relative w-15 h-8 rounded-full shrink-0 cursor-pointer border border-transparent hover:border-cyan-400">
                        <span className="absolute h-5 w-5 rounded-full bg-gray-500 top-[5px] left-1"></span>
                    </button>
                </div>
                <div className="flex flex-col gap-1 pt-7 pb-8">
                    <h3 className=" text-gray-200 ">Alert me when a price drops by</h3>
                    <div className="grid grid-cols-3 gap-3 pt-3">
                        <button className="w-full h-13 border border-gray-800 rounded-lg font-inter text-gray-400 text-sm cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter" >$10</button>
                        <button className="w-full h-13 border border-gray-800 rounded-lg font-inter text-gray-400 text-sm cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter " >$25</button>
                        <button className="w-full h-13 border border-gray-800 rounded-lg font-inter text-gray-400 text-sm cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter " >$50</button>
                    </div>
                    
                </div>
                <div className="h-px bg-gray-800"></div>

                <button className="mt-6 w-full h-15 border border-gray-800 rounded-xl font-inter text-gray-400 text-sm cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter" >Sign Out</button>
            </div>
            {/* This is the div for the tracker table  */}
            <div className="flex flex-1 flex-col gap-4 min-w-0 ">
                <div className="grid grid-cols-2 items-center  font-inter pb-15 ">
                    <h2 className="text-gray-200 text-4xl font-semibold">Tracked Flights</h2>
                    <button className="w-50 h-15 rounded-xl justify-self-end font-semibold text-gray-900 cursor-pointer hover:shadow-[0px_2px_20px] hover:shadow-buttonShadow/100 bg-cyan-400">Track a new flight</button>
                </div>

                <div className="overflow-x-auto pb-10 scroll-dark">
                    <div className="min-w-[1000px]">
                        <div className="gap-8 py-5 grid grid-cols-[1fr_1.5fr_2fr_1fr_1fr_2fr_160px] items-center font-inter text-gray-600" >
                        <div>Flight</div>
                        <div>Route</div>
                        <div>Departs</div>
                        <div className="text-right">Tracked</div>
                        <div className="text-right">Now</div>
                        <div>Change</div>
                        <div></div>
                    </div>
                    <div className="h-px bg-gray-900"></div>
                    <div className="gap-8 py-5 grid grid-cols-[1fr_1.5fr_2fr_1fr_1fr_2fr_160px] items-center font-inter text-gray-400 text-lg" >
                        <div>DL 1442</div>
                        <div>
                            <span className="text-gray-200 font-semibold">JFK</span>{" "}
                            <span>→</span>{" "}
                            <span className="text-gray-200 font-semibold">LAX</span>
                        </div>
                        <div>Oct 24, 8:45 AM</div>
                        <div className="text-right">$256</div>
                        <div className="text-right text-gray-200">$230</div>
                        <div><span className="text-emerald-400">↓ $12 Today</span></div>
                        <div className="flex justify-end"><Button text="Stop Tracking" variant="secondary"/></div>
                    </div>
                    <div className="h-px bg-gray-900"></div>
                        </div>
                </div>
                <div>
                <h2 className="text-white text-2xl font-inter py-3 font-semibold pt-10">Recent Alerts</h2>
                <div className="flex items-center justify-between py-5">
                    <p className="text-gray-300 text-lg font-inter">DL 1244 JFK to LAX dropped to $230</p>
                    <p className="text-gray-500 text-md ">2 hours ago</p>
                </div>
                <div className="h-px bg-gray-900"></div>
                <div className="flex items-center justify-between py-5">
                    <p className="text-gray-300 text-lg font-inter">DL 1244 JFK to LAX dropped to $230</p>
                    <p className="text-gray-500 text-md ">2 hours ago</p>
                </div>
                <div className="h-px bg-gray-900"></div>
                <div className="flex items-center justify-between py-5">
                    <p className="text-gray-300 text-lg font-inter">DL 1244 JFK to LAX dropped to $230</p>
                    <p className="text-gray-500 text-md ">2 hours ago</p>
                </div>
                <div className="h-px bg-gray-900"></div>
            </div>
            </div>

        </div>
        
        </>
    )
}

export default DashboardPage;