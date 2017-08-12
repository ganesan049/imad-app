var button=document.getElementById('counter');

var counter=0;
button.onclick=function(){
  counter+=1;
  var span = document.getElementById('count');
  span.innerHTML=counter.toString();
};
...button.onclick=function(){
       var  request = new XMLHttpRequest();
       request.onsteadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
       } 
      };
    request.open('GET','http://ganesanece49.imad.hasura-app.io/counter',true);
    request.send(null);
};...