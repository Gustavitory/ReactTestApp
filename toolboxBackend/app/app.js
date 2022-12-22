const express=require("express");
const router = require("./routes");
const cors=require('cors');

const config={
    application:{
        cors:{
            server:[
                {
                origin:"*",
                credentials:true
                }
            ]
        }
    }
}

const app = express()

app.use(express.static('public'));

app.use(cors(config.application.cors.server))

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/',router);


module.exports=app;