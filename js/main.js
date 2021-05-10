	// Array con las imagenes que se iran mostrando en la web
var imagenes=new Array(
    'img/covid1.jpeg',
    'img/covid2.jpeg',
);

var x=0;
setInterval(function () {

    // cambiamos la imagen de manera sucesiva

    document.getElementById("covid1").src=imagenes[x++%imagenes.length];

},4000);

//Menú

const d = document;

const $btnMenu = d.getElementById("menu-cel");
const $nav = d.getElementById("nav-bar");

$btnMenu.addEventListener("click", (e)=>{
  $nav.style.display = "block";
})

$nav.addEventListener("click", (e)=>{
  $nav.style.display = "none";
})

//Envio de formulario a email

document.addEventListener('DOMContentLoaded', () => {

    function textAreaValidate() {
      const $form = document.querySelector(".contact-form")
      const $textArea = document.querySelector(".message");
      const $span = document.createElement("span");
      $span.id = $textArea.name;
      $span.textContent = $textArea.title;
      $span.classList.add("textarea-error", "none");
      $textArea.insertAdjacentElement("afterend", $span)
    }
    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".message")) {
        let $input = e.target;
        let pattern = $input.dataset.pattern;
  
        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value) ? document.getElementById($input.name).classList.add("is-active") : document.getElementById($input.name).classList.remove("is-active");
        }
  
        if (!pattern) {
          return $input.value === "" ? document.getElementById($input.name).classList.add("is-active") : document.getElementById($input.name).classList.remove("is-active");
        }
      }
    });
    document.addEventListener("submit", (e) =>{
      
    })
    textAreaValidate();
  });