const geocode=require("./geocode")
const forecast=require("./forecast")
const util= (address) =>{
geocode(address,(err,data)=>{
    //  console.log(err)
    if(err){
       return console.log(err)
    }
     forecast(data.latatiude,data.longitude,(err,data)=>{
            // console.log(err)
            if(err){
                return console.log(err)
            }
            console.log(data)
        }
    )
 })
}

module.exports=util