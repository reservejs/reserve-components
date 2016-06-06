// TODO: Give the entire error object as data to the error action. -MANI
import Rx from 'rxjs'
import actionsFactory from './interactions/actions'
import eventStreamComposer from '../../helpers/eventsComposer'
import eventsFactory from './interactions/events'
import groups from './groups'

function create(namespace) {
  const events = eventsFactory.create(Rx, eventStreamComposer, namespace)
  const actions = actionsFactory.create(events)
  return {
    events,
    actions,
    groups
  }
}

export default {
  create
}
