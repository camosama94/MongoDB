const modeloOrdenador = require('./models/ordenador');

const idBuscado = '6798f6b01e64ff129d05c752'

//Comenta las funciones que no quieras que se ejecuten
modeloOrdenador.buscarPrecioMayor(1500);

modeloOrdenador.buscarPorId(idBuscado);

modeloOrdenador.buscarTodos();

modeloOrdenador.buscarPrimero();

modeloOrdenador.nuevoOrdenador("MSI",1700);

modeloOrdenador.updateOrdenador('67990e9fc82681e0c94b098a',2500);

modeloOrdenador.deleteOrdenador('67990e9fc82681e0c94b098a');