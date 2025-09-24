let inputFirst = prompt("введіть щось");
let inputSecond = prompt("введіть щось");

if (inputFirst.length === 0 || inputSecond.length === 0) {
    alert("не всі поля заповнені");
}
else {
    alert("всі поля заповнені");
}

let firstNumber = Number(prompt("введіть перше число"));
let secondNumber = Number(prompt("введіть друге число"));
let total = firstNumber + secondNumber;

if (total > 10) {
    alert("Сума більша за 10");
}
else {
    alert("Сума менша або дорівнює 10");
}

let txt = "JavaScript";

if (txt.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
}
else {
    alert("Текст не містить слово JavaScript");
}

let enterYourNumber = Number(prompt("введіть своє число"));

if (enterYourNumber > 10 && enterYourNumber < 20) {
    alert(`Число ${enterYourNumber} входить в діапазон від 10 до 20`);
}
else{
    alert( `Число ${enterYourNumber} не входить в діапазон від 10 до 20`);
}

let yourName = prompt("введіть своє імя");
let yourEmail = prompt("введіть свій email");
let yourPasword = prompt("введіть свій пароль");


if (yourName.length >= 3 && yourEmail.includes("@") && yourPasword.length >= 6) {
    alert("Перенаправлення на іншу сторінку");
} else {
    alert("Помилка: неправильне заповнення");
}