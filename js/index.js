// Your code goes here
const imgs = document.getElementsByTagName("img");
console.log(imgs)
imgs[1].addEventListener("mouseenter", () =>{
    imgs[1].style.transform='scale(1.2)';
    imgs[1].style.transition = 'transform 1s'

})
