const { render } = ReactDOM

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'blue', color: 'white', fontFamily: 'verdana'}}>
	Hello React, Hello Webpack!	
	</h1>,
	document.getElementById('react-container')
)