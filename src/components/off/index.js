import React, { Component } from 'react'
import autoBind from 'react-autobind';

export class componentName extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.psStack = [];
        this.popStack = [];
        this.state = {

        }
    }

    push(val){
        this.psStack.push(val);
    }
    pop(){
        if(this.popStack.length==0){
            while(this.psStack.length!=0){
                this.popStack.push(this.psStack.pop());
            }
        }
        this.popStack.pop();
    }

    spinArr(arr){
        let flag = arr[0];
        let index = 0;
        for(let i=1; i<arr.length; i++){
            while(arr[i]>=arr[i-1]){
                i++;
            }
            if(flag > arr[i]){
                flag = arr[i];
                index = i;
            }
        }
        return flag;
    }

    getTableFilter(arr){
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr.length-i-1; j++){
                let k = j+1;
                if(arr[j] > arr[k]){
                    this.swap(arr[j],arr[k]);
                }
            }
        }
    }

    handleInsertion(dataSource){
        for(let i=1; i<dataSource.length; i++){
            let temp = dataSource[i];
            let j=i;
            while(temp<dataSource[j] && j>0){
                dataSource[j+1]=dataSource[j];
                j--;
            }
            dataSource[j]=temp;
        }
    }
    //bin insert
    minSpin(arr){
        let low = 0;
        let hight = arr.length-1;
        let mid ; //Math.floor((low+high)/2);
        while(Math.abs(low-high)>1){
            mid = Math.floor((low+high)/2);
            if(arr[mid]<arr[low]){
                high = mid;
            }else{
                low = mid;
            }
        }
        return high;
    }

    //Fib
    fib()
    
    

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default componentName
