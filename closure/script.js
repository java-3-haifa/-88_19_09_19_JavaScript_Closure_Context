window.onload = function () {
    var box = document.querySelector('.box');
    box.style.backgroundColor = '#fff';
    var x = 100;
    box.onclick = function () {
        box.style.border = '2px solid red';
        console.log(x);
    };

    box.onmouseenter = function () {
        x = 10000;
    }
};

