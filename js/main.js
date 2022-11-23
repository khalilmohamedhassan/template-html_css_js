

// scroll btn 
let scroll_btn = document.querySelector(".arrow");
window.onscroll = function(){
    if(window.scrollY < 200 ){
        scroll_btn.style.display = "none";
    }
    else{
        scroll_btn.style.display = "block";

    }


scroll_btn.addEventListener("click" , function(){
    window.scrollTo({
        top : 0,
        behavior:"smooth"
    })

    
});

}