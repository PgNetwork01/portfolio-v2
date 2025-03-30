// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Add dynamic floating objects
const container = document.querySelector('.floating-objects');

function createObject() {
    const obj = document.createElement('div');
    const size = Math.random() * 100 + 50; // Random size between 50px and 150px
    obj.style.width = `${size}px`;
    obj.style.height = `${size}px`;

    // Random position
    obj.style.top = `${Math.random() * 100}vh`;
    obj.style.left = `${Math.random() * 100}vw`;

    // Random color
    const colors = ['#FF6347', '#40E0D0', '#FFD700', '#9370DB', '#32CD32'];
    obj.style.background = colors[Math.floor(Math.random() * colors.length)];
    obj.style.opacity = Math.random() * 0.6 + 0.4;

    // Random shape
    const shape = Math.random() > 0.5 ? 'circle' : 'square';
    obj.classList.add(shape);

    container.appendChild(obj);

    // Remove objects after animation
    setTimeout(() => {
        obj.remove();
    }, 15000);
}

// Generate multiple objects
setInterval(createObject, 2000);

$(function(){

    var sliderWidth = $('.slider').width();
    var nowLi = 3;
    var li_count = $('.slider li').length;
    
    $('.slider ul').css({width:li_count * sliderWidth});
    $('.slider li').css({width:sliderWidth});
    
    for(var i=0; i<li_count;i++){
        $('.sliderControl').append('<a></a>');
    }
    
    
    $('.sliderControl a, .slider li').click(function(){
        nowLi = $(this).index();
        sliderChange();
        $('.sliderControl a').eq(nowLi).css({'background-color':'#4c0bff'});
        $('.sliderControl a').eq(nowLi).siblings().css({'background-color':'#333'});
        $('.slider li').eq(nowLi).css({'transform':'rotateY(0)'});
        $('.slider li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
        $('.slider li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
        $('.slider li').eq(0).css({'left':'-60px'});
    })
    
    
    function sliderChange(){
        $('.slider ul').stop(true, false).animate({left: sliderWidth * nowLi * -1}, 500);
    }
    
    var timer = setInterval(perpic, 5000);
    
    function perpic(){		
        console.log( 'nowLi = ' + nowLi)
        nowLi++;
        if(nowLi>=li_count){
            nowLi=0;
        };
        sliderChange();
        $('.sliderControl a').eq(nowLi).css({'background-color':'#4c0bff'});
        $('.sliderControl a').eq(nowLi).siblings().css({'background-color':'#333'});
        $('.slider li').eq(nowLi).css({'transform':'rotateY(0)'});
        $('.slider li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
        $('.slider li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
    }
    
    $('.slider').hover(function(){
        clearInterval(timer);
        $('.timer .percentage').removeClass('gogo');
    },function(){
        timer = setInterval(perpic, 5000);
        $('.timer .percentage').addClass('gogo');
    })
    
    })