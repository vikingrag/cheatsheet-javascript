// ========переменные ======

// Типы переменных
// let -переменная
// const - константа

// Старый стандарт ES5
// var - Переменная

// let - может менять знаечение во время работы 
// let usrName = 'Mark';
// console.log(usrName)

// usrName = 'Egor'
// console.log(usrName)

// const - константа не может менять зхначение
// const yearOfBirth = 1985;

// var -старый формат обьявления переменной
// в отличии от let и const имеет функциональную облсать видимости, а не блочную
// не рекомендуется к использованию, может менять значение

// ==========функции =======
// function sum() {
// 	var userName = 'Yuri'
// console.log(userName)

// }
// sum();

// console.log(userName);

// =============типы данных
// let userName = 'Mark'; // строка

// let number = 37; // число

// let isMarried = true;  логические значение true/false


// ==============динамическая типизация
// let someVarible = ' Some varible';
// someVarible = 50;
// someVarible = true;

// значение null 
// "ничего", "пусто", или "значение неизвестно".
// let age = 32;
// age = null;

// значение undefined
// Означает, что "значение не было присвоено"
// Если переменная обьявлена, но ей не присвоено никакого значение,
// то ее значением будет undefined
// let userName; // undefined
// console.log(userName);

// let someName = 'James';
// someName = undefined; //так не делают
// someName = noll; // делают так

// ============= оператор typeof
// const someName = true;
// console.log(typeof someName);

// BigInt позволяет создавать большие числа

// Symbol уникальные примитивные значение
// позволяет добавлять свойство к обьекту с уверенностью, 
// что он не перезапишет никакое другое свойство. 

// =============Условия

/* 
if(условие) {
	 код который будет выполнен если условие верно
} else {
	 код который будет выполнен если условие не верно
}  
*/

// const time = 19;

// if (time < 12) {
// 	console.log('Dobroe utro');
	
// } else if (time >= 12 && time <18 ) {
// 	console.log('Dobru den');
// } else {
// 	console.log('Dobru vechor');
// }

/* 
Логические операторы 
&& - логическое И
||- логическое ИЛИ
!true - Логическое НЕ
*/

// ============ Тернарные операторы

// (условие) ? (условие верно) : (условие не верно);

// if (10 < 12) {
// 	console.log('Uslovie verno');
// } else {
// 	console.log('uslovie ne verno');
	
// }

// 20 < 12 ? console.log('uslovie verno') : console.log('uslovie ne verno');

// let greeting;
// let time = 12;

// if (time < 12) {
// 	greeting = 'Ytro'	
// } else {
// 	greeting = 'Den'
// }

// console.log(greeting);

// let time = 10;
// let greeting = time < 12 ? 'Ytro' : 'den' ;
// console.log(greeting);
 

// =================== Конкотенация строк и шаблонные строки

// let greeting = 'Привет марк! ';
// let howAreYou = 'Как твои дела?';
// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// конкотенация "строка" + "строка"

// const userName = 'марк';
// console.log('Привет,  '  + userName + '! Как твои дела');

// Шаблонные строки

// console.log(`Привет, ${userName}! Как твои дела`);

// Функции
// DRY - Don`t repeat yourself

// console.log('Привет дорогой пользователь!');

//  function sayHi() {
// 	console.log('Привет уважаемый пользователь!');

//  }
//  sayHi();

// Function declaration можем использовать функци. до того, 
// как она была описана в коде, выглядит короче и лаконичнее,
// можем описать работу программы, а дальше описать функции, 
//смотреть, что в функции у нас написано
// function sayHi() {
// 	alert('Privet');
// }

// let name = 'bob';
// console.log(name);


// Function expression 
// const sayHi = function () {
// 	console.log('Privet');
// }
// sayHi();


// ================Параметры и аргументы для функции

// const userName = 'Mark';
// console.log(`Privet,  ${userName}! Kak tvoi dela`);

// function sayHi(name) {
// 	console.log(`Privet, ${name}! Kak tvoi dela`);
	
// }
// sayHi('Mark');
// sayHi('dwss');
// sayHi('dckfj');
// sayHi('fkjghh');

// ========Return

// function summ (a, b) {
// 	const result = a + b;
// 	return result;
	
// }
// let res = summ(10, 15);
// console.log(res);

// ============Функция как аргумент

// function summ (a, b) {
// 	return a + b;
// }
// function diff (a, b) {
// 	return a - b;
// }


// function doSommthing(func){
// 	let x = 10;
// 	let y = 15;
// 	let result = func(x, y);
// 	console.log(result);
	

