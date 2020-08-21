const EquipmentRouter = require('express').Router();
const Equipment = require('../models/equipment');

//INDEX
EquipmentRouter.get('/', (req, res) => {
    Equipment.find({}, (error, allEquipment) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('equipment/Index', {
                equipment: allEquipment
            })
        }
    })
})

//NEW
EquipmentRouter.get('/new', (req, res) => {
    res.render('equipment/New')
})

//DELETE
EquipmentRouter.delete('/:id', (req, res) => {
    Equipment.findByIdAndDelete(req.params.id, (error, deletedEquipment) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedEquipment)
            res.redirect('/equipment')
        }
    })
})

//UPDATE
EquipmentRouter.put('/:id', (req, res) => {
    Equipment.findByIdAndUpdate(req.params.id, req.body, (error, foundEquipment) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/equipment')
        }
    })
})

//CREATE
EquipmentRouter.post('/', (req, res) => {
    Equipment.create(req.body, (error, createdEquipment) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdEquipment)
            res.redirect('/equipment')
        }
    })

})

//EDIT
EquipmentRouter.get('/:id/edit', (req, res) => {
    Equipment.findById(req.params.id, (error, foundEquipment) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('equipment/Edit', {
                equipment: foundEquipment
            })
        }
    })
});

//SHOW
EquipmentRouter.get('/:id', (req, res) => {
    Equipment.findById(req.params.id, (error, foundEquipment) => {
        res.render('equipment/Show', {
            equipment: foundEquipment
        });
    });
});

//EXPORT ROUTER
module.exports = EquipmentRouter;