class Qorshok { 
    constructor(title,author,price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getTitle() { return this.title}
    setTitle(pr) { this.price = pr}
};


let a = new Qorshok("Mymy","Turgenev",112);

a.setTitle(212);
console.log(a.price);
// console.log(a);
console.log(get);