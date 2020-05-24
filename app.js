let express = require('express');
let fs = require('fs');
let rutasProductos = require('./routes/productos.js');
let rutasUsuarios = require('./routes/usuarios.js');


 let app = express();

 app.listen(3000, ()=>{
     console.log('servidor corriendo')
 });


app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios);



 app.get('/', function(req, res){
    res.send('bienvenido al sitio');
 });

 app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto');
});

