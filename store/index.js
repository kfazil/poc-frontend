export const state = () => ({
    optionsData: null
})

export const mutations = {
    SET_OPTIONS_DATA(state, optionsData) {
        state.optionsData = optionsData
    }
}