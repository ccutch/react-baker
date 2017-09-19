import React from 'react'
import { Breadcrumb } from 'react-baker'

export default ({ match }) => {
  console.log(match.params)
  return (
    <div>
      <Breadcrumb
        name={`item ${match.params.itemId}`}
        path={`/dashboard/${match.params.itemId}`}
        siblings={{ items: '/dashboard', settings: '/dashboard/settings' }}
      />

      <h1>Device: {match.params.itemId} details</h1>
    </div>
  )
}
