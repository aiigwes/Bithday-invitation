const envelope = document.getElementById('envelope');
const poster = document.getElementById('poster');
const startBtn = document.getElementById('startBtn');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        envelope.classList.add('slide-down');
    }, 600);
    setTimeout(() => {
        poster.classList.add('show');
    }, 900);
});
startBtn.addEventListener('click', function() {
    createMegaConfetti();
    
    const originalText = this.innerText;
    this.innerText = "LOADING... ";
    this.style.pointerEvents = "none";
    
    setTimeout(() => {
        this.innerText = "PARTY STARTED! 🎉";
        alert("Уровень 19 успешно разблокирован! Вы приглашены на день рождение! 🎂");
        this.innerText = originalText;
        this.style.pointerEvents = "auto";
    }, 1500);
});
function createMegaConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff8fa9', '#f7d070', '#a192e6', '#ffffff', '#ff527b', '#ff3366'];
    const shapes = ['square', 'heart'];
    for (let i = 0; i < 1000; i++) {
        const particle = document.createElement('div');
        particle.classList.add('confetti');
        
        const currentShape = shapes[Math.floor(Math.random() * shapes.length)];
        
        if (currentShape === 'heart') {
            particle.innerText = '♥';
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.fontSize = (Math.random() * 10 + 10) + 'px';
            particle.style.background = 'transparent';
        } else {
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const size = (Math.random() * 6 + 6) + 'px';
            particle.style.width = size;
            particle.style.height = size;
        }
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 0.7 + 's';
        particle.style.animationDuration = (Math.random() + 1) + 's';
        
        container.appendChild(particle);
        
        setTimeout(() => { particle.remove(); }, 3000);
    }
}
