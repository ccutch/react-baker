import React from 'react'
import { breadcrumbs } from './store'

export class Breadcrumb extends React.Component {
  componentDidMount() {
    breadcrumbs.push(this.props)
  }

  componentWillUnmount() {
    breadcrumbs.pop()
  }

  render() {
    return null
  }
}
