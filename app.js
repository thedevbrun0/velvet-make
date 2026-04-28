const textHero= document.querySelectorAll('.hero-text-off')
const photo1= document.querySelectorAll('.image-service1-off')
const description1=document.querySelectorAll('.description-service1-off')
const description2=document.querySelectorAll('.description-service2-off')
const products=document.querySelectorAll('.product-off')
const cta=document.querySelector('.cta-off')



const myObserver = new IntersectionObserver ((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting) {
            entrie.target.classList.add('hero-text-on')
        } else{ 
            entrie.target.classList.remove('hero-text-on')
        }
    })
})




textHero.forEach(item => {
myObserver.observe(item)
})



const myObserver2 = new IntersectionObserver ((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting) {
            entrie.target.classList.add('image-service1-on')
        } else{ 
            entrie.target.classList.remove('image-service1-on')
        }
    })
})



photo1.forEach(item => {
myObserver2.observe(item)
})



const myObserver3 = new IntersectionObserver ((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting) {
            entrie.target.classList.add('description-service1-on')
        } else{ 
            entrie.target.classList.remove('description-service1-on')
        }
    })
})



description1.forEach(item => {
myObserver3.observe(item)
})






const myObserver4 = new IntersectionObserver ((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting) {
            entrie.target.classList.add('description-service2-on')
        } else{ 
            entrie.target.classList.remove('description-service2-on')
        }
    })
})


description2.forEach(item => {
myObserver4.observe(item)
})




const myObserver5 = new IntersectionObserver ((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting) {
            entrie.target.classList.add('product-on')
        } else{ 
            entrie.target.classList.remove('product-on')
        }
    })
})

products.forEach(item => {
myObserver5.observe(item)
})







const myObserver6 = new IntersectionObserver ((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting) {
            entrie.target.classList.add('cta-on')
        } else{ 
            entrie.target.classList.remove('cta-on')
        }
    })
})
myObserver6.observe(cta)
