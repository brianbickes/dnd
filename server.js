require('dotenv').config();

// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;

// MONGOOSE CONNECTION
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
});

//CONTROLLERS

//CLASSES
const classesController = require('./controllers/classes.js');
app.use('/classes', classesController); 

//RACES
const racesController = require('./controllers/races.js');
app.use('/races', racesController); 

//SPELLS
const spellsController = require('./controllers/spells.js');
app.use('/spells', spellsController); 

//EQUIPMENT
const equipmentController = require('./controllers/equipment.js');
app.use('/equipment', equipmentController); 

//CREATE CHARACTER
const createCharacterController = require('./controllers/createcharacter.js');
app.use('/createcharacter', createCharacterController); 


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