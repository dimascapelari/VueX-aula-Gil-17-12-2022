export const add = ({ commit }, user) => {
  commit('ADD', user)
}

export const listTodo = ({ commit }) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      commit('LIST', json)
    })
}