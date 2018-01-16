import axios from '~/plugins/axios'

export const state = () => ({
  items: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const actions = {
  async FETCH_ITEMS({commit}, urlData) {
    const response = await axios.get(urlData)
    const ids = response.data
    const twentyIds = ids.slice(0, 20)

    const itemsPromises = twentyIds.map(id => axios.get(`item/${id}.json`))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data)

    const realItems = items.map(
      item =>
        item
          ? item
          : {
              title: 'Failed to load',
              id: 0
            }
    )

    commit('setItems', realItems)
  }
}
