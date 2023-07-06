const express = require('express')
const {engine} = require('express-handlebars')
const app = express();
const port =3000 ; 

app.use(express.static('public'))
app.engine('.hbs', engine({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.redirect('/Restaurants')
});

app.get('/Restaurants',(req,res)=>{
  res.render('index')
})

app.get('/:id',(req,res)=>{
  const id = req.params.id
  res.send(`restaurant: ${id}`)
})


app.listen(port,()=>{
  console.log(`Listening: http://localhost:${[port]}`)
});