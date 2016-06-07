function create({Rx, inputInteractions}) {
  const writeSubject = new Rx.Subject()
  const write$ = writeSubject.asObservable()
  function write() {
    writeSubject.next()
  }

  return {
    actions: {
      write,
      setValue: inputInteractions.actions.setValue
    },
    events: {
      write$,
      setValue$: inputInteractions.events.setValue$
    }
  }
}

export default {
  create
}
