'use strict'


function openNavItem(elNavItem) {
    var elnavs = document.querySelectorAll('.nav-item');
    for (var i = 0; i < elnavs.length; i++) {
        elnavs[i].classList.remove('nav-item-clicked');
    }
    elNavItem.classList.add('nav-item-clicked');
}

function continueReadHovered(elItem) {
    elItem.innerText = 'continue reading ➞'
}

function continueReadHoveredOff(elItem) {
    elItem.innerText = 'continue reading'
}

function displayMenu(elMenu, menuTxt) {
    if (menuTxt === '☰') {
        elMenu.innerText = '🗴';
        elMenu.style.background = 'black';
        elMenu.style.color = 'white';

        var elNavItemsList = document.querySelector('.nav-list');
        elNavItemsList.classList.add('display-nav-list');
        elNavItemsList.style.position = 'fixed';

        var elNavItem = document.querySelectorAll('.nav-item');
        for (var i = 0; i < elNavItem.length; i++) {
            elNavItem[i].classList.add('small-nav-item');
        }
    }
    if (menuTxt === '🗴') {
        elMenu.innerText = '☰';
        elMenu.style.background = 'white';
        elMenu.style.color = 'black';

        var elNavItemsList = document.querySelector('.nav-list');
        elNavItemsList.classList.remove('display-nav-list');
        elNavItemsList.style.position = '';

        var elNavItem = document.querySelectorAll('.nav-item');
        for (var i = 0; i < elNavItem.length; i++) {
            elNavItem[i].classList.remove('small-nav-item');
            elNavItem[i].classList.remove('nav-item-clicked');
        }

    }

}
