
let prop = {
    sp: { x: 0, y: 0 },
    ep: { x: 100, y: 200 },
    get coords() {
        return [this.sp.x, this.sp.y, this.ep.x, this.ep.y]
    },
    set coords(coords) {
        this.sp.x = cords[0]; this.sp.y = cords[1];
        this.ep.x = cords[2]; this.ep.y = cords[3];
    }
};

function Rect() {
    this.name = "Pramougolnik";
    this.draw = function () {
        console.log("Risovaniye figuri : " + this.name);
    };
    // this.__proto__ = prop;
}

Rect.prototype.__proto__ = prop;
Rect.prototype.getName = function () {return this.name}
Rect.prototype.setName = function (name) {this.name = name}

// Rect.prototype = prop;
let r = new Rect();

// console.log(Rect.prototype)
console.log(r);
// r.prototype = "hello";

// r.draw();

// for (let p in r)
//     console.log(p + ': ' + r[p]);


