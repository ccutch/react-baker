# React Baker
Dead simple breadcrumbs for React Router 4 or anything really


```javascript
import { Breadcrumb, PathViewer } from 'react-baker'

const MyComponent = props => (
  <div>
    <Breadcrumb name='Home' path='/' {/* use any props you want */} />
    <Switch>
      <Route {/* ... */} />
      <Route {/* ... */} />
      <Route {/* ... */} />
    </Switch>
  </div>
)

const App = props => (
  <div>
    <PathViewer render={({name, path }) => (
      <a href={path}>{name} /</a>
    )} />
    <Router>
      <Switch>
        <Route exact path='/' component={MyComponent} />
      </Switch>
    </Router>
  </div>
)
```

