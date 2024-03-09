var side = document.querySelector(".sidenavbar")
function showbar(){
 side.style.left="0"
}
function closebarr(){
 side.style.left="-50%"
}
var openn = document.getElementById("open")
var exploree= document.querySelector(".explore")
openn.addEventListener("mouseover",function(event)
{
  event.preventDefault()
  exploree.style.right="0"
})
function closebar(){
    exploree.style.right="-50%"
}
var menu = document.querySelector(".menuss")
function menuopen(){
 menu.style.right="0"
}
function menuclose(){
 menu.style.right="-50%"
}
function colorchange(event)
{
  if(event.target.style.color=="red"){
    event.target.style.color="gray"
  }
  else{
    event.target.style.color="red"
  }
}

// Search Function Activation

var bigcontainer=document.querySelector(".bigcontainer")
var box=bigcontainer.querySelectorAll("div")
var enter=document.getElementById("enter")
enter.addEventListener("keyup",function(event)
{
  var enteredtext=event.target.value.toUpperCase()
  for(i=0;i<box.length;i++)
  {
     var trueContent=box[i].querySelector("h6").textContent
     if(trueContent.toUpperCase().indexOf(enteredtext) <0)
     {
      box[i].style.display="none"
     }
     else{
      box[i].style.display="block"
     }
  }

})