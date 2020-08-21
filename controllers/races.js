const RacesRouter = require('express').Router();
const Races = require('../models/races');

//INDEX
RacesRouter.get('/', (req, res) => {
    Races.find({}, (error, allRaces) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('races/Index', {
                races: allRaces
            })
        }
    })
})

//NEW
RacesRouter.get('/new', (req, res) => {
    res.render('races/New')
})

//DELETE
RacesRouter.delete('/:id', (req, res) => {
    Races.findByIdAndDelete(req.params.id, (error, deletedRace) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedRace)
            res.redirect('/races')
        }
    })
})

//UPDATE
RacesRouter.put('/:id', (req, res) => {
    Races.findByIdAndUpdate(req.params.id, req.body, (error, foudnRace) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/races')
        }
    })
})

//CREATE
RacesRouter.post('/', (req, res) => {
    Races.create(req.body, (error, createdRace) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdRace)
            res.redirect('/races')
        }
    })

})

//EDIT
RacesRouter.get('/:id/edit', (req, res) => {
    Races.findById(req.params.id, (error, foundRace) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('races/Edit', {
                races: foundRace
            })
        }
    })
});

//SHOW
RacesRouter.get('/:id', (req, res) => {
    Races.findById(req.params.id, (error, foundRace) => {
        res.render('races/Show', {
            races: foundRace
        });
    });
});

//EXPORT ROUTER
module.exports = RacesRouter;