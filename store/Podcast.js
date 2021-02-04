import apiUrl from './apis'

const endpoint = 'podcast_episodes'

export default {
  all() {
    return apiUrl.get(endpoint)
  },

  show(id) {
    return apiUrl.get(`${endpoint}/${id}`)
  },
}
