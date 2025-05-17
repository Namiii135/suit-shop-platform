const stickySections = [... document.querySelectorAll('.sticky')]

let images = 
[
'gambar/ssuit1.png',
'gambar/ssuit2.png',
'gambar/ssuit3.png',
'gambar/ssuit4.png',
'gambar/ssuit5.png',
'gambar/ssuit6.png',
'gambar/ssuit7.png',
'gambar/ssuit8.png',
'gambar/ssuit9.png'
]
 
images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image)
    })
})

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySections.length; i++){ 
        transform(stickySections[i])
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection =  section.querySelector('.scroll_section');
    let percentage = (window.scrollY - offsetTop) / window.innerHeight * 80;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    const offsetStart = 60; // start at -50vw (you can tweak this)
    scrollSection.style.transform = `translate3d(${offsetStart - percentage}vw, 0, 0)`;
}

stickySections.forEach(section => {
  const scrollSection = section.querySelector('.scroll_section');
  const textElem = document.createElement('div');
  const secondtextElem = document.createElement('div');
  
  textElem.textContent = "CHOOSE YOUR STYLE";
  textElem.style.fontSize = "6rem";
  textElem.style.fontWeight = "bold";
  textElem.style.color = "white";
  textElem.style.display = "flex";
  textElem.style.alignItems = "center";
  textElem.style.paddingRight = "2vw";  // space between text and images
  scrollSection.insertBefore(textElem, scrollSection.firstChild);
});


const text = "FEATURED SUIT";
const container = document.querySelector('.featured');
const target = container.querySelector('.FEATURED');
let index = 0;
let isTyping = false;

function typeText() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    isTyping = false;
  }
}

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
    if (!container.classList.contains('visible')) {
      container.classList.add('visible');
      target.textContent = "";
      isTyping = true;
      index = 0;
      typeText();
    }
  } 
  else if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
    container.classList.remove('visible');
    target.textContent = "";
    index = 0;
    isTyping = false;
  }
});


  window.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    const containerTop = container.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 7;

    if (containerTop < triggerPoint) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  });

const styleImages = [
  
  'framesickma/ezgif-frame-004.jpg',
  'framesickma/ezgif-frame-005.jpg',
  'framesickma/ezgif-frame-006.jpg',
  'framesickma/ezgif-frame-007.jpg',
  'framesickma/ezgif-frame-008.jpg',
  'framesickma/ezgif-frame-009.jpg',
  'framesickma/hehe.jpg',
  'framesickma/ezgif-frame-011.jpg',
  'framesickma/ezgif-frame-012.jpg',
  'framesickma/ezgif-frame-013.jpg',
  'framesickma/ezgif-frame-014.jpg', 
  'framesickma/ezgif-frame-015.jpg',
  'framesickma/ezgif-frame-016.jpg',   
  'framesickma/ezgif-frame-017.jpg',
  'framesickma/ezgif-frame-018.jpg',
  'framesickma/ezgif-frame-019.jpg',
  'framesickma/ezgif-frame-020.jpg',
  'framesickma/ezgif-frame-021.jpg',
  'framesickma/ezgif-frame-022.jpg',
  'framesickma/ezgif-frame-023.jpg',
  'framesickma/ezgif-frame-024.jpg',
  'framesickma/ezgif-frame-025.jpg',
  'framesickma/ezgif-frame-026.jpg',
  'framesickma/ezgif-frame-027.jpg',
  'framesickma/ezgif-frame-028.jpg',
  'framesickma/ezgif-frame-029.jpg',
  'framesickma/ezgif-frame-030.jpg',
  'framesickma/ezgif-frame-031.jpg',
  'framesickma/hehe.jpg',
  'framesickma/ezgif-frame-033.jpg',
  'framesickma/ezgif-frame-034.jpg',
  'framesickma/ezgif-frame-035.jpg',
  'framesickma/ezgif-frame-036.jpg',
  'framesickma/hehe.jpg',
  'framesickma/ezgif-frame-038.jpg',
  'framesickma/ezgif-frame-039.jpg',
  'framesickma/ezgif-frame-040.jpg',
  'framesickma/ezgif-frame-041.jpg',
  'framesickma/ezgif-frame-042.jpg',
  'framesickma/ezgif-frame-043.jpg',
  'framesickma/ezgif-frame-044.jpg',
  'framesickma/ezgif-frame-045.jpg',
  'framesickma/ezgif-frame-046.jpg',
  'framesickma/ezgif-frame-047.jpg',
  'framesickma/ezgif-frame-048.jpg',
  'framesickma/ezgif-frame-049.jpg',
  'framesickma/ezgif-frame-050.jpg'
];

let currentImage = 0;
const styleImageElem = document.getElementById('styleImage');

setInterval(() => {
  currentImage = (currentImage + 1) % styleImages.length;
  styleImageElem.src = styleImages[currentImage];
}, 1000); // changes every 2 seconds

const textOverlay = document.querySelector('.STYLE-overlay');

const lightImages = ['gambar/ssuit2.png', 'gambar/ssuit4.png']; // list of light background images

setInterval(() => {
  currentImage = (currentImage + 1) % styleImages.length;
  const newSrc = styleImages[currentImage];
  styleImageElem.src = newSrc;

  // Check if the image is light
  if (lightImages.includes(newSrc)) {
    textOverlay.classList.add('dark-text');
  } else {
    textOverlay.classList.remove('dark-text');
  }
}, 2000);
