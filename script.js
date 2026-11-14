
var numero = "5542988681308";


function enviar() {
  var nome = document.getElementById("nome").value.trim();
  var telefone = document.getElementById("telefone").value;
  var servico = document.getElementById("servico").value;
  var data = document.getElementById("data").value;
  var periodo = document.getElementById("periodo").value;
  var aviso = document.getElementById("aviso");


  var digitos = telefone.replace(/\D/g, "");
  if (nome == "" || digitos.length < 10 || data == "") {
    aviso.className = "erro";
    aviso.innerHTML = "Preencha nome, telefone com DDD e a data de preferência.";
    return;
  }


  var partes = data.split("-");
  var dataBr = partes[2] + "/" + partes[1] + "/" + partes[0];

  var mensagem = "Olá! Gostaria de agendar uma avaliação na Andreas Hecht Optometria.\n" +
    "Nome: " + nome + "\n" +
    "Telefone: " + telefone + "\n" +
    "Atendimento: " + servico + "\n" +
    "Data de preferência: " + dataBr + " (" + periodo + ")";

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link, "_blank");

  aviso.className = "";
  aviso.innerHTML = "Pedido pronto! Envie a mensagem no WhatsApp.";
}


var campoData = document.getElementById("data");
var hoje = new Date();
campoData.min = hoje.getFullYear() + "-" +
  String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
  String(hoje.getDate()).padStart(2, "0");


document.getElementById("telefone").addEventListener("input", function () {
  var v = this.value.replace(/\D/g, "").slice(0, 11);

  if (v.length > 6) {
    v = "(" + v.slice(0, 2) + ") " + v.slice(2, 7) + "-" + v.slice(7);
  } else if (v.length > 2) {
    v = "(" + v.slice(0, 2) + ") " + v.slice(2);
  } else if (v.length > 0) {
    v = "(" + v;
  }

  this.value = v;
});
document.querySelectorAll('.meu-carrossel').forEach(carrossel => {
    const imagens = carrossel.querySelector('.carrossel-imagens');
    const total = imagens.children.length;
    let indice = 0;

    function atualizar() {
        imagens.style.transform = `translateX(-${indice * 100}%)`;
    }

    carrossel.querySelector('.btn-proximo').addEventListener('click', () => {
        indice = (indice + 1) % total;
        atualizar();
    });

    carrossel.querySelector('.btn-anterior').addEventListener('click', () => {
        indice = (indice - 1 + total) % total;
        atualizar();
    });
});