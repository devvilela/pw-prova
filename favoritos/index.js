const ul = document.querySelector("#favoritos-list");

function createAndAddLi() {
    const local = localStorage.getItem("favoritos");
    const localCut = local.split(",");
    localCut.forEach((l) => {
        let li = document.createElement("li");
        li.innerHTML = l;
        ul.appendChild(li);
    })
}

createAndAddLi();