window.addEventListener('DOMContentLoaded', () => {

    //adicionando itens na lista
   const input = document.querySelector('#todoInput')
   const lista = document.querySelector('#todoLista')
   const addButton = document.querySelector('#todoSubmit')

   let addItemOnList = (event) => {
       event.preventDefault()
       
       //checando se é isBlanc
    if(input.value == null || input.value == ''){
        alert(`Insira uma palavra válida`)
    } else {
        //cria o item na lista
       const item = document.createElement('li')
       item.innerText = input.value
       lista.appendChild(item)
       
        //cria o botão do item para excluir
       const miniButton = document.createElement('button')
       miniButton.innerText = 'x'
       item.appendChild(miniButton)

       miniButton.addEventListener('click', () => {
           lista.removeChild(item)
       })
        
        //Marcar itens concluídos individualmente
        item.addEventListener('click', () => {
            item.style.textDecoration = 'line-through'
           })
    }
  


   }

   addButton.addEventListener('click', addItemOnList)
  
  



})