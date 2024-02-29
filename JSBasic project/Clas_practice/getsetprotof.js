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

// function Rect() {
//     this.name = "Pramougolnik";
//     this.draw = function () {
//         console.log("Risovaniye figuri : " + this.name);
//     };
//     this.__proto__ = prop;
// }

let rect = Object.create ( prop, {
    name: {value: "pramogugolnik"},
    draw: {value:  function () {
        console.log ("Figura : " + rect.name)
    }}
})

rect.draw();
console.log(rect.name);
Object.setPrototypeOf(rect,prop)
console.log(Object.getPrototypeOf(rect) === prop);
console.log(rect.coords);

