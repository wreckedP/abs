// Load load "components"

const compontents = ["navbar","footer"]

function loadHTML(tag) {
fetch(tag + ".html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#" + tag);
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
}

compontents.forEach(n => loadHTML(n))
