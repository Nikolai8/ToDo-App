import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {todoArray: []};
        this.todos = [];
    }

    async componentWillMount() {
        this.todos = ["Eintrag 1", "Eintrag 2", "Eintrag 3"];

        console.error("Mount");
    }

    componentDidMount() {
        console.error("Mount");
    }

    componentWillUnmount() {
        console.error("Unmount");
    }


    getTodos() {
        let content = [];

        for(let [index, todo] of this.todos.entries()) {
            content.push(<ToDoItem key={index} des={todo} />);
        }

        return content;
    }

    render() {
        return(
            <div>
                <div className="App-ListContainer">
                    <div className="App-ListTitle">Meine Aufgaben</div>
                    
                    <div>
                        { this.getTodos() }
                    </div>
                </div>

                <div className="App-ListAddItemContainer">
                    Hinzufügen
                </div>
            </div>
        )
    }
}

export default ToDoList;