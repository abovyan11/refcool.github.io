window.onscroll = function () {
    myFunction();
}
function myFunction() {
    var icon1 = document.getElementById("icon1"),
        icon2 = document.getElementById("icon2"),
        head = document.getElementById("head"),
        login = document.getElementById("login"),
        registration = document.getElementById("registration");
    var a = document.body.scrollTop || document.documentElement.scrollTop;
    if (a < 50) {
        icon2.classList.remove("icc1");
        icon1.classList.remove("icc2");
        icon2.classList.add("icc2");
        icon1.classList.add("icc1");
        head.classList.remove("hh1");
        head.classList.add("hh2");

    } else {
        icon1.classList.remove("icc1");
        icon2.classList.remove("icc2");
        icon1.classList.add("icc2");
        icon2.classList.add("icc1");

        head.classList.remove("hh2");
        head.classList.add("hh1");
    }
}
function log(){
    var menu = document.getElementById("menu1");
    menu.classList.remove("mm1");
    menu.classList.add("mm2");
}
function log1() {
    var menu = document.getElementById("menu1");
    menu.classList.remove("mm2");
    menu.classList.add("mm1");
}
