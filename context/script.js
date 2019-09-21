window.onload = function () {
    // var item = document.querySelector('.item-active');
    // item.onclick = active;
    // active();

    // var home = document.querySelector('#home');
    // var price = document.querySelector('#price');
    // var about = document.querySelector('#about');
    // var contacts = document.querySelector('#contacts');
    // home.onclick = active;
    // price.onclick = active;
    // about.onclick = active;
    // contacts.onclick = active;

    var items = document.querySelectorAll('#context ul li');
    // document.querySelector('#home').onclick = function () {
    //     console.log(getRnd(0, items.length));
    // };
    // for (var i = 0; i < items.length; i++) {
    //     items[i].onclick = active;
    // }
    setInterval(function () {
        active.apply(items[getRnd(0,items.length)]);
    },500);

};

function active() {
    this.classList.toggle('item-active');
}
function getRnd(min, max) {
    return Math.floor(Math.random()*(max-min));
}

// active();
