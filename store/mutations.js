export default {
  hnList$set(state, list) {
    state.hnList = [...list]
  },
  details$set(state, ob) {
    state.details = { ...ob }
  }
}
