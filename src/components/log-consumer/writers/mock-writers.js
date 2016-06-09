/*
Convenient helper that hands the message back to the callback.
*/
function create({callback}) {
  function info(data) {
    callback(data)
  }

  function warning(data) {
    callback(data)
  }

  function error(data) {
    callback(data)
  }

  return {
    info,
    warning,
    error
  }
}

export default {
  create
}
