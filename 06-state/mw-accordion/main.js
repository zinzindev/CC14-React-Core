// Gen UI
function Accordion() {
	const [isOpen, setIsOpen] = React.useState(true);

	const handleClick = () => {
		// isOpen = !isOpen; //ห้ามเปลี่ยนค่า isOpen โดยตรง ต้องทำผ่าน setIsOpen
		setIsOpen(!isOpen);
	};

	return (
		<>
			<h2>Title</h2>
			<button onClick={handleClick}>click</button>
			{isOpen && (
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque expedita vero iusto in
					qui! Provident!
				</p>
			)}
		</>
	);
}

// Parent
function App() {
	// logic

	// Child
	// UI
	return (
		<div className='container'>
			<Accordion />
			<Accordion />
			<Accordion />
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
