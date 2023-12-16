window.onscroll = scroll

function scroll(event){
  let bg = document.getElementById("backgroundimages")
  bg.style.transform = `translate3d(0, ${-window.scrollY*0.16}px, 0 )`;
}
