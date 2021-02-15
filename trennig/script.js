// function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHello = function() {
//         document.write("Кандайсын " + " " + this.firstName + " " + this.lastName + "<br>");
//     }
// };

// let user = new User("Elon", "Musk");
// let user1 = new User("kutman", "Batyrkanov");
// let user2= new User("ermek", "Tashatnbekov");
// let user3= new User("erjan", "Musk");

// user.sayHello();
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// function Apple(name, weight = 0) {
//     this.name = name;
//     this.weight = weight;

//     this[Symbol.toPrimitive] = function(hint) {
//         switch (hint) {
//             default:
//                 // case 'string': return this.name + "apple" + "<br>";
//                 case 'number': return this.weight;
//         }
//     }

//     // this.toString = function() {
//     //     return this.name
//     // }
//     // this.valueOf = function() {
//     //     return this.weight
//     // }
// }

// let apple1 = new Apple("aport", 150);
// let apple2 = new Apple("nakivka", 100);
// let apple3 = new Apple("cherry", 50);
// let apple4 = new Apple("cherniy prince", 100);



// document.write(apple1)




for (let i = 1; i < 10; i++) {
    for (let a = 1; a < 10; a++) {
        document.write(i + "*" + a + "=" + a * i + "<br>");
    }
}