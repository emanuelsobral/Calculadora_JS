const main = document.querySelector('main'); //querSelector Retorna o primeiro elemento dentro do documento
const root = document.querySelector('root')
const input = document.getElementById('input') //getElementById Retorna o elemto de ID
const resultInput = document.getElementById('result')

// Define uma lista de teclas permitidas para a entrada do usuário
const allowedKeys = ["(",")", "", "", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%",""]

// Seleciona todos os elementos com a classe 'charKey' na página
document.querySelectorAll('.charKey').forEach(function (charKeyButton) {
    // Para cada botão, adiciona um ouvinte de evento que é acionado quando o botão é clicado
    charKeyButton.addEventListener('click', function() {
        // Foca no input ao botao ser clicado
        input.focus()
        // Quando o botão é clicado, adiciona o valor do atributo 'data-value' do botão ao valor atual do campo de entrada
        input.value += charKeyButton.dataset.value
        // Adiciona o valor da variável 'value' ao valor atual do campo de entrada
        input.value += value
    })
})

// Seleciona o botao com a classe 'clear' na página
document.getElementById('clear').addEventListener('click', function() {
    // Quando o botão é clicado, limpa o campo input
    input.value = ''
    // Foca no input ao botao ser clicado
    input.focus()
})

// Seleciona o botao  com a classe 'equal' na página
document.getElementById('equal').addEventListener('click', function() {
    // Quando o botão é clicado, inicia a funcao
    calculate()
})

// Adiciona um ouvinte de evento ao campo de entrada que é acionado quando uma tecla é pressionada
input.addEventListener('keydown', function(e) {
    // Previne o comportamento padrão do evento keydown
    e.preventDefault()

    // Verifica se a tecla pressionada está na lista de teclas permitidas
    if (allowedKeys.includes(e.key)) {
        // Se a tecla estiver na lista, adiciona o valor da tecla ao valor atual do campo de entrada
        input.value += e.key;
        return
    }

    // Verifica se a tecla pressionada é a tecla 'Backspace'
    if (e.key === 'Backspace') {
        // Se for a tecla 'Backspace', remove o último caractere do valor atual do campo de entrada
        input.value = input.value.substring(0, input.value.length - 1)
    }

    // Verifica se a tecla pressionada é a tecla 'enter'
    if (e.key === 'Enter') {
        // Se for a tecla 'enter' inicia a funcao calculate
        calculate()
    }
})

// Define uma função chamada 'calculate'
function calculate() {
    // Usa a função 'eval' para calcular o resultado da expressão matemática no campo de entrada
    const result = eval(input.value)
    // Atribui o resultado ao valor do campo de entrada 'resultInput'
    resultInput.value = result
}


//Estou ciente de que a função eval pode representar um risco à segurança do código 
//devido à possibilidade de exploração por usuários mal-intencionados. No entanto, 
//gostaria de esclarecer que esta aplicação serve apenas como um exemplo 
//para fins de aprendizado em JavaScript.