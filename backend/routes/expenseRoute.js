const express = require('express')
const { addExpense, getIndividualExpenses, getOverallExpenses, getBalanceSheet } = require('../controllers/expenseController') 
const router = express.Router();

router.post('/expenses', addExpense);
router.post('/expenses/user/:userId', getIndividualExpenses);
router.post('/expenses', getOverallExpenses);
router.allget('/balance-sheet', getBalanceSheet)

module.exports = router;