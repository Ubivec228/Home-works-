// const form = document.createElement('form');

// const formElements = [
//     {
//         type: 'text'
//     },
//     {
//         type: 'password'
//     }
// ]
// formElements.forEach(function(formElement){
//     const input = document.createElement('input');

//     input.type = formElement.type;

//     form.append(input);

// })

// document.body.append(form)
// ----------------------------------------

// const btns = document.querySelector('button');
// const input = document.querySelectorAll('input');

// function measureMent() { 

//     console.log(input[0].value);
//     console.log(input[1].value);
    
//     console.log();
//     if (input[0].value === input[1].value) { 
//         alert(`Passwords are correct`)
//     }else { 
//         alert(`Passwords are incorrect`)
//     }
// };

// btns.addEventListener('click' , measureMent);
// ====================================================



const input = document.querySelector('input');
const btn = document.querySelector('button');

function show(e) { 
    console.log(e.target.type)
};

input.addEventListener('change', show);

btn.addEventListener('click', function(){

    if (btn.textContent == "Show password") { 
        btn.textContent = "Unshow password"
  
         input.type = 'text'
    } else { btn.textContent = "Show password"
  
    input.type = 'password'}

    


})


















