const codigosECU = {
  "P0301": "Falha de ignição no cilindro 1",
  "P0171": "Mistura pobre detectada (banco 1)",
  "P0401": "Fluxo insuficiente do sistema EGR"
};

function procurarCodigo() {
  const input = document.getElementById("codeInput").value.toUpperCase();
  const resultado = codigosECU[input];

  const divResultado = document.getElementById("resultado");
  if (resultado) {
    divResultado.textContent = `Código ${input}: ${resultado}`;
  } else {
    divResultado.textContent = `Código ${input} não encontrado na base de dados.`;
  }
}