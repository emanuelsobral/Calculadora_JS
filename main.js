const main = document.querySelector('main'); //querSelector Retorna o primeiro elemento dentro do documento
const root = document.querySelector('root')
const input = document.getElementById('input') //getElementById Retorna o elemto de ID
const resultInput = document.getElementById('result')

const allowedKeys = ["(",")", "", "", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%",""]

input.addEventListener('keydown', function(e) {
    e.preventDefault()
    if (allowedKeys.includes(e.key)) {
        input.value += e.key;
        return
    }
})
