const urlBase = 'https://rickandmortyapi.com/api/character/';

fetch(urlBase)
    .then(respuesta => {
        //console.log(respuesta);
        //console.log(respuesta.json())
        return respuesta.json();
    })
    .then(respJson => {
        const info = respJson.info;
        const personajes = respJson.results;
        console.log(info);
        console.log(personajes);
        showCharacters(personajes);
    })

const showCharacters = (personajes) => {
    /*const ul = document.createElement('ul');
     personajes.forEach(personaje => {
         const li = document.createElement('li');
         li.innerHTML = `El personaje ${personaje.name} is ${personaje.status};
                         <img src="${personaje.image}">`;
         ul.appendChild(li);
     });
     document.querySelector('#respuesta').appendChild(ul);*/
    const contenedorRespuesta = document.querySelector('#respuesta');
    personajes.forEach(personaje => {
        contenedorRespuesta.appendChild(creaCard(personaje));
    })
}

const creaCard = (personaje) => {
    const card = document.createElement('div');
    const html = `
    <div class="card m-3" style="width: 18rem; float: letf;">
  <img src="${personaje.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${personaje.name}</h5>
    <p class="card-text">${personaje.status}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
    card.innerHTML = html;
    return card;
}
