// Gen UI

// Parent
function App() {
	// logic
	const [phone, setPhone] = React.useState('');
	const [result, setResult] = React.useState('');

	const handleChangePhone = (e) => {
		setPhone(e.target.value);
		setResult('');
	};

	const validatePhoneNumber = () => {
		if (phone.trim().length === 0) {
			setResult('Phone Number is required');
			setPhone(phone.trim());
		} else if (isNaN(phone)) {
			setResult('Invalid Phone Number');
		} else if (phone.trim().length !== 10) {
			setResult('Invalid length');
		} else {
			alert('You number is Valid');
		}
	};

	// Child
	// UI
	return (
		<div className='container'>
			<div>
				<input
					type='text'
					placeholder='Phone Number'
					value={phone}
					onChange={handleChangePhone}
				/>
				<button onClick={validatePhoneNumber}>Check</button>
			</div>
			<p>{result}</p>
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
