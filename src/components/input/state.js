function create({Immutable, events: {setValue$}}) {
  // const stateSubject = new Rx.Subject()
  const initialState = Immutable.Map({
    value: ''
  })

  const state$ = setValue$
    .map(function onSetValue$(data) {
      return function onHandleStateChange(state) {
        return state.set('value', data)
      }
    }).startWith(initialState)
    .scan(function onScan(currentState, stateChanger) {
      return stateChanger(currentState)
    })

  return {
    state$
  }
}

export default {
  create
}
