
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected!'));

const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenador', ordenadorSchema, 'ordenadores');


const buscarPrimero = ()=>{
    return Ordenador.findOne()
    .then( ordenador=>{
        if(ordenador){
            console.log("Primer ordenador encontrado", ordenador);
            return ordenador;
        }else{
            console.log("No se han encontrado registros");
            return null;
        }
    })
    .catch(err=>{
        console.error("Error al obtener registros",err);
        throw err;
    });
}

const buscarTodos = ()=>{
    return Ordenador.find()
    .then( ordenadores=>{
        if(ordenadores.length>0){
            console.log("Ordenadores encontrados", ordenadores);
            return ordenadores;
        }else{
            console.log("No se han encontrado registros")
            return null;
        }
    })
    .catch(err=>{
        console.error("Error al obtener registros",err);
        throw err;
    });
}

const buscarPorId = (id)=>{
    return Ordenador.findById(id)
    .then( ordenador=>{
        if(ordenador){
            console.log("Ordenador: ", ordenador);
            return ordenador;
        }else{
            console.log("No se han encontrado registros con el id "+id);
            return null;
        }
    })
    .catch(err=>{
        console.error("Error al obtener registros",err);
        throw err;
    });
}

const buscarPrecioMayor = (precio)=>{
    return Ordenador.find({precio: {$gt:precio}})
    .then( ordenadores=>{
        if(ordenadores.length>0){
            console.log("Ordenadores de precio mayor a " +precio+ " encontrados", ordenadores);
        }else{
            console.log("No se han encontrado registros");
        }
    })
    .catch(err=>{
        console.error("Error al obtener registros",err)
        throw err;
    });
}

const nuevoOrdenador = (marca,precio)=>{
    const nuevoOrdenador = new Ordenador({
        marca: marca,
        precio: precio
      });
      // Guardar el ordenador en la base de datos
      nuevoOrdenador.save()
        .then(ordenador => console.log('Ordenador guardado:', ordenador))
        .catch(err => {
            console.error('Error al guardar el ordenador:', err);
            throw err;
        });
      
}

const updateOrdenador = (idOrdenador, nuevoPrecio)=>{
    Ordenador.findByIdAndUpdate(idOrdenador, { precio: nuevoPrecio }, { new: true })
    .then(ordenadorActualizado => {
        if (ordenadorActualizado) {
        console.log('Ordenador actualizado:', ordenadorActualizado);
        } else {
        console.log('No se encontró ningún ordenador con ese ID.');
        }
    })
    .catch(err => {
        console.error('Error al actualizar el ordenador:', err);
        throw err;
    });
}

const deleteOrdenador = (idOrdenadorParaBorrar)=>{
    Ordenador.findByIdAndDelete(idOrdenadorParaBorrar)
    .then(ordenadorEliminado => {
        if (ordenadorEliminado) {
        console.log('Ordenador eliminado:', ordenadorEliminado);
        } else {
        console.log('No se encontró ningún ordenador con ese ID.');
        }
    })
    .catch(err => {
        console.error('Error al eliminar el ordenador:', err);
        throw err;
    });
}

module.exports = {buscarPrecioMayor, buscarPorId, buscarPrimero, buscarTodos, nuevoOrdenador, updateOrdenador, deleteOrdenador,Ordenador}