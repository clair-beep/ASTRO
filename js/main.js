const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks =  document.querySelectorAll('.nav-links li');


  burger.addEventListener("click", () => {
// Toggle Nav

     nav.classList.toggle('nav-active');

// Animate links
     navLinks.forEach((link, index) => {
      if(link.style.animation){
         link.style.animation = '';
      } else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + .5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle')

  });
}

const initialMultimedia = () => {
 
}
// API 

const url = `https://api.nasa.gov/planetary/apod?api_key=UPFY1OQeNUgJ59kHYAWJOLFTF2GaWjnAG2rM5Io7`

fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.hdurl)
    document.querySelector('.text-api-header').textContent = data.title;

    document.querySelector('.text-api-explanation').textContent = data.explanation;

    document.getElementById('author-api').textContent = data.copyright;

    document.querySelector('.img-api').src = data.hdurl;
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

// 
  navSlide();



  

