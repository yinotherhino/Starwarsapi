function main() {
    let result;
    const images= ['lukesky.jpeg', 'c3po.jpeg', 'r2d2.webp', 'darth.jpeg', 'leia.jpeg', 'lars.png',
                'beru.webp', 'r5.jpeg', 'biggs.jpeg', 'obi.jpeg'];
    const resultingVar= results=>{
        if (results){
        const contentLength= results.length;
        for(let i=0; i<contentLength; i++){
        result= {name:results[i]['name'], gender:results[i]['gender'], height:results[i]['height']};
        document.getElementById("result-container").innerHTML+= '<div><img src="./img/'+images[i]+'" class="profile-pic"><p class="personname">'+ result.name +'</p><button id="yinohero">About Superhero</button></div>';  
        }
    }

    }
    fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data => {
        //send the results (array of individual characters) fetched from the API to the function
        resultingVar(data['results']);
    }));

//TO DO
// add images dynamically
// 


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