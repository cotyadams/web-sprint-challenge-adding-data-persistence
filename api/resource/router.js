// build your `/api/resources` router here
const express = require('express')
const { insert, getAll, getById } = require('./model.js')


const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const resourceID = await insert(req.body);
        const newResource = await getById(resourceID);
        if (newResource[0].resource_description === null) {
            res.status(201).json({
                resource_name: newResource[0].resource_name
            })
        }
        res.status(201).json(newResource)

    } catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const resources = await getAll()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})
module.exports = router