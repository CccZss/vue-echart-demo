import Vue from 'vue'
import Vuex from 'vuex'


import user from './modules/user'
import visual from './modules/visual'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		visual
	}
})