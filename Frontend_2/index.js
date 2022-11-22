window.addEventListener("load", () => {
    ToDo.init();
});

const ToDo = {
    toDoArray: [],

    init(){
        document.getElementById("ListAddItemContainer").addEventListener("click", () => {
            this.addToDo();
        });
    },

    addToDo() {
        let div = document.createElement("div");
        div.classList.add("ListItemContainer");

        let input = document.createElement("input");
        input.classList.add("ListAddItemInput");
        input.onkeydown = (evt) => {
            if(evt.key == "Enter") {
                evt.target.blur();
                div.innerText = input.value;

                this.saveToDo();
            }
        }
        div.appendChild(input);

        document.getElementById("ListContainer").appendChild(div);
    },

    saveToDo() {
        alert("fetch post ToDo");
    }
 }