var welcome = 'hello world';
console.log(welcome);
//注释
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('天狗');
        return 'haha';
    };
    return Site;
}());
