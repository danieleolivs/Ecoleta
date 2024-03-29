﻿function populateUfs(){
    const ufSelect = document.querySelector("select[name=uf]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json() )
    .then( states => {

        for(const state of states){

            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome} </option>`

        }

       
    })
}

populateUfs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectdState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectdState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res =>  res.json() )
    .then( cities => {
        citySelect.innerHTML = ""
        for(const city of cities){

            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome} </option>`

        }

        citySelect.disabled = false
       
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities )

//itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handSelectedItem)

}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    const itemId = event.target.dataset.id
    
    //adiciona ou remove 
   
    
    //verificar se existem itens selecionados, se
    //sim pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })

    //se Já tiver selecionado, tirar da seleção
    if( alreadySelected >= 0){
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }else{
        selectedItems.push(itemId)
    }
    //se não estiver selecionado, selecionar à seleção
    collectedItems.value = selectedItems
}