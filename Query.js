let Query = {
    InsertBook : "INSERT INTO Books SET ?",
    ShowBook : "SELECT * FROM Books",
    Search : "SELECT * FROM Books WHERE id = ?",
    DeleteBook : "DELETE FROM Books WHERE id = ?",
    UpdateBook : "UPDATE Books SET ? WHERE id = "
};
module.exports= Query;
