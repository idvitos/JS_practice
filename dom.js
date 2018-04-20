// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.all[2];
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.links[0].className;
// val = document.images;
// val = document.scripts;
// val = document.scripts[1].getAttribute('src');


// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script){
// 	console.log(script.getAttribute('src'));
// });


// console.log(val);


//document.getElementById()
// console.log(document.getElementById('task-title'));


// //Get things from element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');


// //Change styling
// taskTitle.style.background = 'yellow';
// taskTitle.style.color = 'green';
// taskTitle.style.padding = '5px';
// //document.getElementById('task-title').style.display = 'none';


// //Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My tasks';
// taskTitle.innerHTML = '<span style="color:red">Task list</span>';


// //document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';


// //document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// items[0].style.color = 'blue';
// items[3].textContent = 'Vitalka';

// const itemsCollection = document.querySelector('ul').getElementByClassName('li');

////document.getElementByTagName
// let lis = document.getElementsByTagName('li');

// lis[0].style.color = 'blue';
// lis[3].textContent = 'Vitalka';

// //Convert HTML Collection into Array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
// 	console.log(li.className);
// 	li.textContent = `${index}: Hello!`;
// });

// console.log(lis);
// // console.log(lis[0]);


// //document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
// 	item.textContent = `${index}: Hello!`;
// });


// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
// 	li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
// 	liEven[i].style.background = '#f4f4f4'
// }


// console.log(items)


// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// //Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// //Get parent nodes
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = list.childNodes[0].nodeName;

// //Get next siblings
// val = listItem.nextSibling;
// val = listItem.nextSibling.nextSibling;

// //Get previous siblings
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);


// // Create element
// const li = document.createElement('li');

// //Add class
// li.className = 'collection-item';

// //Add id
// li.id = 'new-item';

// //Add attribure
// li.setAttribute('title', 'New Item');

// //Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// //Create new link element
// const link = document.createElement('a');

// //Add classes
// link.className = 'delete-item secondary-content';

// //Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>'

// //Append link into li
// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


//REPLACE ELEMENT

// //Create element
// const newHeading = document.createElement('h2');

// //Add id
// newHeading.id = 'task-title';

// //New text node
// newHeading.appendChild(document.createTextNode('Task list'));

// //Get the old heading
// const oldHeading = document.getElementById('task-title');

// //Parent
// const cardAction = document.querySelector('.card-action');

// //Replace
// cardAction.replaceChild(newHeading, oldHeading);


// //REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list items
// lis[0].remove();

// //Remove child element
// list.removeChild(lis[3]);

// //CLASSES and ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// //Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList.add('test');
// val = link.classList.remove('test');
// val = link;

// //Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.sr=setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link.removeAttribute('title');
// val = link;

// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click',
// 	function(e){
// 		console.log('Hello');

// 		e.preventDefault();
// 	});

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //Click
// clearBtn.addEventListener('click', runEvent);

// //Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// //Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// //Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// //Mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);

// //Mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);

// //Mouseover
// clearBtn.addEventListener('mouseover', runEvent);

// //Mouseout
// clearBtn.addEventListener('mouseout', runEvent);

// //Mousemove
// card.addEventListener('mousemove', runEvent);

// //Event Handler
// function runEvent(e){
// 	console.log(`EVENT TYPE: ${e.type}`);

// 	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// 	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`;
// }


// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// //Submit
// form.addEventListener('submit', runEvent);

// //Key down
// taskInput.addEventListener('keydown', runEvent);

// //Keyup
// taskInput.addEventListener('keyup', runEvent);

// // Keypress
// taskInput.addEventListener('keypress', runEvent);

// // Focus
// taskInput.addEventListener('focus', runEvent);

// // Blur
// taskInput.addEventListener('blur', runEvent);

// // Cut
// taskInput.addEventListener('cut', runEvent);

// // Paste
// taskInput.addEventListener('paste', runEvent);

// // Input
// taskInput.addEventListener('input', runEvent);

// // Change
// select.addEventListener('change', runEvent);

//function runEvent(e){
	// console.log(`EVENT TYPE: ${e.type}`);

	// console.log(e.target.value);

	// heading.innerText = e.target.value;

	// console.log(taskInput.value);

	// e.preventDefault();
//}


// //EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function(){
// 	console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
// 	console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
// 	console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
// 	console.log('col');
// });


//EVENT DELEGATION
// const delItem = document.querySelector('.delete-item');

// delItem,addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
// 	if(e.target.className === 'fa fa-remove'){
// 		console.log('delete item');
// 	}
// }


// //set local storage item
// localStorage.setItem('name', 'John');

// //set session storage item
// sessionStorage.setItem('name', 'John');

// //remove from storage
// localStorage.removeItem('name');

// //get from Storage
// const name = localStorage.getItem('name');
// console.log(name);

// //clear local storage
// localStorage.clear();

// document.querySelector('form').addEventListener('submit', function(e){
// 	const task = document.getElementById('task').value;
	
// 	let tasks;

// 	if(localStorage.getItem('tasks') === null){
// 		tasks = [];
// 	} else{
// 		tasks = JSON.parse(localStorage.getItem('tasks'));
// 	}

// 	tasks.push(task);

// 	localStorage.setItem('task', JSON.stringify(tasks));
	
// 	e.preventDefault();
// });
