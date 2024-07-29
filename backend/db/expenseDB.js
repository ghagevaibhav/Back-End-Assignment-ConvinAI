const mongoose = require('mongoose')

mongoose.connect('mongo-URL')

const expenseSchema = new mongoose.Schema({
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    contributors:[{userId: mongoose.Schema.Types.ObjectId, amount: Number}]
});

const Expenses = mongoose.model('Expenses', ExpenseSchema);

module.exports = Expenses   
