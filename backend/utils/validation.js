exports.validationExpense = (participants) => {
    let totalPercent = 0;
    for (const participant of participants){
        if(participant.percentage) totalPercent += participant.percentage;
    }
    if(totalPercent !== 100){
        return 'Percentage do not add upto 100'
    }
    return null;
}
