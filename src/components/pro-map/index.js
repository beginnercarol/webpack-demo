import React, { Component } from 'react'
import autoBind from 'react-autobind';
export default class GeoMap extends Component {
    constructor(props){
        super(props);
        autoBind(this);
        this.map = null;
    }
    async componentWillMount(){
        if(window.AMap){
            this.initMap();
        }else{
            const script = document.createElement('script');
            await this.loadMap(script,'http://webapi.amap.com/maps?v=1.4.6&key=f819d770948605900eaaf2f9216012df');
            this.initMap();
        }
    }
    loadMap(script,path){
        return new Promise((resolve,reject)=>{
            script.async = true;
            script.setAttribute('src',path);
            script.onload = ()=>{
                resolve();
            }
            script.onerror = ()=>{
                reject();
            }
        })
    }
    initMap(){
        this.map = new AMap.Map('geo-map',{
            resizeEnable: true,
            zoom: 10,
            center: [116.480983, 40.0958]
        });
    }
    render() {
    return (
        <div id="geo-map">
        
        </div>
    )
    }
}
