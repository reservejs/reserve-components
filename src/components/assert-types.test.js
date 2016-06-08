/*
  Makes sure each component has the correct API surface
*/

import chatFactory from './chat'
import connectionFactory from './connection'
import inputFactory from './input'
import tests from 'ava'

const types = {
  function: 'function',
  object: 'Object'
}

const properties = {
  observable: 'subscribe'
}

const componentFactories = [
  inputFactory,
  chatFactory,
  connectionFactory
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
          const actual = typeof events[key][properties.observable]
          const expected = types.function
          test.is(actual, expected)
        })
    }
  )
})

