import Article from './Article'
import Videos from './Video'

export const state = () => ({
  articles: [],
  article: {},

  // video
  videos: [],
  video: {},
})

export const mutations = {
  // articles
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },

  SET_ARTICLE(state, article) {
    state.article = article
  },

  // videos
  SET_VIDEOS(state, videos) {
    state.videos = videos
  },

  SET_VIDEO(state, video) {
    state.video = video
  },
}

export const actions = {
  // call articles
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

  // call videos
  getVideos({ commit }) {
    Videos.all().then((response) => {
      commit('SET_VIDEOS', response.data)
    })
  },

  getVideo({ commit }, id) {
    Videos.show(id).then((response) => {
      commit('SET_VIDEO', response.data)
    })
  },
}
