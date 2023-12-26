
const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 50;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);




//   galary image 

// Get the content element


// // Get a reference to the container element
// const container = document.getElementById('main-gallery');

// // const container = document.querySelectorAll('main-gallery');

// const sayHello = () => {

//     const computedStyle = window.getComputedStyle(container)
//     const leftValue = computedStyle.getPropertyValue('margin-left')

//     console.log('marginLeft =', leftValue)
//     console.log('interval running')
//     container.style.marginLeft = "-100%"
// }

// setInterval(sayHello, 1000);


// const container = document.getElementById('main-gallery');
// const containerWidth = container.offsetWidth;
// let scrollAmount = 100;
// const step = 10; // Adjust this value to control the scroll speed
// let isMouseOverContainer = false;


// const scrollContainer = () => {
//   scrollAmount += step;
//   container.style.marginLeft = `-${scrollAmount}%`;

  

//   if (scrollAmount >= 100) {
//     // Scroll completed, reset scrollAmount to 0
//     scrollAmount = 0;
//   }
// };

// setInterval(scrollContainer, 1000);


const container = document.getElementById('main-gallery');
const containerWidth = container.offsetWidth;
let scrollAmount = 0;
const step = 10; // Adjust this value to control the scroll speed
let isMouseOverContainer = false;

const scrollContainer = () => {
  if (isMouseOverContainer) {
    return; // Stop scrolling if mouse is over the container
  }

  scrollAmount += step;
  container.style.marginLeft = `-${scrollAmount}%`;

  if (scrollAmount >= 100) {
    // Scroll completed, reset scrollAmount to 0
    scrollAmount = 0;
  }
};

container.addEventListener('mouseenter', () => {
  isMouseOverContainer = true;
});

container.addEventListener('mouseleave', () => {
  isMouseOverContainer = false;
});

setInterval(scrollContainer, 1000);




// Placement Session js

function rightclick(){
  const scroll = document.querySelectorAll('.scroll')
  console.log(scroll)
  const compStyles = window.getComputedStyle(scroll[0]);
  console.log(compStyles)
  const movingWidth = parseFloat(compStyles.getPropertyValue('width'))
  console.log(movingWidth)
  const totalScrollWidth = (scroll.length-1)*movingWidth;
  console.log(totalScrollWidth)
  
  const cardSlidder = document.querySelector('.card-slider')
  console.log(cardSlidder)
  const slidderCompStyle = window.getComputedStyle(cardSlidder);
  const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
  console.log(sliderLeft)
  const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))


 console.log(Math.abs(sliderLeft)+sliderWidth,totalScrollWidth)


 if(Math.abs(sliderLeft)+sliderWidth<=totalScrollWidth){
  

  const scrollValue = Math.abs(sliderLeft) + movingWidth;
  cardSlidder.style.left = `-${scrollValue}px`
 }

 else{
  console.log('else')
  cardSlidder.style.left ='0'
 }

  // cardSlidder.style.left = `-${movingWidth}px`

}


function leftclick(){
  const scroll = document.querySelectorAll('.scroll')


  const compStyles = window.getComputedStyle(scroll[0]);

  const movingWidth = parseFloat(compStyles.getPropertyValue('width'))

  const totalScrollWidth = (scroll.length-1)*movingWidth;

  const cardSlidder = document.querySelector('.card-slider')
  const slidderCompStyle = window.getComputedStyle(cardSlidder);
  const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
  console.log(sliderLeft)
  const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))


 console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),sliderWidth,totalScrollWidth)


 if(Math.abs(Math.abs(sliderLeft)+sliderWidth)>sliderWidth+1){
  

  const scrollValue = Math.abs(sliderLeft) - movingWidth;
  cardSlidder.style.left = `-${scrollValue}px`
 }

 else{
  console.log('else')
  cardSlidder.style.left =`-${totalScrollWidth-sliderWidth}px`
 }

  // cardSlidder.style.left = `-${movingWidth}px`

}







// const carousel = document.querySelector('#slider');
// const scrollWidth = carousel.scrollWidth;
// const cardWidth = carousel.querySelector('.scroll').offsetWidth;
// const leftButton = document.querySelector('#left');
// const rightButton = document.querySelector('#right');

// leftButton.addEventListener('click', () => {
//     // carousel.style.left   -= cardWidth;
//     alert('vinay nayak')
// });

// rightButton.addEventListener('click', () => {
//     // carousel.style.left  += cardWidth;
//     alert('vinay nayak')
// });

// carousel.addEventListener('scroll', () => {
//   if (carousel.scrollLeft === 0) {
//     carousel.scrollLeft = scrollWidth - cardWidth;
//   } else if (carousel.scrollLeft === scrollWidth - cardWidth) {
//     carousel.scrollLeft = 0;
//   }
// });


function leftClick(){
  const scroll = document.querySelectorAll('.scroll-review')


  const compStyles = window.getComputedStyle(scroll[0]);

  const movingWidth = parseFloat(compStyles.getPropertyValue('width'))

  const totalScrollWidth = (scroll.length-1)*movingWidth;

  const cardSlidder = document.querySelector('.card-slider-review')
  const slidderCompStyle = window.getComputedStyle(cardSlidder);
  const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
  console.log(sliderLeft)
  const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))


 console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),sliderWidth,totalScrollWidth)


 if(Math.abs(Math.abs(sliderLeft)+sliderWidth)>sliderWidth+1){
  

  const scrollValue = Math.abs(sliderLeft) - movingWidth;
  cardSlidder.style.left = `-${scrollValue}px`
 }

 else{
  console.log('else')
  cardSlidder.style.left =`-${totalScrollWidth-sliderWidth}px`
 }
}

function rightClick(){
  const scroll = document.querySelectorAll('.scroll-review')
  console.log(scroll)
  const compStyles = window.getComputedStyle(scroll[0]);
  console.log(compStyles)
  const movingWidth = parseFloat(compStyles.getPropertyValue('width'))
  console.log(movingWidth)
  const totalScrollWidth = (scroll.length-1)*movingWidth;
  console.log(totalScrollWidth)

  const cardSlidder = document.querySelector('.card-slider-review')
  console.log(cardSlidder)
  const slidderCompStyle = window.getComputedStyle(cardSlidder);

  const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
  console.log(sliderLeft)
  const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))

  console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),totalScrollWidth)


 if(Math.abs(Math.abs(sliderLeft)+sliderWidth)<=totalScrollWidth){

  const scrollValue = Math.abs(sliderLeft) + movingWidth;
  cardSlidder.style.left = `-${scrollValue}px`
 }

 else{
  console.log('else')
  cardSlidder.style.left ='0'
 }
}




// Placement Session js