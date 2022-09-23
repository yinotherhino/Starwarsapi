function main() {
    let result;
let contentLength;
fetch('https://swapi.dev/api/people/')
.then((response) => response.json())
.then((data => {

  if (data){
      contentLength= data['results'].length;
      for(let i=0; i<contentLength; i++){
        result= {name:data['results'][i]['name'], gender:data['results'][i]['gender'], height:data['results'][i]['height']};
        document.getElementsByClassName("personname")[i].innerHTML= result.name;   
      }
  }
}));


$('#show-menu').click(function(){
    $('#show-effect').show(500);
})

//top menu hide effect
$('#hide-menu').click(function(){
    $('#show-effect').hide(500);
});

$('.yinohero').click(function(){
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

}



main();



// module.exports = { main }