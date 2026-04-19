function Info({img,value,title}) {
    return (
        <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-4 basis-[20%] max-sm:basis-[45%]">
            <div className="flex items-center gap-2">
                <img className="w-8" src={img}></img>
                <p className="font-bold">{title}</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold">{value}</h1>
            </div>
        </div>
    )
}
export default Info;