// }
// doSommthing(summ);
// doSommthing(diff);

// --------------Самовызывающаяся функция IIFA

// (function  () {
// 	console.log('Привет дорогой пользователь');

// })();

// let res = (function  (a, b) {
// 	return a + b;	
// })(10, 15);
// console.log(res);

// -----стрелочные функции 
// function sayHi(name) {
// 	console.log(`привет,  ${name}! как твои дела?`);

// }
// sayHi('Mark');
// const SayHi2 = (name) => {
// 	console.log(`привет,  ${name}! как твои дела?`);

// }
// SayHi2('Mark');

// sayHi('Mark');
// const SayHi2 = (name) => console.log(`привет,  ${name}! как твои дела?`);

// SayHi2('Mark');

// function summ (a, b) {
// 	const result = a + b;
// }

// const summ = (a, b) => a + b;

// const res = summ(10, 30);
// console.log(res);


// ---------Массивы  это структуры данных 

// const autoBrand1 = 'Audi';
// const autoBrand2 = 'BMW';
// const autoBrand3 = 'Maxda';
// const autoBrand4 = 'Toyota';

// const autoBrands = ['Audi', 'BMW', 'Maxda', 'Toyota'];
// console.log(autoBrands);
// console.log(autoBrands[0]);
// console.log(autoBrands.length); //длинна мвссиваб колличестко элементов


// -------Методы массивов

/*
arr.push(items) - Добавить элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива
arr.unshift(...items) - Добавить элемент из начало массива
arr.splice([start]), ([deliteCount, newElement]) - Удалить элемент из начала массива
*/

// const autoBrands = ['Audi', 'BMW', 'Maxda', 'Toyota'];
// console.log(autoBrands);

// autoBrands.push('Nissan');
// console.log(autoBrands);

// autoBrands.slice(2, 2);
// console.log(autoBrands);


// -----Цыклы
 
// console.log('Start');


// for (let i = 0; i < 5; i++ ) {
// 	console.log(i);
	
// }
// console.log('Finish');


// -----Обход массива циклом for (of)

// const autoBrands = ['Audi', 'BMW', 'Maxda', 'Toyota'];

// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);

// for (i = 0; i < autoBrands.length; i++){
// console.log(autoBrands[i]);
// }

// const autoBrands = ['Audi', 'BMW', 'Maxda', 'Toyota'];

// for (let brend of autoBrands) {
// 	console.log(brend);
	
// }

// === Обход массива методом forEach()

// const autoBrands = ['Audi', 'BMW', 'Maxda', 'Toyota'];

// autoBrands.forEach(function(brand, i){
// 	console.log(`${brand} => ${i}`);
	
// })

// autoBrands.forEach(printBrand);

// function printBrand (brand, i) {
// 	console.log(`${brand} => ${i}`);

// }
// autoBrands.forEach((brand, i) =>  console.log(`${brand} => ${i}`));

// ---------обьекты

// let userName = 'Marc'
// let age = 30
// let isMerried = false

// const person = {
// 	userName: 'Marc',
// 	age: 30,
// 	isMarried: false,
// }

// console.log(person);
// console.log(person.userName);

// person.profession = 'JA developer'
// console.log(person);

// delete person.age
// console.log(person);

//-----------Метлды в обьектах

// const person = {
//  	userName: 'Marc',
//  	age: 30,
// 	isMarried: false,
// 	sayHi: function(name) {
// 		console.log(`Privet, ${name}!`);
		
// 	}
// }
	
// person.sayHi('Yuri')

//--------Ключевое слово this

// const person = {
// 	userName: 'Marc',
// 	age: 30,
//   isMarried: false,
//   sayHi: function(name) {
// 	console.log(this);
	
// 	  console.log(`Privet, ${name}! Menie zovyt ${this.userName}.`);
	  
//   }
// }
  
// person.sayHi('Yuri')

// ======== Обьекты обход циклом for in (не путать с for of)
// В отличии от for ...of - for .. in может обходить неитерируемые обьекты
// и возвращать ключи

// const person = {
// 	userName: 'Marc',
// 	age: 30,
//   isMarried: false,
//   sayHi: function(yourname) {
// 	  console.log(`Privet, ${yourname}! Menie zovyt ${this.userName}.`
// 	  );
	  
//   },
// };
  
// for (let key in person) {
// 	console.log(key, ':', person[key]);
// }

//=====нюансы const и изминения обьекта и массива

// const person = {
// 		userName: 'Marc',
// 		age: 30,
// 	  isMarried: false,
// }

// person.proff = 'Designer'

//=========ошибка! переопределение ссылки на новый обьект

