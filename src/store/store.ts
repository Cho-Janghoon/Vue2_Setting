import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    /** 상태값 정의 */
    state: {},
    /** 여기서만 상태 변경 가능 */
    mutations: {},
    /** methods랑 비슷 */
    actions: {},
    /** computed랑 비슷 */
    getters: {}
});
