const appStyle = `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
``
// rack upp handen nar stylen fungerar for er.
const app = document.getElementById("app");
app.style = appStyle;


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

// event listeners
button.addEventListener("click", function(event){
    const textValue = textarea.value;
    const count = countNotes();
    const color = COLORS[count % COLORS.length];

    const li = createLi(textValue, color); // <li>
    list.appendChild(li);

    // rack upp handen nar textarean blir tom efter
    // ni tryckt pa knappen.
    textarea.value = "";
});