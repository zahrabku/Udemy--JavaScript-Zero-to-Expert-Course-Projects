const openButton=document.querySelector('.modal-button');
const closeButton=document.querySelector('.modal-close');
const container= document.querySelector('.modal-container');

console.log(closeButton);

openButton.addEventListener('click',function(){
    container.classList.add('show')
})

closeButton.addEventListener('click',function(){
    container.classList.remove('show')
})

container.addEventListener('click',function(e){
    !e.target.closest('.modal')? 
    container.classList.remove('show'):
    ''

})