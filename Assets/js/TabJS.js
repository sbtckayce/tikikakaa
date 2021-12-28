$(function () {

    //Tivi
    $('.number-page li').click(function () {
        $('.number-page li').each(function () {
            $(this).removeClass('number-blue');
        });
        $(this).addClass('number-blue');

       
    });

    

});
var page1 = document.querySelector('.number-page1');

var page2 = document.querySelector('.number-page2');
var page3 = document.querySelector('.number-page3');

var page4 = document.querySelector('.number-page4');
var page5 = document.querySelector('.number-page5');



page1.onclick = function () {

    openTab('tab-pin');
}
page2.onclick = function () {

    openTab('tab-cap');
}
page3.onclick = function () {

    openTab('tab-dhn');
}
page4.onclick = function () {

    openTab('tab-dhnu');
}

page5.onclick = function () {

    openTab('tab-dhtm');
}




console.log(page1)
console.log(page2)



function openTab(tabName) {

    var x = document.getElementsByClassName('tabpin');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
};
