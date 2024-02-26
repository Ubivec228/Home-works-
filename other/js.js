const div = document.createElement("div")
function createDiv(text) {
    const div = document.createElement('div');

    div.textContent = text;

    return div;
}

for (let i = 0;i<10;i++) {
    if (i%2==0){
        document.body.append(createDiv(`Created div ${i}`));

     }
    document.body.append(createDiv(`Created div ${i}`)); 
    document.body.append(createDiv(`Created div ${i}`));
   document.get
}
// document.body.append(createDiv('Created div'));