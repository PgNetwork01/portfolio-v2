// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(function () {
    var sliderWidth = $('.slider').width();
    var nowLi = 0;
    var li_count = $('.slider li').length;

    // Fixed width for all slider items and container
    $('.slider li').css({
        width: sliderWidth,
        boxSizing: 'border-box'  // Prevents border/padding affecting the width
    });

    $('.slider ul').css({
        width: sliderWidth * li_count,  // Fixed total width
        position: 'relative',
        left: -(nowLi * sliderWidth) + 'px'  // Start at the correct position
    });

    // Create control buttons
    for (var i = 0; i < li_count; i++) {
        $('.sliderControl').append('<a></a>');
    }

    $('.sliderControl a, .slider li').click(function () {
        nowLi = $(this).index();
        sliderChange();
        updateControls();
    });

    function sliderChange() {
        $('.slider ul').stop(true, false).animate({
            left: -(nowLi * sliderWidth) + 'px'
        }, 500);
    }

    function updateControls() {
        $('.sliderControl a').eq(nowLi).css({ 'background-color': '#4c0bff' });
        $('.sliderControl a').eq(nowLi).siblings().css({ 'background-color': '#333' });
    }

    var timer = setInterval(perpic, 5000);

    function perpic() {
        console.log('nowLi = ' + nowLi);
        nowLi++;
        if (nowLi >= li_count) {
            nowLi = 0;
        }
        sliderChange();
        updateControls();
    }

    $('.slider').hover(function () {
        clearInterval(timer);
        $('.timer .percentage').removeClass('gogo');  // Remove 'gogo' on hover
    }, function () {
        timer = setInterval(perpic, 5000);
        $('.timer .percentage').addClass('gogo');  // Add 'gogo' after hover
    });

    // Initialize controls on page load
    updateControls();
});
