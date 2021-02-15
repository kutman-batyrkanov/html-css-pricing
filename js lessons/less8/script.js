function dw(text){
    document.write(text + "<br>");
};


// let object1 = new Object();
// let object2 = {};

// let user = {
//     firstName: "Elon",
//     lastName: "Musk" ,
//     "lives in US": true,
//     personalData: {
//         favouriteToy: "Tesla",
//         usesTwitter: true,
//         "lives in US": true,
//         playGolf: true, 
//     },
//     sayHello: function() {
//         dw("Hello! My name is " + this.firstName);
//     },
    // sayHello() {
    //     dw("Hello");
    // }
// };

// dw(user.firstName + "" + user.lastName);
// dw(user.personalData.favouriteToy);
// dw(user.personalData["lives in US"]);
// dw(user.personalData["favouriteToy"]);
// dw(user["personalData"]["favouriteToy"]);
// user.sayHello();
// let what = prompt("What do you wanna know bout Elon?");
// dw(user.personalData[what]);


// Добавление и изменение свойств в объекте

// user.age = 45;
// user.personalData.occupation = "CED of everything";
// user.age = 49;
// user.sayBye = function() {
//     dw("Hello")
// }


// Проверка свойства на существование

// if ("wealh" in user) {
//     dw("Wealth: " + user.wealth);
// }
// else {
//     dw("Wealth: unknown");
// }

// Удаление свойств  объекта
// delete user.personalData["lives in US"];


// Цикл по объекту
// for (key in user) {
//     if (tipeof user[key] != "object") {
//         dw(key + ": " + user[key]);
//     } 
// }



//  Связь объектов и переменных

// let example1 = { text: "Hello"};
// let example2 = example1;
// let example3 = example2;
// example1.text = "Bye";
// dw(example2.text);



let user = {
    firstName: "Kutman",
    lastName: "Batyrkanov",
    "lives in Kyrguzstan": true,
    personalData: {
        favouriteHobby: "play basketball",
        instagramAccaunt: true,
        "lives in Kyrgyzstan": true,
        playGuitar: true,
    },
    sayHello: function () {
        dw("Hello my name is " + this.firstName);
    }
}