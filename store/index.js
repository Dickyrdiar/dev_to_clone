import Article from './Article'

export const state = () => ({
  articles: [],
  article: {},
})

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },

  SET_ARTICLE(state, article) {
    state.article = article
  },
}

export const actions = {
  getArticles({ commit }) {
    Article.all().then((response) => {
      commit('SET_ARTICLES', response.data)
    })
  },

  getArticle({ commit }, articleId) {
    Article.show(articleId).then((response) => {
      commit('SET_ARTICLE', response.data)
    })
  },
}
