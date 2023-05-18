const BankStatement = require('../models/StatementModel')

const router = require('express').Router()

router.get('/statements', async (req, res) => {
    try {
        const bankStatements = await BankStatement.find()
        res.status(200).json(bankStatements)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})

router.get('/statements/:_id', async (req, res) => {
    try {
        const bankStatement = await BankStatement.findById(req.params._id)
        if (!bankStatement) {
            return res.status(404).json({ message: 'Bank statement not found' })
        }
        res.status(200).json(bankStatement)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})

router.post('/statement', async (req, res) => {
    try {
        const bankStatement = new BankStatement(req.body)
        await bankStatement.save()
        return res.status(201).send('Success')
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router