// person = {
// 	userName: 'Nik'
// }

//==== Классы. Конструкторы обьектов

// Представим себе ситуацию, когда нам нужно описать несколько обьектов

// const person1 = {
// 	userName: 'Marc',
// 	age: 30,
//   isMarried: false,
//   sayHi: function() {
// 	  console.log(`Privet, ${yourName}! Menie zovyt ${userName}.`
// 	  );
	  
//   },
// };

// const person2 = {
// 	userName: 'Pavel',
// 	age: 28,
//   isMarried: true,
//   sayHi: function() {
// 	  console.log(`Privet, ${yourName}! Menie zovyt ${userName}.`
// 	  );
	  
//   },
// };

// опишем класс-это как чертеж для всех будущих обьектов person
//которые будут создаваться на его основе

// class Person {
// 	constructor (userName, age, isMarried) {
// 		this.userName = userName;
// 		this.age = age;
// 		this.isMarried = isMarried;
// 	}

// 	sayHi (name) {
// 		  console.log(`Privet, ${name}! Menie zovyt ${this.userName}.` );
// 	};
// }
// const person1 = new Person('Mark', 30, false);
// const person2 = new Person('pavel', 25, true)
// console.log(person1);
// console.log(person2);
// person1.sayHi('Yriy')
// person2.sayHi('Yriy')

// =========выбор DOM элементов ========

// выбор одного элемента DOM по селектору

// document.querySelector('select'); позволяет нам выбирать элементы

// document.querySelector('h2').classList.add('red')

// const heading2 = document.querySelector('h2');
// heading2.classList.add('red');

// document.querySelector('.heading-3').classList.add('green');


//выбор коллекции элементов
// const headings = document.querySelectorAll('h2'); 
// console.log(headings);


// for (let heading of headings) {
// 	heading.classList.add('red-text')	
// }

// const paragr = document.querySelectorAll('p')
// for (let p of paragr) {
// p.classList.add('green-text')
// }
// paragr.forEach(function (p) {
// 	personalbar.classList.add('green-text')
// }) 

// Тоже есть следующие методы
// document.getElementsByClassName() // выбор коллекции элементов по CSS классу
// document.getElementsByTagName() // выбор коллекции по Тегу
// document.getElementById() // выбор одного эелемента по ID

// ======= Работа с СSS классами ========

/*
element.classList.add()
.add()
.remuve()
.toggle()
.contains()
*/

// const heading = document.querySelector('h2');
// console.log(heading);

// heading.classList.add('red-text');
// heading.classList.remove('red-text');

// heading.classList.toggle('green-text');
// heading.classList.toggle('green');

// const heading = document.querySelector('h2');

// heading.classList.contains('green');

// ===========Работа с атрибутами===========

/*
getAttribute(attrName) - возвращает значение указанного атрибута
setAttribute (name, value) - добавляет указанный атрибут и его значение к элементу
hasAttribute (attrName) - возвращает true при наличии у элемента укаанного атрибута
removeAttribute(attrName) - удаляет указанный атрибут

tjggleAttribute(name, force) - добавляет новый атрибут при отсутствии или удаляет существующий атрибут
hasAttributes() - возвращает  true, если у элемента имеются какие-либо атрибуты
getAttributeNames() - возвращает названия атрибутов элемента
*/

// const img = document.querySelector('#logo');

// img.setAttribute('src', './img/php.png');
// img.setAttribute('width', '200');
// img.src = './img/js.png';

// const button = document.querySelector('#button');
// button.setAttribute('value', 'Otpravit')
// button.value = "Text"

// ==============прослушка событий ==============

// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = 'удалить';

// button.addEventListener('click', function(){
// 	console.log('Click1');
	
// })

// button.onclick = function(){
// 	console.log('Click');
// 	img.remove();
	
