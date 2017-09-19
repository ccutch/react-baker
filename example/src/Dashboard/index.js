import React from 'react'
import { Breadcrumb } from 'react-baker'
import { Route, Switch } from 'react-router-dom'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import Settings from './Settings'

export default ({ match }) => (
  <div>
    <Breadcrumb name="Dashboard" path="/dashboard" siblings={{ home: '/' }} />

    <h1>This is the dashboard</h1>
    <Switch>
      <Route exact path={match.url} component={ItemList} />
      <Route path={match.url + '/settings'} component={Settings} />
      <Route path={match.url + '/:itemId'} component={ItemDetails} />
    </Switch>
  </div>
)
