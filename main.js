const main = document.querySelector('main'); //querSelector Retorna o primeiro elemento dentro do documento
const root = document.querySelector('root')
const input = document.getElementById('input') //getElementById Retorna o elemto de ID
const resultInput = document.getElementById('result')

// Define uma lista de teclas permitidas para a entrada do usuário
const allowedKeys = ["(",")", "", "", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%",""]

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
})
