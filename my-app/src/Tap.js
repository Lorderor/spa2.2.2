import React, { Component } from 'react';
import axios from "axios";
class Tap extends Component {
 constructor(props){
     super(props);
     this.state={
         libData:[],
         valueInput:0,
         currentId:{},
         showEl:false,
         showElT:false
     };
 }
    onLoadClick=()=>{
        this.getReqFun(this.onLoad);
        this.setState({showElT:false})
        this.setState({showEl:true})
    };
    onLoadClickId=()=>{
        this.getReqIdFun(this.onLoad);
        this.setState({showEl:false})
        this.setState({showElT:true})
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
        const{id:idBook,name:nameBook, discription:discriptionBook} = this.state.currentId;
        return (
            <div>
                <button onClick={this.onLoadClick}>Libs</button>



                <input type= "text" onChange={(evt)=> {
                    this.setState({valueInput: evt.target.value})
                }}/>

                <button onClick={this.onLoadClickId} >Lib id</button>

                <div>{
                    this.state.showElT &&
                    <div>
                        <p>Номер в каталоге:{idBook}</p>
                        <p>Название:{nameBook}</p>
                        <p>Описание:{discriptionBook}</p>

                    </div>
                }
                    {this.state.showEl && this.state.libData.map((item)=> (
                        <div>Номер: {item.id}|Название: {item.name}|Описание: {item.discription}</div>
                    ))
                    }</div>
            </div>
        );
    }
}

export default Tap;
