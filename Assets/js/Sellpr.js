

$(document).ready(function(){
    

    var editaction = document.querySelectorAll('#edit-action');
    
    var cancel1 =document.getElementById('cancel-addpr-1');
    editaction.onclick=sellPr;
    cancel1.onclick=curr;

})
var current=1;
function sellPr(){
    if(current==1){
        $('.add-product-sellpr').addClass('open-sell');

       
 current=2;
    }else{
         $('.add-product-sellpr').removeClass('open-sell');
      
        current=1;
    }
 
}
function curr(){
     $('.add-product-sellpr').removeClass('open-sell');
   
    current=1;

}
console.log("kien");