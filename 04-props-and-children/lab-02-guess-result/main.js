// function Car(props) {
function Car({ brand, price, color }) {
	// console.log(props.brand); // *
	// console.log(props.price); // **
	// console.log(props.color); // ***
	console.log({ brand }); // * Honda
	console.log({ price }); // ** 1000000
	console.log({ color }); // *** undefined
	// return <div>Car</div>;
	return (
		<>
			<h1>Car Brand: {brand}</h1>
			<h1>Car Price: {price}</h1>
			<h1>Car Color: {color}</h1>
		</>
	);
}

function App() {
	return (
		<div className='container'>
			<Car brand='Honda' price='1000000' />
		</div>
	);
}

// ReactDOM.render(<Car brand='Honda' price='1000000' />, document.getElementById('root'));
const domRoot = document.querySelector('#root');
const reactRoot = ReactDOM.createRoot(domRoot);
reactRoot.render(<App />);
