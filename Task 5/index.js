var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.animal = function () {
        return "ini hewan ".concat(this.name, " ");
    };
    return Animal;
}());
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound(name, sound) {
        var _this = _super.call(this, name) || this;
        _this.sound = sound;
        return _this;
    }
    Sound.prototype.makeSound = function () {
        return "".concat(this.name, " suaranya ").concat(this.sound);
    };
    return Sound;
}(Animal));
var giraffeSound = new Sound('Jerapah', 'Meow Meow');
console.log(giraffeSound.makeSound());
var crocodileSound = new Sound('Buaya', 'Kalau aku ngechat kamu ada yang marah ga ?');
console.log(crocodileSound.makeSound());
