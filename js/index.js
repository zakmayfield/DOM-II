// Your code goes here

//mouseover and mouseleave / 1

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



//wheel / 2

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



//dblclick and click / 3

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




//select / 4

//create two new elements to add in to be able to manipulate:

const pOne = document.createElement('input');
const pTwo = document.createElement('p');
const parentOfPs = document.querySelector('.intro');

pOne.textContent = 'This is the first paragraph added in.';
pOne.value = 'Select certain letters from here: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
pOne.style.width = '100%';
pOne.style.padding = '1vh 2vw';
pOne.style.marginTop = '2.5vh';

pTwo.textContent = 'The letters selected above should appear here.';

parentOfPs.append(pOne);
parentOfPs.append(pTwo);

function logSelection(e) {
  const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);

  pTwo.textContent = `The letters you selected are: ${selection}`;
};

pOne.addEventListener('select', logSelection);




// resize 5

const mapImg = document.querySelector('.content-section .img-content img');

const riverImg = document.querySelector('.inverse-content .img-content img');


window.addEventListener('resize', (e) => {
  mapImg.src = 'img/fun.jpg';
  console.log(e);
});

window.addEventListener('resize', () => {
  riverImg.src = 'img/adventure.jpg'
});




// load 6

// window.addEventListener('load', () => {
//   alert('Page has fully loaded, you are welcome.');
// });




// keydown to change background color of section 7

const changeBox = document.createElement('div');
const parentOfDiv = document.querySelector('.content-destination');

changeBox.textContent = 'Tap Page And Type letter';
changeBox.style.border = '2px solid black';
changeBox.style.padding = '2vh';
changeBox.style.textAlign = 'center';
changeBox.style.fontSize = '1.5rem';

parentOfDiv.append(changeBox);

document.addEventListener('keydown', (e) => {
  if(e.code === 'KeyB'){
    changeBox.style.backgroundColor = 'blue';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyR'){
    changeBox.style.backgroundColor = 'red';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyP'){
    changeBox.style.backgroundColor = 'pink';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyO'){
    changeBox.style.backgroundColor = 'orange';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyT'){
    changeBox.style.backgroundColor = 'teal';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyI'){
    changeBox.style.backgroundColor = 'indigo';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyG'){
    changeBox.style.backgroundColor = 'green';
    changeBox.textContent = `You typed ${e.code}`;
  } else if(e.code === 'KeyY'){
    changeBox.style.backgroundColor = 'yellow';
    changeBox.textContent = `You typed ${e.code}`;
  } else {
    changeBox.style.backgroundColor = 'white';
    changeBox.textContent = `You typed ${e.code}`;
  }
});




// key up 8


document.addEventListener('keyup', (e) => {
  if(e.code){
    changeBox.style.backgroundColor = 'white';
    changeBox.textContent = 'Type Any letter';
  }
});




// create a form with one input and a submit button 9

const form = document.createElement('form');
const firstInput = document.createElement('input');
const firstSubmit = document.createElement('button');

firstSubmit.textContent = 'Submit Me';
firstSubmit.style.marginLeft = '2vw'
firstInput.placeholder = 'Something goes here.'
firstInput.style.width = '25%'
form.style.marginTop = '5vh';
parentOfDiv.style.textAlign = 'center';

parentOfDiv.append(form);
form.append(firstInput);
form.append(firstSubmit);

function alertSubmit(e){
  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let month = newDate.getMonth();
  let day = newDate.getDay();
  let year = newDate.getFullYear();
  alert(`Form has been submitted at: ${hours -12}:${minutes} on ${month +1}/${day +1}/${year}`);
  e.preventDefault();
}

form.addEventListener('submit', alertSubmit);




// focus / blur 10

firstInput.addEventListener('focus', (e) => {
  e.target.style.backgroundColor = 'gold';
  e.target.style.transform = 'scale(1.3)';
  e.target.style.transition = '2s';
});

firstInput.addEventListener('blur', (e) => {
  e.target.style.backgroundColor = 'white';
  e.target.style.transform = 'scale(1)';
});







// const nav = document.querySelector('.nav');
// const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(item => {
  item.addEventListener('mouseover', function(){
    item.style.color = 'gray';
  });
});

navItems.forEach(item => {
  item.addEventListener('mouseleave', function(){
    item.style.color = 'black';
  });
});




//stretch animations with gsap

gsap.from('.logo-heading', {
  duration: 4,
  opacity: 0,
  scale: 0.3,
  ease: 'elastic'
});

gsap.from('.nav-link', {
  duration: 2,
  opacity: 0,
  delay: 1.5,
  y: 50,
  stagger: 0.25
})