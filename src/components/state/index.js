import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Cst from './cst';
export class ChangeState extends Component {
    constructor(props) {
        super(props)
        autoBind(this);
        this.state = {
            arr: ['1','2']
        }
    }

    render() {
        const ctx = this;
        return (
            <div className="state">
                <Cst arr={this.state.arr} ctx={ctx}/>
            </div>
        )
    }
}

export default ChangeState
