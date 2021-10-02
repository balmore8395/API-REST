var mongoose = require('mongoose');
//var dev_db_url = "mongodb://localhost:27017/EdwinDB";
var dev_db_url = "mongodb+srv://admin:admin123@edwindb.l23tj.mongodb.net/EdwinDB?retryWrites=true&w=majority";

var mongoDB =process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console,'mongoDB conecction error :'));

var Productos = require('./productos');


////crud operations


//create 

exports.productos_create = function(req,res){
    var productos = new Productos({
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        precio:req.body.precio,
        existencia:req.body.existencia
    });
    productos.save(function(err){
        if(err){
            return next(err)
        }
        res.send({'message':'REGISTRO CREADO'})
    });
}

//read -------GET

exports.productos_read = function(req,res){
    Productos.findById(req.query.id, function(err,productos){
        if(err){
            return next(err)
        }
        res.send(productos)
    })
}

//update ----- PUT

exports.productos_update = function(req,res){

    Productos.findByIdAndUpdate(req.query.id, {$set:req.body},function(err,productos){
        if(err) return next(err)
        res.send({'message':"REGISTRO ACTUALIZADO"})
    })
}

//delete  ---- DELETE

exports.productos_delete = function(req,res){
    Productos.findByIdAndDelete(req.query.id,function(err,productos){
        if(err) return next(err)
        res.send({'message':"REGISTRO ELIMINADO"})
    })
}