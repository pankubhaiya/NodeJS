
const express = require("express")
const {connect} = require("./config/connect")
const {router} = require("./Routes/Book.route")
const port = process.env.PORT || 8000
require("dotenv").config()
const app = express()
app.use(express.json())
app.use("/api",router)

app.get("/",(req,res)=>{
   res.status(200).send("wlc to home page")
})


app.listen( port ,async()=>{
     try{
        await connect
        console.log("db is connected")

     }catch(err){
        console.log({mes:err.message})
     }
     console.log(`server is runnning at prot ${process.env.port}.... `)

})




