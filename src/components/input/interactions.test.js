import Rx from 'rxjs'
import interactionsFactory from './interactions'
import tests from 'ava'

const FIRST = 1

tests('input.interactions setValue', function name(test) {
  const expected = 'hello'
  const interactions = interactionsFactory.create({
    dependencies: {Rx}
  })
  const subscription = interactions.events.setValue$
  .take(FIRST).subscribe(
    function onSubscribe(actual) {
      test.is(actual, expected)
      subscription.unsubscribe()
    }
  )
  interactions.actions.setValue(expected)
})
