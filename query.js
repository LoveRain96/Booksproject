let Query = {
    InsertBook : "INSERT IGNORE Books SET ? ,isDelete= 0 ",
    ShowBook : "SELECT * FROM Books WHERE isDelete ='0'",
    Search : "SELECT * FROM Books WHERE ?",
    SearchOne : "SELECT * FROM Books WHERE id = ? and isDelete ='0' limit 1 ",
    DeleteBook : "DELETE FROM Books WHERE id =  ",
    SoftDelete : "UPDATE Books SET isDelete = 1 WHERE id = ?",
    UpdateBook : "UPDATE Books SET ? WHERE id = ",
    RestoreBook : "UPDATE Books SET isDelete = 0 WHERE isDelete = 1",
    ShowSoftDelete : "SELECT * FROM Books WHERE isDelete = 1"
};

module.exports= Query;