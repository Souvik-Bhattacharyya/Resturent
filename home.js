document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})


// -----------------------CAROUSEL--------------------

let btn = document.getElementsByClassName("butn");
let prev = document.getElementsByClassName('butn')[0];
let picture = document.getElementById("picture");
for (let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(e){
        prev.removeAttribute('class','active')
        e.target.setAttribute('class','active')
        prev = e.target;
    });
}

    btn[0].onclick = function(){
        picture.src = "https://source.unsplash.com/1600x700/?nature,water";
    }
    btn[1].onclick = function(){
        picture.src = "assets/Essence_img/pic2.png";
    }
    btn[2].onclick = function(){
        picture.src = "assets/Essence_img/pic3.png";
    }
    btn[3].onclick = function(){
        picture.src = "assets/Essence_img/pic4.png";
    }
