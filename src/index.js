import './index.css';
import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            nodeList:['a','b','c']
        }
    }
    render(){
        return (
            <div>
                6666
                {[...this.state.nodeList]}
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));

