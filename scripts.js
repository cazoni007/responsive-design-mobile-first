const rightArrow = document.querySelector('.arrow--right');
const container = document.querySelector('.table-container');
const leftArrow = document.querySelector('.arrow--left');

const rightPlansArrow = document.querySelector('.arrow--plans-right');
const plansContainer = document.querySelector('.plans__cards');
const leftPlansArrow = document.querySelector('.arrow--plans-left');

document.querySelector('.header__plans').addEventListener('click', function() {
    document.querySelector('.plans').scrollIntoView({ behavior: 'smooth' });
});

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
container.addEventListener('scroll', inactiveArrows);

function moveRight(){
    container.scrollLeft += 10000;
}
function moveLeft(){
    container.scrollLeft -= 10000;
}

function inactiveArrows(){
    if (container.scrollLeft <= 0){
        leftArrow.classList.add('inactive');
        rightArrow.classList.remove('inactive');
    }
    else if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 5) {
        rightArrow.classList.add('inactive');
        leftArrow.classList.remove('inactive');
    }
    else {
        rightArrow.classList.remove('inactive');
        leftArrow.classList.remove('inactive');
    }
}

rightPlansArrow.addEventListener('click', movePlansRight);
leftPlansArrow.addEventListener('click', movePlansLeft);
plansContainer.addEventListener('scroll', inactivePlansArrows);

function movePlansRight(){
    plansContainer.scrollLeft += 192;
}
function movePlansLeft(){
    plansContainer.scrollLeft -= 192;
}
function inactivePlansArrows() {
    if (plansContainer.scrollLeft <= plansContainer.scrollWidth / 4){
        leftPlansArrow.classList.add('inactive');
        rightPlansArrow.classList.remove('inactive');
    }
    else if (plansContainer.scrollLeft + plansContainer.offsetWidth >= plansContainer.scrollWidth - (plansContainer.scrollWidth / 4)) {
        rightPlansArrow.classList.add('inactive');
        leftPlansArrow.classList.remove('inactive');
    }
    else {
        rightPlansArrow.classList.remove('inactive');
        leftPlansArrow.classList.remove('inactive');
    }
}
function inactivePlansArrows() {
    if (plansContainer.scrollLeft <= plansContainer.scrollWidth / 4){
        leftPlansArrow.classList.add('inactive');
        rightPlansArrow.classList.remove('inactive');
    }
    else if (plansContainer.scrollLeft + plansContainer.offsetWidth >= plansContainer.scrollWidth - (plansContainer.scrollWidth / 4)) {
        rightPlansArrow.classList.add('inactive');
        leftPlansArrow.classList.remove('inactive');
    }
    else {
        rightPlansArrow.classList.remove('inactive');
        leftPlansArrow.classList.remove('inactive');
    }
}
window.onload = function() {
    plansContainer.scrollLeft = plansContainer.scrollWidth / 4;
};