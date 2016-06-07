import Immutable from 'immutable'
import React from 'react'
import Rx from 'rxjs'
import interactionsFactory from './interactions'
import reactRendererFactory from './renderer'
import stateFactory from './state'

function create({rendererFactory}) {
  const interactions = interactionsFactory.create({Rx})
  const renderer = rendererFactory.create({
    React, actions: interactions.actions
  })
  const state = stateFactory.create({
    Immutable, events: interactions.events
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
