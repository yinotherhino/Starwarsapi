function main() {}
//top hamburger menu effect show
$('#show-menu').click(function(){
    $('#show-effect').show(500);
})

//top menu hide effect
$('#hide-menu').click(function(){
    $('#show-effect').hide(500);
});

$('#yinohero').click(function(){
    $('.modal').show();
});

$('#hide-modal').click(function(){
    $('.modal').hide();
})

$('body').click(function(evt) {
    if (evt.target.className == 'modal') {
      $('.modal').hide();
    }
  });
module.exports = { main }