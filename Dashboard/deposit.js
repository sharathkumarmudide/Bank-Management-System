// async function deposit() {

//     let amount = Number(
//         prompt("Enter Deposit Amount")
//     );

//     const response = await fetch(
//         "http://127.0.0.1:8000/deposit",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 balance: customer.balance,
//                 amount: amount
//             })
//         }
//     );

//     const result = await response.json();

//     customer.balance = result.balance;

//     localStorage.setItem(
//         customer.mobile,
//         JSON.stringify(customer)
//     );

//     document.getElementById(
//         "customerBalance"
//     ).innerText = customer.balance;
// }
async function deposit() {
    const amount = Number(prompt("Enter Deposit Amount"));

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    try {
        const response = await fetch("https://bank-backend.onrender.com/deposit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                balance: customer.balance,
                amount: amount
            })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const result = await response.json();

        customer.balance = result.balance;

        localStorage.setItem(
            customer.mobile,
            JSON.stringify(customer)
        );

        document.getElementById("customerBalance").innerText =
            customer.balance;

        alert("Deposit Successful!");
    } catch (error) {
        console.error(error);
        alert("Unable to connect to the server.");
    }
}