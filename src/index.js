const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("/home",(req,res)=>{
    res.send("Hello world!");
});

app.post("/add",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status:'error',
            message:"Invalid datatype"
        })
    }else{
        const sum1=num1+num2;
        if(sum1>=99999 || num1>=99999 || num2>=99999){
            res.send({
                status:'error',
                message:"Overflow",
            })
        }else if(sum1<= -99999 || num1<= -99999 || num2<= -99999){
            res.send({
                status:'error',
                message:"Underflow"
            })
        }else{
            res.status(200).send({
                message:"the sum of given numbers",
                sum:sum1
            })
        }
    }
})

app.post("/sub",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status:'error',
            message:"Invalid datatype"
        })
    }else{
        const difference1=num1-num2;
        if(difference1>=99999 || num1>=99999 || num2>=99999){
            res.send({
                status:'error',
                message:"Overflow",
            })
        }else if(difference1<= -99999 || num1<= -99999 || num2<= -99999){
            res.send({
                status:'error',
                message:"Underflow"
            })
        }else{
            res.status(200).send({
                message:"the difference of given two numbers",
                difference:difference1
            })
        }
    }
})

app.post("/multiply",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status:'error',
            message:"Invalid datatype"
        })
    }else{
        const multiply1=num1*num2;
        if(multiply1>=99999 || num1>=99999 || num2>=99999){
            res.send({
                status:'error',
                message:"Overflow",
            })
        }else if(multiply1<= -99999 || num1<= -99999 || num2<= -99999){
            res.send({
                status:'error',
                message:"Underflow"
            })
        }else{
            res.status(200).send({
                message:"The product of given numbers",
                result:multiply1
            })
        }
    }
})

app.post("/divide",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status:'error',
            message:"Invalid datatype"
        })
    }else if(num2 === 0){
        res.send({
            status: 'error',
            message: "Cannot divide by zero"
        });
    }else{
        const divide1=num1/num2;
        if(divide1>=99999 || num1>=99999 || num2>=99999){
            res.send({
                status:'error',
                message:"Overflow",
            })
        }else if(divide1<= -99999 || num1<= -99999 || num2<= -99999){
            res.send({
                status:'error',
                message:"Underflow"
            })
        }else{
            res.status(200).send({
                message:"The division of given numbers",
                result:divide1
            })
        }
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;

