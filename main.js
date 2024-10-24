const eye = document.getElementById("eyeclick")

eye.addEventListener("click", () => {
    if (eye.className === "fa-solid fa-eye") {
        eye.className = "fa-solid fa-eye-slash";
        inputPassword.setAttribute("type", "text");
    } else {
        eye.className = "fa-solid fa-eye";
        inputPassword.setAttribute("type", "password");
    }
})

const inputPassword = document.getElementById("pass");
const progress = document.getElementById("progress");
let numPlusPro = 25;
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");

inputPassword.onkeyup = () => {
    let numPro = 0;
    const password = inputPassword.value;
    const passwordChar = /[a-zA-Z]/;
    const passwordNum = /[0-9]/;
    const passwordSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (passwordChar.test(password)) {
        numPro += numPlusPro;
        progress.style.width = numPro + "%";
        span1.style.color = "green";
        span1.style.border = "2px solid green";
        span1.innerHTML = `<i class="fa-solid fa-check">`;
    } else  {
        progress.style.width = numPro + "%";
        span1.style.color = "red";
        span1.style.border = "2px solid red";
        span1.innerHTML = `<i class="fa-solid fa-exclamation fa-check">`;
    }

    if (passwordNum.test(password)) {
        numPro += numPlusPro;
        progress.style.width = numPro + "%";
        span2.style.color = "green";
        span2.style.border = "2px solid green";
        span2.innerHTML = `<i class="fa-solid fa-check">`;
    } else {
        progress.style.width = numPro + "%";
        span2.style.color = "red";
        span2.style.border = "2px solid red";
        span2.innerHTML = `<i class="fa-solid fa-exclamation fa-check">`;
    }

    if (passwordSpecialChar.test(password)) {
        numPro += numPlusPro;
        progress.style.width = numPro + "%";
        span3.style.color = "green";
        span3.style.border = "2px solid green";
        span3.innerHTML = `<i class="fa-solid fa-check">`;
    } else {
        progress.style.width = numPro + "%";
        span3.style.color = "red";
        span3.style.border = "2px solid red";
        span3.innerHTML = `<i class="fa-solid fa-exclamation fa-check">`;
    }


    if (password.length >= 8) {
        numPro += numPlusPro;
        progress.style.width = numPro + "%";
        span4.style.color = "green";
        span4.style.border = "2px solid green";
        span4.innerHTML = `<i class="fa-solid fa-check">`;
    } else {
        progress.style.width = numPro + "%";
        span4.style.color = "red";
        span4.style.border = "2px solid red";
        span4.innerHTML = `<i class="fa-solid fa-exclamation fa-check">`;
    }


    if (numPro >= 100) {
        numPro = 100;
        progress.style.width = "100%";
        progress.style.backgroundColor = "green";
    } else if (numPro >= 75) {
        progress.style.backgroundColor = "orange";
    } else if (numPro >= 50) {
        progress.style.backgroundColor = "orange";
    } else if (numPro >= 25) {
        progress.style.backgroundColor = "red";
    };

};