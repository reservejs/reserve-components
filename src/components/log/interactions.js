function create({Rx}) {
  const infoSubject = new Rx.Subject()
  const info$ = infoSubject.asObservable()
  function info({group, message}) {
    infoSubject.next({
      group,
      message
    })
  }

  const warningSubject = new Rx.Subject()
  const warning$ = warningSubject.asObservable()
  function warning({group, message}) {
    warningSubject.next({
      group,
      message
    })
  }

  const errorSubject = new Rx.Subject()
  const error$ = errorSubject.asObservable()
  function error({group, message}) {
    errorSubject.next({
      group,
      message
    })
  }

  return {
    actions: {
      info,
      warning,
      error
    },
    events: {
      info$,
      warning$,
      error$
    }
  }
}

export default {
  create
}
