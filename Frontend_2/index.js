window.addEventListener("load", () => {
    ToDo.init();
});

const ToDo = {
    toDoArray: [],
    addToDoInputActive: false,

    init(){
        document.getElementById("ListAddItemContainer").addEventListener("click", () => {
            this.addToDo();
        });
    },

    addToDo() {
        if(!this.addToDoInputActive) {
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

            this.addToDoInputActive = true;
            document.getElementById("ListContainer").appendChild(div);
        } else {
            //document.getElementsByClassName("ListAddItemInput")[0].style.border = "1px solid red";
        }
    },

    saveToDo() {
        this.addToDoInputActive = false;
        alert("fetch post ToDo");
    }
 }