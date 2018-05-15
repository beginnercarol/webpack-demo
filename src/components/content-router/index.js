import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import autoBind from 'react-autobind';
import ContentChild from './child';
export class ContentRouter extends Component {
    constructor(props){
        super(props);
        autoBind(this);
        this.state = {};
    }
    render() {
        console.log("match=>",this.props.match);
        console.log("history=>",this.props.history);
        console.log("query=>",this.props.location.query);
        return (
            <div className = "content-router">
                this is content-router
                <Route path='/content/child' component={ContentChild} />
            </div>
        )
    }
}

export default ContentRouter;
