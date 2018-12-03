import React, { Component } from 'react';
import axios from "axios";
class Tap extends Component {
 constructor(props){
     super(props);
     this.state={
         libData:[],
         valueInput:0,
         currentId:{}
     };
 }
    onLoadClick=()=>{
        this.getReqFun(this.onLoad);
    };
    onLoadClickId=()=>{
        this.getReqIdFun(this.onLoad);
    };
    onLoadCallbackId=(data)=>{
          this.setState({currentId:data})
    };
    onLoadCallback=(data)=>{

        this.setState({libData:data});
    };
    getReqFun = () => {
          axios.get('http://localhost:8080/api/books')
         .then(res => {
             this.onLoadCallback(res.data);
             console.log(res.data);
         })
         .catch(error=>{console.log(error)
         });
 };
    getReqIdFun = () => {
             axios.get('http://localhost:8080/api/book/'+this.state.valueInput)
            .then(res => {
                this.onLoadCallbackId(res.data);
                console.log(res.data);
            })
            .catch(error=>{console.log(error)
            });
    };
    render(){
        return (
            <div>
                <button onClick={this.onLoadClick}>Libs</button>

                {this.state.libData.map((item)=> (
                    <div>{item.name}</div>
                    ))
                }

                <input type= "text" onChange={(evt)=> {
                    this.setState({valueInput: evt.target.value})
                }}/>
                    <div>{this.state.valueInput}</div>
                <button onClick={this.onLoadClickId}>Lib id</button>

                <div>
                    сделать деструктизацию
                </div>
            </div>
        );
    }
}

export default Tap;
