function search(){
    var input, filter,product;
    input= document.getElementById('text');
    filter=input.toUpperCase();
    product= document.getElementsByTagName('div');
    
    
    for(i=0; i<div.lenght; i++){
        card=div[i].getElementsByTagName('div')[0];

        if(card.innerHtml.toUpperCase().indexOf(filter)>-1){
            div[i].style.display="block";
        }
        else{
            div[i].style.display="none"
        }
    }
}