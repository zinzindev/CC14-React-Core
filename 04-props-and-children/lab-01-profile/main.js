// Generate UI
// Child
// function Profile(props) {
function Profile({ name, age }) {
	// console.log(props);
	// const { name, age } = props;
	return (
		<>
			{/* <h1>FulName: {props.name}</h1>
			<h2>Age: {props.age}</h2> */}
			<h1>FulName: {name}</h1>
			<h2>Age: {age}</h2>
		</>
	);
}

// Parent
function App() {
	return (
		<div className='container'>
			<Profile name='John Doe' age={27} />
			<Profile name='Matha Doe' age={18} />
			<Profile name='Chuvit K.' age={68} />
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
