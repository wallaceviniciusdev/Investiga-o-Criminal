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


var play = $(".play")
var parte1 = $(".parte1")
var parte2 = $(".parte2")
var parte3 = $(".parte3")
var parte4 = $(".parte4")
var parte5 = $(".parte5")
var parte6 = $(".parte6")
var parte7 = $(".parte7")
var parte8 = $(".parte8")
var parte9 = $(".parte9")
var parte10 = $(".parte10")

parte1.hide()
parte2.hide()
parte3.hide()
parte4.hide()
parte5.hide()
parte6.hide()
parte7.hide()
parte8.hide()
parte9.hide()
parte10.hide()

function playFunc(){
	var button = $(".play button")


	button.click(function(){
		play.addClass("animated fadeOutUpBig")
		play.fadeOut()
		parte1.show()
		parte1.addClass("animated bounceInUp")
	})
}

playFunc();


/*
$(".play > .fitas > .radial > #play_screen > h1").addClass("animated bounceInUp")
$(".play > .fitas > .radial > #play_screen > button").addClass("animated bounceInDown")


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