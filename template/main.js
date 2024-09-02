// Gen UI
// Child
// Parent
function App() {
	return <div className='container'></div>;
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
