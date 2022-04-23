const express =  require ('express');
const hbs = require('hbs');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


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

app.listen(3000, () => console.log('Listening in port 3000'));