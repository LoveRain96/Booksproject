module.exports = function (req,res,next) {
    if (req.body.title.length > 40 || req.body.author.length > 100)
        return res.status(400).send({message:"title and author no longer 40 and 100"});
    next();
};
