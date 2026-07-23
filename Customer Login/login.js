function login() {

    const mobile =
        document.getElementById("loginUserNum").value.trim();

    if (mobile === "") {
        alert("Please enter mobile number");
        return;
    }

    const data =
        localStorage.getItem(mobile);

    console.log("Entered Mobile:", mobile);
    console.log("Stored Data:", data);

    if (data) {

        const customer = JSON.parse(data);

        localStorage.setItem(
            "currentUser",
            mobile
        );

        alert("Login Successful!");

        window.location.href =
            "../Dashboard/dashboard.html";

    } else {

        alert("User Not Found!");
    }
}