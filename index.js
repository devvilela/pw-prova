const ul = document.querySelector("#estado-list");

async function fetchEstados() {
const estados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
const estadosUF = await estados.json();
estadosUF.forEach(element => {
    let estadoSigla = element.sigla;
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.classList.add("li-a")
    li.appendChild(a);
    a.href = `./municipios/index.html?name=${estadoSigla}`
    a.innerText = element.nome;
    ul.appendChild(li);
});
}

fetchEstados();
