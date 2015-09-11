/**
 * Created by Jakša Bašić on 11/09/15.
 */
Books = new Meteor.Collection("books");

/*
Session.setDefault('books', [
    {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling"},
    {title: "The Lord of the Rings:The Return of the King", author: "J.R.R.Tolkein"},
    {title: "Go tell it on the Mountain", author: "James Balwin"},
    {title: "War and Peace", author: "Leo Tolstoy"},
    {title: "Children of the Mind", author: "Orson Orson Scott Card"},
    {title: "Mind", author: "Scott"}
]);
*/
Meteor.methods({
    addBook: function (bookData) {
        if(this.userId){
            bookData.userID = this.userId;
            var bookID = Books.insert(bookData);
            return bookID;
        }
    }
});