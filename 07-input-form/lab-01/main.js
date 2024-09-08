// Gen UI
const BAHT_PER_DOLLAR = 30;

// Parent
function App() {
	// logic
	const [num, setNum] = React.useState(0);

	const handleChangeDollar = (e) => {
		setNum(Number(e.target.value));
	};

	// Child
	// UI
	return (
		<div className='container'>
			<div className='dollar'>
				<label htmlFor='userDollar'>Enter Dollar</label>
				<input type='text' id='userDollar' onChange={handleChangeDollar} value={num} />
			</div>
			<div className='baht'>
				<p>
					Convert to Baht <span>{num * BAHT_PER_DOLLAR}</span>
				</p>
			</div>
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
