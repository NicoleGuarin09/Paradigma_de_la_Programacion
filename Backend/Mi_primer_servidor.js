const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('¡Holaa, mundo!');
});

app.get('/json', (req, res ) => {
    res.json({mensaje: '¡Holaa, mundo en formato JSON!'});
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


app.get('/json', (req, res) => {
    res.json({mensaje: 'Hola Mundo PCJIC'});
});



app.get('/info', (req, res) => {
    res.json({Nombre: 'Nicole', Apellido: 'Guarin', Edad: '16', colegio: 'La Salle de Campoamor'});
    
});