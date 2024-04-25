const p = document.querySelector("#municipios");
const h1 = document.querySelector("#h1-header");
const ul = document.querySelector("#municipios-list");
const UF = location.href.split("=")[1];
const array = [];

h1.innerText = `Municípios de ${UF}`;

async function fetchMunicipios(UF) {
const municipios = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`);
const municipiosJson = await municipios.json();
municipiosJson.forEach(element => {
console.log(element)
let li = document.createElement("li");
let p = document.createElement("p");
let btn = document.createElement("button");
btn.classList.add("btn");

p.innerText = element.nome;
btn.innerText = "Favoritar";
li.appendChild(p);
li.appendChild(btn);
ul.appendChild(li);   

btn.addEventListener("click", () => {
   array.push(p.innerText);
   localStorage.setItem("favoritos", array);
})
});
}

fetchMunicipios(UF);


