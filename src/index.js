// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// // your code goes here


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get('/home',(req,res)=>{
    res.send("Hello world!.")
})
app.post("/add",(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2
    const result=num1+num2
    if(num1<-1000000 || num2<-1000000 || result<-1000000 ){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }else if(num1>1000000 || num2>1000000 || result>1000000){
        res.send({
            status:"error",
            message:"Overflow"
        })
    }
    else if(typeof num1==="string" || typeof num2==="string"){
        res.send({
            status:"error",
            message:"Invalid data types"
        })
    }
    else{
        res.send({
            status:"sucess",
            message: "the sum of given two numbers",
            sum: num1+num2
        })
    }
})
app.post("/sub",(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2
    const result=num1-num2
    if(num1<-1000000 || num2<-1000000 || result<-1000000 ){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }else if(num1>1000000 || num2>1000000 || result>1000000){
        res.send({
            status:"error",
            message:"Overflow"
        })
    }
    else if(typeof num1==="string" || typeof num2==="string"){
        res.send({
            status:"error",
            message:"Invalid data types"
        })
    }
    else{
        res.send({
            status:"sucess",
            message: "the diffrence of given two numbers",
            diffrence: result
        })
    }
})
app.post("/multiply",(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2
    const rest=num1*num2
    if(num1<-1000000 || num2<-1000000 || rest<-1000000 ){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }else if(num1>1000000 || num2>1000000 || rest>1000000){
        res.send({
            status:"error",
            message:"Overflow"
        })
    }
    else if(typeof num1==="string" || typeof num2==="string"){
        res.send({
            status:"error",
            message:"Invalid data types"
        })
    }
    else{
        res.send({
            status:"sucess",
            message: "the sum of given two numbers",
            result: rest
        })
    }
})
app.post("/divide",(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2
    const rest=num1/num2
    if(num2==0){
        res.send({
            status:"error",
            message:"Cannot divide by zero"
        })
    }
    else if(num1<-1000000 || num2<-1000000 || rest<-1000000 ){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }else if(num1>1000000 || num2>1000000 || rest>1000000){
        res.send({
            status:"error",
            message:"Overflow"
        })
    }
    else if(typeof num1==="string" || typeof num2==="string"){
        res.send({
            status:"error",
            message:"Invalid data types"
        })
    }
    else{
        res.send({
            status:"sucess",
            message: "the sum of given two numbers",
            result: rest
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;