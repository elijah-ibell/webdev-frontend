canvas = document.getElementById("canvas-1");
canvas.height = window.innerHeight - 80;
canvas.width = window.innerWidth - 80;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight - 80;
    canvas.width = window.innerWidth - 80;
})
