// Gen UI
// Child
// Parent
function App() {
	// Logic
	const handleClick = (event) => {
		console.log('Click');
		console.log(event);
	};

	const handleRemove = (index) => {
		console.log(index);
	};

	const handleChange = (event) => {
		console.log(event.target.value);
	};

	const handleFocus = (event) => {
		console.log('Focus');
	};

	const handleBlur = (event) => {
		console.log('Blur');
	};

	// UI
	return (
		<div className='container'>
			<h1>Event Handling</h1>
			{/* <button onClick={(e) => console.log(e)}>Click</button> */}
			<button onClick={handleClick}>Click</button>
			{/* <button onClick={handleRemove}>Remove</button> */}
			<button onClick={() => handleRemove(5)}>Remove</button>
			<input type='text ' onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
