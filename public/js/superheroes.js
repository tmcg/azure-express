
var app = window.app || {};

app.fetchHeroes = function() {
  $.get('/api/superheroes', function(data) {
    var elem = $('.hero-list');

    elem.empty();
    var ul = $('<ul>');
    $.each(data, function(i, item) {
      ul.append($("<li>").text(item.name));
    });
    elem.append(ul);
  });
}

$(document).ready(function() {
  app.fetchHeroes();
});
