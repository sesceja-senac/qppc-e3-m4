window.addEventListener('load', function(){AOS.refresh()})
$('#img-modal').hover(function(){
    $('#img-modal').attr('src','../assets/design/pg2/bt_hover_figura3.png')
}, function(){
    $('#img-modal').attr('src','../assets/design/pg2/bt_figura3.png')
})
$('.cartaMemoria').click(function(){
    if($(this).hasClass('flip')){
        $(this).removeClass('flip')
    }else{
        $(this).addClass('flip')
    }
})
$('.tooltip-link').click(function(e){e.preventDefault()})