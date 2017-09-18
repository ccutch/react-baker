import React from 'react'
import { breadcrumbs } from './store'
import PropTypes from 'prop-types'

export const PathViewer = observer(({ containerClass, render = b => null }) => (
  <div className={containerClass}>{breadcrumbs.map(render)}</div>
))
