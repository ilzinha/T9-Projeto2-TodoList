window.addEventListener('DOMContentLoaded', () => {

    //adicionando itens na lista
    const input = document.querySelector('#todoInput')
    const lista = document.querySelector('#todoLista')
    const addButton = document.querySelector('#todoSubmit')
    const buttonMarcarTodos = document.querySelector('#todoMarcarTodos')
    const buttonRemoveTodos = document.querySelector('#todoRemoverTodos')

    
    
    let addItemOnList = (event) => {
        event.preventDefault()
        
        //checando se é isBlanc
        if (input.value == null || input.value == '') {
            alert(`Insira uma palavra válida`)
        } else {
            
            //cria uma div que vai receber o item e o botão
            const div = document.createElement('div')
            const item = document.createElement('li')
            const miniButton = document.createElement('button')
            
            //Adiciona o valor no item o 'x' do botão
            item.innerText = input.value
            miniButton.innerText = 'x'
            
            //adiciona o item e o botão na div
            div.appendChild(item)
            div.appendChild(miniButton)
            
            //adiciona a div na lista(ul)
            lista.appendChild(div)

            //adicionando display flex na div
            div.style.display = 'flex'
            div.style.justifyContent = 'space-between'
            div.style.border = '1px solid #ccc'
        
            
            // EVENTOS
            miniButton.addEventListener('click', () => {
                lista.removeChild(div)
            })
            
            //Marcar itens concluídos individualmente
            item.addEventListener('click', () => {
                item.style.textDecoration = 'line-through'
            })
        }
    }
    
    addButton.addEventListener('click', addItemOnList)

    //Deixando a caixa de texto vazia quando o usuário incluir um valor e apertar o botão ADD
    addButton.addEventListener('click', () => {
        document.querySelector('input').value = ''
    })

    
})