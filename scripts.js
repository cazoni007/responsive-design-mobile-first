const rightArrow = document.querySelector('.arrow--right');
const container = document.querySelector('.table-container');
const leftArrow = document.querySelector('.arrow--left');

const rightPlansArrow = document.querySelector('.arrow--plans-right');
const plansContainer = document.querySelector('.plans__cards');
const leftPlansArrow = document.querySelector('.arrow--plans-left');

const leftCard = document.querySelector('.left-card');
const leftPcard = document.querySelector('.left-p-card');
const leftAcard = document.querySelector('.left-a-card');
const leftHcard = document.querySelector('.left-h1-card');
const leftCardArrow = document.querySelector('.left-card-arrow');

const centerCard = document.querySelector('.center-card')
const centerFloatCard = document.querySelector('.center-float-card');
const centerPcard = document.querySelector('.center-p-card');
const centerAcard = document.querySelector('.center-a-card');
const centerHcard = document.querySelector('.center-h1-card');
const centerCardArrow = document.querySelector('.center-card-arrow');

const rightCard = document.querySelector('.right-card');
const rightPcard = document.querySelector('.right-p-card');
const rightAcard = document.querySelector('.right-a-card');
const rightHcard = document.querySelector('.right-h1-card');
const rightCardArrow = document.querySelector('.right-card-arrow');


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

        leftCard.classList.remove('cards-display-none');
        leftPcard.classList.remove('no-text');
        leftAcard.classList.remove('no-text');
        leftHcard.classList.remove('no-text');
        leftCardArrow.classList.add('arrow-right-icon');

        centerCard.classList.add('cards-display-none');
        centerFloatCard.classList.add('no-text');
        centerFloatCard.classList.remove('inter-title--float-title');
        centerPcard.classList.add('no-text');
        centerAcard.classList.add('no-text');
        centerHcard.classList.add('no-text');
        centerCardArrow.classList.remove('arrow-right-icon');
    }
    else if (plansContainer.scrollLeft + plansContainer.offsetWidth >= plansContainer.scrollWidth - (plansContainer.scrollWidth / 4)) {
        rightPlansArrow.classList.add('inactive');
        leftPlansArrow.classList.remove('inactive');

        rightCard.classList.remove('cards-display-none');
        rightPcard.classList.remove('no-text');
        rightAcard.classList.remove('no-text');
        rightHcard.classList.remove('no-text');
        rightCardArrow.classList.add('arrow-right-icon');

        centerCard.classList.add('cards-display-none');
        centerFloatCard.classList.add('no-text');
        centerFloatCard.classList.remove('inter-title--float-title');
        centerPcard.classList.add('no-text');
        centerAcard.classList.add('no-text');
        centerHcard.classList.add('no-text');
        centerCardArrow.classList.remove('arrow-right-icon');
    }
    else {
        rightPlansArrow.classList.remove('inactive');
        leftPlansArrow.classList.remove('inactive');
        
        leftCard.classList.add('cards-display-none');
        leftPcard.classList.add('no-text');
        leftAcard.classList.add('no-text');
        leftHcard.classList.add('no-text');
        leftCardArrow.classList.remove('arrow-right-icon');

        centerCard.classList.remove('cards-display-none');
        centerFloatCard.classList.remove('no-text');
        centerFloatCard.classList.add('inter-title--float-title');
        centerPcard.classList.remove('no-text');
        centerAcard.classList.remove('no-text');
        centerHcard.classList.remove('no-text');
        centerCardArrow.classList.add('arrow-right-icon');

        rightCard.classList.add('cards-display-none');
        rightPcard.classList.add('no-text');
        rightAcard.classList.add('no-text');
        rightHcard.classList.add('no-text');
        rightCardArrow.classList.remove('arrow-right-icon');
    }
}
window.onload = function() {
    plansContainer.scrollLeft = plansContainer.scrollWidth / 4;
};