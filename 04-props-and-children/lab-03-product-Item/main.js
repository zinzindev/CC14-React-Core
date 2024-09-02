// Gen UI
// Child
function ProductItem({ name, price, description }) {
	return (
		<>
			<h1>Name: {name}</h1>
			<h2>Price: {price}</h2>
			<p>Description: {description}</p>
		</>
	);
}

// Parent
function App() {
	return (
		<div className='container'>
			<ProductItem name='Table' price={3000} description='for work' />
			<ProductItem name='Chair' price={500} description='for sit' />
			<ProductItem name='Computer' price={25000} description='for code' />
		</div>
	);
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
