const makefon = document.getElementById("makefon");
var ele = document.getElementsByClassName('svet');
makefon.addEventListener('click', function() {
if (ele[0].style.background == "darkblue") {
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.background = null;
    }
} else {
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.background = 'darkblue';
    }    
}
});
