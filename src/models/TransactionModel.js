const TransactionSchema = new mongoose.Schema({
    date: { type: String, required: true },
    description: { type: String, required: true },
    deposit: { type: Number, default: null },
    withdrawal: { type: Number, default: null },
    balance: { type: Number, required: true },
})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction
