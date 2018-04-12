//alert('hello, everebody!');



// var name = 'Vitali';
// if (name == 'Vitalii'){
// 	console.log(name);
// }
// else {
// 	console.log('name is different');
// };



// const person = {
// 	firstName : 'Vitalii',
// 	lastName : 'Popovych',
// 	age : 29,
// };
// console.log(person.lastName);



// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);



// //String
// const name = 'Mike';

// //Number
// const age = 29;

// console.log(typeof age);



//REFERENCE TYPES - Objects
//Array
// const hobbies = ['movies', 'ski'];
// dfydrf = (5).toString();

// console.log(typeof dfydrf);
// let val = Number('4');
// console.log(val.toFixed(1));

// const num1 = 100;
// const num2 = 200;
// let val = num1 + num2;


// //Math Object

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.5);
// val = Math.ceil(2.3);
// val = Math.floor(2.9);
// val = Math.sqrt(144);
// val = Math.abs(-3);
// val = Math.pow(8, 3);
// val = Math.min(22, 14, 1, 19, 4, 99, -2);
// val = Math.max(22, 14, 1, 19, 4, 99);
// val = Math.random();
// val = Math.random() * 20;
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// const firstName = "Vitalii";
// const lastName = "Popovych";
// const str = "Lorem ipsum dolor sit amet, ne vel malis facilis vituperata, vel eros oratio no";

// //Concatenation
// var user = firstName + ' ' + lastName;

// //Escaping
// let val
// val = 'Thats\'s awesome, I can\'t wait';

// //concat()
// val = firstName.concat(' ', lastName);
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // indexOf()
// val = firstName.indexOf('t');

// // charAt()
// val = firstName.charAt('0');

// //Get last character
// val = firstName.charAt(firstName.length - 1);

// //substring()
// val = firstName.substring(0, 4);

// //slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //split()
// val = str.split(' ');

// //replace()
// val = str.replace('ipsum', 'PAM-PARAM');

// //includes()
// val = str.includes('hello');

// console.log(user);
// console.log(val);

// const name = 'Vitalii';
// const age = 29;
// const job = 'QA Engineer';
// const city = 'Kyiv';
// let html

// // //Without template string (es5)
// // html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// function hello(){
// 	return 'hello';
// }

// //With template string
// html = `
// 	<ul>
// 		<li>Name: ${name}</li>
// 		<li>Age: ${age}</li>
// 		<li>Job: ${job}</li>
// 		<li>City: ${city}</li>
// 		<li>${2 + 2}</li>
// 		<li>${hello()}</li>
// 		<li>${age > 29 ? 'Over > 29' : 'Under 29'}</li>
// 	</ul>
// `;
// document.body.innerHTML = html


// // Create arrays
// const numbers = [2, 3, 7, 54, 67, 14, 30, 1, 4];
// const numbers2  = new Array(2, 6, 43, 213, 34);
// const fruits = ['apple', 'pinaple', 'banana', 'orange'];
// const mixed = [23, 'Kolya', true , undefined, null, {a:1, b:1}, new Date()];

// //Get Array length
// val = mixed.length

// //Check if is array
// val = Array.isArray(mixed);

// //Inser into array
// numbers[2] = 100;

// //Find index of value
// val = numbers.indexOf(54);

// //Get single value
//  val = numbers[3];

// //Add to the end
// numbers.push(250);

// //Add to the front
// numbers.unshift(12);

// //Take off from end
// numbers.pop();

// //Take off from the front
// numbers.shift();

// //Take off set of elements
// numbers.splice(2, 3);

// //Reverse
// numbers.reverse();

//Concatenate array
// val = numbers.concat(numbers2);

// //Sorting arrays
// val = fruits.sort();

// //Use the "compare function"
// val = numbers.sort(function(x, y){
// 	return x - y;
// });

// //Find
// function over50(num){
// 	return num > 50;
// }
// val = numbers.find(over50);


// console.log(numbers);
// console.log(val);

// //Date and Time
// let val;
// const today = new Date();
// val = today.getMonth();
// val = today.getDate();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// console.log(val);

// const id = 100;
// if(id == 100){
// 	console.log('yep');
// } else {
// 	console.log('wrong');
// }

// if(typeof id !== 'undefined'){
// 	console.log(`The id is ${id}`);
// } else {
// 	console.log('No id');
// }

// const color = 'red';
// switch(color){
// 	case 'red':
// 	 console.log('Color is red');
// 	 break;
// 	case 'blue':
// 	 console.log('Color is blue'); 
// 	 break;
// 	defaul:
// 	 console.log('Color is not red or blue');
// 	 break;
// }

// let day;

// switch(new Date().getDay()){
// 	case 0:
// 	 day = 'Sunday';
// 	 break;
// 	case 1:
// 	 day = 'Fu..k! Only Monday';
// 	 break;
// 	case 2:
// 	 day = 'Tuesday';
// 	 break;
// 	case 3:
// 	 day = 'Wednesday';
// 	 break;
// 	case 4:
// 	 day = 'Thursday';
// 	 break;
// 	case 5:
// 	 day = 'Friday';
// 	 break;
// 	case 6:
// 	 day = 'Weeee it\'s Saturday!!!';
// 	 break;
// }
// console.log(day);







//WINDOW Methods / Objects / Properties

//Alert
//window.alert('hello');
//alert('hi');

//Prompt
// const input = prompt()
// alert(input);
//prompt('how old are you?');

//Confirm
// if(confirm('a u sure?')){
// 	console.log('YES');
// } else {
// 	console.log('NO');
// }

//Outer height and width
// let val;

// val = window.outerHeight;
// val = window.outerWidth;

// //Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// //Scroll points
// val = window.scrollX;
// val = window.scrollY;

//Location Object
// val = window.location;
// val = window.location.href;
// val = window.location.hostname;

//Redirect
//window.location.href = 'http://google.com';

//Reload page
// window.location.reload();

//History Object
// window.history.go(-3);
// val = window.history.length;

//NAvigator Object
// val = window.navigator;
// val = window.navigator.platform;
// val = window.navigator.userAgent;
// val = window.navigator.vendor;

// console.log(val);



// //Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// // function test() {
// // 	var a = 4;
// // 	let b = 5;
// // 	const c = 6;
// // 	console.log('Function Scope:', a, b, c);
// // }
// // test();

// for(let a = 0; a < 10; a++){
// 	console.log(`Loop: ${a}`);
// }

// console.log('Global Scope:', a, b, c);


