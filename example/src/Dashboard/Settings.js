import React from 'react'
import { Breadcrumb } from 'react-baker'

export default () => (
  <div>
    <Breadcrumb
      name="Settings"
      path="/dashboard/settings"
      siblings={{ items: '/dashboard' }}
    />

    <h1>Settings Page</h1>
  </div>
)
