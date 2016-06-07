function create({Rx}) {
  const setValueSubject = new Rx.Subject()
  const setValue$ = setValueSubject.asObservable()
  function setValue(data) {
    setValueSubject.next(data)
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
