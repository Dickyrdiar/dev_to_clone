export const state = () => ({
  articles: [],
  loading: true,
})

export const actions = {
  // articles call
  async loadData({ commit }) {
    const articlesPage = await this.$axios.get('/articles')
    const articles = articlesPage.data
    commit('SET_ARTICLES', articles)
    commit('CHANGE _LOADING', false)
  },
}

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}

export const getters = {}
