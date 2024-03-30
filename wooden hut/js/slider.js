

const slider = document.querySelector('.aboutSectionSlider')
const slides = slider.querySelectorAll('.slide')

let currentSlide = 0
let slideNumber = 0

let images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg']

const trackers = document.querySelectorAll('.tracker')
// trackers[0].classList.add('active')

const autoSlideFeature = setInterval(() => {
    console.log(slideNumber)
        if (slideNumber == 4) {
            slideNumber = 0
            currentSlide++
        } else {    
            currentSlide++
            slideNumber++
        } 

        const newSlide = document.createElement('div')
        newSlide.setAttribute('class', 'slide')
        const newImage = document.createElement('img')
        newImage.setAttribute('src', 'images/' + images[slideNumber])
        newSlide.appendChild(newImage)
        slider.appendChild(newSlide)

        setTimeout(() => {
            if(slideNumber == 0) {
                slider.style.transform = 'translateX(' + -(currentSlide) * 100 + '%)'
                trackers[4].classList.remove('active')
                trackers[slideNumber].classList.add('active')            
            } else {
            slider.style.transform = 'translateX(' + -(currentSlide) * 100 + '%)'
            trackers[slideNumber-1].classList.remove('active')
            trackers[slideNumber].classList.add('active')
            }
        }, 300)   
}
    
, 3000)

// clearInterval(autoSlideFeature)