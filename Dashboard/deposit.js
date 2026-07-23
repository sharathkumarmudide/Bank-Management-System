async function deposit() {

    let amount = Number(
        prompt("Enter Deposit Amount")
    );

    const response = await fetch(
        "http://127.0.0.1:8000/deposit",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                balance: customer.balance,
                amount: amount
            })
        }
    );

    const result = await response.json();

    customer.balance = result.balance;

    localStorage.setItem(
        customer.mobile,
        JSON.stringify(customer)
    );

    document.getElementById(
        "customerBalance"
    ).innerText = customer.balance;
}