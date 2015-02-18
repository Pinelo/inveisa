// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

// function parallax() {
// 	var fondo = document.querySelector(".anuncio-parallax");
// 	fondo.style.top = -window.pageYOffset + 'px';
// 	console.log(fondo.style.top);

// }

function showContent(e) {
	e.preventDefault();
	target = e.target;
	tabToDeactivate = document.querySelector(".tab-item.active");
	tabToDeactivate.className = "tab-item";
	// tabToDeactivate.parentNode.className = "tab-content";
	// target.className = "tab-item active";
	target.parentNode.className = "tab-item active";
	content = document.querySelector(".tab-content[data-tabContent=\'"+ target.getAttribute('data-tab') +"\']");
	if (content.className != "tab-content active") {
		content.style.display = "block";
		contentSec = document.querySelector(".tab-secondary-content[data-tabContent=\'"+ target.getAttribute('data-tab') +"\']");
		contentSec.style.display = "block";
		toHide = document.querySelector(".tab-content.active");
		toHide.style.display = "none";
		toHide.className = "tab-content";
		toHideSec = document.querySelector(".tab-secondary-content.active");
		toHideSec.style.display = "none";
		toHideSec.className = "tab-secondary-content";

		content.className = "tab-content active";	
		contentSec.className = "tab-secondary-content active";
	};
}

function scrollTo(el) {	
	topBarHeight = 120;
	var target = document.querySelector("."+el);
	var currentY = window.pageYOffset;	
	var targetY = target.offsetTop;
	speed = Math.abs(targetY - currentY - topBarHeight)%25;
	if(speed == 0 && currentY + topBarHeight != targetY ) {speed = 25;}
	var animator = setTimeout('scrollTo(\''+ el +'\')', 24);
	if (window.pageYOffset + screen.height >= document.body.scrollHeight) {
		clearTimeout(animator);
	}
	if (currentY + topBarHeight < targetY) {
		positionY = currentY + (speed);
		window.scroll(0, positionY);
	// }else if(currentY > targetY + speed){
	// 	positionY = currentY - (speed);
	// 	window.scroll(0, positionY-topBarHeight);
	}else if(currentY + topBarHeight > targetY){
		positionY = currentY - (speed);
		window.scroll(0, positionY);
	}
	else{
		clearTimeout(animator);
		// window.scroll(0, targetY - topBarHeight);
	}
}

$(function(){ $(document).foundation(); 
	// window.addEventListener('scroll', parallax, false);

	document.getElementById('primer_link').addEventListener('click', function(e) {
		e.preventDefault();
		scrollTo('primer-cuerpo');
	}, false);

	document.getElementById('segundo_link').addEventListener('click', function(e) {
		e.preventDefault();
		scrollTo('nuestros-proyectos-barra');
	}, false);
	document.getElementById('tercer_link').addEventListener('click', function(e) {
		e.preventDefault();
		scrollTo('segundo-cuerpo');
	}, false);
	document.getElementById('cuarto_link').addEventListener('click', function(e) {
		e.preventDefault();
		scrollTo('footer');
	}, false);









	document.querySelector("a[data-tab='1']").addEventListener('click', function(e) {
		showContent(e);
	}, false);
	document.querySelector("a[data-tab='2']").addEventListener('click', function(e) {
		showContent(e);
	}, false);
	document.querySelector("a[data-tab='3']").addEventListener('click', function(e) {
		showContent(e);
	}, false);
	document.querySelector("a[data-tab='4']").addEventListener('click', function(e) {
		showContent(e);
	}, false);
});
