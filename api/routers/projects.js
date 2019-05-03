const router = require('express').Router()
const projects = require('../../data/helpers/projects')

router.get('/', async (req, res) => {
    try {
        const get = await projects.get()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const { body } = req
    if (body.name && body.completed !== null) {
        try {
            const post = await projects.insert(body)
            const get = await projects.get()
            post ?
                res.status(200).json(get)
                :
                res.status(400).json({
                    error: `'${body.name}' already exists. Please try a different project name.`
                })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(400).json({
            error: 'You must include a name and specify whether the project was completed (boolean) or not.'
        })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const get = await projects.get(id)
        get ?
            res.status(200).json(get)
            :
            res.status(404).json({
                error: `No project with an id of '${id}' exists. Please try again.`
            })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router
