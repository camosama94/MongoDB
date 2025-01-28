// Using Node.js `require()`
const mongoose = require('mongoose');

const buscarPrimero = ()=>{
    Ordenador.findOne()
    .then( ordenador=>{
        if(ordenador){
            console.log("Primer ordenador encontrado", ordenador)
        }else{
            console.log("No se han encontrado registros")
        }
    })
    .catch(err=>console.error("Error al obtener registros",err));
}

const buscarTodos = ()=>{
    Ordenador.find()
    .then( ordenadores=>{
        if(ordenadores.length>0){
            console.log("Ordenadores encontrados", ordenadores)
        }else{
            console.log("No se han encontrado registros")
        }
    })
    .catch(err=>console.error("Error al obtener registros",err));
}

const buscarPorId = (id)=>{
    Ordenador.findById(id)
    .then( ordenador=>{
        if(ordenador){
            console.log("Ordenador: ", ordenador)
        }else{
            console.log("No se han encontrado registros con el id "+id)
        }
    })
    .catch(err=>console.error("Error al obtener registros",err));
}

const buscarPrecioMayor = (precio)=>{
    Ordenador.find({precio: {$gt:precio}})
    .then( ordenadores=>{
        if(ordenadores.length>0){
            console.log("Ordenadores de precio mayor a " +precio+ " encontrados", ordenadores)
        }else{
            console.log("No se han encontrado registros")
        }
    })
    .catch(err=>console.error("Error al obtener registros",err));
}

mongoose.connect('mongodb+srv://camosama:CYfcOiYR8vamuyhi@cluster0.qpb4q.mongodb.net/almacen')
  .then(() => console.log('Connected!'));

const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenador', ordenadorSchema, 'ordenadores');

const idBuscado = '6798f6b01e64ff129d05c752'

buscarPrecioMayor(500);