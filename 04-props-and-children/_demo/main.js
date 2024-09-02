// function MyComponent(props) {
function MyComponent({ title, age, isAdmin }) {
	// Child รับ Props
	// console.log(props);

	// Don't Modify prop
	// props.title = 'Job'
	// props.age = 20

	// props destructuring
	// const { title, age, isAdmin } = props;
	// title = props.title, age = props.age, isAdmin = props.isAdmin

	// return <h6>My-Component</h6>;
	return (
		<>
			{/* <h6>{props.title}</h6>
			<p>{props.age}</p>
			{props.isAdmin && <button>Click for delete</button>} */}

			<h6>{title}</h6>
			<p>{age}</p>
			{isAdmin && <button>Click for delete</button>}
		</>
	);
}

// function MyLists(props) {
function MyLists({ listName, children }) {
	// console.log(props);
	return (
		<ul>
			{/* <h6>{props.listName} Lists</h6>
			{props.children} */}
			<h6>{listName} Lists</h6>
			{children}
		</ul>
	);
}

// Parent
function App() {
	// เรียก Render == Call Funtion Component
	// Pass Props == Pass ที่ App (Parent)
	// Child
	return (
		<div className='container'>
			{/* <MyComponent title='pavit' age={20} isAdmin={true} />
			<MyComponent title='max' age={23} isAdmin={false} />
			<MyComponent title='bung' age={2} isAdmin={false} /> *
			<MyLists /> */}
			<MyLists listName='task' children={[<li>HW</li>, <li>Game</li>]} />
			<MyLists listName='Fruits'>
				<li>Apple</li>
				<li>Banana</li>
			</MyLists>
			<MyLists listName='Hobbies'>
				<li>Sleep</li>
				<li>Dota2</li>
				<li>Football</li>
			</MyLists>
		</div>
	);
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
