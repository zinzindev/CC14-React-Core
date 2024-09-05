// Gen UI
// Child
// Parent
function App() {
	// logic
	// let isShow = false;
	const [isShow, setIsShow] = React.useState(true);

	// setIsShow(false); // ไม่ควร setState นอก handleFn เพราะจะติด loop
	const handleClickToHide = () => {
		setIsShow(false);
	};

	// UI
	return (
		<div className='container'>
			{isShow && <button onClick={handleClickToHide}>Click to Hide me</button>}
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
