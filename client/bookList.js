/**
 * Created by Jakša Bašić on 11/09/15.
 */

Template.bookList.helpers({
    books: function () {
        return Books.find();
    }
});
Template.bookList.events({
    "submit .add-book": function(event) {
        event.preventDefault(); // this prevents built-in form submission
        Meteor.call('addBook', {title: event.target.title.value, author: event.target.author.value});
        event.target.title.value = '';
        event.target.author.value = '';
    }
});