import './index.scss';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Input, message, Row, Col } from 'antd';
import { httpFetch } from '../common/httpFetch';
import moment from 'moment';
import ChildItem from './item';
class Todo extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            text: "",
            items: null,
        }
    }
    componentWillMount(){
        this.getAllItem().then((result) => {
            this.setState({
                items: result.data
            },() => {
                console.log("state=>",this.state);
            })
        });
    }
    getAllItem(){
        return httpFetch({
            url: 'http://localhost:8079/getallitem'
        });
    }
    addNewItem(data){
        this.setState({
            text: data
        })
        const param = {
            content: data,
            date: moment().format('YY-MM-DD hh:mm:ss')
        }
        
        httpFetch({
            url: 'http://localhost:8079/insertnewitem',
            param
        },'POST').then(data=>{
            message.success('Success');
        })
    }
    
    render() {
        return (
            <div className="todo-panel">
            <Row>
                <Input defaultValue={this.state.text} onPressEnter={this.addNewItem}/>
            </Row>
                {
                    this.state.items && this.state.items.map((val,index)=>
                        <ChildItem key={index} content={val.content} date={val.date}/>
                    )
                }
            </div>
        )
    }
}

export default Todo;
