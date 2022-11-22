import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    render() {
        return(
            <div className="App-ListItemContainer">
                <div className="App-ListItemText">{this.props.des}</div>
            </div>
        )
    }
}

export default ToDoItem;