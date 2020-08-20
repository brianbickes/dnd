//DEPENDENCIES
const express = require('express'); //C
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express(); //C
const reactViews = require('express-react-views'); // V
const createEngine = reactViews.createEngine; // V
const PORT = 3000; 
//END DEPENDENCIES

//BEGIN DATA SETUP
const mongoURI = 'mongodb+srv://brianbickes:SableDawg3!@sei.w6o9a.azure.mongodb.net/dungeons-sei?'; // M
const db = mongoose.connection; // M
const Class = require('./models/classes'); // M
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.once('open', () => {
    console.log('connected to Mongo')});
//END DATA SETUP

//MIDDLEWARE
app.use(express.urlencoded({ extended: false })); // C  
app.use(express.static('public')); // N/A   --- map for public folder
app.set('view engine', 'jsx'); // V
app.engine('jsx', createEngine()); // V
app.use(methodOverride('_method')); 
//END MIDDLEWARE

//CONTROLLERS
const classesController = require('./controllers/classes.js');
app.use('/classes', classesController); 



//STATIC PAGES

app.get('/', (req, res) => {
    res.render('static/Home')
});

app.get('/about', (req, res) => {
    res.render('static/About') 
})
app.get('/contact-us', (req, res) => {
    res.render('static/ContactUs')
});

//LISTENER
app.listen(PORT, ()=>{
    console.log("I am always listening....")
}); 