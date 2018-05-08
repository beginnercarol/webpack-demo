import React, { Component } from 'react';


class ChildItem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="child-item">
                {this.props.content}
                <span>{this.props.date}</span>
            </div>
        )
    }
}

export default ChildItem
