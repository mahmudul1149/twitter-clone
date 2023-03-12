import firebase from "firebase/compat/app";
export const state = () => ({
  user: [],
});

export const getters = {
  isUserAuth(state) {
    return !state.user;
  },
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
    localStorage.setItem("userDetails", JSON.stringify(state.user));
  },
  initializeStore(state) {
    if (localStorage.getItem("userDetails")) {
      state.user = JSON.parse(localStorage.getItem("userDetails"));
    } else {
      localStorage.setItem("userDetails", JSON.stringify(state.user));
    }
  },
};

export const actions = {
  authAction({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },
};
