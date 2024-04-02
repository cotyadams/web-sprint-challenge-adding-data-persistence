// build your `/api/tasks` router here

const { insert, getById, getAll, getProjectId } = require('./model.js')
const express = require('express')

const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const project = await getProjectId(req.body.project_id)
        if (project.length < 1) {
            res.status(415).json([])
            return
        }
        console.log('project', project)
        const taskId = await insert(req.body)
        const newtask = await getById(taskId)
        // converting to boolean
        newtask[0].task_completed = !!newtask[0].task_completed
        res.status(201).json(newtask[0])
    } catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const tasks = await getAll()
        tasks.map((task) => {
            task.task_completed = !!task.task_completed
        })
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
})

module.exports = router