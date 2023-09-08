const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const textColor = document.querySelector('.color');
const btn = document.getElementById('btn');


btn.addEventListener('click', function() {
    var hexIndex = '#';
    for (let i = 0; i < 6; i++) {
        hexIndex += hex[randomNum()];
    }
    textColor.textContent = hexIndex;
    textColor.style.color = hexIndex;
    document.body.style.backgroundColor = hexIndex;
})

function randomNum() {
    return Math.floor(Math.random() * hex.length);
}