export default {
  hnList$set(state, list) {
    state.hnList = [...list]
  },
  details$set(state, ob) {
    state.details = { ...ob }
  },
  user$set(state, ob) {
    state.user = { ...ob }
  }
}
