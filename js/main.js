main = document.getElementsByTagName("main")[0];
main.style.height = (window.innerHeight - 80) + "px";
main.style.width = (window.innerWidth - 80) + "px";

window.addEventListener('resize', function(){
    main.style.height = (window.innerHeight - 80) + "px";
    main.style.width = (window.innerWidth - 80) + "px";
})
