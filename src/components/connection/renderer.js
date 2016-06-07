function isConnectedToStyle(isConnected) {
  return isConnected ? {color: 'green'} : {color: 'red'}
}

function create({React}) {
  function render({state}) {
    return (
      <div>
        <div
          style={isConnectedToStyle(state.isConnected)}>
            Connected: {state.isConnected.toString()}
          </div>
      </div>
    )
  }

  render.propTypes = {
    state: React.PropTypes.object.isRequired
  }

  return {
    render
  }
}

export default {
  create
}
