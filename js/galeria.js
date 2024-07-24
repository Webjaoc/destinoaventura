var indexValue = 11;
showimg(indexValue);

const izq = document.querySelector(".l ");
const dcha = document.querySelector(".r" );

izq.addEventListener("click",()=>{
    showimg(indexValue += -1)
})

dcha.addEventListener("click",()=>{
    showimg(indexValue += 1)
})

let array = document.querySelectorAll(".btn");
array.forEach( (item , index) => {
  item.addEventListener("click", (e) => {
    showimg(indexValue = e.target.id);
  });
})


function showimg(foto){
  
  var i;
  const img = document.querySelectorAll(".galeria");
  const bSliders = document.querySelectorAll(".btn");

  if (foto > img.length){
    indexValue = 1;
  }
  if (foto < 1){
    indexValue = img.length;
  }

  for (i=0; i < img.length; i++){
    img[i].style.display = "none";
  }

  for (i=0; i < bSliders.length; i++){
    bSliders[i].style.background = "none";
  }

  

  img[indexValue -1].style.display = "block";
  bSliders[indexValue-1].style.background = "white";



}



