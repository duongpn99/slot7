angular.module("app",[]);

angular.module("app").controller("MainController",function(){
    var vm = this;
    vm.title = "Learn Angular by example";
    vm.searchInput = "";
    vm.shows = [
        {
            title: "Đôi mắt có lửa",
            author: "Nguyễn Hùng Sơn",
            favorite: true
        },
        {
            title: "Life of Pi",
            author: "Davan",
            favorite: false
        },
        {
            title: "Learn Angular by example",
            author: "FPT-Aptech",
            favorite: true
        },
        {
            title: "Họ nhà trai",
            author: "Nguyễn Anh Tú",
            favorite: false
        },
        {
            title: "Học code today",
            author: "fpt",
            favorite: true
        }

    ];
    vm.orders= [
        {
            id: 1,
            title: "Anthor Ascending",
            key: "author",
            reverse: false
        },
        {
            id: 2,
            title: "Author Descending",
            key: "author",
            reverse: true
        },
        {
            id: 3,
            title: "Title Ascending",
            key: "title",
            reverse: false
        },
        {
            id: 4,
            title: "Title Descending", 
            key: "title",
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function(){
        vm.shows.push(vm.new);
        vm.new = {};
    };
});