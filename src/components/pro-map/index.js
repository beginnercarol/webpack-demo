import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class GeoMap extends Component {
    constructor(props){
        super(props);
        autoBind(this);
        this.map = null;
    }
    async componentDidMount(){
        if(window.AMap){
            this.initMap();
        }else{
            const script = document.createElement('script');
            await this.loadMap(script,'http://webapi.amap.com/maps?v=1.4.6&key=f819d770948605900eaaf2f9216012df');
        }
    }
    loadMap(script,path){
        return new Promise((resolve,reject)=>{
            const body = document.getElementsByTagName('body')[0];
            script.async = true;
            script.setAttribute('src',path);
            body.appendChild(script);
            script.onload = ()=>{
                this.initMap();
                resolve();
            }
            script.onerror = ()=>{
                reject();
            }
        })
    }
    initMap(){
        const ctx = this;
        this.map = new AMap.Map(ctx.con,{
            resizeEnable: true,
            zoom: 10,
            center: [116.480983, 40.0958]
        });
    }
    render() {
        return (
            <div id="geo-map" ref={(div)=>this.con=div} style={{width:"600px",height:"500px"}}>
            
            </div>
        )
    }
}
