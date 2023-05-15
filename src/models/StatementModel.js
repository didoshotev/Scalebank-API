const mongoose = require('mongoose')
const { TransactionSchema } = require('./TransactionModel')
const { DB_COLLECTIONS } = require('../settings/constants')

const bankStatementSchema = new mongoose.Schema(
    {
        bankName: { type: String, required: true },
        accountHolder: { type: String, required: true },
        accountNumber: { type: String, required: true },
        statementPeriod: { type: String, required: true },
        transactions: [TransactionSchema],
    },
    { versionKey: false }
)

const BankStatement = mongoose.model(
    'BankStatement',
    bankStatementSchema,
    DB_COLLECTIONS.BANK_STATEMENT
)

module.exports = BankStatement
