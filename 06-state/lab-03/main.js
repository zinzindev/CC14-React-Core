// Gen UI
// Child
// Parent
function App() {
	// logic
	const [isShow, setIsShow] = React.useState(true);

	const handleTogle = () => setIsShow(!isShow);
	// console.log(isShow);

	// let text = isShow ? 'Click to hide text' : 'Click to show text';
	// let text = `click to ${isShow ? 'Hide' : 'Show'} text`;

	let text = (
		<>
			click to <span style={{ color: 'red' }}>{isShow ? 'Hide' : 'Show'}</span> text
		</>
	);

	// UI
	return (
		<div className='container'>
			<button onClick={handleTogle}>{text}</button>
			{isShow && <h4>TEXT</h4>}
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
