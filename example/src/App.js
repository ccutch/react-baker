import React from 'react'
import { Breadcrumb, PathViewer } from 'react-baker'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Dashboard from './Dashboard'

export default () => (
  <BrowserRouter>
    <div>
      <Breadcrumb name="Home" path="/" />

      <PathViewer
        render={({ name, path, siblings = [] }) => (
          <Link key={name} to={path}>
            &nbsp;{name} /
          </Link>
        )}
      />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
)
