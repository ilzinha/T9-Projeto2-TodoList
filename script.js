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
       
        //cria o botão do item
       const miniButton = document.createElement('button')
       miniButton.innerText = 'x'
       item.appendChild(miniButton)

       miniButton.addEventListener('click', () => {
           lista.removeChild(item)

           
           
        })
        
        item.addEventListener('click', () => {
            item.style.textDecoration = 'line-through'
           })
    }
  
       //Marcar itens concluídos individualmente


   }

   addButton.addEventListener('click', addItemOnList)
  
  



})