


// let prop = { 
//     sp:{x:0,y:0},
//     ep: {x:100,y:200},
//     get cords () { 
//         return [this.sp.x,this.sp.y,this.ep.x,this.ep.y]
//     },
//     set cords(cords) { 
//         this.sp.x = cords[0],
//         this.sp.y = cords[1],
//         this.ep.x = cords[2],
//         this.ep.y = cords[3]
//     }
// };

// let hfa = {
//     name: "Mammad",
//     surname: "Mammadov",
//     age: 26
// }

// let rect = Object.create(prop ,{
//     name: {value: "Novruz", writable: true},
//     draw: {value: function() { 
//         consoler.log("Cheto pishem")
//     }}
    
// });



// console.log(rect);





// Rect.prototype.__proto__ = prop;
// Rect.prototype.getName = function() { return this.name};
// Rect.prototype.setName = function(name) {this.name = name}

// prop.cords = [7,8,9,4]
// // Rect.prototype = "Hello";
// let r = new Rect();
// let r2 = new r.constructor()
// console.log(r)
// console.log(r2)