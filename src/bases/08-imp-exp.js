//import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

/* console.log(owners);

console.log(heroes); */

//una opcion que es engorrosa
/* const getheroreById = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id)
        return true;
    })
} */

//una opcion muy buena, la mejor visualmente
/* const getheroreById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
} */

//version mas acotada
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

/* console.log(getheroreById(2)); */

//tarea
// find?, filter
/* const getheroreByOwner = (owner) => heroes.find((heroe) => heroe.id === id); */

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
/* console.log(getheroreByOwner('Marvel')); */