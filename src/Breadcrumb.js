import React from 'react'
import PropTypes from 'prop-types'
import { breadcrumbs } from './store'

export class Breadcrumb extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    path: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.breadcrumb = Object.assign({}, props)
  }

  componentDidMount() {
    breadcrumbs.push(this.breadcrumb)
  }

  componentWillUnmount() {
    breadcrumbs.remove(this.breadcrumb)
  }

  render() {
    return null
  }
}
