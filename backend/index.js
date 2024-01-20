const express=require ('express')
const cors = require('cors');
const mainRouter=require('./router/index')
const bodyParser = require('body-parser');
const app=express();
const PORT=8000;


app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/',mainRouter);


app.get('/',(req,res)=>{
    res.send("Test succesfull and passed");
})
app.listen(PORT,()=>{
    console.log("Server up an running at:",PORT)
})