let config = require('./config');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');
let con = mysql.createConnection(config);
bookRouter = require('./routes/bookroutes')(con);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
/*let bookRouter = express.Router();
bookRouter.route('/books')
/!*    .get(function (req,res) {
        con.query(statement.ShowBook,function (err,result) {
            if (err)
                res.status(500).send(err);
                  res.json(result)
        })
    })*!/
    .post(function (req,res) {
        con.query(statement.InsertBook,req.body,function (err,result) {
            if (err)
                res.status(500).send(err);
                    res.json(result)
        })
    })
    .get(function (req,res) {
         con.query(statement.Search,req.query,function (err,result) {
             if (err)
                 res.status(500).send(err);
                    res.json(result);
         })

});

bookRouter.route('/books/:id')
    .get(function (req,res) {
        con.query(statement.SearchOne,req.params.id,function (err,result) {
            if (err)
                res.status(500).send(err);
                  res.json(result);
        })
    });*/
app.use('/',bookRouter);
/*app.get('/', function (req,res) {
    con.query(statement.ShowBook, function (err,result) {
        if (err)
            res.status(500).send(err);
        //res.end(JSON.stringify(result));
        res.json(result);
    });
});
app.get('/books/:id', function (req,res) {
    con.query(statement.Search,req.param("id"), function (err,result) {
        if (err)
            res.status(500).send(err);
        res.json(result);
    })
});
app.post('/books/add', function (req,res) {
    con.query(statement.InsertBook,req.body , function (err,result) {
        if (err) throw err;
        res.send('Book added to database ID: ' + result.insertId);
    })
});
app.delete('/books/delete/:id', function (req,res) {
    con.query(sql,req.params.id,function (err) {
        if (err) throw err;
        res.send('Delete Success !');
    })
});
app.put('/books/update/:id', function (req,res) {
    con.query(statement.UpdateBook+req.params.id,req.body, function (err) {
        if (err) throw  err;
        res.send('Update Success !');
    })
});*/
app.listen(8080, function () {
    console.log("Running port 8080")
});
