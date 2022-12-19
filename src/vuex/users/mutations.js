export const ADD = (state, payload) => {
  state.users.push(payload)
}

export const LIST = (state, payload) => {
  state.users = payload
}