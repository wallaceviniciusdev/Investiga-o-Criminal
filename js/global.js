var playText = document.getElementById('playText')
var texto = 'Você está preparado para uma aventura de muito mistério?'
function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 60);
}
escrever(texto, playText)


/*
$(".play > .fitas > .radial > #play_screen > h1").addClass("animated bounceInUp")
$(".play > .fitas > .radial > #play_screen > button").addClass("animated bounceInDown")


var play = $(".play")
var parte1 = $(".parte1")
var parte2 = $(".parte2")
var parte3 = $(".parte3")
var parte4 = $(".parte4")

escrever(texto, playText)



//play.hide()
parte1.hide()
parte2.hide()
parte3.hide()
parte4.hide()

setTimeout(function(){
	play.fadeOut(200);
	parte1.show()
	parte1.addClass("animated bounceInUp")
}, 1000)

setTimeout(function(){
	parte1.addClass("animated bounceOutLeft")
	parte1.hide()
	parte2.show()
	parte2.addClass("animated zoomIn")
}, 2000)*/