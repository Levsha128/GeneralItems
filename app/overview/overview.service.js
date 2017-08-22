angular
    .module('myApp.overview')
    .factory('overviewService', function () {
        var items = [
            {
                title: '1111',
                comments: [{
                    author: {
                        name: 'User 1',
                        avatar: 'user1.jpg'
                    },
                    text: 'test comment'
                }, {
                    author: {
                        name: 'User 2',
                        avatar: 'user2.jpg'
                    },
                    text: 'test comment2'
                }]
            },
            {
                title: '222',
                comments: [{
                    author: {
                        name: 'User 1',
                        avatar: 'user1.jpg'
                    },
                    text: 'test comment3'
                }]
            }
        ];
        var selectedItem = null;
        return {
            getItems: function () {
                return items;
            },
            hasItemWithTitle: function (title) {
                return items.some(function (item) {
                    return item.title === title
                });
            },
            addItem: function (item) {
                if (item.title === '' ||
                    this.hasItemWithTitle(items.title)) {
                    return false;
                }
                items.push(item);
                return true;
            },
            deleteItem: function (item) {
                if (this.isSelectedItem(item)) {
                    this.resetSelection();
                }
                var index = items.indexOf(item);
                if (index < 0) {
                    return false;
                }
                items.splice(index, 1);
                return true;
            },
            isSelectedItem: function (item) {
                return item === selectedItem;
            },
            selectItem: function (item) {
                if (this.isSelectedItem(item)) { //toggle selection
                    this.resetSelection();
                } else {
                    selectedItem = item;
                }
            },
            resetSelection: function () {
                selectedItem = null;
            }
        };
    });