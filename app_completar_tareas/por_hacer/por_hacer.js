const fs = require('fs');
let listadoPorHacer = [];

const crear = (titulo, descripcion) => {
	let porHacer = {
		titulo, //Lo mismo que titulo: titulo
		descripcion,
		completado: false
	};

	listadoPorHacer.push(porHacer);

	return porHacer;
}

module.exports = {
	crear
}