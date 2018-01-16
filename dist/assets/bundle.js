'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: 'blue', color: 'white', fontFamily: 'verdana' } },
	'Hello React, Hello Webpack!'
), document.getElementById('react-container'));
