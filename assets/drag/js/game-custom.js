

// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPile"),
  document.querySelector("#cardPile-2"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'), 
  document.querySelector('#slot-3'),
  document.querySelector("#slot-12"),
  document.querySelector('#slot-22'), 
  document.querySelector('#slot-32')
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function(e) {
  console.log(scrollable)
    if (! scrollable) {
        e.preventDefault();
    }
}

document.addEventListener('touchmove', listener, { passive:false });

var slot1 = 0;
var slot2 = 0;
var slot3 = 0;
var slot12 = 0;
var slot22 = 0;
var slot32 = 0;

// Solução ao dragindrop

dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
      return el.dataset.target == target.id; 
  }
}).on('drag', function(el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function(){
  scrollable = true;

    if(slot1 == 0 && $('#slot-1').children().length>0){
      $('#casual-acerto').modal('show')
      slot1 = 1
    }
    if(slot2 == 0 && $('#slot-2').children().length>0){
      $('#sistematico-acerto').modal('show')
      slot2 = 1
    }
    if(slot3 == 0 && $('#slot-3').children().length>0){
      $('#estratificado-acerto').modal('show')
      slot3 = 1
    }
    if(slot12 == 0 && $('#slot-12').children().length>0){
      $('#primeiro-acerto').modal('show')
      slot12 = 1
    }
    if(slot22 == 0 && $('#slot-22').children().length>0){
      $('#segundo-acerto').modal('show')
      slot22 = 1
    }
    if(slot32 == 0 && $('#slot-32').children().length>0){
      $('#terceiro-acerto').modal('show')
      slot32 = 1
    }

      audio.setAttribute('src','audios/acerto.mp3'); //change the source
      audio.load(); //load the new source
      audio.play(); //play

}).on("cancel", function(){
  scrollable = true;

      // Executa o áudio e a modal necessária
      // Também é possível fazer algum teste aqui caso necessário.
  $('#bgmodal-erro').modal('show')
      audio.setAttribute('src','audios/erro.mp3'); //change the source
      audio.load(); //load the new source
      audio.play(); //play
});

// document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });