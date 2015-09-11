/**
 * Created by Jakša Bašić on 11/09/15.
 */
Meteor.publish('books', function () {
    return Books.find({userID: this.userId});
});