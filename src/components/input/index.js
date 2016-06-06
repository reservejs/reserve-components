import React from 'react'
import Rx from 'rxjs'
import interactionsFactory from './interactions'
import reactRendererFactory from './renderer'
import stateFactory from './state'

function create({options: {rendererFactory}}) {
  const interactions = interactionsFactory.create({dependencies: {Rx}})
  const renderer = rendererFactory.create({
    dependencies: {React, actions: interactions.actions}
  })
  const state = stateFactory.create({
    dependencies: {Rx, events: interactions.events}
  })
  return {
    interactions,
    renderer,
    state
  }
}

export default {
  create,
  reactRendererFactory
}
