import rainvideo from "./assets/sky.mp4"
import img1 from "./assets/weather.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";

import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./components/searchbar";
import Weathercard from "./components/weathercard";
import Info from "./components/infocard";

function App() {
    var [temp, settemp] = useState()
    var [wea, setwea] = useState()
    var [lon, setlon] = useState()
    var [lat, setlat] = useState()
    var [humidity, sethumidity] = useState()
    var [speed, setspeed] = useState()
    var [visib, setvisib] = useState()
    var [cloud, setcloud] = useState()
    var [pres, setpres] = useState()
    var [sunrise, setsunrise] = useState()
    var [sunset, setsunset] = useState()
    var [city, setcity] = useState("London")
    var [name, setname] = useState()

    useEffect(function () {
        search()
    }, [])

    function search() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5dab025922f8f94eaa78263f0ec7c981`)
        weather.then(function (msg) {
            settemp(Math.round(msg.data.main.temp - 273.15))
            setwea(msg.data.weather[0].main)
            setlon(msg.data.coord.lon)
            setlat(msg.data.coord.lat)
            sethumidity(msg.data.main.humidity)
            setspeed(Math.round(msg.data.wind.speed))
            setvisib(msg.data.visibility / 1000)
            setcloud(msg.data.clouds.all)
            setpres(msg.data.main.pressure)
            setname(msg.data.name)
            console.log(msg.data)
            var rise = new Date(msg.data.sys.sunrise * 1000)
            setsunrise(rise.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            }))

            var set = new Date(msg.data.sys.sunset * 1000)
            setsunset(set.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            }))
        }).catch(function () {
            console.log("Something went wrong")
            alert(`There is no city named ${city}`)
        })
    }

    function input(event) {
        setcity(event.target.value)
    }

    return (
        <div className="relative min-h-dvh overflow-hidden">
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover max-sm:">
                <source src={rainvideo} type="video/mp4" />
            </video>
            <div className="flex flex-col items-center gap-5 max-sm:my-7">
                <Searchbar input={input} search={search} />
                <Weathercard name={name} img1={img1} temp={temp} wea={wea} lon={lon} lat={lat}/>
                
                <div className="flex gap-4 flex-wrap justify-center">
                    <Info img={img2} value={`${temp} °C`} title={"Temp"} />
                    <Info img={img3} value={`${humidity} %`} title={"Humidity"} />
                    <Info img={img4} value={`${speed} km/h`} title={"Wind"} />
                    <Info img={img5} value={`${visib} km`} title={"Visibility"} />
                    <Info img={img6} value={`${cloud} %`} title={"Cloud Cover"} />
                    <Info img={img7} value={`${pres} hpa`} title={"pres"} />


                    <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-4 basis-[20%] max-sm:basis-[45%]">
                        <div className="flex items-center gap-2">
                            <img className="w-8" src={img8}></img>
                            <p className="font-bold">Sunrise</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold max-sm:text-2xl">{sunrise} AM</h1>
                        </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-4 basis-[20%] max-sm:basis-[45%]">
                        <div className="flex items-center gap-2">
                            <img className="w-8" src={img8}></img>
                            <p className="font-bold">Sunset</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold max-sm:text-2xl">{sunset} PM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;