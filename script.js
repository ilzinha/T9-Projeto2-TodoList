window.addEventListener('DOMContentLoaded', () => {

    //adicionando itens na lista
    const input = document.querySelector('#todoInput')
    const lista = document.querySelector('#todoLista')
    const addButton = document.querySelector('#todoSubmit')
    const buttonMarcarTodos = document.querySelector('#todoMarcarTodos')
    const buttonRemoveTodos = document.querySelector('#todoRemoverTodos')
    let dragging = ''


    let addItemOnList = (event) => {
        event.preventDefault()

        //checando se é isBlanc
        if (input.value == null || input.value == '' || input.value == ' ') {
            alert(`Insira uma palavra válida`)
        } else {

            //cria uma div que vai receber o item e o botão
            const div = document.createElement('div')
            const item = document.createElement('li')
            const miniButton = document.createElement('button')

            div.classList.add('div_list')
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
            div.style.borderBottom = '1px solid #ccc'


            // EVENTOS
            miniButton.addEventListener('click', () => {
                lista.removeChild(div)
            })

            //Marcar itens concluídos individualmente
            item.addEventListener('click', () => {

                if(item.classList.contains('checked')) {
                    item.classList.remove('checked')
                    
                } else {
                    item.classList.add('checked')

            }
           })



            //**************************  DRAG AND DROP */ ********************************

            item.setAttribute('draggable', 'true');
            // Atribuindo o draggable para os meus itens

            lista.addEventListener('dragstart', function (e) {
                dragging = e.target.closest('.div_list')
            })


            lista.addEventListener('dragover', function (e) {
                e.preventDefault()

                const node = e.target.closest('.div_list')

                this.insertBefore(dragging, node)
            })

            lista.addEventListener('dragend', function (e) {
                dragging = null
            })
        }
    }

    addButton.addEventListener('click', addItemOnList)

    //Deixando a caixa de texto vazia quando o usuário incluir um valor e apertar o botão ADD
    addButton.addEventListener('click', () => {
        document.querySelector('input').value = '';
    })

    buttonMarcarTodos.addEventListener('click', () => {
        let itens = document.querySelectorAll('li')
        for (i = 0; i < itens.length; i++) {
            itens[i].style.textDecoration = 'line-through'
        }
    })

    buttonRemoveTodos.addEventListener('click', () => {
        let todasDiv = document.querySelectorAll('.div_list')
        for (i = 0; i < todasDiv.length; i++) {
            todasDiv[i].style.display = 'none'
        }
    })
})