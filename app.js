const cardBtn = document.getElementById('cardBtn');
const cardForm = document.getElementById('card__form');
const cardThanks = document.getElementById('cardThanks');
const list__scores = document.querySelectorAll('input.list__scores--item');
const card__score = document.querySelector('.card__score');
console.log(card__score);
let score = 0;



Array.from(list__scores).map((item) => {
    item.addEventListener('click', function() {
        score = item.id
    });   
})


cardBtn.addEventListener('click', function() {
    if (score === 0) {
        alert('Đánh giá đi thằng loz');
        return;
    }
    cardForm.style.display = 'none';
    cardThanks.style.display = 'flex';
    card__score.innerHTML = `Your score is ${score} out of 5`;
});