// Counter code
var button =document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    counter = counter + 1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit"_btn');
submit.onclick=function(){
    //make the req to the server and send the name
 //capture a list of names and render it as a list 
   var names=['name1','name2','name3'];
   var list='';
   for(var i=0; i<names.lentgh;i++){
       list+='<li>'+name[i]+'</li>';
       }
       var ul=document.getElementById('namelist');
       ul.innerHTML=list;
} ;
