const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode");
});
function signup(e) {
    event.preventDefault();
    const username = document.getElementById("signUpUserName").value;
    const password = document.getElementById("signUpPassword").value;
    const email = document.getElementById("signUpEmail").value;
    const user = {
        email: email,
        username: username,
        password: password
    };
    const json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log("user added");
}
function loginFunction(e) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");
    const user = localStorage.getItem(username);
    const data = JSON.parse(user);
    console.log(data);
    if (user == null) result.innerHTML = "wrong username";
    else if (username == data.username && password == data.password) {
        result.innerHTML = "logged in";
        window.location = "http://localhost:1234/index.html";
    } else result.innerHTML = "wrong password";
}

//# sourceMappingURL=login.16070edf.js.map
