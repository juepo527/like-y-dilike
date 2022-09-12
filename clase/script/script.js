import { data } from "../data/data.js"
const items = document.getElementById("items");
const templanteCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
let like = [];
let dislike =[];

document.addEventListener("DOMContentLoaded", () => {
    loadData(data)
})
const loadData = data => {
    data.forEach(personajes => {
        const { id, name, image } = personajes

        templanteCard.querySelector('h5').textContent = name;
        templanteCard.querySelector('img').setAttribute('src', image);
        templanteCard.querySelector('.btn-dark').dataset.id = id;

        const clone = templanteCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}
items.addEventListener('click',e => {
    addLike(e);
})
const addLike = e =>{
    if (e.target.classList.contains('btn-dark')){
        setLike(e.target.parentElement);
    }
}

const setLike = objeto => {
    const boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad:0
    }
    if(like.hasOwnProperty(boton.id)){
        boton.cantidad = like[boton.id].cantidad +1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton};

    console.log(like[boton.id]);
}
items.addEventListener('click',f => {
    addDislike(f);
})
const addDislike = f =>{
    if (f.target.classList.contains('btn-dislike')){
        setdislike(f.target.parentElement);
    }
}

const setdislike = objetob => {
    const btn2 = {
        id: objetob.querySelector('.btn-dislike').dataset.id,
        cantidad:0
    }
    if(dislike.hasOwnProperty(btn2.id)){
        btn2.cantidad = dislike[btn2.id].cantidad +1;
        objetob.querySelector('#dislike').textContent = btn2.cantidad;
    }

    dislike[btn2.id] = {...btn2};

    console.log(dislike[boton.id]);
}