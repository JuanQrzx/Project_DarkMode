class Anuncio {
  constructor() {
    this.changeBtn = document.querySelector("#change-theme");
    this.noite = document.querySelector(".bi-moon");
    this.day = document.querySelector(".bi-sun");
  }
}

let carro = new Anuncio();

//função para salvar a preferência e aparência do botão
function SavePref() {
  let mode = localStorage.getItem("modeSave");
  if (mode === "dark") {
    day.style.display = "block";
    noite.style.display = "none";
  } else {
    noite.style.display = "block";
    day.style.display = "none";
  }
}

//função para resgatar a preferência e modificar a aparência do botão de acordo com a situação
carro.changeBtn.addEventListener("change", function () {
  document.body.classList.toggle("dark");
  let noite = document.querySelector(".bi-moon");
  let day = document.querySelector(".bi-sun");

  if (document.body.classList.contains("dark")) {
    day.style.display = "block";
    noite.style.display = "none";
    localStorage.setItem("modeSave", "night");
  } else {
    noite.style.display = "block";
    day.style.display = "none";
    localStorage.setItem("modeSave", "light");
  }
});

//Restaura preferências ao recarregar a página
document.addEventListener("DOMContentLoaded", SavePref);
