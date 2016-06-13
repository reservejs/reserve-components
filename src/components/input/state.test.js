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
      test.deepEqual(actual.toObject(), expected.toObject())
      subscription.unsubscribe()
    }
  )
  setValue$.next(expected.get('value'))
})

tests('publishBehavior', function onPublishBehaviorTest(test) {
  const setValue$ = new Rx.Subject()
  const state = stateFactory.create({Immutable, events: {setValue$}})
  /*setValue$.next('one')
  setValue$.next('two')*/
  setValue$.next('three')
  state.state$.subscribe(
    function onSubscribe(actual) {
      test.is(actual, 'three')
    }
  )
  /*setValue$.next('four')
  setValue$.next('five')*/
})
