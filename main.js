const main = document.querySelector('main'); //querSelector Retorna o primeiro elemento dentro do documento
const root = document.querySelector('root')
const input = document.getElementById('input') //getElementById Retorna o elemto de ID
const resultInput = document.getElementById('result')
const theme = document.body

// Verifica se o usuário já selecionou um tema anteriormente
if (localStorage.theme == 'dark-theme') {
    // Adiciona a classe 'dark-theme' se ela existir
    theme.classList.add('dark-theme')
} else {
    // Remove a classe 'dark-theme' se ela não existir
    theme.classList.remove('dark-theme')
}

// Adiciona um event listener ao botão com ID 'themeSwitcher'
const switchTheme = document.getElementById('themeSwitcher').addEventListener('click', function() {
    // Verifica se o corpo do documento tem a classe 'dark-theme'
    if (theme.classList.contains('dark-theme')){
        // Remove a classe 'dark-theme' se ela existir
        theme.classList.remove('dark-theme')
        //salvando escolha no local storage
        localStorage.theme = ""
    } else {
        // Adiciona a classe 'dark-theme' se ela não existir
        theme.classList.add('dark-theme')
        //salvando escolha no local storage
        localStorage.theme = "dark-theme"
    }
})

// Define uma lista de teclas permitidas para a entrada do usuário
const allowedKeys = ["(",")", "", "", "-", "+","*","/", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%",""]

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

    // Quando o botão é clicado, limpa o campo placeholder
    input.placeholder = ''

    // Foca no input ao botao ser clicado
    input.focus()
})

// Seleciona o botao  com a classe 'equal' na página
document.getElementById('equal').addEventListener('click', function() {
    // Quando o botão é clicado, inicia a funcao
    calculate()

    // Adiciona o valor anterior ao placeholder
    input.placeholder = input.value

    // Limpa o campo  value
    input.value = ''
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
    // Define o valor do campo de entrada 'resultInput' como 'ERROR' e adiciona a classe 'error'
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    // Usa a função 'eval' para calcular o resultado da expressão matemática no campo de entrada 'input'
    const result = eval(input.value)
    
    // Atribui o resultado ao valor do campo de entrada 'resultInput' e remove a classe 'error'
    resultInput.value = result.toFixed(2)
    resultInput.classList.remove('error')
}
 
// Adiciona um event listener ao botão com ID 'copyToClipboard'
const copyAndPaste = document.getElementById('copyToClipboard').addEventListener('click', function (e) {
    // Seleciona o botão que acionou o evento
    const button = e.currentTarget
    // Verifica se o texto do botão é 'Copy'
    if (button.innerText == 'Copy') {
        // Altera o texto do botão para 'Copied'
        button.innerText = 'Copied'
        // Adiciona a classe 'success' ao botão
        button.classList.add('success') || resultInput.classList.add('success')
        // Copia o texto da entrada de resultado para a área de transferência
        window.navigator.clipboard.writeText(resultInput.value)
        // Inicia um temporizador de 2 segundos
        setTimeout(() => {  
            // Altera o texto do botão de volta para 'Copy'
            button.innerText = 'Copy';
            // Remove a classe 'success' do botão
            button.classList.remove('success') || resultInput.classList.remove('success')
         }, 2000);
    }
})

//Estou ciente de que a função eval pode representar um risco à segurança do código 
//devido à possibilidade de exploração por usuários mal-intencionados. No entanto, 
//gostaria de esclarecer que esta aplicação serve apenas como um exemplo 
//para fins de aprendizado em JavaScript.