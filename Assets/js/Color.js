$(function () {

    //Tivi
    $('.container-right-color ul li').click(function () {
        $('.container-right-color ul li').each(function () {
            $(this).removeClass('border-color');
        });
        $(this).addClass('border-color');

       
    });
 
 
    

});