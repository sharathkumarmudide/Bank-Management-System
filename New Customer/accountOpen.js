document.getElementById("bankForm").addEventListener("submit", function(e){

    e.preventDefault();

    const customer = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value || "Not Provided",
        balance: Number(document.getElementById("deposit").value)
    };

    localStorage.setItem(
        customer.mobile,
        JSON.stringify(customer)
    );

    alert(
        "Account Created Successfully\n\n" +
        "Available Balance : ₹" + customer.balance
    );
    window.location.href = "/Customer Login/login.html";

    this.reset();
});