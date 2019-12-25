import Vue from 'vue';
import Vuex from 'vuex';
import HeaderModule from './modules/HeaderModule';
import CreditCalculatorModule from './modules/CreditCalculatorModule';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentLang: 'ukr',
		langs: ['ukr', 'eng', 'rus']
	},
	mutations: {
	}, 
	actions: {
	},
	getters: {
		getAvailableLangs: (state: any) => state.langs.filter((lang: string) => lang !== state.currentLang)
	},
	modules: {
		header: HeaderModule,
		creditCalculator: CreditCalculatorModule
	},
});
