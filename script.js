let menubtn = document.getElementById('menu');
let navlist = document.getElementById('nav-list');


    menubtn.addEventListener("click", (e)=> {
        e.preventDefault();
        navlist.classList.toggle('active');
    }
);



   // Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');

        console.log(slides.length)
        console.log(dots)
        function goToSlide() {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
        currentSlide++;
        if(currentSlide>=slides.length){
            currentSlide = 0;
        }
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        

        setInterval(goToSlide, 2000);
