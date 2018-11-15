import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors());
let jsons=require('./lib.json');
// app.get('/',(req,res)=>{
//     res.send();
// });
app.get('/api/books',(req,res) =>{
    console.log("get");
    res.send(jsons);
});
app.get('/api/book/:id',(req,res)=>{
    let book=jsons.find(book => {
        if(book.id === req.params.id){
            c(book);
        }
    });
    function c(book){
        res.send(book);
    }
});
const server=app.listen(8080,()=>{
    console.log("start");
});