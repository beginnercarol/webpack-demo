import React, { Component } from 'react';
import Datepicker from '../datepicker';
export default class ContentChild extends Component {
    render() {
        console.log("match=>",this.props.match);
        console.log("history=>",this.props.history);
        return (
            <div>
                Child
                <Datepicker/>
            </div>
        )
    }
}
