const main= (() =>{
    let APIresult;
    const images= ['lukesky.jpeg', 'c3po.jpeg', 'r2d2.webp', 'darth.jpeg', 
                    'leia.jpeg', 'lars.png','beru.webp', 'r5.jpeg', 
                    'biggs.jpeg', 'obi.jpeg'];

    //fetch the object from the API
    fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data => {
        //send the results (array of individual characters) fetched from the API to the resolveAPI
        let results= data['results']
        APIconsume(results);
    }));

    const APIconsume= results=>{
        if (results){
        results.forEach( (x,i) =>{
            //using object destructuring to get the needed values
        let {
            name:resultName, gender:resultGender, height: resultHeight
        }= {name:x['name'], gender:x['gender'], height:x['height']};
        document.getElementById("result-container").innerHTML+= 
        `<div><img src="./img/${images[i]}" class="profile-pic">
        <p class="personname" 
            data-name="${resultName}" 
            data-gender="${resultGender} " 
            data-height="${resultHeight}">
        ${resultName}
        </p>
        </div>`;
         });
        modalEvt();
    }
    }
  

    
    //show the menu
    $('#show-menu').click(function(){
        $('#show-effect').show(200);
    })

    //top menu hide effect
    $('#hide-menu').click(function(){
        $('#show-effect').hide(100);
    });

    const modalEvt= ()=>{
    $('.personname').click(function(evt){
        $('.modal-name').text("Name: "+evt.target.dataset.name);
        $('.modal-gender').text('Gender: '+evt.target.dataset.gender);
        $('.modal-height').text('Height: '+evt.target.dataset.height);
        $('.modal').show(100);
    });

    $('#hide-modal').click(function(){
        $('.modal').hide(100);
    })

    $('body').click(function(evt) {
    if (evt.target.className == 'modal') {
      $('.modal').hide(100);
    }
    });
}

})()

module.exports = { main }