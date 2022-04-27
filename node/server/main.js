const express = require("express")

const dns = require("dns")

const app = express()

app.listen(8030,()=>{
    console.log('开启服务器');
})