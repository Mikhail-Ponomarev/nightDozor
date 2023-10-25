const urlRegister = "http://127.0.0.1:8000/auth/register";

const register = async (
  url,
  email,
  password,
  name,
  surname,
  patronymic,
  phone_number
) => {
  return await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      is_active: true,
      is_superuser: false,
      is_verified: false,
      name: name,
      surname: surname,
      patronymic: patronymic,
      phone_number: phone_number,
    }),
  });
};

const request = register(
  urlRegister,
  "misheleponomarev555555@gmail.com",
  "string222",
  "Mikhail",
  "Ponomarev",
  "Mikhailovic",
  "89896246203"
)
  .then((data) => data.json())
  .then((result) => {
    console.log(result);
  });
