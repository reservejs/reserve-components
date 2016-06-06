function create({dependencies: {Rx, inputInteractions}}) {
  const write$ = new Rx.Subject()

  function write() {
    write$.next()
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
