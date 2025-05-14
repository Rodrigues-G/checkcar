const codigosECU = {
  "P0301": "Falha de ignição no cilindro 1",
  "P0171": "Mistura pobre detectada (banco 1)",
  "P0401": "Fluxo insuficiente do sistema EGR",
  "P0300": "Falha de ignição aleatória detectada. Pode ser causado por velas, bobinas ou combustível de má qualidade.",
  "P0420": "Eficiência do catalisador abaixo do limite. Verificar catalisador ou sensor de oxigénio.",
  "P0171": "Mistura pobre (banco 1). Pode haver entrada de ar falsa ou sensor MAF com problema.",
  "P0455": "Grande fuga no sistema de controlo de emissões evaporativas. Verificar tampa do depósito ou tubos.",
  "P0128": "Temperatura do motor abaixo do esperado. Possível termostato preso aberto.",
  "P0113": "Sensor de temperatura do ar de admissão – valor muito alto. Verifica ligação elétrica ou sensor.",
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