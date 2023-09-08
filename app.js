const bgColor = ["#7C9D96", "#EF9595", "#94A684", "#A1CCD1"];
const btn = document.getElementById('btn');
const textColor = document.querySelector('.color');

btn.addEventListener("click", function() {
    const randomArray = randomNum();
    textColor.textContent = bgColor[randomArray];
    textColor.style.color = bgColor[randomArray];
    document.body.style.backgroundColor = bgColor[randomArray];
    document.body.style.backgroundColor = bgColor[randomArray];
});

function randomNum() {
    return Math.floor(Math.random() * bgColor.length);
}

