function create({Rx}) {
  const goToStateSubject = new Rx.Subject()
  const goToState$ = goToStateSubject.asObservable()
  function goToState({stateHash}) {
    goToStateSubject.next({stateHash})
  }
  return {
    actions: {
      goToState
    },
    events: {
      goToState$
    }
  }
}

export default {
  create
}
