import React, { Component } from 'react';
import {Router,Route,Switch,Link} from 'react-router-dom';
import GeoMap from './pro-map';
import ContentRouter from './content-router';
import ContentChild from './content-router/child';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
            <Switch>
                <Route exact path="/" component={GeoMap} />
                <Route path='/map' component={GeoMap}/>
                <Route path='/content' component={ContentRouter} />
            </Switch>
            </div>
        )
    }
}

