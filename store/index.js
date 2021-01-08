export const state = () => ({
  articles: [],
  videos: [],
  podcasts: [],
})

export const actions = {
  async letArticles({ commit }) {
    // response pages
    const articlesPage = await this.$axios.get('/articles')
    const videoPage = await this.$axios.get('/videos')

    // variable page
    const videos = videoPage.data
    const articles = articlesPage.data

    // mutation page
    commit('SET_videos', videos)
    commit('SET_Articles', articles)
  },
}

export const mutations = {
  SET_Articles(state, articles) {
    state.articles = articles
  },

  SET_Videos(state, videos) {
    state.videos = videos
  },
}

export const getters = {
  items: (state) => {
    return state.articles
  },

  videos: (state) => {
    return state.videos
  },
}
