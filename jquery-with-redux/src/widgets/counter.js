function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let element

function render(store) {
  const state = store.getState()

  element.text(state.counter)
  console.log('counter widget')
}

function init(store) {
  $('body').append(`
    <section>
      Counter = <span id="counter">0</span>
      <button type="button" id="counter-inc">+</button>
      <button type="button" id="counter-dec">-</button>
    </section>
  `)

  element = $('#counter')

  $('#counter-inc').click(() => {
    store.dispatch({ type: 'INCREMENT' })
  })

  $('#counter-dec').click(() => {
    store.dispatch({ type: 'DECREMENT' })
  })

  const unsubscribe = store.subscribe(() => render(store))
}

export default {
  init: init,
  reducer: reducer,
}
