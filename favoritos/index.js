const ul = document.querySelector("#favoritos-list");

function createAndAddLi() {
    const local = localStorage.getItem("favoritos");
    console.log(local);
    const localCut = local.split(",");
    console.log(localCut);
    localCut.forEach((l) => {
        let li = document.createElement("li");
        li.innerHTML = l;
        ul.appendChild(li);
    })
}

createAndAddLi();