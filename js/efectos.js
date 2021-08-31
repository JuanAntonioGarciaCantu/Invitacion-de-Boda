window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
});

var tienda_regalos = document.getElementById("regalo");
var seccion = document.getElementsByClassName("seccion");
var btn_historia = document.getElementById("btn-historia");

tienda_regalos.addEventListener("click", function(){
    alert("No. de evento: 000000");
});


