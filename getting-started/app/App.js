import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './GroceryList';

class App extends Component {
    renderGroceryList() {
        return (<GroceryList />)
    }
    render() {
        return (
            <div>{this.renderGroceryList()}</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// npm install
// npm start