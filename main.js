const app = document.getElementById("app");


// skapa element
const textarea = createTextArea();
const button = createButton("Save note");
const list = createList(); // <ul>

// visa element
app.appendChild(textarea);
app.appendChild(button);
app.appendChild(list);

// event listeners
button.addEventListener("click", function(event){
    const textValue = textarea.value;
    const counter = list.querySelectorAll("li").length;
    const li = createLi(textValue, COLORS[counter % COLORS.length]); // <li>
    list.appendChild(li);
});

// rack upp handen nar ni ser att text dyker upp i webb-
// lasaren nar ni tryckt pa knappen.