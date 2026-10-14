import Navbar from "../components/Navbar";

function DashboardPage(){
    return(
        <>
        <Navbar></Navbar>

        <div className="flex gap-10 p-10">
            {/* Card div */}
            <div className="w-80 border border-gray-800 h-150 bg-surfaceColor rounded-3xl p-5">
                {/* User profile display info  */}
                <div className="flex gap-5 pb-8">
                    <div className="w-20 h-20 rounded-full bg-bodyBg flex items-center justify-center font-bold text-4xl text-cyan-400 font-inter border border-gray-800">
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
                <div className="flex flex-col gap-1 pt-7 pb-10">
                    <h3 className=" text-gray-200 ">Alert me when a price drops by</h3>
                    <div className="grid grid-cols-3 gap-3">
                            <button className="w-full h-8 border border-gray-800 rounded-lg font-inter text-gray-400 text-xs cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter " >$10</button>
                    <button className="w-full h-8 border border-gray-800 rounded-lg font-inter text-gray-400 text-xs cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter " >$10</button>
                    <button className="w-full h-8 border border-gray-800 rounded-lg font-inter text-gray-400 text-xs cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter " >$10</button>
                    </div>
                    
                </div>
                <div className="h-px bg-gray-800"></div>

                <button className="mt-10 w-full h-15 border border-gray-800 rounded-xl font-inter text-gray-400 text-sm cursor-pointer hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 hover:font-inter" >Sign Out</button>
            </div>
            {/* This is the div for the tracker table  */}
            <div className="flex-1"></div>



        </div>
        </>
    )
}

export default DashboardPage;