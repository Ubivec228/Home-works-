
function Task(description,number) { 
    constructor() { 
        this.#id = "id" +" : "+ Math.random().toString(16).slice(2);
        this.#description = description;
        this.#cost = number
    }
    
    // if (new.target) {
    //     throw new Error('Nelza sozdavat ekzemplar klassa Task!');
    // }
}
Task.prototype.getId = function() { return this.#id}
Task.prototype.getDescription = function() {return this.#description};
Task.prototype.getCost = function() {return this.#cost}


let task1 = new Task()
console.log(task1.getId())