import Rx from 'rxjs'

const INDEX_OF_NOT_FOUND = -1

function create({logEvents: {info$, warning$, error$}, writers, groupsFilter}) {
  const infoWritable$ = info$.map(function onMap(data) {
    return function handleWriter() {
      writers.info(data)
    }
  })

  const warningWritable$ = warning$.map(function onMap(data) {
    return function handleWriter() {
      writers.warning(data)
    }
  })

  const errorWritable$ = error$.map(function onMap(data) {
    return function handleWriter() {
      writers.error(data)
    }
  })

  const subscription = Rx.Observable.merge(
    infoWritable$,
    warningWritable$,
    errorWritable$
  )
  .filter(function handleGroupsFilter(logData) {
    return !groupsFilter ||
      groupsFilter
      .split(',')
      .indexOf(logData.group) !== INDEX_OF_NOT_FOUND
  })
  .subscribe(function onInfo$Subscribe(writerWrapper) {
    writerWrapper()
  })
  return {
    subscription
  }
}

export default {
  create
}
