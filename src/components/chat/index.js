import React from 'react'
import Rx from 'rxjs'
import inputFactory from '../input'
import interactionsFactory from './interactions'
import reactRendererFactory from './renderer'
import stateFactory from './state'

function create({options: {rendererFactory}}) {
  const input = inputFactory.create()
  const interactions = interactionsFactory.create()
  const state = stateFactory.create(Rx, interactions.events, input.state)
  const renderer = rendererFactory.create(
    React, interactions.actions, input.renderer
  )
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
