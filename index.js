const searchButton = document.getElementById("btn");
const images = document.querySelectorAll(".image");
const clearButton = document.getElementById("clearButton");



searchButton.addEventListener("click", ()=>{
    let data = document.getElementById("search").value.toLowerCase();
    images.forEach((item)=>{
       if(item.classList.contains(data)){
            item.style.display = "block";
       }else{
            item.style.display = "none";
       }
       if(data == ""){
        item.style.display = "block";
       }
    });
    
});


clearButton.addEventListener("click", ()=>{
    images.forEach((item)=>{
        item.style.display = "block";
        document.getElementById("search").value = "";
    })
})

