function tabuada() {
  let numero = document.getElementById("tnum");
  let tab = document.getElementById("seltab");
  let valor = 0;
  if (numero.value.length == 0) {
    window.alert("Por favor, Digite um número");
  } else {
    numero = Number(numero.value);
    tab.innerHTML = "";
    for (let c = 1; c <= 10; c++) {
      //5 * 1 = 5
      let item = document.createElement("option");
      item.text = `${numero} x ${c} = ${numero * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
    }
  }
}
