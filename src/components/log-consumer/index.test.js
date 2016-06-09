import Rx from 'rxjs'
import logConsumerFactory from './index'
import mockWritersFactory from './writers/mock-writers'
import tests from 'ava'

const interactionSubjects = {
  info$: new Rx.Subject(),
  warning$: new Rx.Subject(),
  error$: new Rx.Subject()
}

tests.cb('log-consumer', function onTests(test) {
  const expected = {
    group: 'event',
    message: 'test'
  }
  // NOTE: Proxy is populated with the subscription later in the code.
  // It's needed to setup the mock before getting the subscription. -MANI
  const subscriptionProxy = {}
  const writersMock = mockWritersFactory.create({
    callback: function handleWrite(actual) {
      test.deepEqual(
        actual,
        expected
      )
      subscriptionProxy.subscription.unsubscribe()
      test.end()
    }
  })
  subscriptionProxy.subscription = logConsumerFactory.create({
    logEvents: interactionSubjects,
    writers: writersMock,
    groupsFilter: null
  }).subscription
  interactionSubjects.error$.next(expected)
})
