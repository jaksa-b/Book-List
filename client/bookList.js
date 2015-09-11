/**
 * Created by Jakša Bašić on 11/09/15.
 */

Template.booklist.helpers({
    books: function () {
        return Books.find();
    }
});