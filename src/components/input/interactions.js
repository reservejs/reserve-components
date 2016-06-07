function create({Rx}) {
  const setValue$ = new Rx.Subject()

  function setValue(data) {
    setValue$.next(data)
  }

  return {
    actions: {
      setValue
    },
    events: {
      setValue$
    }
  }
}

export default {
  create
}
