import React from 'react'
import { observer } from 'mobx-react'
import { breadcrumbs } from './store'

export const PathViewer = observer(({ className, render = b => null }) => (
  <div className={className}>{breadcrumbs.map(render)}</div>
))
