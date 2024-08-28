const App = (
	<div className='container'>
		<label htmlFor='user-name'>username</label>
		<input type='text' classNam='username' id='user-name' name='username' />
	</div>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(App);
