import Navbar from "../components/Navbar";
import Avatar from "../components/Avatar";
import ToggleRow from "../components/ToggleRow";
import ThresholdButton from "../components/ThresholdButton"; 
import TrackedFlightRow from "../components/TrackedFlightRow";
import AlertRow from "../components/AlertRow";
import Button from "../components/Button";




function DashboardPage(){
    return(
        <>
        <Navbar></Navbar>

        <div className="flex max-w-350 mx-auto p-20 gap-10 ">
            {/* --------------------------------------Card div -------------------------------------- */}
            <div className="w-80 border border-gray-800 self-start bg-surfaceColor rounded-3xl p-5">
                {/* User profile display info  */}
                <div className="flex gap-5 pb-8">
                    <Avatar name="Mango" />
                    
                    <div className="font-inter ">
                        <h1 className="text-gray-200 font-medium text-3xl ">Subeen</h1>
                        <h4 className="text-gray-500 font-medium text-sm">subeen@gmail.com</h4>
                    </div>
                </div>

                <div className="h-px bg-gray-800"></div>
                <h3 className="pt-4 text-gray-200 font-semibold pb-4">Alert Settings</h3>
                <ToggleRow title="Email alerts" description="Get an email when a tracked price drops" />
                <ToggleRow title="Weekly Summary" description="A Monday recap of every flight you track" />

                <div className="flex flex-col gap-1 pt-7 pb-8">
                    <h3 className=" text-gray-200 ">Alert me when a price drops by</h3>
                    <div className="grid grid-cols-3 gap-3 pt-3">
                        <ThresholdButton price="$10"/>
                        <ThresholdButton price="$25"/>
                        <ThresholdButton price="$50"/>
                    </div>
                    
                </div>
                <div className="h-px bg-gray-800"></div>
                <Button text="SignOut" variant="secondary" className="w-full mt-6"></Button>

            </div>

            {/* ----------------------------------------------------------------------------- */}
            {/* This is the div for the tracker table  */}
            <div className="flex flex-1 flex-col gap-4 min-w-0 ">
                <div className="grid grid-cols-2 items-center  font-inter pb-15 ">
                    <h2 className="text-gray-200 text-4xl font-semibold">Tracked Flights</h2>
                    <Button text="Track a new Flight" className="w-60 justify-self-end"></Button>
                </div>

                <div className="overflow-x-auto pb-10 scroll-dark">
                    {/* -------------------------------HeaderRow------------------------------- */}
                    <div className="min-w-250">
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


                    {/* ---------------------------------------------------------------------------- */}
                    <TrackedFlightRow flightNo="DL 1422" from="LAX" to="JFK" departs="Oct 8:35 AM" tracked="300" now="250" change="50" />
                    <TrackedFlightRow flightNo="DL 1422" from="LAX" to="JFK" departs="Oct 8:35 AM" tracked="300" now="250" change="50" />
                    
                    </div>
                </div>
                <div>
                <h2 className="text-white text-2xl font-inter py-3 font-semibold pt-10">Recent Alerts</h2>
                <AlertRow message="DL 1244 JFK to LAX dropped to $230" Timeago="2 hours ago"></AlertRow>
                <AlertRow message="DL 1244 JFK to LAX dropped to $230" Timeago="2 hours ago"></AlertRow>
                <AlertRow message="DL 1244 JFK to LAX dropped to $230" Timeago="2 hours ago"></AlertRow>
            </div>
            </div>

        </div>
        
        </>
    )
}

export default DashboardPage;