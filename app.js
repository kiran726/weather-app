const util=require("./utils")
const yargs=require("yargs")
// const url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
// request.get(uri=url,(err,res)=>{
//     console.log(res.body)
// fs.writeFileSync("weather.json",JSON.stringify(res))
// // })
// const address="Hyderabad"
// const geouri="https://geocode.maps.co/search?q={Hyderabad}&limit=1";
// request(uri=geouri,(err,res)=>{
    // if(err){
    //     console.log("Unable to connect to location service")
    // } else if(res.body == undefined || res.body==null || res.body==="[]") {
    //     console.log("Invalid Address")
    // } else{
    // const data=res.body;
    // const j=JSON.parse(data)
    // //console.log(j)
    // console.log(j[0].lat,j[0].lon)

// }
//     //console.log(err)
// })

yargs.version("1.1.0")
yargs.command({
    command:'forecast',
    describe:"Forecast the weather based on the address provided",
    builder:{
        address:{
            describe:"Your Location",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>util(argv.address)
}
)


 
yargs.parse()

// forecast(17.360589,78.4740613,(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

// console.log("starting...")

// setTimeout(()=>{
//     console.log("2 sec timer")
// },2000)

// setTimeout(()=>{
//     console.log("fast")
// },0)

// console.log("stopping...")