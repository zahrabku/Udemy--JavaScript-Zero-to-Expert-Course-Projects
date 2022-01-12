const modal=document.querySelector('.modal')

document.querySelectorAll('.img-container img').forEach(item=>{
    item.addEventListener('click',function(e){
        const original=item.getAttribute('alt')
        document.querySelector('.full-img').src=`./full/${original}.jpg`
        modal.classList.add('open')
    })
    
    
})

modal.addEventListener('click',function(e){
   if(e.target.classList.contains('modal')){
    modal.classList.remove('open')
   } 

})