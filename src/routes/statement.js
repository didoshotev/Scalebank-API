const BankStatementController = require('../controller/statement')

const router = require('express').Router()

router.get('/statements', BankStatementController.getAll)
