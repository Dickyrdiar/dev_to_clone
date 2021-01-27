import apiUrl from './apis'

const end_Point = 'articles'

export default {
  all() {
    return apiUrl.get(end_Point)
  },

  show(id) {
    return apiUrl.get(`${end_Point}/${id}`)
  },
}
