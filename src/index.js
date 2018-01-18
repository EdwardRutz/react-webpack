import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

render(
  <div>
    {hello}
    {goodbye}
    The salutation and valediction are pulled from a .json file.
  </div>,
	document.getElementById('react-container')
)