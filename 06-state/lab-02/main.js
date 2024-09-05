// Gen UI
// Child
// Parent
function App() {
	// logic
	const [isShow, setIsShow] = React.useState(true);

	const handleHide = () => setIsShow(false);

	// UI
	return (
		<div className='container'>
			<button onClick={handleHide}>Click to hide text</button>
			{isShow && <h4>TEXT</h4>}
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
