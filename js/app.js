const love = document.querySelector('.cont_corazon');

if (love) {
    love.addEventListener('click', () => {
        window.location.href = 'page/pikachu.html';
    });
}

const heart = document.querySelector('.heart');

if (heart) {
    heart.addEventListener('click', () => {
        const origin = window.location.origin;
        window.location.href = `${origin}/page/request.html`;
    });
}