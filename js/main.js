var menu=document.getElementById('menu-bar')
var nav=document.getElementById('nav')

menu.onclick=()=>{
    nav.classList.toggle('sticky')
}




// window.onload=()=>{
//     var spin=document.getElementById('spin')
//     document.body.style.overflow='hidden'


//     setInterval(function(){
//     document.body.style.overflow='auto'
//     spin.style.display='none'
//     },3000)
// }