import React, { Component } from 'react';
import autoBind from 'react-autobind';

export class Cst extends Component {
    constructor(props) {
        super(props)
        autoBind(this);
        this.state = {

        }
    }
    changeState(){
        this.props.arr[0] = '5';
        console.log(this.props.arr);
    }

    render() {
        console.log("parent state=>",this.props.ctx.state);
        console.log("isEqual=>",this.props.arr === this.props.ctx.state);
        return (
            <div>
                <button onClick={this.changeState}>Click</button>
            </div>
        )
    }
}

export default Cst
