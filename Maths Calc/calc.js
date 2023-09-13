  function check(){
                
        var num=document.getElementById("input").value;
            for(i=1;i<11;i++){
                
                 document.getElementById("table").style.display="block";
                var table=num+"x"+i+"="+num*i;
                document.getElementById("table").innerHTML+=table+"<br/>";
                
            }
             
                document.getElementById("square").style.display="block";
                var sq=Math.pow(num,2);
                document.getElementById("square").innerHTML=sq;
                
                 document.getElementById("cube").style.display="block";
                var cube=Math.pow(num,3);
                document.getElementById("cube").innerHTML=cube;
                
                document.getElementById("sqroot").style.display="block";
                 var cube=Math.sqrt(num);
                document.getElementById("sqroot").innerHTML=cube;
            }
//location.reload();
