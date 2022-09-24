const main= () =>{
    let result;
    const images= ['lukesky.jpeg', 'c3po.jpeg', 'r2d2.webp', 'darth.jpeg', 'leia.jpeg', 'lars.png',
                'beru.webp', 'r5.jpeg', 'biggs.jpeg', 'obi.jpeg'];
    const resolveAPI= results=>{
        if (results){
        const contentLength= results.length;
        results.forEach( (x,i) =>{
        result= {name:x['name'], gender:x['gender'], height:x['height']};
        document.getElementById("result-container").innerHTML+= '<div><img src="./img/'+images[i]+'" class="profile-pic"><p class="personname" data-name="'+ result.name+'" data-gender="'+result.gender+' " data-height="'+result.height+'">'+ result.name +'</p></div>';
         });
        modalClick(results);
    }
    }
    fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data => {
        //send the results (array of individual characters) fetched from the API to the resolveAPI
        resolveAPI(data['results']);
    }));

    
    //show the menu
    $('#show-menu').click(function(){
        $('#show-effect').show(200);
    })

    //top menu hide effect
    $('#hide-menu').click(function(){
        $('#show-effect').hide(100);
    });

    const modalClick= (results)=>{
    $('.personname').click(function(evt){
        $('.modal-name').text(evt.target.dataset.name);
        $('.modal-gender').text(evt.target.dataset.gender);
        $('.modal-height').text(evt.target.dataset.height);
        $('.modal').show(100);

    });
    // $('.personname').click(function(evt){
    //     // console.log(results)
    //     console.log(evt.target.dataset)
    // });

    $('#hide-modal').click(function(){
        $('.modal').hide(100);
    })

    $('body').click(function(evt) {
    if (evt.target.className == 'modal') {
      $('.modal').hide(100);
    }
    });
}

}



main();



module.exports = { main }