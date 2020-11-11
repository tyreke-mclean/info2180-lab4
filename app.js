document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("searchBtn").addEventListener('click',(event) => {
        event.preventDefault();
        if (window.XMLHttpRequest) {
            xmlhttpreq=new XMLHttpRequest();
          } else { 
            xmlhttpreq=new ActiveXObject("Microsoft.XMLHTTP");
          }
          xmlhttpreq.onreadystatechange=function() { 
            if (this.readyState==3 && this.status==200) {
              
              alert(this.responseText);  document.getElementById("result").innerHTML=this.responseText;
        
            }
          }
          
          xmlhttpreq.open("GET","http://localhost:8080/superheroes.php?q=",true);
          xmlhttpreq.send();

    });
    
    
    
}, false);