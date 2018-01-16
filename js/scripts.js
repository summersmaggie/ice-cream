$(document).ready(function() {
  var flavors = ['vanilla', 'chocolate', 'strawberry'];

  flavors.forEach(function(flavor) {
    $('#btn').click(function() {
    $('ul').append("<li>" + flavor + "</li>")
    });
  });
});
