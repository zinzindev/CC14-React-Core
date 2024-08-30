/*------------------------------------------- Reuse? -------------------------------------------*/

/*------- reuse-value by variable -------*/
// console.log(5+10)
// let result = 5 + 10;
// console.log(result);

/*------- reuse-logic, process -> generate value by (return <value>)-------*/
function add(x, y) {
	let result = x + y;
	return result;
}

/*------- React: Reuse UI value: keep JSX as a variable -------*/
// const input = <input type='text' />;
// const App = (
// 	<div className='container'>
// 		Reuse UI
// 		{[input, input]}
// 	</div>
// );

/*------- React: Reuse UI: keep JSX as a function Component -> generate Component -------*/
const input = <input type='text' />; //JSX == React Element == JS-plain object
console.log(input);

function MyTitle() {
	return <h1 className='text-blue'>My-Title</h1>;
}
// console.log(MyTitle);
// console.log(MyTitle());
console.log(<MyTitle />);

class MyClassComponent extends React.PureComponent {
	// # Zone-1 : Do Logic,other method

	// # Zone-2 : RenderUI
	render() {
		return <h1>My Class Component</h1>;
	}
}

// const App = (
// 	<div className='container'>
// 		Reuse UI
// 		{[input, input, input, input]}
// 		{MyTitle()}
// 		{MyTitle()}
// 		{add(4, 5)}
// 		<MyTitle />
// 		<MyTitle></MyTitle>
// 		<MyClassComponent />
// 	</div>
// );

function App() {
	// FUNCTION BODY

	//
	return (
		<div className='container'>
			Reuse UI: From FC
			{[input, input, input]}
			{MyTitle()}
			{MyTitle()}
			{add(4, 5)}
			<MyTitle />
			<MyTitle></MyTitle>
			<MyClassComponent />
		</div>
	);
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// root.render(App);
root.render(<App />);
