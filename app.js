const express =  require ('express');
const hbs = require('hbs');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')


app.use(express.static ('public'));

app.get('/', (request, response) => {

    response.render('index');

})

app.get('/about', (request, response) => {

    response.render('about');

})

app.get('/works', (request, response) =>  {

    response.render('works');

})

app.get('/gallery', (request, response) =>  {

    response.render('gallery');

})

app.listen(3000, () => console.log('Listening in port 3000'));