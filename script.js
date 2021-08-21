function change(){
document.getElementById("clickevent").addEventListener("click",changecolor())
}
function changecolor()
{
  document.getElementById("p1").style.backgroundColor="red";
  document.getElementById("p2").style.backgroundColor="blue";
}