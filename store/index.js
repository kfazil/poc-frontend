export const state = () => ({
    optionsData: []
})

export const mutations = {
    SET_OPTIONS_DATA(state, optionsData) {
        state.optionsData = optionsData
    }
}