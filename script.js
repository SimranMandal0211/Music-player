// carousel 

let responsiveSlider = function () {
            
    let slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    let slideList = document.getElementById("slideWrap");
    let count = 1;
    let items = slideList.querySelectorAll("li").length;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    window.addEventListener('resize', function (){
        sliderWidth = slider.offsetWidth;
    },true);

    let prevSlide = function () {
        if (count > 1){
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = 1){
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
        }
    };

    let nextSlide = function () {
        if (count < items){
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = items){
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function(){
        nextSlide();
    });

    prev.addEventListener("click", function(){
        prevSlide();
    });

    setInterval(function() {
        nextSlide()
    }, 5000);
};

window.onload = function(){
    responsiveSlider();
}


// like button color change....

let like = document.querySelectorAll('.like').forEach(function(likeBtn){
    likeBtn.addEventListener("click",function(e){

        if(likeBtn.classList.contains('fa-regular')){
            likeBtn.classList.remove('fa-regular');
            likeBtn.classList.add('fa-solid');
            likeBtn.style.color = 'red';
        }
        
        else if(likeBtn.classList.contains('fa-solid')){
            likeBtn.classList.remove('fa-solid');
            likeBtn.classList.add('fa-regular');
            likeBtn.style.color = 'gray';
        }
    })
});


// playing music icon ............

let songIcon = document.querySelectorAll('.fa-chart-simple');
let songNum = document.querySelectorAll('span.songNum');
songNum.forEach(function(songNumItem){
    songNumItem.addEventListener('click', function(e){

        let number = parseInt(document.querySelectorAll('span.songNum'));

        alert("function");

        if(!number){
            alert("if");
            songNum.style.display = "block";
            songIcon.style.display = "none";
        }
        else{
            alert("else");
            songNum.style.display = "none";
            songIcon.style.display = "block";
        }
    });
})

// -------------------------------------------------------------