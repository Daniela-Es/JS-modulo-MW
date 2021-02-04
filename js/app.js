console.log("hay comunicacion")

var string = "este es un string";

console.log('tipos de datos:');
console.log('Primitivos');

// sintaxis forma correcta de escribir codigo
// var = a una palabra reservada (palabras propias del lenguaje)
// nombre de la variable (edad)
// = asignando un valor (=) signo de asignacion
// valor (30)

// numerico, el valor sin comillas
var edad = 30;

// string, alfabetico, el valor va entre comillas que pueden ser dobles o simples. LAS BUENAS PRACTICAS RECOMIENDAN SIMPLES

var nombre = 'Carlos';

// booleano (0,1) (no,si) (falso,verdadero) (true,false)
// dato logico

var quieresSerMiNovia = false;

// complejos
// objeto es un tipo de dato complejo -> un dato complejo se compone de un conjunto (grupo de cosas que comparten algunas caracteristicas) de datos primitivos (numeros, cadenas, string, boooleanos) 
// sintaxis
// 1. definir la var
// nombrar el objeto (persona) nombre a la caja
// asignar el valor (=)
// bloque de llaves que agrupa los valores del objeto


var persona = {
    // atributo del objeto (persona):
    edad: 30,
    rango: 120,
    nombre: 'Carlos',
    masculino: true
}

// buenas practicas:
// el ultimo ya no lleva coma, como una lista normal

// ejemplo

var hospital = {
    id: 12458,
    zona: 'norte',
    nivel: 2,
    capacidad: 1000,
    camas: 2000,
    medicamento: {
        inyectable: 200,
        intravenoso: 300,
        ingerido: 2000
    },
    tipo: 'publico',
    personal:{
        planta:{
            medicos: {
                pasantes: 5,
                especialistas: 4
            }
        },
        enfermeros: 200,
        camilleros: 200,
        intendencia: 20,
        limpieza: 20,
        administrativos: 30
    },
    dir:{
        calle:'ggg',
        numero: 67,
        alcaldia: 'GAM'
    } 
}