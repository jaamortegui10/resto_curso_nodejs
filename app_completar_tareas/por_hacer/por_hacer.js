const fs = require('fs');
/*Supongo que esta dirección debe ser la dirección
que se necesitará en el lugar desde el que se llame a la función que la usa:
	En este caso: app.js */
//¿Por qué esta dirección es como desde main.js y no como en leerData?
const dataDir = 'data/data.json'

let listadoPorHacer = [];

const guardarData = () => {
	//Convierte objeto en formato json a string en formato json.
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile(dataDir, data, (err)=>{
		if(err) throw new Error('No se pudo grabar el archivo:\n', err);
	});
}

const leerData = () => {
	//¿Por qué acá sí usamos la dirección del archivo desde acá?
	/* Toma el archivo json, lee la información, y la transforma a 
	objeto json de javascript */
	let jsonData;
	try{
		jsonData = require('../data/data.json');
	}catch(err){
		jsonData = [];
	}
	return jsonData;
}

const crear = (titulo, descripcion) => {
	let porHacer = {
		titulo, //Lo mismo que titulo: titulo
		descripcion,
		completado: false
	};

	
	listadoPorHacer = leerData();
	console.log('Data leida: ', listadoPorHacer);
	listadoPorHacer.push(porHacer);
	guardarData();

	return porHacer;
}

const listar = () => {
	return new Promise((resolve, reject)=>{
		try{
			let data = leerData();
			resolve(data);
		}catch(err){
			reject(err);
		}
	});
}

/*Actualiza un elemento de la lista de elementos:
	El parámetro de titulo es obligatorio, los otros dos no.*/
const actualizar = (titulo, descripcion, completado) =>{
	listadoPorHacer = leerData();

	return new Promise((resolve, reject) => {
		if(listadoPorHacer == [])
			reject('La lista de tareas está vacía');
		listadoPorHacer.forEach((task)=>{
			if(task.titulo == titulo){
				if(descripcion)
					task.descripcion = descripcion;
				if(completado)
					task.completado = completado;
				guardarData();
				resolve(task);
			}
		});
		reject('No se encontraron elementos con el titulo dado por parámetro.');
	});

}

module.exports = {
	crear,
	listar,
	actualizar
}