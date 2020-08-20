const ClassesRouter = require('express').Router();
const Classes = require('../models/classes');

//INDEX
ClassesRouter.get('/', (req, res) => {
    Classes.find({}, (error, allClasses) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('classes/Index', {
                classes: allClasses
            })
        }
    })
})

//NEW
ClassesRouter.get('/new', (req, res) => {
    res.render('classes/New')
})

//DELETE
ClassesRouter.delete('/:id', (req, res) => {
    Classes.findByIdAndDelete(req.params.id, (error, deletedClass) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedClass)
            res.redirect('/classes')
        }
    })
})

//UPDATE
ClassesRouter.put('/:id', (req, res) => {
    Classes.findByIdAndUpdate(req.params.id, req.body, (error, foundClass) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/classes')
        }
    })
})

//CREATE
ClassesRouter.post('/', (req, res) => {
    Classes.create(req.body, (error, createdClass) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdClass)
            res.redirect('/classes')
        }
    })

})

//EDIT
ClassesRouter.get('/:id/edit', (req, res) => {
    Classes.findById(req.params.id, (error, foundClass) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('classes/Edit', {
                classes: foundClass
            })
        }
    })
});

//SHOW
ClassesRouter.get('/:id', (req, res) => {
    Classes.findById(req.params.id, (error, foundClass) => {
        res.render('classes/Show', {
            classes: foundClass
        });
    });
});

//EXPORT ROUTER
module.exports = ClassesRouter;