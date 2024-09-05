// Gen UI
// Child
// Parent
function App() {
	// logic
	// const myState = React.useState(0);
	// let currentState = myState[0];
	// let updateFn = myState[1];
	// const [currentState, updateFn] = React.useState(0)
	const [count, setCount] = React.useState(0);
	const [toggle, setToggle] = React.useState(true);
	const [userName, setUserName] = React.useState('');

	let num = 0;
	const handleClick = () => {
		// count += 1;
		// console.log(count);

		// let newState = currentState + 1;
		// updateFn(newState);
		let newState = count + 1;
		setCount(newState);
		setToggle(!toggle);

		// num += 10;
		// console.log(num);
	};

	const handleChange = (e) => {
		// console.log(e.target.value);
		setUserName(e.target.value);
	};
	console.log(userName);

	// UI
	return (
		<div className='container'>
			State : {toggle && 'Hello'}
			<button onClick={handleClick}>Click</button>
			{/* <p>{currentState}</p> */}
			<p>{count}</p>
			<input type='text' onChange={handleChange} value={userName} />
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
