import React, { Component } from 'react';
import cn from 'classname';
import autoBind from 'react-autobind';

class ChildItem extends Component {
    constructor(props) {
        super(props)
        autoBind(this);
        this.state = {
            completed: false
        }
    }
    handleCompleted(){
        console.log(">>>>");
        this.setState((prevState) => ({
            completed: !prevState.completed
        }))
    }


    render() {
        const itemName = cn({
            "child-item": true,
            "child-completed": this.state.completed
        })
        return (
            <div className={itemName} >
                <span className="svg-wrapper" onClick={this.handleCompleted}>
                    <svg className="icon" arial-hidden="true" >
                        <use xlinkHref="#icon-shaokao"></use>
                    </svg>
                </span>
                {this.props.content}
                <span>{this.props.date}</span>
            </div>
        )
    }
}

export default ChildItem
