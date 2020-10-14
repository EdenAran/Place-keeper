'use strict';

function onInit() {
    const userData = loadFromStorage('userData');
    if (!userData) return;
    document.body.style.backgroundColor = userData.bgColor;
}