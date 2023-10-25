const urlTask = "http://localhost:8000/tasks";
const urlGame = "http://localhost:8000/games";
// const urlUnity = "http://localhost:8000/games/";
const token = localStorage.getItem("token");
const level = document.getElementById("difficultyLevelID");
const place = document.getElementById("placeID");
const answer = document.getElementById("responceID");
const mystery = document.getElementById("placeLegendID");
const createRiddle = document.querySelector(".btn");
const gameName = document.getElementById("gameNameID");
const history = document.getElementById("historyID");
const dateStart = document.getElementById("dateStartID");
const dateEnd = document.getElementById("dateEndID");
const create = document.querySelector(".btn-block");
const sentData = document.querySelector(".sendData");

const taskRequest = async (level, mystery, place, answer) => {
  return await fetch(urlTask, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${token}`,
    },
    body: JSON.stringify({
      level: level,
      mystery_of_place: mystery,
      place: place,
      answer: answer,
    }),
  });
};

const gameRequest = async (name, legend, start, end) => {
  return await fetch(urlGame, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${token}`,
    },
    body: JSON.stringify({
      name: name,
      legend: legend,
      datetime_start: start,
      datetime_end: end,
    }),
  });
};

level.addEventListener("focus", () => {
  level.placeholder = "";
});

level.addEventListener("blur", () => {
  if (!level.placeholder) {
    level.placeholder = "Уровень сложности";
  }
});

createRiddle.addEventListener("click", () => {
  taskRequest(level.value, mystery.value, place.value, answer.value)
    .then((data) => data.json())
    .then((responce) => {
      localStorage.setItem("task_id", responce.id.toString());
    });
});

create.addEventListener("click", () => {
  gameRequest(gameName.value, history.value, dateStart.value, dateEnd.value)
    .then((data) => data.json())
    .then((result) => {
      localStorage.setItem("game_id", result.id.toString());
    });
});

sentData.addEventListener("click", () => {});
