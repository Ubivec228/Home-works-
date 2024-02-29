class Prop {
    constructor(width,color) { 
        this.width = width;
        this.color = color;
    }
}

class Line extends Prop { 
    constructor(sp,ep,width,color) { 
        super(width,color)
        this.ep = ep;
        this.sp = sp;
        // this.width= width;
        // this.color = color;
    }
    draw() { 
        console.log("Liniya: "+this.sp.x+","+ this.sp.y+","+ this.ep.x+","+ this.ep.y)
    }
}

let l1 = new Line ({x:0,y:0},{x:0,y:0},1,"red")
console.log(l1);

// class Book { 
//     constructor(title,author,price) { 
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
//     getTitle() {return this.title}
//     setPrice(pr) {this.price = pr}
// }

// let book1 = new Book("mumu", "turgenev", 122);
// book1.setPrice(787)
// console.log(book1.getTitle());
// console.log(book1)


// function Book(title,author,price) { 
//         this.title = title;
//         this.author = author;
//         this.price = price;
// }
// Book.prototype.getTitle = function() {return this.title}
// Book.prototype.setPrice = function(pr) {this.price = pr}

// let book1 = new Book("mumu", "turgenev", 122);
// console.log(book1.getTitle())
// console.log(book1);

// Sozdaniye aktivnogo klassa

// function createFruit(name, price) { 
//     return class { 
//         constructor() { 
//             this.name = name
//             this.price = price
//         };
//         showInfo() {console.log(this.name+" , "+ this.price)}
//     }

// }

// let f1 = createFruit("Apple", 22)
// let apple = new f1();
// apple.showInfo()
