import React, { Component } from 'react'

export default class ContentChild extends Component {
    render() {
        console.log(this.props.match);
        console.log("history=>",this.props.history);
        return (
            <div>
                Child
            </div>
        )
    }
}
