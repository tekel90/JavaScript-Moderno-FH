const apiKey = 'NvqXnNla4PZcz6SIBHouPvI3sTqZyJSr';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//como este metodo es complejo vamos a hacer otro mas simple
/* peticion.then(resp => {
        //console.log(resp)
        resp.json().then(data => {
            console.log(data)
        })
    })
    .catch(console.warn); */

//metodo mas sencillo
peticion
    .then(resp => resp.json())
    .then(({
        data
    }) => {
        //console.log(data.images.original.url) | vamos a practicar la desestructuracion
        const {
            url
        } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);