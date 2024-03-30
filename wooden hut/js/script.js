Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });


  let navLinks = document.querySelectorAll('.navLink')
  let homeBtn = navLinks[0]
  let aboutBtn = navLinks[1]
  let galleryBtn = navLinks[2]
  let pricingBtn = navLinks[3]
  let contactBtn = navLinks[4]

  homeBtn.addEventListener('click', () => {
          smoothScroll({toElement: document.getElementById('home'), duration: 2500, easing: 'easeInOutCirc'})
  })
  
  aboutBtn.addEventListener('click', () => {
      smoothScroll({toElement: document.getElementById('about'), duration: 2500, easing: 'easeInOutCirc'})
  })
  
  galleryBtn.addEventListener('click', () => {
      smoothScroll({toElement: document.getElementById('gallery'), duration: 3500, easing: 'easeInOutCirc'})
  })
  
  pricingBtn.addEventListener('click', () => {
      smoothScroll({toElement: document.getElementById('pricing'), duration: 2500, easing: 'easeInOutCirc'})
  })
  
  contactBtn.addEventListener('click', () => {
      smoothScroll({toElement: document.getElementById('contact'), duration: 2500, easing: 'easeInOutCirc'})
  })