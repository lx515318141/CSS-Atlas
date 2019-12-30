an.onclick = function(){
    an.querySelector('.circle').classList.add('active')
}
an.querySelector('.circle').addEventListener('transitionend', function(){
    an.querySelector('.circle').classList.remove('active')
})