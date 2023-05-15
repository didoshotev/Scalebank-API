const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema(
    {
        date: { type: String, required: true },
        description: { type: String, required: true },
        deposit: { type: Number, default: null },
        withdrawal: { type: Number, default: null },
        balance: { type: Number, required: true },
    },
    { versionKey: false }
)

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = { Transaction, TransactionSchema }
