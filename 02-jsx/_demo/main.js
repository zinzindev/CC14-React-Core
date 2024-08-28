// UI
// const header = React.createElement('h1', null, 'Hi from React');

// JSX: Javascript Syntax Extension, JS for XML
// const reactEl = (
// 	// React Fragments -> Short Syntax
// 	<>
// 		<h1>Header</h1>
// 		<ul>
// 			<li>item-1</li>
// 			<li>item-2</li>
// 			<li>item-3</li>
// 		</ul>
// 	</>
// );

function add(x, y) {
	return x + y;
}

// const reactEl = <div>Hello {2 + 3}</div>;
// const reactEl = <div>Hello {add(2, 3)}</div>;
// const reactEl = <div>Hello {`add 2+3 = ${add(2, 3)}`}</div>;
// const reactEl = <div>{[1, 2, 3, 4, 5]}</div>;
// const reactEl = <div>{<h1>Hello</h1>}</div>;

// const listOfHeader = [<h1>H-1</h1>, <h2>H-2</h2>, <h3>H-3</h3>];
// const reactEl = <div>{listOfHeader}</div>;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.map((num) => <li>{`item-${num}`}</li>);
// return -> [ <li>item-1</li>, <li>item-2</li>, ...]
// const reactEl = <ul>{newArr}</ul>;
// const reactEl = (
// 	<ul>
// 		{arr.map((num) => (
// 			<li>{`item-${num}`}</li>
// 		))}
// 	</ul>
// );

/*------- object -------*/
// const obj = {
// 	name: 'john',
// 	age: 30,
// };
// const reactEl = <h1>{obj}</h1>; // error -> render object ไม่ได้

/*------- condition rendering -------*/
// let isAdmin = false;
// let isAdmin = true;

// const reactEl = <h1>{isAdmin ? 'Hi-Admin' : 'Hi-User'}</h1>;
// const reactEl = <h1> {isAdmin && 'Hi-Admin'} </h1>; // && -> find the first false
// const reactEl = <h1> {isAdmin || 'Hi-User'} </h1>; // || -> find the first true

/*------- style in react -------*/
let isAdmin = false;
// let isAdmin = true;

// const styleObj = {
// 	color: 'blue',
// 	textTransform: 'lowercase',
// };

// const reactEl = <h1 style={styleObj}> {isAdmin || 'Hi-User'} </h1>;

// first bracket {} -> Inject Expression
// second bracket {} -> styleObject
const reactEl = (
	<h1 style={{ color: 'blue', textTransform: 'lowercase' }}> {isAdmin || 'Hi-User'} </h1>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(reactEl);
