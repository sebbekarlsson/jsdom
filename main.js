const app = document.getElementById("app");


// skapa element
const textarea = createTextArea();
const button = createButton("Save note");
const list = createList(); // <ul>

// visa element
app.appendChild(textarea);
app.appendChild(button);
app.appendChild(list);

function countNotes() {
    return list.querySelectorAll("li").length;
}

// rack upp handen nar fargerna fungerar :)

// event listeners
button.addEventListener("click", function(event){
    const textValue = textarea.value;
    const count = countNotes();
    const color = COLORS[count % COLORS.length];

    const li = createLi(textValue, color); // <li>
    list.appendChild(li);
});