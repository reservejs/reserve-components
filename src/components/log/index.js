// TODO: Give the entire error object as data to the error action. -MANI
import Rx from 'rxjs'
import groups from './groups'
import interactionsFactory from './interactions'

function create() {
  const interactions = interactionsFactory.create({Rx})
  return {
    interactions,
    groups
  }
}

export default {
  create
}
