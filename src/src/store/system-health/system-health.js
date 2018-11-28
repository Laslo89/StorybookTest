import mutationTypes from './mutation-types'

export default {
  // TODO: Should we namespace our mutations?
  // namespaced: true,
  state: {
    up: 0,
    paused: 0,
    down: 0,
  },
  mutations: {
    [mutationTypes.UP_CHANGED](state, value) {
      state.up = value
    },
    [mutationTypes.DOWN_CHANGED](state, value) {
      state.down = value
    },
    [mutationTypes.PAUSED_CHANGED](state, value) {
      state.paused = value
    },
  },
}
