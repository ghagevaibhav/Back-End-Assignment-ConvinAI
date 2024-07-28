const Expenses = require('../db/expenseDB')
const User = require('../db/userDB')

const { validateResponse } = require('../validate/validateRes.js')

exports.addExpense =async (req, res) => {
    try{
        const { amount, description, participants } = req.body;
        const error = validateResponse(participants);
        if(error) {
            return res.status(400).json({
                msg: 'Invalid Input'
            })
        }

        const expense = await Expenses.create({amount, description, participants});
        res.status(201).json({
            msg: 'Expense Added Successfully'
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}

exports.getIndividualExpenses = async (req, res) => {
    try{
        const expenses = await Expenses.find({
            'participants.userId' : req.params.userId 
        });
        res.status(200).json({
            msg: 'Fetched Idivudual expense Successfully',
            expenses: expenses
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}

exports.getOverallExpenses = async (req, res) => {
    try{
        const expenses = await Expenses.find();
        res.status(200).json({
            msg: 'Fetched Overall Expenses Successfully',
            expenses: expenses
        });
    }
    catch(err){
        res.status(400).json({
            msg:err
        })
    }   
}

exports.getBalanceSheet = async (req, res) => {
    try{
        const expenses = await Expenses.find();
        res.status(200).json({
            msg: 'Balance Sheet Generated'
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}