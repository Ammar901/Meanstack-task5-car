var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Toyota = /** @class */ (function () {
    function Toyota() {
        this.make = "**Toyota**";
    }
    return Toyota;
}());
var corolla = /** @class */ (function (_super) {
    __extends(corolla, _super);
    function corolla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    corolla.prototype.setCorollavalues = function () {
        this.color = "Blue";
        this.model = "Corolla";
        this.productID = 25334;
        this.licensePlate = "ASD 256";
        this.milage = 15069;
        this.engine = 123456789;
    };
    corolla.prototype.getCorollavalues = function () {
        console.log("Color of car : " + this.color);
        console.log("model of car : " + this.model);
        console.log("Product ID of car" + this.productID);
        console.log("Mileage of car" + this.milage);
        console.log("Engine number of car" + this.engine);
        console.log("Number Plate of car" + this.licensePlate);
    };
    return corolla;
}(Toyota));
var prius = /** @class */ (function (_super) {
    __extends(prius, _super);
    function prius() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    prius.prototype.setPriusvalues = function () {
        this.color = "Red";
        this.model = "Prius";
        this.productID = 12547;
        this.licensePlate = "AGH 000";
        this.milage = 1300;
        this.engine = 654123789;
    };
    prius.prototype.getPriusvalues = function () {
        console.log("Color of car : " + this.color);
        console.log("model of car : " + this.model);
        console.log("Product ID of car" + this.productID);
        console.log("Mileage of car" + this.milage);
        console.log("Engine number of car" + this.engine);
        console.log("Number Plate of car" + this.licensePlate);
    };
    return prius;
}(Toyota));
var Suzuki = /** @class */ (function () {
    function Suzuki() {
        this.make = "***Suzuki***";
    }
    return Suzuki;
}());
var Mehran = /** @class */ (function (_super) {
    __extends(Mehran, _super);
    function Mehran() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mehran.prototype.setMehranvalues = function () {
        this.color = "Grey";
        this.model = "Mehran";
        this.productID = 55648;
        this.licensePlate = "AFS 101";
        this.milage = 1560;
        this.engine = 658749321;
    };
    Mehran.prototype.getMehranvalues = function () {
        console.log("Color of car : " + this.color);
        console.log("model of car : " + this.model);
        console.log("Product ID of car" + this.productID);
        console.log("Mileage of car" + this.milage);
        console.log("Engine number of car" + this.engine);
        console.log("Number Plate of car" + this.licensePlate);
    };
    return Mehran;
}(Suzuki));
var Bolan = /** @class */ (function (_super) {
    __extends(Bolan, _super);
    function Bolan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bolan.prototype.setBolanvalues = function () {
        this.color = "White";
        this.model = "Bolan";
        this.productID = 89547;
        this.licensePlate = "ABD 420";
        this.milage = 85420;
        this.engine = 654123789;
    };
    Bolan.prototype.getBolanvalues = function () {
        console.log("Color of car : " + this.color);
        console.log("model of car : " + this.model);
        console.log("Product ID of car" + this.productID);
        console.log("Mileage of car" + this.milage);
        console.log("Engine number of car" + this.engine);
        console.log("Number Plate of car" + this.licensePlate);
    };
    return Bolan;
}(Suzuki));
var b = new corolla();
var c = new prius();
var d = new Mehran();
var e = new Bolan();
b.setCorollavalues();
c.setPriusvalues();
d.setMehranvalues();
e.setBolanvalues();
alert("Open console");
console.log("**********  Cars ************ \n\n");
b.getCorollavalues();
console.log("********************** \n\n");
c.getPriusvalues();
console.log("******************** \n\n");
d.getMehranvalues();
console.log("******************** \n\n");
e.getBolanvalues();
