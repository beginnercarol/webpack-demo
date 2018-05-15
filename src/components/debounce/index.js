import './index.scss';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

export class Debounce extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.count = 0;
        this.state = {

        }
    }

    handleQuery(e){
        console.log("handleQuery inside=>",e.target);
    }

    _debounce(func,wait){
        var timerId;
        return ()=>{
            console.log("this=>",this);
            clearTimeout(timerId);
            timerId = setTimeout(()=>func && func().apply(this,arguments),wait);
        }
    }

    //immediate 表示用户希望立即执行,只有距离上一次 wait s 之后才能执行下一次
    _debounce2(func,wait,immediate){
        var timeout;
        return () => {
            let timerId;
            if(immediate){
                //距离上次执行的时间
                if(timeout){
                    null;
                }else{
                    console.log('timeout',timeout);
                    func.apply(this.arguments);
                    //执行后经过 wait s 后将 timeout 设为 null 表示可以执行
                    timeout = setTimeout(()=>{
                        timeout = null;
                    },wait);
                }
            }else{
                clearTimeout(timeout);
                timeout = setTimeout(() => func && func.apply(this,arguments));
            }

        }
    }

    _debounce3(func,wait,immediate){
        var timeout;
        const ctx = this;
        const debounced = function(){
            let timerId;
            if(immediate){
                //距离上次执行的时间
                if(timeout){
                    null;
                }else{
                    func.apply(this.arguments);
                    //执行后经过 wait s 后将 timeout 设为 null 表示可以执行
                    timeout = setTimeout(()=>{
                        timeout = null;
                    },wait);
                }
            }else{
                clearTimeout(timeout);
                timeout = setTimeout(() => func && func.apply(ctx,arguments));
            }
        }
        debounced.cancel = ()=>{
            clearTimeout(timeout);
            timeout = null;
        }
        return debounced;
    }

    _throttle(func,wait){
        var start = new Date();
        const ctx = this;
        return () => {
            let now = + new Date();
            if(now-start>wait){
                func && func.apply(ctx,arguments);
                start = now;
            }
        }
    }

    _throttle2(func,wait){
        var timeout;
        return () => {
            if(!timeout){
                func && func.apply(this.arguments);
                timeout = setTimeout(()=>{
                    timeout = null
                },wait)
            }
        }
    }

    backpack(goods,capacity){
        let temp = new Array(capacity+1);
        for(let i=0;i<=capacity;i++){
            temp[0][i] = 0;
        }
        for(let i=1; i<=goods.length; i++){
            temp[i] = new Array(capacity+1);
            for(let j=1; j<=capacity; j++){
                if(j-goods[0]>=0){
                    temp[i][j] = Math.max(temp[i-1][j],goods[i][1]+temp[i-1][j-goods[0]])
                }
            }
        }
    }
    wqbackpack(goods,capacity){
        const arr = new Array(goods+1);
        //初始化
        for(let i=0;i<=goods.length;i++){
            arr[i] = new Array(capacity+1);
            for(let j=0;j<=capacity;j++){
                arr[i][j]=0;
            }
        }
        //
        for(let i=0;i<=goods.length;i++){
            for(let j=0;j<=capacity;j++){
                // if(j)
            }
        }
    }


    handleMouseMove(){
        this.count++;
        if(this.ele){
            this.ele.innerHTML = this.count;
        }
    }

    render() {
        return (
            <div className="debounce" onMouseMove={this._debounce2(this.handleMouseMove,2000,true)} ref={(ele)=>{this.ele = ele}}>
                
            </div>
        )
    }
}

export default Debounce;
