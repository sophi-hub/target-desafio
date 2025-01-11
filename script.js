function calcularSoma() {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K++;
        SOMA += K;
    }
    document.getElementById('resultado').innerText = `Valor final de SOMA: ${SOMA}`;
}

function verificarFibonacci() {
    let num = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    let mensagem = (b === num || num === 0) ? `O número ${num} pertence à sequência de Fibonacci.` : `O número ${num} não pertence à sequência de Fibonacci.`;
    document.getElementById('resultado').innerText = mensagem;
}

async function analisarFaturamento() {
    const response = await fetch('assets/dados.json');
    const dados = await response.json();
    let valores = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);
    let media = valores.reduce((a, b) => a + b, 0) / valores.length;
    let menor = Math.min(...valores);
    let maior = Math.max(...valores);
    let acimaMedia = valores.filter(v => v > media).length;
    document.getElementById('resultado').innerText = `Menor: ${menor}\nMaior: ${maior}\nDias acima da média: ${acimaMedia}`;
}

function calcularPercentual() {
    const faturamento = { SP: 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, Outros: 19849.53 };
    let total = Object.values(faturamento).reduce((a, b) => a + b, 0);
    let resultado = '';
    for (let estado in faturamento) {
        let percentual = ((faturamento[estado] / total) * 100).toFixed(2);
        resultado += `${estado}: ${percentual}%\n`;
    }
    document.getElementById('resultado').innerText = resultado;
}

function inverterString() {
    let texto = prompt("Digite uma string para inverter:");
    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    document.getElementById('resultado').innerText = `String invertida: ${invertida}`;
}