export const state = () => ({
  articles: [],
})

export const actions = {
  async letArticles({ commit }) {
    const response = await this.$axios.get('/articles')
    const articles = response.data
    commit('SET_Articles', articles)
  },
}

export const mutations = {
  SET_Articles(state, articles) {
    state.articles = articles
  },
}

export const getters = {
  items: (state) => {
    return state.articles
  },
}
