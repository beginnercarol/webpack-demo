import './index.css';
import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import Home from './components/main';

let customHistory = createHistory();

class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <Router history={customHistory}>
                <Home />
            </Router>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));

