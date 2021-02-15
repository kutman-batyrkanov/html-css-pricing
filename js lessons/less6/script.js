// первый вариант

// let i = 0;
// while (i >= 1) {
//         document.write(i + "<br>");
//     i--;
// } 

// второй вариант

// let i2 = 0;
// do {
//     document.write(i2 + "<br>");
//     i2--;
// } while (i2 >= 1);


//  третий вариан 

// for (let i3 = 5; i3 >= 1; i3--) {
//     for (let i4 = 5; i4 >= 1; i4--){
//         document.write(i3 + " * " + i4 + " = " + i3 * i4 + " ||||| ");    
//     }
//     document.write("<br>");
//  }


// let i = 1;
// while (i <= 20) {
//     if (i % 2 == 1) {
//         document.write(i + "<br>");
//     } 
//     i++;
// }


// let x = 1;
// while (x <= 20) {
//     x++;
//     if (x % 2 == 1) {
//         continue;
//     } 
//     document.write(x + "<br>");
// }

let answer , number;
while (true) {
     answer = prompt("Please input number below 100");
     number = parseInt(answer);
    if (100 > number) {
        console.log("Number is" + number);
        break;
    }
}