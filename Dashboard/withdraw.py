def withdraw(balance, amount):

    if amount > balance:
        return {
            "error": "Insufficient Balance"
        }

    return {
        "balance": balance - amount
    }