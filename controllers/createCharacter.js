const CreateCharacterRouter = require('express').Router();
const CreateCharacter = require('../models/createCharacter');

//INDEX
CreateCharacterRouter.get('/', (req, res) => {
    CreateCharacter.find({}, (error, allCharacters) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('createcharacter/Index', {
                createcharacter: allCharacters
            })
        }
    })
})

//NEW
CreateCharacterRouter.get('/new', (req, res) => {
    res.render('createcharacter/New')
})

//DELETE
CreateCharacterRouter.delete('/:id', (req, res) => {
    CreateCharacter.findByIdAndDelete(req.params.id, (error, deletedCharacter) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedCharacter)
            res.redirect('/createcharacter')
        }
    })
})

//UPDATE
CreateCharacterRouter.put('/:id', (req, res) => {
    CreateCharacter.findByIdAndUpdate(req.params.id, req.body, (error, foundCharacter) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/createcharacter')
        }
    })
})

//CREATE
CreateCharacterRouter.post('/', (req, res) => {
    CreateCharacter.create(req.body, (error, createdCharacter) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdCharacter)
            res.redirect('/createcharacter')
        }
    })

})

//EDIT
CreateCharacterRouter.get('/:id/edit', (req, res) => {
    CreateCharacter.findById(req.params.id, (error, foundCharacter) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('createcharacter/Edit', {
                createcharacter: foundCharacter
            })
        }
    })
});

//SHOW
CreateCharacterRouter.get('/:id', (req, res) => {
    CreateCharacter.findById(req.params.id, (error, foundCharacter) => {
        res.render('createcharacter/Show', {
            createcharacter: foundCharacter
        });
    });
});

//EXPORT ROUTER
module.exports = CreateCharacterRouter;