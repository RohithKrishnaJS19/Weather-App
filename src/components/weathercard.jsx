function Weathercard({name,img1,temp,wea,lon,lat}) {
    return (
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-5 w-fit rounded-2xl gap-3 max-sm:p-3">
            <h1 className="text-4xl font-medium max-sm:text-2xl">{name}</h1>
            <div className="flex gap-10 bg-white/25 backdrop-blur-md px-15 py-5 rounded-2xl w-150 max-sm:w-80 max-sm:px-4 max-sm:gap-3 max-sm:flex-col max-sm:items-center">
                <img src={img1} className="w-30 max-sm:w-25 "></img>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-end">
                        <h1 className="text-5xl font-bold">{temp}°C</h1>
                        <p className="text-2xl font-medium">{wea}</p>
                    </div>
                    <p>Lon: {lon} | Lat: {lat}</p>
                    <p><i className="fa-solid fa-location-dot" style={{ color: "rgb(0, 0, 0)" }}></i> Lon: {lon} | Lat: {lat}</p>
                </div>
            </div>
        </div>
    )
}
export default Weathercard;