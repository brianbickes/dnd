const CreateRouter = require('express').Router();
const Create = require('../models/create');

//INDEX
CreateRouter.get('/', (req, res) => {
    Create.find({}, (error, allCreate) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('create/Index', {
                create: allCreate
            })
        }
    })
})

//NEW
CreateRouter.get('/new', (req, res) => {
    res.render('create/New')
})

//DELETE
CreateRouter.delete('/:id', (req, res) => {
    Create.findByIdAndDelete(req.params.id, (error, deletedCreate) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedCreate)
            res.redirect('/create')
        }
    })
})

//UPDATE
CreateRouter.put('/:id', (req, res) => {
    Create.findByIdAndUpdate(req.params.id, req.body, (error, foundCreate) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/create')
        }
    })
})

//CREATE
CreateRouter.post('/', (req, res) => {
    Create.create(req.body, (error, create) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(create)
            res.redirect('/create')
        }
    })

})

//EDIT
CreateRouter.get('/:id/edit', (req, res) => {
    Create.findById(req.params.id, (error, foundCreate) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('create/Edit', {
                create: foundCreate
            })
        }
    })
});

//SHOW
CreateRouter.get('/:id', (req, res) => {
    Create.findById(req.params.id, (error, foundCreate) => {
        res.render('create/Show', {
            create: foundCreate
        });
    });
});

//EXPORT ROUTER
module.exports = CreateRouter;