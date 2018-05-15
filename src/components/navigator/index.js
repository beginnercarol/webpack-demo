import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

export class NavigatorPanel extends Component {
    constructor(props){
        super(props);
        autoBind(this);
        this.state = {}
    }
    render() {
        return (
            <div className="navigator-panel">
                <Link to={{
                    pathname: "/content",
                    search: '?sort=name',
                }}>Content</Link>
            </div>
        )
    }
}

export default NavigatorPanel;
