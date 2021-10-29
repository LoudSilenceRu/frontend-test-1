import Vue from 'vue';
import Vuex from "vuex";
import product from './modules/product'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    modules: {
        product
    }
})