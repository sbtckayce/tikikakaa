$(document).ready(function(){
    var buy =document.querySelector('.buypr-a');
      var iconx = document.querySelector('.iconx');
 
      buy.onclick=showOrder;
    
   iconx.onclick=hideOrder;
    console.log(buy)
    console.log(iconx)
 })
 
 var current =1;
 
 function showOrder(){
     if(current==1){
         $('.order-infopr').addClass('open-cartpr');
          $('.app').addClass('bg-main');
          $('.container-text').addClass('bg-main');
          $('.container-right-sale').addClass('bg-main');
          $('.container-right-pay').addClass('bg-main');
          $('.container-left-info').addClass('bg-main');
         current=2;
     }else{
         $('.order-infopr').removeClass('open-cartpr');
          $('.app').removeClass('bg-main');
         
          $('.container-text').removeClass('bg-main');
          $('.container-right-sale').removeClass('bg-main');
          $('.container-right-pay').removeClass('bg-main');
          $('.container-left-info').removeClass('bg-main');
         current=1;
     }
 }
 function hideOrder(){
     $('.order-infopr').removeClass('open-cartpr');
      $('.app').removeClass('bg-main');
      $('.container-text').removeClass('bg-main');
      $('.container-right-sale').removeClass('bg-main');
      $('.container-right-pay').removeClass('bg-main');
      $('.container-left-info').removeClass('bg-main');
         current=1;
 }
 
 console.log("kien");