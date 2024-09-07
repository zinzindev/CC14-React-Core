// Gen UI

// Parent
function App() {
	// logic

	// Child
	// UI
	return <div className='container'></div>;
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
