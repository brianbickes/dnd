const SpellsRouter = require('express').Router();
const Spells = require('../models/spells');

//INDEX
SpellsRouter.get('/', (req, res) => {
    Spells.find({}, (error, allSpells) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('spells/Index', {
                spells: allSpells
            })
        }
    })
})

//NEW
SpellsRouter.get('/new', (req, res) => {
    res.render('spells/New')
})

//DELETE
SpellsRouter.delete('/:id', (req, res) => {
    Spells.findByIdAndDelete(req.params.id, (error, deletedSpell) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedSpell)
            res.redirect('/spells')
        }
    })
})

//UPDATE
SpellsRouter.put('/:id', (req, res) => {
    Spells.findByIdAndUpdate(req.params.id, req.body, (error, foundSpell) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/spells')
        }
    })
})

//CREATE
SpellsRouter.post('/', (req, res) => {
    Spells.create(req.body, (error, createdSpell) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdSpell)
            res.redirect('/spells')
        }
    })

})

//EDIT
SpellsRouter.get('/:id/edit', (req, res) => {
    Spells.findById(req.params.id, (error, foundSpell) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('spells/Edit', {
                spells: foundSpell
            })
        }
    })
});

//SHOW
SpellsRouter.get('/:id', (req, res) => {
    Spells.findById(req.params.id, (error, foundSpell) => {
        res.render('spells/Show', {
            spells: foundSpell
        });
    });
});

//EXPORT ROUTER
module.exports = SpellsRouter;