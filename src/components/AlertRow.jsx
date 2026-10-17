function AlertRow({message,Timeago}){
    return(
        <>
        <div className="flex items-center justify-between py-5">
            <p className="text-gray-300 text-lg font-inter">{message}</p>
            <p className="text-gray-500 text-sm">{Timeago}</p>
        </div>
        <div className="h-px bg-gray-900"></div>
        </>
    )
}

export default AlertRow;