import apiUrl from './apis'

const endPoint = 'videos'

export default {
  all() {
    return apiUrl.get(endPoint)
  },

  show(id) {
    return apiUrl(`${endPoint}/${id}`)
  },
}
