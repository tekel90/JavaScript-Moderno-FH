// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'soldado',
};

/* const {
    nombre,
    edad,
    clave
} = persona; */

/* console.log(nombre);
console.log(edad);
console.log(clave); */

const useContext = ({
    clave,
    nombre,
    edad,
    rango = 'Capitan'
}) => {

    /* console.log(nombre, edad, rango); */
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        }
    }
}


// SIN Desestructuracion
/* const avenger = useContext(persona);
console.log(avenger); */

// Desestructuracion
const {
    nombreClave,
    anios,
    latlng: {
        lat,
        lng
    }
} = useContext(persona);

//otra forma en caso de que arriba no se ponga los 2 puntos desp de larLng
/* const {lat, lng} = latlng; */

console.log(nombreClave, anios);
console.log(lat, lng);