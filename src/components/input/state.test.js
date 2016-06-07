import Immutable from 'immutable'
import Rx from 'rxjs'
import stateFactory from './state'
import tests from 'ava'

const FIRST = 1

tests('state', function onStateTest(test) {
  const expected = Immutable.Map({
    value: 'hello'
  })
  const setValue$ = new Rx.Subject()
  const state = stateFactory.create({Immutable, events: {setValue$}})
  const subscription = state.state$.skip(FIRST).take(FIRST).subscribe(
    function onSubscribe(actual) {
      test.deepEqual(actual.get(), expected.get())
      subscription.unsubscribe()
    }
  )
  setValue$.next(expected.get('value'))
})
