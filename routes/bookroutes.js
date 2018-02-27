let express = require('express');
let statement = require('../query');
let routes = function (con) {
let bookRouter = express.Router();
let checkNull = require('../controllers/middleware/checknull');
let checkLength = require('../controllers/middleware/checklength');
    bookRouter.route('/books')
        .get (function (req,res) {
            con.query(statement.ShowBook,function (err,result) {
                if (err)
                    res.status(500).send(err);
                res.json(result);
            })
        });
    bookRouter.route('/book')
        .get(function (req,res) {
            con.query(statement.Search,req.query,function (err,result) {
                if (err)
                    res.status(500).send(err);
                res.json(result);
            })
        })
        .post(checkNull,checkLength,function (req,res) {
            con.query(statement.InsertBook,req.body,function (err,result) {
                if (err) throw  err;
                res.status(201).send("success!ID:" + result.insertId)
            });
        });
    bookRouter.route('/book/restore')
        .put(function (req,res) {
            con.query(statement.RestoreBook,function (err) {
                if (err)
                    res.status(500).send(err);
                res.json("Success!")
            })
        });
    bookRouter.route('/book/delete')
        .get(function (req,res) {
           con.query(statement.ShowSoftDelete,function (err,result) {
               if (err)
                   res.status(500).send(err);
                      res.json(result)
           })
        });
    bookRouter.route('/book/:id')
        .put(checkNull,checkLength,function (req,res) {
           con.query(statement.UpdateBook+req.params.id,req.body,function (err) {
               if (err)
                   res.status(405).send(err);
                     res.status(200).json("update success!");
           })
        })
       /* .delete(function (req,res) {
            con.query(statement.DeleteBook,req.params.id,function (err) {
                if (err)
                    res.status(405).send(err);
                        res.json("Delete success!")
            })
        })*/
        .patch(function (req,res) {
            con.query(statement.UpdateBook+req.params.id,req.body,function (err) {
                if (err)
                    res.status(405).send(err);
                        res.status(200).json("Success !")
            })
        })
        .delete(function (req,res) {
            con.query(statement.SoftDelete,req.params.id,function (err) {
                if (err)
                    res.status(405).send(err);
                        res.json("Success !")
            })
        })
        .get(function (req,res) {
            con.query(statement.SearchOne,req.params.id,function (err,result) {
                if (err)
                    res.status(500).send(err);
                      res.json(result);
            })
        });

    return bookRouter;
};
module.exports=routes;