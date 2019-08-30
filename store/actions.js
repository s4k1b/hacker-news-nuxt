export default {
  async hnList$fetch({ commit }, ob) {
    try {
      const list = await this.$axios.get(
        `https://hacker-news.firebaseio.com/v0/${ob}.json`
      )
      commit('hnList$set', list.data || [])
      console.log(list)
    } catch (e) {
      console.log('Err: ', e)
    }
  }
}
