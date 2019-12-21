var next=document.getElementById("next")
var prev=document.getElementById("prev")
var slider=document.querySelector(".slider ul")
var nicat=0;


var bar=document.querySelector(".bars")
var rev=document.querySelector(".rev")
rev.onclick=function(){
    document.querySelector(".mainOverlay").classList.remove("overactive")
}


bar.onclick=function(){
    document.querySelector(".mainOverlay").classList.add("overactive")
}

window.onload=function(){
    setInterval(nextSlide,4000)
    document.querySelector(".preloader").remove()
}
function nextSlide(){
   
        nicat++;
        console.log(slider.querySelectorAll("li").length+":"+nicat)
         if(nicat== slider.querySelectorAll("li").length){
             nicat=0
         }
       var mes=-(nicat*800);
       slider.style.left=mes+"px"
    
}
next.onclick=nextSlide
prev.onclick=function(){
    nicat--;

    if(nicat== -1){
            nicat=slider.querySelectorAll("li").length-1;
    }
    var mes=-(nicat*800);
    slider.style.left=mes+"px"
}

