import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {Router,Route,Switch,Link, withRouter} from 'react-router-dom';

import GeoMap from './pro-map';
import ContentRouter from './content-router';
import ContentChild from './content-router/child';
import NavigatorPanel from './navigator';
import Todo from './todo';
import Mob from './mob';
import MobApp from './mob-app';
import Debounce from './debounce';
import ChangeState from './state';
class Home extends Component {
    constructor(props){
        super(props);
        autoBind(this);
        this.state = {};
    }
    initBaseFrame(Content){
        return (
            <div className="main-body">
                {/* <NavigatorPanel {...this.props} /> */}
                <Content {...this.props}/>
            </div>
        )
    }
    render() {
        const history = this.props.history;
        const location = this.props.location;
        console.log("home props=>",this.props);
        return (
            <div className="container">
            <Switch>
                <Route exact path="/" render={() => <GeoMap/>} />
                <Route path='/map' render={() => this.initBaseFrame(GeoMap)}/>
                <Route path='/content' render={() => this.initBaseFrame(ContentRouter)} />
                <Route path='/todolist' render={() => this.initBaseFrame(Todo)}/>
                <Route path='/mob' render={() => this.initBaseFrame(Mob)}/>
                <Route path='/mob-app' render={() => this.initBaseFrame(MobApp)}/>
                <Route path='/debounce' render={() => this.initBaseFrame(Debounce)}/>
                <Route path='/cst' render={() => this.initBaseFrame(ChangeState)}/>
            </Switch>
            </div>
        )
    }
}

export default withRouter(Home);

