$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function abrirPopup(){
    document.getElementById("popup").style.display = "block";
}
function fecharPopup(){
    document.getElementById("popup").style.display = "none";
}