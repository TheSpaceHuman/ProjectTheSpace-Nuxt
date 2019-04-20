import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    mainNavItems: [
      { title: 'Home', link: { name: 'index' }, icon: 'home', key: '1' },
      { title: 'Blog', link: { name: 'blog' }, icon: 'book', key: '2' },
      { title: 'Projects', link: { name: 'projects' }, icon: 'project', key: '3' },
      { title: 'Login', link: { name: 'login' }, icon: 'login', key: '4' }
    ],
    counter: 0,
    cardsAdvantages: [
      { title: 'HTML5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' },
      { title: 'CSS3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' },
      { title: 'JavaScript', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  // store.dispatch('increment');
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    }
  },
  getters: {
    getMainLinks: (state) => {
      return state.mainNavItems
    },
    getCardsAdvantages: (state) => {
      return state.cardsAdvantages
    }
  }
})

export default store
