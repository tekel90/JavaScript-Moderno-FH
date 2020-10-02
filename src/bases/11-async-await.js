//opcion 1
/* const getImagenPromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://asdasd.com')
    })
}
getImagenPromesa().then(console.log); */

//opcion 2
/* const getImagenPromesa = () => {
    return new Promise((resolve, reject) => {
        resolve('https://ajskdhaskjdhajs.com')
    })
}
getImagenPromesa().then(console.log); */

//opcion 3
/* const getImagenPromesa = () => {
    return new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'))
}
getImagenPromesa().then(console.log); */

//opcion 4
/* const getImagenPromesa = () =>
    new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'))
getImagenPromesa().then(console.log); */

//mismo ejercicio que todos los de arriba pero con ASYNC
const getImagen = async () => {
    try {
        // return 'https://ajskdhaskjdhajs.com';
        const apiKey = 'NvqXnNla4PZcz6SIBHouPvI3sTqZyJSr';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {
            data
        } = await resp.json();
        const {
            url
        } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}
// getImagen().then(console.log)
getImagen();