import express from 'express';
import cors from 'cors';
let app=express();

let jsons=require('././lib.json');

app.use(cors());
app.get('/api/books', function (req, res) {
    res.json(jsons);
    console.log('get')
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