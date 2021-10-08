let yearBirth;
let city;
let sport;
let age;
let cityResult;
let sportResult;
yearBirth = prompt("Привет! Введи свой год рождения");
if (yearBirth === null) {
  alert("Жаль, что ты не захотел вводить свой год рождения");
}
age = 2021 - yearBirth;
city = prompt("В каком городе ты живешь?");
if (city === null) {
  alert("Жаль, что ты не захотел вводить свой город");
}
sport = prompt("А какой твой любимый вид спорта?");
if (sport === null) {
  alert("Жаль, что ты не захотел вводить свой любимый вид спорта");
}
switch (city) {
  case "Москва":
    cityResult = "Ты живешь в столице России";
    break;
  case "Минск":
    cityResult = "Ты живешь в столице Беларуссии";
    break;
  case "Киев":
    cityResult = "Ты живешь в столице Украины";
    break;
  default:
    cityResult = `Ты живешь в городе ${city}`;
    break;
}
switch (sport) {
  case "Футбол":
    sportResult = "Круто! Хочешь стать Роналду?";
    break;
  case "Волейбол":
    sportResult = "Круто! Хочешь стать Бруно?";
    break;
  case "Баскетбол":
    sportResult = "Круто! Хочешь стать Джорданом?";
    break;
  default:
    sportResult = " ";
}
console.log(sportResult);
alert(`Получается, что тебе ${age} лет \n${cityResult} \n${sportResult}`);
