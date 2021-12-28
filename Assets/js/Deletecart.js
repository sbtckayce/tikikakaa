


$(document).ready(function(){
   var deleteIcon =document.querySelectorAll('#removeicon-cart');
     var cancelCart = document.getElementById('cancel-cartpr');
    
    //  deleteIcon.onclick=showdelete;
    for(var i=0;i<deleteIcon.length;i++){
        deleteIcon[i].onclick=showdelete;
    };
  cancelCart.onclick=showdelete;
console.log(cancelCart)
})

var current =1;

function showdelete(){
    if(current==1){
        $('.delete-cart').addClass('open-cartpr');
        
        current=2;
    }else{
        $('.delete-cart').removeClass('open-cartpr');
      
        current=1;
    }
}
function hidedelete(){
    $('.delete-cart').removeClass('open-cartpr');
    
        current=1;
}

console.log("kien");