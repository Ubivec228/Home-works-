function Task() { 
    this.id = "string";
    this.description = "string";
    this.cost = "number";
    
}

// Rect.prototype.getName = function () {return this.name}

let getters = { 
    get idGet() {return this.id},
    get descGet() {return this.description},
    get costGet() { return this.cost}
}

Task.prototype.__proto__ = getters;

console.log(getters)

// console.log(getters.idGet);
