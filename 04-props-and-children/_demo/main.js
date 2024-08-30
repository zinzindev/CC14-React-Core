// function MyComponent(props) {
function MyComponent({ title, age, isAdmin }) {
	// Child รับ Props
	// console.log(props);

	// props destructuring
	// const { title, age, isAdmin } = props;
	// title = props.title, age = props.age, isAdmin = props.isAdmin

	// return <h6>My-Component</h6>;
	return (
		<>
			{/* <h6>{props.title}</h6> */}
			<h6>{title}</h6>
			{/* <p>{props.age}</p> */}
			<p>{age}</p>
			{/* {props.isAdmin && <button>Click for delete</button>} */}
			{isAdmin && <button>Click for delete</button>}
		</>
	);
}

// Parent
function App() {
	// เรียก Render == Call Funtion Component
	// Pass Props == Pass ที่ App (Parent)
	// Child
	return (
		<div className='container'>
			<MyComponent title='pavit' age={20} isAdmin={true} />
			<MyComponent title='max' age={23} isAdmin={false} />
			<MyComponent title='bung' age={2} isAdmin={false} />
		</div>
	);
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
