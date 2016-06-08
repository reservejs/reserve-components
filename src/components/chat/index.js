import React from 'react'
import Rx from 'rxjs'
import inputFactory from '../input'
import interactionsFactory from './interactions'
import reactRendererFactory from './renderer'
import stateFactory from './state'

function create({rendererFactory}) {
  const input = inputFactory.create(
    {rendererFactory: inputFactory.reactRendererFactory}
  )
  const interactions = interactionsFactory.create({
    Rx, inputInteractions: input.interactions
  })
  const state = stateFactory.create({
    Rx, events: interactions.events, inputState: input.state
  })
  const renderer = rendererFactory.create({
    React, actions: interactions.actions, inputRenderer: input.renderer
  })
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
