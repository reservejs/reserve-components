import React from 'react'
import Rx from 'rxjs'
import interactionsFactory from './interactions'
import rendererFactory from './renderer'
import stateFactory from './state'

function create() {
  const interactions = interactionsFactory.create({Rx})
  const state = stateFactory.create(Rx, interactions.events)
  const renderer = rendererFactory.create(React)
  return {
    interactions,
    state,
    renderer
  }
}

export default {
  create
}
