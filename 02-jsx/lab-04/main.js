// Mini-workshop : Hensui-Landing Page
const App = (
	<div className='main'>
		<div className='main_left'>
			<img src='./banner.png' alt='banner-img' className='main_left--img' />
		</div>
		<div className='main_right'>
			<div className='main_right--content'>Discover</div>
		</div>
	</div>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(App);
