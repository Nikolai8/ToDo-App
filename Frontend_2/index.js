window.addEventListener("load", () => {
    ToDo.init();
});

const ToDo = {
    toDoArray: [],

    init(){
        document.getElementById("ListAddItemContainer").addEventListener("click", () => {
            this.addToDo("Test");
        });
    },

    addToDo(des) {
        let div = document.createElement("div");
        div.classList.add("ListItemContainer");
        div.innerText = des;

        document.getElementById("ListContainer").appendChild(div);
    }
 }