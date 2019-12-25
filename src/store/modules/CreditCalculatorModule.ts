export default {
	namespaced: true,
	state: {
		amount: 5000,
		paymentsNumber: 6,
		minAmount: 5000,
		maxAmount: 50000,
		monthlyPayment: 850
	}, 
	mutations: {
		SET_AMOUNT(state: any, amount: number) {
			state.amount = amount;
			let monthlyPaymentWithoutPercent = +(state.amount / state.paymentsNumber).toFixed(2);
			state.monthlyPayment = +(monthlyPaymentWithoutPercent + monthlyPaymentWithoutPercent * 2 / 100).toFixed(2)
		},
		SET_PAYMENTS_NUMBER(state: any, paymentsNumber: number) {
			state.paymentsNumber = paymentsNumber;
			let monthlyPaymentWithoutPercent = +(state.amount / state.paymentsNumber).toFixed(2);
			state.monthlyPayment = +(monthlyPaymentWithoutPercent + monthlyPaymentWithoutPercent * 2 / 100).toFixed(2)
		},
		SET_MONTHLY_PAYMENT(state: any, monthlyPayment: number) {
			state.monthlyPayment = monthlyPayment
		}
	},
	actions: {
		setAmount({commit}: any, amount: number) {
			commit('SET_AMOUNT', amount);
		},
		setPaymentsNumber({commit}: any, paymentsNumber: number) {
			commit('SET_PAYMENTS_NUMBER', paymentsNumber);
		},
		setMonthlyPayment({commit}: any, monthlyPayment: number) {
			commit('SET_MONTHLY_PAYMENT', monthlyPayment);
		}
	},
	getters: {
		getFormatAmount: (state: any) => state.amount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '),
		getFormatMonthlyPayment: (state: any) => {
			return {
				mainPart: state.monthlyPayment.toString().split('.')[0],
				pennyPart: +state.monthlyPayment.toString().split('.')[1] ? `.${state.monthlyPayment.toString().split('.')[1]}` : ''
			}
		}
	}
}