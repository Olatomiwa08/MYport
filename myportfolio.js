let menu = document.querySelector('#togglemenu');
let navbar = document.querySelector('#menu-bar');

window.onscroll = () => {
    menu.classList.remove('span');
    menu.classList.remove('checked');
}

const sr = ScrollReveal ({
     distance: '25px',
     duration: 2500,
     reset: true
 })

sr.reveal('.home', {delay:190, origin:'bottom'})
sr.reveal('.about, .service, .myproject, .slide, .contact', {delay:200, origin:'bottom'})

let changeIcon = function(icon){
    icon.classList.toggle('fa-times')

    changeIcon = (icon) =>icon.classList.toggle('fa-times')
}
function auth(){
    var text = document.getElementsByClassName('text').value;
    var email = document.getElementsByClassName('email').value;
    if(text== "mymessage" && email== "example@gmail.com"){
        window.location.assign('portfolio.html');
        alert('Succesful')
    }
}