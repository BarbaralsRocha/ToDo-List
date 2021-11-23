const inputText = document.getElementById('texto-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const buttonTarefas = document.getElementById('criar-tarefa')
const limparTarefas= document.getElementById('apaga-tudo')
const finalizados= document.getElementById('remover-finalizados')

function insertTarefas(){

    buttonTarefas.addEventListener('click',function(){
        let lista = document.createElement('li')
        textInput=inputText.value
        lista.appendChild(document.createTextNode(textInput)) //referencia: https://medium.com/@davidsodrelins/criando-e-manipulando-itens-do-html-via-javascript-98158977984b
        lista.classList='list'
        listaTarefas.appendChild(lista)
        inputText.value=""
        colorSelected()
        removeCompleteds()

       
    })

}
insertTarefas()

function colorSelected(){
    let list = document.querySelectorAll('.list')
    for(let j=0;j<list.length;j+=1){
        let elemento=list[j]
        elemento.addEventListener('click', function(event){
            for(let i=0;i<list.length;i+=1){
                list[i].style.backgroundColor = 'white' 
            }
            event.target.style.backgroundColor = 'rgb(128, 128, 128)'

        })
   }
    
}
colorSelected() 

listaTarefas.addEventListener("dblclick", completedTaskss)
function completedTaskss(event){
    let tarefaCompleta = event.target
    tarefaCompleta.classList.toggle('completed')
}


function clearAllTasks(){
    limparTarefas.addEventListener("click", function(){
        listaTarefas.innerHTML=""
    })

}
clearAllTasks()


function removeCompleteds(){
    let list = document.querySelectorAll('.list')
    finalizados.addEventListener("click", function(){
        for (let i=0;i<list.length;i++){
            if(list[i].classList.contains('completed')){
                list[i].remove()
            }
        }
    })
}




