const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

//desconocemos el puerto que nos dara heroku para correr nuestra app
//envioroment
const port = process.env.PORT || 3000;

//volvemos estatico todos los elementos en public. 
app.use(express.static(__dirname + '/public'));

//DIR NAME nos ayuda para que el url no sea fijo, que busque las rutas
hbs.registerPartials(__dirname + '/views/partials')

//Express HBS engine
app.set('view engine', 'hbs');




app.get('/', (req, resp) => {

    resp.render('home', {
        nombre: 'Francisco'
    })
});

app.get('/about', (req, resp) => {
    resp.render('about');
});



/** 
app.get('/data', (req, res) => {
    res.send('Hola data');
}); 

*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto  ${port}`);
});