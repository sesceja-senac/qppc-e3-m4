window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    AOS.refresh()
    $('.preloader').fadeOut(300);
})

$('.cartaMemoria').click(function(){
  if($(this).hasClass('flip')){
      $(this).removeClass('flip')
  }else{
      $(this).addClass('flip')
  }
})