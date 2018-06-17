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

        var elDropDown = document.querySelector('.journal-dropdown-content');
        elDropDown.classList.add('small-dropdown');
        elDropDown.classList.remove('journal-dropdown-content');

        var elItemWithDropDown = elDropDown.parentElement;
        elItemWithDropDown.onclick = function (ev) { openNavItem(ev.target); toggleDropdownClick(); };
        elItemWithDropDown.onmouseover = '';
        elItemWithDropDown.onmouseout='';
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
        var elDropDown = document.querySelector('.small-dropdown');
        elDropDown.classList.add('journal-dropdown-content');
        elDropDown.classList.remove('small-dropdown');

        var elItemWithDropDown = elDropDown.parentElement;
        // elItemWithDropDown.onclick = function (ev) { openNavItem(ev.target); };
        // elItemWithDropDown.onmouseover = ' showDropDown();';
        // elItemWithDropDown.onmouseout=' hideDropDown();';

    }

}


function displayModal() {
    var elModalback = document.querySelector('.modal-background');
    elModalback.style.display = 'block';

    var elModal = document.querySelector('.modal');
    elModal.style.display = 'flex';

}

function closeModal() {
    var elModalback = document.querySelector('.modal-background');
    elModalback.style.display = 'none';

    var elModal = document.querySelector('.modal');
    elModal.style.display = 'none';

}

function showDropDown() {
    var elDropDown = document.querySelector('.journal-dropdown-content');
    if (!elDropDown) {
        elDropDown = document.querySelector('.small-dropdown');
    }
    elDropDown.style.display = 'flex';
}

function hideDropDown() {
    var elDropDown = document.querySelector('.journal-dropdown-content');
    if (!elDropDown) {
        elDropDown = document.querySelector('.small-dropdown');
    }
    elDropDown.style.display = 'none';
}

function toggleDropdownClick(){
    var elDropDown = document.querySelector('.small-dropdown');
    elDropDown.style.display = 'flex';
}