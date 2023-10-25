const urlLogin = "http://127.0.0.1:8000/auth/jwt/login";

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

POSTrequest(urlLogin, coding("user@example123.com", "string2222"))
  .then((data) => data.json())
  .then((responce) => {
    console.log(responce.access_token);
  });
