// build your `/api/projects` router here
const { insert, getById, getAll } = require('./model.js')
const express = require('express')

const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const projectId = await insert(req.body)
        const newProject = await getById(projectId)
        // converting to boolean
        newProject[0].project_completed = !!newProject[0].project_completed
        res.status(201).json(newProject[0])
    } catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const projects = await getAll()
        projects.map((project) => {
            project.project_completed = !!project.project_completed
        })
        res.status(200).json(projects)
    } catch (err) {
        next(err)
    }
})

module.exports = router