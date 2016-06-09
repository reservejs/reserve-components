/*
  Makes sure each component has the correct API surface
*/

import Rx from 'rxjs'
import chatFactory from './chat'
import connectionFactory from './connection'
import inputFactory from './input'
import logFactory from './log'
import tests from 'ava'

const types = {
  function: 'function'
}

const componentFactories = [
  inputFactory,
  chatFactory,
  connectionFactory,
  logFactory
]

tests('actions type', function onTest(test) {
  componentFactories.forEach(
    function onForEachComponentFactory(componentFactory) {
      const {interactions: {actions}} = componentFactory.create({
        rendererFactory: componentFactory.reactRendererFactory
      })
      Object.keys(actions)
        .forEach(function onMapParentObjectKeys(key) {
          const actual = typeof actions[key]
          const expected = types.function
          test.is(actual, expected)
        })
    }
  )
})

tests('events type', function onTest(test) {
  componentFactories.forEach(
    function onForEachComponentFactory(componentFactory) {
      const {interactions: {events}} = componentFactory.create({
        rendererFactory: componentFactory.reactRendererFactory
      })
      Object.keys(events)
        .forEach(function onMapParentObjectKeys(key) {
          const actual = events[key] instanceof Rx.Observable
          const expected = true
          test.is(actual, expected)
        })
    }
  )
})
