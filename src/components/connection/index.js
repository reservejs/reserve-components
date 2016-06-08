import React from 'react'
import Rx from 'rxjs'
import interactionsFactory from './interactions'
import reactRendererFactory from './renderer'
import stateFactory from './state'

function create({rendererFactory}) {
  const interactions = interactionsFactory.create({Rx})
  const state = stateFactory.create({Rx, events: interactions.events})
  const renderer = rendererFactory.create({React})
  return {
    interactions,
    state,
    renderer
  }
}

export default {
  create,
  reactRendererFactory
}
