import React from 'react'
import { Link } from 'react-router-dom'

export default ({ match }) => (
  <div>
    <h1>Devices</h1>
    <ul>
      <li>
        <Link to="dashboard/1">Item 1</Link>
      </li>
      <li>
        <Link to="dashboard/2">Item 2</Link>
      </li>
      <li>
        <Link to="dashboard/3">Item 3</Link>
      </li>
      <li>
        <Link to="dashboard/4">Item 4</Link>
      </li>
      <li>
        <Link to="dashboard/5">Item 5</Link>
      </li>
    </ul>

    <h2>Settings</h2>
    <Link to="/dashboard/settings">Go to settings</Link>
  </div>
)
