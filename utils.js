const geocode=require("./geocode")
const forecast=require("./forecast")
const util= (address) =>{
geocode(address,(err,{latatiude,longitude,address}={})=>{
    //  console.log(err)
    if(err){
       return console.log(err)
    }
     forecast(latatiude,longitude,(err,msg)=>{
            // console.log(err)
            if(err){
                return console.log(err)
            }
            console.log(address)
            console.log(msg)
        }
    )
 })
}

module.exports=util