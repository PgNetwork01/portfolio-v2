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
