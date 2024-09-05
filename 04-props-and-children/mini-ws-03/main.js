// Gen UI
// Child
function KeyPress({ content, styles, additionClass = '' }) {
	// let styleObj = {
	// 	borderRadius: '20px',
	// };
	return (
		<div className={`keypress ${additionClass}`} style={styles}>
			<p>{content}</p>
		</div>
	);
}

// Parent
function App() {
	const styleObj = {
		borderRadius: '20px',
	};

	return (
		<div className='container'>
			<div className='calculator'>
				<div className='item-01'>Display</div>
				<div className='item-02'>2</div>
				<div className='item-03'>3</div>
				<div className='item-04'>4</div>
				<div className='item-05'>5</div>
				<div className='item-06'>6</div>
				<div className='item-07'>7</div>
				<div className='item-08'>8</div>
				<KeyPress content='9' styles={styleObj} additionClass='bg-blue' />
				<KeyPress content='10' styles={styleObj} additionClass='bg-green' />
				<div className='item-11'>11</div>
				<div className='item-12'>12</div>
				<div className='item-13'>13</div>
				<div className='item-14'>14</div>
				<div className='item-15'>15</div>
				<div className='item-16'>16</div>
				<div className='item-17'>17</div>
				<div className='item-18'>18</div>
				<div className='item-19'>19</div>
				<div className='item-20'>20</div>
				<KeyPress content='=' styles={styleObj} />
			</div>
		</div>
	);
}

// Render
const domRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
