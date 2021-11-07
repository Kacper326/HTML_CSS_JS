// const decrease = document.querySelector('.decrease')
// const reset = document.querySelector('.reset')
// const increase = document.querySelector('.increase')
// let value = document.querySelector('.value')

// decrease.addEventListener('click', function() {
//     value.textContent = 3;
    
// })


//set initial count 
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if(styles.contains("decrease")){
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else if (styles.contains("increase")) {
            count++;
        }
        if (count < 0) {
            value.style.color ="red";
        } else if (count === 0) {
            value.style.color = "#222";
        } else if ( count > 0) {
            value.style.color = "green"
        }
        value.textContent = count;
    });
});

