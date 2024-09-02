// Gen UI
// Child
// function ProductItem(props) {
// console.log(props);
function ProductItem({ product: { name, price, description } }) {
	return (
		<>
			{/* <h1>Name: {props.product.name}</h1>
			<h2>Price: {props.product.price}</h2>
			<p>Description: {props.product.description}</p> */}

			<h1>Name: {name}</h1>
			<h2>Price: {price}</h2>
			<p>Description: {description}</p>
		</>
	);
}

// Parent
function App() {
	let product1 = { name: 'Table', price: 3000, description: 'for work' };
	let product2 = { name: 'Chair', price: 500, description: 'for sit' };
	let product3 = { name: 'Computer', price: 25000, description: 'for code' };

	return (
		<div className='container'>
			{/* <ProductItem name='Table' price={3000} description='for work' />
			<ProductItem name='Chair' price={500} description='for sit' />
			<ProductItem name='Computer' price={25000} description='for code' /> */}

			<ProductItem product={product1} />
			<ProductItem product={product2} />
			<ProductItem product={product3} />
		</div>
	);
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
