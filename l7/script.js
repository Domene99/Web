$(document).ready(function(){
    let themes = ["blackjack", "roulette", "craps", "poker", "slots", "mahjong"];
    let APIKEY = "euOMFw1mNY8vkcWih6CIGFveLncxoZkv";  

    themes.forEach(function(theme) {
        $('#animal-buttons').append(`<button id="${theme}" class="select"> ${theme} </button>`);
    });
    
    $("#add-animal").click(function(event){
        event.preventDefault();
        var theme = $("#animal-input").val();
        themes.push(theme);
        $('#animal-input').val("");
        $('#animal-buttons').append(`<button id="${theme}" class="select"> ${theme} </button>`);
    })
    
    $('#animal-buttons').on('click', '.select', function(event) {   
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=25&q=`;
        url = url + $.trim(this.id);
        $("#animals").html("");

        fetch(url)
            .then(response => response.json())
            .then(content => {
                content.data.forEach(function(item){
                    $('#animals').append(`<div class="animal-item">
                            <p>Rating: ${item.rating}</p>
                            <img src="${item.images.downsized_still.url}" alt="${item.title}" data-src="${item.images.downsized.url}" height="150">
                        </div>`);
                })
            })
            .catch(err => {
                console.error(err);
                alert("Error.");
            });
    })

    $('#animals').on('click', '.gif', function() {   
        var currSrc = this.src; 
        var newURL = $(this).attr('data-src');
        $(this).attr('src', newURL);
        $(this).attr('data-src', currSrc);
    })
      
});
