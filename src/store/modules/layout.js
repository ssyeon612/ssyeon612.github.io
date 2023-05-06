export const state = {
    modalAlertComponents: [],
};

export const getters = {
    getModalAlertComponents: (state) => {
        return state.modalAlertComponents;
    },
};
export const mutations = {
    setModalAlertComponents(state, { modalAlertComponents }) {
        state.modalAlertComponents = modalAlertComponents;
    },
};
export const actions = {
    pushModalAlertComponent({ state, commit }, payload) {
        state.modalAlertComponents.push(payload);
        commit("setModalAlertComponents", {
            modalAlertComponents: state.modalAlertComponents,
        });
    },
    removeAllModalAlertComponent({ commit }) {
        commit("setModalAlertComponents", {
            modalAlertComponents: [],
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
