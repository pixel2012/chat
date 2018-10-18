import Vue from 'vue'
import Vuex from 'vuex'

import mainStore from './state_modules/main'
import sessionStore from './state_modules/session';
import groupStore from './state_modules/group';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    mainStore,
    sessionStore,
    groupStore
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})
