function runsearch(){
    var searchterm = document.querySelector("#searchinput").value 
    alert("You searched for: " + searchterm)
}

function change(button){
    button.nextElementSibling.innerHTML++;
}