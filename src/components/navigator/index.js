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
    getAllItem(){
        fetch('http://localhost:8079/getAllItem').then(res=>{
            console.log('res=>',res.json());
            return res.json()
        })
    }
    
    render() {
        return (
            <div className="navigator-panel">
                <Link to={{
                    pathname: "/content",
                    search: '?sort=name',
                }}>Content</Link>
                <Button onClick={this.getAllItem}>Click</Button>
            </div>
        )
    }
}

export default NavigatorPanel;
