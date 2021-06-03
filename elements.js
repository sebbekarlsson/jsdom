function createTextArea() {
    const textarea = document.createElement("textarea");
    textarea.style.display = "block";
    return textarea;
}

function createButton(text) {
    const button = document.createElement("button");
    button.innerText = text;
    button.style.display = "block";
    button.style.marginTop = "1rem";
    return button;
}

const ulStyle = `
    list-style: none;
    margin-top: 1rem;
`;

// rack upp handen nar ni lyckats fa bort 
// punkterna

function createList() {
    const list = document.createElement("ul");
    list.style = ulStyle;
    return list;
}

// rack upp handen nar ni kan ta bort <li> med click.

function whenLiClicked(event) {
    event.target.parentNode.removeChild(event.target);
}

function createLi(text, color) {
    const li = document.createElement("li");
    li.innerText = text;
    li.style.backgroundColor = color;
    li.style.cursor = "pointer";
    li.className = "note";

    li.addEventListener("click", whenLiClicked);

    return li;
}
