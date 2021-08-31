const cep = document.querySelector('#cep')
const searching = document.querySelector('#search-btn')

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
        .then( data => showResult(data))
    })
    .catch(e => console.log('Erro: '+ e,message))
})

