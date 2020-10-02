import {
    getHeroeById
} from './bases/08-imp-exp'


//promesas
/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {

        //console.log('2 segundos despues')

        //Tarea
        //Importar el getheroreById
        const p1 = getheroreById(2);
        // console.log(heroe);
        resolve(p1);
        // reject('No se pudo encontrar el heroe');
    }, 2000)
}); */

/* //THEN: la promesa se hizo correctamente
promesa.then((heroe) => {
        console.log('heroe', heroe)
    })
    //CATCH: la promesa tuvo un error
    .catch(err => console.warn(err));
//Finaly: lo que va desp del then o del catch */

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const p1 = getHeroeById(id);
            /* resolve(p1); */
            /* reject('No se pudo encontrar el heroe'); */
            //Tarea: poner ambas cosas, con una consulta, si es ok el resolve y si no el reject
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }

        }, 2000)
    });
}

getHeroeByIdAsync(3)
    //.then(heroe => console.log('Heroe', heroe)) // opcion A THEN
    .then(console.log) // manda el primer argumento al consolelog
    /* .catch(err => console.warn(err)) */ //opcion A catch
    .catch(console.warn); //opcion B catch