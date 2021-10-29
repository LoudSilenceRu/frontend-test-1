const state = {
    products: []
}
const getters = {
    getProducts(state) {
        return state.products
    }
}
const actions = {
    addProduct({ commit }, form) {
        commit('SET_PRODUCT', form);
    },
    deleteProduct({ commit }, id) {
        commit('DELETE_PRODUCT', id);
    }
}
const mutations = {
    SET_PRODUCT(state, product) {
        state.products.push(JSON.parse(JSON.stringify(product)));
    },
    DELETE_PRODUCT(state, id) {
        let filter = state.products.filter(item => {
            return item.id.value == id
        })[0]
        let index = state.products.indexOf(filter)
    
        state.products.splice(index, 1);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}