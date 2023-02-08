window.onscroll = scroll

function scroll(event){
  let bg = document.getElementById("backgroundimages")
  bg.style.top = ( -window.scrollY*0.16 ) + "px";
}
