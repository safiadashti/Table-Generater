// for(let i = 1;i<=20; i++){
//     document.writeln(' My Name is Safia Shaukat Ali <br>');
// }
// for(let i = 1;i<=100; i++){
//     document.writeln(i ,') My Name is Safia Shaukat Ali <br>');
// }
// for(let i = 1;i<=200; i++){
//     document.writeln(i ,') My Name is Safia Shaukat Ali <br>');
// }
// for(let i = 1;i=>10; i++){
//     document.writeln(i ,') My Name is Safia Shaukat Ali <br>');
// }

// for(let i=1; i=>100; i++){
//     document.write(i);
// }

// for(let n=100; i<=0; i--){
//     document.write(n);
// }
// let name = prompt('Enter your name:');
// for(let i=1;i<=5;i++){
//     document.write(i,') My name is ', name, "<br>");
// }
// let rollno = prompt('Enter your roll number:');
// for(let i=1;i<=5;i++){
//     document.write(i,') My roll number is ',rollno, "<br>");
// }
// let gender = prompt('Enter your gender:');
// for(let i=1;i<=5;i++){
//     document.write(i,') Male/female ', gender, "<br>");
// }
// let table = prompt('Enter any number for table:');
// for(let i=1; i<=15; i++){
//     document.writeln(table , "X", i , '=', table*i, "<br>")
// }

// let number = prompt(Enter any number for table:);
// let btn = document.getElementById('generate');
// btn.addEventListener('click' ,()=>{
//     let table = Number (document.getElementById('table').value);
//     let range = Number (document.getElementById('range').value);

//     if (isNaN(number) || table === "" || number === null{
//         CSSContainerRule.
//     }

//     for(let i=1; i<=range;i++){
//         document.write(table, "X", i , "=", table*i, "<br>")
//     }
// })

// let number = prompt("Enter any number for table:");
// let container = document.getElementById('table-container');
// // btn.addEventListener('click' ,()=>{
// //     let table = Number (document.getElementById('table').value);
// //     let range = Number (document.getElementById('range').value);

//    /zz
// })

// document.getElementById('generate').addEventListener('click', () => {
//   const num = parseInt(document.getElementById('number').value);
//   const limit = parseInt(document.getElementById('limit').value);
//   const resultDiv = document.getElementById('table-result');

//   resultDiv.innerHTML = '';

//   if (isNaN(num) || isNaN(limit)) {
//     resultDiv.innerHTML = '<p style="color:red;">Please enter valid numbers!</p>';
//     return;
//   }

//   let html = '<table>';
//   for (let i = 1; i <= limit; i++) {
//     html += `
//       <tr>
//         <td>${num} × ${i}</td>
//         <td>=</td>
//         <td>${num * i}</td>
//       </tr>
//     `;
//   }
//   html += '</table>';

//   resultDiv.innerHTML = html;
// });

let btn = document.getElementById('generate');

btn.addEventListener('click' , ()=>{
    let table =  document.getElementById('table').value;
    let range = document.getElementById('range').value;

    for(let i = 1; i<=range; i++){
        document.writeln(table, "X" , i, "=" , table*i, "<br>");
    }
})
