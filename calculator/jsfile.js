// let whole_equation = 0;
// let counter = 1;
// let operator_comes = 0;
// let final_ans;

// const buttons = document.querySelectorAll(".btn");
// const screen_text = document.querySelector('.screen-text');


// let prev_operation;
// buttons.forEach(btn => {
    
//     btn.addEventListener("click", ()=>{
        
//         if(counter == 1)
//         {
//             whole_equation = btn.innerText;
//             counter++;
//         }
//         else
//         {
//             whole_equation += btn.innerText;
//         }
//         screen_text.innerText = whole_equation;
//     })
    
// });


// const clear = document.querySelector(".clear-btn");
// clear.addEventListener("click", ()=>{
//     whole_equation = 0;
//     counter = 1;
//     final_ans = 0;
//     screen_text.innerText = 0;
// })

// // 5+2*6*8

// const ans = document.querySelector(".ans");

// ans.addEventListener("click", ()=>{
//     let first_operand;
//     let second_operand;

//     // for multiplication
//     for(let i = 0; i<whole_equation.length; i++)
//     {
//         // console.log("hi");
//         if(whole_equation[i] == '*')
//         {
//             let j = i-1;
//             while(j != -1 || whole_equation[j] == '+' || whole_equation[j] == '-')
//             {
//                 j--;
//             }
//             first_operand = +whole_equation.substring(j++, i-1);
//             console.log(first_operand);
//         }

//     }

// })






// =============== chat gpt code ===============
document.addEventListener("DOMContentLoaded", function() {
    const screenText = document.querySelector('.screen-text');
    let currentExpression = "";

    // Function to append text to the screen
    function appendToScreen(value) {
        currentExpression += value;
        screenText.textContent = currentExpression;
    }

    // Function to clear the screen
    function clearScreen() {
        currentExpression = "";
        screenText.textContent = "0";
    }

    // Function to evaluate the expression and display result
    function calculate() {
        try {
            const result = eval(currentExpression);
            screenText.textContent = result;
            currentExpression = result.toString(); // Allow further operations with the result
        } catch (error) {
            screenText.textContent = "Error";
        }
    }

    // Adding event listeners to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const buttonText = btn.textContent;
            appendToScreen(buttonText);
        });
    });

    const clearBtn = document.querySelector(".clear-btn");
    clearBtn.addEventListener("click", clearScreen);

    const ansBtn = document.querySelector(".ans");
    ansBtn.addEventListener("click", calculate);
});



