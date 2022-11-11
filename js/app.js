import { navegacion, showModal, loadCharacterInfo, loadData, showCharacters, urlBase } from './eventos.js';

document.querySelector('#respuesta').addEventListener('click', showModal);

loadData(urlBase);

document.querySelector('.botones').addEventListener('click', navegacion);

