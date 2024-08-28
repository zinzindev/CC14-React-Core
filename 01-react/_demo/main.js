// let a = React;
// console.log(a);

/**------------------------------------------------------------------------
 *                      Vanilla Javascript (JS-DOM)
 *------------------------------------------------------------------------**/
// // Create UI
// const header = document.createElement('h1'); // เรียกว่า RealDOM
// console.log(header); // h1
// header.innerHTML = 'Hello from JS-DOM';
// header.classList = 'text-red';
// console.log(header); // h1.text-red เปลี่ยน className เป็น 'text-red'

// // Manipulate DOM
// const root = document.getElementById('root');
// root.appendChild(header);

/**------------------------------------------------------------------------
 *                               React-App-1
 *------------------------------------------------------------------------**/

// Global Object === React, ReactDOM

// // React == Create UI
// // console.log(React);
// const header = React.createElement('h1', { className: 'text-red' }, 'Hello form React'); // เรียกว่า Virtual DOM
// // <h1 class="text-red">Hello form React</h1>
// console.log(header);

// ReactDOM == Manipulate DOM, render
// // console.log(ReactDOM);
// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);

// root.render(header);

/**------------------------------------------------------------------------
 *                               React-App-2
 *------------------------------------------------------------------------**/

let list1 = React.createElement('li', null, 'item-1');
let list2 = React.createElement('li', null, 'item-2');
let list3 = React.createElement('li', null, 'item-3');
let lists = React.createElement('ul', null, list1, list2, list3);
let card = React.createElement('h2', null, 'MY list', lists);

// ReactDOM == Manipulate DOM, render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// root.render(lists);
root.render(card);

// // App: DOM
// const domRoot = document.getElementById('root');

// const listOne = document.createElement('li');
// listOne.textContent = 'item-1';

// const listTwo = document.createElement('li');
// listTwo.textContent = 'item-2';

// const listThree = document.createElement('li');
// listThree.textContent = 'item-3';

// const lists = document.createElement('ul');
// // lists.classList.add('list-none');
// lists.appendChild(listOne);
// lists.appendChild(listTwo);
// lists.appendChild(listThree);

// const header = document.createElement('h1');
// header.classList.add('text-red');
// header.textContent = 'Hi from JS-DOM';

// const app = document.createElement('div');
// // app.classList.add('text-center');
// app.appendChild(header);
// app.appendChild(lists);

// domRoot.appendChild(app);
