const mobile =
    localStorage.getItem("currentUser");

const customer =
    JSON.parse(localStorage.getItem(mobile));

document.getElementById("customerName").innerText =
    customer.name;

document.getElementById("customerMobile").innerText =
    customer.mobile;

document.getElementById("customerBalance").innerText =
    customer.balance;

// function deposit(){
//     alert("Deposit handled by Python API");
// }

// function withdraw(){
//     alert("Withdraw handled by Python API");
// }