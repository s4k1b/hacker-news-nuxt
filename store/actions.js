export default {
  async hnList$fetch({ commit }, ob) {
    try {
      const list = await this.$axios.get(
        `https://hacker-news.firebaseio.com/v0/${ob}.json`
      )
      commit('hnList$set', list.data || [])
    } catch (e) {
      throw e
    }
  },

  async details$api({ commit }, id) {
    try {
      const resp = await this.$axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      )
      commit('details$set', resp.data || [])
    } catch (e) {
      throw e
    }
  }
}
