

const openingIcons = document.querySelectorAll('.openingIcon')
const accordionItems = document.querySelectorAll('.accordionItem')
const priceDesc = document.querySelectorAll('.priceDescription')

openingIcons.forEach((openingIcon, index) => {
    openingIcon.addEventListener('click', () => {
        if(!accordionItems[index].classList.contains('active')) {

            for (let i = 0; i < openingIcons.length; i++) {
                if(accordionItems[i] != accordionItems[index]) {
                    accordionItems[i].style.height = '60px'
                    accordionItems[i].classList.remove('active')
                    priceDesc[i].classList.remove('visible')       
                }
            }
            accordionItems[index].style.height = `${accordionItems[index].firstElementChild.nextElementSibling.firstElementChild.height}px`
            priceDesc[index].classList.add('visible')
        } else {
            accordionItems[index].style.height = '60px'
            priceDesc[index].classList.remove('visible')
        }
        accordionItems[index].classList.toggle('active')
        
    })
})

// console.log(openingIcons)
