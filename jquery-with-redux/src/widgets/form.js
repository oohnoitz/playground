function reducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.value
    default:
      return state
  }
}

let element
let name

function render(store) {
  const state = store.getState()

  name.text(state.form)
}

function init(store) {
  $('body').append(`
  <section>
    <form>
      <label>
        Name = <span id="name">N/A</span><br>
      </label>
      <input id="input-name" />
    </form>
  </section>
  `)

  element = $('form')
  name = $('#name')

  $('#input-name').on('keyup', (e) => {
    const value = e.currentTarget.value

    store.dispatch({ type: 'UPDATE_NAME' , value: value})
  })

  store.subscribe(() => render(store))
}

export default {
  init: init,
  reducer: reducer,
}
