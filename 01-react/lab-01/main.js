// Child
const linkEl = React.createElement(
	'a',
	{ className: 'card_link', href: 'https://www.google.com' },
	'More information...'
);
const text =
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae optio iusto, voluptatibus sequi quod dolorum aliquam doloribus voluptates iste hic dolorem reprehenderit veritatis ea odit ex labore dolores. Eius, cupiditate.';
const content = React.createElement('p', null, text);
const header = React.createElement('h1', { className: 'card_content' }, 'Example Domain');

// Parent
const card = React.createElement('div', { className: 'card' }, header, content, linkEl);

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(card);
