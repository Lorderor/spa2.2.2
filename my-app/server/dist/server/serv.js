'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
var jsons = require('./lib.json');
// app.get('/',(req,res)=>{
//     res.send();
// });
app.get('/api/books', function (req, res) {
    console.log("get");
    res.send(jsons);
});
app.get('/api/book/:id', function (req, res) {
    var book = jsons.find(function (book) {
        if (book.id === req.params.id) {
            c(book);
        }
    });
    function c(book) {
        res.send(book);
    }
});
var server = app.listen(8080, function () {
    console.log("start");
});