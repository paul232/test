export default {
	namespaced: true,
	state: {
		amount: 10,
		paymentsNumber: 6,
		minAmount: 5000,
		maxAmount: 50000
	}, 
	mutations: {
		SET_AMOUNT(state: any, amount: number) {
			state.amount = amount;
		},
		SET_PAYMENTS_NUMBER(state: any, paymentsNumber: number) {
			state.paymentsNumber = paymentsNumber;
		}
	},
	actions: {
		setAmount({commit}: any, amount: number) {
			commit('SET_AMOUNT', amount);
		},
		setPaymentsNumber({commit}: any, paymentsNumber: number) {
			commit('SET_PAYMENTS_NUMBER', paymentsNumber);
		}
	},
	getters: {
	}
}