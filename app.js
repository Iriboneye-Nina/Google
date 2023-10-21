// Dom Manipulation



// GetElementById()

//const title = document.getElementById('main-heading');

//console.log(title);


//GetElementByClassName()

//const listItems = document.getElementsByClassName('list-items');

//console.log(listItems);

//getElementsBytagName()

//const listItems = document.getElementsByTagName('li');

//console.log(listItems);

// querySelector()

//const conteiner = document.querySelector('div');

//console.log(conteiner);



//const title = document.querySelector('#main-heading');
//title.style.color = 'red';
//const listItems = document.getElementsByTagName('li');
//console.log(listItems)
//querySelector()

//const container = document.querySelector('div');
//var div1 = document.getElementsById('div1');
//var unicycle = div1.getElementsByclassName('unicycle');
//var paragraphs = document.getElementsByTagName('p')
//----- exercises----------
/*function fullName({firstName, lastName}){
    const fullName = `${firstName} $ {lastName}`;
    return fullName.toUpperCase();
}
console.log(fullName({lastName:'iriboneye' , firstName:'Nina'}));
/*------- exrcises2 string Method-------*/
/*let text = " cloude jordan"
let result = text.length
console.log(result)
console.log(text.toUppercase)
console.log(text.charAt(9))
console.log(text.indexOf("j"))
console.log(text.slice(0.8))
/*----- Array Method------*/
/*let names = [ 'Nina', 'nana','mimi','bebe','kalisa']
console.log(names.length)
console.log(names[names.length-1])
/*-------concat--------*/
//const lastname = ['pepper','onion', 'banana']
/*const number = [0,1,2,3,4]
for(let i=0; i< number.length; i++){
    console.log(number[i]);
} 
console.log(number.length)
/*---------- for each----------
const peape =[
    {name: "Nina", age:20, position:"developer"}
]
/*correction of assignment*/
//const first = document.getElementById('first')
//const second = document.getElementById('second')
//const third = document. getElementById('third')
//const classvalue = third.classlist
//third.classlist.add('first','text');
//third.classlist.remove('first')
//third.className.add('color')
//let contain = first.classList.contains('text')
//let container = first.classList.contains('text')
//if (container){
// console.log('yes the class is there')
//}
//else{
  //  console.log('the class is not there')
//}
//const btn = document.querySelector('#btn');
//const h1 = document.getElementById('main-heading');
//let text = 'English is a key';
//function styleColor(){
    //h1.classList.add('text');
//}
// h1.style.color = 'blue';
//btn.addEventListener('click',style);
// getAttribute();
// setAttribute();
//const first =document.querySelector('.main-heading');
//const idValue = main-heading.getAttribute('id');
//console.log(idValue);
//const youtube = document.getElementById('youtube');
//const showLink = youtube.getAttribute('href');
//console.log(showLink);
/*---------------- this key word example----------
const person = {
    name: "ram",
    age: 22,
    greet: function(){
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person.greet());
/*------------- factory example-----------
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  console.log(person1.getFullName());
  /*-----------------constractor-----------
  function User(first, last) {
    this.firstName = first
    this.lastName = last
  }
  
  
  var user1 = new User("Jon", "Snow")
  console.log(user1)
  var user2 = new User("Ned", "Stark")
  console.log(user2)
  /*------------- other example-----------
  function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
       
      },
    };
  }
  let person1 = createPerson('John', 'Doe');
  let person2 = createPerson('Jane', 'Doe');
  console.log(person1.getFullName());
  console.log(person2.getFullName());
  /*------------------------------
  function outer() {
    let privateVar = 'secret';
    function inner() {
      console.log(`hello there secret is : ${privateVar} `);
    }
    return inner;
    inner();
  }
  // console.log(privateVar);

  
  const value = outer();
  console.log(value);
  value();
  /*--------------- closure example----------
  function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance() {
      console.log(`Hey ${name}, your balance is ${balance}`);
    }
    return showBalance;
  }
  
  newAccount('susan', 500)();
  
  const john = newAccount('john', 300);
  const bob = newAccount('bob', 1000);
  
  john();
  bob();*/
  /*-----------------my eample-------------
  const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(` ${random}`);
}*/
/*---------------- for Each example----------
const peaple =[
  {name :'nina', age :20, position:'developer'},
  {name :'Iriboneye', age :21, position:'designer'},
  {name :'oda', age :21, position:'inspector'}
]
peaple.filter(function(person){
 
console.log(person.name)
})
// addition 2 number, result tuyi
// prepend
// innerText
let div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
document.body.prepend(div);
div.style.color = 'red'*/
const path = require('path');
var pathObj = path.parse(-filename);
console.log(pathObj);