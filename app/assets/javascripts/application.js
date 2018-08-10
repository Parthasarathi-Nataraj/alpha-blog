// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$('.base').clone().addClass('overlay').appendTo('.landing');
$('.cta').hover(function() {
  $('.overlay').toggleClass('over');
});

/*--------------------
Codepen Preview Tile
--------------------*/
setTimeout(function() {
  $('.overlay').addClass('over').delay(600).queue(function() {
    $(this).removeClass("over").dequeue();
  });
}, 400)
