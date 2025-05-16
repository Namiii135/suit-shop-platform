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
