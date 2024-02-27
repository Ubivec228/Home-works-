
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
    this.x = prop;
}

// Rect.prototype.__proto__ = prop;
// Rect.prototype.getName = function () {return this.name}
// Rect.prototype.setName = function (name) {this.name = name}

// Rect.prototype = prop;
let r = new Rect();

// console.log(r.__proto__ === Rect.prototype)
// console.log(Rect.prototype)
// console.log(r);
r.prototype = "hello";

// r.draw();

for (let p in r) {
    console.log(p + ': ' + r[p]);

    if (p === 'x') {
        for (const key in r[p]) {
            console.log('AAAAAAA', r[p][key]);
        }
    }
}



// const x = {
//     a: 5,
//     prototype: {
//         e: 8,
//         o: 5,
//         p: 8,
//         d: 90,
//         q: 1,
//         w: 2,
//         e: 3,
//         r: 4,
//         t: 5,
//         j: {
//             k: 8,
//             m: 98,
//             a: {
//                 k: 67,
//                 u: 67
//             }
//         }
//     },
//     __proto__: {
//         b: 6,
//         __proto__: {
//             c: 7
//         }
//     }
// }


// for (const key in x) {
//     console.log(key, x[key]);
// }