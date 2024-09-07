// Gen UI

// Parent
function App() {
	// logic
	const [range, setRange] = React.useState(20);
	const [option, setOption] = React.useState();
	const [isChecked, setIsChecked] = React.useState(true);

	const handleChange = (e) => {
		console.log(e.target.value, typeof e.target.value);
		setRange(Number(e.target.value));
	};

	const handleSelect = (e) => {
		console.log(e.target.value, typeof e.target.value);
		setOption(e.target.value);
	};

	const handleCheckBox = (e) => {
		console.log(e.target.checked, typeof e.target.checked);
		setIsChecked(e.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit form');
		setRange(20);
		setIsChecked(true);
	};

	// Child
	// UI
	return (
		<div className='container'>
			07-input-form_demo
			<form onSubmit={handleSubmit}>
				<div>
					<input type='range' onChange={handleChange} value={range} />
				</div>
				<select name='drop-down' id='drop-down' onChange={handleSelect} value={option}>
					<option value='op-1'>Option-1</option>
					<option value='op-2'>Option-2</option>
					<option value='op-3'>Option-3</option>
				</select>
				<div>
					<label htmlFor='sugar'>sugar </label>
					<input type='checkbox' id='sugar' onChange={handleCheckBox} checked={isChecked} />
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
