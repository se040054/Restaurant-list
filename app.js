const express = require('express')
const {engine} = require('express-handlebars')
const app = express();
const port =3000 ; 

const restaurants = require('./public/jsons/restaurant.json').results


app.use(express.static('public'))
app.engine('.hbs', engine({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.redirect('/Restaurants')
});

app.get('/Restaurants',(req,res)=>{
  res.render('index',{restaurants})
})

app.get('/Restaurants/:id',(req,res)=>{
  const id = Number(req.params.id)
  const restaurant = restaurants.find(restaurant => restaurant.id === id )
  res.render('detail',{restaurant})
})


app.listen(port,()=>{
  console.log(`Listening: http://localhost:${[port]}`)
});