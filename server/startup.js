/**
 * Created by Jakša Bašić on 11/09/15.
 */
Meteor.startup(function () {
    if(!Books.findOne()){
        Books.insert({title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling"});
        Books.insert({title: "The Lord of the Rings:The Return of the King", author: "J.R.R.Tolkein"});
        Books.insert({title: "Go tell it on the Mountain", author: "James Balwin"});
        Books.insert({title: "War and Peace", author: "Leo Tolstoy"});
        Books.insert({title: "Children of the Mind", author: "Orson Orson Scott Card"});
        Books.insert({title: "Mind", author: "Scott"});
    }
});
