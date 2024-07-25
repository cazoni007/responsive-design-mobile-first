const rightArrow = document.querySelector('.table-container__arrow-right');
const container = document.querySelector('.table-container');
const leftArrow = document.querySelector('.table-container__arrow-left');
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