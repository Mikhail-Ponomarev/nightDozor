const checkboxBlock = document.querySelector(".checkbox");

checkboxBlock.addEventListener("click", function () {
  checkboxBlock.classList.toggle("checkbox-img");
});

const input = document.querySelector(".input");
const password = document.querySelector(".password");

input.addEventListener("focus", () => {
  input.placeholder = "";
});
input.addEventListener("blur", () => {
  if (!input.value) {
    input.placeholder = "Почта";
  }
});

password.addEventListener("focus", () => {
  password.placeholder = "";
});
password.addEventListener("blur", () => {
  if (!password.value) {
    password.placeholder = "Пароль";
  }
});

const btn = document.querySelector(".link");
const urlLogin = "http://127.0.0.1:8000/auth/jwt/login";
const incorrectData = document.querySelector(".incorrectData");
let token;
const POSTrequest = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });
};
const coding = (login, password) => {
  return new URLSearchParams({
    grant_type: "",
    username: `${login}`,
    password: `${password}`,
    scope: "",
    client_id: "",
    client_secret: "",
  }).toString();
};
btn.addEventListener("click", () => {
  POSTrequest(urlLogin, coding(input.value, password.value))
    .then((data) => {
      if (data.status < 400) {
        window.location.href = "second-page.html";
      } else {
        input.value = "";
        password.value = "";
        incorrectData.classList.remove("none");
      }
      return data.json();
    })
    .then((responce) => {
      token = responce.access_token;
      localStorage.setItem("token", token.toString());
    });
});
