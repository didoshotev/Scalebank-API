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

router.post('/statement', async (req, res) => {
    try {
        const bankStatement = new BankStatement(req.body)
        const result = await bankStatement.save()
        console.log('result: ', result)
        return res.status(201).send('Success')
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = router
