console.log("Hello 2");

document.querySelector('body').addEventListener('mousemove', eyeball);
function eyeball(){
  var eye = document.querySelectorAll('.eye');
  eye.forEach(function(eye){
    let x = eye.getBoundingClientRect().left + (eye.clientWidth/2);
    let y = eye.getBoundingClientRect().top + (eye.clientWidth/2);
    let radian = Math.atan2(Event.pageX - x, Event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate("+ rotation +"deg)";
  })
}