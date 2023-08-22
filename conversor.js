document.getElementById("btnCalcular").addEventListener("click", function () {
    var produto = document.getElementById("inProduto").value;
    var valorProduto = parseFloat(document.getElementById("inValor").value);
    var dolar = parseFloat(document.getElementById("inDolar").value);
    var imposto = parseFloat(document.getElementById("inImposto").value);

    var valorReal = valorProduto * dolar;
    var valorComImposto = valorReal * (1 + imposto / 100);

    var tbResultado = document.getElementById("tbResultado");
    var newRow = tbResultado.insertRow(tbResultado.rows.length);
    newRow.insertCell(0).textContent = produto;
    newRow.insertCell(1).textContent = valorProduto.toFixed(2) + " US$";
    newRow.insertCell(2).textContent


newRow.insertCell(1).textContent = valorProduto.toFixed(2) + " US$";
newRow.insertCell(2).textContent = valorReal.toFixed(2) + " R$";
newRow.insertCell(3).textContent = valorComImposto.toFixed(2) + " R$";
});
