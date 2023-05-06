export const state = {
    modalAlertComponents: [],
};

export const getters = {
    getModalComponents: (state) => {
        return state.modalAlertComponents;
    },
};
export const mutations = {
    setModalComponents(state, { modalComponents }) {
        state.modalAlertComponents = modalComponents;
    },
};
export const actions = {
    pushModalComponents({ state, commit }, payload) {
        state.modalAlertComponents.push(payload);
        commit("setModalComponents", {
            modalAlertComponents: state.setModalComponents,
        });
    },
    removeModalComponents({commit}) {
      commit('setModalComponents', {
       modalAlertComponents : []
      })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
