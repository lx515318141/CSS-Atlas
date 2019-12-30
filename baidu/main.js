keyWord.oninput = function(e){
    var value = keyWord.value;
    if(value){
        suggestion.classList.add('active')
    }else{
        suggestion.classList.remove('active')
    }
}