calcularPermutacaoSimples = () => {
  let r;
  const n = parseInt(document.getElementById('permutacao-simples-input').value)
  const resultado = document.getElementById('permutacao-simples-formula')
  r = fatorial(n)
  resultado.value = `Resultado: ${r}`
}

calcularPermutacaoRepeticao = () => {
    let r = 1;
    let y = 1;
    let kArray = [];
    const n = parseInt(document.getElementById('permutacao-repeticao-input').value)
    const k = parseInt(document.getElementById('permutacao-repeticao-repeticoes-input').value)
    kArray = k.toString().split(',')
    const resultado = document.getElementById('permutacao-repeticao-formula')
    r = fatorial(n);
    kArray.forEach(element => {
        y *= fatorial(parseInt(element));
    });
    r /= y;
    resultado.value = `Resultado: ${r}`
}

calcularCombinacaoSimples = () => {
    let r;
    const n = parseInt(document.getElementById('combinacao-simples-input-n').value)
    const p = parseInt(document.getElementById('combinacao-simples-input-p').value)
    const resultado = document.getElementById('combinacao-simples-formula')
    r = fatorial(n) / (fatorial(p) * fatorial(n - p))
    resultado.value = `Resultado: ${r}`
}

calcularArranjoSimples = () => {
    let r;
    const n = parseInt(document.getElementById('arranjos-simples-input-n').value)
    const p = parseInt(document.getElementById('arranjos-simples-input-p').value)
    const resultado = document.getElementById('arranjos-simples-formula')
    r = fatorial(n) / fatorial(n - p)
    resultado.value = `Resultado: ${r}`
}

fatorial = (n) => {
    let r = 1;
    for(let i = 1; i <= n; i++) {
        r *= i
    }
    return r
}