// }

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener(
// 	'input', function  () {

// 	console.log(inputText.value);
// 	textBlock.innerText = inputText.value;
	
// 	}
// )
// inputText.addEventListener('input', () => {

// 	console.log(inputText.value);
// 	textBlock.innerText = inputText.value;
	
// 	}
// )

// inputText.addEventListener('input',inputHandler);

// function inputHandler() {
// 	console.log(inputText.value);
// 	textBlock.innerText = inputText.value;
	
// }

//  <!-- обьект event -->

// document.querySelector('#list');

// list.addEventListener('click', function (event) {
// 	console.log(this);
// 	console.log(event);
// 	console.log(event.target);
	
// })

// ==============Работа с элементами==========

/*
создать элемент
document.craeteElement('tag-name')

Изменить HTML содержимое внутри элемента
element.innerHTML = ''

Изменить текстовое содержимое внутри элемента
node.innerText =''

Клонирование элемента
node.cloneNode() true с внутренним содержимым (текст и теги),
false - без внутреннего содержимого

вставить элементы вовнуттрь другого элемента
element.append(nodesOrDOMString)

удалить элемент
element.remove()
*/

// выбор контейнера
// const container = document.querySelector('#elementsContainer');

// создать заголовок
// const newHeader = document.createElement('h1');
// newHeader.innerText = 'Nовый заголовок'
// container.append(newHeader)

// Копирование шапки

// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

// Вставки разметки через строки
// const htmlExample = '<h2>Еще один заголовок</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);

// вставка раметки чере шаблонные строки
// const title = 'Текст заголовка';
// const htmlExample = `<h2>${title}</h2>`;
// container.insertAdjacentHTML('beforeend', htmlExample)

// ==========ToDo  список задач =========

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', formHandler);

// function formHandler (event) {
// 	event.preventDefault()
	// Получаем название задачи из поля ввода (интпут)
	// const taskText = todoInput.value;
	

	//  создаем тег li через разметку
	// const li = `<li>${taskText}</li>`;

	
	// добавляем разметку на страницу
	// todoList.insertAdjacentHTML('beforeend', li )

	// создаем тег Li с помощью создания элемента

	// const newTask = document.createElement('li');
	// newTask.innerText = taskText
	

	// Создаем кнопку удалить

// const deleteBtn = document.createElement('button');
// deleteBtn.setAttribute('role', 'button');
// deleteBtn.innerText = 'Удалить';
// deleteBtn.style['margin-left'] = '15px';
// newTask.append(deleteBtn);

// добавляем событие по клику

// deleteBtn.addEventListener('click', function () {
	// this.closest('li').remove()
// });

// добавляем элемент на страницу
	// todoList.append(newTask)


	// очищаем поле ввода
	// todoInput.value = '';

	//фокус переносим в поле ввода
	// todoInput.focus()
// }

// ===========setInterval==========

// const timeIntervalID = setInterval (function () {
// 	console.log('Fired!');
// 	}, 1000);

// clearInterval(timeIntervalID)

// ===========setTimeOut==========

// const timerID = setTimeout(function () {
// console.log('set ft');

// }, 2000)

// 	clearInterval(timerID)

// ======== setInterval+setTimeOut==========

// const timerID = setInterval(function () {
// 	console.log('set');
	
// }, 1000)

// setTimeout(function(){
// 	clearInterval(timerID)
// },10000)

// ===============Секундомер===========

// const counterElement = document.querySelector('#counter');
// let counter = 0;
// let timerID;


// setInterval (function(){
// 	counter++;
// 	counterElement.innerText = counter;
	
// }, 1000)

// Start
// const btnStart = document.querySelector('#start'); 
// btnStart.onclick = function() {
// 	console.log('btnStart');
	
// timerID = setInterval (function(){
// 	counter++;
// 	counterElement.innerText = counter;
// 	}, 1000)
// }

//  Pause

// const btnPause = document.querySelector('#pause'); 
// btnPause.onclick = function (){
// 	console.log('btnPause');
	
// 	clearInterval(timerID);
// }

// сброс
// const btnreset = document.querySelector('#reset');
// btnreset.onclick =  function(){
// 	counter = 0;
// 	counterElement.innerText = counter;
// 	clearInterval(timerID);
// }

// ======Callback. Callback  hell===========

// setTimeout(function(){
// 	console.log('Step 1');
// 	setTimeout(function(){
// 		console.log('Step 2');
// 		setTimeout(function(){
// 			console.log('Step 3');
// 		}, 1000)
// 	}, 1500)
// }, 2000)

// function checkRooms() {
// 	setTimeout(function(){
// 	console.log('Проверяем номера в отеле');
// 	const avialableRooms = false

// 	if (avialableRooms) {
// 		console.log('Номер есть!');
// 		console.log('Едем в отпуск!');
			
// 	}else {
// 		console.log('Номеров нет');
// 		console.log('Хер вам, а не отпуск');
		
// 	}
// 	}, 1000)	
// }
// checkRooms()

// function checkRooms(success, filed ){
// 	setTimeout(function() {
// 		console.log('Проверяем номера в отеле');
// 		const aviablableRooms = true;

// 		if(aviablableRooms) {
// 			let message = 'Номера есть'
// 			success(message);
// 		}else {
// 			let message = 'Номеров НЕТ!!!'
// 			filed(message);
// 		}
		
// 	},1000)
// }

// function checkTikets(message, success, filed){
// 	setTimeout(function(){
// 	console.log('-----functions CheckTickets-----');
// 	console.log('ответ в предыдуем шаге', message);

// 	console.log('Проверяем авиабилеты...');
// 	const avialableTickets = true

// 	if (avialableTickets) {
// 		let message = 'Билеты есть';
// 		success(message);
// 	} else {
// 		let(message) = "Билетов нет";
// 		filed(message);
// 	}
		
// 	}, 5000)
// }

// function cancelVacation(message) {
// 	console.log('----cancelVacation----');
// 	console.log('ответ в предыдуем шаге', message);
// 	console.log('отпуск отменяется');
	
// }

// function submitVacation(message) {
// 	console.log('----submitVacation----');
// 	console.log('ответ в предыдуем шаге', message);
// 	console.log('едем в отпуск!');
	
// }

// checkRooms(
// 	function(messageFromCheckRooms){
// 	checkTikets(
// 		messageFromCheckRooms, 
// 		function(messageFromCheckTikets){
// 			submitVacation(messageFromCheckTikets)
// 		},
// 		function(messageFromCheckTikets){
// 			cancelVacation(messageFromCheckTikets)
// 		})
// }, 
// function(messageFromCheckRooms){
// 	cancelVacation(messageFromCheckRooms)
// });

// =======Сoздание промиса =======

// const myPromise = new Promise(function(resolve, reject){
// 	console.log('Promise created');
	
// 	setTimeout(function(){
 		// запрос на сервер
// 		const response = true

// 		if (response) {
// 			let message = 'SUCCESS'
// 			resolve(message)
// 		} else {
// 			let message = 'Faled'
// 			reject(message)
// 		}
// 	}, 1000)
// })

// myPromise.then(function(data){
// 	console.log('Then');
// 	console.log(data);
// 	return 'Data from then'
// }).then(function(data){
// 	console.log('Then 2');
// 	console.log(data);
// }).catch(function(data){
// 	console.log('Catch');
// 	console.log(data);
// })

// ================Цеочка промисов=======

// const checkRooms = new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		console.log('Проверяем номера в отеле');
// 		const aviablableRooms = true;
// 		console.log(aviablableRooms);

// 		if(aviablableRooms) {
// 			resolve ('Номера есть')
		
// 		}else {
// 			reject('Номеров НЕТ!!!')
// 		}
		

// 	}, 1500)
// })

// checkRooms.then(function(data){
// 	return new Promise (function(resolve, reject){
// 		setTimeout(() => {
// 			console.log('-----then-----');
// 			console.log('ответ в предыдущем шаге');
// 			console.log('Проверяем авиабилеты...');
// 			const avialableTickets = true
			
// 			if(avialableTickets) {
// 				let message = 'Билеты есть'
// 				resolve(message)
// 			} else {
// 				let message = 'Билетов нет'
// 				reject(message)
// 			}
// 		}, 1000)
// 	})

// }).catch(function(data){
// 	console.log('-----catch------');
// 	console.log('ответ в предыдущем шаге', data);
// 	console.log('отпуск отменяется');

// })


// checkRooms.then(function(data){
// 	console.log('----then1----');
// 	console.log('ответ в предыдущем шаге', data);
// 	console.log('Удем в отпуск');

// }).catch(function(data){
// 	console.log('-----catch------');
// 	console.log('ответ в предыдущем шаге', data);
// 	console.log('отпуск отменяется');

// })

//====== Async Function. Асинхронные функциию. Потребление промиса

// function promiseFunction(){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(() => {
// 			const result = false
// 			if(result){
// 				resolve('Done')
// 			} else {
// 				reject('Fail!')
// 			}
// 		}, 500)
// 	})
// }

// async function startPromise() {
// 	try {
// 	const result = await promiseFunction()
// 	console.log(result);

// 	} catch (err) {
// 		console.log(err);
		
// 	}

// }
// startPromise()

// =====несколько фсинхронных операцийю Серия промисов====

// ====Пример fetch с промисом получение данных по APT====
// 1. получить данные с сервера



// async function getCurrencies () {
// 	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// 	const data =await response.json() 


// 	const usdRate = data.Valute.USD.Value.toFixed(2)
// 	const eurRate = data.Valute.EUR.Value.toFixed(2)

// 	//  отобразить все на странице

// 	const usdElement = document.querySelector('#usd');
// 	const eurElement = document.querySelector('#eur');
	
// 	usdElement.innerText = usdRate
// 	eurElement.innerText = eurRate




// }


// getCurrencies ()