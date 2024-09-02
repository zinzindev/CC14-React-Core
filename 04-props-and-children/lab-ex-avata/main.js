// Gen UI
// Child
function Avatar({ name, src }) {
	return (
		<div className='avatar'>
			<div className='avatar__img--container'>
				<img src={src} alt='avatar-pic' className='avatar__img' />
			</div>
			<p className='avatar__name'>{name}</p>
		</div>
	);
}

// Parent
function App() {
	const link1 =
		'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const link2 =
		'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const link3 =
		'https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const link4 =
		'https://images.unsplash.com/photo-1466916119434-d72cdf577c4d?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	return (
		<div className='container'>
			<Avatar name='Jai' src={link1} />
			<Avatar name='Jai' src={link2} />
			<Avatar name='Jai' src={link3} />
			<Avatar name='Jai' src={link4} />
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
