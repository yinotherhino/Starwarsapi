const main= (() =>{
    let APIresult;
    const images= ['lukesky.jpeg', 'c3po.jpeg', 'r2d2.webp', 'darth.jpeg', 
                    'leia.jpeg', 'lars.png','beru.webp', 'r5.jpeg', 
                    'biggs.jpeg', 'obi.jpeg'];

    //fetch the object from the API
    for (let i=1; i<=2; i++){
        fetch('https://swapi.dev/api/people/?page='+i)
        .then((response) => response.json())
        .then((data => {
            //send the results (array of individual characters) fetched from the API to the resolveAPI
            let results= data['results']
            APIconsume(results, 1);
        }));
    }
    for (let i=3; i<=4; i++){
        fetch('https://swapi.dev/api/people/?page='+i)
        .then((response) => response.json())
        .then((data => {
            //send the results (array of individual characters) fetched from the API to the resolveAPI
            let results= data['results']
            APIconsume(results, 2);
        }));
    }
    for (let i=5; i<=6; i++){
        fetch('https://swapi.dev/api/people/?page='+i)
        .then((response) => response.json())
        .then((data => {
            //send the results (array of individual characters) fetched from the API to the resolveAPI
            let results= data['results']
            APIconsume(results, 3);
        }));
    }
    for (let i=7; i<=8; i++){
        fetch('https://swapi.dev/api/people/?page='+i)
        .then((response) => response.json())
        .then((data => {
            //send the results (array of individual characters) fetched from the API to the resolveAPI
            let results= data['results']
            APIconsume(results, 4);
        }));
    }
    const APIconsume= (results, pageNum)=>{
        if (results){
        results.forEach( (x,i) =>{
            //using object destructuring to get the needed values
        let {
            name:resultName, gender:resultGender, height: resultHeight
        }= {name:x['name'], gender:x['gender'], height:x['height']};
        document.getElementById("result-container"+ pageNum).innerHTML+= 
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

    const pagination= () => {
        $('#page1').click(() =>{
            $('#result-container2').css('display','none');
            $('#result-container3').css('display','none');
            $('#result-container4').css('display','none');
            $('#result-container1').css('display','grid');
        } )

        $('#page2').click(() =>{
            $('#result-container1').css('display','none');
            $('#result-container4').css('display','none');
            $('#result-container3').css('display','none');
            $('#result-container2').css('display','grid');
        } )

        $('#page3').click(() =>{
            $('#result-container1').css('display','none');
            $('#result-container2').css('display','none');
            $('#result-container4').css('display','none');
            $('#result-container3').css('display','grid');
        } )
        $('#page4').click(() =>{
            $('#result-container1').css('display','none');
            $('#result-container2').css('display','none');
            $('#result-container3').css('display','none');
            $('#result-container4').css('display','grid');
        } )
    };
    pagination();
}

})()

module.exports = { main }