function create({React, actions: {setValue}}) {
  function onChange(data) {
    setValue(data)
  }

  function render({state}) {
    return (
      <span>
        <input
          type="text"
          onChange={(domEvent) => onChange(domEvent.target.value)}
          value={ state.value }
          />
      </span>
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
