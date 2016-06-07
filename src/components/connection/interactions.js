function create({Rx}) {
  const connectSubject = new Rx.Subject()
  const connect$ = connectSubject.asObservable()
  function connect() {
    connectSubject.next()
  }

  const disconnectSubject = new Rx.Subject()
  const disconnect$ = disconnectSubject.asObservable()
  function disconnect() {
    disconnectSubject.next()
  }

  return {
    actions: {
      connect,
      disconnect
    },
    events: {
      connect$,
      disconnect$
    }
  }
}

export default {
  create
}
