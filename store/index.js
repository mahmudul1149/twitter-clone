import "firebase/compat/app";
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
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  async signup({ commit }, { email, password, userName }) {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, userName);

      await user.updateProfile({
        displayName: userName,
      });

      commit("SET_USER", user);
    } catch (error) {
      commit("RESET_USER");
      console.error(error);
      throw error;
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit("SET_USER", user);
    } catch (error) {
      commit("RESET_USER");
      console.error(error);
      throw error;
    }
  },
  async logout({ commit }) {
    try {
      await firebase.auth().signOut();
      commit("SET_USER", null);
    } catch (error) {
      console.log(error);
    }
  },
};
