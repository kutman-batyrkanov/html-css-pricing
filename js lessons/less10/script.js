let header = document.querySelector('h1');
let article = document.querySelector('article');
let paragraphs = document.querySelectorAll('p:nth-child(even)');

// console.log(header.innerText);
// console.log(header.textContent);
// console.log(article.innerHTML);
// console.log(header.outerHTML);


// for (const paragraph of paragraphs) {
//     if (paragraph.className) {
//        console.log(paragraph.className);
//     }
//     if (paragraph.id) {
//         console.log(paragraph.id);
//     }
// }

let newParagraph = document.createElement('p');
newParagraph.innerText = "This is a brand new paragraph added by JavaScript";
article.append(newParagraph);
// article.prepend(newParagraph):
// article.after(newParagraph);
// article.before(newParagraph);
// article.replaceWith(newParagraph);
newParagraph.className = "example-paragraph";
newParagraph.id = "example-id";
// newParagraph.remove();


let examplelist = ["Apple", "Bananas", "Grapes", "lemon"];
let ul = document.querySelector("ul");
for (const fruit of examplelist) {
    let li = document.createElement("li");
    li.innerText = fruit;
    ul.append(li);
}

let examplelist2 = [
    {name: "Apple" , weight: 20},
    {name: "Bananas" , weight: 20},
    {name: "Bananas" , weight: 20},
    {name: "lemon" , weight: 20},
]

let ul2 = document.querySelector("#example-ul2");
for (const fruit of examplelist2) {
    let li = document.createElement("li");
    li.innerText = fruit.name + " " + fruit.weight;
    ul.append(li);
}

let examplelist3 = {
    "Apple": 30,
    "Bananas": 30,
    "Lemon": 30,
    "Apple": 30,
}


let ul3 = document.querySelector("#example-ul3");
for (const name of examplelist3) {
    let li = document.createElement("li");
    li.innerText = name + " " + examplelist3[name];
    ul.append(li);
}



