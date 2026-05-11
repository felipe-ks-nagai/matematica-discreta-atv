calcularPermutacaoSimples = () => {
    let r;
    const n = parseInt(document.getElementById('permutacao-simples-input').value)
    const resultado = document.getElementById('permutacao-simples-formula')
    const explicacao = document.getElementById('permutacao-simples-explicacao')
    r = fatorial(n)
    resultado.value = `Resultado: ${r}`
    explicacao.innerHTML = `Explicação: ${n}! = ${r}`
}

calcularPermutacaoRepeticao = () => {
    let r = 1;
    let y = 1;
    let kArray = [];
    const n = parseInt(document.getElementById('permutacao-repeticao-input').value)
    const k = parseInt(document.getElementById('permutacao-repeticao-repeticoes-input').value)
    const resultado = document.getElementById('permutacao-repeticao-formula')
    const explicacao = document.getElementById('permutacao-repeticao-explicacao')
    kArray = k.toString().split(',')
    r = fatorial(n);
    kArray.forEach(element => {
        y *= fatorial(parseInt(element));
    });
    r /= y;
    explicacao.innerHTML = `Explicação: ${n}! / (${kArray.map(x => `${x}!`).join(' × ')}) = ${fatorial(n)} / (${kArray.map(x => `${fatorial(parseInt(x))}`).join(' × ')}) = ${r}`
    resultado.value = `Resultado: ${r}`
}

calcularCombinacaoSimples = () => {
    let r;
    const n = parseInt(document.getElementById('combinacao-simples-input-n').value)
    const p = parseInt(document.getElementById('combinacao-simples-input-p').value)
    const resultado = document.getElementById('combinacao-simples-formula')
    const explicacao = document.getElementById('combinacao-simples-explicacao')
    r = fatorial(n) / (fatorial(p) * fatorial(n - p))
    explicacao.innerHTML = `Explicação: ${n}! / (${p}! * (${n} - ${p})!)) = ${fatorial(n)} / (${fatorial(p)} * ${fatorial(n - p)}) = ${r}`
    resultado.value = `Resultado: ${r}`
}

calcularArranjoSimples = () => {
    let r;
    const n = parseInt(document.getElementById('arranjos-simples-input-n').value)
    const p = parseInt(document.getElementById('arranjos-simples-input-p').value)
    const resultado = document.getElementById('arranjos-simples-formula')
    const explicacao = document.getElementById('arranjo-simples-explicacao')
    r = fatorial(n) / fatorial(n - p)
    explicacao.innerHTML = `Explicação: ${n}! / (${n} - ${p})! = ${fatorial(n)} / (${fatorial(n - p)}) = ${r}`
    resultado.value = `Resultado: ${r}`
}

fatorial = (n) => {
    let r = 1;
    for(let i = 1; i <= n; i++) {
        r *= i
    }
    return r
}

limpar = (componente, explicacao) => {
    const resultado = componente.querySelector('input[type="text"]')
    const inputs = componente.querySelectorAll('input[type="number"]')
    resultado.value = 'Resultado: '
    explicacao.textContent = ''
    inputs.forEach(input => {
        input.value = ''
    })
}