function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "childman.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "youngman.jpg");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "oldman.jpg");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "childwoman.jpg");
        //Criança
      } else if (idade < 21) {
        img.setAttribute("src", "youngwoman.jpg");
        //Jovem
      } else if (idade < 50) {
        img.setAttribute("src", "oldwoman.jpg");
        //Adulto
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
