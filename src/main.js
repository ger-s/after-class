const express = require('express')
const expresshbs = require('express-handlebars')

const app = express()

app.engine('handlebars', expresshbs.engine())
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('datosPersonales', {
    nombre: 'coder',
    apellido: 'house',
    edad: 25,
    email: 'coder@house',
    telefono: '12345678'
  });
  
});


app.use(express.static('public'))

app.listen(8080)