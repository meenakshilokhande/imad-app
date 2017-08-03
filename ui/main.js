// Counter code
var button =document.getElementById("counter");
var counter=0;
button.onclick = function(){
    //Make o request to counter endpoint
    
    //Capture the respnce and store it in a variable
    
    // Render the variable in the correct span
    counter =counter+1;
    var span=document.getElementId('count');
    span.innerHTML=counter.toString();
};