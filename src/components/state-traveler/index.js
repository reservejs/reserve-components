import Rx from 'rxjs'
import interactionsFactory from './interactions'

function create({state$}) {
  const interactions = interactionsFactory.create({Rx})
  return {
    interactions
  }
}

export default {
  create
}
