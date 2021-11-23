const inputText = document.getElementById('texto-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const buttonTarefas = document.getElementById('criar-tarefa')
listaTarefas.style.backgroundColor ='white'
colorBarckground='rgb(128,128,128)'


function insertTarefas(){

    buttonTarefas.addEventListener('click',function(){
        let lista = document.createElement('li')
        textInput=inputText.value
        lista.appendChild(document.createTextNode(textInput)) //referencia: https://medium.com/@davidsodrelins/criando-e-manipulando-itens-do-html-via-javascript-98158977984b
        lista.classList='list'
        listaTarefas.appendChild(lista)
        inputText.value=""
        colorSelected()
        completedTaskss()
       
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
            event.target.style.backgroundColor = colorBarckground

        })
   }
    
}
colorSelected() 

function completedTaskss(){
    let list = document.querySelectorAll('.list')
    for(let j=0;j<list.length;j+=1){
        let elemento=list[j]
            elemento.addEventListener('dblclick',function(event){
            if (elemento.style.textDecoration =='line-through solid rgb(0, 0, 0)'){
                elemento.classList.remove('completed')
                event.target.style.textDecoration='none'
            }else{
                elemento.classList.add('completed')
                event.target.style.textDecoration='line-through solid rgb(0, 0, 0)'
            }



    })
    }
}

 




