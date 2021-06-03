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

function createList() {
    const list = document.createElement("ul");
    list.style.marginTop = "1rem";
    return list;
}

function createLi(text, color) {
    const li = document.createElement("li");
    li.innerText = text;
    li.style.backgroundColor = color;
    return li;
}
