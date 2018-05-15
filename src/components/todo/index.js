import './index.scss';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import cn from 'classname';
import moment from 'moment';
import { Input, message, Row, Col, Button, Icon } from 'antd';
import { httpFetch } from '../common/httpFetch';
import ChildItem from './item';
import { deleteItem } from '../actions';

class Todo extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            text: "",
            items: null,
            isSideVisible: false,
        }
    }
    componentWillMount(){
        this.getAllItem();
    }
    getAllItem(){
        httpFetch({
            url: 'http://localhost:8079/getallitem'
        }).then((result) => {
            this.setState({
                items: result.data
            },() => {
                console.log("state=>",this.state);
            })
        });
    }
    addNewItem(data){
        this.setState({
            text: data
        })
        const param = {
            content: data.target.value,
            date: moment().format('YY-MM-DD hh:mm:ss')
        }
        console.log("param=> ",param);
        
        httpFetch({
            url: 'http://localhost:8079/additem',
            param
        },'POST').then(res=>{
            if(res.err){
                message.error('error');
            }else{
                message.success('Success');
                this.getAllItem();
            }
        })
    }
    toggleSideVisible(){
        console.log("????");
        this.setState((prevState)=>({
            isSideVisible: !prevState.isSideVisible
        }))
    }
    handleDelete(id){
        return ()=>{
            deleteItem({id:encodeURIComponent(id)}).then(data => {
                if(data.err){
                    message.error('failed');
                }else{
                    message.success('succed');
                }
            })
        }
    }
    render() {
        const sideVisible = cn({
            'todo-side': true,
            'todo-side-visible': this.state.isSideVisible
        })
        return (
            <div className="todo-panel">
                <div className="todo-nav">
                    <svg className="icon" aria-hidden="true" onClick={this.toggleSideVisible}>
                        <use xlinkHref="#icon-daohang"></use>
                    </svg>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-tianjia"></use>
                    </svg>
                </div>
                <div className={sideVisible}>
                    <Icon type="arrow-left" onClick={this.toggleSideVisible}/>
                    blahblah
                </div>
                <div className="todo-main todo-input">
                    <Row>
                        <Col span={12} offset={6}>
                        <Input defaultValue={this.state.text} onPressEnter={this.addNewItem}/>
                        </Col>
                    </Row>
                </div>
                <div className="todo-main todo-items">
                    {
                        this.state.items && this.state.items.map((val,index)=>
                            <ChildItem 
                                key={index} 
                                content={val.content} 
                                date={val.date}
                                handleDelete={this.handleDelete(val._id)}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Todo;
