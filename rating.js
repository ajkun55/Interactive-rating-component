
function showThankState(){
    document.getElementById("rating_state").style.setProperty('visibility', 'hidden');
    document.getElementById("thank_state").style.setProperty('visibility', 'visible');    
}

function storeRating(clicked_value){
    let rating_value = clicked_value;   
    document.getElementById("rating_value").innerHTML = rating_value;    
}

