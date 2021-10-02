const express = require ('express')
const body_parser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(cors());

const db_manager = require('./persistence/dbmanager')


//////CRUD

///////////CREATE  ---POST
app.post('/productos',(req,res) =>{
    db_manager.productos_create(req,res)
})

/////////////READ
app.get('/productos',(req,res) =>{
    db_manager.productos_read(req,res)
})

//////////////UPDATE
app.put('/productos',(req,res) =>{
    db_manager.productos_update(req,res)
})

//////////////DELETE
app.delete('/productos',(req,res) =>{
    db_manager.productos_delete(req,res)
})



app.get('/',(req,res)=>{
    res.send("Hola mundo")
})

app.listen(9000,()=>{

    console.log("API REST is running 9000 !!!!")
})











