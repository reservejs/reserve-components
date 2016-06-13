function create({Immutable, events: {setValue$}}) {
  const initialState = Immutable.Map({
    value: ''
  })
  const stateChanger$ = setValue$
    .map(function onSetValue$(data) {
      return function onHandleStateChange(state) {
        return state.set('value', data)
      }
    })
    .startWith(initialState)
  const state$ = stateChanger$
    .scan(function onScan(currentState, stateChanger) {
      return stateChanger(currentState)
    })
    .publishReplay(1)
  const connection = state$.connect()
  return {
    state$,
    connection
  }
}

export default {
  create
}
