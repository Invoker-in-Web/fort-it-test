export const state = () => ({
 isSidebarVisible: true,
})

export const mutations = {
    setSidebarVisibility(state) {
        state.isSidebarVisible = !state.isSidebarVisible
    }
}

export const actions = {
    changeSidebarVisibility({commit}) {
        commit('setSidebarVisibility')
    }
}

export const getters = {
    isSidebarVisible: s => s.isSidebarVisible
}