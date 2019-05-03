const router = require('express').Router()
const actions = require('../../data/helpers/actions')

router.get('/', async (req, res) => {
    try {
        const get = await actions.get()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const { body } = req
    if (body.description && body.pj_id && body.completed !== null) {
        try {
            const post = await actions.insert(body)
            const get = await actions.get()
            post ?
                res.status(200).json(get)
                :
                res.status(400).json({
                    error: `'${body.name}' already exists. Please try a different action name.`
                })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(400).json({
            error: 'You must include a description (description, string), project id (pj_id, number), and specify whether the action was completed (completed, boolean) or not.'
        })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const get = await actions.get(id)
        get ?
            res.status(200).json(get)
            :
            res.status(404).json({
                error: `No action with an id of '${id}' exists. Please try again.`
            })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router
