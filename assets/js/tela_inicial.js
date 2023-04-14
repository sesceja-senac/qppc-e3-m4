window.addEventListener('load', function(){
    $('.preloader').fadeOut(300);    
    
})

$('#fechar-video').click(somNaCaixaDJ)

function somNaCaixaDJ(){
    $('.backdrop').fadeOut()
    window.setTimeout(function(){
        $('.start__container').addClass('animated')
    }, 800)
    window.setTimeout(function(){
        $('.img-1').addClass('animated')
        $('.img-2').addClass('animated')
        $('.img-4').addClass('animated')
        $('.img-mobile').addClass('animated')
    }, 1500)
    window.setTimeout(function(){
        $('.img-3').addClass('animated')
        $('.img-5').addClass('animated')
        $('.img-6').addClass('animated')
        $('.img-7').addClass('animated')
    }, 2200)
}