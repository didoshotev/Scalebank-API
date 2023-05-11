const mongoose = require('mongoose')

const bankStatementSchema = new mongoose.Schema({
    bank_name: { type: String, required: true },
    account_holder: { type: String, required: true },
    account_number: { type: String, required: true },
    statement_period: { type: String, required: true },
});


const BankStatement = mongoose.model('BankStatement', bankStatementSchema);

module.exports = BankStatement;

