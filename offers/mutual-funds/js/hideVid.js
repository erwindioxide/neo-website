setTimeout(function myFunction(){ 
    var x = document.getElementById("vidLink").getAttribute("src");
    if(x == "undefined"){
        var x = document.getElementById("vidLink").removeAttribute("src");
        document.getElementById("videoWrapper").classList.add("d-none");
    } 
 }, 2500);