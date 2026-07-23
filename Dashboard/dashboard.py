from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from deposit import deposit
from withdraw import withdraw

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/deposit")
def deposit_money(data: dict):

    balance = data["balance"]
    amount = data["amount"]

    updated_balance = deposit(balance, amount)

    return {
        "balance": updated_balance
    }


@app.post("/withdraw")
def withdraw_money(data: dict):

    balance = data["balance"]
    amount = data["amount"]

    return withdraw(balance, amount)