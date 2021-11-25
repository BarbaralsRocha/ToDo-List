const inputText = document.getElementById('texto-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const buttonTarefas = document.getElementById('criar-tarefa')
const limparTarefas = document.getElementById('apaga-tudo')
const finalizados = document.getElementById('remover-finalizados')
const salvarTarefas = document.getElementById('salvar-tarefas')
const moverCima = document.getElementById('mover-cima')
const moverBaixo = document.getElementById('mover-baixo')
const removeSelecionado = document.getElementById('remover-selecionado')

function insertTarefas() {

    buttonTarefas.addEventListener('click', function () {
        let lista = document.createElement('li')
        textInput = inputText.value
        lista.appendChild(document.createTextNode(textInput)) //referencia: https://medium.com/@davidsodrelins/criando-e-manipulando-itens-do-html-via-javascript-98158977984b
        lista.classList = 'list'
        listaTarefas.appendChild(lista)
        inputText.value = ""
        colorSelected()
        removeCompleteds()
        removerSelecionado()



    })
}
insertTarefas()

//Requisito8
function colorSelected() {
    let list = document.querySelectorAll('.list')
    for (let j = 0; j < list.length; j += 1) {
        let elemento = list[j]
        elemento.addEventListener('click', function (event) {
            for (let i = 0; i < list.length; i += 1) {
                list[i].style.backgroundColor = 'rgba(255, 102, 0, 0.767)'
                list[i].classList.remove('selected')

            }
            event.target.style.backgroundColor = 'rgb(128, 128, 128)'
            elemento.classList.add('selected')


        })
    }

}
colorSelected()

//Requisito9
listaTarefas.addEventListener("dblclick", completedTaskss)
function completedTaskss(event) {
    let tarefaCompleta = event.target
    tarefaCompleta.classList.toggle('completed')
}

//Requisito10
function clearAllTasks() {
    limparTarefas.addEventListener("click", function () {
        listaTarefas.innerHTML = ""
    })

}
clearAllTasks()

//Requisito11
function removeCompleteds() {
    let list = document.querySelectorAll('.list')
    finalizados.addEventListener("click", function () {
        for (let i = 0; i < list.length; i++) {
            if (list[i].classList.contains('completed')) {
                list[i].remove()
            }
        }
    })
}

//Requisito12 
function saveTasks() {
    localStorage.setItem('saveTasks', listaTarefas.innerHTML)
}
salvarTarefas.addEventListener('click', saveTasks)

function loadTasks() {
    listaTarefas.innerHTML = localStorage.getItem('saveTasks')
}
loadTasks()

//Requisito13
function moveParaBaixo() {

    moverBaixo.addEventListener('click', function () {
        const element = document.querySelector('.selected')
        if (element != null && element.nextElementSibling != null) {
            element.parentNode.insertBefore(element.nextElementSibling, element)
        }

    })
}
moveParaBaixo()

function moveParaCima() {

    moverCima.addEventListener('click', function () {
        const element = document.querySelector('.selected')
        if (element != null && element.previousElementSibling != null) {
            element.parentNode.insertBefore(element, element.previousElementSibling)
        }

    })
}
moveParaCima()



//Requisito14
function removerSelecionado() {
    let list = document.querySelectorAll('.list')
    removeSelecionado.addEventListener('click', function (event) {
        for (let i = 0; i < list.length; i += 1) {
            if (list[i].style.backgroundColor === 'rgb(128, 128, 128)') {
                list[i].remove()
            }
        }

    })
}

//finalizado

