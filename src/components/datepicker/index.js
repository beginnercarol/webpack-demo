import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {DatePicker} from 'antd';
export class Datepicker extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="date-picker">
                <DatePicker/>
            </div>
        )
    }
}

export default Datepicker
