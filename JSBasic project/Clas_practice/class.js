let geom = {
    name: "Pramougolnik",
    sp: { x: 0, y: 0 },
    ep: { x: 100, y: 200 },
    get geomInfo() { return this.name },
    set geomInfo(name) { this.name = name }
}

let rect = {
    draw() {
        console.log("Pramougolnik : " +
            this.sp.x + "," + this.sp.y + "," + this.ep.y + "," + this.ep.y)
    }
}

rect.__proto__ = geom;
console.log(rect.geomInfo)
rect.geomInfo = "Novruz"
console.log(rect.geomInfo);

for (let prop in rect) {
    if (rect.hasOwnProperty(prop))
        console.log(prop + ":" + rect[prop])
}