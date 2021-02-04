// crear un objeto de un zoologico

var zoologico = {
    zona: 'norte',
    dir: {
        calle: 'ggg',
        numero: 102,
        alcaldia: 'GAM'
    },
    precio: 35,
    personal: {
        veterinarios: 10,
        administrativos: 4,
        limpieza: 5
    },
    residentes: {
        reptiles: {
            lagartos: 2,
            tortugas: 5,
            cocodrilos: 2
        },
        mamiferos: {
            murcielagos: 30,
            marsupiales: {
                canguros: 1,
                koalas: 2
            },
            primates: {
                simios: 10,
                orangutanes: 2,
                gorilas: 3
            }
        },
        aves: {
            tucanes: 3,
            pinguinos: 10
        }
    },
    capacidad: 400
}