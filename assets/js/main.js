document.getElementById("btn__share").addEventListener("click", function(){
    var hidebutton =  document.querySelector(".share");
    var changecolor = document.querySelector(".btn__share");
    if(hidebutton.style.display=="none")
    {
        hidebutton.style.display="block";
        changecolor.style.color = "white";
        changecolor.style.backgroundColor = "#48556a";
      
         
    }
    else{
        hidebutton.style.display="none"
        changecolor.style.color = "#48556a";
        changecolor.style.backgroundColor = "#ecf2f8"
    }
});

