import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>This is the homepage</h1>
    <h4>Check out the other pages</h4>

    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/settings">Settings</Link>
      </li>
    </ul>
  </div>
)
