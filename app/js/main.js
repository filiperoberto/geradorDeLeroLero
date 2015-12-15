window.onload = function(){

	var lerolero = new LeroLero();
	var quote = document.getElementById('frase');
	var button = document.getElementById('button');

	button.onclick = novaFrase;

	function novaFrase() {

		var frase = lerolero.proximaFrase();
		quote.innerHTML = frase;

	}
	
	novaFrase();
}