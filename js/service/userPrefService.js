'use strict';

var gUserData;

function setColor(color) {
    gUserData.bgColor = color;
}

function setDate(date) {
    gUserData.date = date;
}

function setTime(time) {
    gUserData.time = time;
}

function setEmail(email) {
    gUserData.email = email;
}

function setAge(age) {
    gUserData.age = age;
    renderAge(gUserData);
}

function checkAge(age) {
    if (!gUserData.date) return;
    const [userYear, userMonth, userDay] = gUserData.date.split('-').map(num => +num);
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    var diff;
    if (month > userMonth) diff = 0;
    else if (month < userMonth) diff = -1;
    else diff = (day > userDay) ? 0 : -1;
    var calcAge = year - userYear + diff;
    return +age === calcAge;
}

function getUserData() {
    setUserData();
    return gUserData;
}

function savePrefToStorage() {
    saveToStorage('userData', gUserData);
}

function setUserData() {
    var data = loadFromStorage('userData');
    if (!data) data = {
        bgColor: '#000000',
        date: '',
        time: '',
        email: '',
        age: ''
    }
    gUserData = data;
}
