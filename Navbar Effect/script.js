
const sections=document.querySelectorAll('section')
const transition=document.querySelector('.nav-color')
const colors=['coral', 'chartreuse', 'chocolate', 'cadetblue' ]

const options={
    threshold:0.8,
}

let observer=new IntersectionObserver(navScroll,options)


function navScroll(entries){
     entries.forEach(ent=>{
         const className=ent.target.className;
         const activeLink=document.querySelector(`[data-page='${className}']`)
         const elementIndex=ent.target.getAttribute('data-index')
         const coordinates=activeLink.getBoundingClientRect()
         const directions={
             height:coordinates.height,
             width:coordinates.width,
             top:coordinates.top,
             left:coordinates.left
         }

         if(ent.isIntersecting){
            transition.style.setProperty('height',`${directions.height}px`)
            transition.style.setProperty('width',`${directions.width}px`)
            transition.style.setProperty('top',`${directions.top}px`)
            transition.style.setProperty('left',`${directions.left}px`)
            transition.style.backgroundColor=colors[elementIndex];
         }
     })

}

sections.forEach(sec=>{
    observer.observe(sec)
})


const cursor=document.querySelector('.cursor')
const anchorLinks=document.querySelectorAll('.navbar ul li a')

window.addEventListener('mousemove',(e)=>{
    cursor.style.top=e.pageY+'px'
    cursor.style.left=e.pageX+'px'

})

anchorLinks.forEach(item=>item.addEventListener('mouseover',e=>{
    cursor.classList.add('cursor-grow')
    item.classList.add('go-orange')
}))

anchorLinks.forEach(item=>item.addEventListener('mouseout',e=>{
    cursor.classList.remove('cursor-grow')
    item.classList.remove('go-orange')

}))
