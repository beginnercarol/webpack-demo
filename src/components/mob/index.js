import './index.scss';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
class Mob extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentWillMount(){
        let viewport = document.querySelector("meta[name='viewport']");
        let head = document.getElementsByTagName('head')[0];
        const dpr = window.devicePixelRatio;
    
        if(!viewport){
            viewport = document.createElement('meta');
            head.appendChild(viewport);
        }
        viewport.setAttribute('content',`width=device-width, initial-scale=${1/dpr},  user-scalable=no, minimum-scale=${1/dpr}, maximum-scale=${1/dpr}`);

        console.log("clientWidth=>", document.documentElement.clientWidth);
    }
    render() {
        return (
            <div className="mob">
                <header></header>
                <main>
                    <div className="main-wrapper">

                    </div>     
                </main>
                <footer></footer>
            </div>
        )
    }
}

export default Mob;
