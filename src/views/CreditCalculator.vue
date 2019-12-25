<template>
	<div class="credit__calculator container">
		<div class="credit__calculator__title">Розрахуйте свої умови кредитування</div>
		<div class="credit__calculator__action__container">
			<div class="credit__calculator__action__container__options">
				<div class="credit__calculator__action__container__amount">
					<div class="credit__calculator__action__container__amount__title">Сума покупки</div>
					<div class="credit__calculator__action__container__amount__field">
						<input 
							type="text"
							v-model="amount"
							@input="handleSetAmount"
							:min="minAmount"
							:max="maxAmount"
							@blur="handleCheckAmount"
						>
						<div class="credit__calculator__action__container__amount__field__currency">грн</div>
					</div>
					<div class="credit__calculator__action__container__amount__range">
						<div class="credit__calculator__action__container__amount__range__input">
							<input 
								v-model="amountRange"
								type="range"
								:min="minAmount"
								:max="maxAmount"
								step="1"
							>
							<div 
								class="credit__calculator__action__container__amount__range__input__progress"
								v-bind:style="{
									width: (amountRange - minAmount) > 0 ? (((amountRange - minAmount) * 100) / (maxAmount - minAmount)) + '%' : '0%'
								}"
							/>
						</div>
						<div class="credit__calculator__action__container__amount__range__limits">
							<div class="credit__calculator__action__container__amount__range__limits__min">5 тис.</div>
							<div class="credit__calculator__action__container__amount__range__limits__max">50 тис.</div>
						</div>
					</div>
				</div>
				<div class="credit__calculator__action__container__payments__number">
					<div class="credit__calculator__action__container__payments__number__title">Кількість платежів</div>
					<div class="credit__calculator__action__container__payments__number__list">
						<div 
							class="credit__calculator__action__container__payments__number__list__item" 
							@click="setPaymentsNumber(6)"
							v-bind:class="{ active: paymentsNumber === 6 }"
						>
							<span>6</span>
						</div>
						<div 
							class="credit__calculator__action__container__payments__number__list__item" 
							@click="setPaymentsNumber(12)"
							v-bind:class="{ active: paymentsNumber === 12 }"
						>
							<span>12</span>
						</div>
						<div 
							class="credit__calculator__action__container__payments__number__list__item" 
							@click="setPaymentsNumber(24)"
							v-bind:class="{ active: paymentsNumber === 24 }"
						>
							<span>24</span>
						</div>
					</div>
				</div>
			</div>
			<div class="credit__calculator__action__container__result">
				<div class="credit__calculator__action__container__result__title">Щомісячний платіж</div>
				<div class="credit__calculator__action__container__result__payment">
					<div class="credit__calculator__action__container__result__payment__value">
						{{ monthlyPayment.mainPart }}<span>{{ monthlyPayment.pennyPart }}</span>
					</div>
					<div class="credit__calculator__action__container__result__payment__currency">грн</div>
				</div>
				<div class="credit__calculator__action__container__result__action primary__btn">
					<span>Замовити</span>
				</div>
			</div>
		</div>
	</div>
</template>

 

<script lang="ts">


import { mapGetters, mapActions } from 'vuex';
import Vue, { VNode } from 'vue';

export default Vue.extend({
	data() {
		return {
			minAmount: this.$store.state.creditCalculator.minAmount,
			maxAmount: this.$store.state.creditCalculator.maxAmount,
		}
	},
	computed: {
		amount: {
			get() {
				return this.$store.getters['creditCalculator/getFormatAmount']
			},
			set(value) {
				this.setAmount(value);
			}
		},
		amountRange: {
			get() {
				return +this.$store.state.creditCalculator.amount
			},
			set(value) {
				this.setAmount(value)
			}
		},
		paymentsNumber: {
			get() {
				return +this.$store.state.creditCalculator.paymentsNumber
			},
			set(value) {
				this.setPaymentsNumber(value);
			}
		},
		monthlyPayment: {
			get() {
				return this.$store.getters['creditCalculator/getFormatMonthlyPayment']
			},
			set(value) {
				this.setMonthlyPayment(value)
			}
		}
	},
	methods: {
		...mapActions({
			setAmount: 'creditCalculator/setAmount', 
			setPaymentsNumber: 'creditCalculator/setPaymentsNumber',
			setMonthlyPayment: 'creditCalculator/setMonthlyPayment'
		}),
		handleSetAmount(e: Event) { 
			const target = e.target as HTMLInputElement;
			if (target) {
				const value = +target.value.replace(' ', '');
				if ( /^\d+$/.test(value.toString()) ) {
					if (value !== undefined && value >= this.minAmount && value <= this.maxAmount) {
						this.setAmount(value);
					} else {
						if (value >= this.maxAmount) {
							this.setAmount(this.maxAmount);
						} else {
							this.setAmount(value);
						}
					}
				} else {
					this.setAmount(this.minAmount)
				}
			}
		},
		handleCheckAmount() {
			if (this.amount <= this.minAmount) {
				this.setAmount(this.minAmount)
			} else if (this.amount >= this.maxAmount){
				this.setAmount(this.maxAmount);
			}
		}
	}
})


</script>