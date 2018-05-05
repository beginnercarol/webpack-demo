import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ContentChild from './child';
export class ContentRouter extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className = "content-router">
                this is content-router
                <Route path='/content/child' component={ContentChild} />
            </div>
        )
    }
}

export default ContentRouter
