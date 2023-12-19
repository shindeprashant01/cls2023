const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors({
    origin:"http://localhost:3000/"
}));


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'call_logging'
})
app.get('/', (req,res) =>{
    return res.json('From Backend Side')
})

app.get('/users',(req,res)=>{
    const sql = 'SELECT * FROM employee'
    db.query(sql,(err,data=>{
        if (err) return res,json(err);
        returnres.json(data)
    }))
})
app.listen(8081,()=>{
    console.log('listening')
})

