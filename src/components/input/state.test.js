import Rx from 'rxjs'
import stateFactory from './state'
import tests from 'ava'

const FIRST = 1

tests('state', function onStateTest(test) {
  const expected = {
    value: 'hello'
  }
  const setValue$ = new Rx.Subject()
  const state = stateFactory.create({dependencies: {Rx, events: {setValue$}}})
  const subscription = state.state$.skip(FIRST).take(FIRST).subscribe(
    function onSubscribe(actual) {
      test.deepEqual(actual, expected)
      subscription.unsubscribe()
    }
  )
  setValue$.next(expected.value)
})
