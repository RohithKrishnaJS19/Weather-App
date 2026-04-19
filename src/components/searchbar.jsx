function Searchbar({input,search}) {
    return (
        <div className="flex flex-col items-center gap-3">
            <h className="text-4xl font-medium text-white mt-4 z-10">Weather Report</h>
            <div className="flex gap-5 p-3 bg-white/30 backdrop-blur-md rounded max-sm:gap-3" >
                <input onChange={input} className="bg-white p-2 rounded placeholder:font-medium w-80 max-sm:w-50 text-xl" placeholder="Enter city name..."></input>
                <button onClick={search} className="bg-blue-600 p-2 rounded text-white font-medium max-sm:text-xl">Search</button>
            </div>
        </div>
    )
}

export default Searchbar;