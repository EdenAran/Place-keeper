'use strict';




function onInit() {
    var userData = getUserData()
    renderPage(userData);
}

function renderPage(userData) {
    renderColor(userData);
    renderDate(userData);
    renderTime(userData);
    renderEmail(userData);
    renderAge(userData);
}

function renderColor({bgColor}){
    const elBgColor = document.querySelector('[name=bg-color]');
    elBgColor.value = bgColor;
}
function renderDate({date}){
    const elDate = document.querySelector('[name=date]');
    elDate.value = date;
}

function renderTime({time}){
    const elTime = document.querySelector('[name=time]');
    elTime.value = time;
}

function renderEmail({email}){
    const elEmail = document.querySelector('[name=email]');
    elEmail.value = email;
}

function renderAge({age}){
    const elAge = document.querySelector('.age span');
    const elRange = document.querySelector('[name=age');
    elAge.innerText = age;
    elRange.value = age;
}

function onSubmit(ev){
    ev.preventDefault();
    savePrefToStorage();
}

function onColorChange(color) {
    setColor(color);
}

function onDateChange(date) {
    setDate(date);
}

function onTimeChange(time) {
    setTime(`${time}`);
}

function onEmailChange(email){
    setEmail(email);
}

function onAgeChange(age){
    setAge(age);
    if (!checkAge(age)) document.querySelector('[name=age]').setCustomValidity('The age and the birthday do not match');
    else document.querySelector('[name=age]').setCustomValidity('')
}