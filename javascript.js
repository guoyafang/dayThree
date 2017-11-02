var lis=document.getElementsByTagName("ul")[0].getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
     lis[i].index=i;
     
     lis[i].onclick=function(){
        if(this.index===0){
          location.href="one.html"
        }else if(this.index===1){
          location.href="two.html"
        }else if(this.index===2){
            location.href="three.html"
        }
     }
}