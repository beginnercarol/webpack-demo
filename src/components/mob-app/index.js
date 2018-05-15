import './index.scss';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
class MobApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    componentWillMount(){
        let viewport = document.querySelector("meta[name='viewport']");
        let head = document.getElementsByTagName('head')[0];
        const dpr = window.devicePixelRatio;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;

        if(!viewport){
            viewport = document.createElement('meta');
            head.appendChild(viewport);
        }
        viewport.setAttribute('content',`width=device-width, initial-scale=1.0,  user-scalable=no, minimum-scale=1.0, maximum-scale=1.0`);

        console.log("clientWidth, clientHeight=>", clientWidth, clientHeight);
        const divi = clientWidth*dpr / 100;
        console.log("divi=>",divi);
        // document.documentElement.style.fontSize = clientWidth / 7.5 + 'px';
        console.log("document.documentElement.style.fontSize",document.documentElement.style.fontSize);
        // document.body.height = clientHeight + 'px';
    }
    render() {
        return (
            <div className="mob-app">
                <div className="header"></div>
                <div className="main">
                    <div className="main-wrapper">

                    </div>     
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default MobApp;
