async function withdraw() {

    let amount = Number(
        prompt("Enter Withdraw Amount")
    );

    const response = await fetch(
        "http://bank-backend.onrender.com/withdraw",
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

    if(result.error){
        alert(result.error);
        return;
    }

    customer.balance = result.balance;

    localStorage.setItem(
        customer.mobile,
        JSON.stringify(customer)
    );

    document.getElementById(
        "customerBalance"
    ).innerText = customer.balance;
}