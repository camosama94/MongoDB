
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://camosama:CYfcOiYR8vamuyhi@cluster0.qpb4q.mongodb.net/almacen')
  .then(() => console.log('Connected!'));

const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenador', ordenadorSchema, 'ordenadores');


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

const nuevoOrdenador = (marca,precio)=>{
    const nuevoOrdenador = new Ordenador({
        marca: marca,
        precio: precio
      });
      // Guardar el ordenador en la base de datos
      nuevoOrdenador.save()
        .then(ordenador => console.log('Ordenador guardado:', ordenador))
        .catch(err => console.error('Error al guardar el ordenador:', err));
      
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
    .catch(err => console.error('Error al actualizar el ordenador:', err));
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
    .catch(err => console.error('Error al eliminar el ordenador:', err));
}

module.exports = {buscarPrecioMayor, buscarPorId, buscarPrimero, buscarTodos, nuevoOrdenador, updateOrdenador, deleteOrdenador,Ordenador}