const express =  require ('express');
const hbs = require('hbs');

const episodes = [
    {
        episode: 1,
        title: "Going Live!",
        aired: "1 January 1990",
        description: "Mr. Bean attends a maths exam, during which he tries to copy from a student under the nose of the invigilator; he surreptitiously changes into his swimming trunks so as not to be noticed by someone nearby; and he struggles to stay awake during a church service, much to the annoyance of the man sitting next to him, Mr. Sprout."
    },
    {
        episode: 2,
        title: "The Return of Mr. Bean",
        aired: "5 November 1990",
        description: "Bean busks to pay a busker, tries out his new credit card in a department store, visits a restaurant and is served an unwanted dish, leading him to try a variety of strategies to avoid eating it, and then has an unfortunate altercation with Queen Elizabeth The Queen Mother."
    },
    {
        episode: 3,
        title: "The Curse of Mr. Bean",
        aired:"30 December 1990",
        description: "Bean visits the local swimming pool where he realises that he is scared of diving, tries to find a way to leave the car park without paying, makes a sandwich in the park sitting next to Angus Deayton, jumps a traffic light in his car by getting out and pushing it and then takes his girlfriend to watch a scary movie at the cinema."
    },
    {
        episode: 4,
        title: "Mr. Bean Goes to Town",
        aired:"15 October 1991",
        description: "Bean buys a new portable television but seems to be having difficulty getting a good reception. He then has his camera stolen in the park and later finds a unique way of identifying the culprit. After leaving his shoe on top of a car, Bean finds himself hopping around town to retrieve it."
    },
    {
        episode: 5,
        title: "The Trouble with Mr. Bean",
        aired:"1 January 1992",
        description: "Bean wakes up late and has to drive to his dental appointment on the other side of town while dressing and brushing his teeth. His appointment progresses badly after he manages to anesthetize the dentist. Later, he tries to help a young boy with his remote control boat, but sending an electric wheelchair out of control."
    },
    {
        episode: 6,
        title: "Mr. Bean Rides Again",
        aired:"17 February 1992",
        description: "Bean tries to save a man suffering from a heart attack, but when the ambulance arrives, Bean uses it to jump start his car, inadvertently disabling the ambulance. Later, he tries to post a letter and ends up getting locked inside a post box. Bean then packs for a holiday, suffers a noisy laughing man on a train journey and then has to find a way to entertain a sick boy on a plane."
    },
    {
        episode: 7,
        title: "Merry Christmas, Mr. Bean",
        aired:"29 December 1992",
        description: "Bean finds a miniature nativity scene in Harrods and performs his take on the birth of Jesus with army troops and Daleks. Later, he conducts a brass band and attempts to cook a turkey. On Christmas Day, he relaxes for a somewhat reserved Christmas meal with his girlfriend, but has he got her the present that she wanted?"
    },
    {
        episode: 8,
        title: "Mr. Bean in Room 426",
        aired:"17 February 1993",
        description: "Bean treats himself to a weekend in a hotel and seeks competition with his hotel neighbour. After he eats some spoiled oysters, he has a nightmare about them and his neighbour. With his stomach turning, he goes outside of his room to complain to the other neighbour, but is locked out and naked. All in all, all hell breaks loose."
    },
    {
        episode: 9,
        title: "Do-It-Yourself Mr. Bean",
        aired:"10 January 1994",
        description: "It is the end of 1993, and Bean is hosting a New Year's Eve party with his unique style of fun. However, it is not long before his guests discover that there is more fun to be had at the flat next door and devise a way of tricking Bean into letting them go. The following morning, Bean buys a large recliner at the January Sales and starts off the new year with a bang."
    },
    {
        episode: 10,
        title: "Mind the Baby, Mr. Bean",
        aired:"25 April 1994",
        description: "While visiting Southsea, Bean accidentally becomes lumbered with a baby, with no idea of how or where it came from. So he does the honourable thing of treating it to a day at the funfair. Somehow, the baby manages to survive Bean's unique style of mishaps before thankfully being reunited with its mother."
    },
    {
        episode: 11,
        title: "Back to School Mr. Bean",
        aired:"26 October 1994",
        description: "Bean attends an open day at a school and unleashes his usual brand of chaos in the various classes he visits. Despite all his fun, Bean's day takes a sombre turn when he discovers that his cherished Mini is not where he left it."
    },
    {
        episode: 12,
        title: "Tee Off, Mr. Bean",
        aired:"20 September 1995",
        description: "After causing chaos in the town launderette, Bean tries his hand at Crazy Golf, but after being told he can only touch the ball with the club, Bean's poor aim leads him on an elaborate tour around town before returning to the course several hours later to score 3,427."
    },
    {
        episode: 13,
        title: "Goodnight Mr. Bean",
        aired:"31 October 1995",
        description: "Bean tries to find ways to jump the queue in a hospital waiting room. Later, he tries to get his camera to automatically take a picture of him standing next to a Queen's Guard, while taking advantage of the guard's duty to remain still by doing all he can to comically alter his appearance. At the end of the day, Bean tries to cure his insomnia with some unusual methods."
    },
    {
        episode: 14,
        title: "Hair by Mr. Bean of London",
        aired:"315 November 1995",
        description: "Bean ends up holding the fort for his hairdresser and gives several customers terrible haircuts. Bean then attends a fete but cheats at all the games and enters Teddy into a dog show. Later, after a train journey, Bean loses his ticket, so he tries various ways to leave without being seen by the guards. His efforts fail as he ends up on a mail train bound for Moscow."
    },
    {
        episode: 15,
        title: "The Best Bits of Mr. Bean",
        aired:"15 December 1995",
        description: "It is raining, so Bean ventures into his loft with Teddy to find an umbrella. As he shifts through his stored items, he begins to reminisce his past adventures, including his dental appointment, the church service, and the time his Mini was crushed by a tank."
    },
];


const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static ('public'));

app.get('/', (request, response) => {

    response.render('index');

});

app.get('/about', (request, response) => {

    response.render('about');

});
 
app.get('/episode-guide', (request, response) =>  {
    const data = {episodes: episodes};
    response.render('works', data);

});

app.get('/gallery', (request, response) =>  {

    response.render('gallery');

});

app.listen(3000, () => console.log('Listening in port 3000'));