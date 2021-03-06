const cep = document.querySelector('#cep')
const searching = document.querySelector('#search-btn')
const imageContainer = document.querySelector('.image_container')

const showResult = (result) => {
    for(const item in result){
        if(document.querySelector('#'+ item)){
            document.querySelector('#' + item).value = result[item]
        }            
    }
}

searching.addEventListener('click', (e) =>{

    let search = cep.value.replace('-','')

    const options = {
        methode: "GET",
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(function data(data){
            return getState(data) , showResult(data)
            }
        )
    })
    .catch(e => alert('CEP Não Localizado'))
})

//Find and show picture state

let photo = document.createElement('img')
photo.setAttribute('id','photo')

const getState = (data) =>{
    for(var i=0; i < pictures.length;i++){
        if(pictures[i].state == data.uf){
            photo.setAttribute('src', `${pictures[i].photo}`)
            imageContainer.appendChild(photo)
        } 
    }
}


import { pictures } from "./pictures.js"