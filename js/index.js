// Your code goes here

//mouseover and mouseleave

const logoText = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-link');

logoText.addEventListener('mouseover', (event) => {
  logoText.style.color = 'blue';
  logoText.style.transform = 'scale(1.3)';
  logoText.style.transition = '1s';
  event.stopPropagation();
});

logoText.addEventListener('mouseleave', (event) => {
  logoText.style.color = 'black';
  logoText.style.transform = 'scale(1)';
  event.stopPropagation();
});



//wheel

const header = document.querySelector('.intro');
const funBusImg = document.querySelector('.intro img');
const introP = document.querySelector('header p');

const changePhoto = (event) => {
  event.preventDefault();
  
  if(event.deltaY < 0){
    funBusImg.style.border = '1px solid black';
  } else if(event.deltaY > 0){
    funBusImg.style.border = 'none';
  }
};

funBusImg.addEventListener('wheel', changePhoto);



//dblclick and click

const secondCard = document.querySelector('.destination:nth-of-type(2)');

const secondBtn = secondCard.querySelector('.btn');

const changeBg = () => {
  secondCard.style.backgroundColor = 'hotpink';
};

const removeBg = () => {
  secondCard.style.backgroundColor = 'white';
}

secondBtn.addEventListener('dblclick', changeBg);
secondBtn.addEventListener('click', removeBg);




//select

//create two new elements to add in to be able to manipulate:

const pOne = document.createElement('p');
const pTwo = document.createElement('p');
const parentOfPs = document.querySelector('.intro');

pOne.textContent = 'This is the first paragraph added in.';
pTwo.textContent = 'This is the second paragraph added in.';

parentOfPs.append(pOne);
parentOfPs.append(pTwo);

pOne.style.marginTop = '2.5vh';