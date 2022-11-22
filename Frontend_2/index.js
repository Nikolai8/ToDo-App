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
            div.classList.add("ListItemContainer", "ListNewItemContainer");

            let input = document.createElement("input");
            input.classList.add("ListAddItemInput");
            input.onkeydown = (evt) => {
                if(evt.key == "Enter") {
                    let des = input.value;

                    evt.target.blur();
                    div.innerText = des;
                    div.classList.remove("ListNewItemContainer");
                    div.style.outline = "none";

                    this.saveToDo(des);
                }
            }
            div.appendChild(input);

            this.addToDoInputActive = true;
            document.getElementById("ListContainer").appendChild(div);
        } else {
            document.getElementsByClassName("ListNewItemContainer")[0].style.outline = "4px solid red";
        }
    },

    async saveToDo(des) {
        this.addToDoInputActive = false;

        await fetch("http://127.0.0.1:8080/todos/?name="+des, {
            method: "POST",
            //headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.error(res);
        });
    }
 }